import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Personal branding text for seamless scrolling cube faces
const marqueeLine = `Hi, 👋 I'm <span class="hero-name">Rishabh Panwar</span> --- Full Stack Web Developer`;
const marqueeSegment = `${marqueeLine} --- `;
const marqueeTrack = marqueeSegment.repeat(10);
const scrollingText = `<p><span class="hero-scroll-track">${marqueeTrack}</span><span class="hero-scroll-track" aria-hidden="true">${marqueeTrack}</span></p>`;

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<"gpu" | "cpu">("gpu");

  useEffect(() => {
    // Insert text into cube faces
    const textDivs =
      containerRef.current?.querySelectorAll<HTMLElement>(".hero-cube-text") ?? [];
    textDivs.forEach((div) => {
      div.innerHTML = scrollingText;
    });

    // Keep desktop visual richness, but favor a lighter rendering path on tablets/mobiles.
    const isTabletOrMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isTabletOrMobile) {
      setRenderMode("cpu");
      return;
    }

    // Prefer richer effects only when the browser reports WebGL support.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setRenderMode("cpu");
      return;
    }

    const canvas = document.createElement("canvas");
    const gl =
      (canvas.getContext("webgl2") as WebGL2RenderingContext | null) ||
      (canvas.getContext("webgl") as WebGLRenderingContext | null);

    if (!gl) {
      setRenderMode("cpu");
      return;
    }

    // Prefer CPU mode when the renderer string indicates software fallback.
    const rendererInfo = gl.getExtension("WEBGL_debug_renderer_info") as {
      UNMASKED_RENDERER_WEBGL: number;
    } | null;
    const renderer = rendererInfo
      ? String(gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL))
      : "";
    const softwareRenderer = /swiftshader|llvmpipe|software/i.test(renderer);

    setRenderMode(softwareRenderer ? "cpu" : "gpu");
  }, []);

  return (
    <section
      id="hero"
      className="h-screen w-full relative overflow-hidden"
      data-render-mode={renderMode}
    >
      {/* Fullscreen 3D Cube Container */}
      <div ref={containerRef} className="hero-fullscreen-container">
        <div className="hero-container-full">
          {/* Animated hue overlay */}
          <div className="hero-hue animated"></div>
          
          {/* Background and character images */}
          <img 
            className="hero-background-image" 
            src="https://drive.google.com/thumbnail?id=1_ZMV_LcmUXLsRokuz6WXGyN9zVCGfAHp&sz=w1920" 
            alt="Background"
          />
          <img 
            className="hero-boy-image" 
            src="https://drive.google.com/thumbnail?id=1eGqJskQQgBJ67myGekmo4YfIVI3lfDTm&sz=w1920" 
            alt="Character"
          />
          
          {/* Main 3D Cube */}
          <div className="hero-cube-container">
            <div className="hero-cube">
              <div className="hero-face hero-top"></div>
              <div className="hero-face hero-bottom"></div>
              <div className="hero-face hero-left hero-cube-text"></div>
              <div className="hero-face hero-right hero-cube-text"></div>
              <div className="hero-face hero-front"></div>
              <div className="hero-face hero-back hero-cube-text"></div>
            </div>
          </div>
          
          {/* Reflection Cube */}
          <div className="hero-cube-container-reflect">
            <div className="hero-cube hero-cube-reflected">
              <div className="hero-face hero-top"></div>
              <div className="hero-face hero-bottom"></div>
              <div className="hero-face hero-left hero-cube-text"></div>
              <div className="hero-face hero-right hero-cube-text"></div>
              <div className="hero-face hero-front"></div>
              <div className="hero-face hero-back hero-cube-text"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - Fixed at bottom */}
      <div className="hero-cta-shell absolute bottom-0 left-0 right-0 z-30 pb-8 pt-16 bg-gradient-to-t from-background via-background/80 to-transparent">
        <div className="hero-cta-content flex flex-col items-center gap-4">
          {/* Tagline above buttons */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-cta-tagline text-lg sm:text-xl md:text-2xl text-muted-foreground text-center max-w-2xl px-4"
          >
            Building <span className="text-primary font-semibold">Scalable</span> Solutions — <span className="text-primary font-semibold">MERN Stack</span> Expert
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-cta-actions flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="gap-2 glow text-base px-8" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base px-8" asChild>
              <a href="/resume.pdf" download="Rishabh_Panwar_Resume.pdf">
                <Download className="w-5 h-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-social-links flex justify-center gap-6"
          >
            <a
              href="https://github.com/rishabhXpanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabhxpanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rishabhpanwar84499@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hero-scroll-indicator mt-2"
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
      </div>
    </section>
  );
};

export default Hero;
