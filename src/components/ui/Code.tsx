import styled from "styled-components";

import { Theme } from "./theme";

export const Code = styled.pre`
    background: ${Theme.colors.gray[400]};
    font: consolas;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
`;
