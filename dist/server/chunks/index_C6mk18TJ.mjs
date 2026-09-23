import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { C as createAstro, d as maybeRenderHead, f as renderHead, h as createRenderInstruction, i as renderComponent, m as defineScriptVars, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_wbZStl9p.mjs";
import { t as createComponent } from "./compiler_B6lqsDu1.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "aurova software — Agencia de desarrollo web", description = "Landings, ecommerce y sistemas web a medida. Diseño moderno, código limpio y resultados medibles." } = Astro.props;
	const navLinks = [
		{
			href: "#servicios",
			label: "Servicios"
		},
		{
			href: "#precios",
			label: "Precios"
		},
		{
			href: "#proceso",
			label: "Proceso"
		},
		{
			href: "#proyectos",
			label: "Proyectos"
		},
		{
			href: "#opiniones",
			label: "Opiniones"
		}
	];
	return renderTemplate`<html lang="es" class="scroll-smooth"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead($$result)}</head><body class="bg-ink-50 text-ink-900 antialiased"><header class="fixed inset-x-0 top-0 z-50"><div class="mx-auto max-w-6xl px-5 sm:px-8"><nav id="nav" class="mt-4 flex items-center justify-between rounded-2xl border border-ink-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 sm:px-5"><a href="#inicio" class="flex items-center gap-2.5" aria-label="aurova software"><img src="/logo.svg" alt="" width="32" height="32" class="h-8 w-8"><span class="font-display text-lg font-semibold tracking-tight text-ink-900">aurova<span class="text-brand-600">.</span></span></a><ul class="hidden items-center gap-8 md:flex">${navLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950">${link.label}</a></li>`)}</ul><div class="flex items-center gap-3"><a href="#contacto" class="hidden rounded-xl bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex">Hablemos</a><button id="menu-btn" class="inline-flex items-center justify-center rounded-xl border border-ink-200 p-2 text-ink-700 md:hidden" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button></div></nav><div id="mobile-menu" class="mt-2 hidden rounded-2xl border border-ink-200/70 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-950" data-mobile-link>${link.label}</a>`)}<a href="#contacto" data-mobile-link class="mt-1 block rounded-xl bg-ink-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600">Hablemos</a></div></div></header><main class="relative">${renderSlot($$result, $$slots["default"])}</main><footer class="border-t border-ink-200/70 bg-white"><div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8"><div class="flex items-center gap-2.5"><img src="/logo.svg" alt="" width="24" height="24" class="h-6 w-6"><span class="font-display text-sm font-semibold text-ink-900">aurova<span class="text-brand-600">.</span></span></div><p class="text-sm text-ink-500">© ${(/* @__PURE__ */ new Date()).getFullYear()} aurova software. Todos los derechos reservados.</p><div class="flex gap-5"><a href="#inicio" class="text-sm text-ink-500 transition-colors hover:text-ink-950">Inicio</a><a href="#contacto" class="text-sm text-ink-500 transition-colors hover:text-ink-950">Contacto</a></div></div></footer>${renderScript($$result, "/home/nico/Escritorio/webs/aurova/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/nico/Escritorio/webs/aurova/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/sections/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="inicio" class="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"><div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true"><div class="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-100 to-transparent blur-3xl"></div><div class="absolute top-20 right-0 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"></div><div class="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl"></div></div><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="mx-auto max-w-3xl text-center"><p class="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur"><span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>Agencia de desarrollo web</p><h1 class="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-6xl" style="animation-delay: 80ms">Creamos webs que<span class="relative whitespace-nowrap text-brand-600">convierten<svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true"><path d="M2 9C60 3 140 3 198 9" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="text-brand-200"></path></svg></span><br>tu idea en negocio</h1><p class="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-ink-600" style="animation-delay: 160ms">Diseñamos y desarrollamos landings, tiendas online y sistemas web a medida. Código limpio, diseño moderno y un rendimiento que marca la diferencia.</p><div class="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style="animation-delay: 240ms"><a href="#contacto" class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-950 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 sm:w-auto">Empieza tu proyecto<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a><a href="#servicios" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-300 hover:bg-ink-50 sm:w-auto">Ver servicios</a></div><dl class="animate-fade-up mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-ink-200/70 pt-8" style="animation-delay: 320ms">${[
		{
			value: "60+",
			label: "Proyectos entregados"
		},
		{
			value: "40+",
			label: "Clientes activos"
		},
		{
			value: "6 años",
			label: "De experiencia"
		}
	].map((stat) => renderTemplate`<div class="text-center"><dt class="order-last mt-1 text-xs font-medium uppercase tracking-wide text-ink-500 sm:text-sm">${stat.label}</dt><dd class="font-display text-2xl font-bold text-ink-950 sm:text-3xl">${stat.value}</dd></div>`)}</dl></div></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Hero.astro", void 0);
//#endregion
//#region src/sections/Services.astro
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const services = [
		{
			title: "Landing pages",
			description: "Páginas de alto impacto que convierten visitas en clientes. Copys claros, diseño cuidado y carga ultrarrápida.",
			icon: "rocket",
			tags: [
				"Diseño a medida",
				"SEO",
				"Alta conversión"
			]
		},
		{
			title: "Ecommerce",
			description: "Tiendas online completas y escalables: catálogo, pagos, logística y análisis. Vendé sin fricciones.",
			icon: "cart",
			tags: [
				"Pasarelas de pago",
				"Catálogo",
				"Escalable"
			]
		},
		{
			title: "Sistemas web",
			description: "Aplicaciones y portales a medida que automatizan procesos: dashboards, CRMs, intranets y más.",
			icon: "code",
			tags: [
				"A medida",
				"API y datos",
				"Integraciones"
			]
		}
	];
	const icons = {
		rocket: "M13 2L3 14h7l-1 8 10-12h-7l1-8z",
		cart: "M3 3h2l1 14a2 2 0 0 0 2 1.8h9a2 2 0 0 0 2-1.8L21 7H6M16 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
		code: "M8 6l-6 6 6 6M16 6l6 6-6 6"
	};
	return renderTemplate`${maybeRenderHead($$result)}<section id="servicios" class="scroll-mt-24 py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Qué hacemos</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Soluciones web, de principio a fin</h2><p class="mt-4 text-lg text-ink-600">Cada proyecto es único. Por eso lo tratamos como un producto propio: estrategia, diseño y desarrollo trabajando en conjunto.</p></div><div class="mt-14 grid gap-6 md:grid-cols-3">${services.map((service, i) => renderTemplate`<article class="group relative flex flex-col rounded-3xl border border-ink-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"><span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path${addAttribute(icons[service.icon], "d")}></path></svg></span><h3 class="mt-6 font-display text-xl font-semibold text-ink-950">${service.title}</h3><p class="mt-3 text-sm leading-relaxed text-ink-600">${service.description}</p><ul class="mt-6 flex flex-wrap gap-2">${service.tags.map((tag) => renderTemplate`<li class="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-100">${tag}</li>`)}</ul><span class="pointer-events-none absolute inset-x-7 bottom-6 hidden -z-10 h-24 rounded-full bg-brand-100/60 blur-2xl transition-opacity group-hover:opacity-100 opacity-0 md:block" aria-hidden="true"></span></article>`)}</div></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Services.astro", void 0);
