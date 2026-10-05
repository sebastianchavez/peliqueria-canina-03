const APP_KEY = "happyPawsTemplate";

const SERVICES = [
  {
    id: "banio",
    name: "Baño Aromático",
    duration: "60 min",
    priceBySize: { Pequeño: 14990, Mediano: 18990, Grande: 24990, Gigante: 29990 },
    description: "Limpieza profunda con shampoo hipoalergénico, secado cuidadoso y perfume suave hipoalergénico.",
    tag: "El más pedido",
  },
  {
    id: "corte",
    name: "Corte y Styling",
    duration: "90 min",
    priceBySize: { Pequeño: 21990, Mediano: 26990, Grande: 32990, Gigante: 38990 },
    description: "Corte según raza o estilo libre, deslanado ligero y terminación prolija.",
    tag: "Estilo libre",
  },
  {
    id: "spa",
    name: "Spa Completo",
    duration: "120 min",
    priceBySize: { Pequeño: 28990, Mediano: 34990, Grande: 42990, Gigante: 49990 },
    description: "Baño, corte, limpieza de oídos, corte de uñas e hidratación profunda de pelaje.",
    tag: "Experiencia premium",
  },
  {
    id: "unas",
    name: "Corte de Uñas",
    duration: "20 min",
    priceBySize: { Pequeño: 5990, Mediano: 7990, Grande: 9990, Gigante: 11990 },
    description: "Corte seguro, limado fino y revisión rápida de almohadillas.",
  },
  {
    id: "deslanado",
    name: "Deslanado",
    duration: "75 min",
    priceBySize: { Pequeño: 17990, Mediano: 22990, Grande: 28990, Gigante: 33990 },
    description: "Retiro de pelo muerto para razas de doble manto y temporada de muda.",
  },
  {
    id: "cachorro",
    name: "Primera Visita Cachorro",
    duration: "45 min",
    priceBySize: { Pequeño: 12990, Mediano: 15990, Grande: 18990, Gigante: 21990 },
    description: "Adaptación cariñosa al grooming, baño suave y revisión básica de piel y orejas.",
    tag: "Cariñoso",
  },
  {
    id: "hidratacion",
    name: "Hidratación de Pelaje",
    duration: "50 min",
    priceBySize: { Pequeño: 11990, Mediano: 14990, Grande: 18990, Gigante: 22990 },
    description: "Mascarilla nutritiva, masaje suave y brillo natural para pelajes secos o dañados.",
  },
  {
    id: "oidos",
    name: "Limpieza de Oídos",
    duration: "20 min",
    priceBySize: { Pequeño: 5990, Mediano: 6990, Grande: 7990, Gigante: 8990 },
    description: "Limpieza profunda del conducto auditivo con productos veterinarios suaves.",
  },
  {
    id: "antiparasitario",
    name: "Baño Antiparasitario",
    duration: "60 min",
    priceBySize: { Pequeño: 16990, Mediano: 20990, Grande: 25990, Gigante: 29990 },
    description: "Baño medicinal para ayudar a controlar pulgas y garrapatas con productos certificados.",
  },
];

const CLASSES = [
  {
    id: "cepillado",
    name: "Cepillado en Casa",
    day: "Lunes",
    time: "18:00 - 19:00",
    duration: "60 min",
    level: "Inicial",
    slots: 8,
    price: 12000,
    description: "Aprende las técnicas y herramientas ideales para mantener el pelaje de tu perro sin nudos.",
  },
  {
    id: "corte-unas",
    name: "Corte de Uñas Seguro",
    day: "Martes",
    time: "18:30 - 19:15",
    duration: "45 min",
    level: "Inicial",
    slots: 6,
    price: 9000,
    description: "Técnicas para cortar y limar uñas sin estrés ni accidentes, con práctica supervisada.",
  },
  {
    id: "bano-casa",
    name: "Baño en Casa",
    day: "Miércoles",
    time: "17:30 - 18:45",
    duration: "75 min",
    level: "Intermedio",
    slots: 6,
    price: 15000,
    description: "Productos, temperatura y secuencia correcta para un baño casero exitoso.",
  },
  {
    id: "pelaje",
    name: "Cuidado del Pelaje",
    day: "Jueves",
    time: "18:00 - 19:00",
    duration: "60 min",
    level: "Intermedio",
    slots: 8,
    price: 13000,
    description: "Hidratación, desenredado y elección de shampoo según el tipo de pelo.",
  },
  {
    id: "socializacion",
    name: "Socialización Cachorro",
    day: "Sábado",
    time: "11:00 - 12:00",
    duration: "60 min",
    level: "Cachorros",
    slots: 5,
    price: 12000,
    description: "Encuentro lúdico para cachorros de 2 a 6 meses, con guía profesional.",
  },
];

const PACKAGES = [
  {
    id: "mensual",
    name: "Plan Mensual Colita Limpia",
    description: "4 baños aromáticos al mes, con cepillado y perfume. Ideal para pelajes cortos.",
    price: 49990,
    badge: "Ahorra 25%",
  },
  {
    id: "combo",
    name: "Combo Baño + Corte",
    description: "Baño aromático y corte en una sola visita. Descuento aplicado al tamaño mediano.",
    price: 32990,
    badge: "Más reservado",
  },
  {
    id: "cachorro",
    name: "Pack Cachorro Primeros Pasos",
    description: "Primera visita, baño suave y asesoría de cepillado para los primeros 3 meses.",
    price: 28990,
    badge: "Cariñoso",
  },
];

