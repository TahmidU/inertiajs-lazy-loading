import { useState } from "react";
import FileBrowser from "../Components/FileBrowser";

export default function Home() {
    const [showBrowser, setBrowserVisibility] = useState(false);

    return (
        <article>
            <button onClick={() => setBrowserVisibility((prev) => !prev)}>Click Me</button>
            {showBrowser && <FileBrowser />}
        </article>

    );
}