import { motion } from "framer-motion";

function Hero() {
  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900 pt-20"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-12">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Samuel Sambil"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-white/80 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 mx-auto"
          />
        </motion.div>

        {/* Logo / Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-gray-400 mb-2">
            <span className="text-accent-500">Samuel</span>
            <span className="text-white"> Sambil</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
        </motion.div>

        {/* Main Headline / Tagline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-semibold mb-8 leading-tight"
        >
          <span className="gradient-blackish-white">Learning</span>
          <span className="gradient-blackish-white">. Building . Scaling</span>
        </motion.h1>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mb-20">
          <button
            onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
            }}
            className="px-8 md:px-12 py-4 border-2 border-white text-white font-semibold rounded-2xl text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-600"style={{ fontFamily: "Calibri, sans-serif" }}
         >
            Get In Touch
        </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;