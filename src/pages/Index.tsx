import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { 
  Search, 
  MapPin, 
  Heart, 
  Video, 
  MessageCircle,
  ArrowRight,
  Hospital,
  Stethoscope,
  BookOpen,
  Phone,
  Users,
  Shield,
  Clock,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-healthcare.jpg';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const features = [
  {
    icon: Hospital,
    title: 'Find Healthcare',
    description: 'Locate nearby hospitals, clinics, and pharmacies with real-time availability.',
    link: '/find-healthcare',
    color: 'bg-primary',
  },
  {
    icon: BookOpen,
    title: 'Self-Care Resources',
    description: 'Access trusted home remedies, health tips, and expert articles.',
    link: '/self-care',
    color: 'bg-success',
  },
  {
    icon: MessageCircle,
    title: 'AI Health Assistant',
    description: 'Get instant guidance on symptoms from our AI-powered chatbot.',
    link: '/consult',
    color: 'bg-accent',
  },
  {
    icon: Video,
    title: 'Video Consultation',
    description: 'Connect with doctors and volunteers via secure video calls.',
    link: '/consult',
    color: 'bg-secondary',
  },
];

const stats = [
  { value: '50K+', label: 'Users Helped' },
  { value: '1000+', label: 'Healthcare Facilities' },
  { value: '500+', label: 'Volunteer Doctors' },
  { value: '24/7', label: 'Support Available' },
];

const healthTips = [
  {
    category: 'Fever',
    tips: ['Stay hydrated', 'Rest well', 'Monitor temperature'],
    icon: '🌡️',
  },
  {
    category: 'Cold & Flu',
    tips: ['Drink warm fluids', 'Steam inhalation', 'Get plenty of rest'],
    icon: '🤧',
  },
  {
    category: 'Headache',
    tips: ['Stay in a dark room', 'Apply cold compress', 'Stay hydrated'],
    icon: '🤕',
  },
  {
    category: 'Skin Care',
    tips: ['Keep skin moisturized', 'Protect from sun', 'Stay hydrated'],
    icon: '✨',
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
    console.log('Searching for:', searchQuery);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative section-container py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-sm font-medium mb-6 animate-fade-in">
              Your Wellness, Our Mission
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Healthcare Made <span className="text-secondary-light">Accessible</span> for Everyone
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Find nearby hospitals, access self-care resources, and connect with doctors and volunteers — all in one place.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-primary-foreground/10 backdrop-blur-md rounded-2xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search symptoms, diseases, or health topics..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit">
                  Search
                </Button>
              </div>
            </form>

            {/* Alphabet Search */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm opacity-70 mb-3">Or browse by letter:</p>
              <div className="flex flex-wrap justify-center gap-1">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedLetter === letter
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary-foreground/20 hover:bg-primary-foreground/30'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-1 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for <span className="text-gradient">Better Health</span>
            </h2>
            <p className="text-muted-foreground">
              Access comprehensive healthcare services designed to make your wellness journey easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="feature-card group"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-20 soft-gradient">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Quick <span className="text-primary">Health Tips</span>
            </h2>
            <p className="text-muted-foreground">
              Common ailments and simple remedies you can try at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip, index) => (
              <div
                key={tip.category}
                className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-3">{tip.category}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/self-care" 
                  className="inline-flex items-center text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">HealthConnect</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're committed to bridging the healthcare gap and ensuring everyone has access to quality medical support, regardless of their location or circumstances.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Trusted Information', desc: 'Verified medical content from healthcare professionals' },
                  { icon: Clock, title: '24/7 Availability', desc: 'Access healthcare resources anytime, anywhere' },
                  { icon: Users, title: 'Volunteer Network', desc: 'Connected with dedicated medical volunteers' },
                  { icon: Star, title: 'Easy to Use', desc: 'Simple interface designed for everyone' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="w-full h-full rounded-2xl bg-card shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Heart className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Need Help Now?</h3>
                    <p className="text-muted-foreground mb-6">Connect with a healthcare professional instantly</p>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/consult">
                        <Stethoscope className="h-5 w-5 mr-2" />
                        Talk to a Doctor
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-success text-success-foreground shadow-lg animate-float">
                <Hospital className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-secondary text-secondary-foreground shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Video className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of users who trust HealthConnect for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/find-healthcare">
                  <MapPin className="h-5 w-5 mr-2" />
                  Find Healthcare Near You
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/consult">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat with AI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
