import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-lg leading-relaxed text-lightGrey">
        I’m Md. Tahmid Chowdhury, a passionate Full-Stack Developer with over 4 years of experience in building web applications using PHP, Python, and JavaScript.  
        My focus lies in developing clean, scalable, and maintainable code that drives impactful user experiences and robust backend systems.  
        I have a strong understanding of MVC architecture, RESTful APIs, and modern frontend practices.  
        I’m also committed to continuous learning, collaboration, and delivering high-quality solutions that solve real-world problems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;