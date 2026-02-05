 import { Github, Linkedin, Mail, Heart } from "lucide-react";
 
 const Footer = () => {
   const currentYear = new Date().getFullYear();
   
   const socialLinks = [
      { icon: Github, href: "https://github.com/rishabhXpanwar", label: "GitHub" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/rishabhxpanwar", label: "LinkedIn" },
      { icon: Mail, href: "mailto:rishabhpanwar84499@gmail.com", label: "Email" },
   ];
 
   const navLinks = [
     { name: "About", href: "#about" },
     { name: "Skills", href: "#skills" },
     { name: "Projects", href: "#projects" },
     { name: "Experience", href: "#experience" },
     { name: "Contact", href: "#contact" },
   ];
 
   return (
     <footer className="py-12 border-t border-border/50">
       <div className="section-container">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           {/* Logo and Copyright */}
           <div className="text-center md:text-left">
             <a href="#" className="text-xl font-bold mb-2 inline-block">
                <span className="gradient-text">Rish</span>
                <span className="text-foreground">abh Panwar</span>
             </a>
             <p className="text-sm text-muted-foreground">
               Full Stack Developer • MERN Specialist
             </p>
           </div>
 
           {/* Navigation */}
           <nav className="flex flex-wrap justify-center gap-6">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-sm text-muted-foreground hover:text-primary transition-colors"
               >
                 {link.name}
               </a>
             ))}
           </nav>
 
           {/* Social Links */}
           <div className="flex gap-4">
             {socialLinks.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                 aria-label={link.label}
               >
                 <link.icon size={18} />
               </a>
             ))}
           </div>
         </div>
 
         <div className="mt-8 pt-8 border-t border-border/30 text-center">
           <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
             © {currentYear} Rishabh Panwar. Built with
             <Heart className="w-4 h-4 text-primary inline" />
             using React & Tailwind CSS
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;