// ---- Schedule ----
export interface ScheduleDay {
  day: string
  dayShort: string
  classes: { time: string; name: string }[]
}

// ---- Pricing ----
export interface PricingPlan {
  id: string
  name: string
  type: "padrao" | "credito-recorrente"
  installments: number
  installmentPrice: number
  totalPrice: number
  discountPercent: number
  badges: string[]
  highlighted?: boolean
}

// ---- Graduation ----
export interface GraduationExercise {
  name: string
  videoUrl: string
  reps: string
}

export interface GraduationCategory {
  name: string
  exercises: GraduationExercise[]
}

export interface GraduationLevel {
  id: string
  name: string
  title: string
  color: string
  categories: GraduationCategory[]
}

// ================================================================
// SCHEDULE
// ================================================================

const WEEKDAY_TIMES = ["05:30", "06:35", "07:40", "12:15", "13:30", "15:10", "16:15", "17:20", "18:25", "19:30", "20:35"]

export const scheduleData: ScheduleDay[] = [
  {
    day: "Segunda-feira",
    dayShort: "Seg",
    classes: WEEKDAY_TIMES.map(t => ({
      time: t,
      name: "Calistenia",
    })),
  },
  {
    day: "Terça-feira",
    dayShort: "Ter",
    classes: WEEKDAY_TIMES.map(t => {
      if (t === "13:30") return { time: t, name: "-" }
      if (t === "15:10") return { time: t, name: "KIDS" }
      return { time: t, name: "Calistenia" }
    }),
  },
  {
    day: "Quarta-feira",
    dayShort: "Qua",
    classes: WEEKDAY_TIMES.map(t => ({
      time: t,
      name: "Calistenia",
    })),
  },
  {
    day: "Quinta-feira",
    dayShort: "Qui",
    classes: WEEKDAY_TIMES.map(t => {
      if (t === "13:30") return { time: t, name: "-" }
      if (t === "15:10") return { time: t, name: "KIDS" }
      return { time: t, name: "Calistenia" }
    }),
  },
  {
    day: "Sexta-feira",
    dayShort: "Sex",
    classes: WEEKDAY_TIMES.map(t => {
      if (t === "20:35") return { time: t, name: "-" }
      return { time: t, name: "Calistenia" }
    }),
  },
  {
    day: "Sábado",
    dayShort: "Sáb",
    classes: [
      { time: "09:00", name: "Aulão" },
      { time: "10:10", name: "Aulão" },
    ],
  },
]

// ================================================================
// PRICING
// ================================================================
export const pricingData: PricingPlan[] = [
  {
    id: "mensal",
    name: "Mensal",
    type: "padrao",
    installments: 1,
    installmentPrice: 349,
    totalPrice: 349,
    discountPercent: 0,
    badges: [],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    type: "padrao",
    installments: 3,
    installmentPrice: 305.1,
    totalPrice: 915.3,
    discountPercent: 12,
    badges: ["Mais popular"],
    highlighted: true,
  },
  {
    id: "semestral",
    name: "Semestral",
    type: "padrao",
    installments: 6,
    installmentPrice: 288.15,
    totalPrice: 1728.9,
    discountPercent: 17,
    badges: [],
  },
  {
    id: "anual",
    name: "Anual",
    type: "padrao",
    installments: 12,
    installmentPrice: 239,
    totalPrice: 2868,
    discountPercent: 32,
    badges: ["Melhor valor"],
  },
  {
    id: "credito-trimestral",
    name: "Trimestral",
    type: "credito-recorrente",
    installments: 3,
    installmentPrice: 322.05,
    totalPrice: 966.15,
    discountPercent: 5,
    badges: [],
  },
  {
    id: "credito-semestral",
    name: "Semestral",
    type: "credito-recorrente",
    installments: 6,
    installmentPrice: 305.1,
    totalPrice: 1830.6,
    discountPercent: 10,
    badges: [],
  },
  {
    id: "credito-anual",
    name: "Anual",
    type: "credito-recorrente",
    installments: 12,
    installmentPrice: 271.2,
    totalPrice: 3254.4,
    discountPercent: 20,
    badges: ["Melhor valor"],
  },
]

