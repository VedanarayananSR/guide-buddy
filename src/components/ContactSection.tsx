
import React, { useState } from "react";
import RevealAnimation from "./ui/RevealAnimation";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <RevealAnimation direction="up" className="text-center mb-12">
            <h2 className="text-zinc-900 mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto text-zinc-600">
              Subscribe to our newsletter to receive the latest project management insights, templates, and best practices for SMEs.
            </p>
          </RevealAnimation>

          <RevealAnimation direction="scale" delay={200}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">Thank You!</h3>
                    <p className="text-zinc-600">
                      You've been successfully subscribed to our newsletter.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your message..."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="subscribe"
                        name="subscribe"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="subscribe" className="ml-2 block text-sm text-zinc-600">
                        Subscribe to our monthly newsletter
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-transform hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
