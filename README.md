# Zerodha-Clone

## Project Overview

The Zerodha Clone is a frontend project that replicates the user interface and experience of the popular Indian stockbroking platform, Zerodha. The project is built using React.js, with a focus on creating a clean, responsive, and intuitive design that mirrors Zerodha's platform.

## Project Structure

The project is organized into various components, each responsible for different sections of the landing page, including the home page, about page, and pricing page. Below is a breakdown of the key components:

### 1. **Landing Page**

- **HomePage.jsx**
  - Combines several sections including `Hero`, `Awards`, `Stats`, `Pricing`, `Education`, and `OpenAccount` to create a comprehensive homepage.

- **AboutPage.jsx**
  - Contains the `Hero` and `Team` sections to provide an overview of the company's history and the key people behind it.

- **PricingPage.jsx**
  - Showcases Zerodha's competitive pricing, featuring components like `Hero`, `Brokerage`, and `OpenAccount`.

### 2. **Components**

- **Hero.jsx**
  - Present in multiple pages (`HomePage.jsx`, `AboutPage.jsx`, `PricingPage.jsx`, `ProductPage.jsx`), this component typically features a call-to-action or introductory message with a prominent visual.

- **Team.jsx**
  - Displays information about the key team members, including their roles and a brief background.

- **Awards.jsx**
  - Highlights Zerodha's achievements, focusing on its position as India's largest stockbroker and the range of financial instruments available to clients.

- **Education.jsx**
  - Promotes Zerodha's educational initiatives, such as Varsity and TradingQ&A, offering free and open market education.

- **Stats.jsx**
  - Provides statistics that emphasize Zerodha's trustworthiness and the vast scale of its operations.

- **Pricing.jsx**
  - Outlines Zerodha's transparent and competitive pricing structure, reinforcing its leadership in the discount broking model.

- **Brokerage.jsx**
  - Lists the brokerage charges and additional fees associated with various services provided by Zerodha.

- **ProductPage.jsx**
  - Describes Zerodha's product offerings, like Kite, Console, Coin, and Kite Connect API, with a focus on technology and user experience.

### 3. **Assets**

- **Images**: Various SVGs and images are used across the components to enhance the visual appeal, such as `homeHero.png`, `largestBroker.svg`, `ecosystem.png`, etc.
- **Links**: Components include placeholder links for navigating to external resources like Zerodha's official pages, product demos, and social media profiles.

### 4. **Routing**

- **Signup.jsx**
  - Redirects users to an external signup page, simulating the account creation process on Zerodha.


# Dashboard Application

This is a web-based dashboard application developed using React.js, TailwindCSS, and the MERN stack. The application provides users with a comprehensive view of their stocks, funds, orders, holdings, and more. Below is a detailed overview of the application and the components used.

## Features

- **User Authentication**: Secure login and logout functionalities.
- **Real-time Stock Data**: Displays up-to-date stock information.
- **Order Management**: Allows users to place buy/sell orders.
- **Portfolio Overview**: Users can view their current holdings, positions, and funds.
- **Interactive Charts**: Visual representation of data using charts.

## Components

### 1. `Apps.jsx`
- The main interface for the various applications within the dashboard.

### 2. `BuyActionWindow.jsx`
- A component that provides a window for users to execute buy actions. 
- Includes fields for quantity and price, and buttons for confirming or canceling the purchase.

### 3. `Dashboard.jsx`
- The primary layout component that includes routing to different sections like Orders, Holdings, Positions, and more.

### 4. `DoughnutChart.jsx`
- A component for displaying a doughnut chart, useful for visualizing distribution data.

### 5. `Funds.jsx`
- Manages and displays the user's funds within the dashboard.

### 6. `GeneralContext.jsx`
- Provides global state management for components such as the BuyActionWindow.

### 7. `Holdings.jsx`
- Displays the current stock holdings of the user.

### 8. `Home.jsx`
- The home page of the dashboard, summarizing key information.

### 9. `Menu.jsx`
- The navigational component that allows users to access different parts of the dashboard.

### 10. `Orders.jsx`
- Lists the user's stock orders with details on execution status, price, and quantity.

### 11. `Positions.jsx`
- Displays the current stock positions held by the user.

### 12. `Summary.jsx`
- A summary page showing an overview of the user's portfolio.

### 13. `TopBar.jsx`
- The top navigation bar that includes links to different parts of the dashboard.

### 14. `VerticalGraph.jsx`
- A component to display a vertical bar graph, useful for comparing different stocks or metrics.

### 15. `WatchList.jsx`
- Manages and displays the stocks that the user is currently monitoring.

## File Structure

The main files and their respective paths are as follows:

- `dashboard/src/components/Apps.jsx`
- `dashboard/src/components/BuyActionWindow.css`
- `dashboard/src/components/BuyActionWindow.jsx`
- `dashboard/src/components/Dashboard.jsx`
- `dashboard/src/components/DoughnutChart.jsx`
- `dashboard/src/components/Funds.jsx`
- `dashboard/src/components/GeneralContext.jsx`
- `dashboard/src/components/Holdings.jsx`
- `dashboard/src/components/Home.jsx`
- `dashboard/src/components/Menu.jsx`
- `dashboard/src/components/Orders.jsx`
- `dashboard/src/components/Positions.jsx`
- `dashboard/src/components/Summary.jsx`
- `dashboard/src/components/TopBar.jsx`
- `dashboard/src/components/VerticalGraph.jsx`
- `dashboard/src/components/WatchList.jsx`

## Installation

To run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dashboard-app.git
   ```

2. Navigate to the project directory:
   ```
   cd dashboard-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

Once the application is running, you can navigate through the various components using the menu. You can view your stocks, place orders, and monitor your portfolio's performance all in one place.

---

This `README.md` file should now provide a clear overview of your project, including details about each component. Let me know if there's anything else you'd like to add or modify!

### Prerequisites

- **Node.js**
- **React.js**

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/zerodha-clone.git
   ```

2. Navigate to the project directory:
   ```
   cd zerodha-clone
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

### Project Deployment

The project can be deployed on platforms like Vercel, Netlify, or any other static site hosting service.

## Features

- **Responsive Design**: The project is fully responsive, ensuring a seamless experience across devices.
- **Component-Based Architecture**: Modular components make the codebase easy to maintain and scale.
- **Routing**: Simple routing to navigate between different sections of the platform.

## Future Enhancements

- **Backend Integration**: Connect the frontend with a backend service to handle real-time data and user interactions.
- **Authentication**: Implement user authentication to simulate the actual Zerodha experience.
- **Advanced Interactions**: Add more dynamic features such as charts, live trading data, and portfolio management.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project is inspired by the Zerodha trading platform, with a focus on replicating its design and user experience for educational purposes.

---

By Ritik Kumar Singh
