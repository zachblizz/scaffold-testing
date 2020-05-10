import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { Dummy } from "./components/Dummy";
import { Button } from "./components/ui/Button";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export default function App() {
    const [show, setShow] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setShow(s => !s);
    }, [setShow]);

    return <Container>
        Hello Worlds!
        <div>
            <Button primary onClick={handleClick}>click me</Button>
        </div>
        <Dummy show={show}>
            <p>this is dummy</p>
        </Dummy>
    </Container>;
}
