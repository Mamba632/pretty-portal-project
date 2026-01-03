import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Phone, 
  Navigation,
  Hospital,
  Pill,
  Stethoscope,
  X
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
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Healthcare Near You
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Locate hospitals, clinics, and pharmacies in your area with real-time availability and ratings.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Location Button */}
            <Button variant="outline" className="gap-2">
              <Navigation className="h-4 w-4" />
              Use My Location
            </Button>

            {/* Filter Toggle */}
            <Button variant="soft" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-4">
            {/* Type Filters */}
            <div className="flex gap-2">
              {filterTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Open Now Toggle */}
            <button
              onClick={() => setShowOpenOnly(!showOpenOnly)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                showOpenOnly
                  ? 'bg-success text-success-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Clock className="h-4 w-4" />
              Open Now
            </button>

            {/* Rating Filter */}
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground border-0 focus:ring-2 focus:ring-primary"
            >
              <option value={0}>Any Rating</option>
              <option value={3}>3+ Stars</option>
              <option value={4}>4+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
            </select>

            {/* Clear Filters */}
            {(selectedType !== 'All' || showOpenOnly || minRating > 0) && (
              <button
                onClick={() => {
                  setSelectedType('All');
                  setShowOpenOnly(false);
                  setMinRating(0);
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-destructive hover:bg-destructive-light transition-all flex items-center gap-1"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="flex justify-between items-center mb-6">
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
                  className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        facility.isOpen 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-destructive text-destructive-foreground'
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
                        <div className="p-2 rounded-lg bg-primary/10">
                          <TypeIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{facility.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="font-semibold">{facility.rating}</span>
                        <span className="text-sm text-muted-foreground">({facility.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-2">{facility.name}</h3>
                    
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
              <h3 className="font-display font-semibold text-lg mb-2">No facilities found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-muted">
        <div className="section-container">
          <div className="bg-card rounded-2xl border border-border p-8 text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg mb-2">Interactive Map</h3>
            <p className="text-muted-foreground mb-4">
              View all healthcare facilities on an interactive map
            </p>
            <Button variant="default">
              Open Map View
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
