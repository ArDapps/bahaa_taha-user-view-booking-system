import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Database, Lock, Wallet, Wrench, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: 'Smart Contract Development',
      description: 'Custom smart contract development with security best practices and thorough testing.',
      features: [
        'Solidity development',
        'Contract auditing',
        'Gas optimization',
        'Testing and deployment',
      ],
    },
    {
      icon: Database,
      title: 'DApp Architecture',
      description: 'End-to-end decentralized application design and implementation.',
      features: [
        'Technical architecture',
        'Frontend integration',
        'Backend systems',
        'API development',
      ],
    },
    {
      icon: Lock,
      title: 'Security Consulting',
      description: 'Comprehensive security analysis and recommendations for blockchain projects.',
      features: [
        'Security audits',
        'Best practices review',
        'Vulnerability assessment',
        'Security patterns',
      ],
    },
    {
      icon: Wallet,
      title: 'Token Development',
      description: 'Custom token creation and tokenomics consulting for your project.',
      features: [
        'ERC standards',
        'Token economics',
        'Distribution strategy',
        'Integration support',
      ],
    },
    {
      icon: Wrench,
      title: 'Technical Consulting',
      description: 'Expert guidance on blockchain technology implementation and strategy.',
      features: [
        'Technology selection',
        'Architecture review',
        'Performance optimization',
        'Scalability planning',
      ],
    },
    {
      icon: BookOpen,
      title: 'Training & Workshops',
      description: 'Customized training sessions for teams and individuals.',
      features: [
        'Smart contract development',
        'Blockchain fundamentals',
        'Security practices',
        'DApp development',
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      <main className="flex-1">
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-muted-foreground text-lg">
                Comprehensive blockchain consulting services tailored to your needs.
                From smart contract development to security audits, we provide
                end-to-end solutions for your blockchain projects.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className={`flex flex-col animate-slide-in animate-delay-${index * 100}`}>
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg">
                <Link href="/book">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}