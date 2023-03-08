import { useState } from 'react';

export default function useCopyToClipboard(): [boolean, Function] {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    }

    return [isCopied, handleCopy];
};