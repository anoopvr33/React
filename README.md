# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Product Website

A modern full-stack product website built using React, Node.js, Express, and MySQL.

The application includes a responsive user interface, animated sections, contact form functionality, and an admin dashboard for managing customer enquiries.

---

## Features

### Frontend

- Responsive Navbar
- Hero Slider Section
- Animated Background
- Why Choose Us Section
- Customer Reviews Section
- About Page
- Contact Page
- Footer
- Responsive Design
- Smooth Animations

### Backend

- REST API using Express
- Contact Form Data Storage
- MySQL Database Integration
- Environment Variable Support
- Enquiry Management API

### Admin Dashboard

- Total Enquiry Count
- Today's Enquiries
- Visitor Count
- Response Rate
- Recent Enquiries Table

---

## Tech Stack

### Frontend

- React
- React Router DOM
- Framer Motion
- Swiper
- React Icons
- CSS

### Backend

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- cors

---

## Project Structure

### Frontend

```text
src/

components/
  Navbar
  Hero
  AnimatedBackground
  WhyChooseUs
  Reviews
  Footer

pages/
  Home
  About
  Contact

App.jsx
main.jsx