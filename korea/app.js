const W = 680;
const H = 500;

const places = {
  icn: { x: 54, y: 408 },
  odarijip: { x: 196, y: 188 },
  hongdae: { x: 168, y: 262 },
  station: { x: 300, y: 220 },
  palace: { x: 292, y: 78 },
  bukchon: { x: 366, y: 70 },
  gwangjang: { x: 548, y: 196 },
  ikseon: { x: 404, y: 150 },
  cheonggye: { x: 520, y: 126 },
  evio: { x: 456, y: 190 },
  myeongdong: { x: 472, y: 242 },
  spao: { x: 472, y: 242 },
  airbnb: { x: 400, y: 252 },
  seongsu: { x: 636, y: 142 },
  bars: { x: 612, y: 392 },
  dusan: { x: 524, y: 436 },
};

const placeIcons = {
  icn: "plane",
  airbnb: "hanok",
  myeongdong: "bag",
  cheonggye: "stream",
  palace: "palace",
  bukchon: "hanoks",
  ikseon: "bowl",
  seongsu: "shop",
  gwangjang: "stall",
  spao: "shirt",
  evio: "clinic",
  station: "train",
  odarijip: "pot",
  hongdae: "note",
  dusan: "grill",
  bars: "glass",
};

const icons = {
  plane:
    '<path d="M1.8 12.4h6l2.3-5.2h2L11 12.4h7.2l2.2-2.3h1.7L19.6 13l2.5 2.9h-1.7l-2.2-2.3H11l1.1 5.2h-2L7.8 13.6H1.8v-1.2Z" fill="currentColor"/>',
  hanok:
    '<path d="M2.2 12.4C6.5 6.2 17.5 6.2 21.8 12.4M6.5 12.6V21h11V12.6M10.8 21v-4.1h2.4V21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  palace:
    '<path d="M1 8.4c2.6 4 5.4 5.2 11 5.2s8.4-1.2 11-5.2M1 8.4c1.4 1.6 1.2 3-.2 3.6M23 8.4c-1.4 1.6-1.2 3 .2 3.6M7.4 13.2V21.2M16.6 13.2V21.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  hanoks:
    '<path d="M1.6 14.6c2.2-5 6.2-5 8.4 0M3.4 14.6V20h4.8v-5.4M13 14.6c2.2-5 6.2-5 8.4 0M14.8 14.6V20h4.8v-5.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  bag:
    '<path d="M7 8.5h10l-.8 12.2H7.8Z" fill="currentColor"/><path d="M9.2 8.5V6.4a2.8 2.8 0 0 1 5.6 0v2.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  stream:
    '<path d="M2.5 7.5c2.2-3 5.2-3 7.4 0s5.2 3 7.4 0 5.2-3 4.2 0M2.5 13.2c2.2-3 5.2-3 7.4 0s5.2 3 7.4 0 5.2-3 4.2 0M2.5 18.8c2.2-3 5.2-3 7.4 0s5.2 3 7.4 0 5.2-3 4.2 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  bowl:
    '<path d="M3.5 8.2h17M6.2 8.2c.5 7.4 2.4 10.6 5.8 10.6s5.3-3.2 5.8-10.6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  pot:
    '<path d="M8 9.5h8l-.7 8.2H8.7Z" fill="currentColor"/><path d="M6.5 9.5h11M9.2 6.2h5.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4.5 12.2H7M17 12.2h2.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  stall:
    '<path d="M3.2 18.6 12 5.2l8.8 13.4H3.2Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8.6 18.6v-4.2h6.8v4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  shop:
    '<path d="M4 4.8h16V20H4Z M4 10h16 M12 10v10" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>',
  shirt:
    '<path d="M8.2 6.4 4 9.6l2.8 2.6L9 10.2V20h6V10.2l2.2 2 2.8-2.6-4.2-3.2c-1.4 1.8-5 1.8-6.4 0Z" fill="currentColor"/>',
  clinic:
    '<path d="M10 3.5h4V10h6.5v4H14v6.5h-4V14H3.5v-4H10V3.5Z" fill="currentColor"/>',
  train:
    '<path d="M7 4.2h10c1.7 0 3 1.4 3 3.1V15c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7.3c0-1.7 1.3-3.1 3-3.1Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4 12.2h16M8 8h3.2M12.8 8H16M8 20.2l-1.4 1.4M16 20.2l1.4 1.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  gift:
    '<path d="M5 11.2h14V20H5Z M12 11.2V20 M5 15.2h14 M12 11.2c-1.6-3.2-4.4-2.4-3.6-.6 M12 11.2c1.6-3.2 4.4-2.4 3.6-.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  note:
    '<path d="M9 17.8a2.4 2.4 0 1 0 2.5-2.4V5.2L18 7v6.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16.2" cy="15.2" r="2.2" fill="currentColor"/>',
  grill:
    '<path d="M4 15.2h16M6.5 15.2V19M17.5 15.2V19M4 19.4h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 12.2V7.4M12 13V6.2M16 12.2V7.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  glass:
    '<path d="M7 4.2h10l-2.4 8.2V19M9.2 19.6h5.6M8.4 8.4h7.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
};

