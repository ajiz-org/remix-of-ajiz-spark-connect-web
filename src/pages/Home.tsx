
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const thematicAxes = [
    {
      title: "Youth",
      description: "Empowering young minds to lead innovation and drive positive change in their communities.",
      icon: "👥",
    },
    {
      title: "Technology",
      description: "Advancing technological skills and knowledge through hands-on learning and practical applications.",
      icon: "💻",
    },
    {
      title: "Entrepreneurship",
      description: "Fostering entrepreneurial spirit and supporting startup initiatives among young engineers.",
      icon: "🚀",
    },
  ];

  const clubs = [
    {
      name: "Coding Club",
      description: "Master programming languages, develop innovative software solutions, and build the future through code.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "/clubs/coding",
    },
    {
      name: "Robotics Club",
      description: "Design, build, and program robots while exploring automation, AI, and cutting-edge hardware technologies.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      link: "/clubs/robotics",
    },
    {
      name: "Art Club",
      description: "Express creativity through digital art, design, multimedia projects, and innovative visual storytelling.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "/clubs/art",
    },
  ];

  const testimonials = [
    {
      name: "Amira Ben Salem",
      role: "Software Engineer",
      content: "AJIZ transformed my passion for coding into a successful career. The mentorship and hands-on projects were invaluable.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Mohamed Khalil",
      role: "Robotics Specialist",
      content: "The robotics club at AJIZ gave me the practical experience I needed to excel in my field. Amazing community!",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(24, 66, 96, 0.8), rgba(253, 41, 41, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-[#fd2929]">AJIZ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Association of Young Engineers in Zarzis
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in">
            Empowering youth through technology, innovation, and entrepreneurship. 
            Join our community of passionate engineers shaping the future.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join Our Community</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#184260] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Thematic Axes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Thematic Axes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AJIZ operates on three fundamental pillars that guide our mission and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thematicAxes.map((axis, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-[#fd2929]">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">{axis.icon}</div>
                  <h3 className="text-2xl font-bold text-[#184260] mb-4">{axis.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{axis.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Clubs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our specialized clubs designed to nurture your interests and skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${club.image})` }} />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#184260] mb-3">{club.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{club.description}</p>
                  <Button 
                    className="bg-[#fd2929] hover:bg-[#cf1919] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <Link to={club.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About AJIZ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">About AJIZ</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Association of Young Engineers in Zarzis (AJIZ) is a dynamic community 
                dedicated to fostering innovation, technology advancement, and entrepreneurial 
                spirit among young engineers in Tunisia.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our comprehensive programs, specialized clubs, and collaborative 
                initiatives, we provide a platform for growth, learning, and networking 
                that prepares our members for successful careers in engineering and technology.
              </p>
              <Button 
                size="lg" 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-3 rounded-lg transition-colors duration-200"
                asChild
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="AJIZ Community"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their transformative experiences with AJIZ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join AJIZ and become part of a community that's driving innovation, 
            fostering entrepreneurship, and building tomorrow's technology today.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join Our Events</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link to="/clubs">Explore Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#184260] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#fd2929] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#184260]">Location</h4>
                    <p className="text-gray-600">Zarzis, Tunisia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#fd2929] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#184260]">Email</h4>
                    <p className="text-gray-600">contact@ajiz.org</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#fd2929] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#184260]">Phone</h4>
                    <p className="text-gray-600">+216 XX XXX XXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.123456789!2d11.112233!3d33.498765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI5JzU1LjYiTiAxMcKwMDYnNDQuMCJF!5e0!3m2!1sen!2stn!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
