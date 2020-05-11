import React, { useState, useCallback } from "react";

import { Dummy } from "./components/Dummy";

import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";

export default function App() {
    const [show, setShow] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setShow(s => !s);
    }, [setShow]);

    return (
        <Container>
            Hello Worlds!
            <div>
                <Button onClick={handleClick} >click me</Button>
                <Button onClick={handleClick} primary >click me too</Button>
            </div>
            <Dummy show={show}>
                <div>this is dummy</div>
            </Dummy>
        </Container>
    );
}
