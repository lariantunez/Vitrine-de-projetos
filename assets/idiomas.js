// Idiomas da vitrine. O português está no próprio HTML (é lido de lá ao abrir a página);
// aqui ficam o inglês e o espanhol, pelas chaves data-i18n, data-i18n-alt e data-i18n-aria.
(() => {
  const TEXTOS = {
    en: {
      "pagina.titulo": "Larissa Antunez · Projects",
      "pagina.descricao": "Larissa Antunez's project showcase: sales dashboards, data modeling, automation and internal tools, each with a case study and a demo using fictional data.",
      "idioma": "Language",
      "tema": "Toggle theme",
      "nav.projetos": "Projects",
      "assinatura": "Analytics &amp; Development",
      "abertura.titulo": "Data that turns into <em>decisions</em>, with no spreadsheet in the way.",
      "abertura.texto": "I build dashboards and automations for sales and HR teams: from mapping ERP sources to data modeling, cloud databases, interactive dashboards and number-by-number validation against the official source. Each project below has a case study and a demo you can use, with fictional data.",
      "comp.modelagem": "Data modeling",
      "comp.etl": "ETL and validation",
      "destaque.rotulo": "Featured project",
      "destaque.titulo": "From ERP to a 24/7 dashboard.",
      "diag.alt": "Overview of the Sales Diagnostics dashboard with fictional data",
      "diag.cat": "Sales dashboard · Sell-in",
      "diag.nome": "Sales Diagnostics",
      "diag.texto": "Twelve ERP and BI extracts became a reliable diagnosis: fact/dimension modeling, an 11-step pipeline, a dashboard that calculates everything in the browser, validation against official revenue across 37 months and cloud deployment behind a secret link.",
      "tag.estrela": "Star schema",
      "link.estudo": "Case study",
      "link.abrirPainel": "Open dashboard",
      "link.painel": "Dashboard",
      "link.central": "Portal",
      "link.codigo": "Code",
      "projetos.titulo": "More projects, each with its own story.",
      "filtros": "Filter projects",
      "filtro.todos": "All",
      "filtro.vendas": "Sales dashboards",
      "filtro.ferramentas": "Internal tools",
      "filtro.automacao": "Automation",
      "cat.sellout": "Sell-out and inventory",
      "vitta.alt": "Vitta dashboard: monthly sell-out sales",
      "vitta.nome": "Vitta Dashboard",
      "vitta.texto": "Replaced pivot tables with controlled imports, pre-computed fields and caching. The performance chapter shows how the end of the timeouts came from the input, not the screen.",
      "atlas.alt": "Atlas dashboard: import screen with product mapping",
      "atlas.nome": "Atlas Dashboard",
      "atlas.texto": "A new dashboard in two days, reusing the Vitta foundation. The real challenge: an intermediate mapping to translate the retailer's product code into the manufacturer's.",
      "tag.gtin": "GTIN mapping",
      "tag.xlsx": "XLSX in the browser",
      "bella.alt": "Bella dashboard: inventory tab",
      "bella.nome": "Bella Dashboard",
      "bella.texto": "When inventory comes from manual store counts: the dashboard generates the counting spreadsheet ready to fill in, validates what comes back and shows the latest position next to sell-out.",
      "tag.modelos": "Dynamic templates",
      "tag.validacao": "Validation",
      "cat.acompanhamento": "Tracking",
      "controle.nome": "Sell-Out Tracker",
      "controle.texto": "From a tracking spreadsheet to a follow-up dashboard: tracks month by month which stores have sent their sell-out report, what is on time and what is already in the BI, and turns pending items into WhatsApp and e-mail follow-ups.",
      "central.nome": "Dashboard Hub",
      "central.texto": "A single entry point for every dashboard: the home page draws one card per dashboard from a list, and the admin area adds, edits and removes dashboards without touching the code.",
      "cat.rh": "HR",
      "contratacao.nome": "Hiring Dashboard",
      "contratacao.texto": "From résumé to hire without losing track: 9 stages on a board, a deadline alert for the stage that stalls the most, KPIs, a ranking by manager and e-mail follow-ups.",
      "tag.indicadores": "KPIs",
      "cat.automacaoRh": "Automation · HR",
      "bot.nome": "HR WhatsApp Bot",
      "bot.texto": "HR on WhatsApp: the bot answers time-tracking, payroll and benefits questions with step-by-step tutorials, and when a person is needed the conversation joins a queue that HR handles in a WhatsApp Web-style panel.",
      "fim.rotulo": "About the demos",
      "fim.titulo": "Everything here is clickable, and none of it is real data.",
      "fim.texto": "The projects run in production with company data. In these versions the screen code is the same, but the data is fictional, generated for each demo. No real client, figure or person appears. The live demos keep the original Portuguese screens.",
      "fim.destaque": "Start with the featured project →",
      "fim.github": "View GitHub",
      "rodape": "Case studies with live demos",
    },
    es: {
      "pagina.titulo": "Larissa Antunez · Proyectos",
      "pagina.descricao": "Proyectos de Larissa Antunez: paneles comerciales, modelado de datos, automatización y herramientas internas, cada uno con estudio de caso y demostración con datos ficticios.",
      "idioma": "Idioma",
      "tema": "Cambiar tema",
      "nav.projetos": "Proyectos",
      "assinatura": "Analítica y Desarrollo",
      "abertura.titulo": "Datos que se convierten en <em>decisiones</em>, sin hojas de cálculo de por medio.",
      "abertura.texto": "Construyo paneles y automatizaciones para áreas comerciales y de RR. HH.: desde el mapeo de las bases en el ERP hasta el modelado, la base de datos en la nube, el panel interactivo y la validación número a número contra la fuente oficial. Cada proyecto tiene un estudio de caso y una demostración que puedes usar, con datos ficticios.",
      "comp.modelagem": "Modelado de datos",
      "comp.etl": "ETL y validación",
      "destaque.rotulo": "Proyecto destacado",
      "destaque.titulo": "Del ERP a un panel 24/7.",
      "diag.alt": "Vista general del panel Diagnóstico Comercial con datos ficticios",
      "diag.cat": "Panel comercial · Sell-in",
      "diag.nome": "Diagnóstico Comercial",
      "diag.texto": "Doce extracciones de ERP y BI se convirtieron en un diagnóstico confiable: modelado de hechos y dimensiones, un pipeline de 11 etapas, un panel que calcula todo en el navegador, validación contra la facturación oficial en los 37 meses e implementación en la nube con enlace secreto.",
      "tag.estrela": "Modelo estrella",
      "link.estudo": "Estudio de caso",
      "link.abrirPainel": "Abrir panel",
      "link.painel": "Panel",
      "link.central": "Portal",
      "link.codigo": "Código",
      "projetos.titulo": "Más proyectos, cada uno con su historia.",
      "filtros": "Filtrar proyectos",
      "filtro.todos": "Todos",
      "filtro.vendas": "Paneles de ventas",
      "filtro.ferramentas": "Herramientas internas",
      "filtro.automacao": "Automatización",
      "cat.sellout": "Sell out e inventario",
      "vitta.alt": "Panel Vitta: ventas de sell out por mes",
      "vitta.nome": "Panel Vitta",
      "vitta.texto": "Reemplazó las tablas dinámicas por una importación controlada, campos precalculados y caché. El capítulo de rendimiento cuenta cómo el fin de los timeouts vino de la entrada, no de la pantalla.",
      "atlas.alt": "Panel Atlas: pantalla de importación con equivalencia de productos",
      "atlas.nome": "Panel Atlas",
      "atlas.texto": "Un panel nuevo en dos días, reutilizando la base de Vitta. El verdadero desafío: una tabla de equivalencias intermedia para traducir el código de producto del cliente al de la industria.",
      "tag.gtin": "Equivalencia de GTIN",
      "tag.xlsx": "XLSX en el navegador",
      "bella.alt": "Panel Bella: pestaña de inventario",
      "bella.nome": "Panel Bella",
      "bella.texto": "Cuando el inventario viene de un conteo manual en las tiendas: el panel genera la planilla de conteo lista, valida lo que vuelve y muestra la posición más reciente junto al sell out.",
      "tag.modelos": "Plantillas dinámicas",
      "tag.validacao": "Validación",
      "cat.acompanhamento": "Seguimiento",
      "controle.nome": "Control de Sell Out",
      "controle.texto": "De la planilla de control al panel de cobranza: sigue mes a mes qué tiendas ya enviaron el informe de sell out, qué está en plazo y qué ya está en el BI, y convierte los pendientes en recordatorios por WhatsApp y correo electrónico.",
      "central.nome": "Central de Paneles",
      "central.texto": "Una puerta de entrada a todos los paneles: la página principal dibuja una tarjeta por panel a partir de una lista, y el área administrativa agrega, edita y elimina paneles sin tocar el código.",
      "cat.rh": "RR. HH.",
      "contratacao.nome": "Panel de Contratación",
      "contratacao.texto": "Del currículum a la contratación sin perder el hilo: 9 etapas en un tablero, semáforo de plazo para la etapa que más se atasca, indicadores, ranking por gerente y recordatorios por correo electrónico.",
      "tag.indicadores": "Indicadores",
      "cat.automacaoRh": "Automatización · RR. HH.",
      "bot.nome": "Bot de RR. HH. en WhatsApp",
      "bot.texto": "RR. HH. en WhatsApp: el bot responde dudas de marcación, nómina y beneficios con tutoriales paso a paso y, cuando hace falta una persona, la conversación entra en una cola que RR. HH. atiende en un panel parecido a WhatsApp Web.",
      "fim.rotulo": "Sobre las demostraciones",
      "fim.titulo": "Todo aquí se puede usar, y nada es dato real.",
      "fim.texto": "Los proyectos funcionan en producción con datos de las empresas. En estas versiones el código de las pantallas es el mismo, pero los datos son ficticios, generados para cada demostración. No aparece ningún cliente, valor ni persona real. Las demostraciones mantienen las pantallas originales en portugués.",
      "fim.destaque": "Empezar por el destacado →",
      "fim.github": "Ver GitHub",
      "rodape": "Estudios de caso con demostración en vivo",
    },
  };
  const LANG_HTML = { pt: "pt-BR", en: "en", es: "es" };
  const CHAVE = "vitrine-idioma";

  // Cada alvo: elemento, onde o texto vai e a chave. O português original é guardado na primeira leitura.
  const descricao = document.querySelector('meta[name="description"]');
  const alvos = [
    ...[...document.querySelectorAll("[data-i18n]")].map((el) => ({ el, chave: el.dataset.i18n, ler: () => el.innerHTML, gravar: (v) => { el.innerHTML = v; } })),
    ...[...document.querySelectorAll("[data-i18n-alt]")].map((el) => ({ el, chave: el.dataset.i18nAlt, ler: () => el.alt, gravar: (v) => { el.alt = v; } })),
    ...[...document.querySelectorAll("[data-i18n-aria]")].map((el) => ({ el, chave: el.dataset.i18nAria, ler: () => el.getAttribute("aria-label"), gravar: (v) => el.setAttribute("aria-label", v) })),
    { chave: "pagina.titulo", ler: () => document.title, gravar: (v) => { document.title = v; } },
    { chave: "pagina.descricao", ler: () => descricao.content, gravar: (v) => { descricao.content = v; } },
    { chave: "tema", ler: () => document.getElementById("tema").getAttribute("aria-label"), gravar: (v) => document.getElementById("tema").setAttribute("aria-label", v) },
  ];
  alvos.forEach((a) => { a.pt = a.ler(); });

  const botoes = document.querySelectorAll(".idiomas button");
  const aplicar = (idioma) => {
    const textos = TEXTOS[idioma];
    alvos.forEach((a) => a.gravar(textos?.[a.chave] ?? a.pt));
    document.documentElement.lang = LANG_HTML[idioma];
    botoes.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.idioma === idioma)));
  };

  // Ordem de escolha: ?lang= no link, a última escolha neste navegador, o idioma do navegador.
  // Navegador em outro idioma (francês, alemão...) abre em inglês.
  const valido = (v) => (v in LANG_HTML ? v : null);
  let salvo = null;
  try { salvo = localStorage.getItem(CHAVE); } catch { /* sem armazenamento */ }
  const doNavegador = (navigator.language || "pt").slice(0, 2).toLowerCase();
  const doLink = valido(new URLSearchParams(location.search).get("lang"));
  const inicial = doLink || valido(salvo) || valido(doNavegador) || "en";
  if (inicial !== "pt") aplicar(inicial);
  // Idioma vindo do link fica guardado, para os estudos de caso abrirem no mesmo idioma.
  if (doLink) try { localStorage.setItem(CHAVE, doLink); } catch { /* sem armazenamento */ }

  botoes.forEach((b) => b.addEventListener("click", () => {
    aplicar(b.dataset.idioma);
    try { localStorage.setItem(CHAVE, b.dataset.idioma); } catch { /* sem armazenamento */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", b.dataset.idioma);
    history.replaceState(null, "", url);
  }));
})();
