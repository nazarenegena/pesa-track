

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/budget/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BqSCk2ws.js","_app/immutable/chunks/zVxnddS-.js","_app/immutable/chunks/CAseZmFr.js","_app/immutable/chunks/ClA_ODsN.js"];
export const stylesheets = [];
export const fonts = [];