function stopIcon(stop) {
  return stop.icon || placeIcons[stop.place] || "hanok";
}

function makeIcon(name, className) {
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", className);
  svg.innerHTML = icons[name] || icons.hanok;
  return svg;
}

const days = [
  {
    id: "fri",
    tab: "Fri 27",
    short: "Arrive",
    kicker: "Friday · Nov 27",
    title: "Arrival evening",
    summary: "Land at 5:35 PM, drop the bags at Chungmuro, then dinner and a night walk in Myeongdong.",
    color: "#c4372c",
    returns: "Walk back to the apartment at Chungmuro.",
    stops: [
      {
        place: "icn",
        kind: "airport",
        name: "Incheon Airport, Terminal 1",
        short: "Terminal 1",
        anchor: "e",
        time: "Land 5:35 PM",
        note: "Alaska AS119 from Seattle. Limousine bus 6001 or 6015 at Gate 5 / stop 5B, to Chungmuro Station.",
        tags: ["Bus", "Card OK"],
        toNext: { dashed: true, label: "Bus · about 70 min", x: 210, y: 360 },
      },
      {
        place: "airbnb",
        kind: "home",
        name: "Namsan Central View Suite",
        short: "Home",
        anchor: "w",
        time: "Chungmuro",
        note: "24 Chungmu-ro, next to Chungmuro Station Exit 7. Drop bags, then walk into Myeongdong.",
        tags: ["Stay"],
      },
      {
        place: "myeongdong",
        name: "Myeongdong",
        short: "Myeongdong",
        anchor: "e",
        time: "Evening",
        note: "One errand, an optional cash stop, dinner, then the carts.",
        tags: ["Cash", "Passport"],
        cluster: [
          {
            name: "Lotte Department Store",
            note: "Pick up the free Lotte tourist card at the 1F Tax Refund Lounge. Discounts only, not your transit card. Passport needed. This is Friday’s only shop stop.",
          },
          {
            name: "Money exchange",
            note: "Optional, on Myeongdong 2-gil by the Chinese Embassy. Daesagwan, Daesin, and Ilpumhyang stay open until about 9:50 PM.",
          },
          {
            name: "Myeongdong Kyoja",
            note: "Dinner, confirmed. Kalguksu and steamed dumplings, about ₩35,000 for two. Card is fine.",
          },
          {
            name: "Street food",
            note: "Carts around Myeongdong-gil and the cathedral. Cash only, about ₩25,000.",
          },
        ],
      },
      {
        place: "cheonggye",
        name: "Cheonggyecheon",
        short: "Stream",
        anchor: "n",
        time: "After dinner",
        note: "Start near Cheonggye Plaza and walk the stream back toward the apartment. The Shinsegae and Lotte Christmas lights are on the way.",
      },
    ],
  },
  {
    id: "sat",
    tab: "Sat 28",
    short: "Palace",
    kicker: "Saturday · Nov 28",
    title: "Palace, Seongsu, Gwangjang",
    summary: "Palace in the morning, lunch in Ikseon-dong, shopping in Seongsu, then Gwangjang after dark.",
    color: "#1a4f8b",
    returns: "SPAO is the last stop, on the walk back to Chungmuro.",
    stops: [
      {
        place: "airbnb",
        kind: "home",
        name: "Chungmuro",
        short: "Home",
        anchor: "w",
        time: "Morning",
        note: "7-Eleven near the station: hazelnut coffee and banana milk, about ₩6,000 for two. Buy the Climate Card at a station machine before the first ride — foreign card, first tap today.",
      },
      {
        place: "palace",
        name: "Gyeongbokgung",
        short: "Palace",
        anchor: "w",
        time: "Morning",
        note: "Entry ₩3,000 each. The guard-changing ceremony is at the main gate, Gwanghwamun.",
      },
      {
        place: "bukchon",
        name: "Bukchon and Samcheong-dong",
        short: "Bukchon",
        anchor: "e",
        time: "Late morning",
        note: "A walk between the palace and lunch.",
        cluster: [
          {
            name: "Bukchon Hanok Village",
            note: "Visitor hours 10 AM–5 PM.",
          },
          {
            name: "Samcheong-dong",
            note: "Cafe street on the way toward Ikseon-dong.",
          },
        ],
      },
      {
        place: "ikseon",
        name: "Ikseon-dong",
        short: "Ikseon",
        anchor: "w",
        time: "Lunch",
        note: "The meal first, then two cafes with a gap between them.",
        cluster: [
          {
            name: "Favorite",
            note: "Lunch. Pork-belly rosé pasta and whirlwind omurice, about ₩40,000 for two. Small room, so a queue is normal.",
          },
          {
            name: "Cheongsudang",
            note: "Hanok cafe. Don’t go straight from the table.",
          },
          {
            name: "Soha Salt Pond",
            note: "Salt bread and coffee. You marked this one for sure.",
          },
        ],
      },
      {
        place: "seongsu",
        name: "Seongsu",
        short: "Seongsu",
        anchor: "n",
        time: "Afternoon",
        note: "HAUS NOWHERE first — it closes at 9. If this runs long, Blue Elephant, SPAO, and Musinsa can move to Myeongdong or Hongdae.",
        tags: ["Passport"],
        cluster: [
          {
            name: "HAUS NOWHERE",
            note: "Go here first. Gentle Monster on 2F, Tamburins on 3F, teahouse upstairs. Open 11 AM–9 PM.",
          },
          {
            name: "Blue Elephant",
            note: "Non-prescription glasses, bought on the spot. Instant tax refund is likely.",
          },
          {
            name: "Fresh Bread Factory",
            note: "Salt bread to go, for Sunday morning.",
          },
          {
            name: "Musinsa Megastore",
            note: "Clothes.",
          },
          {
            name: "Musinsa Beauty",
            note: "Cosmetics.",
          },
          {
            name: "NYUNYU",
            note: "Accessories.",
          },
          {
            name: "Chaakan",
            note: "Shoes. Tax refund is usually from the receipt, not instant.",
          },
          {
            name: "Olive Young",
            note: "Sunscreen, eye patches, skincare, supplements. Instant refund at the register.",
          },
        ],
      },
      {
        place: "gwangjang",
        name: "Gwangjang Market",
        short: "Gwangjang",
        anchor: "e",
        time: "Night",
        note: "Bindaetteok with makgeolli, mayak gimbap, yukhoe alley, and the kalguksu stall. About ₩45,000 for two. Stalls are cash only.",
        tags: ["Cash only"],
      },
      {
        place: "spao",
        name: "SPAO Myeongdong",
        short: "SPAO",
        anchor: "s",
        time: "Late",
        note: "Clothes, open late, on the way home from the market.",
      },
    ],
  },
  {
    id: "sun",
    tab: "Sun 29",
    short: "Hongdae",
    kicker: "Sunday · Nov 29",
    title: "Clinic, Hongdae, Dosan",
    summary: "Clinic at 10:30, gifts at Seoul Station, lunch and a wander in Hongdae, then Dosan Jeongyuk on the 1st floor in Cheongdam.",
    aside: "Researched and passed over: Hanmiok, Seolya Galbi, Dosan Black, Mongtan, and Ggupdang. Possible extra, not on this route: Jinseong Hanwoo Gopchang, Sindang Station Exit 7, one stop from home. Beef offal. Sunday noon to 11.",
    color: "#0e7a62",
    returns: "Taxi or subway back to Chungmuro.",
    stops: [
      {
        place: "airbnb",
        kind: "home",
        name: "Chungmuro",
        short: "Home",
        anchor: "s",
        time: "Morning",
        note: "Same 7-Eleven start: hazelnut coffee and banana milk. Eat the Seongsu salt bread if you still have it.",
      },
      {
        place: "evio",
        name: "Evio Clinic",
        short: "Evio",
        anchor: "w",
        time: "10:30 AM",
        note: "Booked for both of you, in Myeongdong. The street address is in the confirmation. Treatments are still unset, so the rest of the morning can move.",
        tags: ["Booked"],
      },
      {
        place: "station",
        icon: "gift",
        name: "Lotte Mart, Seoul Station",
        short: "Lotte Mart",
        anchor: "s",
        time: "Late morning",
        note: "Inside Seoul Station. Gifts: four cousin gifts and sunscreen for your mom. About ₩75,000. Instant tax refund, passport needed.",
        tags: ["Passport"],
      },
      {
        place: "odarijip",
        icon: "pot",
        name: "Odarijip, Hongdae",
        short: "Lunch",
        anchor: "n",
        time: "Lunch",
        note: "Confirmed. Gejang for Akanksha. Charcoal pork BBQ, yukhoe, seafood pajeon, and stews for Tushar — no crab. About ₩100,000 for two. A few minutes from Hongik University Station Exit 9.",
        tags: ["Card OK"],
      },
      {
        place: "hongdae",
        name: "Hongdae",
        short: "Hongdae",
        anchor: "s",
        time: "Afternoon",
        note: "Light shopping and snacks between lunch and dinner. About ₩65,000 together.",
        tags: ["Cash for stalls"],
        cluster: [
          { name: "SPAO", note: "A small clothes stop." },
          { name: "Musinsa", note: "A small clothes stop." },
          { name: "Chaakan", note: "Shoes." },
          { name: "Yoogane Dakgalbi", note: "Spicy stir-fried chicken." },
          { name: "Jopok Tteokbokki", note: "Spicy rice cakes." },
          { name: "ChangHwaDang", note: "Noodles and dumplings." },
          { name: "Kyochon", note: "Fried chicken." },
          { name: "Street stalls", note: "Hotteok and skewers. Cash only." },
        ],
      },
      {
        place: "dusan",
        name: "Dosan Jeongyuk, 1F",
        short: "Dosan",
        anchor: "w",
        time: "Dinner",
        note: "Decided. 도산정육, 1st floor in Cheongdam — not Dosan Black upstairs. Jeju pork, grilled at the table. Sunday dinner from 5 PM, about four minutes from Apgujeong Rodeo Station Exit 5. Reservations are on CatchTable.",
      },
      {
        place: "bars",
        name: "Cheongdam bars",
        short: "Bars",
        anchor: "n",
        time: "After dinner",
        note: "All within about ten minutes of dinner. Cocktails are about ₩20,000–30,000. Budget about ₩100,000 for two bars.",
        tags: ["Card OK"],
        cluster: [
          { name: "Le Chamber", note: "Speakeasy cocktails." },
          { name: "Zest", note: "Cocktails." },
          { name: "Pine & Co", note: "Cocktails, Cheongdam / Apgujeong." },
        ],
      },
    ],
  },
  {
    id: "mon",
    tab: "Mon 30",
    short: "Depart",
    kicker: "Monday · Nov 30",
    title: "Out to Terminal 2",
    summary: "Leave about 8:55 AM for the City Airport Terminal. Checkout is noon, and the flight is 12:45 PM.",
    color: "#1c1915",
    returns: "",
    stops: [
      {
        place: "airbnb",
        kind: "home",
        name: "Namsan Central View Suite",
        short: "Home",
        anchor: "e",
        time: "8:55 AM",
        note: "Checkout is 12:00 PM. Leave about 8:55 so you make the City Airport Terminal. Check-in there cuts off at 9:25 AM.",
        tags: ["Stay"],
      },
      {
        place: "station",
        name: "City Airport Terminal, Seoul Station",
        short: "City Terminal",
        anchor: "w",
        time: "Morning",
        note: "Bag drop and departure immigration, then AREX Express to Terminal 2. Express is ₩13,000 each, a separate ticket, about 43 minutes. Not covered by the Climate Card. At SEA check-in on Thursday, ask whether the checked bags tag through to Delhi.",
        toNext: { dashed: true, label: "AREX Express · 43 min", x: 150, y: 370 },
      },
      {
        place: "icn",
        kind: "airport",
        name: "Incheon Airport, Terminal 2",
        short: "Terminal 2",
        anchor: "e",
        time: "12:45 PM",
        note: "Korean Air KE497 to Delhi. Designated City Terminal lane: security only, since bags and departure immigration were done at Seoul Station. Tax-refund kiosks are after security — choose the card refund. Duty-free pickup is in T2.",
        tags: ["Flight"],
      },
    ],
  },
];

