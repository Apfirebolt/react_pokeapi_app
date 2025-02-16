const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-blue-600 w-full py-4">
                <h1 className="text-white text-center text-3xl font-bold">Welcome to PokeAPI</h1>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4">Discover Pokémon</h2>
                <p className="text-gray-700 mb-8">Explore the world of Pokémon with our simple and easy-to-use interface.</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
            </main>
            <footer className="bg-gray-800 w-full py-4">
                <p className="text-white text-center">&copy; 2023 PokeAPI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;