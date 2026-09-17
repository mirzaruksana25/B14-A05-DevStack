# Dev Stack

Dev Stack is a responsive web application where users can explore different development technologies and build their ideal technology stack. Users can view technology details, add technologies to their stack, and remove them when needed.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Features

- Explore different development technologies with their category, description, difficulty, rating, and badge.
- Add technologies to the "Your Stack" section and prevent duplicate selections.
- Remove individual technologies or remove all selected technologies at once.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It is used in React to create and describe the user interface easily.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage state in a functional component. In this project, we used it to manage the technology data, loading state, selected technologies, and mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component. We used it to fetch the technology data from the local JSON file when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It helps React update, add, or remove list items correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, we used it in the "Your Stack" section to show the empty message when no technology is selected and show selected technologies when items are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props. A child can send information back by calling a function passed to it through props.