
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Activities = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    activity: "",
    message: ""
  });

  const [earlyAccess, setEarlyAccess] = useState({
    email: ""
  });

  const activityTypes = [
    {
      title: "Workshops",
      description: "Interactive sessions covering technical skills, from programming basics to advanced topics like AI and blockchain.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Hands-on learning", "Expert instructors", "Small group sessions", "Certificate of completion"],
      link: "/workshops"
    },
    {
      title: "Trainings",
      description: "Comprehensive training programs designed to build professional skills and prepare you for industry challenges.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      features: ["Industry-relevant curriculum", "Practical projects", "Mentorship support", "Job placement assistance"],
      link: "/trainings"
    },
    {
      title: "Courses",
      description: "Structured learning paths covering complete topics over multiple sessions with progressive skill building.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      features: ["Structured curriculum", "Progress tracking", "Peer collaboration", "Real-world projects"],
      link: "/trainings"
    },
    {
      title: "Innovative Events",
      description: "Unique events like hackathons, innovation challenges, and tech talks featuring industry leaders.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Networking opportunities", "Innovation challenges", "Industry speakers", "Prize competitions"],
      link: "/workshops"
    }
  ];

  const upcomingActivities = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2024",
      time: "14:00 - 18:00",
      location: "AJIZ Tech Lab",
      type: "Workshop",
      spots: "15 spots available"
    },
    {
      title: "Full Stack Development Bootcamp",
      date: "March 20-22, 2024",
      time: "09:00 - 17:00",
      location: "AJIZ Innovation Center",
      type: "Training",
      spots: "8 spots available"
    },
    {
      title: "Robotics Competition Prep",
      date: "March 25, 2024",
      time: "16:00 - 20:00",
      location: "Robotics Lab",
      type: "Special Event",
      spots: "20 spots available"
    },
    {
      title: "UI/UX Design Masterclass",
      date: "March 28, 2024",
      time: "18:00 - 21:00",
      location: "Design Studio",
      type: "Workshop",
      spots: "12 spots available"
    }
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Programming Workshop",
      description: "Students learning Python programming fundamentals"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      title: "Robotics Session",
      description: "Building and programming autonomous robots"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      title: "Team Collaboration",
      description: "Working together on innovative projects"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      title: "Design Workshop",
      description: "Creating user interfaces and digital art"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Innovation Lab",
      description: "Experimenting with cutting-edge technology"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      title: "Presentation Day",
      description: "Members presenting their project results"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access signup:", earlyAccess);
    setEarlyAccess({ email: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Activities</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Discover a world of learning opportunities through our comprehensive 
              programs designed to develop your technical skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">Learn, Grow, Innovate</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At AJIZ, we believe in learning by doing. Our activities are designed to provide 
              hands-on experience, practical skills, and real-world applications that prepare 
              you for success in the rapidly evolving technology landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Types Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of learning formats and find the perfect 
              fit for your schedule and learning style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activityTypes.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activity.image})` }}
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#184260] mb-4">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {activity.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <span className="text-[#fd2929] mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="bg-[#fd2929] hover:bg-[#cf1919] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <Link to={activity.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on our upcoming activities. Register now to secure your spot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#fd2929]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#fd2929] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {activity.type}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">{activity.spots}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#184260] mb-3">{activity.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#184260] hover:bg-[#2a5a7a] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <Link to="#register">Register Now</Link>
                  </Button>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Activities in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our community in action through photos from recent workshops, training sessions, and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#184260] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Register for an Event</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join us? Fill out the form below to register for any of our upcoming activities
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
                  
                  <div>
                    <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
                      Activity of Interest
                    </label>
                    <select
                      id="activity"
                      value={formData.activity}
                      onChange={(e) => setFormData({...formData, activity: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">Select an activity...</option>
                      {upcomingActivities.map((activity, index) => (
                        <option key={index} value={activity.title}>{activity.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32"
                      placeholder="Tell us about your background, experience, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    Register Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their careers through 
            our comprehensive learning programs. The next success story could be yours!
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/workshops">Browse Workshops</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link to="/trainings">View Training Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Early Access</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be the first to know about new activities, special events, and exclusive opportunities
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleEarlyAccess} className="flex space-x-4">
              <Input
                type="email"
                value={earlyAccess.email}
                onChange={(e) => setEarlyAccess({email: e.target.value})}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300"
                required
              />
              <Button 
                type="submit"
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-6 transition-colors duration-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
