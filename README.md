
# Go + React Hello World App

This project is a simple fullstack "Hello World" application using:

- **Go** as the backend (serving an API + static files)
- **React** as the frontend (bundled and served by the Go server)
- **Docker** for containerizing the whole app

---

## 🛠 Features

- ✅ `/api/hello` returns a JSON greeting from Go
- ✅ Frontend displays the message from Go
- ✅ A button opens Google Maps to a specific location
- ✅ Single Docker container handles fullstack build and serve

---

## 🚀 How to Run with Docker

### 1. Clone the repository

```bash
git clone https://github.com/isCathal/mapquill.git
cd go-react-hello
```

### 2. Build the Docker image

```bash
docker build -t mapquill .
```

This will:
- Build the React frontend (`npm run build`)
- Compile the Go backend
- Copy everything into a small Debian image

### 3. Run the container

```bash
docker run -p 8080:8080 mapquill
```

### 4. Open in browser

Navigate to: [http://localhost:8080](http://localhost:8080)

You should see:
- `"Hello from Go!"`
- A button labeled `Go to Location` that opens Google Maps

---

## 📂 Project Structure

```
go-react-hello/
├── backend/          # Go backend (main.go)
├── frontend/         # React frontend (create-react-app)
├── Dockerfile        # Multi-stage build
├── .dockerignore
└── README.md
```

---

## 📌 Requirements

- Docker installed (https://www.docker.com/)
- No need for Go or Node locally

---

## 📍 Change Map Location (Optional)

Edit `frontend/src/App.js`:

```js
const latitude = 53.3498;
const longitude = -6.2603;
```

Replace with any coordinates or use an address-based URL.

---

## 🧹 Cleanup

To remove the image:

```bash
docker rmi mapquill
```

---

## 📣 Credits

Built with ❤️ using Go and React
