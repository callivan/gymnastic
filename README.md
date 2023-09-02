<img src="assets/logo.png" width="400" height="400" />

## 🧰 `Технологии`

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main/route/route)
[![React Spring](https://img.shields.io/badge/react%20spring-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://www.react-spring.dev/?logout=true)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://www.npmjs.com/package/styled-components)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](https://sass-lang.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/ru/)
[![Ky](https://img.shields.io/badge/ky-0072C9?style=for-the-badge&logo=keras&logoColor=white)](https://www.npmjs.com/package/ky)

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
