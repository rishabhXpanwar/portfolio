 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { toast } from "sonner";
 
 const Contact = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9e4104d4-fa22-459f-9902-c092afd424d8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
   };
 
   const contactInfo = [
     {
       icon: Mail,
       label: "Email",
        value: "rishabhpanwar84499@gmail.com",
        href: "mailto:rishabhpanwar84499@gmail.com",
     },
     {
       icon: Github,
       label: "GitHub",
        value: "github.com/rishabhXpanwar",
        href: "https://github.com/rishabhXpanwar",
     },
     {
       icon: Linkedin,
       label: "LinkedIn",
        value: "linkedin.com/in/rishabhxpanwar",
        href: "https://www.linkedin.com/in/rishabhxpanwar",
     },
   ];
 
   return (
     <section id="contact" className="py-24 relative">
       <div className="section-container">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
         >
           <span className="text-primary font-mono text-sm mb-2 block">
             05. Contact
           </span>
           <h2 className="section-title">
             Let's Work <span className="gradient-text">Together</span>
           </h2>
           <p className="section-subtitle mx-auto">
             I'm currently open to new opportunities. Whether you have a project 
             in mind or just want to say hi, feel free to reach out!
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
               <div className="grid sm:grid-cols-2 gap-4">
                 <div>
                   <label htmlFor="name" className="text-sm font-medium mb-2 block">
                     Name
                   </label>
                   <Input
                     id="name"
                     name="name"
                     placeholder="Your name"
                     required
                     className="bg-secondary/50 border-border/50"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="text-sm font-medium mb-2 block">
                     Email
                   </label>
                   <Input
                     id="email"
                     name="email"
                     type="email"
                     placeholder="your@email.com"
                     required
                     className="bg-secondary/50 border-border/50"
                   />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                   Subject
                 </label>
                 <Input
                   id="subject"
                   name="subject"
                   placeholder="What's this about?"
                   required
                   className="bg-secondary/50 border-border/50"
                 />
               </div>
               
               <div>
                 <label htmlFor="message" className="text-sm font-medium mb-2 block">
                   Message
                 </label>
                 <Textarea
                   id="message"
                   name="message"
                   placeholder="Tell me about your project or opportunity..."
                   rows={5}
                   required
                   className="bg-secondary/50 border-border/50 resize-none"
                 />
               </div>
               
               <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                 {isSubmitting ? (
                   "Sending..."
                 ) : (
                   <>
                     <Send className="w-4 h-4" />
                     Send Message
                   </>
                 )}
               </Button>
             </form>
           </motion.div>
 
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col justify-center"
           >
             <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
             <p className="text-muted-foreground mb-8">
               I'm always excited to connect with fellow developers, potential 
               employers, and anyone interested in collaborating on interesting projects.
             </p>
             
             <div className="space-y-4">
               {contactInfo.map((item, index) => (
                 <motion.a
                   key={item.label}
                   href={item.href}
                   target={item.href.startsWith("http") ? "_blank" : undefined}
                   rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                   initial={{ opacity: 0, y: 10 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                   className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all duration-300 group"
                 >
                   <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                     <item.icon className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">{item.label}</p>
                     <p className="font-medium group-hover:text-primary transition-colors">
                       {item.value}
                     </p>
                   </div>
                 </motion.a>
               ))}
             </div>
             
             <div className="mt-8 p-4 glass-card">
               <div className="flex items-center gap-3 mb-2">
                 <MapPin className="w-5 h-5 text-primary" />
                 <span className="font-medium">Location</span>
               </div>
               <p className="text-muted-foreground text-sm ml-8">
                 Noida, India • Open to remote opportunities worldwide
               </p>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;