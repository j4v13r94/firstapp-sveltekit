import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.d5f9b1ba.js","_app/immutable/chunks/index.5cdf7487.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ec2f69c2.js"];
export const stylesheets = [];
export const fonts = [];
