# Rewards Page Recreation

This project is a recreation of the **rewards page** of a website. The goal of this project is to replicate the functionality and layout of the original rewards page, including the tabs, styles, and UI components.

🚀 Live Site: 

## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (v14 or higher) — [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) — Comes installed with Node.js
- **Git** — [Download Git](https://git-scm.com/)

## Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

Start by cloning this repository to your local machine using Git:
    git clone https://github.com/yourusername/rewards-page.git

### 2. Navigate to the Project Directory

Go into the directory of the project you just cloned:
    cd rewards-page

### 3. Install Dependencies

Next, install the required dependencies. This project uses npm (Node Package Manager) to manage dependencies. Run the following command to install them:
    npm install

### 4. Set Up Environment Variables (if applicable)

If your project has any environment variables (such as API keys or config settings), you should create a .env file in the root of the project and add them there. Example .env file:
    VITE_SUPABASE_URL=your-url-here

### 5. Running the Project Locally

After the installation is complete, you can start the development server to run the project locally:
    npm run dev

### Usage

Once the application is running locally, you can test the recreated rewards page. The page should include:

Tabs for different rewards statuses (All, Unlocked, Locked, Coming Soon).

Dynamic content to simulate the rewards counters.

Interactive design for a smooth user experience.


## Assumptions and Trade-Offs

While recreating the rewards page, several assumptions and trade-offs were made based on design choices and project constraints. Below are the key assumptions and decisions:

### 1. **Design Assumptions**
   - The **layout** and **reward categories** (All, Unlocked, Locked, Coming Soon) were assumed to be the core elements and were implemented based on the original design.
   - **Responsiveness** was prioritized to ensure the page works well on both desktop and mobile. To optimize performance, **complex animations** were minimized, particularly on mobile devices.

### 2. **Trade-offs in Functionality**
   - **Real-time updates** for reward data were not implemented. The reward counts (Unlocked, Locked, Coming Soon) are currently static, although they could be dynamic in the future if data were fetched from a backend.
   - **Authentication** was kept simple by using **Google authentication**. This eliminates the need for additional user registration or login systems (like email/password), but it limits flexibility for users who don’t have or prefer not to use Google accounts.

### 3. **Technology Trade-offs**
   - **React** was used for the frontend to handle dynamic UI updates and interactivity. While React is great for building complex user interfaces, it adds some complexity compared to using plain HTML/CSS.
   - **Tailwind CSS** was chosen for styling to allow for rapid development and flexible, responsive layouts. 
   - The app avoids backend integration for real-time data, focusing instead on static data to keep the app simple. Integrating real-time updates or more advanced backend features could be a future improvement.

These assumptions and trade-offs were made to prioritize simplicity and **speed of development**, ensuring a clean, easy-to-use rewards page while leaving room for future enhancements.
