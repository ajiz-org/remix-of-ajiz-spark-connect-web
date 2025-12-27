
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "2020", event: "AJIZ Foundation", description: "Established as a student-led initiative" },
    { year: "2021", event: "First Tech Workshop", description: "Organized our inaugural coding workshop" },
    { year: "2022", event: "Robotics Club Launch", description: "Expanded with specialized robotics programs" },
    { year: "2023", event: "Community Partnership", description: "Formed partnerships with local tech companies" },
    { year: "2024", event: "Innovation Hub", description: "Opened our dedicated innovation workspace" },
  ];

  const teamMembers = [
    {
      name: "Yasmin Hadj Ali",
      role: "President",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      bio: "Computer Science student passionate about AI and community building"
    },
    {
      name: "Ahmed Ben Othman",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      bio: "Robotics enthusiast with expertise in automation and IoT"
    },
    {
      name: "Fatma Bouslama",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      bio: "Project management specialist focused on organizational excellence"
    },
    {
      name: "Khalil Mansouri",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      bio: "Business administration student with entrepreneurial experience"
    }
  ];

  const partners = [
    { name: "Tech Tunisia", logo: "🏢" },
    { name: "Innovation Hub", logo: "💡" },
    { name: "Digital Solutions", logo: "💻" },
    { name: "Future Labs", logo: "🔬" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">About AJIZ</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Empowering the next generation of engineers through innovation, 
              collaboration, and technological excellence in Zarzis, Tunisia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-[#184260] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To foster innovation, technological advancement, and entrepreneurial 
                  spirit among young engineers while building a strong professional 
                  community that contributes to Tunisia's technological development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold text-[#184260] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading engineering association in Tunisia, 
                  recognized for excellence in education, innovation, and 
                  community impact while preparing future leaders in technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-[#184260] mb-4">Our History</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020 by passionate engineering students, AJIZ has 
                  grown from a small study group to a vibrant community of 
                  hundreds of members driving technological innovation in Zarzis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Thematic Axes Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Thematic Axes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three pillars that guide everything we do at AJIZ
            </p>
          </div>

          <div className="space-y-16">
            {/* Youth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">👥</div>
                  <h3 className="text-3xl font-bold text-[#184260]">Youth</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe in the power of young minds to drive change and innovation. 
                  Our youth-focused initiatives provide mentorship, leadership opportunities, 
                  and platforms for creative expression.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Leadership development programs</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Peer-to-peer learning networks</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Youth entrepreneurship support</li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                  alt="Youth at AJIZ"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                  alt="Technology at AJIZ"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">💻</div>
                  <h3 className="text-3xl font-bold text-[#184260]">Technology</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Technology is at the heart of everything we do. We provide hands-on 
                  experience with cutting-edge tools and technologies, preparing members 
                  for the digital future.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Advanced programming workshops</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> AI and machine learning projects</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> IoT and robotics development</li>
                </ul>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">🚀</div>
                  <h3 className="text-3xl font-bold text-[#184260]">Entrepreneurship</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We foster entrepreneurial thinking and support startup initiatives. 
                  From idea validation to business development, we guide members 
                  through their entrepreneurial journey.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Business model development</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Investor pitch preparation</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Startup incubation support</li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                  alt="Entrepreneurship at AJIZ"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in AJIZ's growth and development
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#fd2929]"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-[#fd2929] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#184260] mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#fd2929] rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate leaders driving AJIZ forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#184260] mb-2">{member.name}</h3>
                  <p className="text-[#fd2929] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together to create opportunities and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-semibold text-[#184260]">{partner.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of a community that's shaping the future of technology and 
            engineering in Tunisia. Whether as a member, partner, or supporter, 
            there are many ways to get involved with AJIZ.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/activities">Get Involved</Link>
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
    </div>
  );
};

export default About;
