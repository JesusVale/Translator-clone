import { FromLanguage } from "../types";
import { VALID_LANGUAGES, AUTO_LANGUAGE } from "../constants.ts";

export default function Language({language, selected=false, onclick}: {language: FromLanguage, selected?:boolean, onclick: () => void}){

    const NAMED_LANGUAGES = {...VALID_LANGUAGES, ...AUTO_LANGUAGE};

    const {icon, name} = NAMED_LANGUAGES[language];

    return (
        <button className={`language${selected? " language--selected":""}`} onClick={onclick}>
            <img src={icon} alt={`${language} icon`} className="language__icon" />
            <span className="language__name">{name}</span>
        </button>
    )
}