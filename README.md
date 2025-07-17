# 📝 To-Do Application API

A simple RESTful API backend for a To-Do application built with **Node.js**, **Express.js**, and **MongoDB**. This API supports full **CRUD operations** for managing tasks.

## 🚀 Features

- Create a new task
- Read all tasks
- Update a task
- Delete a task
- Connected with MongoDB Atlas/local MongoDB
- CORS enabled for frontend integration

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **CORS**
- **Dotenv**

## 📁 Folder Structure

```
todo-application-api/
│
├── models/              # Mongoose schema for tasks
│   └── Task.js
│
├── routes/              # API route definitions
│   └── tasks.js
│
├── .env                 # Environment variables
├── index.js            # Entry point
├── package.json
└── README.md
```

## 📦 Installation

```bash
git clone https://github.com/Mounish-T/todo-application-api.git
cd todo-application-api
npm install
```

## ⚙️ Setup

1. Create a `.env` file in the root directory.
2. Add your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
PORT=1000
```

## ▶️ Run the Server

```bash
node server.js
```

The server will start on `http://localhost:1000` (or your configured port).

## 🔌 API Endpoints

| Method | Endpoint        | Description              |
|--------|------------------|--------------------------|
| GET    | `/tasks`         | Get all tasks            |
| POST   | `/tasks`         | Add a new task           |
| PUT    | `/tasks/:id`     | Update an existing task  |
| DELETE | `/tasks/:id`     | Delete a task            |

## 🌐 Frontend

You can integrate this API with website and app.  
Here’s the my web and app repo: 
https://github.com/Mounish-T/ToDo-website, 
https://github.com/Mounish-T/ToDo-application

## 📬 Contact

Developed by **[Mounish T](https://www.linkedin.com/in/t-mounish-0870a3255/)**  
📧 tmounish02@gmail.com
