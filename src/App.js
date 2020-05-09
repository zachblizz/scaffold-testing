import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export default function App() {
    return <Container>Hello Worlds!</Container>;
}
