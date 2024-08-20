# Список пользователей на React и TypeScript

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

Это приложение на React с использованием TypeScript, которое отображает список пользователей. В проекте реализованы функции фильтрации пользователей по имени и возрасту, пагинации, а также обработка ошибок. Для управления состоянием используется Redux, а для работы с асинхронными операциями — `react-thunk`.

## Содержание

- [Установка](#установка)
- [Использование](#использование)
- [Функциональность](#функциональность)
- [Структура проекта](#структура-проекта)
- [Доступные скрипты](#доступные-скрипты)
- [Содействие](#содействие)
- [Лицензия](#лицензия)

## Установка

1. Клонируйте репозиторий:

    ```sh
    git clone https://github.com/NotACat1/users-app.git
    cd users-app
    ```

2. Установите зависимости:

    ```sh
    yarn install
    ```

    или, если вы используете npm:

    ```sh
    npm install
    ```

## Использование

Чтобы запустить приложение в режиме разработки:

```sh
yarn start
```

или с npm:

```sh
npm start
```

Это запустит приложение в режиме разработки. Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

## Функциональность

- **Список пользователей**: Отображает список пользователей с их именами и возрастом.
- **Состояние загрузки**: Показывает сообщение о загрузке при получении данных пользователей.
- **Обработка ошибок**: Показывает сообщение об ошибке, если не удалось получить данные пользователей.
- **Фильтрация**: Позволяет фильтровать пользователей по имени и возрасту.
- **Пагинация**: Позволяет переходить между страницами пользователей.
- **Пустое состояние**: Показывает сообщение, если пользователи не найдены.

## Структура проекта

```
src/
├── components/
│   ├── UserList/
│   │   ├── UserList.tsx
│   │   ├── UserListItem.tsx
│   │   ├── UserFilter.tsx
│   │   └── Pagination.tsx
│   └── common/
│       ├── Loading.tsx
│       └── ErrorMessage.tsx
├── services/
│   └── userService.ts
├── store/
│   ├── user/
│   │   ├── userSlice.ts
│   │   ├── userThunk.ts
│   │   └── userTypes.ts
│   └── index.ts
├── types/
│   └── user.ts
├── App.tsx
├── index.tsx
└── ...
```

### Компоненты

- **UserList**: Основной компонент для отображения и фильтрации пользователей.
- **UserListItem**: Отображает информацию о каждом пользователе.
- **UserFilter**: Компонент для фильтрации пользователей по имени и возрасту.
- **Pagination**: Компонент для навигации между страницами пользователей.
- **Loading**: Компонент для отображения состояния загрузки.
- **ErrorMessage**: Компонент для отображения сообщений об ошибках.

### Сервисы

- **userService**: Содержит API вызовы для получения данных пользователей.

### Хранилище (Store)

- **userSlice**: Redux slice для управления состоянием пользователей.
- **userThunk**: Обрабатывает асинхронные операции для получения пользователей.
- **userTypes**: Типы TypeScript для состояния пользователей и параметров API.
- **index.ts**: Настраивает Redux store.

### Типы

- **user.ts**: Определяет TypeScript типы для данных пользователей и параметров запроса.

## Доступные скрипты

В директории проекта вы можете запустить следующие команды:

- `yarn start` - Запускает приложение в режиме разработки.
- `yarn build` - Собирает приложение для продакшена.
- `yarn test` - Запускает тесты.
- `yarn lint` - Проверяет проект на соответствие стандартам кода.
- `yarn eject` - Извлекает настройки проекта из Create React App.

## Содействие

Мы приветствуем вклад в развитие проекта! Следуйте следующим шагам:

1. Форкните репозиторий.
2. Создайте новую ветку (`git checkout -b feature-branch`).
3. Внесите свои изменения.
4. Зафиксируйте изменения (`git commit -m 'Добавить новую функцию'`).
5. Отправьте изменения в удаленный репозиторий (`git push origin feature-branch`).
6. Откройте pull request.
