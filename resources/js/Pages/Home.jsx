import { Suspense, lazy, useState } from "react";

const LazyFileBrowser = lazy(() => import('../Components/FileBrowser'));

export default function Home() {
    const [showBrowser, setBrowserVisibility] = useState(false);

    return (
        <article>
            <button onClick={() => setBrowserVisibility((prev) => !prev)}>Click Me</button>
            <Suspense fallback={<span>loading...</span>}>
                {showBrowser && <LazyFileBrowser />}
            </Suspense>
        </article>

    );
}