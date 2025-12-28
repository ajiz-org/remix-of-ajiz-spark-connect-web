
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const ArtClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const activities = [
    {
      title: "Digital Art Workshops",
      description: "Learn digital illustration, graphic design, and digital painting using industry-standard software",
      icon: "🎨"
    },
    {
      title: "UI/UX Design Training",
      description: "Master user interface and experience design principles for web and mobile applications",
      icon: "📱"
    },
    {
      title: "Video Production",
      description: "Create compelling videos, animations, and multimedia content for various platforms",
      icon: "🎬"
    },
    {
      title: "Creative Exhibitions",
      description: "Showcase your work in public exhibitions and digital galleries",
      icon: "🖼️"
    }
  ];

  const benefits = [
    "Access to professional design software",
    "Learn from industry professionals",
    "Build an impressive portfolio",
    "Participate in design competitions",
    "Network with creative professionals",
    "Exhibition opportunities"
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      title: "Digital Illustrations",
      artist: "Sarah Ahmed"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      title: "UI Design Project",
      artist: "Omar Ben Ali"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      title: "Video Production",
      artist: "Lina Mansouri"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "3D Animation",
      artist: "Youssef Khelil"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Motion Graphics",
      artist: "Amina Soltani"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      title: "Interactive Media",
      artist: "Mehdi Jarray"
    }
  ];

  const timeline = [
    { year: "2024", event: "Digital Art Exhibition", description: "Hosted our first major digital art exhibition" },
    { year: "2023", event: "Design Competition Win", description: "Won regional UI/UX design competition" },
    { year: "2023", event: "Creative Workshop Series", description: "Launched monthly creative workshops" },
    { year: "2022", event: "Art Club Established", description: "Founded the creative arts division of AJIZ" }
  ];

  const upcomingEvents = [
    {
      title: "Digital Photography Workshop",
      date: "March 15, 2024",
      time: "14:00 - 17:00",
      description: "Learn professional photography techniques and post-processing"
    },
    {
      title: "Brand Identity Design",
      date: "March 22, 2024",
      time: "18:00 - 20:00",
      description: "Create compelling brand identities for local businesses"
    },
    {
      title: "Animation Fundamentals",
      date: "March 29, 2024",
      time: "16:00 - 19:00",
      description: "Introduction to 2D and 3D animation principles"
    }
  ];

  const testimonials = [
    {
      name: "Yasmin Gharbi",
      role: "UI/UX Designer at CreativeStudio",
      content: "The Art Club opened my eyes to the creative possibilities in tech. The mentorship and hands-on projects helped me land my dream job in design.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Karim Bouazizi",
      role: "Freelance Digital Artist",
      content: "Through the Art Club, I discovered my passion for digital art and built the skills to start my own creative business. The community support was incredible.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(24, 66, 96, 0.8), rgba(253, 41, 41, 0.8)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Art Club</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            Where Technology Meets Creative Expression
          </p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Our Creative Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The AJIZ Art Club bridges the gap between technology and creativity, 
                fostering innovative expression through digital media, design, and 
                multimedia production. We believe that art and technology together 
                can create powerful solutions for communication and storytelling.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to nurture creative talent while providing technical 
                skills that prepare our members for careers in the growing creative 
                technology industry, from UI/UX design to digital media production.
              </p>
              <Button 
                size="lg" 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-3 rounded-lg transition-colors duration-200"
                asChild
              >
                <Link to="#join">Join Our Creative Community</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Art and Design at AJIZ"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Creative Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore various forms of digital art and design through our 
              comprehensive workshop and project programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#fd2929]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{activity.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#184260] mb-3">{activity.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Member Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing creative work produced by our talented Art Club members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#184260] mb-2">{item.title}</h3>
                  <p className="text-gray-600">by {item.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Creative Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Why Join Our Art Club?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlock your creative potential and develop professional-level skills 
                in digital art, design, and multimedia production.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[#fd2929] text-xl mr-3">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Creative Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements of our Art Club
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#fd2929] rounded-full flex items-center justify-center text-white font-bold">
                  {item.year}
                </div>
                <Card className="flex-1 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#184260] mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Creative Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our members about how the Art Club shaped their creative careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#184260]">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for exciting creative workshops and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-[#fd2929] font-semibold mb-2">{event.date}</p>
                  <p className="text-gray-300 mb-3">{event.time}</p>
                  <p className="text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Unleash Your Creativity</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our Art Club and discover the perfect blend of creativity and technology. 
            Whether you're a beginner or experienced artist, we have a place for you.
          </p>
          
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join Next Workshop</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your creative journey? Have questions about our Art Club? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32"
                      placeholder="Tell us about your creative interests and any experience you have..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtClub;
