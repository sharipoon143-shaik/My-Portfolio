import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ContactProps {
  isModal?: boolean;
}

export default function Contact({ isModal = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send directly to shaikarifoon2609@gmail.com using FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/shaikarifoon2609@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Unable to send message via form service.');
      }
    } catch {
      // If network is restricted or offline, open mailto directly
      setError('Service unavailable. You can click below to send directly through your email app:');
    } finally {
      setLoading(false);
    }
  };

  const directMailtoUrl = `mailto:shaikarifoon2609@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className={`w-full relative z-10 ${isModal ? 'py-2 px-2' : 'py-20 px-6'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info (Phone number removed) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50/80 border border-slate-200 p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:shaikarifoon2609@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 group transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                      <p className="font-medium truncate text-sm sm:text-base text-slate-800 group-hover:text-blue-600">shaikarifoon2609@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                      <p className="font-medium text-sm sm:text-base text-slate-800">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200 flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-700 shadow-sm"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-700 shadow-sm"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Subject removed, live mail delivery configured) */}
          <div className="lg:col-span-3">
            <form className="bg-slate-50/80 border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center gap-3">
                  <CheckCircle2 size={54} className="text-emerald-500" />
                  <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                  <p className="text-slate-600 text-sm max-w-sm">
                    Thank you! Your message has been sent to <strong>shaikarifoon2609@gmail.com</strong>. I'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm shadow-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 mb-6">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none text-sm shadow-sm"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="mb-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-medium">
                        <AlertCircle size={15} className="text-amber-600" />
                        <span>{error}</span>
                      </div>
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors w-fit"
                      >
                        Open in Email App &amp; Send
                      </a>
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
