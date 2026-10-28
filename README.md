# Shopping Cart Application

A responsive shopping cart web application built using React and Redux Toolkit. This project allows users to browse products, filter them by category, manage cart quantities, and view the total price.

## Live Demo

**Live Application:** [View Shopping Cart](https://ayshanassar1.github.io/nuvento-training-tasks/)
## Features

- Display a list of sample products.
- Filter products by category.
- Add products to the shopping cart.
- Increase or decrease product quantities.
- Remove individual products from the cart.
- Clear all items from the cart.
- Display the total number of items in the cart.
- Calculate and display the total price.
- Responsive user interface.

## Technologies Used

- **React** – Building the user interface.
- **Vite** – Development server and build tool.
- **Redux Toolkit** – Managing shopping cart state.
- **React Redux** – Connecting React components to Redux.
- **Bootstrap** – Styling and responsive layout.
- **React Bootstrap** – Bootstrap components for React.
- **React Icons** – Icons for the user interface.
- **JavaScript** – Application logic.
- **CSS** – Custom styling.

## Project Structure

```text
shopping-cart/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── products.js
│   ├── redux/
│   │   ├── cartSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ayshanassar1/nuvento-training-tasks.git
```

### 2. Navigate to the Project Folder

```bash
cd nuvento-training-tasks/shopping-cart
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

## Learning Outcomes

Through this project, I practised:

- Building reusable React components.
- Managing global state using Redux Toolkit.
- Handling cart operations and product quantities.
- Calculating cart totals dynamically.
- Creating a responsive interface.
- Building and deploying a React application using GitHub Pages.

## Author

**Aysha Nassar**

- GitHub: [ayshanassar1](https://github.com/ayshanassar1)

---

*Developed as part of my Nuvento Systems training.*
