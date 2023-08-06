import { setChonkyDefaults } from "chonky";
import { ChonkyIconFA } from "chonky-icon-fontawesome";
import { Fragment, useEffect } from "react";

export default function ChonkyDefaults() {
    useEffect(() => {
        setChonkyDefaults({ iconComponent: ChonkyIconFA });
    }, []);

    return <Fragment />;
}