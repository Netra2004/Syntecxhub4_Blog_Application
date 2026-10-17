# ✍️ BlogSpace — MERN Blog Application

<p align="center">
  <b>A modern full-stack blogging platform built with the MERN stack.</b>
</p>

<p align="center">
  Create • Share • Edit • Manage • Explore
</p>

---

## 🚀 Project Overview

**BlogSpace** is a modern full-stack blogging application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

The application allows users to create an account, securely log in, publish blog posts, edit their own posts, delete posts, and explore content through a clean and responsive interface.

The project demonstrates practical implementation of **RESTful APIs, JWT authentication, MongoDB database integration, protected routes, CRUD operations, and modern React development**.

---

## ✨ Key Features

### 🔐 Authentication
- User registration and login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Persistent login using local storage
- Logout functionality

### 📝 Blog Management
- Create new blog posts
- Edit existing posts
- Delete your own posts
- View published posts
- Add categories to posts
- Add image URLs to blog posts
- Display author information
- Display publication dates

### 🎨 User Interface
- Clean and modern design
- Responsive layout
- User-friendly navigation
- Attractive blog cards
- Simple post creation interface
- Responsive authentication pages
- Mobile-friendly design

### ⚙️ Backend
- RESTful API architecture
- Express.js server
- MongoDB database
- Mongoose ODM
- JWT authentication middleware
- Protected API endpoints
- Error handling
- CRUD operations

---

## 🛠️ Technologies Used

### Frontend

| Technology | Purpose |
|---|---|
| React.js | User Interface |
| Vite | Frontend Build Tool |
| React Router | Client-side Routing |
| Axios | API Communication |
| CSS3 | Styling & Responsive Design |

### Backend

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
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
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

🔄 Application Flow
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
                    Axios API Calls
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

🔐 Authentication Flow
                User Registration
                       │
                       ▼
                Password Hashing
                       │
                       ▼
                MongoDB User
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
                Protected API Requests

⚙️ Installation & Setup
1️⃣ Clone the Repository
  git clone https://github.com/Netra2004/Syntecxhub4_Blog_Application.git

Navigate into the project:
  cd Syntecxhub4_Blog_Application

2️⃣ Backend Setup
Navigate to the backend:
  cd backend

Install dependencies:
  npm install

Create a .env file inside the backend folder.
Add:
  PORT=5000
  MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
  JWT_SECRET=your_secure_jwt_secret

⚠️ Never commit your .env file to GitHub.

Start the backend:
  npm run dev

The backend will run on:
  http://localhost:5000

3️⃣ Frontend Setup
Open another terminal.
Navigate to the frontend:
  cd frontend

Install dependencies:
  npm install

Start the development server:
  npm run dev

The frontend will normally run on:
  http://localhost:5173

## 🌐 API Endpoints

### 🔐 Authentication

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| `POST` | `/api/auth/register` | Register a new user      |
| `POST` | `/api/auth/login`    | Login user               |
| `GET`  | `/api/auth/me`       | Get logged-in user       |

### 📝 Blog Posts

| Method   | Endpoint          | Description          |
|----------|-------------------|----------------------|
| `GET`    | `/api/posts`      | Get all posts        |
| `GET`    | `/api/posts/:id`  | Get a single post    |
| `POST`   | `/api/posts`      | Create a new post    |
| `PUT`    | `/api/posts/:id`  | Update your post     |
| `DELETE` | `/api/posts/:id`  | Delete your post     |


🧪 Testing the Application

User Registration
1. Open the application.
2. Click Register.
3. Enter your name, email, and password.
4. Create your account.

Login
1. Open the Login page.
2. Enter your registered credentials.
3. Login successfully.

Create a Blog Post
1. Login to your account.
2. Click Create Post.
3. Enter a title.
4. Select a category.
5. Add an image URL.
6. Write your content.
7. Click Publish Post.

Manage Posts
Authenticated users can manage their own posts through the application.

🔮 Future Enhancements
The project can be further improved with:
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

🎯 Learning Outcomes
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
- API integration using Axios
- Responsive web design
- Git and GitHub
- Frontend-backend integration

🧑‍💻 Author
G S Netra
Computer Science & Engineering Graduate

Interested in:
- Full-Stack Development
- Artificial Intelligence
- Machine Learning
- Data Analytics
- Software Development

⭐ Support
If you find this project useful or interesting, consider giving it a ⭐ on GitHub!

📌 Repository
🔗 GitHub:
https://github.com/Netra2004/Syntecxhub4_Blog_Application
