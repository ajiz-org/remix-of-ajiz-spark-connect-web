
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Workshops = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    experience: "",
    message: ""
  });

  const workshopTypes = [
    {
      category: "Technical Skills",
      description: "Hands-on workshops covering programming, web development, data science, and emerging technologies",
      workshops: [
        "Python Programming Fundamentals",
        "Web Development with React",
        "Data Science & Analytics",
        "Mobile App Development",
        "Cloud Computing Basics"
      ],
      icon: "💻"
    },
    {
      category: "Soft Skills",
      description: "Professional development workshops focusing on communication, leadership, and project management",
      workshops: [
        "Effective Communication",
        "Leadership Development",
        "Project Management",
        "Team Collaboration",
        "Public Speaking"
      ],
      icon: "🎯"
    },
    {
      category: "Industry Focus",
      description: "Specialized workshops tailored to specific industries and cutting-edge technologies",
      workshops: [
        "AI & Machine Learning",
        "Cybersecurity Fundamentals",
        "IoT Development",
        "Blockchain Technology",
        "Digital Marketing"
      ],
      icon: "🚀"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Introduction to Artificial Intelligence",
      date: "March 15, 2024",
      time: "14:00 - 18:00",
      duration: "4 hours",
      level: "Beginner",
      instructor: "Dr. Ahmed Mansouri",
      spots: 15,
      price: "Free for AJIZ members"
    },
    {
      title: "React.js Complete Workshop",
      date: "March 22, 2024",
      time: "09:00 - 17:00",
      duration: "8 hours",
      level: "Intermediate",
      instructor: "Sarah Ben Ali",
      spots: 20,
      price: "50 TND"
    },
    {
      title: "Cybersecurity Awareness",
      date: "March 29, 2024",
      time: "16:00 - 20:00",
      duration: "4 hours",
      level: "All levels",
      instructor: "Mohamed Khelil",
      spots: 25,
      price: "Free"
    }
  ];

  const recentWorkshop = {
    title: "Mobile App Development with Flutter",
    date: "February 20, 2024",
    description: "Our recent Flutter workshop was a huge success with 30 participants building their first mobile applications. The workshop covered everything from setup to deployment, with hands-on projects that participants could add to their portfolios.",
    highlights: [
      "30 participants completed the workshop",
      "5 mobile apps published to app stores",
      "98% satisfaction rate from participants",
      "Follow-up mentorship sessions scheduled"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  };

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Python Workshop",
      participants: "25 participants"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      title: "Team Collaboration",
      participants: "Interactive session"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      title: "UI/UX Workshop",
      participants: "Design thinking"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Hardware Session",
      participants: "Hands-on learning"
    }
  ];

  const testimonials = [
    {
      name: "Amira Saidi",
      workshop: "Data Science Workshop",
      content: "The data science workshop completely changed my career path. The practical approach and real datasets made complex concepts easy to understand.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Karim Bouslama",
      workshop: "Web Development Workshop",
      content: "I went from zero programming knowledge to building my own website in just one weekend. The instructors were amazing and very supportive.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience to attend workshops?",
      answer: "Not at all! We offer workshops for all skill levels, from complete beginners to advanced practitioners. Each workshop clearly indicates the required experience level."
    },
    {
      question: "What should I bring to a workshop?",
      answer: "Just bring your laptop and enthusiasm to learn! We'll provide all necessary software, materials, and resources. Some workshops may have specific requirements that will be communicated beforehand."
    },
    {
      question: "Are the workshops free?",
      answer: "Many of our workshops are free for AJIZ members. Some specialized workshops may have a small fee to cover materials and instructor costs. Pricing is always clearly indicated."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes! All participants who complete a workshop receive a certificate of completion that you can add to your professional portfolio or LinkedIn profile."
    },
    {
      question: "Can I suggest a workshop topic?",
      answer: "Absolutely! We're always looking for new ideas. Contact us with your suggestions, and if there's enough interest, we'll organize it."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workshop registration:", formData);
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Workshops</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            Hands-on Learning Experiences for Every Skill Level
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">Why Choose Our Workshops?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our workshops are designed to provide intensive, hands-on learning experiences 
              that you can immediately apply in your projects and career. Led by industry 
              experts and experienced practitioners, each session combines theory with 
              practical application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Intensive Learning</h3>
                <p className="text-gray-600">Focused sessions that maximize learning in minimal time</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals and experienced practitioners</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Hands-on Practice</h3>
                <p className="text-gray-600">Practical exercises and real-world project applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Workshop Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer diverse workshop categories to match your learning goals and career aspirations
            </p>
          </div>

          <div className="space-y-12">
            {workshopTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="text-6xl mb-4">{type.icon}</div>
                      <h3 className="text-2xl font-bold text-[#184260] mb-4">{type.category}</h3>
                      <p className="text-gray-600 leading-relaxed">{type.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {type.workshops.map((workshop, workshopIndex) => (
                          <div key={workshopIndex} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-[#fd2929]">
                            <h4 className="font-semibold text-[#184260]">{workshop}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register now for our upcoming workshops and secure your spot in these popular sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#fd2929] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {workshop.level}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">{workshop.spots} spots left</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#184260] mb-4">{workshop.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⌛</span>
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👨‍🏫</span>
                      <span>{workshop.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">💰</span>
                      <span className="font-semibold text-[#fd2929]">{workshop.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#184260] hover:bg-[#2a5a7a] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <a href="#register">Register Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Workshop Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Recent Workshop Spotlight</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of our recent workshops and the success of our participants
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${recentWorkshop.image})` }}
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#184260] mb-4">{recentWorkshop.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{recentWorkshop.date}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{recentWorkshop.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#184260]">Workshop Highlights:</h4>
                  {recentWorkshop.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-[#fd2929] mr-2">✓</span>
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our workshops
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#184260] mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Register for a Workshop</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start learning? Fill out the form below to register for your chosen workshop
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
                    <label htmlFor="workshop" className="block text-sm font-medium text-gray-700 mb-2">
                      Workshop Selection
                    </label>
                    <select
                      id="workshop"
                      value={formData.workshop}
                      onChange={(e) => setFormData({...formData, workshop: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">Select a workshop...</option>
                      {upcomingWorkshops.map((workshop, index) => (
                        <option key={index} value={workshop.title}>{workshop.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">Select your level...</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
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
                      placeholder="Tell us about your goals for this workshop or any specific questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    Register for Workshop
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Workshop Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our workshops in action
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
                  <h3 className="font-semibold text-[#184260] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.participants}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">What Participants Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our workshop participants about their learning experience
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
                      <p className="text-gray-600">{testimonial.workshop}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our next workshop and take the first step towards mastering new skills 
            that will advance your career and expand your opportunities.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#register">Register Now</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
