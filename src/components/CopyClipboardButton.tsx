
import { CopyClipboardIcon } from "./icons.tsx"
import { ToastContainer, toast } from "react-toastify";

interface Props {
    text: string,
    className: string
}

export default function CopyClipboardButton({text, className}: Props){

    function copyOnClipboard(){
        navigator.clipboard.writeText(text).catch(() => {});
        toast('Se copió la traducción correctamente', {
            position: "bottom-left",
            toastId:"COPY_CLIPBOARD",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
    }

    return (
        <>
            <button className={className} onClick={copyOnClipboard}>
                <CopyClipboardIcon />
            </button>
          
            <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

        </>
        
    )
}