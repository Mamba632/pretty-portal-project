import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Search, 
  Star, 
  Clock, 
  Phone, 
  Navigation,
  Hospital,
  Pill,
  Stethoscope,
  X,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const facilities = [
  {
    id: 1,
    name: 'City General Hospital',
    type: 'Hospital',
    address: '123 Healthcare Ave, New Delhi',
    rating: 4.5,
    reviews: 234,
    distance: '1.2 km',
    isOpen: true,
    phone: '+91 98765 43210',
    services: ['Emergency', 'ICU', 'Surgery', 'Pediatrics'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Apollo Pharmacy',
    type: 'Pharmacy',
    address: '45 Medical Lane, New Delhi',
    rating: 4.2,
    reviews: 89,
    distance: '0.5 km',
    isOpen: true,
    phone: '+91 98765 43211',
    services: ['24/7 Pharmacy', 'Home Delivery', 'Health Products'],
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'HealthFirst Clinic',
    type: 'Clinic',
    address: '78 Wellness Road, New Delhi',
    rating: 4.7,
    reviews: 156,
    distance: '2.1 km',
    isOpen: false,
    phone: '+91 98765 43212',
    services: ['General Checkup', 'Vaccination', 'Lab Tests'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Fortis Hospital',
    type: 'Hospital',
    address: '200 Medical Complex, New Delhi',
    rating: 4.8,
    reviews: 412,
    distance: '3.5 km',
    isOpen: true,
    phone: '+91 98765 43213',
    services: ['Multi-specialty', 'Emergency', 'Cardiology', 'Neurology'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop',
  },
];

const filterTypes = ['All', 'Hospital', 'Clinic', 'Pharmacy'];

export default function FindHealthcare() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);

  const filteredFacilities = facilities.filter((facility) => {
    const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || facility.type === selectedType;
    const matchesOpen = !showOpenOnly || facility.isOpen;
    const matchesRating = facility.rating >= minRating;
    return matchesSearch && matchesType && matchesOpen && matchesRating;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Hospital': return Hospital;
      case 'Pharmacy': return Pill;
      case 'Clinic': return Stethoscope;
      default: return Hospital;
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="mayo-hero py-20">
        <div className="section-container">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic">
            Find care near you
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            Locate hospitals, clinics, and pharmacies in your area with real-time availability and patient ratings.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent gap-2"
            >
              <Navigation className="h-4 w-4" />
              Use my location
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location..."
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filterTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedType === type
                      ? 'bg-secondary text-secondary-foreground border-secondary'
                      : 'bg-background text-muted-foreground border-border hover:border-secondary/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={() => setShowOpenOnly(!showOpenOnly)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-2 ${
                showOpenOnly
                  ? 'bg-success text-success-foreground border-success'
                  : 'bg-background text-muted-foreground border-border hover:border-success/50'
              }`}
            >
              <Clock className="h-4 w-4" />
              Open Now
            </button>

            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="px-4 py-2 rounded-full text-sm font-medium bg-background text-foreground border border-border focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
            >
              <option value={0}>Any Rating</option>
              <option value={3}>3+ Stars</option>
              <option value={4}>4+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
            </select>

            {(selectedType !== 'All' || showOpenOnly || minRating > 0) && (
              <button
                onClick={() => {
                  setSelectedType('All');
                  setShowOpenOnly(false);
                  setMinRating(0);
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-destructive hover:bg-destructive/10 transition-all flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredFacilities.length}</span> facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredFacilities.map((facility) => {
              const TypeIcon = getTypeIcon(facility.type);
              return (
                <div
                  key={facility.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:border-secondary/30 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        facility.isOpen 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {facility.isOpen ? 'Open Now' : 'Closed'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/90 backdrop-blur-sm">
                        {facility.distance}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <TypeIcon className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{facility.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="font-medium">{facility.rating}</span>
                        <span className="text-sm text-muted-foreground">({facility.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl mb-2 group-hover:text-secondary transition-colors">
                      {facility.name}
                    </h3>
                    
                    <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {facility.address}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {facility.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                        >
                          {service}
                        </span>
                      ))}
                      {facility.services.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                          +{facility.services.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="flex-1 gap-2">
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Hospital className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-2">No facilities found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-card rounded-lg border border-border">
            <div>
              <h2 className="font-serif text-2xl mb-2">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground">Contact us and we'll help you find the right care.</p>
            </div>
            <Button className="gap-2">
              Contact us <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