//#endregion
//#region src/sections/Pricing.astro
var $$Pricing = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="precios" class="scroll-mt-24 bg-white py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="mx-auto max-w-2xl text-center"><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Precios</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Planes claros, sin letra pequeña</h2><p class="mt-4 text-lg text-ink-600">Precios de contado en pesos argentinos. Pagás solo lo que contratás, con hosting y dominio incluidos el primer año.</p></div><div class="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">${[
		{
			name: "Landing pages",
			price: "150.000",
			currency: "ARS",
			billedAs: "Incluye todo, sin sorpresas",
			featured: true,
			cta: "Quiero mi landing",
			features: [
				"Hosting por 1 año incluido",
				"Dominio por 1 año incluido",
				"SEO básico incluido",
				"Diseño a medida",
				"100% responsive",
				"Entrega en ~15 días"
			]
		},
		{
			name: "Ecommerce",
			price: "A medida",
			currency: "",
			billedAs: "Presupuesto según tu negocio",
			featured: false,
			cta: "Consultar precio",
			features: [
				"Tienda completa y escalable",
				"Pasarelas de pago",
				"Logística y envíos",
				"Panel de gestión",
				"Formación incluida"
			]
		},
		{
			name: "Sistemas web",
			price: "A medida",
			currency: "",
			billedAs: "Presupuesto según tu proyecto",
			featured: false,
			cta: "Consultar precio",
			features: [
				"Desarrollo 100% a medida",
				"Dashboards y CRMs",
				"Integraciones con APIs",
				"Base de datos y seguridad",
				"Soporte y mantenimiento"
			]
		}
	].map((plan) => renderTemplate`<article${addAttribute(`relative flex flex-col rounded-3xl p-8 ${plan.featured ? "border-2 border-brand-600 bg-gradient-to-b from-brand-50 to-white shadow-glow" : "border border-ink-200/70 bg-white shadow-sm"}`, "class")}>${plan.featured && renderTemplate`<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">Más elegido</span>`}<h3 class="font-display text-lg font-semibold text-ink-950">${plan.name}</h3><div class="mt-5 flex items-baseline gap-2"><span${addAttribute(`font-display text-4xl font-bold tracking-tight ${plan.featured ? "text-brand-600" : "text-ink-950"}`, "class")}>${plan.price}</span>${plan.currency && renderTemplate`<span class="text-sm font-medium text-ink-500">ARS</span>`}</div><p class="mt-1 text-sm text-ink-500">${plan.billedAs}</p><ul class="mt-7 flex-1 space-y-3">${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-sm text-ink-700"><svg${addAttribute(`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-brand-600" : "text-emerald-600"}`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>${feature}</li>`)}</ul><a href="#contacto"${addAttribute(`mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-colors ${plan.featured ? "bg-ink-950 text-white hover:bg-brand-600" : "border border-ink-200 bg-white text-ink-800 hover:border-ink-300 hover:bg-ink-50"}`, "class")}>${plan.cta}</a></article>`)}</div><p class="mx-auto mt-10 max-w-xl text-center text-sm text-ink-500">Todos los planes incluyen soporte y ajustes menores después del lanzamiento. ¿Dudas? <a href="#contacto" class="font-semibold text-brand-600 hover:text-brand-700">Escribinos</a> y te asesoramos sin cargo.</p></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Pricing.astro", void 0);
//#endregion
//#region src/sections/Process.astro
var $$Process = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="proceso" class="scroll-mt-24 bg-white py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Cómo trabajamos</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Un proceso simple y transparente</h2></div><p class="max-w-sm text-ink-600">Sin letra pequeña: presupuesto cerrado, plazos claros y comunicación directa durante todo el proyecto.</p></div><ol class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${[
		{
			number: "01",
			title: "Escuchamos",
			description: "Una llamada corta para entender tu negocio, tus objetivos y qué necesitas lograr."
		},
		{
			number: "02",
			title: "Diseñamos",
			description: "Definimos estructura, contenido y una propuesta visual coherente con tu marca."
		},
		{
			number: "03",
			title: "Desarrollamos",
			description: "Escribimos código limpio, rápido y accesible, con entregas semanales visibles."
		},
		{
			number: "04",
			title: "Lanzamos",
			description: "Publicamos, medimos y optimizamos. Y seguimos a tu lado para crecer contigo."
		}
	].map((step) => renderTemplate`<li class="relative rounded-3xl border border-ink-200/70 bg-ink-50/60 p-7"><span class="font-display text-4xl font-bold text-brand-200">${step.number}</span><h3 class="mt-4 font-display text-lg font-semibold text-ink-950">${step.title}</h3><p class="mt-2 text-sm leading-relaxed text-ink-600">${step.description}</p></li>`)}</ol></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Process.astro", void 0);
