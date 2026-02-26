import React, { useEffect, useMemo, useRef } from "react";

type Props = {
    length?: number;              // default 6
    value: string;                // OTP as a string like "12" or "123456"
    onChange: (next: string) => void;
};

export default function OTPInputElement({ length = 6, value, onChange }: Props) {
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    // turn "12" -> ["1","2","","","",""]
    const digits = useMemo(() => {
        const arr = new Array(length).fill("");
        for (let i = 0; i < Math.min(value.length, length); i++) arr[i] = value[i];
        return arr;
    }, [value, length]);

    useEffect(() => {
        // focus first empty, else last
        const firstEmpty = digits.findIndex((d) => d === "");
        const idx = firstEmpty === -1 ? length - 1 : firstEmpty;
        inputsRef.current[idx]?.focus();
    }, []); // only on mount

    const setDigit = (index: number, digit: string) => {
        const next = digits.slice();
        next[index] = digit;
        onChange(next.join(""));
    };

    const focusIndex = (index: number) => {
        inputsRef.current[index]?.focus();
        // optional: select text for easy overwrite
        inputsRef.current[index]?.select();
    };

    const handleChange = (index: number, raw: string) => {
        // allow typing multiple chars (mobile/paste behavior) -> handle like paste
        const onlyDigits = raw.replace(/\D/g, "");
        if (!onlyDigits) {
            setDigit(index, "");
            return;
        }

        // Fill forward from current index
        const next = digits.slice();
        let i = index;
        for (const ch of onlyDigits) {
            if (i >= length) break;
            next[i] = ch;
            i++;
        }
        onChange(next.join(""));

        // focus next empty or last filled
        const nextFocus = Math.min(i, length - 1);
        focusIndex(nextFocus);
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            if (digits[index]) {
                // if current has value, clear it
                setDigit(index, "");
                return;
            }

            // if current empty, move back
            if (index > 0) {
                const prev = index - 1;
                const next = digits.slice();
                next[prev] = ""; // common UX: clear previous too
                onChange(next.join(""));
                focusIndex(prev);
            }
            return;
        }

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            if (index > 0) focusIndex(index - 1);
            return;
        }

        if (e.key === "ArrowRight") {
            e.preventDefault();
            if (index < length - 1) focusIndex(index + 1);
            return;
        }
    };

    const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        const onlyDigits = text.replace(/\D/g, "");
        if (!onlyDigits) return;

        const next = digits.slice();
        let i = index;
        for (const ch of onlyDigits) {
            if (i >= length) break;
            next[i] = ch;
            i++;
        }
        onChange(next.join(""));
        focusIndex(Math.min(i, length - 1));
    };

    return (
        <div className="flex items-center gap-3 w-full">
            {digits.map((d, index) => (
                <input
                    key={index}
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    pattern="[0-9]*"
                    maxLength={length} // we handle 1 char visually, but change handler handles multi input
                    value={d}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={(e) => handlePaste(index, e)}
                    ref={(el) => {
                        inputsRef.current[index] = el;
                    }}
                    className="px-2 py-3 w-full border text-center outline-none border-[#BA131C60] rounded"
                />
            ))}
        </div>
    );
}