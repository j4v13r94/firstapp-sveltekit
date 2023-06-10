export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a71e9f2a.js","app":"_app/immutable/entry/app.cf221fe3.js","imports":["_app/immutable/entry/start.a71e9f2a.js","_app/immutable/chunks/index.5cdf7487.js","_app/immutable/chunks/singletons.ec2f69c2.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.cf221fe3.js","_app/immutable/chunks/index.5cdf7487.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
