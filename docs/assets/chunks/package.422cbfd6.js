const e="@lunarxyz/core",s="The JS-SDK of Lunarxyz App, provides simple APIs to operate.",t="0.23.0",i="chengpeiquan <chengpeiquan@chengpeiquan.com>",n="MIT",p="https://lunarxyz.github.io",o=["lib","types"],r="./lib/index.min.js",c="./lib/index.mjs",l="./types/index.d.ts",d={".":{import:"./lib/index.mjs",require:"./lib/index.cjs",types:"./types/index.d.js"}},a=["utils","hooks","composable","vue3"],u={dev:"vitepress dev --host",play:"vite playground --host",build:"run-s build:*","build:docs":"vitepress build","build:lib":"tsc --noEmit && vite build","build:types":"esno scripts/buildTypes",preview:"vitepress serve",lint:"eslint src --ext .js,.ts",test:"vitest",coverage:"vitest --coverage",format:"prettier --write .",backup:'git add . && git commit -m "chore: backup" && git push',up:"npx npm-check-updates -u",release:"npm publish --access public"},m={axios:"^0.27.2","date-fns":"^2.29.1","lodash-es":"^4.17.21",vue:"^3.2.37"},v={"@typescript-eslint/eslint-plugin":"^5.30.7","@typescript-eslint/parser":"^5.30.7",eslint:"^8.20.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.3.0",esno:"^0.16.3","lint-staged":"^13.0.3","npm-dts":"^1.3.12","npm-run-all":"^4.1.5",prettier:"^2.7.1",typescript:"^4.7.4",vite:"^3.0.2","vite-plugin-banner":"^0.3.0",vitepress:"^1.0.0-alpha.5",vitest:"^0.19.0",yorkie:"^2.0.0"},g={"pre-commit":"lint-staged","commit-msg":"esno ./scripts/verifyCommit.ts"};var b={name:e,description:s,version:t,author:i,license:n,homepage:p,files:o,main:r,module:c,types:l,exports:d,keywords:a,scripts:u,dependencies:m,devDependencies:v,gitHooks:g,"lint-staged":{"*.js":["prettier --write"],"*.ts?(x)":["prettier --parser=typescript --write"]}};export{b as p};
