import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { 
  Search, 
  ArrowRight,
  Play,
  ChevronRight
} from 'lucide-react';
import heroImage from '@/assets/hero-healthcare.jpg';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

const featuredArticles = [
  {
    category: 'Featured',
    title: 'Understanding heart health: Prevention and early detection',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop',
    link: '/self-care',
  },
  {
    category: 'Wellness',
    title: 'Mental health resources and self-care strategies',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    link: '/self-care',
  },
  {
    category: 'Research',
    title: 'Latest advances in personalized medicine',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
    link: '/about',
  },
];

const quickLinks = [
  { label: 'Patient Online Services', link: '/consult' },
  { label: 'Appointments at HealthConnect', link: '/consult' },
  { label: 'Find a Doctor', link: '/find-healthcare' },
  { label: 'Health Information', link: '/self-care' },
  { label: 'Clinical Trials', link: '/about' },
  { label: 'International Services', link: '/contact' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <Layout>
      {/* Hero Section - Mayo Clinic Style */}
      <section className="mayo-hero min-h-[70vh] flex flex-col justify-center relative">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Play button overlay */}
        <button className="absolute top-8 right-8 z-10 p-4 rounded-full border-2 border-white/40 text-white/80 hover:border-white hover:text-white transition-all group hidden lg:flex items-center justify-center">
          <Play className="h-6 w-6 ml-0.5" />
        </button>

        <div className="relative section-container py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-slide-up italic">
              Transforming your care
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all group"
              >
                <span className="text-lg">Learn how we drive innovation</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link to="/consult">
                  Request appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Alphabet Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Alphabet Browser */}
            <div>
              <h2 className="text-sm font-semibold text-foreground mb-4">
                Find diseases & conditions by first letter
              </h2>
              <div className="flex flex-wrap gap-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`letter-circle ${selectedLetter === letter ? 'active' : ''}`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div>
              <h2 className="text-sm font-semibold text-foreground mb-4">
                Search diseases & conditions
              </h2>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </form>
              <p className="mt-3 text-sm text-muted-foreground">
                When results are available, use up and down arrow keys to navigate. Press space key to fill the input with the suggestion or enter key to search with the suggestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Featured health topics
            </h2>
            <Link to="/self-care" className="link-arrow">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.title}
                to={article.link}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="mt-2 text-lg font-serif text-foreground group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            Quick access
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((item, index) => (
              <Link
                key={item.label}
                to={item.link}
                className="group flex items-center justify-between p-5 bg-card rounded-lg border border-border hover:border-secondary transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-foreground group-hover:text-secondary transition-colors">
                  {item.label}
                </span>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 italic">
              Experience world-class care
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Connect with our network of healthcare professionals and access comprehensive medical resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/consult">
                  Request an appointment
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link to="/find-healthcare">
                  Find a location
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
