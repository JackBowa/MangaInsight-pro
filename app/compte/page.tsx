23:11:17.206 Running build in Washington, D.C., USA (East) – iad1
23:11:17.206 Build machine configuration: 2 cores, 8 GB
23:11:17.228 Cloning github.com/JackBowa/MangaInsight-pro (Branch: main, Commit: 85a4f29)
23:11:17.237 Skipping build cache, deployment was triggered without cache.
23:11:17.892 Cloning completed: 664.000ms
23:11:18.441 Running "vercel build"
23:11:18.836 Vercel CLI 48.0.3
23:11:19.148 Installing dependencies...
23:11:47.458 npm warn deprecated @supabase/auth-helpers-shared@0.6.3: This package is now deprecated - please use the @supabase/ssr package instead.
23:11:47.505 npm warn deprecated @supabase/auth-helpers-react@0.4.2: This package is now deprecated - please use the @supabase/ssr package instead.
23:11:47.689 npm warn deprecated @supabase/auth-helpers-nextjs@0.8.7: This package is now deprecated - please use the @supabase/ssr package instead.
23:11:52.384 
23:11:52.385 added 327 packages in 33s
23:11:52.385 
23:11:52.386 149 packages are looking for funding
23:11:52.386   run `npm fund` for details
23:11:52.427 Detected Next.js version: 14.2.5
23:11:52.432 Running "npm run build"
23:11:52.640 
23:11:52.641 > mangainsight@1.0.0 build
23:11:52.641 > next build
23:11:52.641 
23:11:53.190 Attention: Next.js now collects completely anonymous telemetry regarding usage.
23:11:53.191 This information is used to shape Next.js' roadmap and prioritize features.
23:11:53.191 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
23:11:53.192 https://nextjs.org/telemetry
23:11:53.192 
23:11:53.252   ▲ Next.js 14.2.5
23:11:53.253 
23:11:53.326    Creating an optimized production build ...
23:12:07.150  ✓ Compiled successfully
23:12:07.151    Linting and checking validity of types ...
23:12:07.473 
23:12:07.473    We detected TypeScript in your project and reconfigured your tsconfig.json file for you. Strict-mode is set to false by default.
23:12:07.473    The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:
23:12:07.473 
23:12:07.473    	- plugins was updated to add { name: 'next' }
23:12:07.474 
23:12:11.019 Failed to compile.
23:12:11.019 
23:12:11.020 ./app/compte/page.tsx:10:83
23:12:11.020 Type error: Expected 1 arguments, but got 0.
23:12:11.021 
23:12:11.021 [0m [90m  8 |[39m [36mexport[39m [36mdefault[39m [36mfunction[39m [33mAccountPage[39m() {[0m
23:12:11.021 [0m [90m  9 |[39m   [36mconst[39m user [33m=[39m useUser()[33m;[39m[0m
23:12:11.021 [0m[31m[1m>[22m[39m[90m 10 |[39m   [36mconst[39m { loading[33m,[39m displayName[33m,[39m setDisplayName[33m,[39m avatarUrl[33m,[39m setAvatarUrl[33m,[39m save } [33m=[39m useProfile()[33m;[39m[0m
23:12:11.021 [0m [90m    |[39m                                                                                   [31m[1m^[22m[39m[0m
23:12:11.021 [0m [90m 11 |[39m   [36mconst[39m [busy[33m,[39m setBusy] [33m=[39m useState([36mfalse[39m)[33m;[39m[0m
23:12:11.022 [0m [90m 12 |[39m[0m
23:12:11.022 [0m [90m 13 |[39m   [90m// --- VIEW: not logged in => show real login UI ---[39m[0m
23:12:11.061 Error: Command "npm run build" exited with 1