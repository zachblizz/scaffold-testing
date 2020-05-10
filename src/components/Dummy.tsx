import React from "react";

type Props = {
    show?: boolean;
    children?: JSX.Element;
}

export function Dummy({ children, show } : Props) {
    return (
        <div>
            { children }
            { show && <p>haha</p> }
        </div>
    );
}
