import { Mail, ExternalLink, ArrowRight, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  type Variants,
} from "framer-motion";

const projects = [
  {
    title: "Loadrivo Admin Dashboard",
    image: "/projects/admin.png",
    description:
      "A feature-rich admin dashboard for logistics operations including users, orders, payments, and analytics with scalable architecture.",
    stack: ["ReactJS", "TypeScript", "Tailwind CSS", "React Router"],
    live: "https://vercel.com/ezekieltemitopes-projects/lodrivo-admin/A124DZ6SJfiePfBts3YYja5nxuro",
    github: "https://github.com/ezekieltemitope/lodrivo-admin",
  },
  {
    title: "Loadrivo Landing Page",
    image: "/projects/landing.png",
    description:
      "A modern logistics landing page designed to improve user engagement with smooth animations and responsive layouts.",
    stack: ["ReactJS", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://vercel.com/ezekieltemitopes-projects/landing-page/EVXYBRVxCN4zivQPMSebHrsLbYmj",
    github: "https://github.com/ezekieltemitope/Landing-Page",
  },
  {
    title: "MarkAfe Elevated Technologies (MET)",
    image: "/projects/met.png",
    description:
      "A corporate website showcasing IT services like cloud hosting, infrastructure deployment, and IT transformation.",
    stack: ["ReactJS", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://vercel.com/ezekieltemitopes-projects/mark-afe-elevated-technologies/EMXB5fjuMbPbaR8HoQGRksGqSSWQ",
    github: "https://github.com/ezekieltemitope/MarkAfe-Elevated-Technologies",
  },
];

const skills = [
  "ReactJS",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "React Router",
  "Git & GitHub",
  "Responsive Design",
  "Figma to Code",
  "API Integration",
  "Component Architecture",
];

const services = [
  "Responsive website development",
  "Frontend implementation from Figma",
  "Landing page development",
  "Dashboard interfaces",
  "React web applications",
  "Modern UI refactoring",
];

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="max-w-2xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400/80"
        variants={fadeUp}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white"
        variants={fadeUp}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mt-4 text-sm leading-7 text-white/60 sm:text-base"
        variants={fadeUp}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function PortfolioHomepage() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen overflow-x-hidden bg-[#07111f] pt-18 text-white"
    >
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed left-0 right-0 top-0 z-100 h-0.75 bg-cyan-400"
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, -15, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="./projects/temmy.png" // replace with your actual path
              alt="Alebiosu Temitope"
              className="h-15 w-15  rounded-full object-cover"
            />
          </motion.a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition ${
                  activeSection === item.id ? "text-cyan-400" : "text-white/70"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyan-400"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Let&apos;s Talk
          </motion.a>

          <motion.button
            className="inline-flex rounded-md border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.92 }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden border-t border-white/10 bg-[#091528] px-6 md:hidden"
            >
              <motion.div
                className="flex flex-col gap-4 py-4 text-sm text-white/70"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    variants={fadeUp}
                    whileHover={{ x: 6, color: "#ffffff" }}
                    className={activeSection === item.id ? "text-cyan-400" : ""}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <section
          id="home"
          className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400/80"
              >
                Frontend Developer
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]"
              >
                I build clean, responsive, and modern web interfaces.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
              >
                I&apos;m Alebiosu Temitope Ezekiel, a frontend developer with
                over 4 years of experience building clean, responsive, and
                user-focused web applications. I specialize in ReactJS,
                TypeScript, and modern UI frameworks, with a strong focus on
                scalable interfaces, smooth animations, and pixel-perfect
                designs.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Contact Me
                </motion.a>

                <motion.a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Download CV
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-center gap-4 text-white/60"
              >
                <motion.a
                  href="https://github.com/ezekieltemitope"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 transition hover:bg-white/10 hover:text-white"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={18} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/alebiosu-temitope-ezekiel-69a29826b"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 p-3 transition hover:bg-white/10 hover:text-white"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn size={18} />
                </motion.a>

                <motion.a
                  href="mailto:alebiosutemitope79@gmail.com"
                  className="rounded-full border border-white/10 p-3 transition hover:bg-white/10 hover:text-white"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative"
            >
              <motion.div
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="rounded-3xl border border-white/10 bg-[#0b1728] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-white/50">
                        Currently focused on
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        Frontend Engineering
                      </h3>
                    </div>

                    <motion.div
                      className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-300"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Available for work
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-6 space-y-4 text-sm text-white/70"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                  >
                    {[
                      {
                        title: "Modern UI Development",
                        text: "Fast, responsive, and clean interfaces.",
                      },
                      {
                        title: "Component-Based Architecture",
                        text: "Reusable, scalable, and maintainable code.",
                      },
                      {
                        title: "Design-to-Code Precision",
                        text: "Turning UI concepts into polished products.",
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        variants={scaleIn}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="rounded-2xl border border-white/10 bg-white/3 p-4"
                      >
                        <p className="text-white">{item.title}</p>
                        <p className="mt-1 text-white/50">{item.text}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="About"
              title="A frontend developer focused on clean execution."
              description="I build interfaces that are easy to use, easy to scan, and pleasant to interact with across devices."
            />

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-sm leading-8 text-white/65"
            >
              <p>
                I specialize in building modern web interfaces with ReactJS,
                TypeScript, Tailwind CSS, and Bootstrap. My focus is on creating
                responsive layouts, reusable components, and polished user
                experiences that feel professional.
              </p>

              <p className="mt-5">
                I enjoy transforming ideas and UI concepts into polished digital
                products, whether it&apos;s a landing page, dashboard, admin
                panel, or a full frontend application.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies I work with"
            description="A focused stack for building fast, responsive, and production-ready frontend applications."
          />

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          variants={staggerContainer}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few projects that show my frontend skills, attention to detail, and ability to build clean interfaces."
          />

          <motion.div
            className="mt-10 grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
              >
                <div className="relative mb-5 h-44 overflow-hidden rounded-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-cyan-400 px-4 py-2 text-sm text-black"
                    >
                      View
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white px-4 py-2 text-sm text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-white/65"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                    whileHover={{ x: 4 }}
                  >
                    Live Demo <ExternalLink size={15} />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    GitHub <FaGithub size={15} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <SectionHeading
            eyebrow="Services"
            title="What I can help you build"
            description="Frontend solutions for brands, startups, businesses, and teams that need polished digital products."
          />

          <motion.div
            className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75"
              >
                {service}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 sm:p-10"
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="Open to frontend roles, freelance projects, and collaboration opportunities."
            />

            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
            >
              {[
                {
                  title: "Email",
                  value: "alebiosutemitope79@gmail.com",
                  href: "mailto:alebiosutemitope79@gmail.com",
                },
                {
                  title: "Phone",
                  value: "07044346750",
                  href: "tel:07044346750",
                },
                {
                  title: "GitHub",
                  value: "github.com/ezekieltemitope",
                  href: "https://github.com/ezekieltemitope",
                },
                {
                  title: "LinkedIn",
                  value: "linkedin.com/in/alebiosu-temitope-ezekiel",
                  href: "https://www.linkedin.com/in/alebiosu-temitope-ezekiel-69a29826b",
                },
              ].map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-[#0c1828] p-5 text-sm text-white/75 transition hover:bg-[#102033]"
                >
                  <p className="text-white">{item.title}</p>
                  <p className="mt-2 wrap-break-words text-white/55">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/45"
      >
        <div className="mx-auto max-w-6xl lg:px-8">
          © {new Date().getFullYear()} Alebiosu Temitope Ezekiel. All rights
          reserved.
        </div>
      </motion.footer>
    </motion.div>
  );
}
