import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, Cpu, School, Rocket, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import neoshopProducts from "@/assets/neoshop-products.png";
import neoshopCart from "@/assets/neoshop-cart.png";
import neoshopSuccess from "@/assets/neoshop-success.png";
import meetproLanding from "@/assets/meetpro-landing.png";
import meetproMeetMode from "@/assets/meetpro-meetmode.png";
import meetproAiMode from "@/assets/meetpro-aimode.png";
import blitzstack1 from "@/assets/blitzstack-1.png";
import blitzstack2 from "@/assets/blitzstack-2.png";
import blitzstack3 from "@/assets/blitzstack-3.png";
import educorpMain from "@/assets/educorp-main.png";
import educorpTeacherDashboard from "@/assets/edu-dashboard-1.png";
import educorpPrincipalDashboard from "@/assets/edu-dashboard-2.png";

const featuredProjects = [
  
  {
    id: "meetpro",
    title: "MeetPro",
    subtitle: "Conference & AI Interview Platform",
    description:
      "A peer-to-peer video conferencing platform with two distinct modes. Normal Mode supports real-time meetings with host controls (kick, mute, screen share, chat). AI Mode powers smart interview sessions — the AI analyzes candidate resumes, generates a profile summary, and conducts adaptive questioning with live face detection, scoring, and spectator support for interviewers.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "Gemini AI"],
    liveUrl: "https://conference-cum-ai-interview-platfor.vercel.app/",
    githubUrl: "https://github.com/rishabhXpanwar/Conference-cum-Ai-Interview-Platform",
    images: [meetproLanding, meetproMeetMode, meetproAiMode],
    imageAlts: ["MeetPro Landing Page", "MeetPro Meet Mode Dashboard", "MeetPro AI Interview Studio"],
    highlights: [
      "WebRTC peer-to-peer video conferencing",
      "AI resume analysis & adaptive questions",
      "Live face detection & candidate scoring",
      "Host controls: kick, mute, screen share",
    ],
    badge: "AI-Powered Project",
    BadgeIcon: Cpu,
  },
  {
    id: "blitzstack",
    title: "BlitzStack",
    subtitle: "Enterprise-Grade Development Agency",
    description:
      "A forward-thinking development agency that builds enterprise-grade MERN applications for startups and local businesses. Leverages AI-powered development workflows to deliver scalable, high-performance web products 10x faster—turning concepts into production-ready software in days.",
    tech: ["React (Vite/TS)", "React Router v6", "Framer Motion", "Tailwind CSS", "Express API", "Nodemailer"],
    liveUrl: "https://www.blitzstack.in",
    githubUrl: "",
    images: [blitzstack1, blitzstack2, blitzstack3],
    imageAlts: ["BlitzStack Landing Page", "BlitzStack Services", "BlitzStack Process"],
    highlights: [
      "AI-powered development workflows",
      "Interactive canvas flow-field background",
      "Express API + Nodemailer contact system",
      "Rapid concept-to-production delivery",
    ],
    badge: "Development Agency",
    BadgeIcon: Rocket,
  },
  {
    id: "educorp-erp",
    title: "Edu-Corp ERP",
    subtitle: "Full-Stack Multi-Tenant School Management Platform",
    description:
      "A comprehensive educational ERP system that unifies academics, administration, finance, HR, and communication in one role-aware platform. Built for modern K-12 schools with tenant isolation, secure role-based access, and real-time dashboards for principals, teachers, students, and parents.",
    tech: ["React", "Vite", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    liveUrl: "https://black-smoke-035ba8700.6.azurestaticapps.net",
    githubUrl: "https://github.com/rishabhXpanwar/Edu-Corp-ERP",
    images: [educorpMain, educorpTeacherDashboard, educorpPrincipalDashboard],
    imageAlts: [
      "Edu-Corp ERP Landing Page",
      "Edu-Corp ERP Teacher Dashboard",
      "Edu-Corp ERP Principal Dashboard",
    ],
    highlights: [
      "Multi-tenant architecture with school-level data isolation",
      "9 role-based dashboards with fine-grained permissions",
      "Real-time notifications and analytics-driven school operations",
      "Academic, HR, fee, salary, library, and transport workflows",
    ],
    badge: "Enterprise ERP Project",
    BadgeIcon: School,
  },
  {
    id: "neoshop",
    title: "NeoShop",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "A complete e-commerce solution built with the MERN stack featuring JWT authentication, role-based access control, Redux state management, and Stripe payment integration. Includes product browsing, shopping cart, order management, and admin dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Stripe", "JWT"],
    liveUrl: "https://neo-cart-ecommerce.vercel.app/",
    githubUrl: "https://github.com/rishabhXpanwar/NeoCart-ecommerce",
    images: [neoshopProducts, neoshopCart, neoshopSuccess],
    imageAlts: ["NeoShop Products Page", "NeoShop Cart", "NeoShop Order Success"],
    highlights: [
      "Secure checkout with Stripe webhooks",
      "Role-based admin dashboard",
      "Real-time cart updates",
      "Order tracking system",
    ],
    badge: "Featured Project",
    BadgeIcon: Star,
  }
];

