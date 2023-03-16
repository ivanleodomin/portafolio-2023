import { useState } from 'react';
import toast from "react-hot-toast";

export default function useCopyToClipboard(): [boolean, Function] {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Mail copiado en portapapeles! 📋')
        setIsCopied(true);
    }

    return [isCopied, handleCopy];
};