const tripDays = {
  friday: {
    kicker: "FRIDAY · SEPTEMBER 4",
    mapTitle: "West entrance and geysers",
    date: "Friday, September 4",
    theme: "Thermal icons after check-in",
    miles: "≈70 miles",
    depart: "2:20 PM",
    finish: "≈9:15 PM",
    light: "Sunset 7:53",
    driving: "≈2¼ hr base",
    route: [
      [55, 277],
      [165, 267],
      [205, 312],
      [225, 365],
      [245, 373],
      [225, 365],
      [165, 267],
      [55, 277],
    ],
    stops: [
      {
        x: 55,
        y: 277,
        time: "2:20",
        title: "Leave West Yellowstone",
        detail: "Enter via West Entrance after hotel check-in.",
      },
      {
        x: 205,
        y: 312,
        time: "3:05",
        title: "Midway boardwalk",
        detail: "Grand Prismatic close-up plus Excelsior Geyser Crater.",
      },
      {
        x: 193,
        y: 300,
        time: "4:05",
        title: "Grand Prismatic Overlook",
        detail: "Fairy Falls trailhead; 1.2-mile round trip for the complete view.",
      },
      {
        x: 225,
        y: 365,
        time: "5:20",
        title: "Old Faithful",
        detail: "Check the prediction immediately and watch one eruption.",
      },
      {
        x: 245,
        y: 373,
        time: "6:10",
        title: "Morning Glory Pool",
        detail: "Walk the roughly 3-mile round trip and watch sunset while returning through Upper Geyser Basin.",
      },
    ],
    tip:
      "Get the Old Faithful prediction first. If the eruption is badly timed, begin the Morning Glory walk and watch Old Faithful after returning.",
  },
  saturday: {
    kicker: "SATURDAY · SEPTEMBER 5",
    mapTitle: "Lake, canyon and Norris",
    date: "Saturday, September 5",
    theme: "The Lower Loop’s greatest hits",
    miles: "≈145 miles",
    depart: "≈7:15 AM",
    finish: "≈9:20 PM",
    light: "Sunset 7:51",
    driving: "≈4½ hr base",
    route: [
      [55, 277],
      [165, 267],
      [210, 346],
      [225, 365],
      [340, 405],
      [480, 350],
      [420, 278],
      [405, 203],
      [250, 150],
      [225, 222],
      [198, 300],
      [165, 267],
      [55, 277],
    ],
    stops: [
      {
        x: 55,
        y: 277,
        time: "7:15",
        title: "Leave West Yellowstone",
        detail: "Leave after breakfast and boxed-lunch pickup; 7:30 is the comfortable latest target.",
      },
      {
        x: 210,
        y: 346,
        time: "8:05",
        title: "Black Sand Basin",
        detail: "Emerald Pool, Sunset Lake and Cliff Geyser before continuing south.",
      },
      {
        x: 340,
        y: 405,
        time: "9:25",
        title: "West Thumb",
        detail: "Abyss Pool, Fishing Cone and the Yellowstone Lake boardwalk.",
      },
      {
        x: 480,
        y: 350,
        time: "10:30",
        title: "Yellowstone Lake",
        detail: "Western shoreline, Lake Hotel and Fishing Bridge.",
      },
      {
        x: 420,
        y: 278,
        time: "12:00",
        title: "Mud Volcano + Hayden",
        detail: "Dragon’s Mouth and Churning Caldron, then scan Hayden Valley.",
      },
      {
        x: 405,
        y: 203,
        time: "1:30",
        title: "Grand Canyon",
        detail: "Artist Point, Lower Falls brink, Lookout or Red Rock Point.",
      },
      {
        x: 250,
        y: 150,
        time: "4:30",
        title: "Norris Geyser Basin",
        detail: "Prioritize the Porcelain overlook and short loop; add Back Basin only if ahead.",
      },
      {
        x: 225,
        y: 222,
        time: "5:55",
        title: "Artists Paintpots",
        detail: "One-mile loop; the most active mudpots are on the upper section.",
      },
      {
        x: 198,
        y: 300,
        time: "7:10",
        title: "Lower Basin sunset",
        detail: "Great Fountain or Fountain Paint Pot; sunset around 7:51.",
      },
    ],
    tip:
      "Artist Point gives the complete canyon composition. Brink of Lower Falls trades the panorama for power and proximity.",
  },
  sunday: {
    kicker: "SUNDAY · SEPTEMBER 6",
    mapTitle: "Lamar to Gardiner",
    date: "Sunday, September 6",
    theme: "Wildlife, Tower and terraces",
    miles: "≈225 miles to BZN",
    depart: "7:00 AM",
    finish: "BZN ≈10:20",
    light: "Sunset 7:51",
    driving: "≈6½ hr base",
    route: [
      [55, 277],
      [165, 267],
      [250, 150],
      [274, 57],
      [445, 120],
      [590, 110],
      [620, 91],
      [445, 120],
      [274, 57],
      [291, 91],
      [274, 57],
      [274, 18],
      [110, 5],
    ],
    stops: [
      {
        x: 55,
        y: 277,
        time: "7:00",
        title: "Leave West Yellowstone",
        detail: "Start the long drive toward Lamar via Norris, Mammoth and Tower Junction.",
      },
      {
        x: 590,
        y: 110,
        time: "10:00",
        title: "Lamar Valley",
        detail: "Start around Slough Creek and work east with binoculars or a scope.",
      },
      {
        x: 620,
        y: 91,
        time: "12:00",
        title: "Trout Lake",
        detail: "Moderate 1.2-mile hike after the Lamar wildlife session.",
      },
      {
        x: 445,
        y: 120,
        time: "1:45",
        title: "Tower–Roosevelt",
        detail: "Tower Fall, Calcite Springs, lunch and optional horseback ride.",
      },
      {
        x: 274,
        y: 57,
        time: "4:30",
        title: "Mammoth terraces",
        detail: "Lower boardwalk, Palette Spring, Canary Spring and Upper Terrace Drive.",
      },
      {
        x: 291,
        y: 91,
        time: "7:10",
        title: "Swan Lake sunset",
        detail: "Open western sky, mountains and possible elk; sunset around 7:51.",
      },
      {
        x: 274,
        y: 18,
        time: "8:30",
        title: "Exit through Gardiner",
        detail: "Continue to BZN; allow about 1½ hours without a long stop.",
      },
    ],
    tip:
      "A spotting scope makes a larger difference than another hike in Lamar. A 7:00 AM start reaches the valley around 10:00, depending on construction and wildlife traffic.",
  },
};

