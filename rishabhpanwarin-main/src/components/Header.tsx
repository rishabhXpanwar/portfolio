 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Menu, X, Download } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { name: "About", href: "#about" },
   { name: "Skills", href: "#skills" },
   { name: "Projects", href: "#projects" },
   { name: "Experience", href: "#experience" },
   { name: "Contact", href: "#contact" },
 ];
 
 const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <motion.header
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.5 }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? "glass-card py-3" : "py-5"
       }`}
     >
       <div className="section-container">
         <nav className="flex items-center justify-between">
           <a href="#" className="text-2xl font-bold">
              <span className="gradient-text transition-all duration-300 hover:brightness-125 hover:scale-105 inline-block">Rish</span>
              <span className="text-foreground">abh</span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
               >
                 {link.name}
               </a>
             ))}
             <Button variant="default" size="sm" asChild className="gap-2">
               <a href="/resume.pdf" download="Rishabh_Panwar_Resume.pdf">
                 <Download className="w-4 h-4" />
                 Resume
               </a>
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden text-foreground"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </nav>
 
         {/* Mobile Navigation */}
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="md:hidden mt-4 glass-card p-4 rounded-lg"
           >
             <div className="flex flex-col gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   className="text-muted-foreground hover:text-foreground transition-colors py-2"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {link.name}
                 </a>
               ))}
               <Button variant="default" size="sm" asChild className="gap-2 w-full">
                 <a href="/resume.pdf" download="Rishabh_Panwar_Resume.pdf">
                   <Download className="w-4 h-4" />
                   Download Resume
                 </a>
               </Button>
             </div>
           </motion.div>
         )}
       </div>
     </motion.header>
   );
 };
 
 export default Header;