import { Fragment, Suspense, lazy, useState } from "react";

const LazyFileBrowser = lazy(() => import('../Components/FileBrowser'));
const LazyDefaults = lazy(() => import("../Components/ChonkyDefaults"));

export default function Home() {
    const [showBrowser, setBrowserVisibility] = useState(false);

    return (
        <article>
            <button onClick={() => setBrowserVisibility((prev) => !prev)}>Click Me</button>
            <Suspense fallback={<Fragment />}>
                <LazyDefaults />
            </Suspense>
            <Suspense fallback={<span>loading...</span>}>
                {showBrowser && <LazyFileBrowser />}
            </Suspense>
        </article>

    );
}