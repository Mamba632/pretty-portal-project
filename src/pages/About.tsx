import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Users, 
  Globe,
  ArrowRight,
  Lightbulb,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react';

const stats = [
  { value: '50,000+', label: 'Users Helped' },
  { value: '1,000+', label: 'Healthcare Partners' },
  { value: '500+', label: 'Volunteer Doctors' },
  { value: '100+', label: 'Cities Covered' },
];

const problems = [
  'Limited medical infrastructure in rural areas',
  'Shortage of doctors and medical staff',
  'Cultural taboos and lack of awareness',
  'High cost of healthcare services',
  'Language barriers in medical communication',
];

const solutions = [
  {
    title: 'Digital Healthcare Access',
    description: 'Connecting underserved communities with healthcare facilities through our platform',
    icon: Globe,
  },
  {
    title: 'AI-Powered Assistance',
    description: 'Providing first-level healthcare guidance through intelligent chatbots',
    icon: Lightbulb,
  },
  {
    title: 'Volunteer Network',
    description: 'Building a community of dedicated medical volunteers for personalized support',
    icon: Users,
  },
  {
    title: 'Telemedicine Services',
    description: 'Enabling video consultations with certified doctors from anywhere',
    icon: Zap,
  },
];

const values = [
  {
    title: 'Accessibility',
    description: 'Healthcare should be available to everyone, regardless of location or economic status.',
    icon: Globe,
  },
  {
    title: 'Trust',
    description: 'We provide verified, accurate medical information from healthcare professionals.',
    icon: Shield,
  },
  {
    title: 'Compassion',
    description: 'We treat every user with empathy and understanding in their health journey.',
    icon: Heart,
  },
  {
    title: 'Innovation',
    description: 'We leverage technology to solve healthcare challenges in new and effective ways.',
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mayo-hero py-24">
        <div className="section-container">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic max-w-4xl">
            Making healthcare accessible for everyone
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
            HealthConnect is designed to bridge the healthcare gap. Whether you're looking for nearby hospitals, reliable home remedies, or expert advice — we're here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/consult" className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
              <span className="text-lg">Learn how we work</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-serif text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Our Mission</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">
                Bridging the healthcare gap
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Millions of people in rural areas and urban slums lack access to basic healthcare due to limited infrastructure, shortage of medical professionals, and cultural barriers. 
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                HealthConnect aims to bridge this gap by providing digital access to healthcare resources, connecting people with medical volunteers and doctors, and empowering communities with self-care knowledge.
              </p>
              <Button asChild>
                <Link to="/consult" className="gap-2">
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop" 
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              The problem we're solving
            </h2>
            <p className="text-muted-foreground">
              Millions lack access to basic healthcare due to systemic challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full border-2 border-secondary text-secondary flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Our Solution</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">
              How we're making a difference
            </h2>
            <p className="text-muted-foreground">
              Technology-driven solutions to bridge the healthcare accessibility gap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title} 
                className="bg-card rounded-lg p-6 border border-border hover:border-secondary/30 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-secondary/60 text-secondary flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Our core values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-secondary/60 text-secondary flex items-center justify-center">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 italic">
            Join us in our mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're seeking healthcare or want to contribute as a volunteer, we welcome you to be part of the HealthConnect community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/find-healthcare">
                Find healthcare
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link to="/contact">
                Become a volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
