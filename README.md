
This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

Here's your updated `README.md` with icons and the complete submission checklist:

---

````markdown
# 🚂 Week 2: Express.js – Product API

## 🚀 Objective
Build a RESTful API using Express.js that supports standard CRUD operations, proper routing, middleware, error handling, and some advanced features.

---

## 📦 Features
- 🧾 CRUD Operations for products
- 🔀 Proper route separation
- 🧩 Middleware: logger, validation, authentication
- 🚨 Error handling (global + custom errors)
- 🔍 Advanced querying: filter, pagination, search
- 🌐 MongoDB integration

---

## ✅ Tasks Checklist

### 📁 Task 1: Express.js Setup
- [x] Initialized a Node.js project
- [x] Installed Express.js and required dependencies
- [x] Created a basic Express server
- [x] Implemented a "Hello World" route at `/`

### 🧾 Task 2: RESTful API Routes
- [x] Created a `products` resource with fields:
  - `id`, `name`, `description`, `price`, `category`, `inStock`
- [x] Routes implemented:
  - `GET /api/products`
  - `GET /api/products/:id`
  - `POST /api/products`
  - `PUT /api/products/:id`
  - `DELETE /api/products/:id`

### 🧱 Task 3: Middleware Implementation
- [x] Logger middleware for method, URL, and timestamp
- [x] JSON body parser middleware
- [x] API key authentication middleware
- [x] Validation middleware for product creation/update

### ❗ Task 4: Error Handling
- [x] Global error handler middleware
- [x] Custom error classes (NotFoundError, ValidationError)
- [x] Proper HTTP status codes and error responses
- [x] Asynchronous error handling with `try/catch`

### 🧠 Task 5: Advanced Features
- [x] Query parameters for category filtering
- [x] Pagination support in GET `/api/products`
- [x] Search endpoint by name
- [x] Product statistics (count by category)

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd week2-express-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```bash
   cp .env.example .env
   ```

4. **Start the server**

   ```bash
   node server.js
   ```

---

## 🔐 .env.example

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/week2api
API_KEY=your-secret-key
```

---

## 📬 API Documentation

### 🔍 GET /api/products

* **Description**: Get all products (supports pagination & filtering)
* **Query Params**:

  * `category`: filter by category
  * `page`: page number
  * `limit`: items per page

### 🔍 GET /api/products/\:id

* **Description**: Get product by ID

### ➕ POST /api/products

* **Description**: Add a new product
* **Headers**:

  * `Content-Type: application/json`
  * `x-api-key: your-secret-key`
* **Body Example**:

```json
{
  "name": "Samsung TV",
  "description": "Smart 4K UHD",
  "price": 599.99,
  "category": "Electronics",
  "inStock": true
}
```

### 🔁 PUT /api/products/\:id

* **Description**: Update product by ID
* **Body**: Same format as POST

### ❌ DELETE /api/products/\:id

* **Description**: Delete a product

---

## 🧪 Example Postman Requests

### ✅ Add Product

* **Method**: `POST`
* **URL**: `http://localhost:3000/api/products`
* **Body (raw JSON)**:

```json
{
  "name": "Lenovo Laptop",
  "description": "i5 11th Gen, 8GB RAM",
  "price": 750,
  "category": "Computers",
  "inStock": true
}
```

### 📥 Get All Products

* **GET** `http://localhost:3000/api/products`

### 🔎 Search Product

* **GET** `http://localhost:3000/api/products/search?name=tv`

---

## 📤 Submission Checklist

* [x] All project files committed (`server.js`, routes, controllers, models, middleware)
* [x] `.env.example` file added
* [x] This `README.md` with:

  * Setup instructions ✅
  * API documentation ✅
  * Examples of requests and responses ✅
* [x] Pushed to GitHub ✔
* [x] All features tested via Postman ✔

---

## 🧑‍💻 Author

**Emmanuel Jesse**
*Power Learn Project*

---

## 📎 License

MIT License

```

---