const landmarks = [
  { x: 55, y: 277, label: "West" },
  { x: 165, y: 267, label: "Madison" },
  { x: 250, y: 150, label: "Norris" },
  { x: 274, y: 57, label: "Mammoth" },
  { x: 445, y: 120, label: "Tower" },
  { x: 590, y: 110, label: "Lamar" },
  { x: 405, y: 203, label: "Canyon" },
  { x: 420, y: 278, label: "Hayden" },
  { x: 480, y: 350, label: "Lake" },
  { x: 340, y: 405, label: "West Thumb" },
  { x: 225, y: 365, label: "Old Faithful" },
];

const plannedPlaces = [
  ["Artists Paintpots", "Saturday · 5:55 PM"],
  ["Yellowstone Lake", "Saturday · 10:30 AM"],
  ["Artist Point", "Saturday · canyon"],
  ["Mud Pots / Mud Volcano", "Saturday · 12:00 PM"],
  ["Excelsior Geyser Crater", "Friday · Midway boardwalk"],
  ["Firehole River", "Friday + Saturday corridor"],
  ["Lower Falls", "Saturday · canyon"],
  ["Tower Fall", "Sunday · 1:45 PM"],
  ["Midway Geyser Basin", "Friday · 3:05 PM"],
  ["Lower Geyser Basin", "Saturday · sunset"],
  ["Grand Canyon", "Saturday · 1:30 PM"],
  ["Lamar Valley", "Sunday · 10:00 AM"],
  ["Mammoth Hot Springs", "Sunday · 4:30 PM"],
  ["Grand Prismatic Overlook", "Friday · 4:05 PM"],
  ["Hayden Valley", "Saturday · midday"],
  ["West Thumb Geyser Basin", "Saturday · 9:25 AM"],
  ["Black Sand Basin", "Saturday · 8:05 AM"],
  ["Grand Prismatic Spring", "Friday · boardwalk + overlook"],
  ["Old Faithful", "Friday · 5:20 PM"],
  ["Morning Glory Pool", "Friday · 6:10 PM"],
];

