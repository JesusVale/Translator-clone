import { useState } from 'react';
import { FromLanguage, UpdateLanguangeFunction, ValidColumns, Languages, StateColumn, SectionType } from '../types.d.ts';

const initialValueFrom: StateColumn<FromLanguage> = {
    column1: "auto",
    column2: "en",
    column3: "es",
    selected: "column1"
}
const initialValueTo: StateColumn<Languages> = {
    column1: "en",
    column2: "es",
    column3: "fr",
    selected: "column1"
}

export default function useLanguageColumns(
    updateLanguageFrom: UpdateLanguangeFunction<FromLanguage>,
    updateLanguageTo: UpdateLanguangeFunction<Languages>,
    interchangeLanguages: () => void
) {
    
    const [fromColumns, setFromColumns] = useState(initialValueFrom);
    const [toColumns, setToColumns] = useState(initialValueTo);


    function setToColumn(newColumn: ValidColumns){
        setToColumns({
            ...toColumns,
            selected: newColumn 
        })
        updateLanguageTo(toColumns[newColumn]);
    }

    function setFromColumn(newColumn: ValidColumns){
        setFromColumns({
            ...fromColumns,
            selected: newColumn 
        })
        updateLanguageFrom(fromColumns[newColumn]);
    }

    function setColumnState(newState: StateColumn<FromLanguage>, newLanguage: FromLanguage, type: SectionType) {
        const copyObject = { ...newState };
        const entriesColumns = Object.entries(newState);
        const selectedColumnEntry = entriesColumns.find(([_, value]) => value === newLanguage); //Se busca si el lenguaje que se eligio ya existe en alguna columna

        if (selectedColumnEntry) { //Se verifica si existe
            copyObject.selected = selectedColumnEntry[0] as ValidColumns; //Si si existe se cambia a la columna donde esta el lenguaje
      
        } else {
            copyObject[newState.selected] = newLanguage; //Si no existe, se cambia el lenguaje de la columna seleccionada actualmente
        }

        if(type === SectionType.From){
            setFromColumns(copyObject);
        } else{
            setToColumns(copyObject as StateColumn<Languages>);
        }
    }

    function setLanguageFromColumn(newLanguage: FromLanguage) {
        setColumnState(fromColumns, newLanguage, SectionType.From);
        updateLanguageFrom(newLanguage);
    }

    function setLanguageToColumn(newLanguage: Languages) {
        setColumnState(toColumns, newLanguage, SectionType.To);
        updateLanguageTo(newLanguage);
    }

    function interchangeColumns(){
        const fromSelected = fromColumns[fromColumns.selected];
        const toSelected = toColumns[toColumns.selected];
        if(fromSelected === "auto"){
            return;
        }
        setLanguageFromColumn(toSelected);
        setLanguageToColumn(fromSelected);
        interchangeLanguages();
    }
    
    return {
        toColumns,
        fromColumns,
        setToColumn,
        setFromColumn,
        setLanguageFromColumn,
        setLanguageToColumn,
        interchangeColumns
    }

}