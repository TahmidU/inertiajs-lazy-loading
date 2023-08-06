import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const onLoad = async () => {
  const setChonkyDefaults = (await import('chonky')).setChonkyDefaults;
  const ChonkyIconFA = (await import('chonky-icon-fontawesome')).ChonkyIconFA;

  setChonkyDefaults({ iconComponent: ChonkyIconFA });
}

onLoad();

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx');
    return pages[`./Pages/${name}.jsx`]();
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})