import { motion } from "framer-motion";
import { Mic, Brain, ArrowRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Academe",
      description:
        "A web-based Learning Management System that allows users to sign up, log in, and access courses.",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      icon: Brain,
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 2,
      title: "Dharva AI",
      description:
        "An AI-powered assistant that helps users plan and organize their day efficiently with interactive voice commands.",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      icon: Mic,
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 bg-black"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2
          className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          My Projects
        </h2>
        <p
          className="text-lg text-gray-400 max-w-3xl mx-auto font-light"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          Selected projects where I combine engineering, design, and AI to solve
          real problems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative bg-gray-900 p-8 rounded-3xl md:p-10 border border-gray-800 hover:border-gray-600 transition-all duration-500 group overflow-hidden"
            >
              {/* Shine hover effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Status */}
              <div className="mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${project.statusColor}`}
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight"
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-400  text-lg leading-relaxed mb-6"
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                {project.description}
              </p>

              {/* Learn more 
              <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div> */}

            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Projects;