const ADDONS = [
  { id: "perfume", name: "Perfume extra", price: 2500 },
  { id: "lazo", name: "Lazo o moño", price: 2000 },
  { id: "hidratante", name: "Hidratante premium", price: 4500 },
  { id: "pulgas", name: "Tratamiento pulgas", price: 6000 },
  { id: "foto", name: "Foto recuerdo", price: 3500 },
];

const GALLERY = [
  {
    id: "bruno",
    pet: "Bruno",
    breed: "Golden Retriever",
    service: "Spa Completo",
    before: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1583511655857-d19b40a81f5e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "luna",
    pet: "Luna",
    breed: "Caniche Toy",
    service: "Corte y Styling",
    before: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rocky",
    pet: "Rocky",
    breed: "Shih Tzu",
    service: "Spa Completo",
    before: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "max",
    pet: "Max",
    breed: "Border Collie",
    service: "Deslanado",
    before: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1546975490-e8b50a998e63?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "coca",
    pet: "Coca",
    breed: "Yorkshire",
    service: "Primera Visita Cachorro",
    before: "https://images.unsplash.com/photo-1583511666372-62fc211f8377?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "toby",
    pet: "Toby",
    breed: "Beagle",
    service: "Baño Aromático",
    before: "https://images.unsplash.com/photo-1505628346881-b72b27e845a5?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mia",
    pet: "Mía",
    breed: "Maltés",
    service: "Hidratación de Pelaje",
    before: "https://images.unsplash.com/photo-1568393691080-bdc56c61c8b0?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cooper",
    pet: "Cooper",
    breed: "Labrador",
    service: "Deslanado",
    before: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=80",
  },
];

const HOURS = [
  ["Lunes a Viernes", "09:00 - 19:00"],
  ["Sábado", "10:00 - 15:00"],
  ["Domingo", "Cerrado"],
];

const CLASS_HOURS = [
  ["Lunes", "18:00 - 19:00 · Cepillado en casa"],
  ["Martes", "18:30 - 19:15 · Corte de uñas seguro"],
  ["Miércoles", "17:30 - 18:45 · Baño en casa"],
  ["Jueves", "18:00 - 19:00 · Cuidado del pelaje"],
  ["Sábado", "11:00 - 12:00 · Socialización cachorro"],
  ["Viernes y Domingo", "Sin clases"],
];

const LOCATION = {
  address: "Av. Las Mascotas 1234, Santiago, Chile",
  phone: "+56 9 4444 0000",
  email: "hola@happypaws.cl",
  map: "https://www.google.com/maps?q=Av.+Las+Mascotas+1234,+Chile&output=embed",
};

const DEMO_USER = {
  id: "user-demo",
  name: "Camila Torres",
  email: "camila@demo.cl",
  phone: "+56 9 5555 1234",
  password: "demo123",
};

const DEMO_RESERVATIONS = [
  {
    id: "RSV-1023",
    userEmail: DEMO_USER.email,
    serviceId: "unas",
    petName: "Milo",
    petSize: "Pequeño",
    date: "2026-10-08",
    time: "10:00",
    ownerName: DEMO_USER.name,
    email: DEMO_USER.email,
    phone: DEMO_USER.phone,
    notes: "Suele ponerse nervioso con el limado.",
    status: "Pendiente",
    paid: false,
    createdAt: "2026-10-01T09:00:00.000Z",
  },
  {
    id: "RSV-1024",
    userEmail: DEMO_USER.email,
    serviceId: "spa",
    petName: "Bruno",
    petSize: "Mediano",
    date: "2026-10-10",
    time: "11:30",
    ownerName: DEMO_USER.name,
    email: DEMO_USER.email,
    phone: DEMO_USER.phone,
    notes: "Tiene piel sensible, usar shampoo hipoalergénico.",
    status: "Pagada",
    paid: true,
    createdAt: "2026-10-02T10:30:00.000Z",
  },
  {
    id: "RSV-1025",
    userEmail: DEMO_USER.email,
    serviceId: "corte",
    petName: "Luna",
    petSize: "Pequeño",
    date: "2026-10-14",
    time: "16:00",
    ownerName: DEMO_USER.name,
    email: DEMO_USER.email,
    phone: DEMO_USER.phone,
    notes: "Corte estilo teddy.",
    status: "Confirmada",
    paid: false,
    createdAt: "2026-10-03T12:15:00.000Z",
  },
  {
    id: "RSV-1026",
    userEmail: DEMO_USER.email,
    serviceId: "banio",
    petName: "Toby",
    petSize: "Mediano",
    date: "2026-09-25",
    time: "12:00",
    ownerName: DEMO_USER.name,
    email: DEMO_USER.email,
    phone: DEMO_USER.phone,
    notes: "Sin observaciones.",
    status: "Completada",
    paid: true,
    createdAt: "2026-09-20T10:30:00.000Z",
  },
];