const optionalPlaces = [
  ["Firehole River pullout", "Add only if parking and timing are easy."],
];

const recoveryPlans = {
  midway: {
    label: "RECOVERY ROUTE A",
    title: "Grand Prismatic catch-up",
    summary: "Start Saturday in Midway before continuing around the Lower Loop.",
    tradeoff: "Keep Norris to its Porcelain Basin overlook and short loop.",
    stops: [
      ["7:15", "Leave after breakfast and boxed-lunch pickup"],
      ["8:00–9:45", "Midway boardwalk + Grand Prismatic Overlook"],
      ["9:55–10:25", "Black Sand Basin"],
      ["11:10", "West Thumb"],
      ["12:10", "Quick Yellowstone Lake stop"],
      ["12:55", "Mud Volcano + Hayden Valley"],
      ["1:55–4:10", "Grand Canyon and Artist Point"],
      ["4:40–5:20", "Norris Porcelain Basin only"],
      ["5:35–6:15", "Artists Paintpots"],
      ["6:35", "Lower Geyser Basin for sunset"],
    ],
  },
  faithful: {
    label: "RECOVERY ROUTE B",
    title: "Upper Basin catch-up",
    summary: "Use Saturday’s first hours for Old Faithful, Morning Glory and Black Sand.",
    tradeoff: "Skip Norris and make Yellowstone Lake a quick stop.",
    stops: [
      ["7:15", "Leave after breakfast and boxed-lunch pickup"],
      ["8:00–10:30", "Old Faithful + Morning Glory Pool"],
      ["10:40–11:10", "Black Sand Basin"],
      ["11:55", "West Thumb"],
      ["1:00", "Quick Yellowstone Lake stop"],
      ["1:40", "Mud Volcano + Hayden Valley"],
      ["2:40–4:45", "Grand Canyon and Artist Point"],
      ["5:15–6:00", "Artists Paintpots"],
      ["6:45", "Lower Geyser Basin for sunset"],
    ],
  },
  most: {
    label: "RECOVERY ROUTE C",
    title: "Friday reset",
    summary: "Recover both headline geyser experiences, then protect the canyon and sunset.",
    tradeoff: "Skip Norris, Yellowstone Lake and Artists Paintpots. West Thumb still gives you a lake view.",
    stops: [
      ["7:15", "Leave after breakfast and boxed-lunch pickup"],
      ["8:00–9:45", "Midway boardwalk + Grand Prismatic Overlook"],
      ["10:05–12:30", "Old Faithful + Morning Glory Pool"],
      ["12:40–1:10", "Black Sand Basin"],
      ["1:55–2:35", "West Thumb"],
      ["3:10", "Mud Volcano + quick Hayden scan"],
      ["4:00–6:00", "Grand Canyon and Artist Point"],
      ["6:35", "Lower Geyser Basin for sunset"],
    ],
  },
  none: {
    label: "ORIGINAL SATURDAY",
    title: "No recovery needed",
    summary: "Keep the full Lower Loop plan shown in the Saturday route tab.",
    tradeoff: "You retain the longer Yellowstone Lake, canyon and Norris visits.",
    stops: [
      ["7:15", "Leave after breakfast and boxed-lunch pickup"],
      ["8:05–8:40", "Black Sand Basin"],
      ["9:25", "West Thumb"],
      ["10:30", "Yellowstone Lake"],
      ["12:00", "Mud Volcano + Hayden Valley"],
      ["1:30–4:00", "Grand Canyon and Artist Point"],
      ["4:30–5:40", "Norris Geyser Basin"],
      ["5:55–6:35", "Artists Paintpots"],
      ["7:10", "Lower Geyser Basin for sunset"],
    ],
  },
};

const svgNS = "http://www.w3.org/2000/svg";

