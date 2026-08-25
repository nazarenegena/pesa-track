export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DZAui8BI.js",app:"_app/immutable/entry/app.D3Rwfdbo.js",imports:["_app/immutable/entry/start.DZAui8BI.js","_app/immutable/chunks/CAseZmFr.js","_app/immutable/chunks/1hSzvU83.js","_app/immutable/chunks/CkQYDRMr.js","_app/immutable/entry/app.D3Rwfdbo.js","_app/immutable/chunks/CAseZmFr.js","_app/immutable/chunks/n55Qsz-Z.js","_app/immutable/chunks/zVxnddS-.js","_app/immutable/chunks/CkQYDRMr.js","_app/immutable/chunks/BbpTUEIu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/analytics",
				pattern: /^\/analytics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/budget",
				pattern: /^\/budget\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/expenses",
				pattern: /^\/expenses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
