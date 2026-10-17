# ✍️ BlogSpace — MERN Blog Application

<p align="center">
  <b>A modern full-stack blogging platform built with the MERN stack.</b>
</p>

<p align="center">
  Create • Share • Edit • Manage • Explore
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-Authentication-purple?logo=jsonwebtokens" alt="JWT">
  <img src="https://img.shields.io/badge/Vite-Fast%20Build-646CFF?logo=vite" alt="Vite">
</p>

---

## 🚀 Project Overview

**BlogSpace** is a modern full-stack blogging application developed using the **MERN stack — MongoDB, Express.js, React.js, and Node.js**.

The application provides a complete blogging workflow where users can register, securely log in, create blog posts, update their own posts, and manage their content through a clean and responsive interface.

This project demonstrates practical implementation of **RESTful APIs, JWT authentication, password hashing, MongoDB database integration, protected routes, CRUD operations, API integration, and responsive frontend development**.

---

## ✨ Key Features

### 🔐 Authentication

- User registration and login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected frontend routes
- Protected backend API endpoints
- Persistent authentication using Local Storage
- Logout functionality

### 📝 Blog Management

- Create new blog posts
- Edit existing posts
- Delete your own posts
- View published posts
- Categorize blog posts
- Add image URLs to posts
- Display author information
- Display publication dates
- CRUD-based post management

### 🎨 User Interface

- Clean and modern design
- Responsive layout
- User-friendly navigation
- Attractive blog cards
- Simple post creation interface
- Login and registration pages
- Mobile-friendly design
- Consistent styling across the application

### ⚙️ Backend

- RESTful API architecture
- Express.js server
- MongoDB database
- Mongoose ODM
- JWT authentication middleware
- Protected API routes
- Password hashing with bcrypt
- CRUD operations
- Environment variable configuration
- CORS support

---

## 🛠️ Technologies Used

### 🎨 Frontend

| Technology | Purpose |
|---|---|
| React.js | User Interface |
| Vite | Frontend Build Tool |
| React Router | Client-side Routing |
| Axios | API Communication |
| CSS3 | Styling & Responsive Design |

### ⚙️ Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| CORS | Cross-Origin Requests |
| dotenv | Environment Variables |

---

## 📂 Project Structure

```text
Blog Application/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> 🔒 The `.env` file is intentionally excluded from the repository for security reasons.

---

## 🔄 Application Flow

```text
                    ┌──────────────────┐
                    │      User        │
                    └────────┬─────────┘
                             │
                             ▼
                   ┌──────────────────┐
                   │  React Frontend  │
                   │   Vite + React   │
                   └────────┬─────────┘
                            │
                       Axios Requests
                            │
                            ▼
                   ┌──────────────────┐
                   │  Express Server  │
                   │    REST API      │
                   └────────┬─────────┘
                            │
                     JWT Authentication
                            │
                            ▼
                   ┌──────────────────┐
                   │     MongoDB      │
                   │  Users + Posts   │
                   └──────────────────┘
```

---

## 🔐 Authentication Flow

```text
User Registration
       │
       ▼
Password Hashing
       │
       ▼
User Stored in MongoDB
       │
       ▼
User Login
       │
       ▼
JWT Token Generated
       │
       ▼
Token Stored in Browser
       │
       ▼
Authenticated API Requests
       │
       ▼
Protected Backend Routes
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Netra2004/Syntecxhub4_Blog_Application.git
```

Navigate into the project:

```bash
cd Syntecxhub4_Blog_Application
```

---

## 2️⃣ Backend Setup

Open a terminal and navigate to the backend:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

### 🔑 Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
JWT_SECRET=your_secure_jwt_secret
```

> ⚠️ **Important:** Never upload your `.env` file or database credentials to GitHub.

### ▶️ Start the Backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

You can also verify the API by opening:

```text
http://localhost:5000
```

Expected response:

```json
{
  "message": "Blog Application API is running"
}
```

---

## 3️⃣ Frontend Setup

Open a **new terminal** while keeping the backend running.

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

Open the URL in your browser to use the application.

---

# 🌐 API Endpoints

## 🔐 Authentication

| Method | Endpoint | Description |
|:---:|:---|:---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login user |
| `GET` | `/api/auth/me` | Get logged-in user |

## 📝 Blog Posts

| Method | Endpoint | Description |
|:---:|:---|:---|
| `GET` | `/api/posts` | Get all posts |
| `GET` | `/api/posts/:id` | Get a single post |
| `POST` | `/api/posts` | Create a new post |
| `PUT` | `/api/posts/:id` | Update your post |
| `DELETE` | `/api/posts/:id` | Delete your post |

---

# 🧪 Application Usage

## 👤 User Registration

1. Open the application.
2. Click **Register**.
3. Enter your name, email, and password.
4. Create your account.

## 🔑 User Login

1. Open the **Login** page.
2. Enter your registered credentials.
3. Login to your account.

## 📝 Create a Blog Post

1. Login to your account.
2. Click **Create Post**.
3. Enter a post title.
4. Select a category.
5. Add an image URL.
6. Write your blog content.
7. Click **Publish Post**.

## ✏️ Manage Blog Posts

Authenticated users can manage their own blog posts through the application.

---

# 📸 Screenshots

Screenshots can be added here to showcase the application's interface.

### 🏠 Home Page

_Add your Home Page screenshot here._

### 🔐 Login Page

_Add your Login Page screenshot here._

### 📝 Create Post

_Add your Create Post screenshot here._

### 📱 Responsive Interface

_Add your responsive/mobile screenshot here._

---

# 🔮 Future Enhancements

Planned improvements include:

- 🔎 Blog search functionality
- 🏷️ Advanced category filtering
- ❤️ Like and unlike posts
- 💬 Comments and discussions
- 👤 User profile pages
- 🖼️ Cloud image uploads
- 🌙 Dark mode
- 📊 User dashboard
- 🔔 Notifications
- 📄 Pagination
- ✨ Rich text editor
- ☁️ Cloud deployment
- 📱 Progressive Web App support

---

# 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full-stack web application development
- React component architecture
- REST API development
- MongoDB database design
- Mongoose data modeling
- JWT authentication
- Password hashing
- Protected routes
- CRUD operations
- Axios API integration
- Responsive web design
- Frontend-backend integration
- Environment variable management
- Git and GitHub

---

# 💡 Why This Project?

BlogSpace was developed to gain practical experience in building a **complete full-stack web application** from frontend to backend and database.

The project combines modern frontend development with secure backend architecture and database management, providing hands-on experience with technologies widely used in real-world software development.

---

# 👩‍💻 Author

## G S Netra

**Computer Science & Engineering Graduate**

### Areas of Interest

- 💻 Full-Stack Development
- 🤖 Artificial Intelligence
- 🧠 Machine Learning
- 📊 Data Analytics
- 🚀 Software Development

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

## 📌 Repository

🔗 **GitHub:**  
https://github.com/Netra2004/Syntecxhub4_Blog_Application

---

<p align="center">
  Built with ❤️ using the MERN Stack
</p>
