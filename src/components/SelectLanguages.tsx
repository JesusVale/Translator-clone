import { type FromLanguage, 
         type  UpdateLanguangeFunction,  
         SectionType,
         Languages} from "../types.d.ts"
import { VALID_LANGUAGES } from "../constants.ts";
import { ValorantLogo } from "./icons.tsx";
import Language from "./Language.tsx";
import { useState } from 'react';

type Props = {
    updateLanguage: UpdateLanguangeFunction<Languages>,
    type: SectionType.To
} | {
    updateLanguage: UpdateLanguangeFunction<FromLanguage>,
    type: SectionType.From
}

export default function SelectLanguages({updateLanguage, type}: Props){

    const [selectOpen, setSelectOpen]= useState(false);

    const classButton = selectOpen? "select-languages__button select-languages__button--open" : "select-languages__button" ;
    const classLanguanges = selectOpen? "select-languages__languages select-languages__languages--open" : "select-languages__languages" ;

    return (
        <div className="select-languages">
            <button className={classButton} onClick={() => setSelectOpen(!selectOpen)}><ValorantLogo /></button>
            <div className={classLanguanges}>
                {type === SectionType.From && <Language language={"auto"} onclick={() => {updateLanguage("auto"); setSelectOpen(false);}} />}
                {
                    Object.entries(VALID_LANGUAGES).map(([key]) => (
                        <Language key={`Select-${type}-${key}`} 
                        language={key as Languages} 
                        onclick={() => {updateLanguage(key as Languages); setSelectOpen(false);}} />
                    ))
                }
            </div>
            


        </div>
    )

}