import styled from "styled-components";

import { Theme } from "./theme";

import { BaseProps } from "./index";

const { colors } = Theme;

type ButtonProps = BaseProps & {
    primary?: boolean;
    weight?: number;
};

export const Button = styled.button`
    padding: 0.7rem;
    border-radius: 5px;
    background: ${({ primary }: ButtonProps) => (primary ? colors.primary.color : colors.white)};
    color: ${({ primary }: ButtonProps) => (primary ? colors.white : colors.gray[900])};
    transition: all 100ms ease-in-out;
    border: 2px solid ${colors.primary.color};
    font-size: 15px;
    text-transform: capitalize;
    font-weight: ${({ weight }: ButtonProps) => weight ?? 500};

    margin-right: ${({ mr }: ButtonProps) => mr ?? 4}px;
    margin-left: ${({ ml }: ButtonProps) => ml ?? 4}px;
    margin-top: ${({ mt }: ButtonProps) => mt ?? 4}px;
    margin-bottom: ${({ mb }: ButtonProps) => mb ?? 4}px;

    &:hover, &:active, &:focus {
        color: ${({ primary }: ButtonProps) => !primary && colors.gray[900]};
        background: ${({ primary }: ButtonProps) => primary ? colors.primary[600] : colors.gray[300]};
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`;
