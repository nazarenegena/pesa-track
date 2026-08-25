

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/analytics/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B33iF1__.js","_app/immutable/chunks/zVxnddS-.js","_app/immutable/chunks/CAseZmFr.js","_app/immutable/chunks/ClA_ODsN.js"];
export const stylesheets = [];
export const fonts = [];
