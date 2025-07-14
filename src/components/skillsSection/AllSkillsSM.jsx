import { FaHtml5, FaCss3Alt, FaReact,FaLaravel,FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs,SiDjango } from "react-icons/si";
import { RiTailwindCssFill,RiPhpFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "VueJS",
    icon: FaVuejs,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "PHP",
    icon: RiPhpFill,
  },
  {
    skill: "Laravel",
    icon: FaLaravel,
  },
  {
    skill: "NodeJS",
    icon: LiaNode,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Django",
    icon: SiDjango,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 px-4 sm:px-6 md:px-8 py-8">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2 + index * 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <item.icon className="text-5xl sm:text-6xl text-orange" />
          <p className="text-base sm:text-lg mt-3 text-white">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;