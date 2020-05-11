import React, { useState, useEffect } from "react";

import { client } from "../utils/Api";

import { useBoolean } from "../hooks/useBoolean";

import { Person } from "../common/Types";

import { Code } from "./ui/Code";

export default function Data() {
    const [isLoading, { on: loading, off: done }] = useBoolean(false);
    const [data, setData] = useState<Person | {}>({});

    useEffect(() => {
        async function getData() {
            loading();

            try {
                const resp = await client<Person>({ url: "https://swapi.dev/api/people/1" });

                if (resp?.status === 200) {
                    setData(resp.data);
                }

                done();
            } catch (e) {
                console.error(e);
                done();
            }
        }

        getData();
    }, [setData, loading, done]);

    if (isLoading || !data) {
        return <div>loading...</div>;
    }

    return (
        <Code>{JSON.stringify(data, null, 3)}</Code>
    );
}
