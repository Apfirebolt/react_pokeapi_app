# React PokeAPI App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

## About

This is a hobby application which utilizes the PokeAPI to fetch and display data about various Pokémon. The app is built using React for the frontend, Redux for state management, and TailwindCSS for styling. Redux Toolkit is used to simplify the Redux setup and improve code readability.

## Features

I've worked on multiple applications in the past using PokeAPI. I think this is the most feature rich out of all those. It includes following pages split into 6 modules.

- Pokemon
- Item
- Location
- Move
- Machine (TM and HM)

Individual detail pages for pokemon, item etc exist to get more insights into individual items from the API.

## Screenshots

Here are few screeshots of the application. The CSS is likely to change in future if theme colors are changed.

First screenshot shows the Pokemon detail page

![Screenshot 1](./screenshots/1.png)

This one shows moves page, similarly we have pokemon, items and other list pages as well.

![Screenshot 2](./screenshots/2.png)

Type detail page. It shows list of pokemon belonging to that type.

![Screenshot 3](./screenshots/3.png)

This shows pagination at the end of items page.

![Screenshot 4](./screenshots/4.png)

Item detail page screenshot.

![Screenshot 5](./screenshots/5.png)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/apfirebolt/react_pokeapi_app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd react_pokeapi_app
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## State Management - Redux vs Context API

We shall discuss about the popular options we have for state management in React which are Redux and Context API.

#### Redux

**Pros:**
- **Predictable State Management:** Redux provides a predictable state container, making it easier to manage and debug application state.
- **Middleware Support:** Redux has a powerful middleware system that allows for handling side effects, logging, and more.
- **DevTools Integration:** Redux DevTools offer powerful features for inspecting and debugging state changes.
- **Community and Ecosystem:** Redux has a large community and a rich ecosystem of middleware and tools.

**Cons:**
- **Boilerplate Code:** Redux can introduce a lot of boilerplate code, which can be cumbersome for smaller applications.
- **Complexity:** For simple state management needs, Redux can be overkill and add unnecessary complexity.

#### Context API

**Pros:**
- **Simplicity:** The Context API is simpler to set up and use, making it ideal for smaller applications or simple state management needs.
- **No External Dependencies:** Unlike Redux, the Context API is built into React, so there's no need to install additional libraries.
- **Less Boilerplate:** The Context API requires less boilerplate code compared to Redux.

**Cons:**
- **Performance Issues:** The Context API can lead to performance issues if not used carefully, as it can cause unnecessary re-renders.
- **Limited Middleware Support:** The Context API does not have the same level of middleware support as Redux, making it less suitable for handling complex side effects.
- **DevTools:** The Context API lacks the powerful DevTools integration that Redux offers, making state debugging more challenging.

In summary, Redux is a powerful tool for managing complex state in large applications, while the Context API is a simpler alternative for smaller applications or less complex state management needs.

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and go to `http://localhost:3000` to see the app in action.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
