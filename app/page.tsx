import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';
import { Calendar, Code2, Cpu, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Expert Blockchain
                <span className="text-primary"> Consulting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with blockchain technology. Get expert guidance
                and personalized consulting sessions to bring your ideas to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/book">Book a Session</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
                alt="Blockchain Technology"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive blockchain solutions with a focus on security,
              scalability, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security First',
                description:
                  'Industry-leading security practices and audited smart contracts.',
              },
              {
                icon: Code2,
                title: 'Expert Development',
                description:
                  'Skilled in Solidity, Web3.js, and modern blockchain frameworks.',
              },
              {
                icon: Cpu,
                title: 'Technical Excellence',
                description:
                  'Deep understanding of blockchain architecture and protocols.',
              },
              {
                icon: Calendar,
                title: 'Flexible Sessions',
                description:
                  'Book personalized consulting sessions at your convenience.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-background p-6 rounded-lg shadow-sm border animate-slide-in animate-delay-${index * 100}`}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Thompson',
                role: 'CTO at BlockTech',
                content:
                  'The consulting sessions were invaluable for our DeFi project. The technical insights and guidance helped us avoid common pitfalls.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
              },
              {
                name: 'Sarah Chen',
                role: 'Founder at DAppHub',
                content:
                  'Exceptional blockchain expertise and a practical approach to problem-solving. Our smart contracts are now more efficient and secure.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              },
              {
                name: 'Michael Roberts',
                role: 'Lead Developer',
                content:
                  'The technical guidance we received was outstanding. Our team learned best practices that we still use today.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-background p-6 rounded-lg shadow-sm border animate-scale-in animate-delay-${index * 100}`}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}