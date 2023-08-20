import { VALID_COLUMNS, VALID_LANGUAGES, AUTO_LANGUAGE } from "./constants.ts";
import Language from './components/Language';

export interface TranslateState {
    fromLanguage: FromLanguages,
    toLanguage: Languages,
    input: string,
    result: string,
    loading: boolean
}

export type Languages = keyof typeof VALID_LANGUAGES;

export type AutoLanguage = keyof typeof AUTO_LANGUAGE;

export type FromLanguage = Languages | AutoLanguage;
  
export const enum ActionTranslate{
    changeFromLanguage,
    changeToLanguage,
    insertInput,
    interchangeLanguages,
    setResult
}

export type ActionTranslateType = 
    {type: ActionTranslate.changeFromLanguage, payload: FromLanguage} |
    {type: ActionTranslate.changeToLanguage, payload: Languages} |
    {type: ActionTranslate.insertInput, payload: string} |
    {type: ActionTranslate.setResult, payload: string} |
    {type: ActionTranslate.interchangeLanguages}

type ValidColumns = typeof VALID_COLUMNS[number];

export type StateColumn<T extends FromLanguage> = {
    column1: T,
    column2: T,
    column3: T,
    selected: ValidColumns
};

export type StateColumns = {
    to: StateColumn<Languages>,
    from: StateColumn<FromLanguage>
}

type UpdateLanguangeFunction<T extends FromLanguage> = (newLanguage: T) => void;

export enum SectionType {
    From= "from",
    To= "to"
}