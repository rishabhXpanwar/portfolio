 import { motion } from "framer-motion";
 import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroPhoto from "@/assets/hero-photo.png";
 
 const Hero = () => {
   return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-20 lg:pt-0">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-hero-gradient" />
       <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
 
      <div className="section-container relative z-10 w-full px-4 sm:px-6">
        <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 md:gap-8 lg:gap-4 min-h-[calc(100vh-5rem)] lg:min-h-0">
           {/* Hero Photo - Left Side */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-shrink-0 relative lg:mt-32"
           >
             {/* Photo container - clean cutout */}
            <div className="relative lg:h-[85vh] lg:max-h-[650px] flex items-center lg:items-end justify-center">
               {/* Photo - clean, no effects */}
               <img
                 src={heroPhoto}
                 alt="Rishabh Panwar"
                className="relative w-48 h-[280px] sm:w-64 sm:h-[360px] md:w-80 md:h-[420px] lg:w-[450px] lg:h-[650px] xl:w-[500px] xl:h-[720px] object-cover object-top"
               />
             </div>
           </motion.div>
 
            {/* Text Content - Right Side */}
           <div className="flex-1 text-left lg:text-center lg:max-w-[65%] flex flex-col items-start lg:items-center justify-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
              className="mb-3 sm:mb-4 md:mb-6"
             >
              <span className="inline-block px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full glass-card text-xs sm:text-xs md:text-sm text-primary font-medium backdrop-blur-md">
                 Available for opportunities
               </span>
             </motion.div>
 
             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 leading-tight"
             >
               Hi, I'm{" "}
               <span className="gradient-text">Rishabh Panwar</span>
             </motion.h1>
 
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-3 md:mb-4"
             >
               Full Stack Web Developer
             </motion.p>
 
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
             className="text-sm sm:text-sm md:text-base text-muted-foreground max-w-[200px] sm:max-w-xs md:max-w-md lg:mx-auto mb-5 sm:mb-6 md:mb-8"
             >
               Crafting high-performance web applications with the{" "}
               <span className="text-primary font-semibold">MERN Stack</span>. 
               Passionate about building scalable solutions and exceptional user experiences.
             </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
             >
            <Button size="sm" className="gap-2 glow text-sm sm:text-sm md:h-11 md:px-8 h-9 px-4" asChild>
                 <a href="#projects">
                   View Projects
                <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                 </a>
               </Button>
            <Button variant="outline" size="sm" className="gap-2 text-sm sm:text-sm md:h-11 md:px-8 h-9 px-4" asChild>
                 <a href="/resume.pdf" download="Rishabh_Panwar_Resume.pdf">
                <Download className="w-4 h-4 sm:w-4 sm:h-4" />
                    Resume
                 </a>
               </Button>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.5 }}
             className="flex gap-4 sm:gap-5 md:gap-6"
             >
               <a
                 href="https://github.com/rishabhXpanwar"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors duration-200"
                 aria-label="GitHub"
               >
              <Github className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
               </a>
               <a
                 href="https://www.linkedin.com/in/rishabhxpanwar"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors duration-200"
                 aria-label="LinkedIn"
               >
              <Linkedin className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
               </a>
               <a
                 href="mailto:rishabhpanwar84499@gmail.com"
                 className="text-muted-foreground hover:text-primary transition-colors duration-200"
                 aria-label="Email"
               >
              <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
               </a>
             </motion.div>
           </div>
         </div>
 
         {/* Scroll indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 0.5 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
         >
           <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
             <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-1.5 h-1.5 rounded-full bg-primary"
             />
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Hero;