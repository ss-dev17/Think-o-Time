# 🎯 Think-o-Time – Quiz Web App

**Think-o-Time** is a dynamic and responsive Quiz Web Application built with **React** and powered by modern libraries like **Tailwind CSS**, **Framer Motion**, **Lucide React**, and **React Hot Toast**. It uses **React Router DOM** for seamless navigation without full page reloads and features a playful design enhanced by beautiful custom fonts.

---

## 🚀 Features

- 🎨 **Modern UI** – Styled with Tailwind CSS and animated with Framer Motion for smooth transitions.  
- 🧭 **SPA Navigation** – Page routing without reloads using React Router DOM.  
- 🌐 **Responsive Design** – Fully responsive across devices.  
- 🔥 **Toast Notifications** – User feedback powered by react-hot-toast.  
- ⏳ **Quiz Timer** – A global countdown for the entire quiz session.  
- 📊 **Progress Tracker** – Visual progress bar with current score and question number.  
- 💎 **Custom Fonts** – Eye-catching typography using:
  - **Henny Penny**
  - **Quicksand**
  - **Rubik Bubbles**
  - **Nunito**
- 🖼️ **SVG Assets** – GitHub logo used in the footer as an inline SVG for better control and scalability.  
- 📎 **Clean Codebase** – Organized and scalable React component structure.

---

## 🌐 Live Demo

▶️ [Click here to try Think-o-Time on Netlify!](https://think-o-time.netlify.app/)

---

## ❓ What Kind of Questions to Expect?

Think-o-Time focuses on **entertainment** and **relatability**, not academics or fiction.

You’ll find questions like:

- _“What’s something people often open the fridge for and forget why?”_  
- _“What’s a lie people often tell themselves at night?”_  
- _“What mysteriously disappears the most?”_

These questions are crafted to be:

- ✅ Fun and engaging  
- 🤔 Based on daily habits or situations  
- 😂 Sometimes unexpected, always entertaining  
- 🧩 Categorized by difficulty: easy, medium, and hard  

---

## 📄 Pages Overview

### 1. Main Page
- **Think-o-Time** title  
- **Difficulty Selection** dropdown  
- **Start Quiz** button  
- **Footer** with a link to [My GitHub](https://github.com/ss-dev17)  
  *(Visible on both Main and Score pages)*

### 2. Quiz Page
- **Progress Bar** indicating quiz progression (out of 10)  
- Live display of:
  - **Current question number**
  - **Current score** (out of 100)
- **Quiz Questions** with multiple-choice options  
- **Global Timer** shown at bottom-left, counting down for the entire quiz session  

### 3. Score Page
- **Completion Message** after quiz ends  
- Score breakdown:  
  `"You got X ✅ & Y ❌"`  
- **"Home"** button to navigate back to Main Page  
- **Footer** with GitHub link  

---

## 🛠️ Tech Stack

| Technology           | Usage                                 |
|----------------------|----------------------------------------|
| **React**            | Frontend Framework                     |
| **Tailwind CSS**     | Styling and Layout                     |
| **Framer Motion**    | Animations and Transitions             |
| **Lucide React**     | Icon library                           |
| **React Hot Toast**  | Toast notifications                    |
| **React Router DOM** | Routing and navigation                 |
| **Google Fonts**     | Custom typography (Henny Penny, Quicksand, Rubik Bubbles, Nunito) |

---

## 📦 Installation & Local Development

If you'd like to run the project locally:

```bash
# Clone the repository
git clone https://github.com/ss-dev17/think-o-time.git

# Navigate to the project directory
cd think-o-time

# Install dependencies
npm install

# Start the development server
npm run dev

---
🌍 Hosting on Netlify
This project is hosted on Netlify, which offers smooth handling of React apps with routing.

🛠 Netlify Configuration

Make sure you include this file in the public/ folder:
_redirects

# Content of _redirects:
/*    /index.html   200

This ensures that refreshing or directly visiting routes like /quiz or /score will work correctly.