//#endregion
//#region src/sections/Portfolio.astro
var $$Portfolio = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="proyectos" class="scroll-mt-24 py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Proyectos</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Resultados que hablan por sí solos</h2></div><div class="mt-14 grid gap-6 md:grid-cols-3">${[
		{
			name: "Nómada Ediciones",
			type: "Landing page",
			result: "+38% de solicitudes",
			gradient: "from-brand-400 via-brand-600 to-ink-900",
			pattern: "A"
		},
		{
			name: "Botánica Store",
			type: "Ecommerce",
			result: "2.4× en facturación",
			gradient: "from-emerald-300 via-brand-500 to-brand-800",
			pattern: "B"
		},
		{
			name: "Contabilidad Clara",
			type: "Sistema web",
			result: "−12h / semana",
			gradient: "from-brand-200 via-brand-500 to-ink-700",
			pattern: "C"
		}
	].map((project) => renderTemplate`<article class="group overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"><div${addAttribute(`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.gradient}`, "class")}><div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgb(255_255_255/0.35),transparent_45%)]"></div><div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div><span class="absolute bottom-4 left-4 font-display text-lg font-semibold text-white/90">${project.pattern}</span></div><div class="p-6"><p class="text-xs font-semibold uppercase tracking-wide text-brand-600">${project.type}</p><h3 class="mt-2 font-display text-lg font-semibold text-ink-950">${project.name}</h3><div class="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100"><svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.1V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14l-3-3"></path></svg>${project.result}</div></div></article>`)}</div></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Portfolio.astro", void 0);
