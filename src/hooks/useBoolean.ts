import { useMemo, useState } from "react";

type SetterFn = () => void;

export type UseBoolean = readonly [
    boolean,
    { on: SetterFn, off: SetterFn, toggle: SetterFn }
];

export function useBoolean(defaultValue: boolean): UseBoolean {
    const [value, setValue] = useState<boolean>(defaultValue);

    const setters = useMemo(() => ({
        on() {
            setValue(true);
        },
        off() {
            setValue(false);
        },
        toggle() {
            setValue(v => !v);
        }
    }), [setValue]);

    return [value, setters] as const;
}
