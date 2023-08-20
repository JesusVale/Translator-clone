import { SectionType } from "../types.d.ts";


type Props = {
    onChange: (text: string) => void,
    value: string,
    loading?: boolean,
    type: SectionType 
}

function getPlaceholder({loading, type}: {loading?: boolean, type: SectionType}){
    if(type === SectionType.From) return "Introducir Texto";
    if(loading) return "Cargando...";
    return "";
}

export default function TranslateInput({onChange, value, loading, type}: Props){


    function changeText(e: React.ChangeEvent<HTMLTextAreaElement>){
        onChange(e.target.value);
    }

    return (

        <textarea value={value} className="translate-input__input" onChange={changeText} placeholder={getPlaceholder({loading, type})}></textarea>
    )
}