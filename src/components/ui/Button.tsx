import styled from "styled-components";

import { Theme } from "./theme";

import { BaseProps } from "./index";

const { colors } = Theme;

type ButtonProps = BaseProps & {
    primary?: boolean;
};

export const Button = styled.button`
    padding: 0.7rem;
    width: 11rem;
    border-radius: 5px;
    background: ${(props: ButtonProps) => (props.primary ? colors.orange.primary : colors.white)};
    color: ${(props: ButtonProps) => (props.primary ? colors.white : colors.gray[900])};
    transition: all 100ms ease-in-out;
    border: 2px solid ${colors.orange.primary};
    font-size: 15px;
    text-transform: capitalize;

    margin-right: ${(props: ButtonProps) => props.mr ?? 4}px;
    margin-left: ${(props: ButtonProps) => props.ml ?? 4}px;
    margin-top: ${(props: ButtonProps) => props.mt ?? 4}px;
    margin-bottom: ${(props: ButtonProps) => props.mb ?? 4}px;

    &:hover {
        color: ${({ primary }: ButtonProps) => !primary && colors.gray[900]};
        background: ${({ primary }: ButtonProps) => primary ? colors.orange[600] : colors.gray[300]};
        cursor: pointer;
    }
`;