function money(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

function getState() {
  const stored = localStorage.getItem(APP_KEY);
  if (stored) return JSON.parse(stored);
  const initial = {
    users: [DEMO_USER],
    currentUserEmail: DEMO_USER.email,
    reservations: DEMO_RESERVATIONS,
    lastReservationId: DEMO_RESERVATIONS[2].id,
    lastPaidReservationId: DEMO_RESERVATIONS[1].id,
  };
  localStorage.setItem(APP_KEY, JSON.stringify(initial));
  return initial;
}

function setState(state) {
  localStorage.setItem(APP_KEY, JSON.stringify(state));
}

function getCurrentUser() {
  const state = getState();
  return state.users.find((user) => user.email === state.currentUserEmail) || null;
}

function getService(serviceId) {
  return SERVICES.find((service) => service.id === serviceId) || SERVICES[0];
}

function nextReservationId() {
  return `RSV-${Math.floor(1000 + Math.random() * 8999)}`;
}

function statusClass(status) {
  return `status-${status.toLowerCase()}`;
}

function setMessage(targetId, message, type = "success") {
  const target = document.getElementById(targetId);
  if (!target) return;
  const palette = type === "error"
    ? "bg-rose-50 text-rose-700 border-rose-200"
    : "bg-emerald-50 text-emerald-800 border-emerald-200";
  target.className = `mt-4 rounded-lg border px-4 py-3 text-sm font-bold ${palette}`;
  target.textContent = message;
  target.hidden = false;
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2800);
}

