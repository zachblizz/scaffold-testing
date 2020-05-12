import React, { useState, useEffect, useMemo, useCallback } from "react";

import { client } from "../utils/Api";

import { useBoolean } from "../hooks/useBoolean";

import { Person } from "../common/Types";

import { Code } from "./ui/Code";
import { Select, SelectType } from "./ui/Select";
import { Theme } from "./ui/theme";

export default function Data() {
    const [isLoading, { on: loading, off: done }] = useBoolean(false);
    const [data, setData] = useState<Person | {}>({});

    const people = useMemo<Array<SelectType>>(() => ([
        { value: "1", label: "luke" },
        { value: "5", label: "leia" },
        { value: "4", label: "darth vader" },
        { value: "3", label: "r2d2" },
    ]), []);
    const [selected, setSelected] = useState<SelectType>(people[0]);

    useEffect(() => {
        async function getData() {
            loading();

            try {
                const resp = await client<Person>({
                    url: `https://swapi.dev/api/people/${selected?.value ?? 1}`
                });

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
    }, [setData, loading, done, selected]);

    const handleChange = useCallback(
        (person: SelectType) => setSelected(person),
        [setSelected]
    );

    if (isLoading || !data) {
        return <div>loading...</div>;
    }

    return (
        <>
            <Select value={selected} onChange={handleChange} options={people} />
            <Code>{JSON.stringify(data, null, 3)}</Code>
        </>
    );
}
