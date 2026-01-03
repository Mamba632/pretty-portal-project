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
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@healthconnect.com',
    description: 'We\'ll respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    description: 'Mon-Sat, 9am-6pm IST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
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
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-2xl p-6 border border-border shadow-lg text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  <info.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success text-success-foreground flex items-center justify-center">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Message Sent!</h3>
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
                        className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                        className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                        className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                        className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                      className="w-full h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold mb-2 flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-8">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="font-display font-semibold">Support Hours</h3>
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
                    <span className="font-medium text-destructive">24/7 Available</span>
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
