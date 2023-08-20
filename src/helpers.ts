import { FromLanguage, Languages } from "./types.d.ts";
import { VALID_LANGUAGES } from "./constants.ts";

export function isLanguage(language: FromLanguage): language is Languages {
    return language !== "auto";
}