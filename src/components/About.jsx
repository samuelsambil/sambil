function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center bg-black px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-16 tracking-tight"style={{ fontFamily: "Calibri, sans-serif" }}>
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-8">
          {/* Intro */}
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed"
           style={{ fontFamily: "Calibri, sans-serif" }}>
            👋 Hello! I am Samuel Sambil, an aspiring builder working across both software and hardware, 
            driven by a desire to build practical, real-world solutions using technology.
          </p>

          {/* Body */}
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed"
          style={{ fontFamily: "Calibri, sans-serif" }}>
            Every project I work on is an opportunity to solve real problems and learn something new. 
            I'm especially interested in AI, Robotics, and Sustainability. I'm always open to learning, 
            growing, and collaborating with other builders.
          </p>

          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed"
          style={{ fontFamily: "Calibri, sans-serif" }}>
            When I'm not coding, you'll find me reading tech blogs like McKinsey and TechCrunch, 
            or learning how to cook international cuisines.
          </p>

          {/* Fun Fact */}
          <div className="mt-12 bg-gray-900 border-l-4 border-white p-6 md:p-8"
          style={{ fontFamily: "Calibri, sans-serif" }}>
            <p className="text-lg md:text-xl text-white"
            style={{ fontFamily: "Calibri, sans-serif" }}>
              💡 <strong>Fun fact:</strong> I can recite the first 20 digits of pi ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;