const googleMapsQueries = {
  "Leave West Yellowstone": "West Entrance Yellowstone National Park",
  "Midway boardwalk": "Midway Geyser Basin Yellowstone",
  "Grand Prismatic Overlook": "Grand Prismatic Spring Overlook",
  "Old Faithful": "Old Faithful Yellowstone",
  "Morning Glory Pool": "Morning Glory Pool Yellowstone",
  "Black Sand Basin": "Black Sand Basin Yellowstone",
  "West Thumb": "West Thumb Geyser Basin",
  "Yellowstone Lake": "Yellowstone Lake",
  "Mud Volcano + Hayden": "Mud Volcano Yellowstone",
  "Grand Canyon": "Artist Point Yellowstone",
  "Norris Geyser Basin": "Norris Geyser Basin",
  "Artists Paintpots": "Artists Paintpots Yellowstone",
  "Lower Basin sunset": "Fountain Paint Pot Yellowstone",
  "Lamar Valley": "Lamar Valley Yellowstone",
  "Trout Lake": "Trout Lake Trailhead Yellowstone",
  "Tower–Roosevelt": "Tower Fall Yellowstone",
  "Mammoth terraces": "Mammoth Hot Springs",
  "Swan Lake sunset": "Swan Lake Flat Yellowstone",
  "Exit through Gardiner": "Roosevelt Arch Gardiner",
};

function googleMapsUrl(stopTitle) {
  const query = googleMapsQueries[stopTitle] ?? `${stopTitle} Yellowstone National Park`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function createSvgElement(name, attributes = {}) {
  const node = document.createElementNS(svgNS, name);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function selectStop(stopIndex, scrollToTimeline = false) {
  const mapStops = document.querySelectorAll(".map-stop");
  const timelineStops = document.querySelectorAll(".timeline-stop");

  mapStops.forEach((stop, index) => {
    const selected = index === stopIndex;
    stop.classList.toggle("selected", selected);
    stop.setAttribute("aria-pressed", String(selected));
  });

  timelineStops.forEach((stop, index) => {
    const selected = index === stopIndex;
    stop.classList.toggle("selected", selected);
    if (selected) {
      stop.setAttribute("aria-current", "true");
    } else {
      stop.removeAttribute("aria-current");
    }
  });

  if (scrollToTimeline && window.matchMedia("(max-width: 900px)").matches) {
    timelineStops[stopIndex]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
  }
}

function renderMap(day) {
  const routeLayer = document.querySelector("#route-line");
  const landmarkLayer = document.querySelector("#landmark-layer");
  const stopLayer = document.querySelector("#stop-layer");

  routeLayer.replaceChildren();
  landmarkLayer.replaceChildren();
  stopLayer.replaceChildren();

  const route = createSvgElement("polyline", {
    class: "route-path",
    points: day.route.map(([x, y]) => `${x},${y}`).join(" "),
  });
  routeLayer.append(route);

  landmarks.forEach((landmark) => {
    const group = createSvgElement("g");
    const dot = createSvgElement("circle", {
      class: "landmark-dot",
      cx: landmark.x,
      cy: landmark.y,
      r: 4,
    });
    const label = createSvgElement("text", {
      class: "landmark-label",
      x: landmark.x + 8,
      y: landmark.y - 8,
    });
    label.textContent = landmark.label;
    group.append(dot, label);
    landmarkLayer.append(group);
  });

  day.stops.forEach((stop, index) => {
    const group = createSvgElement("g", {
      class: "map-stop",
      tabindex: "0",
      role: "button",
      "aria-label": `Highlight ${stop.title} in the itinerary`,
      "aria-controls": `timeline-stop-${index}`,
      "aria-pressed": "false",
    });
    const title = createSvgElement("title");
    title.textContent = `${index + 1}. ${stop.title}`;
    const dot = createSvgElement("circle", {
      class: "stop-dot",
      cx: stop.x,
      cy: stop.y,
      r: 13,
    });
    const number = createSvgElement("text", {
      class: "stop-number",
      x: stop.x,
      y: stop.y + 4,
    });
    number.textContent = index + 1;
    group.append(title, dot, number);
    group.addEventListener("click", () => selectStop(index, true));
    group.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectStop(index, true);
    });
    stopLayer.append(group);
  });
}

