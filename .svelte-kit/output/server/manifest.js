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
		client: {start:"_app/immutable/entry/start.DYMz0E5U.js",app:"_app/immutable/entry/app.DRH3mYUH.js",imports:["_app/immutable/entry/start.DYMz0E5U.js","_app/immutable/chunks/7AxbzkRp.js","_app/immutable/chunks/CPQLAVhh.js","_app/immutable/chunks/DemB1Qtz.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/BwAIzoFS.js","_app/immutable/entry/app.DRH3mYUH.js","_app/immutable/chunks/7AxbzkRp.js","_app/immutable/chunks/CBFBilEL.js","_app/immutable/chunks/ChyCeCB7.js","_app/immutable/chunks/DemB1Qtz.js","_app/immutable/chunks/tByo5PRG.js","_app/immutable/chunks/CgJAL6oW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
