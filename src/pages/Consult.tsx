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
  ChevronRight,
  Stethoscope
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

const consultOptions = [
  {
    icon: Bot,
    title: 'AI Health Assistant',
    description: 'Get instant guidance on symptoms with our AI-powered chatbot',
    action: 'Start chat',
    href: '#ai-chat',
  },
  {
    icon: Users,
    title: 'Volunteer Support',
    description: 'Connect with trained medical volunteers for personalized help',
    action: 'Connect now',
    href: '#',
  },
  {
    icon: Video,
    title: 'Video Consultation',
    description: 'Schedule a secure video call with certified doctors',
    action: 'Book appointment',
    href: '#doctors',
  },
];

export default function Consult() {
  const [messages, setMessages] = useState(chatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', message: inputMessage };
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        role: 'bot',
        message: 'Based on your symptoms, I recommend staying hydrated and getting plenty of rest. If symptoms persist for more than 3 days, please consult with a doctor. Would you like me to connect you with a healthcare professional?'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="mayo-hero py-20">
        <div className="section-container">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic">
            For Medical Professionals
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            Get healthcare guidance through AI, connect with medical volunteers, or schedule a video consultation with a doctor.
          </p>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Request appointment
          </Button>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            How can we help you?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {consultOptions.map((option, index) => (
              <a
                key={option.title}
                href={option.href}
                className="group p-6 bg-card rounded-lg border border-border hover:border-secondary/30 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-secondary/60 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                  <option.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <span className="link-arrow text-sm">
                  {option.action} <ChevronRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai-chat" className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              AI Health Assistant
            </h2>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Health Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-success" />
                    Online
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
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
                    className="flex-1 h-12 px-4 rounded-lg bg-muted border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
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
      <section id="doctors" className="py-16 bg-background">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Available doctors</h2>
            <p className="text-muted-foreground">Book a video consultation with our certified healthcare professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className="bg-card rounded-lg border border-border p-6 hover:border-secondary/30 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary/30"
                  />
                  <div>
                    <h3 className="font-serif text-lg">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Stethoscope className="h-4 w-4 text-secondary" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={doctor.available ? 'text-success' : 'text-muted-foreground'}>
                      {doctor.available ? 'Available now' : 'Next available: Tomorrow'}
                    </span>
                  </div>
                </div>

                <Button 
                  variant={doctor.available ? 'default' : 'outline'} 
                  className="w-full gap-2"
                  disabled={!doctor.available}
                >
                  <Video className="h-4 w-4" />
                  {doctor.available ? 'Start consultation' : 'Schedule'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-destructive/5">
        <div className="section-container">
          <div className="bg-card rounded-lg p-8 border border-destructive/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl text-destructive mb-2">
                  Emergency assistance
                </h2>
                <p className="text-muted-foreground mb-4">
                  If your symptoms are severe or life-threatening, please seek immediate medical attention.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button variant="destructive" size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call Emergency: 108
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground" asChild>
                    <Link to="/find-healthcare">
                      <MapPin className="h-5 w-5" />
                      Find nearest hospital
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
