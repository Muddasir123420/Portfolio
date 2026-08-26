import { Zap } from 'lucide-react';

export default function Tools() {
  const devTools = [
    { name: "VS Code", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.svg", type: "Code Editor" },
    { name: "HTML5", icon: "/assets/html-icon.webp", type: "Language" },
    { name: "CSS3", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png", type: "Language" },
    { name: "JavaScript", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.svg", type: "Language" },
    { name: "React.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg", type: "Framework" },
    { name: "Node.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg", type: "Runtime" },
    { name: "Express.js", icon: null, type: "Backend Framework" },
    { name: "MongoDB", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.svg", type: "Database" },
    { name: "Flutter", icon: null, type: "Mobile Development" },
    { name: "GitHub", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg", type: "Repository", link: "https://github.com/Muddasir123420" },
  ];

  const ToolCard = ({ tool }) => {
    const content = (
      <div className="bg-[#0F172A] border border-[#6FA3B840] rounded-xl p-5 flex flex-col items-center justify-center 
      hover:scale-105 hover:shadow-[0_0_25px_#6FA3B860] hover:border-[#9ED0E0] transition duration-300 group h-full">
        
        {tool.icon ? (
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-12 h-12 mb-3 group-hover:scale-110 transition duration-300"
          />
        ) : (
          <div className="w-12 h-12 mb-3 rounded-lg bg-[#6FA3B8]/15 border border-[#6FA3B840] flex items-center justify-center text-[#9ED0E0] font-bold text-sm group-hover:scale-110 transition duration-300">
            {tool.name.slice(0, 2).toUpperCase()}
          </div>
        )}

        <h3 className="text-[#F8FAFC] font-semibold text-center">
          {tool.name}
        </h3>

        <p className="text-[#9ED0E0] text-sm">
          {tool.type}
        </p>
      </div>
    );

    if (tool.link) {
      return (
        <a href={tool.link} target="_blank" rel="noreferrer" className="block h-full">
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <section
      id="tools"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 py-16 sm:py-20 bg-[#0F172A] text-[#F8FAFC]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Tools &{" "}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg md:text-xl text-center mb-16">
        My Development Stack
      </p>

      <div className="w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[#6FA3B840]" />

          <h3 className="text-[#9ED0E0] font-semibold tracking-widest text-sm uppercase px-4 flex items-center gap-2">
            <Zap size={15} /> Development
          </h3>

          <div className="h-px flex-1 bg-[#6FA3B840]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {devTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}