import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import { setChonkyDefaults } from "chonky";
import { ChonkyIconFA } from "chonky-icon-fontawesome";

setChonkyDefaults({ iconComponent: ChonkyIconFA });

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx');
    return pages[`./Pages/${name}.jsx`]();
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})