const otherProjects = [
  {
    title: "Task Manager",
    description:
      "Full-featured task management application with authentication, task filters, reminders, and category organization.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://taskmanager-with-auth.vercel.app/",
    githubUrl: "https://github.com/rishabhXpanwar/taskmanager-with-auth.git",
  },
  {
    title: "News Aggregator",
    description:
      "Real-time news aggregation platform with search functionality, bookmarks, and category filtering powered by GNews API.",
    tech: ["React.js", "GNews API", "Tailwind CSS"],
    liveUrl: "https://news-aggregator-lilac-pi.vercel.app/",
    githubUrl: "https://github.com/rishabhXpanwar/news-aggregator",
  },
  {
    title: "GitHub Explorer",
    description: "GitHub profile and repository explorer with search functionality and detailed repository statistics.",
    tech: ["React.js", "GitHub REST API", "CSS"],
    liveUrl: "https://github-explorer-iota-eight.vercel.app/",
    githubUrl: "https://github.com/rishabhXpanwar/github-explorer",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImageState, setSelectedImageState] = useState<{ images: string[]; currentIndex: number } | null>(null);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImageState) return;
    setSelectedImageState({
      ...selectedImageState,
      currentIndex: (selectedImageState.currentIndex + 1) % selectedImageState.images.length,
    });
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImageState) return;
    setSelectedImageState({
      ...selectedImageState,
      currentIndex:
        (selectedImageState.currentIndex - 1 + selectedImageState.images.length) % selectedImageState.images.length,
    });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">03. Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world applications showcasing full-stack development expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-12 mb-20">
          {featuredProjects.map((project, i) => {
            const { BadgeIcon } = project;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <div className="glass-card overflow-hidden glow">
                  <div className="flex items-center gap-2 px-6 py-3 border-b border-border/50">
                    <BadgeIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{project.badge}</span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
                    {/* Project Info */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button asChild className="gap-2">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button variant="outline" asChild className="gap-2">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Screenshots */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="col-span-2 rounded-lg overflow-hidden border border-border/50 shadow-2xl cursor-zoom-in"
                          onClick={() => setSelectedImageState({ images: project.images, currentIndex: 0 })}
                        >
                          <img
                            src={project.images[0]}
                            alt={project.imageAlts[0]}
                            className="w-full h-auto"
                          />
                        </motion.div>
                        {project.images[1] && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg overflow-hidden border border-border/50 shadow-xl cursor-zoom-in"
                            onClick={() => setSelectedImageState({ images: project.images, currentIndex: 1 })}
                          >
                            <img
                              src={project.images[1]}
                              alt={project.imageAlts[1] || `${project.title} Screenshot 2`}
                              className="w-full h-auto"
                            />
                          </motion.div>
                        )}
                        {project.images[2] && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg overflow-hidden border border-border/50 shadow-xl cursor-zoom-in"
                            onClick={() => setSelectedImageState({ images: project.images, currentIndex: 2 })}
                          >
                            <img
                              src={project.images[2]}
                              alt={project.imageAlts[2] || `${project.title} Screenshot 3`}
                              className="w-full h-auto"
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="project-card p-6 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageState(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent bubbling up to the backdrop
            >
              {selectedImageState.images.length > 1 && (
                <button
                  className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-10"
                  onClick={handlePrevImage}
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              <img
                key={selectedImageState.currentIndex}
                src={selectedImageState.images[selectedImageState.currentIndex]}
                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
                alt="Enlarged Project Screenshot"
              />

              {selectedImageState.images.length > 1 && (
                <button
                  className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-10"
                  onClick={handleNextImage}
                  aria-label="Next Image"
                >
                  <ChevronRight size={32} />
                </button>
              )}

              <button
                className="absolute top-4 right-4 md:-top-12 md:-right-12 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-10"
                onClick={() => setSelectedImageState(null)}
                aria-label="Close Gallery"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;