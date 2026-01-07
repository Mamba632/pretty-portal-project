import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@healthconnect.com',
    description: 'We\'ll respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    description: 'Mon-Sat, 9am-6pm IST',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Healthcare Innovation Hub',
    description: 'New Delhi, India',
  },
];

const faqs = [
  {
    question: 'Is HealthConnect free to use?',
    answer: 'Yes, HealthConnect is completely free for users. We believe healthcare information should be accessible to everyone.',
  },
  {
    question: 'How accurate is the AI health assistant?',
    answer: 'Our AI provides general guidance based on symptoms. For accurate diagnosis, always consult a healthcare professional.',
  },
  {
    question: 'Can I become a volunteer doctor?',
    answer: 'Yes! We welcome certified medical professionals. Fill out the contact form and mention your interest in volunteering.',
  },
  {
    question: 'Is my health information secure?',
    answer: 'Absolutely. We use industry-standard encryption and never share your personal health information with third parties.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="mayo-hero py-20">
        <div className="section-container">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic">
            Giving to HealthConnect
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            Have questions, feedback, or want to support our mission? We're here to help. Reach out to us anytime.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact-form" className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
              <span className="text-lg">Contact us</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title} 
                className="p-6 bg-card rounded-lg border border-border text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-secondary/60 text-secondary flex items-center justify-center">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section id="contact-form" className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="font-serif text-2xl mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 text-success flex items-center justify-center">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      >
                        <option value="">Select your country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    Send message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-serif text-2xl mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg p-6 border border-border animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-medium mb-2 flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-8">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-8 p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-secondary" />
                  <h3 className="font-serif text-lg">Support hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border mt-2">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="font-medium text-success">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