function query(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function go(url) {
  window.location.href = url;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

function renderChrome() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;
  const page = document.body.dataset.page || "";
  const user = getCurrentUser();
  nav.innerHTML = `
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6 lg:px-8">
      <a href="index.html" class="flex items-center gap-3" aria-label="Ir al inicio">
        <span class="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-xl font-black text-white shadow-lg shadow-emerald-500/30">🐾</span>
        <span>
          <span class="block text-lg font-black text-slate-900">Happy Paws</span>
          <span class="block text-xs font-bold uppercase tracking-wide text-rose-500">Peluquería canina</span>
        </span>
      </a>
      <button class="rounded-full bg-slate-100 px-3 py-2 font-black text-slate-700 md:hidden" data-menu-toggle>Menu</button>
      <div class="nav-list flex flex-wrap items-center gap-1" data-menu>
        ${navLink("index", "Inicio", "index.html", page)}
        ${navLink("servicios", "Servicios", "servicios.html", page)}
        ${navLink("precios", "Precios", "precios.html", page)}
        ${navLink("galeria", "Galería", "galeria.html", page)}
        ${navLink("clases", "Clases", "clases.html", page)}
        ${navLink("contacto", "Contacto", "contacto.html", page)}
        ${user ? navLink("perfil", "Mi perfil", "perfil.html", page) : navLink("login", "Ingresar", "login.html", page)}
      </div>
    </div>
  `;
  const toggle = nav.querySelector("[data-menu-toggle]");
  const menu = nav.querySelector("[data-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  }
}

function navLink(id, label, href, page) {
  return `<a class="nav-link ${id === page ? "active" : ""}" href="${href}">${label}</a>`;
}

function renderFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;
  footer.innerHTML = `
    <div class="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg text-white">🐾</span>
          <p class="text-lg font-black text-slate-900">Happy Paws</p>
        </div>
        <p class="mt-3 max-w-md text-sm leading-6 text-slate-600">Template de reservas para peluquería canina con flujo completo: agenda, pago, perfil y anulación.</p>
        <div class="mt-4 flex gap-3">
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Reservas online</span>
          <span class="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700">Pago simulado</span>
        </div>
      </div>
      <div>
        <p class="font-black text-slate-900">Legal</p>
        <a class="mt-2 block text-sm font-bold text-slate-600 hover:text-emerald-700" href="terminos.html">Términos y condiciones</a>
        <a class="mt-2 block text-sm font-bold text-slate-600 hover:text-emerald-700" href="privacidad.html">Políticas de privacidad</a>
        <a class="mt-2 block text-sm font-bold text-slate-600 hover:text-emerald-700" href="contacto.html">Contacto</a>
      </div>
      <div>
        <p class="font-black text-slate-900">Atención</p>
        <p class="mt-2 text-sm text-slate-600">${LOCATION.address}</p>
        <p class="mt-1 text-sm text-slate-600">${LOCATION.phone}</p>
        <p class="mt-1 text-sm text-slate-600">${LOCATION.email}</p>
        <div class="mt-3">
          <p class="text-xs font-black uppercase tracking-wide text-slate-500">Horarios</p>
          ${HOURS.slice(0, 2).map(([day, hours]) => `<p class="text-sm text-slate-600">${day}: ${hours}</p>`).join("")}
        </div>
      </div>
    </div>
    <div class="border-t border-slate-200 bg-slate-50 py-4">
      <p class="text-center text-xs font-bold text-slate-500">© 2026 Happy Paws · Template demo · Hecho con cariño para perritos.</p>
    </div>
  `;
}

function detailItem(label, value) {
  return `<div><dt class="text-sm font-black text-slate-500">${label}</dt><dd class="mt-1 font-bold text-slate-900">${value}</dd></div>`;
}

function emptyState(message, actionLabel, actionHref) {
  return `
    <div class="card p-8 text-center">
      <p class="text-lg font-black text-slate-900">${message}</p>
      <a class="btn-primary mt-5" href="${actionHref}">${actionLabel}</a>
    </div>
  `;
}

function renderServices(targetId, compact = false) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const list = compact ? SERVICES.slice(0, 3) : SERVICES;
  target.innerHTML = list.map((service) => `
    <article class="card p-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-black text-slate-900">${service.name}</h3>
            ${service.tag ? `<span class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.7rem] font-black uppercase tracking-wide text-rose-600">${service.tag}</span>` : ""}
          </div>
          <p class="mt-2 text-sm leading-6 text-slate-600">${service.description}</p>
        </div>
        <span class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-black text-emerald-700">${service.duration}</span>
      </div>
      <div class="mt-6 flex items-center justify-between gap-4">
        <p class="text-2xl font-black text-emerald-700">Desde ${money(service.priceBySize.Pequeño)}</p>
        <a class="btn-secondary" href="reservar.html?service=${service.id}">Reservar</a>
      </div>
    </article>
  `).join("");
}

function renderHours(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = HOURS.map(([day, hours]) => `
    <div class="flex items-center justify-between border-b border-slate-200 py-3 last:border-0">
      <span class="font-bold text-slate-700">${day}</span>
      <span class="font-black text-slate-900">${hours}</span>
    </div>
  `).join("");
}

function renderClassHours(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = CLASS_HOURS.map(([day, info]) => `
    <div class="flex flex-col gap-1 border-b border-slate-200 py-3 last:border-0 md:flex-row md:items-center md:justify-between">
      <span class="font-bold text-slate-700">${day}</span>
      <span class="font-black text-slate-900">${info}</span>
    </div>
  `).join("");
}

function initHome() {
  renderServices("featured-services", true);

  const coursesTarget = document.getElementById("featured-classes");
  if (coursesTarget) {
    coursesTarget.innerHTML = CLASSES.slice(0, 3).map((klass) => `
      <article class="card p-6">
        <span class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.7rem] font-black uppercase tracking-wide text-rose-600">${klass.level}</span>
        <h3 class="mt-3 text-xl font-black text-slate-900">${klass.name}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">${klass.description}</p>
        <div class="mt-5 flex items-center justify-between gap-3">
          <p class="text-lg font-black text-emerald-700">${klass.day} · ${klass.time}</p>
          <p class="text-sm font-bold text-slate-600">${money(klass.price)}</p>
        </div>
      </article>
    `).join("");
  }

  const galleryTarget = document.getElementById("featured-gallery");
  if (galleryTarget) {
    galleryTarget.innerHTML = GALLERY.slice(0, 4).map((item) => `
      <article class="card overflow-hidden">
        <div class="ba-slider" data-ba>
          <img src="${item.before}" alt="${item.pet} antes" loading="lazy">
          <img class="ba-after" src="${item.after}" alt="${item.pet} después" loading="lazy" data-ba-after>
          <span class="ba-label before">Antes</span>
          <span class="ba-label after">Después</span>
          <div class="ba-handle" data-ba-handle></div>
        </div>
        <div class="p-4">
          <p class="text-sm font-black text-emerald-700">${item.pet}</p>
          <p class="text-sm text-slate-600">${item.breed} · ${item.service}</p>
        </div>
      </article>
    `).join("");
    initBeforeAfter();
  }

  renderHours("home-hours");
}

function initBeforeAfter() {
  document.querySelectorAll("[data-ba]").forEach((slider) => {
    const handle = slider.querySelector("[data-ba-handle]");
    const after = slider.querySelector("[data-ba-after]");
    if (!handle || !after) return;

    const setPos = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      handle.style.left = `${pct}%`;
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    };

    let dragging = false;
    const start = (e) => { dragging = true; setPos(e.touches ? e.touches[0].clientX : e.clientX); };
    const move = (e) => { if (!dragging) return; setPos(e.touches ? e.touches[0].clientX : e.clientX); };
    const end = () => { dragging = false; };

    handle.addEventListener("mousedown", start);
    handle.addEventListener("touchstart", start, { passive: false });
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    slider.addEventListener("click", (e) => setPos(e.clientX));
  });
}

function initServices() {
  renderServices("services-grid");
}

function fillServiceSelect() {
  const select = document.getElementById("serviceId");
  if (!select) return;
  select.innerHTML = SERVICES.map((service) => (
    `<option value="${service.id}">${service.name} - desde ${money(service.priceBySize.Pequeño)}</option>`
  )).join("");
  const selected = query("service");
  if (selected && SERVICES.some((service) => service.id === selected)) select.value = selected;
  updateReserveSummary();
  select.addEventListener("change", updateReserveSummary);

  const sizeSelect = document.getElementById("petSize");
  if (sizeSelect) sizeSelect.addEventListener("change", updateReserveSummary);
}

function updateReserveSummary() {
  const select = document.getElementById("serviceId");
  const sizeSelect = document.getElementById("petSize");
  const summary = document.getElementById("reserve-summary");
  if (!select || !summary) return;
  const service = getService(select.value);
  const size = sizeSelect?.value || "Pequeño";
  const price = service.priceBySize[size] ?? service.priceBySize.Pequeño;
  summary.innerHTML = `
    <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Resumen</p>
    <p class="mt-1 text-xl font-black text-slate-900">${service.name}</p>
    <p class="mt-2 text-sm text-slate-600">${service.description}</p>
    <dl class="mt-5 space-y-3 border-t border-slate-200 pt-5">
      <div class="flex items-center justify-between"><dt class="text-sm font-bold text-slate-600">Tamaño</dt><dd class="font-black text-slate-900">${size}</dd></div>
      <div class="flex items-center justify-between"><dt class="text-sm font-bold text-slate-600">Duración</dt><dd class="font-black text-slate-900">${service.duration}</dd></div>
      <div class="flex items-center justify-between"><dt class="text-sm font-bold text-slate-600">Subtotal</dt><dd class="text-2xl font-black text-emerald-700">${money(price)}</dd></div>
    </dl>
    <p class="mt-5 text-xs text-slate-500">El pago se realiza después de confirmar la reserva.</p>
  `;
}

function initReserve() {
  const user = getCurrentUser();
  fillServiceSelect();
  if (user) {
    const ownerName = document.getElementById("ownerName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    if (ownerName) ownerName.value = user.name;
    if (email) email.value = user.email;
    if (phone) phone.value = user.phone || "";
  }

  const date = document.getElementById("date");
  if (date) {
    const today = new Date().toISOString().split("T")[0];
    date.min = today;
  }

  const form = document.getElementById("reserve-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const state = getState();
    const reservation = {
      id: nextReservationId(),
      userEmail: state.currentUserEmail || data.email,
      serviceId: data.serviceId,
      petName: data.petName,
      petSize: data.petSize,
      date: data.date,
      time: data.time,
      ownerName: data.ownerName,
      email: data.email,
      phone: data.phone,
      notes: data.notes || "Sin observaciones.",
      status: "Confirmada",
      paid: false,
      createdAt: new Date().toISOString(),
    };
    state.reservations.unshift(reservation);
    state.lastReservationId = reservation.id;
    setState(state);
    go(`confirmar-cita.html?id=${encodeURIComponent(reservation.id)}`);
  });
}

function reservationById(id) {
  return getState().reservations.find((reservation) => reservation.id === id) || null;
}

function reservationCard(reservation) {
  const service = getService(reservation.serviceId);
  return `
    <article class="card p-5">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-sm font-black text-emerald-700">${reservation.id}</p>
          <h3 class="mt-1 text-xl font-black text-slate-900">${service.name} para ${reservation.petName}</h3>
          <p class="mt-2 text-sm text-slate-600">${formatDate(reservation.date)} a las ${reservation.time}</p>
        </div>
        <span class="status-pill ${statusClass(reservation.status)}">${reservation.status}</span>
      </div>
      <div class="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p class="text-lg font-black text-slate-900">${money(service.priceBySize[reservation.petSize] || service.priceBySize.Pequeño)}</p>
        <a class="btn-secondary" href="detalle-reserva.html?id=${encodeURIComponent(reservation.id)}">Ver detalle</a>
      </div>
    </article>
  `;
}

function initConfirmation() {
  const id = query("id") || getState().lastReservationId;
  const reservation = reservationById(id);
  const target = document.getElementById("confirmation-detail");
  if (!target) return;
  if (!reservation) {
    target.innerHTML = emptyState("No encontramos la reserva solicitada.", "Reservar cita", "reservar.html");
    return;
  }
  const service = getService(reservation.serviceId);
  target.innerHTML = `
    <div class="card p-6">
      <span class="status-pill ${statusClass(reservation.status)}">${reservation.status}</span>
      <h1 class="mt-4 text-3xl font-black text-slate-900">¡Tu cita quedó agendada!</h1>
      <p class="mt-2 text-slate-600">Guardamos la reserva <strong class="text-emerald-700">${reservation.id}</strong>. Puedes pagarla ahora o revisarla desde tu perfil.</p>
      <dl class="mt-6 grid gap-4 sm:grid-cols-2">
        ${detailItem("Servicio", service.name)}
        ${detailItem("Mascota", reservation.petName)}
        ${detailItem("Tamaño", reservation.petSize)}
        ${detailItem("Fecha", formatDate(reservation.date))}
        ${detailItem("Hora", reservation.time)}
        ${detailItem("Duración", service.duration)}
        ${detailItem("Total", money(service.priceBySize[reservation.petSize] || service.priceBySize.Pequeño))}
      </dl>
      <div class="mt-6 flex flex-wrap gap-3">
        <a class="btn-coral" href="pago.html?id=${encodeURIComponent(reservation.id)}">Pagar reserva</a>
        <a class="btn-muted" href="perfil.html">Ir a mi perfil</a>
      </div>
    </div>
  `;
}

function initPayment() {
  const id = query("id") || getState().lastReservationId;
  const reservation = reservationById(id);
  const summary = document.getElementById("payment-summary");
  const form = document.getElementById("payment-form");
  if (!summary || !form) return;
  if (!reservation) {
    summary.innerHTML = emptyState("No encontramos una reserva pendiente de pago.", "Reservar cita", "reservar.html");
    form.hidden = true;
    return;
  }
  const service = getService(reservation.serviceId);
  const price = service.priceBySize[reservation.petSize] || service.priceBySize.Pequeño;
  summary.innerHTML = `
    <div class="card p-6">
      <p class="text-sm font-black text-emerald-700">${reservation.id}</p>
      <h2 class="mt-1 text-2xl font-black text-slate-900">${service.name}</h2>
      <p class="mt-2 text-slate-600">${reservation.petName} · ${formatDate(reservation.date)} a las ${reservation.time}</p>
      <div class="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
        <span class="font-bold text-slate-600">Total a pagar</span>
        <span class="text-3xl font-black text-emerald-700">${money(price)}</span>
      </div>
      <p class="mt-3 text-xs text-slate-500">Pago simulado. No se realiza ningún cargo real.</p>
    </div>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardNumber = document.getElementById("cardNumber")?.value.replace(/\s/g, "");
    if (!cardNumber || cardNumber.length < 12) {
      setMessage("payment-message", "Verifica el número de tarjeta.", "error");
      return;
    }
    const state = getState();
    const target = state.reservations.find((item) => item.id === reservation.id);
    if (target) {
      target.status = "Pagada";
      target.paid = true;
      target.paidAt = new Date().toISOString();
      state.lastPaidReservationId = target.id;
      setState(state);
    }
    go(`confirmacion-pago.html?id=${encodeURIComponent(reservation.id)}`);
  });

  const cardInput = document.getElementById("cardNumber");
  cardInput?.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 16);
    v = v.replace(/(.{4})/g, "$1 ").trim();
    e.target.value = v;
  });
}

