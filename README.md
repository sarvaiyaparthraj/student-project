# Employee Management System

A simple **Employee Management System** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Nodemon

## 📁 Project Structure

```text
mock 2/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── employee.controller.js
│
├── models/
│   └── employee.model.js
│
├── routes/
│   └── employee.routes.js
│
├── views/
│   └── employees/
│       ├── index.ejs
│       ├── add.ejs
│       ├── edit.ejs
│       └── ...
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone or download the project

```bash
git clone <your-repository-url>
cd "mock 2"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Nodemon

```bash
npm install --save-dev nodemon
```

### 4. Configure MongoDB

Make sure MongoDB is installed and running on your system.

The database connection is configured inside:

```text
config/db.js
```

Example:

```js
mongodb://127.0.0.1:27017/employeeDB
```

## ▶️ Run the Project

### Development mode

```bash
npm run dev
```

### Normal mode

```bash
node server.js
```

The server will run on:

```text
http://localhost:4500
```

## 🧩 Server Configuration

The main server file is `server.js`.

```js
import express from "express";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employee.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/", employeeRoutes);

app.get("/", (req, res) => {
    res.render("employees/index");
});

const port = 4500;

async function startServer() {
    try {
        const connect = await connectDB();

        if (!connect) {
            throw new Error("failed to connect db");
        }

        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

startServer();
```

## ✨ Features

- Employee listing
- Add employee
- Edit employee
- Delete employee
- MongoDB database integration
- Mongoose model
- EJS templates
- Express routing
- Form handling
- JSON request handling

## 📌 API / Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Employee home page |
| GET | `/employees` | Show employees |
| GET | `/employees/add` | Add employee form |
| POST | `/employees/add` | Create employee |
| GET | `/employees/edit/:id` | Edit employee |
| POST | `/employees/edit/:id` | Update employee |
| GET/POST | `/employees/delete/:id` | Delete employee |

> Routes can be different depending on the implementation in `employee.routes.js`.

## 🗄️ Database

This project uses:

```text
MongoDB
```

with:

```text
Mongoose
```

for database operations.

## 🔐 Environment Variables

If environment variables are used, create a `.env` file:

```env
PORT=4500
MONGO_URI=mongodb://127.0.0.1:27017/employeeDB
```

Do not upload `.env` to GitHub.

Add this to `.gitignore`:

```text
node_modules/
.env
```

## 🛠️ Common Commands

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

Start development server:

```bash
npm run dev
```

Check Node.js version:

```bash
node -v
```

Check npm version:

```bash
npm -v
```

## 👨‍💻 Author

**Parthrajsinh Sarvaiya**

GitHub:  
https://github.com/sarvaiyaparthraj

LinkedIn:  
https://www.linkedin.com/in/sarvaiya-parthrajsinh-4b723635b/

## 📄 License

This project is created for learning and practice purposes.
