
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type GalleryKey = "programming" | "robotics" | "collaboration" | "design" | "innovation" | "presentation";

type UpcomingActivity = {
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  spots: string;
};

type ActivityFormContent = {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  activityLabel: string;
  activityPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
};

type ActivityCTAContent = {
  title: string;
  description: string;
  primary: string;
  secondary: string;
};

type EarlyAccessContent = {
  title: string;
  description: string;
  placeholder: string;
  button: string;
};

type GalleryTranslations = Record<GalleryKey, { title: string; description: string }>;

const activityTypeCards = [
  {
    key: "workshops" as const,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    link: "/workshops",
  },
  {
    key: "trainings" as const,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    link: "/trainings",
  },
  {
    key: "courses" as const,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    link: "/trainings",
  },
  {
    key: "events" as const,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    link: "/workshops",
  },
] as const;

const galleryCards = [
  {
    key: "programming" as const,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  {
    key: "robotics" as const,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  },
  {
    key: "collaboration" as const,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
  },
  {
    key: "design" as const,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
  },
  {
    key: "innovation" as const,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  },
  {
    key: "presentation" as const,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
  },
] as const;

const Activities = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    activity: "",
    message: ""
  });

  const [earlyAccess, setEarlyAccess] = useState({
    email: ""
  });
  const activityTypes = activityTypeCards.map((activity) => ({
    ...activity,
    title: t(`activities.types.${activity.key}.title`),
    description: t(`activities.types.${activity.key}.description`),
    features: t(`activities.types.${activity.key}.features`, { returnObjects: true }) as string[],
  }));

  const upcomingActivities = t("activities.upcoming.items", { returnObjects: true }) as UpcomingActivity[];
  const galleryTranslations = t("activities.gallery.items", { returnObjects: true }) as GalleryTranslations;
  const gallery = galleryCards.map((item) => ({
    ...item,
    ...galleryTranslations[item.key],
  }));

  const activityForm = t("activities.form", { returnObjects: true }) as ActivityFormContent;
  const activityCTA = t("activities.cta", { returnObjects: true }) as ActivityCTAContent;
  const earlyAccessContent = t("activities.earlyAccess", { returnObjects: true }) as EarlyAccessContent;

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">{t("activities.header.title")}</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              {t("activities.header.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">{t("activities.intro.title")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("activities.intro.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Activity Types Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("activities.overview.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("activities.overview.subtitle")}
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
                        <span className="text-[#fd2929] me-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="bg-[#fd2929] hover:bg-[#cf1919] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <Link to={activity.link}>{t("common.learnMore")}</Link>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("activities.upcoming.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("activities.upcoming.subtitle")}
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
                      <span className="me-2">📅</span>
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">⏰</span>
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="me-2">📍</span>
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-[#184260] hover:bg-[#2a5a7a] text-white w-full transition-colors duration-200"
                    asChild
                  >
                    <Link to="#register">{t("activities.upcoming.registerCta")}</Link>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("activities.gallery.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("activities.gallery.subtitle")}
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{activityForm.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activityForm.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {activityForm.nameLabel}
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
                        {activityForm.emailLabel}
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
                      {activityForm.activityLabel}
                    </label>
                    <select
                      id="activity"
                      value={formData.activity}
                      onChange={(e) => setFormData({...formData, activity: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fd2929] focus:border-transparent"
                      required
                    >
                      <option value="">{activityForm.activityPlaceholder}</option>
                      {upcomingActivities.map((activity, index) => (
                        <option key={index} value={activity.title}>{activity.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {activityForm.messageLabel}
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32"
                      placeholder={activityForm.messagePlaceholder}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#fd2929] hover:bg-[#cf1919] text-white py-3 text-lg rounded-lg transition-colors duration-200"
                  >
                    {activityForm.submit}
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
          <h2 className="text-4xl font-bold mb-6">{activityCTA.title}</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {activityCTA.description}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 md:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/workshops">{activityCTA.primary}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              asChild
            >
              <Link to="/trainings">{activityCTA.secondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{earlyAccessContent.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {earlyAccessContent.description}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={earlyAccess.email}
                onChange={(e) => setEarlyAccess({email: e.target.value})}
                placeholder={earlyAccessContent.placeholder}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300"
                required
              />
              <Button 
                type="submit"
                className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-6 transition-colors duration-200"
              >
                {earlyAccessContent.button}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