function initPaymentConfirmation() {
  const id = query("id") || getState().lastPaidReservationId;
  const reservation = reservationById(id);
  const target = document.getElementById("payment-confirmation-detail");
  if (!target) return;
  if (!reservation) {
    target.innerHTML = emptyState("No encontramos el pago solicitado.", "Ir a servicios", "servicios.html");
    return;
  }
  const service = getService(reservation.serviceId);
  const price = service.priceBySize[reservation.petSize] || service.priceBySize.Pequeño;
  target.innerHTML = `
    <div class="card p-6 text-center">
      <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-black text-emerald-700">✓</span>
      <h1 class="mt-5 text-3xl font-black text-slate-900">Pago confirmado</h1>
      <p class="mt-2 text-slate-600">Recibimos el pago de <strong class="text-emerald-700">${money(price)}</strong> para la reserva <strong>${reservation.id}</strong>.</p>
      <dl class="mt-6 grid gap-4 text-left sm:grid-cols-2">
        ${detailItem("Servicio", service.name)}
        ${detailItem("Mascota", reservation.petName)}
        ${detailItem("Fecha", formatDate(reservation.date))}
        ${detailItem("Hora", reservation.time)}
        ${detailItem("Tamaño", reservation.petSize)}
        ${detailItem("Estado", reservation.status)}
      </dl>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <a class="btn-primary" href="detalle-reserva.html?id=${encodeURIComponent(reservation.id)}">Ver reserva</a>
        <a class="btn-muted" href="perfil.html">Mi perfil</a>
      </div>
    </div>
  `;
}

