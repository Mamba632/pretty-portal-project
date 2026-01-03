import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Shield,
  Zap,
  Award
} from 'lucide-react';

const stats = [
  { value: '50,000+', label: 'Users Helped', icon: Users },
  { value: '1,000+', label: 'Healthcare Partners', icon: Heart },
  { value: '500+', label: 'Volunteer Doctors', icon: Shield },
  { value: '100+', label: 'Cities Covered', icon: Globe },
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
      <section className="hero-gradient py-20">
        <div className="section-container text-center text-primary-foreground">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-sm font-medium mb-6">
            Your Wellness, Our Mission
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Making Healthcare <span className="text-secondary-light">Accessible</span> for Everyone
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            HealthConnect is designed to make healthcare easier and more accessible. Whether you're looking for nearby hospitals, reliable home remedies, or expert advice — we're here to help.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Bridging the Healthcare Gap
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Millions of people in rural areas and urban slums lack access to basic healthcare due to limited infrastructure, shortage of medical professionals, and cultural barriers. 
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                HealthConnect aims to bridge this gap by providing digital access to healthcare resources, connecting people with medical volunteers and doctors, and empowering communities with self-care knowledge.
              </p>
              <div className="flex gap-4">
                <Button variant="hero" asChild>
                  <Link to="/consult">
                    Get Started <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="w-full h-full rounded-2xl bg-card shadow-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop" 
                    alt="Healthcare"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-success text-success-foreground shadow-lg">
                <Target className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-destructive-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-muted-foreground">
              Millions lack access to basic healthcare due to systemic challenges
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{index + 1}</span>
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
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              Our Solution
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How We're Making a Difference
            </h2>
            <p className="text-muted-foreground">
              Technology-driven solutions to bridge the healthcare accessibility gap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="feature-card">
                <div className="w-12 h-12 rounded-xl bg-success text-success-foreground flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 soft-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="section-container text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're seeking healthcare or want to contribute as a volunteer, we welcome you to be part of the HealthConnect community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/find-healthcare">
                Find Healthcare
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
