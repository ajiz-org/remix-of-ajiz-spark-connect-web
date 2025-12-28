
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

type TrainingHighlight = {
  icon: string;
  title: string;
  description: string;
};

type TrainingIntroContent = {
  title: string;
  description: string;
  highlights: TrainingHighlight[];
};

type TrainingCategory = {
  icon: string;
  category: string;
  description: string;
  duration: string;
  format: string;
};

type TrainingCategoriesContent = {
  title: string;
  subtitle: string;
  items: TrainingCategory[];
};

type TrainingProgram = {
  title: string;
  duration: string;
  level: string;
  instructor: string;
  objectives: string[];
  nextStart: string;
  spots: string;
  price: string;
};

type TrainingProgramsContent = {
  title: string;
  subtitle: string;
  priceNote: string;
  nextStartLabel: string;
  spotsLabel: string;
  enrollCta: string;
  items: TrainingProgram[];
};

type TrainingTimelineItem = {
  phase: string;
  title: string;
  description: string;
};

type TrainingTimelineContent = {
  title: string;
  subtitle: string;
  items: TrainingTimelineItem[];
};

type TrainingInstructor = {
  name: string;
  specialization: string;
  experience: string;
};

type TrainingInstructorsContent = {
  title: string;
  subtitle: string;
  items: TrainingInstructor[];
};

type TrainingFaqContent = {
  title: string;
  subtitle: string;
  items: { question: string; answer: string }[];
};

type TrainingFormContent = {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  trainingLabel: string;
  trainingPlaceholder: string;
  backgroundLabel: string;
  backgroundPlaceholder: string;
  goalsLabel: string;
  goalsPlaceholder: string;
  submit: string;
};

type TrainingTestimonialsContent = {
  title: string;
  subtitle: string;
  items: { name: string; program: string; outcome: string; content: string }[];
};

type TrainingCTAContent = {
  title: string;
  description: string;
  primary: string;
  secondary: string;
};

type TrainingHeaderContent = {
  title: string;
  subtitle: string;
};

const instructorImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
];

const testimonialAvatars = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
];

const Trainings = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    training: "",
    background: "",
    goals: ""
  });

  const header = t("trainings.header", { returnObjects: true }) as TrainingHeaderContent;
  const intro = t("trainings.intro", { returnObjects: true }) as TrainingIntroContent;
  const categories = t("trainings.categories", { returnObjects: true }) as TrainingCategoriesContent;
  const durationLabel = t("trainings.categories.durationLabel");
  const formatLabel = t("trainings.categories.formatLabel");
  const programs = t("trainings.programs", { returnObjects: true }) as TrainingProgramsContent;
  const instructorLabel = t("trainings.programs.instructorLabel");
  const objectivesLabel = t("trainings.programs.objectivesLabel");
  const timelineContent = t("trainings.timeline", { returnObjects: true }) as TrainingTimelineContent;
  const instructorsContent = t("trainings.instructors", { returnObjects: true }) as TrainingInstructorsContent;
  const faq = t("trainings.faq", { returnObjects: true }) as TrainingFaqContent;
  const formContent = t("trainings.form", { returnObjects: true }) as TrainingFormContent;
  const testimonialsContent = t("trainings.testimonials", { returnObjects: true }) as TrainingTestimonialsContent;
  const ctaContent = t("trainings.cta", { returnObjects: true }) as TrainingCTAContent;

  const instructorCards = instructorsContent.items.map((instructor, index) => ({
    ...instructor,
    image: instructorImages[index % instructorImages.length],
  }));

  const testimonialCards = testimonialsContent.items.map((item, index) => ({
    ...item,
    avatar: testimonialAvatars[index % testimonialAvatars.length],
  }));

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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{intro.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Training Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{categories.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {categories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.items.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-[#fd2929]">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="text-4xl">{type.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#184260] mb-3">{type.category}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-[#184260]">{durationLabel}</span>
                          <p className="text-gray-600">{type.duration}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-[#184260]">{formatLabel}</span>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{programs.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {programs.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {programs.items.map((course, index) => (
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
                          <span className="font-semibold text-[#184260]">{durationLabel}</span>
                          <span className="text-gray-600 ms-2">{course.duration}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#184260]">{instructorLabel}</span>
                          <span className="text-gray-600 ms-2">{course.instructor}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#184260] mb-3">{objectivesLabel}</h4>
                        <div className="space-y-2">
                          {course.objectives.map((objective, objIndex) => (
                            <div key={objIndex} className="flex items-center">
                              <span className="text-[#fd2929] me-2">✓</span>
                              <span className="text-gray-600">{objective}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-[#fd2929] mb-2">{course.price}</div>
                        <p className="text-gray-600">{programs.priceNote}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="font-semibold text-[#184260]">{programs.nextStartLabel}</span>
                          <span className="text-gray-600">{course.nextStart}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-[#184260]">{programs.spotsLabel}</span>
                          <span className="text-green-600 font-semibold">{course.spots}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white transition-colors duration-200"
                        asChild
                      >
                        <a href="#register">{programs.enrollCta}</a>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{timelineContent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {timelineContent.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#fd2929] hidden md:block"></div>
            {timelineContent.items.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pe-8 md:text-end' : 'md:ps-8 md:text-start'}`}>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{instructorsContent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {instructorsContent.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructorCards.map((instructor, index) => (
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
      <section id="register" className="py-20 bg-white">
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
                    <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-2">
                      {formContent.trainingLabel}
                    </label>
                    <select
                      id="training"
                      value={formData.training}
                      onChange={(e) => setFormData({...formData, training: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">{formContent.trainingPlaceholder}</option>
                      {programs.items.map((course, index) => (
                        <option key={index} value={course.title}>{course.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-2">
                      {formContent.backgroundLabel}
                    </label>
                    <Textarea
                      id="background"
                      value={formData.background}
                      onChange={(e) => setFormData({...formData, background: e.target.value})}
                      className="w-full h-24"
                      placeholder={formContent.backgroundPlaceholder}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                      {formContent.goalsLabel}
                    </label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      className="w-full h-24"
                      placeholder={formContent.goalsPlaceholder}
                      required
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
                      className="w-12 h-12 rounded-full me-4 object-cover"
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
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg bg-transparent transition-all duration-300"
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

export default Trainings;