// ================================================================
// GRADUATION LEVELS
// ================================================================
export const graduationLevels: GraduationLevel[] = [
  {
    id: "a1",
    name: "A1",
    title: "Fundação",
    color: "zinc",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "Australian Pull Up",
            videoUrl: "https://youtube.com/shorts/MlLMCGWopOw",
            reps: "22 (M) / 16 (F)",
          },
          {
            name: "Push Up (com joelho)",
            videoUrl: "https://youtube.com/shorts/jKjfbEbzlgY",
            reps: "12*",
          },
          {
            name: "Elevação de Perna (solo)",
            videoUrl: "https://youtube.com/shorts/kjPn2vxh22k",
            reps: "22",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "Adv. Tuck L-sit (paralelas)",
            videoUrl: "https://youtube.com/shorts/q-ceQ0bHxx0",
            reps: "15s",
          },
          {
            name: "Vela (argolas)",
            videoUrl: "https://youtube.com/shorts/eqLRZKAoCC0",
            reps: "10s",
          },
          {
            name: "Shoulderstand (caixotes)",
            videoUrl: "https://youtu.be/K0lruaFluvA",
            reps: "15s",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "Hanging Bar Hold",
            videoUrl: "https://youtube.com/shorts/dVR9eJOqgUM",
            reps: "25s",
          },
          {
            name: "Canoinha",
            videoUrl: "https://youtube.com/shorts/Obtsd4lwJ_A",
            reps: "25s",
          },
          {
            name: "Squat",
            videoUrl: "https://youtube.com/shorts/Z5UZ90uXZIk",
            reps: "40 reps unbroken",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "Elevação de Joelho",
            videoUrl: "https://youtube.com/shorts/qqoff3j7rgU",
            reps: "15 (M) / 12 (F)",
          },
          {
            name: "Dip Caixa",
            videoUrl: "https://youtube.com/shorts/YW8Ssi1VsRE",
            reps: "20 (M) / 15 (F)",
          },
        ],
      },
    ],
  },
  {
    id: "a2",
    name: "A2",
    title: "Estrutura",
    color: "yellow",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "Push Up",
            videoUrl: "https://youtube.com/shorts/z5zSmVPrU6Y",
            reps: "20 (M) / 12* (F)",
          },
          {
            name: "Pull Up Position (topo)",
            videoUrl: "https://youtube.com/shorts/daCRqDCDE0E",
            reps: "20s (M) / 12s (F)",
          },
          {
            name: "Leg Raises (paralelas)",
            videoUrl: "https://youtube.com/shorts/iyXzI0xfNtg",
            reps: "14 (M) / 10 (F)",
          },
          {
            name: "Remada Declinada",
            videoUrl: "https://youtube.com/shorts/2FutKY5gboE",
            reps: "12 (M) / F*",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "L-sit",
            videoUrl: "https://youtube.com/shorts/bbaOXuLFbo8",
            reps: "15s (M) / 10s (F)",
          },
          {
            name: "Frogstand",
            videoUrl: "https://youtube.com/shorts/E1lphChXulA",
            reps: "15s",
          },
          {
            name: "Headstand",
            videoUrl: "https://youtube.com/shorts/B82Be9taTNU",
            reps: "30s",
          },
          {
            name: "L-sit Chin-Up Hold",
            videoUrl: "https://youtube.com/shorts/7iPiOWiEnTY",
            reps: "15s (M) / 8s (F)",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "Burpee",
            videoUrl: "https://youtube.com/shorts/puWoamntjZI",
            reps: "15 em 1min",
          },
          {
            name: "Canoinha",
            videoUrl: "https://youtube.com/shorts/Obtsd4lwJ_A",
            reps: "35s",
          },
          {
            name: "Squat",
            videoUrl: "https://youtube.com/shorts/Z5UZ90uXZIk",
            reps: "60 em 1min30",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "Chin Up",
            videoUrl: "https://youtube.com/shorts/XmbSqiSZ0KY",
            reps: "5 (M) / 1 (F)",
          },
        ],
      },
    ],
  },
  {
    id: "a3",
    name: "A3",
    title: "Força",
    color: "orange",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "Pull Up",
            videoUrl: "https://youtube.com/shorts/kL7pCBzvEAc",
            reps: "12 (M) / 5 (F)",
          },
          {
            name: "Dip",
            videoUrl: "https://youtube.com/shorts/ywLGHHqBCIU",
            reps: "25 (M) / 10 (F)",
          },
          {
            name: "Pike Push Up",
            videoUrl: "https://youtube.com/shorts/lG0vK6hpyyU",
            reps: "10 (M) / 5* (F)",
          },
          {
            name: "Leg Raises c/ Abertura (paralelas)",
            videoUrl: "https://youtube.com/shorts/zQYrYqWYXis",
            reps: "20 (M) / 15 (F)",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "Oitava",
            videoUrl: "https://youtube.com/shorts/IpQCXlaoYV4",
            reps: "4 (M) / 2 (F)",
          },
          {
            name: "Dragonfly",
            videoUrl: "https://youtube.com/shorts/G2MHHUJ-HCw",
            reps: "4 (M) / 3* (F)",
          },
          {
            name: "Skin The Cat",
            videoUrl: "https://youtube.com/shorts/PXaLgXKiA4s",
            reps: "5 (M) / 3 (F)",
          },
          {
            name: "Shoulder Press",
            videoUrl: "https://youtube.com/shorts/IEnYJmLAJo8",
            reps: "5 (M) / 4* (F)",
          },
          {
            name: "Elbowlever",
            videoUrl: "https://youtube.com/shorts/XyXoEM-rdFw",
            reps: "15s (M) / 10s (F)",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "L-sit (paralelas)",
            videoUrl: "https://youtube.com/shorts/bbaOXuLFbo8",
            reps: "25s (M) / 15s (F)",
          },
          {
            name: "Burpee",
            videoUrl: "https://youtube.com/shorts/puWoamntjZI",
            reps: "22 em 1min",
          },
          {
            name: "Jump Squat",
            videoUrl: "https://youtube.com/shorts/KSj37KDljF0",
            reps: "70 em 2min",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "Push Up",
            videoUrl: "https://youtube.com/shorts/NlbM_VXsjWM",
            reps: "35 (M) / 14 (F)",
          },
        ],
      },
    ],
  },
  {
    id: "a4",
    name: "A4",
    title: "Domínio",
    color: "green",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "HSPU",
            videoUrl: "https://youtube.com/shorts/hAtfbZlsAPA",
            reps: "5 (M) / 2 (F)",
          },
          {
            name: "BMU*",
            videoUrl: "https://youtube.com/shorts/KqFpzSjUaQM",
            reps: "10 (M) / 3 (F)",
          },
          {
            name: "Kipping BMU",
            videoUrl: "https://youtube.com/shorts/dpU2A3Vv7qM",
            reps: "20 (M) / 6 (F)",
          },
          {
            name: "Pull Up",
            videoUrl: "https://youtube.com/shorts/kL7pCBzvEAc",
            reps: "25 (M) / 12 (F)",
          },
          {
            name: "Dip",
            videoUrl: "https://youtube.com/shorts/ywLGHHqBCIU",
            reps: "40 (M) / 20 (F)",
          },
          {
            name: "Pé na Barra",
            videoUrl: "https://youtube.com/shorts/sZTkWEm8gXY",
            reps: "16 (M) / 10 (F)",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "Backlever",
            videoUrl: "https://youtube.com/shorts/A_rdKlF4zz0",
            reps: "20s (M) / 10s (F)",
          },
          {
            name: "HS",
            videoUrl: "https://youtube.com/shorts/d03QOXx1rrI",
            reps: "30s (M) / 20s (F)",
          },
          {
            name: "Bandeira",
            videoUrl: "https://youtube.com/shorts/R_EORK7kBMU",
            reps: "6s",
          },
          {
            name: "Bent Arm Straddle Planche",
            videoUrl: "https://youtube.com/shorts/vJ3POE7dVAo",
            reps: "12s (M) / 6s (F)",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "L-sit (paralelas)",
            videoUrl: "https://youtube.com/shorts/bbaOXuLFbo8",
            reps: "40s",
          },
          {
            name: "Burpee",
            videoUrl: "https://youtube.com/shorts/puWoamntjZI",
            reps: "25 em 1min",
          },
          {
            name: "Jump Squat",
            videoUrl: "https://youtube.com/shorts/KSj37KDljF0",
            reps: "100 em 2min30",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "Korean Dips",
            videoUrl: "https://youtube.com/shorts/w1SpFY7opKE",
            reps: "15",
          },
        ],
      },
    ],
  },
  {
    id: "a5",
    name: "A5",
    title: "Maestria",
    color: "blue",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "O.A. Pull Up (alternado)",
            videoUrl: "https://youtube.com/shorts/3GTd3Wjr3XI",
            reps: "3 c.l.",
          },
          {
            name: "RMU",
            videoUrl: "https://youtube.com/shorts/pqtWqM8IC9g",
            reps: "8",
          },
          {
            name: "HSPU p/ Shoulder",
            videoUrl: "https://youtube.com/shorts/VKeAnA52bTo",
            reps: "3",
          },
          {
            name: "Russian Dips",
            videoUrl: "https://youtube.com/shorts/ImWc0HdIk3A",
            reps: "20",
          },
          {
            name: "Pé na Barra",
            videoUrl: "https://youtube.com/shorts/lTs9tYyRRlc",
            reps: "20",
          },
          {
            name: "Pistol (alternado)",
            videoUrl: "https://youtube.com/shorts/gwWtOkfXSdo",
            reps: "8 c.l.",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "Frontlever",
            videoUrl: "https://youtube.com/shorts/C3Lm70x7U5c",
            reps: "15s",
          },
          {
            name: "Straddle Planche",
            videoUrl: "https://youtube.com/shorts/6drUqaQxpEE",
            reps: "6s",
          },
          {
            name: "Touch Backlever",
            videoUrl: "https://youtube.com/shorts/2TnOcMDFIkw",
            reps: "6s",
          },
          {
            name: "Press to Handstand",
            videoUrl: "https://youtube.com/shorts/SBZ_iHB4Yjs",
            reps: "4",
          },
          {
            name: "Handstand",
            videoUrl: "https://youtube.com/shorts/fdqidu6zVm4",
            reps: "1min",
          },
          {
            name: "V-sit",
            videoUrl: "https://youtube.com/shorts/CsV9WFarCeQ",
            reps: "15s",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "L-sit",
            videoUrl: "https://youtube.com/shorts/bbaOXuLFbo8",
            reps: "1min",
          },
          {
            name: "Burpee",
            videoUrl: "https://youtube.com/shorts/puWoamntjZI",
            reps: "30 em 1min15",
          },
          {
            name: "Jump Squat",
            videoUrl: "https://youtube.com/shorts/KSj37KDljF0",
            reps: "110 em 2min30",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "Pull Up",
            videoUrl: "https://youtube.com/shorts/kL7pCBzvEAc",
            reps: "30",
          },
        ],
      },
    ],
  },
  {
    id: "a6",
    name: "A6",
    title: "Elite",
    color: "purple",
    categories: [
      {
        name: "Básicos",
        exercises: [
          {
            name: "RMU + 16kg",
            videoUrl: "https://youtube.com/shorts/849fZEO3P8k",
            reps: "5",
          },
          {
            name: "Hefesto",
            videoUrl: "https://youtube.com/shorts/qN-FvAY5IhY",
            reps: "5",
          },
          {
            name: "Tiger Bend HSPU",
            videoUrl: "https://youtube.com/shorts/xH58gsixiyA",
            reps: "10",
          },
          {
            name: "One Arm Pull Up",
            videoUrl: "https://youtube.com/shorts/3GTd3Wjr3XI",
            reps: "10",
          },
          {
            name: "Impossible Dip",
            videoUrl: "https://youtube.com/shorts/5JxlVr5MQtw",
            reps: "5",
          },
          {
            name: "HSPU 90°",
            videoUrl: "https://youtube.com/shorts/-jUWqmqvDWI",
            reps: "8",
          },
        ],
      },
      {
        name: "Skills",
        exercises: [
          {
            name: "One Arm Frontlever",
            videoUrl: "https://youtube.com/shorts/wFlv2Q_bOoI",
            reps: "10s",
          },
          {
            name: "Full Planche",
            videoUrl: "https://youtube.com/shorts/xb4b4Ff_wu4",
            reps: "10s",
          },
          {
            name: "Victorian (paralelas)",
            videoUrl: "https://youtube.com/shorts/0e9TD0GcK-c",
            reps: "10s",
          },
          {
            name: "Iron Cross",
            videoUrl: "https://youtube.com/shorts/2eZ60XrmXYM",
            reps: "10s",
          },
          {
            name: "One Arm Handstand",
            videoUrl: "https://youtube.com/shorts/7Q2v-etb0KU",
            reps: "10s",
          },
          {
            name: "Humanflag Pull Up",
            videoUrl: "https://youtube.com/shorts/2swYjxgyH6g",
            reps: "5",
          },
        ],
      },
      {
        name: "Condicionamento",
        exercises: [
          {
            name: "L-sit",
            videoUrl: "https://youtube.com/shorts/bbaOXuLFbo8",
            reps: "1min15",
          },
          {
            name: "Jump Squat + 15kg",
            videoUrl: "https://youtube.com/shorts/1RORq50pP-U",
            reps: "100 em 2min30",
          },
          {
            name: "Burpee + 10kg",
            videoUrl: "https://youtube.com/shorts/g45E9civ0p0",
            reps: "24 em 1min",
          },
        ],
      },
      {
        name: "Bônus",
        exercises: [
          {
            name: "BMU (strict)",
            videoUrl: "https://youtube.com/shorts/KqFpzSjUaQM",
            reps: "15",
          },
        ],
      },
    ],
  },
]
