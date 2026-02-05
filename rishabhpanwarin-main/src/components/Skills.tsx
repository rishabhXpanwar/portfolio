import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "skill-frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    color: "skill-backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "JWT Auth", level: 88 },
    ],
  },
  {
    title: "Languages",
    color: "skill-tools",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 65 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    color: "skill-concepts",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Stripe Integration", level: 90 },
      { name: "NPM", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const colorMap: Record<string, string> = {
  "skill-frontend": "bg-skill-frontend",
  "skill-backend": "bg-skill-backend",
  "skill-tools": "bg-skill-tools",
  "skill-concepts": "bg-skill-concepts",
};

const borderColorMap: Record<string, string> = {
  "skill-frontend": "border-skill-frontend/50",
  "skill-backend": "border-skill-backend/50",
  "skill-tools": "border-skill-tools/50",
  "skill-concepts": "border-skill-concepts/50",
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">02. Skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`glass-card p-6 hover:${borderColorMap[category.color]} transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${colorMap[category.color]}`} />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`skill-progress-bar ${colorMap[category.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
