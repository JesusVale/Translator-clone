

export const VALID_LANGUAGES = {
    es: {name: "Español", icon: "./src/img/reyna.png"},
    en: {name: "Inglés", icon: "./src/img/brimstone.png"},
    fr: {name: "Francés", icon: "./src/img/chamber.png"},
    ch: {name: "Chino", icon: "./src/img/sage.png"},
    ab: {name: "Árabe", icon: "./src/img/cypher.png"},
    de: {name: "Alemán", icon: "./src/img/killjoy.png"},
    ru: {name: "Ruso", icon: "./src/img/sova.png"},
    ko: {name: "Coreano", icon: "./src/img/jett.png"},
    pt: {name: "Portugués", icon: "./src/img/raze.png"},
    ja: {name: "Japonés", icon: "./src/img/yoru.png"},
    tl: {name: "Filipino", icon: "./src/img/neon.png"},
    tr: {name: "Turco", icon: "./src/img/fade.png"},
    no: {name: "Noruego", icon: "./src/img/deadlock.png"},
    sv: {name: "Sueco", icon: "./src/img/breach.png"}
}

export const VOICE_LANGUAGES = {
    es: "es-MX",
    en: "en-US", 
    fr: "fr-FR",
    ch: "zh-CN",
    ab: "ar-SA",
    de: "de-DE",
    ru: "ru-RU",
    ko: "ko-KR",
    pt: "pt-BR",
    ja: "ja-JP",
    tr: "tr-TR",
    no: "no-NO",
    sv: "sv-SE"
}

export const AUTO_LANGUAGE = {auto: {name: "Detectar Idioma", icon: "./src/img/kayo.png"}};

export const VALID_COLUMNS  = [
    "column1",
    "column2",
    "column3"
] as const;