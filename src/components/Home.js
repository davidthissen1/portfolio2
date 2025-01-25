const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <p className="text-lg mb-8">Explore my projects and get to know me.</p>
        <a href="/projects">
          <button className="px-6 py-2 bg-white text-blue-800 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            View My Projects
          </button>
        </a>
      </div>
    );
  };
  
  export default Home;
  