import React from "react";
import ReactSelect from "react-select";

import { Theme } from "./theme";

const { colors } = Theme;

export type SelectType = {
    value: string;
    label: string;
}

type SelectProps = {
    options: Array<SelectType>;
    value: SelectType;
    onChange?: (s: SelectType) => void;
}

const customStyles = {
    control: (styles: any, { isFocus }: { isFocus: boolean }) => ({
        ...styles,
        backgroundColor: colors.white,
        borderColor: isFocus ? colors.primary.color : colors.gray[300],
        width: '10rem',
        marginTop: 4,
    }),
    option: (styles: any, state: any) => {
        return {
            ...styles,
            backgroundColor: state.isFocus ? colors.gray[300] : colors.white,
            color: state.isFocus ? colors.primary.color : colors.black,
        }
    }
}

export function Select({ onChange, value, options }: SelectProps) {
    return (
        <ReactSelect
            styles={customStyles}
            onChange={onChange}
            value={value}
            options={options}
        />
    )
}