const state = { dayId: "fri", stop: 0 };

const svgNS = "http://www.w3.org/2000/svg";

function currentDay() {
  return days.find((day) => day.id === state.dayId);
}

function routePoints(day) {
  const points = day.stops.map((stop) => ({
    ...places[stop.place],
    dashed: false,
    label: "",
  }));
  for (let i = 0; i < day.stops.length - 1; i += 1) {
    const link = day.stops[i].toNext;
    if (!link) continue;
    points[i + 1] = {
      ...points[i + 1],
      dashed: Boolean(link.dashed),
      label: link.label || "",
      labelAt: link.x ? { x: link.x, y: link.y } : null,
    };
  }
  if (day.returns) {
    points.push({ ...places.airbnb, dashed: false, label: "", returning: true });
  }
  return points;
}

function loopTurn(points) {
  let area = 0;
  for (let i = 0; i < points.length - 1; i += 1) {
    area += points[i].x * points[i + 1].y - points[i + 1].x * points[i].y;
  }
  return area >= 0 ? 1 : -1;
}

function segmentPath(a, b, turn) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const bend = b.dashed || len < 140 ? 0 : Math.min(8, len * 0.03);
  const cpx = mx + (-dy / len) * bend * turn;
  const cpy = my + (dx / len) * bend * turn;
  return `M ${a.x} ${a.y} Q ${cpx} ${cpy} ${b.x} ${b.y}`;
}

