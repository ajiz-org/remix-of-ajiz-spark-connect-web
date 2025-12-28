
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const CodingClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const activities = [
    {
      title: "Programming Workshops",
      description: "Regular workshops covering various programming languages including Python, JavaScript, Java, and C++",
      icon: "💻"
    },
    {
      title: "Project Development",
      description: "Collaborative projects ranging from web applications to mobile apps and desktop software",
      icon: "🚀"
    },
    {
      title: "Coding Sessions",
      description: "Weekly coding sessions where members solve problems, share knowledge, and learn together",
      icon: "👥"
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to open source projects and learning industry best practices",
      icon: "🌟"
    }
  ];

  const benefits = [
    "Learn multiple programming languages",
    "Work on real-world projects",
    "Build a strong portfolio",
    "Network with industry professionals",
    "Participate in coding competitions",
    "Access to mentorship programs"
  ];

  const stats = [
    { value: "80+", label: "Active Members" },
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Workshops Held" },
    { value: "95%", label: "Job Placement Rate" }
  ];

  const timeline = [
    { year: "2023", event: "Hackathon Winner", description: "Our team won first place in the National Coding Hackathon" },
    { year: "2023", event: "Open Source Project", description: "Launched our first major open source project" },
    { year: "2022", event: "Industry Partnership", description: "Formed partnerships with leading tech companies" },
    { year: "2021", event: "Club Foundation", description: "Coding Club officially established within AJIZ" }
  ];

  const testimonials = [
    {
      name: "Ahmed Benali",
      role: "Software Developer at TechCorp",
      content: "The Coding Club at AJIZ gave me the practical skills and confidence I needed to land my dream job. The mentorship and project experience were invaluable.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatma Zahra",
      role: "Full Stack Developer",
      content: "I learned more in one semester with the Coding Club than in years of traditional coursework. The hands-on approach and peer collaboration made all the difference.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(24, 66, 96, 0.8), rgba(253, 41, 41, 0.8)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Coding Club</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            Master the Art of Programming and Software Development
          </p>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The AJIZ Coding Club is dedicated to fostering a vibrant community of 
                programmers and software developers. We believe in learning by doing, 
                collaborative problem-solving, and building real-world applications 
                that make a difference.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to bridge the gap between academic learning and industry 
                requirements by providing hands-on experience, mentorship, and networking 
                opportunities that prepare our members for successful careers in technology.
              </p>
              <Button 
                size="lg" 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-3 rounded-lg transition-colors duration-200"
                asChild
              >
                <Link to="#join">Join Our Club</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Coding at AJIZ"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our activities are designed to provide comprehensive learning experiences 
              that cover all aspects of software development
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

      {/* Benefits of Joining */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                alt="Benefits of Coding Club"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#184260] mb-6">Why Join Our Coding Club?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Membership in our Coding Club opens doors to countless opportunities 
                for growth, learning, and professional development.
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

      {/* Statistics */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our Coding Club is making a difference in the tech community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#fd2929] mb-2">{stat.value}</div>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements of our Coding Club
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Member Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our members about how the Coding Club transformed their careers
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
          <h2 className="text-4xl font-bold mb-6">Ready to Start Coding?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our Coding Club and take your programming skills to the next level. 
            Whether you're a beginner or an experienced developer, we have something for everyone.
          </p>
          
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join Our Next Workshop</Link>
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
              Have questions about our Coding Club? Want to learn more about joining? 
              Fill out the form below and we'll get back to you!
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
                      placeholder="Tell us about your coding interests and experience..."
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

export default CodingClub;
