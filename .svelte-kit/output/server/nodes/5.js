

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/expenses/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.iWC5mQFs.js","_app/immutable/chunks/ChyCeCB7.js","_app/immutable/chunks/7AxbzkRp.js","_app/immutable/chunks/D9dFiEbN.js"];
export const stylesheets = [];
export const fonts = [];
