import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import neoshopProducts from "@/assets/neoshop-products.png";
import neoshopCart from "@/assets/neoshop-cart.png";
import neoshopSuccess from "@/assets/neoshop-success.png";

const featuredProject = {
  title: "NeoShop",
  subtitle: "Full Stack E-Commerce Platform",
  description:
    "A complete e-commerce solution built with the MERN stack featuring JWT authentication, role-based access control, Redux state management, and Stripe payment integration. Includes product browsing, shopping cart, order management, and admin dashboard.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Stripe", "JWT"],
  liveUrl: "https://neo-cart-ecommerce.vercel.app/",
  githubUrl: "https://github.com/rishabhXpanwar/NeoCart-ecommerce",
  images: [neoshopProducts, neoshopCart, neoshopSuccess],
  highlights: [
    "Secure checkout with Stripe webhooks",
    "Role-based admin dashboard",
    "Real-time cart updates",
    "Order tracking system",
  ],
};

const otherProjects = [
  {
    title: "Task Manager",
    description:
      "Full-featured task management application with authentication, task filters, reminders, and category organization.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
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

        {/* Featured Project - NeoShop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass-card overflow-hidden glow">
            <div className="flex items-center gap-2 px-6 py-3 border-b border-border/50">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Project</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Project Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2">{featuredProject.title}</h3>
                <p className="text-primary font-medium mb-4">{featuredProject.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {featuredProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech) => (
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
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Screenshots */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-span-2 rounded-lg overflow-hidden border border-border/50 shadow-2xl"
                  >
                    <img src={featuredProject.images[0]} alt="NeoShop Products Page" className="w-full h-auto" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg overflow-hidden border border-border/50 shadow-xl"
                  >
                    <img src={featuredProject.images[1]} alt="NeoShop Cart" className="w-full h-auto" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg overflow-hidden border border-border/50 shadow-xl"
                  >
                    <img src={featuredProject.images[2]} alt="NeoShop Order Success" className="w-full h-auto" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
    </section>
  );
};

export default Projects;
