import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Video, 
  Users, 
  AlertTriangle,
  Send,
  Bot,
  User,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Stethoscope,
  HeartPulse
} from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    experience: '15 years',
    rating: 4.9,
    reviews: 234,
    available: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Pediatrician',
    experience: '12 years',
    rating: 4.8,
    reviews: 189,
    available: true,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Dr. Anita Patel',
    specialty: 'Dermatologist',
    experience: '10 years',
    rating: 4.7,
    reviews: 156,
    available: false,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
  },
];

const chatMessages = [
  { role: 'bot', message: 'Hello! I\'m your AI health assistant. How can I help you today? You can describe your symptoms and I\'ll provide initial guidance.' },
];

export default function Consult() {
  const [messages, setMessages] = useState(chatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { role: 'user', message: inputMessage };
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        role: 'bot',
        message: 'Based on your symptoms, I recommend staying hydrated and getting plenty of rest. If symptoms persist for more than 3 days, please consult with a doctor. Would you like me to connect you with a volunteer or doctor for further assistance?'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Consult a Doctor or Volunteer
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get healthcare guidance through AI, connect with medical volunteers, or schedule a video consultation with a doctor.
          </p>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="feature-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">AI Health Assistant</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant guidance on symptoms with our AI-powered chatbot
              </p>
              <Button variant="soft" className="w-full" onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Chat
              </Button>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-success text-success-foreground flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Volunteer Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with trained medical volunteers for personalized help
              </p>
              <Button variant="soft" className="w-full bg-success/10 text-success hover:bg-success/20">
                Chat with Volunteer
              </Button>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center">
                <Video className="h-8 w-8" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Video Consultation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule a secure video call with certified doctors
              </p>
              <Button variant="hero" className="w-full" onClick={() => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai-chat" className="py-12 bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="p-6 border-b border-border bg-primary text-primary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">AI Health Assistant</h3>
                    <p className="text-sm opacity-80">Powered by Gemini AI</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
                    }`}>
                      {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-secondary text-secondary-foreground rounded-tr-none' 
                        : 'bg-muted rounded-tl-none'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-muted p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Describe your symptoms..."
                    className="flex-1 h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Button type="submit" size="lg">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Available Doctors */}
      <section id="doctors" className="py-12 bg-background">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Available Doctors</h2>
            <p className="text-muted-foreground">Book a video consultation with our certified healthcare professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h3 className="font-display font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={doctor.available ? 'text-success' : 'text-muted-foreground'}>
                      {doctor.available ? 'Available Now' : 'Next available: Tomorrow'}
                    </span>
                  </div>
                </div>

                <Button 
                  variant={doctor.available ? 'default' : 'outline'} 
                  className="w-full gap-2"
                  disabled={!doctor.available}
                >
                  <Video className="h-4 w-4" />
                  {doctor.available ? 'Start Consultation' : 'Schedule'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-destructive-light">
        <div className="section-container">
          <div className="bg-card rounded-3xl p-8 border-2 border-destructive shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shrink-0 animate-pulse">
                <AlertTriangle className="h-10 w-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl font-bold text-destructive mb-2">
                  Emergency Assistance
                </h2>
                <p className="text-muted-foreground mb-4">
                  If your symptoms are severe or life-threatening, please seek immediate medical attention. We can help you locate the nearest emergency facility.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button variant="emergency" size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call Emergency: 108
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" asChild>
                    <Link to="/find-healthcare">
                      <MapPin className="h-5 w-5" />
                      Find Nearest Hospital
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
