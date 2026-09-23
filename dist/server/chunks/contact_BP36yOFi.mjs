import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var projectTypes = [
	"Landing page",
	"Ecommerce / tienda online",
	"Sistema web a medida",
	"Rediseño de web existente",
	"Otro"
];
var POST = async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Datos inválidos" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
	const name = typeof body.name === "string" ? body.name.trim() : "";
	const email = typeof body.email === "string" ? body.email.trim() : "";
	const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
	const message = typeof body.message === "string" ? body.message.trim() : "";
	if (!name || !email || !message) return new Response(JSON.stringify({ error: "Completa los campos obligatorios" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	if (name.length > 120 || email.length > 254 || message.length > 5e3) return new Response(JSON.stringify({ error: "Alguno de los campos excede el límite" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({ error: "El email no es válido" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const payload = {
		name,
		email,
		projectType: projectTypes.includes(projectType) ? projectType : "Otro",
		message
	};
	console.info("[contact]", JSON.stringify(payload));
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
