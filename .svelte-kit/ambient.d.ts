
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const NODE_ENV: string;
	export const OPENCODE: string;
	export const WARP_CLIENT_VERSION: string;
	export const npm_config_user_agent: string;
	export const NVM_BIN: string;
	export const BUN_INSTALL: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const SHLVL: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const OPENCODE_CLIENT: string;
	export const COLORTERM: string;
	export const NODE_PATH: string;
	export const WARP_FOCUS_URL: string;
	export const npm_package_name: string;
	export const COREPACK_ROOT: string;
	export const npm_lifecycle_event: string;
	export const npm_config_node_gyp: string;
	export const PWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config__jsr_registry: string;
	export const XPC_FLAGS: string;
	export const npm_command: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const PATH: string;
	export const npm_config_verify_deps_before_run: string;
	export const npm_config_frozen_lockfile: string;
	export const ZED_ENVIRONMENT: string;
	export const LSCOLORS: string;
	export const npm_execpath: string;
	export const USER: string;
	export const __CFBundleIdentifier: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const SSH_AUTH_SOCK: string;
	export const SVELTEKIT_FORK: string;
	export const npm_node_execpath: string;
	export const npm_config_registry: string;
	export const WARP_PROMPT_NODE_VERSION_ENABLED: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const WARP_SSH_REUSE_CONTROL_MASTER: string;
	export const COMMAND_MODE: string;
	export const NVM_DIR: string;
	export const INIT_CWD: string;
	export const SSH_SOCKET_DIR: string;
	export const WARP_HONOR_PS1: string;
	export const ZSH: string;
	export const npm_package_json: string;
	export const npm_config_npm_globalconfig: string;
	export const PAGER: string;
	export const CONDA_CHANGEPS1: string;
	export const WARP_TERMINAL_SESSION_UUID: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const NODE: string;
	export const WARP_CLI_AGENT_PROTOCOL_VERSION: string;
	export const OPENCODE_PID: string;
	export const HOME: string;
	export const NVM_INC: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const LS_COLORS: string;
	export const LANG: string;
	export const SHELL: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const npm_config_globalconfig: string;
	export const AGENT: string;
	export const __CF_USER_TEXT_ENCODING: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		NODE_ENV: string;
		OPENCODE: string;
		WARP_CLIENT_VERSION: string;
		npm_config_user_agent: string;
		NVM_BIN: string;
		BUN_INSTALL: string;
		LOGNAME: string;
		LESS: string;
		SHLVL: string;
		pnpm_config_verify_deps_before_run: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		OPENCODE_CLIENT: string;
		COLORTERM: string;
		NODE_PATH: string;
		WARP_FOCUS_URL: string;
		npm_package_name: string;
		COREPACK_ROOT: string;
		npm_lifecycle_event: string;
		npm_config_node_gyp: string;
		PWD: string;
		NVM_CD_FLAGS: string;
		npm_config__jsr_registry: string;
		XPC_FLAGS: string;
		npm_command: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		PATH: string;
		npm_config_verify_deps_before_run: string;
		npm_config_frozen_lockfile: string;
		ZED_ENVIRONMENT: string;
		LSCOLORS: string;
		npm_execpath: string;
		USER: string;
		__CFBundleIdentifier: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		SSH_AUTH_SOCK: string;
		SVELTEKIT_FORK: string;
		npm_node_execpath: string;
		npm_config_registry: string;
		WARP_PROMPT_NODE_VERSION_ENABLED: string;
		PNPM_SCRIPT_SRC_DIR: string;
		WARP_SSH_REUSE_CONTROL_MASTER: string;
		COMMAND_MODE: string;
		NVM_DIR: string;
		INIT_CWD: string;
		SSH_SOCKET_DIR: string;
		WARP_HONOR_PS1: string;
		ZSH: string;
		npm_package_json: string;
		npm_config_npm_globalconfig: string;
		PAGER: string;
		CONDA_CHANGEPS1: string;
		WARP_TERMINAL_SESSION_UUID: string;
		TERM_PROGRAM_VERSION: string;
		TERM: string;
		TMPDIR: string;
		NODE: string;
		WARP_CLI_AGENT_PROTOCOL_VERSION: string;
		OPENCODE_PID: string;
		HOME: string;
		NVM_INC: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		LS_COLORS: string;
		LANG: string;
		SHELL: string;
		WARP_USE_SSH_WRAPPER: string;
		npm_config_globalconfig: string;
		AGENT: string;
		__CF_USER_TEXT_ENCODING: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
