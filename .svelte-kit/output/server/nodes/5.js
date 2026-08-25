

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/expenses/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CObkmIox.js","_app/immutable/chunks/zVxnddS-.js","_app/immutable/chunks/CAseZmFr.js","_app/immutable/chunks/ClA_ODsN.js"];
export const stylesheets = [];
export const fonts = [];
