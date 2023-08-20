import { FromLanguage, StateColumn, UpdateLanguangeFunction, ValidColumns, SectionType, Languages } from "../types";
import { VALID_COLUMNS } from "../constants.ts";
import Language from "./Language.tsx";
import SelectLanguages from "./SelectLanguages.tsx";

type Props = {
    updateLanguage: UpdateLanguangeFunction<FromLanguage>,
    changeColumn: (newColumn: ValidColumns) => void,
    columns: StateColumn<FromLanguage>,
    type: SectionType.From
} |
{
    updateLanguage: UpdateLanguangeFunction<Languages>,
    changeColumn: (newColumn: ValidColumns) => void,
    columns: StateColumn<Languages>,
    type: SectionType.To
}

export default function SelectLanguageColumns({updateLanguage, type, changeColumn, columns}: Props){

    return (
        <div className="selectLanguage-columns">
            <div className="selectLanguage-columns__columns">
                {
                    VALID_COLUMNS.map(column => (
                        <Language
                        key={`selectLanguageColumns-${column}-${type}`} 
                        language={columns[column]}
                        onclick={() => {
                            changeColumn(column);  
                        }}
                        selected={columns[column] === columns[columns.selected]}
                        />
                    ))
                }
            </div>    
            <SelectLanguages 
            updateLanguage={updateLanguage} 
            type={type} />
        </div>
    )
}