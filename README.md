# 📦 React Custom Hook – useFetch

## 📌 Project Overview

This project demonstrates the creation and implementation of a **custom React Hook** named `useFetch` that simplifies the process of fetching data from an API.

The custom hook abstracts the data-fetching logic and manages:

* Data state
* Loading state
* Error handling

A sample React component consumes this hook to fetch and display product data from a dummy API.

---

## 🎯 Objective

The main objective of this assignment is to:

* Understand React Custom Hooks
* Reuse common logic (API fetching)
* Handle loading and error states effectively
* Improve code modularity and maintainability

---

## 🔗 API Used

```text
https://api.escuelajs.co/api/v1/products
```

This API provides product data including:

* Product title
* Images
* Price
* Description

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Fetch API
* React Hooks:

  * useState
  * useEffect
  * useCallback

---

## 📂 Project Structure

```
src/
│
├── hooks/
│   └── useFetch.js
│
├── components/
│   └── Products.js
│   └── Products.css
│
├── App.js
└── index.js
```

---

## ⚙️ Custom Hook – useFetch

### 🔹 Parameters

`useFetch(url)`

* Accepts a URL string as a parameter.

### 🔹 Returns

The hook returns an object containing:

* `data` → The fetched API data
* `loading` → Boolean indicating fetch progress
* `error` → Error message if request fails

---

## 🧠 How It Works

1. `useState` manages:

   * Data
   * Loading
   * Error

2. `useCallback` memoizes the fetch function.

3. `useEffect` triggers data fetching when:

   * The component mounts
   * The URL changes

4. Proper error handling ensures:

   * Network errors are caught
   * Invalid responses are handled

---

## 💻 How to Run the Project

1. Create a new React app:

```bash
npx create-react-app my-app
```

2. Navigate to project directory:

```bash
cd my-app
```

3. Replace the `src` folder with provided files.

4. Install dependencies (if needed).

5. Start the development server:

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## ✨ Features

* Reusable custom hook
* Clean separation of concerns
* Dynamic data rendering
* Loading state indicator
* Error state handling
* Simple responsive UI

---

## 📸 Output

The application:

* Fetches product data from the API
* Displays product cards with image, title, and price
* Shows a loading message while fetching
* Displays an error message if the fetch fails

---

## 🎓 Learning Outcomes

* Creating reusable custom hooks
* Managing asynchronous operations in React
* Handling loading and error states
* Writing clean and maintainable React code
* Understanding component reusability

---

## 🚀 Future Enhancements

* Add pagination support
* Add retry functionality
* Convert to Axios implementation
* Add search & filtering
* Implement caching mechanism
* Integrate with backend API

---

## 👨‍💻 Author

**Aaryan Kumar**
Computer Science & Engineering Student

 