function renderTabs() {
  const glyphs = { fri: "금", sat: "토", sun: "일", mon: "월" };
  const tabs = document.getElementById("day-tabs");
  tabs.replaceChildren(
    ...days.map((day) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "day-tab";
      button.setAttribute("role", "tab");
      button.dataset.day = day.id;
      button.setAttribute("aria-selected", day.id === state.dayId ? "true" : "false");
      const glyph = document.createElement("b");
      glyph.className = "glyph";
      glyph.textContent = glyphs[day.id];
      const label = document.createElement("span");
      label.textContent = day.tab;
      const detail = document.createElement("small");
      detail.textContent = day.short;
      button.append(glyph, label, detail);
      return button;
    })
  );
}

function renderMap(day) {
  const accents = {
    fri: "#ffb1a8",
    sat: "#9ec4f5",
    sun: "#7ee0c8",
    mon: "#f3e2b8",
  };
  document.documentElement.style.setProperty("--day", day.color);
  document.documentElement.style.setProperty("--accent", accents[day.id]);
  document.getElementById("map-kicker").textContent = day.kicker;
  document.getElementById("map-title").textContent = day.title;
  document.getElementById("map-count").textContent = `${day.stops.length} stops`;

  const layer = document.getElementById("route-layer");
  layer.replaceChildren();
  const points = routePoints(day);
  const turn = loopTurn(points);
  for (let i = 0; i < points.length - 1; i += 1) {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", segmentPath(points[i], points[i + 1], turn));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", day.color);
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("vector-effect", "non-scaling-stroke");
    path.setAttribute("opacity", "0.92");
    if (points[i + 1].dashed) path.setAttribute("stroke-dasharray", "7 8");
    layer.append(path);
  }

  const pins = document.getElementById("pin-layer");
  const nodes = [];
  day.stops.forEach((stop, index) => {
    const spot = places[stop.place];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pin anchor-${stop.anchor}${stop.kind ? ` ${stop.kind}` : ""}`;
    button.style.left = `${(spot.x / W) * 100}%`;
    button.style.top = `${(spot.y / H) * 100}%`;
    button.dataset.stop = String(index);
    if (index === state.stop) button.setAttribute("aria-current", "true");
    button.setAttribute("aria-label", `Stop ${index + 1}, ${stop.name}`);
    const mark = document.createElement("span");
    mark.className = "pin-mark";
    const badge = document.createElement("span");
    badge.className = "pin-num";
    badge.textContent = String(index + 1);
    mark.append(makeIcon(stopIcon(stop), "pin-icon"), badge);
    const name = document.createElement("span");
    name.className = "pin-name";
    name.textContent = stop.short;
    button.append(mark, name);
    nodes.push(button);
  });

  points.forEach((point) => {
    if (!point.label) return;
    const at = point.labelAt || {
      x: (points[points.indexOf(point) - 1].x + point.x) / 2,
      y: (points[points.indexOf(point) - 1].y + point.y) / 2,
    };
    const label = document.createElement("span");
    label.className = "leg-label";
    label.style.left = `${(at.x / W) * 100}%`;
    label.style.top = `${(at.y / H) * 100}%`;
    label.textContent = point.label;
    nodes.push(label);
  });

  pins.replaceChildren(...nodes);
}

function renderPanel(day, { scroll } = {}) {
  const panel = document.getElementById("itinerary");
  const kicker = document.createElement("p");
  kicker.className = "eyebrow";
  kicker.textContent = day.kicker;
  const title = document.createElement("h2");
  title.textContent = day.title;
  const summary = document.createElement("p");
  summary.className = "deck";
  summary.textContent = day.summary;

  const list = document.createElement("ol");
  list.className = "stops";
  day.stops.forEach((stop, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stop";
    button.dataset.stop = String(index);
    if (index === state.stop) button.setAttribute("aria-current", "true");

    const row = document.createElement("span");
    row.className = "stop-row";
    const num = document.createElement("span");
    num.className = "num";
    num.append(makeIcon(stopIcon(stop), "num-icon"));
    const copy = document.createElement("span");
    const time = document.createElement("span");
    time.className = "meta";
    time.textContent = `${index + 1} · ${stop.time}`;
    const name = document.createElement("strong");
    name.textContent = stop.name;
    const note = document.createElement("em");
    note.textContent = stop.note;
    copy.append(time, name, note);
    if (stop.tags) {
      const tags = document.createElement("span");
      tags.className = "meta";
      tags.textContent = stop.tags.join(" · ");
      copy.append(tags);
    }
    row.append(num, copy);
    button.append(row);

    if (stop.cluster && index === state.stop) {
      const cluster = document.createElement("ol");
      cluster.className = "cluster";
      stop.cluster.forEach((place) => {
        const placeItem = document.createElement("li");
        const placeName = document.createElement("strong");
        placeName.textContent = place.name;
        const placeNote = document.createElement("span");
        placeNote.textContent = place.note;
        placeItem.append(placeName, placeNote);
        cluster.append(placeItem);
      });
      button.append(cluster);
    }

    item.append(button);
    list.append(item);
  });

  const pieces = [kicker, title, summary, list];
  if (day.returns) {
    const back = document.createElement("p");
    back.className = "return-note";
    back.textContent = day.returns;
    pieces.push(back);
  }
  if (day.aside) {
    const aside = document.createElement("p");
    aside.className = "return-note";
    aside.textContent = day.aside;
    pieces.push(aside);
  }
  panel.replaceChildren(...pieces);

  if (scroll) {
    const current = panel.querySelector('.stop[aria-current="true"]');
    current?.scrollIntoView({ block: "nearest" });
  }
}

function render({ scroll = false } = {}) {
  const day = currentDay();
  renderTabs();
  renderMap(day);
  renderPanel(day, { scroll });
}

function selectDay(dayId) {
  if (!days.some((day) => day.id === dayId) || dayId === state.dayId) return;
  state.dayId = dayId;
  state.stop = 0;
  render();
  document.getElementById("itinerary").scrollTop = 0;
}

function selectStop(index, { scroll = false } = {}) {
  const day = currentDay();
  if (index < 0 || index >= day.stops.length || index === state.stop) return;
  state.stop = index;
  render({ scroll });
}

document.getElementById("day-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (tab) selectDay(tab.dataset.day);
});

document.getElementById("day-tabs").addEventListener("keydown", (event) => {
  const order = days.map((day) => day.id);
  const index = order.indexOf(state.dayId);
  if (event.key === "ArrowRight") {
    event.preventDefault();
    selectDay(order[(index + 1) % order.length]);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    selectDay(order[(index - 1 + order.length) % order.length]);
  }
});

document.getElementById("pin-layer").addEventListener("click", (event) => {
  const pin = event.target.closest("[data-stop]");
  if (pin) selectStop(Number(pin.dataset.stop), { scroll: true });
});

document.getElementById("itinerary").addEventListener("click", (event) => {
  const stop = event.target.closest("[data-stop]");
  if (stop) selectStop(Number(stop.dataset.stop));
});

render();
