import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  // {
  //   job: "Intern",
  //   company: "Standard bank Limited",
  //   date: "2019 - 2019",
  //   responsibilities: [
  //     "Implementing reusable components.",
  //     "Participating in large scale application.",
  //     "Working on the performance of web applications.",
  //     "Generating new ideas for better user experience.",
  //   ],
  // },
  {
    job: "Junior Software Engineer",
    company: "bhalogari.com",
    date: "2021 - 2022",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Senior Executive",
    company: "Paperfly",
    date: "2022 - 2023",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Xpress in Town Ltd.",
    date: "2023 - 2023",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Arbree limited",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-6 flex-wrap justify-center">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-center gap-6">
            <SingleExperience experience={experience} />

            {/* Show arrow if not the last experience */}
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-3xl text-orange" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllExperiences;
