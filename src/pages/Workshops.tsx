
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

type WorkshopHighlight = {
  icon: string;
  title: string;
  description: string;
};

type WorkshopIntroContent = {
  title: string;
  description: string;
  highlights: WorkshopHighlight[];
};

type WorkshopCategory = {
  icon: string;
  category: string;
  description: string;
  workshops: string[];
};

type WorkshopCategoriesContent = {
  title: string;
  subtitle: string;
  items: WorkshopCategory[];
};

type UpcomingWorkshop = {
  title: string;
  date: string;
  time: string;
  duration: string;
  level: string;
  instructor: string;
  spots: string;
  price: string;
};

type WorkshopUpcomingContent = {
  title: string;
  subtitle: string;
  registerCta: string;
  items: UpcomingWorkshop[];
};

type WorkshopSpotlightContent = {
  title: string;
  subtitle: string;
  highlightsTitle: string;
  workshop: {
    title: string;
    date: string;
    description: string;
    highlights: string[];
  };
};

type WorkshopFaqContent = {
  title: string;
  subtitle: string;
  items: { question: string; answer: string }[];
};

type WorkshopFormContent = {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  workshopLabel: string;
  workshopPlaceholder: string;
  experienceLabel: string;
  experiencePlaceholder: string;
  experienceOptions: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
};

type WorkshopGalleryItem = {
  title: string;
  participants: string;
};

type WorkshopGalleryContent = {
  title: string;
  subtitle: string;
  items: WorkshopGalleryItem[];
};

type WorkshopTestimonialsContent = {
  title: string;
  subtitle: string;
  items: { name: string; workshop: string; content: string }[];
};

type WorkshopCTAContent = {
  title: string;
  description: string;
  primary: string;
  secondary: string;
};

type WorkshopHeaderContent = {
  title: string;
  subtitle: string;
};

const galleryImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
];

const testimonialAvatars = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
];

const spotlightImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop";

const Workshops = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    experience: "",
    message: ""
  });

  const header = t("workshops.header", { returnObjects: true }) as WorkshopHeaderContent;
  const intro = t("workshops.intro", { returnObjects: true }) as WorkshopIntroContent;
  const categories = t("workshops.categories", { returnObjects: true }) as WorkshopCategoriesContent;
  const upcoming = t("workshops.upcoming", { returnObjects: true }) as WorkshopUpcomingContent;
  const spotlight = t("workshops.spotlight", { returnObjects: true }) as WorkshopSpotlightContent;
  const faq = t("workshops.faq", { returnObjects: true }) as WorkshopFaqContent;
  const formContent = t("workshops.form", { returnObjects: true }) as WorkshopFormContent;
  const galleryContent = t("workshops.gallery", { returnObjects: true }) as WorkshopGalleryContent;
  const testimonialsContent = t("workshops.testimonials", { returnObjects: true }) as WorkshopTestimonialsContent;
  const ctaContent = t("workshops.cta", { returnObjects: true }) as WorkshopCTAContent;

  const galleryCards = galleryContent.items.map((item, index) => ({
    ...item,
    image: galleryImages[index % galleryImages.length],
  }));

  const testimonialCards = testimonialsContent.items.map((item, index) => ({
    ...item,
    avatar: testimonialAvatars[index % testimonialAvatars.length],
  }));

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">{header.title}</h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">{intro.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {intro.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intro.highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold text-[#184260] mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{categories.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {categories.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {categories.items.map((type, index) => (
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{upcoming.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {upcoming.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcoming.items.map((workshop, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#fd2929] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {workshop.level}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">{workshop.spots}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#184260] mb-4">{workshop.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="me-2">📅</span>
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">⏰</span>
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">⌛</span>
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">👨‍🏫</span>
                      <span>{workshop.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">💰</span>
                      <span className="font-semibold text-[#fd2929]">{workshop.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#184260] hover:bg-[#2a5a7a] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <a href="#register">{upcoming.registerCta}</a>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{spotlight.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {spotlight.subtitle}
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${spotlightImage})` }}
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#184260] mb-4">{spotlight.workshop.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{spotlight.workshop.date}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{spotlight.workshop.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#184260]">{spotlight.highlightsTitle}</h4>
                  {spotlight.workshop.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-[#fd2929] me-2">✓</span>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{faq.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {faq.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.items.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#184260] mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{formContent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {formContent.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {formContent.nameLabel}
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
                        {formContent.emailLabel}
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
                      {formContent.workshopLabel}
                    </label>
                    <select
                      id="workshop"
                      value={formData.workshop}
                      onChange={(e) => setFormData({...formData, workshop: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">{formContent.workshopPlaceholder}</option>
                      {upcoming.items.map((workshop, index) => (
                        <option key={index} value={workshop.title}>{workshop.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      {formContent.experienceLabel}
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">{formContent.experiencePlaceholder}</option>
                      <option value="beginner">{formContent.experienceOptions.beginner}</option>
                      <option value="intermediate">{formContent.experienceOptions.intermediate}</option>
                      <option value="advanced">{formContent.experienceOptions.advanced}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {formContent.messageLabel}
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32"
                      placeholder={formContent.messagePlaceholder}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    {formContent.submit}
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{galleryContent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {galleryContent.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCards.map((item, index) => (
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{testimonialsContent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {testimonialsContent.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialCards.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full me-4 object-cover"
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
          <h2 className="text-4xl font-bold mb-6">{ctaContent.title}</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {ctaContent.description}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#register">{ctaContent.primary}</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <a href="#contact">{ctaContent.secondary}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
