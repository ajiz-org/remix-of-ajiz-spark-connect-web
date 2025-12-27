
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Clubs = () => {
  const clubs = [
    {
      name: "Coding Club",
      description: "Master the art of programming and software development through hands-on projects, collaborative coding sessions, and industry-relevant workshops.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: [
        "Weekly coding workshops",
        "Open source project contributions",
        "Competitive programming competitions",
        "Industry mentorship programs"
      ],
      link: "/clubs/coding",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Robotics Club",
      description: "Explore the fascinating world of robotics, automation, and AI through practical projects, competitions, and cutting-edge research initiatives.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      features: [
        "Robot design and building",
        "Automation projects",
        "IoT development",
        "National robotics competitions"
      ],
      link: "/clubs/robotics",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Art Club",
      description: "Unleash your creativity through digital art, multimedia design, and innovative visual storytelling projects that blend technology with artistic expression.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      features: [
        "Digital art workshops",
        "UI/UX design training",
        "Video production projects",
        "Creative technology exhibitions"
      ],
      link: "/clubs/art",
      color: "from-pink-500 to-red-600"
    }
  ];

  const benefits = [
    {
      title: "Skill Development",
      description: "Learn cutting-edge technologies and develop practical skills through hands-on projects.",
      icon: "🎯"
    },
    {
      title: "Networking",
      description: "Connect with like-minded peers, industry professionals, and potential mentors.",
      icon: "🤝"
    },
    {
      title: "Project Experience",
      description: "Work on real-world projects that build your portfolio and resume.",
      icon: "💼"
    },
    {
      title: "Leadership Opportunities",
      description: "Take on leadership roles and develop management and organizational skills.",
      icon: "👑"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Clubs</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Join specialized communities of passionate learners and innovators. 
              Each club offers unique opportunities to grow your skills, work on exciting projects, 
              and connect with fellow enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">Why Join Our Clubs?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our clubs are more than just study groups – they're vibrant communities where 
              innovation happens, friendships form, and future leaders emerge. Each club provides 
              structured learning paths, mentorship opportunities, and real-world project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#184260] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Explore Our Clubs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path and join a community that matches your interests and goals
            </p>
          </div>

          <div className="space-y-16">
            {clubs.map((club, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`bg-gradient-to-r ${club.color} p-1 rounded-lg mb-6 inline-block`}>
                    <h3 className="text-3xl font-bold text-white px-6 py-2">{club.name}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {club.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xl font-semibold text-[#184260]">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {club.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="text-[#fd2929] mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link to={club.link}>Learn More</Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={club.image} 
                      alt={club.name}
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${club.color} opacity-20`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our clubs are making a difference in the lives of our members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">150+</div>
              <p className="text-lg">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">50+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">25+</div>
              <p className="text-lg">Workshops Held</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">10+</div>
              <p className="text-lg">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose your club and start your journey with AJIZ. Whether you're interested in 
            coding, robotics, or art, we have a community waiting for you.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Join an Event</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link to="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our clubs? Want to know more about joining? Contact us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-[#184260] mb-2">Coding Club</h3>
              <p className="text-gray-600 mb-4">coding@ajiz.org</p>
              <Button 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white"
                asChild
              >
                <Link to="/clubs/coding">Learn More</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-[#184260] mb-2">Robotics Club</h3>
              <p className="text-gray-600 mb-4">robotics@ajiz.org</p>
              <Button 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white"
                asChild
              >
                <Link to="/clubs/robotics">Learn More</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-[#184260] mb-2">Art Club</h3>
              <p className="text-gray-600 mb-4">art@ajiz.org</p>
              <Button 
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white"
                asChild
              >
                <Link to="/clubs/art">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clubs;