function initProfile() {
  const user = getCurrentUser();
  const profile = document.getElementById("profile-card");
  const list = document.getElementById("reservation-history");
  if (!profile || !list) return;
  if (!user) {
    profile.innerHTML = emptyState("Inicia sesión para ver tu perfil.", "Ingresar", "login.html");
    list.innerHTML = "";
    return;
  }
  const state = getState();
  const reservations = state.reservations
    .filter((reservation) => reservation.userEmail === user.email || reservation.email === user.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  profile.innerHTML = `
    <div class="card p-6">
      <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Cliente Happy Paws</p>
      <h1 class="mt-1 text-3xl font-black text-slate-900">${user.name}</h1>
      <p class="mt-2 text-slate-600">${user.email}</p>
      <p class="text-slate-600">${user.phone || "Teléfono no registrado"}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <a class="btn-primary" href="reservar.html">Nueva reserva</a>
        <button class="btn-muted" data-logout>Cerrar sesión</button>
      </div>
    </div>
    <div class="card mt-5 grid grid-cols-3 gap-4 p-6 text-center">
      <div><p class="text-2xl font-black text-emerald-700">${reservations.length}</p><p class="text-xs font-bold uppercase tracking-wide text-slate-500">Reservas</p></div>
      <div><p class="text-2xl font-black text-emerald-700">${reservations.filter(r => r.paid).length}</p><p class="text-xs font-bold uppercase tracking-wide text-slate-500">Pagadas</p></div>
      <div><p class="text-2xl font-black text-rose-500">${reservations.filter(r => r.status === "Anulada").length}</p><p class="text-xs font-bold uppercase tracking-wide text-slate-500">Anuladas</p></div>
    </div>
  `;
  list.innerHTML = reservations.length
    ? reservations.map(reservationCard).join("")
    : emptyState("Aún no tienes reservas.", "Crear reserva", "reservar.html");

  const logout = profile.querySelector("[data-logout]");
  logout?.addEventListener("click", () => {
    const next = getState();
    next.currentUserEmail = null;
    setState(next);
    go("login.html");
  });
}

function initReservationDetail() {
  const id = query("id");
  const reservation = reservationById(id);
  const target = document.getElementById("reservation-detail");
  if (!target) return;
  if (!reservation) {
    target.innerHTML = emptyState("No encontramos la reserva solicitada.", "Mi perfil", "perfil.html");
    return;
  }
  renderReservationDetail(target, reservation);
}

function renderReservationDetail(target, reservation) {
  const service = getService(reservation.serviceId);
  const price = service.priceBySize[reservation.petSize] || service.priceBySize.Pequeño;
  const canCancel = !["Anulada", "Completada"].includes(reservation.status);
  target.innerHTML = `
    <div class="card p-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-sm font-black text-emerald-700">${reservation.id}</p>
          <h1 class="mt-1 text-3xl font-black text-slate-900">${service.name} para ${reservation.petName}</h1>
          <p class="mt-2 text-slate-600">${service.description}</p>
        </div>
        <span class="status-pill ${statusClass(reservation.status)}">${reservation.status}</span>
      </div>
      <dl class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${detailItem("Fecha", formatDate(reservation.date))}
        ${detailItem("Hora", reservation.time)}
        ${detailItem("Duración", service.duration)}
        ${detailItem("Mascota", reservation.petName)}
        ${detailItem("Tamaño", reservation.petSize)}
        ${detailItem("Precio", money(price))}
        ${detailItem("Tutor", reservation.ownerName)}
        ${detailItem("Correo", reservation.email)}
        ${detailItem("Teléfono", reservation.phone)}
      </dl>
      <div class="mt-6 rounded-lg bg-slate-50 p-4">
        <p class="text-sm font-black text-slate-500">Observaciones</p>
        <p class="mt-1 text-slate-700">${reservation.notes}</p>
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        ${!reservation.paid && reservation.status !== "Anulada" ? `<a class="btn-coral" href="pago.html?id=${encodeURIComponent(reservation.id)}">Pagar reserva</a>` : ""}
        ${canCancel ? `<button class="btn-danger" data-cancel="${reservation.id}">Anular cita</button>` : ""}
        <a class="btn-muted" href="perfil.html">Volver al perfil</a>
      </div>
    </div>
  `;
  const cancel = target.querySelector("[data-cancel]");
  cancel?.addEventListener("click", () => {
    if (!confirm("¿Seguro que quieres anular esta cita? Esta acción no se puede deshacer.")) return;
    const state = getState();
    const item = state.reservations.find((reservationItem) => reservationItem.id === reservation.id);
    if (item) {
      item.status = "Anulada";
      item.paid = false;
      item.cancelledAt = new Date().toISOString();
      setState(state);
      toast("La cita fue anulada correctamente.");
      renderReservationDetail(target, item);
    }
  });
}

function initAuth() {
  const loginForm = document.getElementById("login-form");
  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(loginForm).entries());
    const state = getState();
    const user = state.users.find((item) => item.email === data.email && item.password === data.password);
    if (!user) {
      setMessage("auth-message", "Correo o contraseña incorrectos. Prueba con camila@demo.cl / demo123.", "error");
      return;
    }
    state.currentUserEmail = user.email;
    setState(state);
    toast("Bienvenida de nuevo 💚");
    go("perfil.html");
  });

  const registerForm = document.getElementById("register-form");
  registerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(registerForm).entries());
    if (data.password !== data.passwordConfirm) {
      setMessage("auth-message", "Las contraseñas no coinciden.", "error");
      return;
    }
    const state = getState();
    if (state.users.some((user) => user.email === data.email)) {
      setMessage("auth-message", "Ya existe una cuenta con ese correo.", "error");
      return;
    }
    const user = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    state.users.push(user);
    state.currentUserEmail = user.email;
    setState(state);
    toast("Cuenta creada con éxito 💚");
    go("perfil.html");
  });

  const recoveryForm = document.getElementById("recovery-form");
  recoveryForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(recoveryForm).get("email");
    setMessage("auth-message", `Si ${data} existe en nuestro sistema, enviaremos las instrucciones de recuperación. Simulación completada.`);
  });
}

