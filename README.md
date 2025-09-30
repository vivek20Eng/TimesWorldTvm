![Project Status](https://img.shields.io/badge/Status-%20Done-green)

# Country Explorer App

[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.5-red?style=flat&logo=redux)](https://redux-toolkit.js.org/)
[![React Bootstrap](https://img.shields.io/badge/React%20Bootstrap-2.8.0-green?style=flat&logo=react-bootstrap)](https://react-bootstrap.github.io/)
[![Swiper.js](https://img.shields.io/badge/Swiper.js-10.0.0-yellow?style=flat&logo=swiper)](https://swiperjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive React application for exploring countries. Users log in to access a welcome slider, filter countries by region, view country cards with flags, and load more results. Built with Redux Toolkit for state management, React Bootstrap for UI, and Swiper.js for the slider.

## 🌐 Live link: [Live Demo](https://times-world-tvm.vercel.app/)

![App Screenshot](/screenshorts/country-banner-page.png) 

## 📑 Table of Contents

- [Features](#Features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## ✨ Features

- **🔐 Authentication**: Secure login form with password validation (min 8 chars, 1 uppercase, 1 number, 1 symbol) and social login placeholders.
- **📱 Responsive Design**: Full mobile/tablet/desktop support using Bootstrap grid.
- **🎠 Welcome Slider**: Auto-sliding carousel with 1.5 slides visible (full + half peek), navigation arrows, and pagination dots.
- **Country Explorer**: Fetch countries from REST API, filter by region (All, Asia, Europe), load more pagination, and skeleton loaders.
- **🌐 State Management**: Redux Toolkit for auth, countries, filters, and pagination.
- **🎨 UI/UX**: Skeleton loading, hover effects, shadows, and grayscale theme matching Figma mockups.

## 🛠 Tech Stack

- **Frontend**: React 18+, React Router, React Bootstrap
- **State**: Redux Toolkit
- **API**: Fetch from [restcountries.com](https://restcountries.com/v2/all?fields=name,region,flag)
- **Slider**: Swiper.js for responsive carousel
- **Icons**: React Icons (Font Awesome)
- **Build**: Create React App
- **Deployment**: Vercel/GitHub Pages

## 🎨 Figma Design Link
[![Figma](https://img.shields.io/badge/Figma-Design-blue?style=flat&logo=figma&logoColor=white)](https://www.figma.com/design/tlDhpxrsaByrWlURwcSSLZ/Machine-Test?node-id=1-221&t=S9zaTwmlc3TFbcrf-0)

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/vivek20Eng/TimesWorldTvm.git
cd react-countries-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ⚙ Usage

1. **Login**: Use `test@test.com` and `Abc123!@` (or any valid input) to sign in.
2. **Home Page**: View the welcome slider, filter countries, and load more results.
3. **Filtering**: Click "All", "Asia", or "Europe" to filter the list.
4. **Pagination**: Click "Load More" to append 8 more countries.

### 📝 Demo Credentials

- Username/Email: `test@test.com`
- Password: `Abc123!@`

## 🖼 Screenshots

### 🔑Login Page

![Login Page](/screenshorts/login-page.png)

### 🏠 Home Page - Slider

![Home Slider](/screenshorts/country-banner-page.png)

### 🌍 Country Cards

![Country Cards](/screenshorts/country-list-page.png)


## 🔧 Acknowledgments

- [React](https://reactjs.org/) - The library for web and native user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Official, opinionated, batteries-included toolkit for Redux.
- [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap components for React.
- [Swiper.js](https://swiperjs.com/) - Modern mobile touch slider.
- Figma mockups for UI inspiration.


## 📫 Contact

Vivek - [@vivek](https://www.linkedin.com/in/vivek-s-abb88a1ab/) - vivek20sv@gmail.com

Project Link: [https://github.com/vivek20Eng/TimesWorldTvm](https://github.com/vivek20Eng/TimesWorldTvm)





