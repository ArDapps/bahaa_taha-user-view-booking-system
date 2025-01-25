import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    {
      icon: Briefcase,
      value: '100+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
    },
    {
      icon: GraduationCap,
      value: '1000+',
      label: 'Training Hours',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & Lead Consultant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Ph.D. in Computer Science with 10+ years of blockchain expertise.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Smart Contract Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Solidity expert with a background in cryptography and security.',
    },
    {
      name: 'David Park',
      role: 'DApp Architecture Specialist',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
      bio: 'Full-stack developer specialized in scalable blockchain solutions.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl font-bold mb-6">About BlockConsult</h1>
              <p className="text-lg text-muted-foreground">
                We are a team of blockchain experts dedicated to helping businesses
                navigate the complex world of distributed ledger technology. With
                years of experience and a passion for innovation, we deliver
                cutting-edge solutions that drive real business value.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className={`animate-scale-in animate-delay-${index * 100}`}>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <stat.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground text-center">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower businesses with secure, scalable, and innovative
                  blockchain solutions that drive digital transformation and create
                  lasting value.
                </p>
                <ul className="space-y-4">
                  {[
                    'Deliver excellence in blockchain consulting',
                    'Foster innovation through cutting-edge solutions',
                    'Maintain highest security standards',
                    'Build long-term client relationships',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
                  alt="Team Collaboration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className={`animate-slide-in animate-delay-${index * 100}`}>
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary text-center mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}