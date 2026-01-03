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
  Star,
  ExternalLink
} from 'lucide-react';

const categories = [
  { id: 'fever', label: 'Fever', icon: ThermometerSun, color: 'bg-destructive' },
  { id: 'cold', label: 'Cold & Flu', icon: Droplets, color: 'bg-accent' },
  { id: 'headache', label: 'Headache', icon: Brain, color: 'bg-secondary' },
  { id: 'skin', label: 'Skin Problems', icon: Sparkles, color: 'bg-success' },
  { id: 'heart', label: 'Heart Health', icon: Heart, color: 'bg-primary' },
  { id: 'wellness', label: 'General Wellness', icon: Leaf, color: 'bg-accent' },
];

const articles = [
  {
    id: 1,
    title: 'How to Boost Your Immunity Naturally',
    category: 'Wellness',
    excerpt: 'Discover natural ways to strengthen your immune system with simple lifestyle changes and home remedies.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Managing Fever at Home: A Complete Guide',
    category: 'Fever',
    excerpt: 'Learn when to treat fever at home and when to seek medical attention, plus effective home remedies.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop',
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Natural Remedies for Common Cold',
    category: 'Cold & Flu',
    excerpt: 'Tried and tested home remedies to relieve cold symptoms and speed up recovery.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Headache Relief Without Medication',
    category: 'Headache',
    excerpt: 'Natural techniques and lifestyle changes to prevent and relieve headaches.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Skin Care Tips for All Seasons',
    category: 'Skin Problems',
    excerpt: 'Protect and nourish your skin with these seasonal skincare tips and natural remedies.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop',
    rating: 4.9,
  },
  {
    id: 6,
    title: 'Stress Management Techniques',
    category: 'Wellness',
    excerpt: 'Practical strategies to manage stress and improve your mental well-being.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=250&fit=crop',
    rating: 4.8,
  },
];

const videos = [
  {
    id: 1,
    title: 'Yoga for Beginners',
    duration: '15:00',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop',
  },
  {
    id: 2,
    title: 'Home Remedies for Cold',
    duration: '8:30',
    thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=225&fit=crop',
  },
  {
    id: 3,
    title: 'Meditation Basics',
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
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Self-Care Resources
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Access trusted health tips, home remedies, and expert articles to take care of yourself and your loved ones.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search health topics, remedies..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`p-4 rounded-2xl border transition-all text-center group ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${
                  selectedCategory === category.id ? 'bg-primary-foreground/20' : category.color
                } flex items-center justify-center text-primary-foreground transition-all group-hover:scale-110`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-sm">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 bg-muted">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display text-2xl font-bold">Health Videos</h2>
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-foreground/80 text-primary-foreground text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-display text-2xl font-bold">Expert Articles</h2>
              <p className="text-muted-foreground">
                {selectedCategory 
                  ? `Showing articles for "${categories.find(c => c.id === selectedCategory)?.label}"`
                  : 'All health topics'}
              </p>
            </div>
            {selectedCategory && (
              <Button variant="ghost" onClick={() => setSelectedCategory(null)}>
                Clear Filter
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      {article.rating}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="gap-2 -ml-2">
                    Read Article <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-12 soft-gradient">
        <div className="section-container">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-glow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  AI-Powered
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Get Personalized Recommendations
                </h2>
                <p className="text-muted-foreground mb-6">
                  Based on your searches and health interests, our AI can suggest relevant articles, remedies, and resources tailored just for you.
                </p>
                <Button variant="hero" size="lg">
                  Get Recommendations
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Leaf className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">Immunity Boosting Tips</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                        <Heart className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-sm">Heart Health Guide</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-sm">Stress Management</span>
                    </div>
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
