const Projects = () => {
    const projects = [
      { title: "Habit Tracker", description: "A productivity tool to track habits." },
      { title: "MyNews", description: "A personalized media page." },
      { title: "Raspberry Pi LED Matrix", description: "Dot movement on Sense HAT LED matrix." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  