function renderTimeline(day) {
  const timeline = document.querySelector("#timeline");
  const items = day.stops.map((stop, index) => {
    const item = document.createElement("li");
    const selectButton = document.createElement("button");
    const time = document.createElement("time");
    const content = document.createElement("div");
    const title = document.createElement("h4");
    const detail = document.createElement("p");
    const mapLink = document.createElement("a");

    item.id = `timeline-stop-${index}`;
    item.className = "timeline-stop";
    selectButton.type = "button";
    selectButton.className = "timeline-select";
    selectButton.setAttribute("aria-label", `Highlight ${stop.title} on the map`);
    time.textContent = stop.time;
    title.textContent = stop.title;
    detail.textContent = stop.detail;
    mapLink.className = "map-link";
    mapLink.href = googleMapsUrl(stop.title);
    mapLink.target = "_blank";
    mapLink.rel = "noreferrer";
    mapLink.textContent = "Google Maps ↗";
    content.append(title, detail);
    selectButton.append(time, content);
    item.append(selectButton, mapLink);
    selectButton.addEventListener("click", () => selectStop(index));
    mapLink.addEventListener("click", () => selectStop(index));
    return item;
  });
  timeline.replaceChildren(...items);
}

function selectDay(dayId) {
  const day = tripDays[dayId];
  if (!day) return;

  document.querySelectorAll(".day-tab").forEach((tab) => {
    const selected = tab.dataset.day === dayId;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });

  document.querySelector("#map-kicker").textContent = day.kicker;
  document.querySelector("#map-title").textContent = day.mapTitle;
  document.querySelector("#map-miles").textContent = day.miles;
  document.querySelector("#day-date").textContent = day.date;
  document.querySelector("#day-theme").textContent = day.theme;
  document.querySelector("#day-depart").textContent = day.depart;
  document.querySelector("#day-finish").textContent = day.finish;
  document.querySelector("#day-light").textContent = day.light;
  document.querySelector("#day-driving").textContent = day.driving;
  document.querySelector("#view-tip").textContent = day.tip;

  renderMap(day);
  renderTimeline(day);
}

function renderPlaceList(selector, places) {
  const container = document.querySelector(selector);
  const items = places.map(([name, note]) => {
    const item = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    item.className = "place-item";
    title.textContent = name;
    detail.textContent = note;
    item.append(title, detail);
    return item;
  });
  container.replaceChildren(...items);
}

function selectRecoveryPlan(planId) {
  const plan = recoveryPlans[planId];
  if (!plan) return;

  document.querySelectorAll(".recovery-option").forEach((button) => {
    const selected = button.dataset.recovery === planId;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  document.querySelector("#recovery-label").textContent = plan.label;
  document.querySelector("#recovery-title").textContent = plan.title;
  document.querySelector("#recovery-summary").textContent = plan.summary;
  document.querySelector("#recovery-tradeoff").textContent = plan.tradeoff;

  const items = plan.stops.map(([timeValue, stop]) => {
    const item = document.createElement("li");
    const time = document.createElement("time");
    const label = document.createElement("strong");
    time.textContent = timeValue;
    label.textContent = stop;
    item.append(time, label);
    return item;
  });
  document.querySelector("#recovery-timeline").replaceChildren(...items);
}

const routeSection = document.querySelector("#route");
const foodSection = document.querySelector("#food");
if (routeSection && foodSection) {
  routeSection.after(foodSection);
}

document.querySelectorAll(".day-tab").forEach((tab, index, tabs) => {
  tab.addEventListener("click", () => selectDay(tab.dataset.day));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    selectDay(tabs[nextIndex].dataset.day);
  });
});

document.querySelectorAll(".recovery-option").forEach((button) => {
  button.addEventListener("click", () => selectRecoveryPlan(button.dataset.recovery));
});

renderPlaceList("#planned-places", plannedPlaces);
renderPlaceList("#optional-places", optionalPlaces);
selectDay("friday");
selectRecoveryPlan("midway");
