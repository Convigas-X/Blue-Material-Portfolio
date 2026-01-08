import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Instagram, MessageCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  // --- CONFIGURATION ---
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/fahdalee247@gmail.com";
  // ^^^ MAKE SURE THIS IS THE CORRECT EMAIL ADDRESS ^^^

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V50C240 0 480 0 720 25C960 50 1200 100 1440 100V100H0Z"
            className="fill-section-dark"
          />
        </svg>
      </div>

      <div className="bg-section-dark pt-32 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-section-dark-foreground">
              Let's Connect<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 text-lg text-section-dark-foreground/70 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch and let's discuss opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form Area */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {status === "success" ? (
                // Success Message Card
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-section-dark-foreground/70">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-primary hover:text-white transition-colors underline decoration-primary/30 underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                // The Form
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* FormSubmit Configuration (Hidden) */}
                  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="input-field bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 w-full p-4 rounded-xl outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="input-field bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 w-full p-4 rounded-xl outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="input-field bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 resize-none w-full p-4 rounded-xl outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full sm:w-auto group bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-section-dark-foreground mb-1">Email</h4>
                  <a
                    href="mailto:contact@tritaniumglobal.com"
                    className="text-section-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    contact@tritaniumglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-section-dark-foreground mb-1">Headquarters</h4>
                  <p className="text-section-dark-foreground/70">Austin, Texas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-section-dark-foreground mb-1">Operations Center</h4>
                  <p className="text-section-dark-foreground/70">Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="pt-6 border-t border-section-dark-foreground/10">
                <h4 className="font-semibold text-section-dark-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/fahad-ali-maqsood-3187041a7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/fahad_jutt1314/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/923445348196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-section-dark border-t border-section-dark-foreground/10 py-8">
        <div className="section-container text-center">
          <p className="text-section-dark-foreground/50 text-sm">
            © 2026 Tritanium Global. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
