import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowContact(false), 2000);
      } else {
        setError("Failed to send message. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-black px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Title */}
        <h2
          className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          Get In Touch
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-400 mb-16"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          I would love to hear from you! Feel free to reach out.
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => setShowContact(true)}
            className="p-4 text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            <MdEmail size={26} />
          </button>

          <a
            href="https://github.com/samuelsambil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://linkedin.com/in/samuel-sambil-4458b7295/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            <FaLinkedin size={26} />
          </a>

          <a
            href="https://x.com/i_am_sambil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            <FaXTwitter size={26} />
          </a>
        </div>

        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md relative">
              {/* Close */}
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-2xl text-white font-semibold mb-6">
                Send a Message
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:border-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:border-white"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:border-white"
                />

                {error && (
                  <p className="text-red-500 font-medium text-sm">{error}</p>
                )}
                {success && (
                  <p className="text-green-500 font-medium text-sm">
                    Message sent successfully!
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 text-black font-semibold rounded-xl transition ${
                    loading ? "bg-gray-500" : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
