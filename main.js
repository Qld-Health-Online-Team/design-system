// import '/src/styles/global.scss';

import "@components/_global/js/global.js";

// const modules = import.meta.glob(['@components/_global/js/*/global.js', '@components/**/js/global.js']);
const modules = import.meta.glob(['@components/_global/js/*/global.js']);

for (const path in modules) {
    modules[path]().then((mod) => {
      console.log(path, mod);
    });
};

import "@components/a-z_listing/js/global.js";
import "@components/accordion/js/global.js";
import "@components/header/js/global.js";
import "@components/main_navigation/js/global.js";
import "@components/mega_main_navigation/js/global.js";
