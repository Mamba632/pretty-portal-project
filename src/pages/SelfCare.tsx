import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  BookOpen, 
  Play, 
  ArrowRight,
  ThermometerSun,
  Droplets,
  Brain,
  Sparkles,
  Heart,
  Leaf,
  Clock,
  ChevronRight
} from 'lucide-react';

const categories = [
  { id: 'fever', label: 'Fever', icon: ThermometerSun },
  { id: 'cold', label: 'Cold & Flu', icon: Droplets },
  { id: 'headache', label: 'Headache', icon: Brain },
  { id: 'skin', label: 'Skin Problems', icon: Sparkles },
  { id: 'heart', label: 'Heart Health', icon: Heart },
  { id: 'wellness', label: 'General Wellness', icon: Leaf },
];

const articles = [
  {
    id: 1,
    title: 'How to boost your immunity naturally',
    category: 'Wellness',
    excerpt: 'Discover natural ways to strengthen your immune system with simple lifestyle changes and home remedies.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Managing fever at home: A complete guide',
    category: 'Fever',
    excerpt: 'Learn when to treat fever at home and when to seek medical attention, plus effective home remedies.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Natural remedies for common cold',
    category: 'Cold & Flu',
    excerpt: 'Tried and tested home remedies to relieve cold symptoms and speed up recovery.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: 'Headache relief without medication',
    category: 'Headache',
    excerpt: 'Natural techniques and lifestyle changes to prevent and relieve headaches.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'Skin care tips for all seasons',
    category: 'Skin Problems',
    excerpt: 'Protect and nourish your skin with these seasonal skincare tips and natural remedies.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'Stress management techniques',
    category: 'Wellness',
    excerpt: 'Practical strategies to manage stress and improve your mental well-being.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=250&fit=crop',
  },
];

const videos = [
  {
    id: 1,
    title: 'Yoga for beginners',
    duration: '15:00',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop',
  },
  {
    id: 2,
    title: 'Home remedies for cold',
    duration: '8:30',
    thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=225&fit=crop',
  },
  {
    id: 3,
    title: 'Meditation basics',
    duration: '12:00',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop',
  },
];

export default function SelfCare() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="mayo-hero py-20">
        <div className="section-container">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic">
            Health Library
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            Access trusted health information, home remedies, and expert articles to support your wellness journey.
          </p>
          
          {/* Search */}
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search health topics..."
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="section-container">
          <h2 className="text-sm font-semibold text-foreground mb-4">Browse by category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`letter-circle w-auto px-4 gap-2 ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Health videos
            </h2>
            <button className="link-arrow">
              View all <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-secondary/30 transition-all group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center">
                      <Play className="h-6 w-6 ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-foreground/80 text-white text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-secondary transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">Expert articles</h2>
              <p className="text-muted-foreground mt-1">
                {selectedCategory 
                  ? `Showing articles for "${categories.find(c => c.id === selectedCategory)?.label}"`
                  : 'All health topics'}
              </p>
            </div>
            {selectedCategory && (
              <Button variant="ghost" onClick={() => setSelectedCategory(null)}>
                Clear filter
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <article
                key={article.id}
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-foreground group-hover:text-secondary transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 italic">
            Need personalized health advice?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with our healthcare professionals for guidance tailored to your needs.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Request an appointment
          </Button>
        </div>
      </section>
    </Layout>
  );
}