function initContact() {
  renderHours("contact-hours");
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    setMessage("contact-message", "Gracias. Recibimos tu mensaje y te responderemos pronto 🐾");
  });
}

function initGallery() {
  const target = document.getElementById("gallery-grid");
  if (!target) return;
  target.innerHTML = GALLERY.map((item) => `
    <article class="card overflow-hidden">
      <div class="ba-slider" data-ba>
        <img src="${item.before}" alt="${item.pet} antes" loading="lazy">
        <img class="ba-after" src="${item.after}" alt="${item.pet} después" loading="lazy" data-ba-after>
        <span class="ba-label before">Antes</span>
        <span class="ba-label after">Después</span>
        <div class="ba-handle" data-ba-handle></div>
      </div>
      <div class="p-5">
        <p class="text-sm font-black text-emerald-700">${item.pet}</p>
        <p class="text-sm text-slate-600">${item.breed}</p>
        <div class="mt-3 flex items-center justify-between">
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">${item.service}</span>
          <a class="btn-secondary text-xs" href="reservar.html?service=${SERVICES.find(s => s.name === item.service)?.id || ''}">Reservar</a>
        </div>
      </div>
    </article>
  `).join("");
  initBeforeAfter();
}

function initClasses() {
  const target = document.getElementById("classes-grid");
  if (target) {
    target.innerHTML = CLASSES.map((klass) => `
      <article class="card p-6">
        <div class="flex items-center justify-between">
          <span class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.7rem] font-black uppercase tracking-wide text-rose-600">${klass.level}</span>
          <span class="text-sm font-bold text-slate-500">${klass.duration}</span>
        </div>
        <h3 class="mt-3 text-xl font-black text-slate-900">${klass.name}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">${klass.description}</p>
        <dl class="mt-5 space-y-2 border-t border-slate-200 pt-5 text-sm">
          <div class="flex justify-between"><dt class="font-bold text-slate-500">Día</dt><dd class="font-black text-slate-900">${klass.day}</dd></div>
          <div class="flex justify-between"><dt class="font-bold text-slate-500">Horario</dt><dd class="font-black text-slate-900">${klass.time}</dd></div>
          <div class="flex justify-between"><dt class="font-bold text-slate-500">Cupos</dt><dd class="font-black text-slate-900">${klass.slots} disponibles</dd></div>
        </dl>
        <div class="mt-5 flex items-center justify-between">
          <p class="text-2xl font-black text-emerald-700">${money(klass.price)}</p>
          <button class="btn-coral" data-enroll="${klass.id}">Inscribirme</button>
        </div>
      </article>
    `).join("");

    target.querySelectorAll("[data-enroll]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const klass = CLASSES.find((c) => c.id === btn.dataset.enroll);
        if (!klass) return;
        toast(`Inscripción simulada a "${klass.name}". Te contactaremos pronto 🐾`);
      });
    });
  }

  renderClassHours("class-hours");
}

