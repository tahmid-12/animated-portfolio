import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "OOharagumi",
    year: "2021",
    align: "right",
    image: "../../public/images/Ooharagumi.jpg",
    link: "https://ooharagumi.co.jp/",
  },
  {
    name: "Online Car Buying and Selling Platform",
    year: "2021",
    align: "left",
    image: "../../public/images/Bhalogari.jpg",
    link: "https://bhalogari.com/",
  },
  {
    name: "Paperfly Merchant Panel",
    year: "2022",
    align: "right",
    image: "../../public/images/Paperfly.png",
    link: "https://go.paperfly.com.bd/",
  },
  {
    name: "XIT Admin Panel",
    year: "2024",
    align: "left",
    image: "../../public/images/xit.jpg",
    link: "http://merchant.xpressintown.com/",
  },
  {
    name: "Educate U Admin Panel",
    year: "2025-2026",
    align: "right",
    image: "../../public/images/PEN.jpg",
    link: "http://35.179.130.168:5000/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
