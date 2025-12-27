
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const RoboticsClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const activities = [
    {
      title: "Robot Design & Building",
      description: "Design and construct robots from scratch using various hardware components and sensors",
      icon: "🤖"
    },
    {
      title: "Automation Projects",
      description: "Develop automated systems for real-world applications using microcontrollers and IoT devices",
      icon: "⚙️"
    },
    {
      title: "AI Integration",
      description: "Implement machine learning algorithms and computer vision in robotic systems",
      icon: "🧠"
    },
    {
      title: "Competition Teams",
      description: "Participate in national and international robotics competitions and challenges",
      icon: "🏆"
    }
  ];

  const benefits = [
    "Hands-on experience with cutting-edge hardware",
    "Learn programming for embedded systems",
    "Participate in prestigious competitions",
    "Work with industry-standard tools",
    "Collaborate on innovative research projects",
    "Access to state-of-the-art robotics lab"
  ];

  const operations = [
    {
      day: "Monday",
      time: "18:00 - 20:00",
      activity: "Hardware Workshop"
    },
    {
      day: "Wednesday",
      time: "19:00 - 21:00",
      activity: "Programming Session"
    },
    {
      day: "Friday",
      time: "17:00 - 19:00",
      activity: "Project Development"
    },
    {
      day: "Saturday",
      time: "14:00 - 17:00",
      activity: "Competition Prep"
    }
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      title: "Robot Assembly"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Circuit Design"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      title: "Team Collaboration"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      title: "Competition Ready"
    }
  ];

  const timeline = [
    { year: "2024", event: "AI Robot Project", description: "Developed an AI-powered service robot for local businesses" },
    { year: "2023", event: "National Competition Win", description: "First place in Tunisia Robotics Championship" },
    { year: "2023", event: "IoT Smart Home", description: "Created automated smart home system prototype" },
    { year: "2022", event: "Robotics Lab Setup", description: "Established our dedicated robotics laboratory" }
  ];

  const testimonials = [
    {
      name: "Khaled Messaoud",
      role: "Automation Engineer at IndusTech",
      content: "The Robotics Club gave me hands-on experience that no classroom could provide. Working on real robots and competing nationally prepared me perfectly for my career.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Nour El Houda",
      role: "Robotics Researcher",
      content: "Being part of this club opened my eyes to the possibilities in robotics and AI. The mentorship and project experience were invaluable for my research career.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
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
          backgroundImage: "linear-gradient(rgba(24, 66, 96, 0.8), rgba(253, 41, 41, 0.8)), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Robotics Club</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            Build the Future with Intelligent Machines
          </p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The AJIZ Robotics Club is at the forefront of technological innovation, 
                combining hardware engineering, software development, and artificial 
                intelligence to create intelligent machines that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide a comprehensive learning environment where members can explore 
                robotics, automation, IoT, and AI through hands-on projects, competitions, 
                and collaborative research initiatives.
              </p>
              <Button 
                size="lg" 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-3 rounded-lg transition-colors duration-200"
                asChild
              >
                <Link to="#join">Join Our Mission</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                alt="Robotics at AJIZ"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our activities span from basic robotics to advanced AI integration, 
              ensuring comprehensive learning for all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#fd2929]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Robotics Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Why Join Our Robotics Club?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Become part of a cutting-edge community that's shaping the future of 
                robotics and automation technology.
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

      {/* Operational Overview */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Schedule</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Regular sessions designed to provide structured learning and hands-on experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((session, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{session.day}</h3>
                  <p className="text-[#fd2929] font-semibold mb-2">{session.time}</p>
                  <p className="text-gray-300">{session.activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our robots in action and our team at work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#184260] text-center">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Major milestones and accomplishments of our Robotics Club
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our members about their journey in robotics
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

      {/* Call to Action */}
      <section id="join" className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our Robotics Club and be part of the next generation of innovators 
            creating intelligent machines that will change the world.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join Our Next Session</Link>
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
              Interested in robotics? Have questions about our club? 
              Reach out to us and start your robotics journey!
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
                      placeholder="Tell us about your interest in robotics and any experience you have..."
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

export default RoboticsClub;
