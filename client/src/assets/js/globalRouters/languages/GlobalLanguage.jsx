export const ENGLISH_LANG_SELECTED = "en";
export const HINDI_LANG_SELECTED = "हि";
export const DEFAULT_LANG_SELECTED = sessionStorage.getItem("currentLang") || ENGLISH_LANG_SELECTED;

export const LANG_OPTIONS_LIST = [
    {displayValue:"English", value:ENGLISH_LANG_SELECTED},
    {displayValue:"हिन्दी", value:HINDI_LANG_SELECTED}
];

