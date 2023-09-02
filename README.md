<img src="assets/logo.png" width="400" height="400" />

## 🧰 `Технологии`

- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image.png" width="24" height="24" /><a href="https://vitejs.dev/">Vite</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-1.png" width="24" height="24" /><a href="https://react.dev/">React</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-2.png" width="24" height="24" /><a href="https://docs.docker.com/">Docker</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-3.png" width="24" height="24" /><a href="https://eslint.org/">ESLint</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-4.png" width="24" height="24" /><a href="https://www.typescriptlang.org/">TypeScript</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-5.png" width="24" height="24" /><a href="https://sass-lang.com/">SASS</a></div>
- <div style="display: flex; align-items: center; gap: 4px;"><img src="assets/image-6.png" width="24" height="24" /><a href="https://nginx.org/ru/">NGINX</a></div>
- [`Strapi`](https://strapi.io/)
- [`ky`](https://www.npmjs.com/package/ky)
- [`Prettier`](https://prettier.io/)
- [`React Spring`](https://www.react-spring.dev/?logout=true)
- [`React router dom`](https://reactrouter.com/en/main/route/route)
- [`Styled-components`](https://www.npmjs.com/package/styled-components)

Запуск и работа с проектом осуществляется при помощи Docker.

Убедитесь что на вашем устройстве установлена данная программа.

[Дополнительная информация (Docker)](https://docs.docker.com/)

## 📢 `Основные команды`

Все команды необходимо выполнять из папки `docker`.

Для запуска приложения в режиме разработки.

```js
🚀 docker compose up --build
```

Для запуска приложения в продакшен режиме.

```js
🚀 MODE=prod docker compose up --build
```

## 🛠 `Инициализация CMS Strapi`

Инициализация нового приложения `CMS Strapi`, следуйте инстукции по [ссылке (`Strapi`)](https://docs.strapi.io/dev-docs/installation/cli)

Необходимо установить `CMS Strapi` в папку `cms` рядом с остальными частями приложения.

Для этого выполните команду из корня.

```js
🚀 npx create-strapi-app@latest cms
```

Затем переместите все переменные окружения в файл .env в папке docker.

Так же, после инициализации нового `Strapi` приложения, необходимо внести некторые изменения в файлы.

```ts
// ./config/admin.ts

export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  host: env("VITE_STRAPI_URL"),
});

// ./config/server.ts

export default ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  url: env("VITE_STRAPI_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
```

Если возникли проблемы с запуском приложения [telegram](https://t.me/maslinok)
