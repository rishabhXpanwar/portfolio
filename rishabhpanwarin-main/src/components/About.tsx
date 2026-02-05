 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { GraduationCap, MapPin, Code2, Target } from "lucide-react";
 
 const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.2,
       },
     },
   };
 
   const itemVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0 },
   };
 
   return (
     <section id="about" className="py-24 relative">
       <div className="section-container">
         <motion.div
           ref={ref}
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           className="grid md:grid-cols-2 gap-12 items-center"
         >
            {/* Left Column - Text */}
            <div>
             <motion.span
               variants={itemVariants}
               className="text-primary font-mono text-sm mb-2 block"
             >
               01. About Me
             </motion.span>
             <motion.h2 variants={itemVariants} className="section-title">
               Turning ideas into{" "}
               <span className="gradient-text">reality</span>
             </motion.h2>
             <motion.p
               variants={itemVariants}
               className="text-muted-foreground mb-6 leading-relaxed"
             >
               I'm a passionate Full Stack Developer currently pursuing B.Tech in 
               Information Technology at JSS Academy of Technical Education, Noida 
               (2022–2026). My journey in web development started with curiosity and 
               has evolved into a deep expertise in building production-ready applications.
             </motion.p>
             <motion.p
               variants={itemVariants}
               className="text-muted-foreground mb-6 leading-relaxed"
             >
               I specialize in the <span className="text-primary font-semibold">MERN Stack</span> and 
               love tackling complex problems that require creative solutions. Whether it's 
               architecting scalable backends, implementing secure authentication systems, 
               or crafting responsive user interfaces—I bring dedication to every project.
             </motion.p>
             <motion.p
               variants={itemVariants}
               className="text-muted-foreground leading-relaxed"
             >
               My goal is to join an innovative team where I can contribute to meaningful 
               projects, continue learning, and grow as a software engineer while making 
               a real impact.
             </motion.p>
           </div>
 
           {/* Right Column - Cards */}
           <motion.div
             variants={itemVariants}
             className="grid grid-cols-2 gap-4"
           >
             <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300">
               <GraduationCap className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="font-semibold mb-1">Education</h3>
               <p className="text-sm text-muted-foreground">B.Tech IT</p>
               <p className="text-xs text-muted-foreground mt-1">2022 - 2026</p>
             </div>
             
             <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300">
               <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="font-semibold mb-1">Location</h3>
               <p className="text-sm text-muted-foreground">Noida, India</p>
               <p className="text-xs text-muted-foreground mt-1">Open to Remote</p>
             </div>
             
             <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300">
               <Code2 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="font-semibold mb-1">Experience</h3>
               <p className="text-sm text-muted-foreground">Web Developer</p>
               <p className="text-xs text-muted-foreground mt-1">Intern @ Mdivine</p>
             </div>
             
             <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300">
               <Target className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="font-semibold mb-1">Focus</h3>
               <p className="text-sm text-muted-foreground">Full Stack</p>
               <p className="text-xs text-muted-foreground mt-1">MERN Specialist</p>
             </div>
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default About;