function initPrices() {
  const tableTarget = document.getElementById("prices-table");
  if (tableTarget) {
    const sizes = ["Pequeño", "Mediano", "Grande", "Gigante"];
    tableTarget.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-slate-200">
              <th class="py-3 pr-4 text-sm font-black uppercase tracking-wide text-slate-500">Servicio</th>
              <th class="py-3 pr-4 text-sm font-black uppercase tracking-wide text-slate-500">Duración</th>
              ${sizes.map((s) => `<th class="py-3 pr-4 text-sm font-black uppercase tracking-wide text-slate-500">${s}</th>`).join("")}
              <th class="py-3 text-sm font-black uppercase tracking-wide text-slate-500"></th>
            </tr>
          </thead>
          <tbody>
            ${SERVICES.map((service) => `
              <tr class="border-b border-slate-100 last:border-0">
                <td class="py-4 pr-4">
                  <p class="font-black text-slate-900">${service.name}</p>
                  <p class="text-xs text-slate-500">${service.description}</p>
                </td>
                <td class="py-4 pr-4 font-bold text-slate-700">${service.duration}</td>
                ${sizes.map((s) => `<td class="py-4 pr-4 font-black text-emerald-700">${money(service.priceBySize[s])}</td>`).join("")}
                <td class="py-4 text-right"><a class="btn-secondary text-xs" href="reservar.html?service=${service.id}">Reservar</a></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  const packagesTarget = document.getElementById("packages-list");
  if (packagesTarget) {
    packagesTarget.innerHTML = PACKAGES.map((pkg) => `
      <article class="card p-6">
        <span class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.7rem] font-black uppercase tracking-wide text-rose-600">${pkg.badge}</span>
        <h3 class="mt-3 text-xl font-black text-slate-900">${pkg.name}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">${pkg.description}</p>
        <div class="mt-5 flex items-center justify-between">
          <p class="text-2xl font-black text-emerald-700">${money(pkg.price)}</p>
          <a class="btn-primary" href="reservar.html">Reservar</a>
        </div>
      </article>
    `).join("");
  }

  const addonsTarget = document.getElementById("addons-list");
  if (addonsTarget) {
    addonsTarget.innerHTML = ADDONS.map((addon) => `
      <li class="flex items-center justify-between border-b border-slate-200 py-3 last:border-0">
        <span class="font-bold text-slate-700">${addon.name}</span>
        <span class="font-black text-emerald-700">+ ${money(addon.price)}</span>
      </li>
    `).join("");
  }
}

function boot() {
  renderChrome();
  renderFooter();
  const page = document.body.dataset.page;
  const initializers = {
    index: initHome,
    servicios: initServices,
    precios: initPrices,
    galeria: initGallery,
    clases: initClasses,
    reservar: initReserve,
    "confirmar-cita": initConfirmation,
    pago: initPayment,
    "confirmacion-pago": initPaymentConfirmation,
    perfil: initProfile,
    "detalle-reserva": initReservationDetail,
    contacto: initContact,
    login: initAuth,
    registro: initAuth,
    recuperar: initAuth,
  };
  initializers[page]?.();
}

document.addEventListener("DOMContentLoaded", boot);