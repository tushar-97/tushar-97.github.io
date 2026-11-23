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
        address: "Incheon International Airport Terminal 1",
        map: "인천국제공항 제1여객터미널",
        anchor: "e",
        time: "Land 5:35 PM",
        note: "Alaska AS119 from Seattle. Limousine bus 6001 or 6015 at Gate 5 / stop 5B, to Chungmuro Station.",
        tags: ["Bus", "Card OK"],
        toNext: { dashed: true, label: "Bus · about 70 min", x: 210, y: 360 },
      },
      {
        place: "airbnb",
        kind: "home",
        name: "Home",
        short: "Home",
        address: "24 Chungmu-ro, Jung-gu · Chungmuro Station Exit 7",
        map: "충무로 24",
        anchor: "w",
        time: "Chungmuro",
        note: "Namsan Central View Suite. Drop bags, then walk into Myeongdong.",
      },
      {
        place: "myeongdong",
        name: "Myeongdong",
        short: "Myeongdong",
        address: "Myeongdong, Jung-gu",
        map: "명동",
        anchor: "e",
        time: "Evening",
        note: "Convert $100, pick up the Lotte card, dinner, then the carts.",
        tags: ["Cash", "Passport · Lotte card and exchange"],
        cluster: [
          {
            name: "Lotte Department Store",
            address: "81 Namdaemun-ro, Jung-gu",
            map: "롯데백화점 본점 81 Namdaemun-ro",
            note: "Pick up the free Lotte tourist card at the 1F Tax Refund Lounge. Discounts only, not your transit card. Passport needed. This is Friday’s only shop stop.",
          },
          {
            name: "Money exchange",
            address: "26 Myeongdong 2-gil, Jung-gu",
            map: "대사관환전 명동2길",
            note: "Convert $100 on Friday evening. By the Chinese Embassy: Daesagwan, Daesin, and Ilpumhyang, open until about 9:50 PM. Passport needed.",
          },
          {
            name: "Myeongdong Kyoja",
            address: "29 Myeongdong 10-gil, Jung-gu",
            map: "명동교자 본점",
            note: "Dinner, confirmed. Kalguksu and steamed dumplings, about ₩35,000 for two. Card is fine.",
          },
          {
            name: "Street food",
            address: "Myeongdong-gil, Jung-gu",
            map: "명동 명동길",
            note: "Carts around Myeongdong-gil and the cathedral. Cash only, about ₩25,000.",
          },
        ],
      },
      {
        place: "cheonggye",
        name: "Cheonggyecheon",
        short: "Stream",
        address: "Cheonggye Plaza, 1 Cheonggyecheon-ro, Jongno-gu",
        map: "청계광장",
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
        name: "Home",
        short: "Home",
        address: "24 Chungmu-ro, Jung-gu · Chungmuro Station Exit 7",
        map: "충무로 24",
        anchor: "w",
        time: "Morning",
        note: "Namsan Central View Suite. 7-Eleven near the station: hazelnut coffee and banana milk, about ₩6,000 for two. Buy the Climate Card at a station machine before the first ride — foreign card, first tap today.",
      },
      {
        place: "palace",
        name: "Gyeongbokgung",
        short: "Palace",
        address: "161 Sajik-ro, Jongno-gu",
        map: "경복궁",
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
        address: "37 Gyedong-gil, Jongno-gu",
        map: "북촌한옥마을",
        cluster: [
          {
            name: "Bukchon Hanok Village",
            address: "37 Gyedong-gil, Jongno-gu",
            map: "북촌한옥마을",
            note: "Visitor hours 10 AM–5 PM.",
          },
          {
            name: "Samcheong-dong",
            address: "Samcheong-ro, Jongno-gu",
            map: "삼청동",
            note: "Cafe street on the way toward Ikseon-dong.",
          },
        ],
      },
      {
        place: "ikseon",
        name: "Ikseon-dong",
        short: "Ikseon",
        address: "Ikseon-dong, Jongno-gu",
        map: "익선동",
        anchor: "w",
        time: "Lunch",
        note: "The lunch first, then two cafes with a gap between them.",
        cluster: [
          {
            name: "Favorite Ikseon",
            address: "17-32 Supyo-ro 28-gil, Jongno-gu",
            map: "익선취향",
            note: "The lunch. Whole pork belly rosé pasta and whirlwind omurice, about ₩40,000 for two. Small room, so a queue is normal.",
          },
          {
            name: "Cheongsudang",
            address: "Ikseon-dong, Jongno-gu",
            map: "청수당 익선동",
            note: "Hanok cafe. Don’t go straight from the table.",
          },
          {
            name: "Soha Salt Pond",
            address: "Ikseon-dong, Jongno-gu",
            map: "소하염전 익선동",
            note: "Salt bread and coffee. You marked this one for sure.",
          },
        ],
      },
      {
        place: "seongsu",
        name: "Seongsu",
        short: "Seongsu",
        address: "Seongsu-dong, Seongdong-gu",
        map: "성수동",
        anchor: "n",
        time: "Afternoon",
        note: "HAUS NOWHERE first — it closes at 9. Saturday is the main shopping day. Sunday in Hongdae is only a backup.",
        tags: ["Passport · instant tax refund"],
        cluster: [
          {
            name: "HAUS NOWHERE",
            address: "433 Ttukseom-ro, Seongdong-gu",
            map: "하우스 노웨어 성수",
            note: "Go here first. Gentle Monster on 2F, Tamburins on 3F, teahouse upstairs. Open 11 AM–9 PM.",
          },
          {
            name: "Blue Elephant",
            address: "13 Yeonmujang-gil, Seongdong-gu",
            map: "블루엘리펀트 성수",
            note: "Non-prescription glasses, bought on the spot. Instant tax refund is likely. Bring your passport.",
          },
          {
            name: "Fresh Bread Factory",
            address: "Seongsu-dong, Seongdong-gu",
            map: "프레시 브레드 팩토리 성수",
            note: "Salt bread to go, for Sunday morning.",
          },
          {
            name: "Musinsa Megastore",
            address: "Seongsu-dong, Seongdong-gu",
            map: "무신사 성수",
            note: "Main clothes stop. The Hongdae branch on Sunday is a small backup.",
          },
          {
            name: "Musinsa Beauty",
            address: "Seongsu-dong, Seongdong-gu",
            map: "무신사 뷰티 성수",
            note: "Cosmetics shop in Seongsu. Not the Evio clinic.",
          },
          {
            name: "NYUNYU",
            address: "Seongsu-dong, Seongdong-gu",
            map: "뉴뉴 성수",
            note: "Accessories.",
          },
          {
            name: "Chaakan",
            address: "Seongsu-dong, Seongdong-gu",
            map: "착한구두 성수",
            note: "Main shoe stop. Tax refund is usually from the receipt, not instant. Sunday in Hongdae is a backup.",
          },
          {
            name: "Olive Young",
            address: "Seongsu-dong, Seongdong-gu",
            map: "올리브영 성수",
            note: "Sunscreen, eye patches, skincare, supplements. Instant tax refund at the register. Bring your passport.",
          },
        ],
      },
      {
        place: "gwangjang",
        name: "Gwangjang Market",
        short: "Gwangjang",
        address: "88 Changgyeonggung-ro, Jongno-gu",
        map: "광장시장",
        anchor: "e",
        time: "Night",
        note: "Bindaetteok with makgeolli, mayak gimbap, yukhoe alley, and the kalguksu stall. About ₩45,000 for two. Stalls are cash only.",
        tags: ["Cash only"],
      },
      {
        place: "spao",
        name: "SPAO Myeongdong",
        short: "SPAO",
        address: "Myeongdong, Jung-gu",
        map: "스파오 명동",
        anchor: "s",
        time: "Late",
        note: "Main clothes stop, open late, on the way home. Sunday’s Hongdae branch is only a backup.",
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
    aside: "Researched and passed over: Hanmiok, Seolya Galbi, Dosan Black, Mongtan, and Ggupdang. Possible extra, not on this route: Jinseong Hanwoo Gopchang, 243-1 Dasan-ro, Jung-gu, Sindang Station Exit 7, one stop from home. Beef offal. Sunday noon to 11.",
    asideMap: "진성한우곱창 신당",
    color: "#0e7a62",
    returns: "Taxi or subway back to Chungmuro.",
    stops: [
      {
        place: "airbnb",
        kind: "home",
        name: "Home",
        short: "Home",
        address: "24 Chungmu-ro, Jung-gu · Chungmuro Station Exit 7",
        map: "충무로 24",
        anchor: "s",
        time: "Morning",
        note: "Namsan Central View Suite. Same 7-Eleven start: hazelnut coffee and banana milk. Eat the Seongsu salt bread if you still have it.",
      },
      {
        place: "evio",
        name: "Evio Clinic",
        short: "Evio",
        address: "Myeongdong, Jung-gu · street address is in the booking",
        map: "에비오의원 명동",
        anchor: "w",
        time: "10:30 AM",
        note: "Booked clinic appointment for both of you, not a beauty shop. Treatments are still unset, so the rest of the morning can move.",
        tags: ["Clinic appointment"],
      },
      {
        place: "station",
        icon: "gift",
        name: "Lotte Mart, Seoul Station",
        short: "Lotte Mart",
        address: "405 Hangang-daero, Yongsan-gu · inside Seoul Station",
        map: "롯데마트 서울역점",
        anchor: "s",
        time: "Late morning",
        note: "Gifts: four cousin gifts and sunscreen for your mom. About ₩75,000. Instant tax refund at the register. Bring your passport.",
        tags: ["Passport · instant tax refund"],
      },
      {
        place: "odarijip",
        icon: "pot",
        name: "Odarijip, Hongdae",
        short: "Lunch",
        address: "36 Jandari-ro 6-gil, Mapo-gu · Hongik Univ. Station Exit 9",
        map: "오다리집 홍대점",
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
        note: "Snacks, plus a small backup shop if Saturday ran long. SPAO, Musinsa, and Chaakan were the main visits yesterday. About ₩65,000 together.",
        tags: ["Cash for stalls"],
        address: "Hongdae, Mapo-gu · Hongik University Station",
        map: "홍대입구역",
        cluster: [
          { name: "SPAO", address: "Hongdae, Mapo-gu", map: "스파오 홍대", note: "Backup only. Saturday at Myeongdong is the main clothes stop." },
          { name: "Musinsa", address: "Hongdae, Mapo-gu", map: "무신사 홍대", note: "Backup only. Saturday in Seongsu is the main visit." },
          { name: "Chaakan", address: "Hongdae, Mapo-gu", map: "착한구두 홍대", note: "Backup only. Saturday in Seongsu is the main shoe stop." },
          { name: "Yoogane Dakgalbi", address: "Hongdae, Mapo-gu", map: "유가네닭갈비 홍대", note: "Spicy stir-fried chicken." },
          { name: "Jopok Tteokbokki", address: "Hongdae, Mapo-gu", map: "조폭떡볶이 홍대", note: "Spicy rice cakes." },
          { name: "ChangHwaDang", address: "Hongdae, Mapo-gu", map: "창화당 홍대", note: "Noodles and dumplings." },
          { name: "Kyochon", address: "Hongdae, Mapo-gu", map: "교촌치킨 홍대", note: "Fried chicken." },
          { name: "Street stalls", address: "Hongdae, Mapo-gu", map: "홍대 거리 포장마차", note: "Hotteok and skewers. Cash only." },
        ],
      },
      {
        place: "dusan",
        name: "Dosan Jeongyuk, 1F",
        short: "Dosan",
        address: "12 Seolleung-ro 155-gil, Gangnam-gu · 1st floor",
        map: "도산정육 청담본점",
        anchor: "w",
        time: "Dinner",
        note: "Decided. 도산정육, 1st floor in Cheongdam — not Dosan Black upstairs. Jeju pork, grilled at the table. Sunday dinner from 5 PM, about four minutes from Apgujeong Rodeo Station Exit 5. Reservations are on CatchTable.",
      },
      {
        place: "bars",
        name: "Cheongdam bars",
        short: "Bars",
        address: "Cheongdam, Gangnam-gu",
        map: "청담동",
        anchor: "n",
        time: "After dinner",
        note: "The three planned bars, all within about ten minutes of dinner. Cocktails are about ₩20,000–30,000. Budget about ₩100,000 for two bars.",
        tags: ["Card OK"],
        cluster: [
          { name: "Le Chamber", address: "Cheongdam-dong, Gangnam-gu", map: "르챔버 청담", note: "Speakeasy cocktails." },
          { name: "Zest", address: "Cheongdam, Gangnam-gu", map: "제스트 청담", note: "Cocktails." },
          { name: "Pine & Co", address: "Cheongdam / Apgujeong, Gangnam-gu", map: "파인앤코 청담", note: "Cocktails." },
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
    summary: "City Airport Terminal is decided. Leave about 8:55 AM. Checkout is noon, and the flight is 12:45 PM.",
    color: "#1c1915",
    returns: "",
    stops: [
      {
        place: "airbnb",
        kind: "home",
        name: "Home",
        short: "Home",
        address: "24 Chungmu-ro, Jung-gu · Chungmuro Station Exit 7",
        map: "충무로 24",
        anchor: "e",
        time: "8:55 AM",
        note: "Namsan Central View Suite. Noon is only the checkout deadline. Leave with the bags about 8:55 AM for the City Airport Terminal anyway. Check-in there cuts off at 9:25 AM.",
      },
      {
        place: "station",
        name: "City Airport Terminal, Seoul Station",
        short: "City Terminal",
        address: "Seoul Station B2, 405 Hangang-daero, Yongsan-gu",
        map: "서울역 도심공항터미널",
        anchor: "w",
        time: "By 9:25 AM",
        note: "B2. Buy the AREX Express tickets, then Korean Air check-in, bag drop, and departure immigration. Check-in cuts off at 9:25 AM. The train to Terminal 2 is about 10:00–10:30 AM and takes about 51 minutes. ₩13,000 each, a separate ticket, not on the Climate Card. One ticket in cash from the leftover ₩14,000; the other by card.",
        toNext: { dashed: true, label: "AREX Express · 51 min", x: 150, y: 370 },
      },
      {
        place: "icn",
        kind: "airport",
        name: "Incheon Airport, Terminal 2",
        short: "Terminal 2",
        address: "Incheon International Airport Terminal 2",
        map: "인천국제공항 제2여객터미널",
        anchor: "e",
        time: "12:45 PM",
        note: "Korean Air KE497 to Delhi. The designated City Terminal lane bypasses check-in and immigration. Security screening is after that, then the gate. Tax-refund kiosks are after security — choose the card refund. Duty-free pickup is in T2.",
        tags: ["Flight"],
      },
    ],
  },
];

const state = { dayId: "fri", stop: 0, open: new Set() };

function naverHref(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function placeFacts(parent, place) {
  const where = document.createElement("p");
  where.className = "where";
  if (place.address) {
    const addr = document.createElement("span");
    addr.textContent = place.address;
    where.append(addr);
  }
  const link = document.createElement("a");
  link.href = naverHref(place.map || place.name);
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = "Naver Maps";
  where.append(link);
  parent.append(where);
}

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

function renderPanel(day) {
  const panel = document.getElementById("itinerary");
  const kicker = document.createElement("p");
  kicker.className = "eyebrow";
  kicker.textContent = day.kicker;
  const title = document.createElement("h2");
  title.textContent = day.title;
  const summary = document.createElement("p");
  summary.className = "deck";
  summary.textContent = day.summary;

  const jumps = document.createElement("p");
  jumps.className = "jumps";
  [
    ["#airport", "Airport"],
    ["#climate", "Climate Card"],
    ["#cash", "Cash"],
    ["#tax", "Tax refunds"],
  ].forEach(([href, label]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    jumps.append(link);
  });

  const tools = document.createElement("p");
  tools.className = "list-tools";
  const expand = document.createElement("button");
  expand.type = "button";
  expand.dataset.expand = "all";
  const allOpen = day.stops.every((_, index) => state.open.has(index));
  expand.textContent = allOpen ? "Collapse all" : "Expand all";
  tools.append(expand);

  const list = document.createElement("ol");
  list.className = "stops";
  day.stops.forEach((stop, index) => {
    const open = state.open.has(index);
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stop";
    button.dataset.stop = String(index);
    button.setAttribute("aria-expanded", open ? "true" : "false");
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
    const chev = document.createElement("span");
    chev.className = "chev";
    chev.setAttribute("aria-hidden", "true");
    chev.textContent = open ? "–" : "+";
    row.append(num, copy, chev);
    button.append(row);
    item.append(button);

    if (open) {
      const detail = document.createElement("div");
      detail.className = "detail";
      placeFacts(detail, stop);
      if (stop.cluster) {
        const cluster = document.createElement("ol");
        cluster.className = "cluster";
        stop.cluster.forEach((place) => {
          const placeItem = document.createElement("li");
          const placeName = document.createElement("strong");
          placeName.textContent = place.name;
          const placeNote = document.createElement("span");
          placeNote.textContent = place.note;
          placeItem.append(placeName, placeNote);
          placeFacts(placeItem, place);
          cluster.append(placeItem);
        });
        detail.append(cluster);
      }
      item.append(detail);
    }

    list.append(item);
  });

  const pieces = [kicker, title, summary, jumps, tools, list];
  if (day.returns) {
    const back = document.createElement("p");
    back.className = "return-note";
    back.textContent = day.returns;
    pieces.push(back);
  }
  if (day.aside) {
    const aside = document.createElement("p");
    aside.className = "return-note";
    aside.append(day.aside);
    if (day.asideMap) {
      aside.append(" ");
      const link = document.createElement("a");
      link.href = naverHref(day.asideMap);
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "Naver Maps";
      aside.append(link);
    }
    pieces.push(aside);
  }
  panel.replaceChildren(...pieces);
}

function render() {
  const day = currentDay();
  renderTabs();
  renderMap(day);
  renderPanel(day);
}

function selectDay(dayId) {
  if (!days.some((day) => day.id === dayId) || dayId === state.dayId) return;
  state.dayId = dayId;
  state.stop = 0;
  state.open = new Set();
  render();
}

function toggleStop(index) {
  const day = currentDay();
  if (index < 0 || index >= day.stops.length) return;
  state.stop = index;
  if (state.open.has(index)) state.open.delete(index);
  else state.open.add(index);
  render();
}

function focusStop(index) {
  const day = currentDay();
  if (index < 0 || index >= day.stops.length) return;
  state.stop = index;
  state.open.add(index);
  render();
}

function toggleAll() {
  const day = currentDay();
  const allOpen = day.stops.every((_, index) => state.open.has(index));
  state.open = allOpen ? new Set() : new Set(day.stops.map((_, index) => index));
  render();
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
  if (pin) focusStop(Number(pin.dataset.stop));
});

document.getElementById("itinerary").addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  if (event.target.closest("[data-expand]")) {
    toggleAll();
    return;
  }
  const stop = event.target.closest("[data-stop]");
  if (stop) toggleStop(Number(stop.dataset.stop));
});

render();
