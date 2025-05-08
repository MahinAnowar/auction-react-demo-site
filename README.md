# Programming Hero Assignment-7

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![React Toastify](https://img.shields.io/badge/React%20Toastify-AE3F7B?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

This project is an interactive web application built with **React** as the **seventh milestone assignment** for the **Programming Hero Web Development Course (Level 1)**. It focuses on applying core React concepts like components, props, state (`useState`), effects (`useEffect`), data fetching, and integrating third-party libraries like **React Toastify**.

**Live Demo:** [https://auction-react-demo-site.netlify.app/](https://auction-react-demo-site.netlify.app/)

## About The Project

"AuctionGallery" is a single-page application simulating an online auction platform. It demonstrates fundamental React development practices:

*   **Component-Based UI:** The interface is broken down into reusable components (Navbar, Hero, Mainbody, Auction, Mydata, Footer).
*   **Data Fetching:** Loads auction item data from a local `data.json` file using the `fetch` API within a `useEffect` hook.
*   **State Management:** Uses the `useState` hook to manage the list of favorite items.
*   **User Interaction:** Allows users to add items to a "Favorites" list and remove them.
*   **Conditional Rendering:** Shows different UI elements based on whether favorite items exist.
*   **Dynamic Updates:** The favorites list and total bid value update dynamically based on user actions.
*   **Notifications:** Provides user feedback using customizable toast notifications via `react-toastify`.
*   **Styling:** Uses Tailwind CSS and DaisyUI for styling, along with Font Awesome for icons.

## Assignment Context

*   **Course:** Programming Hero Web Development Course (Level 1)
*   **Milestone/Assignment:** 7
*   **Objective:** To learn and implement fundamental **React concepts**, including functional components, JSX, props, state (`useState`), lifecycle methods/effects (`useEffect`), conditional rendering, handling user events, and integrating external libraries.
*   **Requirement:** Build a functional Single Page Application (SPA) using React, demonstrating the ability to manage state, handle data, and create an interactive user experience.

## Technologies Used

*   **Frontend Library:** React (v19)
*   **Language:** JavaScript (ES6+/JSX)
*   **Build Tool:** Vite
*   **Styling:**
    *   Tailwind CSS (v4 with Vite plugin)
    *   DaisyUI
    *   Font Awesome
    *   Standard CSS
*   **Notifications:** React Toastify
*   **Data Fetching:** `fetch` API (from local `data.json`)
*   **Linting:** ESLint

## Features

*   **Component-Driven Development:** Modular UI built with reusable React components.
*   **Stateful Logic:** Managing favorite items using the `useState` hook.
*   **Data Loading Effect:** Using `useEffect` to fetch auction data on component mount.
*   **Prop Drilling:** Passing data and functions down the component tree (e.g., `handleAddData`, `handleRemoveItem`).
*   **Dynamic List Rendering:** Displaying auction items and favorites using `.map()`.
*   **Add/Remove Favorites:** Interactive buttons to manage a user's favorite items list.
*   **Real-time Calculation:** Dynamically calculates and displays the total value of favorited items.
*   **Toast Notifications:** Provides non-intrusive feedback for adding/removing items.
*   **Responsive Design:** Implemented using Tailwind CSS and DaisyUI.
*   **Basic Cursor Effect:** Includes a custom cursor follower for disabled elements (visual enhancement).

## How To View

1.  **Live Demo:** Click the link provided above: [Live Demo](https://auction-react-demo-site.netlify.app/)
    *   *Click the heart icons on items to add/remove them from the favorites list on the right. Observe the toast notifications.*
2.  **Locally:**
    *   Ensure you have Node.js and npm (or yarn) installed.
    *   Clone the repository:
        ```bash
        git clone https://github.com/MahinAnowar/auction-react-demo-site.git
        ```
    *   Navigate to the project directory:
        ```bash
        cd auction-react-demo-site
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
        or
        ```bash
        yarn install
        ```
    *   Start the development server:
        ```bash
        npm run dev
        ```
        or
        ```bash
        yarn dev
        ```
    *   Open your browser to the local address provided (usually `http://localhost:5173`).

## Author

*   **Mahin Anowar** - [MahinAnowar](https://github.com/MahinAnowar)

---

*This project demonstrates foundational React skills, including state management, data handling, component architecture, and integrating third-party libraries, fulfilling the assignment requirements.*
