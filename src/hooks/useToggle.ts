import { useState } from "react";

export default function useToggle(initialValue: boolean): [boolean, Function] {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
}