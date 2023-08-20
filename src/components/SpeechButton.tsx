import { Languages } from "../types.d.ts";
import { MicrophoneIcon } from "./icons.tsx";
import { VOICE_LANGUAGES } from "../constants.ts";

interface Props {
    text: string,
    className: string,
    language: Languages
}

export default function SpeechButton({text, className, language}: Props){
    
    function speechText(){;
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.lang = VOICE_LANGUAGES[language];
        speechSynthesis.speak(utterThis);
    }

    return (
        <button disabled={!Object.keys(VOICE_LANGUAGES).includes(language)} className={className} onClick={speechText}>
            <MicrophoneIcon />
        </button>
    )
}