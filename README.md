# This is a better todo app for me to learn svelte kit and introdce myself to technologies I will use

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv create --template minimal --types ts --add prettier tailwindcss="plugins:none" drizzle="database:mysql+mysql:mysql2+docker:yes" --install pnpm todo-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

