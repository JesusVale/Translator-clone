import useContextColumns from "../hooks/useContextColumns.ts"
import { ExchangeArrows } from "./icons.tsx";
import { isLanguage } from "../helpers.ts";

type Props = {
    interchangeLanguages: () => void
}

export default function InterchangeButton({interchangeLanguages}: Props){

    return (
        <div className="translate-input__interchange">
          <button onClick={interchangeLanguages} className="translate-input__intechangeButton"><ExchangeArrows /></button>
        </div>
    )
}