//#endregion
//#region src/sections/Testimonials.astro
var $$Testimonials = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="opiniones" class="scroll-mt-24 bg-white py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Opiniones</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Lo que dicen nuestros clientes</h2></div><div class="mt-14 grid gap-6 md:grid-cols-3">${[
		{
			quote: "La landing superó nuestras expectativas. En tres semanas ya estábamos recibiendo solicitudes de forma constante.",
			name: "Lucía Fernández",
			role: "CEO · Nómada Ediciones",
			initials: "LF"
		},
		{
			quote: "El ecommerce fue un antes y un después para la marca. Atención impecable y una tienda rapidísima.",
			name: "Marcos Gutiérrez",
			role: "Fundador · Botánica Store",
			initials: "MG"
		},
		{
			quote: "Automatizaron procesos que nos quitaban horas cada semana. El mejor equipo con el que hemos trabajado.",
			name: "Andrea Ruiz",
			role: "Directora · Contabilidad Clara",
			initials: "AR"
		}
	].map((t) => renderTemplate`<figure class="flex flex-col rounded-3xl border border-ink-200/70 bg-ink-50/60 p-7"><div class="flex gap-1 text-brand-500" aria-label="5 de 5 estrellas">${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(i, "key")} class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.6 1.4-6.8L2.2 9.1l6.9-.8L12 2z"></path></svg>`)}</div><blockquote class="mt-5 flex-1 text-sm leading-relaxed text-ink-700">“${t.quote}”</blockquote><figcaption class="mt-6 flex items-center gap-3 border-t border-ink-200/70 pt-5"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">${t.initials}</span><div><p class="text-sm font-semibold text-ink-950">${t.name}</p><p class="text-xs text-ink-500">${t.role}</p></div></figcaption></figure>`)}</div></div></section>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Testimonials.astro", void 0);
