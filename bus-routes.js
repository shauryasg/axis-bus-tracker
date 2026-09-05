// bus-routes.js - Official Axis Colleges Bus Routes & Stoppages Data

export const TRANSPORT_TEAM = {

  head: {

    name: "Kishan Sir",

    role: "HOD / Transport Manager",

    phone: "+911234567890",

    wa: "911234567890"

  },

  controlRoom: {

    name: "Campus Control Room",

    role: "Emergency Helpline",

    phone: "+911234567890"

  }

};

export const AXIS_BUS_ROUTES = {

  "BUS 1": {

    busId: "BUS 1",

    routeName: "Barasirohi - Kalyanpur - Rawatpur - Rama Devi",

    color: "#2563eb",

    stops: [

      { name: "BARASIROHI", lat: 26.5050, lng: 80.2580, time: "06:30 AM" },
      { name: "KALYANPUR CHUNGI", lat: 26.4950, lng: 80.2680, time: "06:36 AM" },
      { name: "CNG PUMP PANKI ROAD", lat: 26.4900, lng: 80.2720, time: "06:41 AM" },
      { name: "AWAS VIKAS 1", lat: 26.4860, lng: 80.2790, time: "06:45 AM" },
      { name: "KESHAV VATIKA", lat: 26.4830, lng: 80.2850, time: "06:48 AM" },
      { name: "CYLENDER CHAURAHA", lat: 26.4810, lng: 80.2900, time: "06:51 AM" },
      { name: "IIPR CROSSING", lat: 26.4780, lng: 80.2960, time: "06:55 AM" },
      { name: "LUCKY HOTEL", lat: 26.4750, lng: 80.3010, time: "06:59 AM" },
      { name: "GURUDEV PALACE", lat: 26.4720, lng: 80.3060, time: "07:03 AM" },
      { name: "GUMTI NO.9", lat: 26.4680, lng: 80.3100, time: "07:07 AM" },
      { name: "GEETA NAGAR", lat: 26.4650, lng: 80.3130, time: "07:11 AM" },
      { name: "RAWATPUR", lat: 26.4620, lng: 80.3170, time: "07:16 AM" },
      { name: "GOL CHAURAHA", lat: 26.4590, lng: 80.3210, time: "07:20 AM" },
      { name: "COCA COLA", lat: 26.4560, lng: 80.3240, time: "07:25 AM" },
      { name: "GUMTI NO.5", lat: 26.4530, lng: 80.3280, time: "07:30 AM" },
      { name: "JARIB CHAUKI", lat: 26.4490, lng: 80.3320, time: "07:35 AM" },
      { name: "CITY CLUB", lat: 26.4460, lng: 80.3360, time: "07:40 AM" },
      { name: "AFIM KOTHI", lat: 26.4420, lng: 80.3400, time: "07:45 AM" },
      { name: "TATT MILL", lat: 26.4380, lng: 80.3440, time: "07:51 AM" },
      { name: "COD CROSSING", lat: 26.4340, lng: 80.3490, time: "07:57 AM" },
      { name: "MANOJ HOTEL", lat: 26.4290, lng: 80.3540, time: "08:03 AM" },
      { name: "VIRENDRA SWAROOP", lat: 26.4250, lng: 80.3590, time: "08:10 AM" },
      { name: "GANGA NAGAR", lat: 26.4200, lng: 80.3640, time: "08:15 AM" },
      { name: "RAMA DEVI", lat: 26.4150, lng: 80.3700, time: "08:22 AM" },
      { name: "AXIS COLLEGES", lat: 26.3406, lng: 80.4503, time: "08:45 AM" }

    ]

  },


  "BUS 9": {

    busId: "BUS 9",

    routeName: "Shaurya - Marhala Chauraha - Azad Nagar - Rama Devi - Axis",

    color: "#2563eb",

    stops: [

      { name: "MARHALA CHAURAHA", lat: 26.49451, lng: 80.40038, time: "07:45 AM" },

      { name: "AZAD NAGAR", lat: 26.49250, lng: 80.39920, time: "07:47 AM" },

      { name: "AMBIKA PURAM", lat: 26.48860, lng: 80.39534, time: "07:48 AM" },

      { name: "JOGA BHOGA", lat: 26.48640, lng: 80.39460, time: "07:49 AM" },

      { name: "FAUJI DHABA", lat: 26.48530, lng: 80.39400, time: "07:50 AM" },

      { name: "RISHI NAGAR", lat: 26.48280, lng: 80.39280, time: "07:51 AM" },

      { name: "SABJI MANDI", lat: 26.48120, lng: 80.39180, time: "07:52 AM" },

      { name: "SARASWATI TALKIES", lat: 26.48010, lng: 80.39090, time: "07:53 AM" },

      { name: "DURGA MANDIR", lat: 26.47880, lng: 80.39000, time: "07:54 AM" },

      { name: "GANGA GHAT THANA", lat: 26.47730, lng: 80.38900, time: "07:55 AM" },

      { name: "PANDIT HOTEL", lat: 26.46650, lng: 80.38700, time: "08:05 AM" },

      { name: "OM PURWA", lat: 26.42950, lng: 80.38450, time: "08:13 AM" },

      { name: "JAGAI PURWA", lat: 26.42567, lng: 80.38341, time: "08:14 AM" },

      { name: "JAISWAL HOUSE", lat: 26.42620, lng: 80.38400, time: "08:15 AM" },

      { name: "PECIFIC LAWN", lat: 26.42600, lng: 80.38500, time: "08:18 AM" },

      { name: "MAKKA MASJID", lat: 26.43225, lng: 80.38974, time: "08:19 AM" },

      { name: "RIDING HOUSE", lat: 26.43050, lng: 80.38900, time: "08:21 AM" },

      { name: "KDA", lat: 26.43110, lng: 80.39210, time: "08:24 AM" },

      { name: "JK-1", lat: 26.42950, lng: 80.39100, time: "08:26 AM" },

      { name: "HARJINDER NAGAR", lat: 26.41619, lng: 80.39230, time: "08:28 AM" },

      { name: "RAMA DEVI", lat: 26.41150, lng: 80.38675, time: "08:30 AM" },

      { name: "AXIS COLLEGES", lat: 26.3406, lng: 80.4503, time: "08:45 AM" }

    ]

  },


  "BUS 3": {

    busId: "BUS 3",

    routeName: "Kalyanpur - Panki - Bhauti - Axis",

    color: "#f59e0b",

    stops: [

      { name: "BRAMHA DEV MANDIR", lat: 26.4980, lng: 80.2600, time: "06:30 AM" },
      { name: "MASWANPUR CHAURAHA", lat: 26.4950, lng: 80.2630, time: "06:34 AM" },
      { name: "KESHA KALYANPUR", lat: 26.4920, lng: 80.2660, time: "06:38 AM" },
      { name: "KALYANPUR POLICE CHAUKI", lat: 26.4890, lng: 80.2690, time: "06:42 AM" },
      { name: "LODHESHWAR MANDIR", lat: 26.4860, lng: 80.2720, time: "06:46 AM" },
      { name: "SARITA PALACE", lat: 26.4830, lng: 80.2750, time: "06:50 AM" },
      { name: "SARAI CHAURAHA", lat: 26.4800, lng: 80.2780, time: "06:54 AM" },
      { name: "ARMAPUR GATE", lat: 26.4770, lng: 80.2810, time: "06:58 AM" },
      { name: "PANKI POWER HOUSE", lat: 26.4740, lng: 80.2840, time: "07:02 AM" },
      { name: "RATANPUR CAMBRIJ", lat: 26.4700, lng: 80.2870, time: "07:08 AM" },
      { name: "RATANPUR NARAYANA", lat: 26.4670, lng: 80.2900, time: "07:14 AM" },
      { name: "PANKI MANDIR", lat: 26.4610, lng: 80.2960, time: "07:24 AM" },
      { name: "BMC", lat: 26.4580, lng: 80.2990, time: "07:28 AM" },
      { name: "C.V.RAMAN", lat: 26.4550, lng: 80.3020, time: "07:33 AM" },
      { name: "BHATIYA HOTEL", lat: 26.4520, lng: 80.3050, time: "07:38 AM" },
      { name: "PANKI PADAV", lat: 26.4490, lng: 80.3080, time: "07:44 AM" },
      { name: "BHAUTI BRIDGE", lat: 26.4450, lng: 80.3120, time: "07:50 AM" },
      { name: "CHAKARPUR MANDY", lat: 26.4410, lng: 80.3160, time: "07:56 AM" },
      { name: "KAPILI MOD", lat: 26.4330, lng: 80.3240, time: "08:06 AM" },
      { name: "STEEL AUTHORITY OVERBRIDGE", lat: 26.4290, lng: 80.3290, time: "08:10 AM" },
      { name: "NAUBASTA CHAURAHA", lat: 26.4240, lng: 80.3350, time: "08:18 AM" },
      { name: "RAMA DEVI", lat: 26.4150, lng: 80.3700, time: "08:25 AM" },
      { name: "AXIS COLLEGE", lat: 26.3406, lng: 80.4503, time: "08:45 AM" }

    ]

  },


  "BUS 4": {

    busId: "BUS 4",

    routeName: "Gujaini - Kidwai Nagar - Yashoda Nagar - Axis",

    color: "#9333ea",

    stops: [

      { name: "GUJAINI TEMPO STAND", lat: 26.4280, lng: 80.2980, time: "06:30 AM" },
      { name: "DURGA MANDIR", lat: 26.4300, lng: 80.3020, time: "06:35 AM" },
      { name: "DABAULI MOD", lat: 26.4320, lng: 80.3060, time: "06:40 AM" },
      { name: "HAPPY TOWER", lat: 26.4340, lng: 80.3100, time: "06:45 AM" },
      { name: "SHASTRI CHOWK", lat: 26.4360, lng: 80.3140, time: "06:50 AM" },
      { name: "KABIR HOSPITAL", lat: 26.4380, lng: 80.3170, time: "06:55 AM" },
      { name: "SANKAT MOCHAN MANDIR", lat: 26.4400, lng: 80.3200, time: "07:00 AM" },
      { name: "SACHAN GUEST HOUSE", lat: 26.4420, lng: 80.3230, time: "07:05 AM" },
      { name: "SOCIETY MOTOR", lat: 26.4440, lng: 80.3260, time: "07:10 AM" },
      { name: "DEEP CINEMA", lat: 26.4460, lng: 80.3290, time: "07:15 AM" },
      { name: "KIDWAI NAGAR THANA", lat: 26.4480, lng: 80.3320, time: "07:20 AM" },
      { name: "GAUSHALA", lat: 26.4450, lng: 80.3360, time: "07:26 AM" },
      { name: "SANTE BABA MANDIR", lat: 26.4420, lng: 80.3400, time: "07:32 AM" },
      { name: "DURGA MANDIR MICKY HOUSE", lat: 26.4390, lng: 80.3440, time: "07:38 AM" },
      { name: "ALANKAR GUEST HOUSE", lat: 26.4360, lng: 80.3480, time: "07:44 AM" },
      { name: "YASHODA NAGAR", lat: 26.4320, lng: 80.3530, time: "07:51 AM" },
      { name: "SHYAM NAGAR BYPASS", lat: 26.4280, lng: 80.3580, time: "07:58 AM" },
      { name: "KOYALA NAGAR", lat: 26.4240, lng: 80.3630, time: "08:05 AM" },
      { name: "DELHI SUJANPUR", lat: 26.4200, lng: 80.3670, time: "08:12 AM" },
      { name: "RAMADEVI BRIDGE", lat: 26.4150, lng: 80.3710, time: "08:20 AM" },
      { name: "AXIS COLLEGE", lat: 26.3406, lng: 80.4503, time: "08:45 AM" }

    ]

  }

};