
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Trainings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    training: "",
    background: "",
    goals: ""
  });

  const trainingTypes = [
    {
      category: "Technical Training",
      description: "Comprehensive technical programs covering programming, system administration, and emerging technologies",
      duration: "4-12 weeks",
      format: "Intensive bootcamp style",
      icon: "⚙️"
    },
    {
      category: "Soft Skills Development",
      description: "Professional development programs focusing on communication, leadership, and interpersonal skills",
      duration: "6-8 weeks",
      format: "Interactive workshops",
      icon: "🗣️"
    },
    {
      category: "Leadership Training",
      description: "Advanced programs designed to develop leadership capabilities and management skills",
      duration: "8-10 weeks",
      format: "Mentorship & practice",
      icon: "👑"
    },
    {
      category: "Innovation & Entrepreneurship",
      description: "Training programs focused on startup development, innovation processes, and business skills",
      duration: "6-12 weeks",
      format: "Project-based learning",
      icon: "💡"
    }
  ];

  const courses = [
    {
      title: "Full Stack Web Development Bootcamp",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      instructor: "Dr. Sarah Mansouri & Team",
      objectives: [
        "Master HTML, CSS, and JavaScript fundamentals",
        "Build applications with React and Node.js",
        "Work with databases and APIs",
        "Deploy applications to production",
        "Collaborative development with Git"
      ],
      nextStart: "April 1, 2024",
      spots: 15,
      price: "800 TND"
    },
    {
      title: "Data Science & Analytics Program",
      duration: "10 weeks",
      level: "Intermediate",
      instructor: "Prof. Ahmed Khelil",
      objectives: [
        "Statistical analysis and data visualization",
        "Python programming for data science",
        "Machine learning fundamentals",
        "Real-world data projects",
        "Industry tools and best practices"
      ],
      nextStart: "April 8, 2024",
      spots: 12,
      price: "600 TND"
    },
    {
      title: "Cybersecurity Specialist Track",
      duration: "8 weeks",
      level: "Intermediate to Advanced",
      instructor: "Eng. Mohamed Zahra",
      objectives: [
        "Network security fundamentals",
        "Ethical hacking and penetration testing",
        "Security frameworks and compliance",
        "Incident response and forensics",
        "Hands-on lab exercises"
      ],
      nextStart: "April 15, 2024",
      spots: 10,
      price: "700 TND"
    }
  ];

  const timeline = [
    {
      phase: "Week 1-2",
      title: "Foundation Building",
      description: "Introduction to core concepts and fundamental skills"
    },
    {
      phase: "Week 3-6",
      title: "Skill Development",
      description: "Intensive hands-on practice and project work"
    },
    {
      phase: "Week 7-10",
      title: "Advanced Applications",
      description: "Complex projects and real-world scenario practice"
    },
    {
      phase: "Week 11-12",
      title: "Capstone & Certification",
      description: "Final projects, presentations, and certification assessment"
    }
  ];

  const instructors = [
    {
      name: "Dr. Sarah Mansouri",
      specialization: "Full Stack Development",
      experience: "10+ years in web development",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Prof. Ahmed Khelil",
      specialization: "Data Science & AI",
      experience: "12+ years in academia and industry",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Eng. Mohamed Zahra",
      specialization: "Cybersecurity",
      experience: "8+ years in security consulting",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between workshops and training programs?",
      answer: "Workshops are short, intensive sessions (typically 1-2 days) focused on specific skills. Training programs are comprehensive, multi-week programs that provide in-depth knowledge and practical experience in a field."
    },
    {
      question: "Do I need to have programming experience?",
      answer: "It depends on the specific training program. We offer programs for all levels, from complete beginners to advanced practitioners. Each program clearly states its prerequisites."
    },
    {
      question: "What kind of certificate will I receive?",
      answer: "Upon successful completion, you'll receive an AJIZ certificate of completion that includes the skills covered and hours completed. Our certificates are recognized by many local employers."
    },
    {
      question: "Is job placement assistance provided?",
      answer: "Yes! We provide career guidance, resume review, interview preparation, and connections with our partner companies for internship and job opportunities."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible payment plans. You can pay in 2-3 installments depending on the program duration. Contact us to discuss payment options."
    }
  ];

  const testimonials = [
    {
      name: "Youssef Bouazizi",
      program: "Full Stack Development Bootcamp",
      outcome: "Landed a job as Junior Developer",
      content: "The training program was intensive but incredibly rewarding. The hands-on projects and mentorship helped me transition from marketing to tech. I got my first developer job within 2 months of graduation.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Nour Gharbi",
      program: "Data Science Program",
      outcome: "Promoted to Data Analyst",
      content: "This program gave me the practical skills I needed to advance in my career. The real-world projects and expert instruction made complex topics accessible and applicable to my work.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Training registration:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(24, 66, 96, 0.8), rgba(253, 41, 41, 0.8)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Training Programs</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            Comprehensive Professional Development for Career Advancement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">Transform Your Career with Professional Training</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive training programs are designed to provide in-depth knowledge 
              and practical skills that directly translate to career advancement. With structured 
              curricula, expert instruction, and hands-on projects, you'll gain the expertise 
              needed to excel in your chosen field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Structured Learning</h3>
                <p className="text-gray-600">Progressive curriculum designed for optimal skill development</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Industry Recognition</h3>
                <p className="text-gray-600">Certificates and skills recognized by leading employers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-[#184260] mb-3">Career Support</h3>
                <p className="text-gray-600">Job placement assistance and career guidance included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Training Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized training tracks designed to meet different career goals and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#fd2929]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{type.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#184260] mb-3">{type.category}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-[#184260]">Duration:</span>
                          <p className="text-gray-600">{type.duration}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-[#184260]">Format:</span>
                          <p className="text-gray-600">{type.format}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Descriptions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Featured Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into our most popular training programs with detailed curriculum and objectives
            </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-[#184260]">{course.title}</h3>
                        <span className="bg-[#fd2929] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {course.level}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <span className="font-semibold text-[#184260]">Duration:</span>
                          <span className="text-gray-600 ml-2">{course.duration}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#184260]">Instructor:</span>
                          <span className="text-gray-600 ml-2">{course.instructor}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#184260] mb-3">Learning Objectives:</h4>
                        <div className="space-y-2">
                          {course.objectives.map((objective, objIndex) => (
                            <div key={objIndex} className="flex items-center">
                              <span className="text-[#fd2929] mr-2">✓</span>
                              <span className="text-gray-600">{objective}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-[#fd2929] mb-2">{course.price}</div>
                        <p className="text-gray-600">Full program</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="font-semibold text-[#184260]">Next Start:</span>
                          <span className="text-gray-600">{course.nextStart}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-[#184260]">Available Spots:</span>
                          <span className="text-green-600 font-semibold">{course.spots} remaining</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white transition-colors duration-200"
                        asChild
                      >
                        <a href="#register">Enroll Now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Training Journey Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our structured approach guides you from beginner to professional
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#fd2929] hidden md:block"></div>
            {timeline.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-lg font-bold text-[#fd2929] mb-2">{phase.phase}</div>
                      <h3 className="text-xl font-bold text-[#184260] mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#fd2929] rounded-full border-4 border-white hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals with years of practical experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#184260] mb-2">{instructor.name}</h3>
                  <p className="text-[#fd2929] font-semibold mb-2">{instructor.specialization}</p>
                  <p className="text-gray-600">{instructor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our training programs
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
      <section id="register" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Apply for a Training Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to advance your career? Apply for one of our training programs and take the next step
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
                    <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-2">
                      Training Program
                    </label>
                    <select
                      id="training"
                      value={formData.training}
                      onChange={(e) => setFormData({...formData, training: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">Select a training program...</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course.title}>{course.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-2">
                      Professional Background
                    </label>
                    <Textarea
                      id="background"
                      value={formData.background}
                      onChange={(e) => setFormData({...formData, background: e.target.value})}
                      className="w-full h-24"
                      placeholder="Tell us about your current role, education, and relevant experience..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                      Career Goals
                    </label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      className="w-full h-24"
                      placeholder="What are your career goals and how will this training help you achieve them?"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our training programs have transformed careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {testimonial.outcome}
                  </div>
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
                      <p className="text-gray-600">{testimonial.program}</p>
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
          <h2 className="text-4xl font-bold mb-6">Invest in Your Future Today</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait to advance your career. Our comprehensive training programs 
            provide the skills and support you need to achieve your professional goals.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#register">Apply Now</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg bg-transparent transition-all duration-300"
              asChild
            >
              <a href="#contact">Get More Info</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;
