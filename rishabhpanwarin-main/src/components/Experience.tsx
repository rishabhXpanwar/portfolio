import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Developed and maintained full-stack web applications using the MERN stack",
    "Implemented RESTful APIs and integrated third-party services",
    "Collaborated with design and product teams to deliver user-focused solutions",
    "Participated in code reviews and maintained high code quality standards",
    "Optimized application performance and improved loading times",
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">04. Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">Building real-world experience through hands-on development work</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Web Developer Intern</h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Building2 className="w-4 h-4" />
                    Mdivine Tech Pvt. Ltd.
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    May 2025 – August 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Gurugram, India
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Git", "REST APIs"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
