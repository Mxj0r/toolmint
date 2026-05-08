import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AIRequest {
  prompt: string;
  model?: string;
  maxTokens?: number;
}

const GROQ_MODELS = ["llama-3.3-70b-versatile", "mixtral-8x7b-32768"];

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { prompt, model = "llama-3.3-70b-versatile", maxTokens = 512 }: AIRequest = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "prompt is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!GROQ_MODELS.includes(model)) {
      return new Response(JSON.stringify({ error: `Unsupported model. Use one of: ${GROQ_MODELS.join(", ")}` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const groqKey = Deno.env.get("GROQ_API_KEY") ?? "";

    // If no Groq key, fall back to a built-in prompt response for demo
    if (!groqKey) {
      console.warn("GROQ_API_KEY not set — using built-in response");
      return new Response(JSON.stringify({
        result: `This is a demo response since GROQ_API_KEY is not configured. Your prompt was: "${prompt.slice(0, 100)}..." Configure a Groq API key for live AI responses.`,
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        max_tokens: Math.min(maxTokens, 1024),
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable" }), {
        status: 503,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await groqRes.json();
    return new Response(JSON.stringify({
      result: (data.choices?.[0]?.message?.content ?? "").trim()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});