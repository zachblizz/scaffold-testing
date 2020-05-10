import styled from "styled-components";

import { Theme } from "./theme";

import { BaseProps } from "./index";

const { colors } = Theme;

type ButtonProps = BaseProps & {
    primary?: boolean;
};

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.5rem 0;
    width: 11rem;
    border-radius: 5px;
    background: ${(props: ButtonProps) => (props.primary ? colors.orange.primary : colors.white)};
    color: ${(props: ButtonProps) => (props.primary ? colors.white : colors.black)};
    transition: all 100ms ease-in-out;
    border: 2px solid ${(props: ButtonProps) => (!props.primary && colors.orange.primary)};
    font-size: 15px;
    text-transform: capitalize;

    margin-right: ${(props: ButtonProps) => props.mr ?? 0}px;
    margin-left: ${(props: ButtonProps) => props.ml ?? 0}px;
    margin-top: ${(props: ButtonProps) => props.mt ?? 0}px;
    margin-bottom: ${(props: ButtonProps) => props.mb ?? 0}px;

    &:hover {
        background: ${({ primary }: ButtonProps) => primary ? colors.orange[600] : colors.gray};
        color: #fff;
        cursor: pointer;
    }
`;
