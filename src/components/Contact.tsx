import { MapPin, Phone, Clock, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmitMsg = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formMsg) return;

    setSuccess(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMsg('');
      setSuccess(false);
    }, 2800);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-on-scroll">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-656 text-red-650 dark:text-amber-500">
            Come Visit Us
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Our Highway Spot & Contact Inquiries
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-650 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Double Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column Left: Contact Details Cards & Embed Maps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Location details */}
            <div className="rounded-2xl border border-zinc-150 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/40 p-6 flex gap-4">
              <div className="h-11 w-11 flex shrink-0 items-center justify-center rounded-xl bg-red-650/10 text-red-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                  Our Address
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                  G6VF+6CR, Mumbai Highway, Muthangi, Hyderabad, Telangana 502300
                </p>
                <a
                  href="https://maps.google.com/?q=G6VF%2B6CR%20Muthangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-mono text-[10px] font-bold text-red-500 hover:underline hover:text-red-655"
                >
                  View on Google Maps Direction
                </a>
              </div>
            </div>

            {/* Phone contact details */}
            <div className="rounded-2xl border border-zinc-150 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/40 p-6 flex gap-4">
              <div className="h-11 w-11 flex shrink-0 items-center justify-center rounded-xl bg-amber-505/10 text-amber-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                  Call Booking Desk
                </h4>
                <p className="font-sans text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 mt-1">
                  +91 91772 35000
                </p>
                <p className="font-mono text-[10px] text-zinc-405 dark:text-zinc-500 mt-0.5">
                  Direct Line for Drive-Through and reservations
                </p>
              </div>
            </div>

            {/* Operating schedules details */}
            <div className="rounded-2xl border border-zinc-150 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/40 p-6 flex gap-4">
              <div className="h-11 w-11 flex shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                  Operating Hours
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-650 dark:text-zinc-300 mt-1">
                  Open Daily: Till 11:00 PM IST
                </p>
                <p className="font-mono text-[10px] text-zinc-405 dark:text-zinc-500 mt-0.5">
                  Hot Biryani Handis ready from 12:00 PM noon onwards
                </p>
              </div>
            </div>
          </div>

          {/* Column Right: Interactive Google Map + Messaging */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Embed Google Map framed nicely */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-850 shadow-md aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 relative">
              <iframe
                title="Spicy Family Restaurant Muthangi Location"
                src="https://maps.google.com/maps?q=Muthangi%20Mumbai%20Highway%25Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Message/Feedback Form */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-850">
              <div className="flex items-center space-x-2.5 mb-4">
                <Mail className="h-5 w-5 text-red-500" />
                <h4 className="font-sans text-base font-bold text-zinc-900 dark:text-white">
                  Send Us a Direct Message
                </h4>
              </div>

              {success ? (
                <div className="flex flex-col items-center justify-center py-8 text-center bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-850 animate-scale-in">
                  <CheckCircle className="h-10 w-10 text-emerald-500 mb-2.5" />
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    Message Dispatched Successfully!
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    The management crew has been notified of your concern.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitMsg} className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="e.g. Anand Rao"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs outline-none focus:border-red-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        placeholder="anand@gmail.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs outline-none focus:border-red-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase">
                      Message details
                    </label>
                    <textarea
                      id="contact-msg-input"
                      required
                      rows={3}
                      placeholder="Write your catering query, bulk event requests, or feedback..."
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs outline-none focus:border-red-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                    />
                  </div>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="flex items-center justify-center space-x-2 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 py-3 font-bold text-white transition-all cursor-pointer shadow"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
