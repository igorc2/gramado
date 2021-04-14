import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")
const ja = require("./ja")
const pt = require("./pt")

i18n.fallbacks = true
i18n.translations = { en, ja, pt }

i18n.locale = Localization.locale || "en"
