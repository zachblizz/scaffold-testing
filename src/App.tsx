import React, { useState, useCallback } from "react";

import { Dummy } from "./components/Dummy";
import Offline from "./components/Offline";

import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";

import { useOnline } from "./hooks/useOnline";
import Data from "./components/Data";

export default function App() {
    const [show, setShow] = useState<boolean>(false);
    const isOnline = useOnline();

    const handleClick = useCallback(() => {
        setShow(s => !s);
    }, [setShow]);

    if (!isOnline) {
        return <Container><Offline /></Container>;
    }

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
            <Data />
        </Container>
    );
}