//#endregion
//#region src/sections/Contact.astro
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="contacto" class="scroll-mt-24 py-20 sm:py-28"><div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="grid gap-12 lg:grid-cols-2 lg:items-start"><div><p class="text-sm font-semibold uppercase tracking-widest text-brand-600">Contacto</p><h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Cuéntanos tu idea</h2><p class="mt-4 max-w-md text-lg text-ink-600">Respondemos en menos de 24 horas laborables. Sin compromiso y con una propuesta clara para tu proyecto.</p><ul class="mt-10 space-y-5"><li class="flex items-start gap-4"><span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"></path><path d="M4 6l8 8 8-8"></path></svg></span><div><p class="font-semibold text-ink-950">Email</p><a href="mailto:hola@aurova.dev" class="text-sm text-ink-600 transition-colors hover:text-brand-600">hola@aurova.dev</a></div></li><li class="flex items-start gap-4"><span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span><div><p class="font-semibold text-ink-950">Dónde estamos</p><p class="text-sm text-ink-600">Remoto · atendemos clientes en todo el mundo</p></div></li><li class="flex items-start gap-4"><span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg></span><div><p class="font-semibold text-ink-950">Respuesta</p><p class="text-sm text-ink-600">En menos de 24 h laborables</p></div></li></ul></div><div class="rounded-3xl border border-ink-200/70 bg-white p-6 shadow-sm sm:p-8"><form id="contact-form" class="space-y-5" method="post" action="/api/contact" novalidate><div class="grid gap-5 sm:grid-cols-2"><div><label for="name" class="mb-1.5 block text-sm font-medium text-ink-800">Nombre</label><input id="name" name="name" type="text" required autocomplete="name" placeholder="Tu nombre" class="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"></div><div><label for="email" class="mb-1.5 block text-sm font-medium text-ink-800">Email</label><input id="email" name="email" type="email" required autocomplete="email" placeholder="tu@email.com" class="w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"></div></div><div><label for="project-type" class="mb-1.5 block text-sm font-medium text-ink-800">Tipo de proyecto</label><div class="relative"><select id="project-type" name="projectType" required class="w-full appearance-none rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 pr-10 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"><option value="" disabled selected>Selecciona uno</option><option>Landing page</option><option>Ecommerce / tienda online</option><option>Sistema web a medida</option><option>Rediseño de web existente</option><option>Otro</option></select><svg class="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></div></div><div><div class="mb-1.5 flex items-center justify-between"><label for="budget" class="text-sm font-medium text-ink-800">Presupuesto estimado</label><span id="budget-value" class="text-sm font-semibold text-brand-600">No lo tengo claro</span></div><input id="budget" name="budget" type="range" min="0" max="4" step="1" value="0" class="w-full accent-brand-600" aria-describedby="budget-value"></div><div><label for="message" class="mb-1.5 block text-sm font-medium text-ink-800">Mensaje</label><textarea id="message" name="message" rows="4" required placeholder="Cuéntanos sobre tu proyecto, objetivos y plazos…" class="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"></textarea></div><button type="submit" id="submit-btn" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"><span id="submit-label">Enviar mensaje</span><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg></button><p id="form-status" class="hidden rounded-xl px-4 py-3 text-sm font-medium" role="status" aria-live="polite"></p></form></div></div></div></section><script>(function(){${defineScriptVars({ budgets: [
		"No lo tengo claro",
		"€1k – €3k",
		"€3k – €6k",
		"€6k – €12k",
		"Más de €12k"
	] })}
  const form = document.getElementById("contact-form") as HTMLFormElement;
  const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
  const submitLabel = document.getElementById("submit-label") as HTMLSpanElement;
  const status = document.getElementById("form-status") as HTMLParagraphElement;
  const budget = document.getElementById("budget") as HTMLInputElement;
  const budgetValue = document.getElementById("budget-value") as HTMLSpanElement;

  budget?.addEventListener("input", () => {
    const value = budgets[Number(budget.value)] ?? "";
    if (budgetValue) budgetValue.textContent = value;
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    submitBtn.disabled = true;
    submitLabel.textContent = "Enviando…";
    status.className = "hidden";

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, budget: budgets[Number(budget?.value ?? 0)] }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error ?? "Error al enviar");

      submitBtn.disabled = true;
      submitLabel.textContent = "Enviado";
      status.className = "rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100";
      status.textContent = "¡Mensaje enviado! Te contactaremos en menos de 24 horas.";

      const hidden = document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea');
      (hidden as NodeListOf<HTMLInputElement>).forEach((el) => (el.disabled = true));
    } catch (error) {
      status.className = "rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-100";
      status.textContent = "Ups, algo salió mal. Escríbenos a hola@aurova.dev.";
      submitBtn.disabled = false;
    }
  });
})();<\/script>`;
}, "/home/nico/Escritorio/webs/aurova/src/sections/Contact.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Services", $$Services, {})}${renderComponent($$result, "Pricing", $$Pricing, {})}${renderComponent($$result, "Process", $$Process, {})}${renderComponent($$result, "Portfolio", $$Portfolio, {})}${renderComponent($$result, "Testimonials", $$Testimonials, {})}${renderComponent($$result, "Contact", $$Contact, {})}` })}`;
}, "/home/nico/Escritorio/webs/aurova/src/pages/index.astro", void 0);
var $$file = "/home/nico/Escritorio/webs/aurova/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
