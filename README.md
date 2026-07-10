# 📌 Pinderesd — Fullstack

Повноцінна fullstack соціальна платформа для публікації та збереження зображень у стилі Pinterest. Проєкт написаний повністю самостійно — від UI до авторизації та бекенд-логіки.

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</p>

---

## 📖 Про проєкт

**Pinderesd** — це MERN-подібний застосунок, натхненний Pinterest: кожен користувач може створювати власні пости-зображення, лайкати, зберігати та переглядати чужі роботи, а також фільтрувати контент за тегами. Проєкт демонструє повний цикл fullstack-розробки: від безпечної авторизації на бекенді до зручного та швидкого інтерфейсу на фронтенді.

## ✨ Можливості

- 🔐 **Авторизація через JWT** — access + refresh токени, хешування паролів
- ✉️ Логіка підтвердження email (у поточній версії винесена окремо, див. `/server/.env`)
- 📝 Кожен користувач може створювати власні пости
- ❤️ Лайки, збереження постів, лічильник переглядів
- 🕘 Історія переглянутих постів
- 🏷️ Теги та фільтри для пошуку контенту
- ♾️ Нескінченна прокрутка (Infinite Scroll)
- 📱 Адаптивний дизайн
- ⚡ Кешування запитів на клієнті через RTK Query
- 🛡️ Валідація даних на сервері (`express-validator`)
- 🧱 Кастомні Error та Auth middleware

## 📸 Скріншоти

<p align="center">
  <img src="https://user-images.githubusercontent.com/112325695/278825105-4d48658d-1d7f-4f8f-b6bd-2e22ad16cc5c.png" width="45%" />
  <img src="https://user-images.githubusercontent.com/112325695/278825158-06eed491-8b6c-492d-975c-44e892ea9515.png" width="45%" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/112325695/278825175-b91881b4-3241-412f-a8ac-25a0f1794c7b.png" width="45%" />
  <img src="https://user-images.githubusercontent.com/112325695/278825183-8f52df64-39ca-4790-960d-dd1e0c065948.png" width="45%" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/112325695/280532280-2b8fecae-fbf0-48d2-b5d3-6bfb6f9e49e7.png" width="70%" />
</p>

## 🛠️ Технології

### Frontend (`/client`)
| Технологія | Призначення |
|---|---|
| [React](https://react.dev/) | Побудова інтерфейсу |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Менеджмент глобального стану |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Запити до API та кешування |
| [Axios](https://axios-http.com/) | HTTP-запити (частина auth-логіки) |

### Backend (`/server`)
| Технологія | Призначення |
|---|---|
| [Node.js](https://nodejs.org/) | Середовище виконання |
| [Express](https://expressjs.com/) | REST API сервер |
| [MongoDB](https://www.mongodb.com/) | База даних |
| [JWT](https://jwt.io/) | Авторизація (access + refresh токени) |
| [express-validator](https://express-validator.github.io/docs/) | Валідація вхідних даних |

## 🗂️ Де шукати ключову логіку

| Функціонал | Розташування |
|---|---|
| Infinite Scroll | `hooks/useInfiniteScroll.js`, `pages/Main.jsx` |
| Кешування запитів | RTK Query (services) |
| Валідація на сервері | `/router/userRouter.js` |
| Error & Auth middleware | `/middlewares` |
| JWT-авторизація | `user-service.js`, `token-service.js`, `auth-middleware.js` |
| Підтвердження email | `main-service.js` (у цій версії логіка вирізана, див. `/server/.env`) |
| Auth-запити через Axios | `service/UserService.js`, `store/reducer/AuthActionCreator.js` |

> 💡 Автор свідомо реалізував авторизаційну логіку і через RTK Query, і через Axios/Action Creator — для порівняння підходів та кращого розуміння обох.

## 🚀 Швидкий старт

### Вимоги

- Node.js 18+
- npm
- MongoDB (локально або хмарний кластер, напр. MongoDB Atlas)

### Встановлення

```bash
git clone https://github.com/dkDevHub/Pinderesd-Fullstack.git
cd Pinderesd-Fullstack
```

### Backend

```bash
cd server
npm i
```

Створіть файл `.env` у папці `server` та додайте необхідні змінні оточення (підключення до MongoDB, секрети для JWT тощо).

```bash
npm run start
```

### Frontend

```bash
cd client
npm i
npm run start
```

Клієнт за замовчуванням буде доступний на [http://localhost:3000](http://localhost:3000).

## 📂 Структура проєкту

```
Pinderesd-Fullstack/
├── client/          # React + Redux Toolkit + RTK Query
│   ├── src/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── service/
│   │   └── store/
│   └── package.json
├── server/           # Node.js + Express + MongoDB
│   ├── router/
│   ├── middlewares/
│   ├── service/
│   └── package.json
└── README.md
```

## 🤝 Contributing

Pull request'и вітаються! Для значних змін спершу відкрийте issue, щоб обговорити, що ви хочете змінити.

1. Зробіть форк проєкту
2. Створіть свою гілку (`git checkout -b feature/AmazingFeature`)
3. Закомітьте зміни (`git commit -m 'Add some AmazingFeature'`)
4. Запуште гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Проєкт поширюється без вказаної ліцензії. За потреби додайте файл `LICENSE`.

## 👤 Автор

**Dmytro (dkcorpp)**

- GitHub: [@dkDevHub](https://github.com/dkDevHub)

---

<p align="center">Зроблено з ☕ та JavaScript</p>
