import type { APIRoute } from "astro";

export const prerender = false;

const projectTypes = [
  "Landing page",
  "Ecommerce / tienda online",
  "Sistema web a medida",
  "Rediseño de web existente",
  "Otro",
];

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Datos inválidos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const projectType =
    typeof body.projectType === "string" ? body.projectType.trim() : "";
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Completa los campos obligatorios" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return new Response(
      JSON.stringify({ error: "Alguno de los campos excede el límite" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: "El email no es válido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const payload = {
    name,
    email,
    projectType: projectTypes.includes(projectType) ? projectType : "Otro",
    budget,
    message,
  };

  console.info("[contact]", JSON.stringify(payload));

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};