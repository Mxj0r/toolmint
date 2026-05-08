import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PDF_CO_BASE = "https://api.pdf.co/v1";
const PDF_CO_KEY = Deno.env.get("PDF_CO_KEY") ?? "";

interface PDFRequest {
  action: "merge" | "split" | "compress" | "tojpg" | "extract-text" | "add-password" | "rotate";
  urls?: string[];       // PDF URLs for merge
  url?: string;          // single PDF URL
  name?: string;         // output filename
  ranges?: string[];     // for split: page ranges like "1-3"
  quality?: number;      // for compress: 1-100
  pages?: number[];      // specific pages
  degrees?: number;      // rotation degrees: 90, 180, 270
  password?: string;     // for add-password
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body: PDFRequest = await req.json();
    const { action } = body;

    if (!action) {
      return new Response(JSON.stringify({ error: "action is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const headers = {
      "x-api-key": PDF_CO_KEY,
      "Content-Type": "application/json",
    };

    let endpoint = "";
    let payload: Record<string, unknown> = {};

    switch (action) {
      case "merge": {
        if (!body.urls?.length) {
          return new Response(JSON.stringify({ error: "urls (array) required for merge" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/merge`;
        payload = { url: body.urls.join(","), name: body.name ?? "merged.pdf" };
        break;
      }
      case "compress": {
        if (!body.url) {
          return new Response(JSON.stringify({ error: "url required for compress" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/compress`;
        payload = {
          url: body.url,
          quality: body.quality ?? 80,
          compressionLevel: body.quality ? Math.round(body.quality / 10) : 8,
        };
        break;
      }
      case "split": {
        if (!body.url || !body.ranges?.length) {
          return new Response(JSON.stringify({ error: "url and ranges required for split" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/split`;
        payload = { url: body.url, pages: body.ranges.join(",") };
        break;
      }
      case "tojpg": {
        if (!body.url) {
          return new Response(JSON.stringify({ error: "url required for tojpg" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/tojpg`;
        payload = { url: body.url };
        break;
      }
      case "extract-text": {
        if (!body.url) {
          return new Response(JSON.stringify({ error: "url required for extract-text" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/convert/to/text`;
        payload = { url: body.url, inline: true };
        break;
      }
      case "add-password": {
        if (!body.url || !body.password) {
          return new Response(JSON.stringify({ error: "url and password required for add-password" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        endpoint = `${PDF_CO_BASE}/pdf/security`;
        payload = { url: body.url, encrypt: true, password: body.password };
        break;
      }
      case "rotate": {
        if (!body.url || !body.degrees) {
          return new Response(JSON.stringify({ error: "url and degrees required for rotate" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        // Rotation via pdf/edit endpoint with angle parameter
        endpoint = `${PDF_CO_BASE}/pdf/edit`;
        const rotateMap: Record<number, number> = { 90: 1, 180: 2, 270: 3 };
        payload = { url: body.url, angle: rotateMap[body.degrees] ?? 1, pages: body.pages ? body.pages.join(",") : "" };
        break;
      }
      default:
        return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    // Demo mode when no API key is set
    if (!PDF_CO_KEY) {
      const demos: Record<string, unknown> = {
        merge: { url: "https://pdf.co/demo/merged.pdf", name: "merged.pdf", pages: 2 },
        compress: { url: "https://pdf.co/demo/compressed.pdf", name: "compressed.pdf", size: "1.2MB" },
        split: { url: "https://pdf.co/demo/split.pdf", name: "split.pdf", pages: 1 },
        tojpg: { url: "https://pdf.co/demo/page.jpg", name: "page.jpg", pages: 1 },
        "extract-text": { text: "Sample extracted text from PDF content.\n\nThis is a demonstration of the PDF text extraction feature. Configure your PDF.co API key for live results.", pages: 1 },
        "add-password": { url: "https://pdf.co/demo/protected.pdf", name: "protected.pdf" },
        rotate: { url: "https://pdf.co/demo/rotated.pdf", name: "rotated.pdf" },
      };
      return new Response(JSON.stringify(demos[action] ?? { error: "unknown" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(`PDF.co error ${res.status}:`, JSON.stringify(data));
      return new Response(JSON.stringify({
        error: data.message ?? `PDF.co error ${res.status}`,
        detail: data
      }), {
        status: res.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("PDF function error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});