import ContactDialogButton from "@/components/ContactDialogButton";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

type ClubInfo = {
  name: string;
  description: string;
  image: string;
  features: string[];
  color: string;
  icon: string;
  email: string;
};

const Clubs = () => {
  const { t } = useTranslation();

  const clubs: ClubInfo[] = [
    {
      name: t("clubs.codingClub.name"),
      description: t("clubs.codingClub.description"),
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: t("clubs.codingClub.features", {
        returnObjects: true,
      }) as string[],
      color: "from-blue-500 to-purple-600",
      icon: "💻",
      email: "coding@ajiz.org",
    },
    {
      name: t("clubs.roboticsClub.name"),
      description: t("clubs.roboticsClub.description"),
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      features: t("clubs.roboticsClub.features", {
        returnObjects: true,
      }) as string[],
      color: "from-green-500 to-teal-600",
      icon: "🤖",
      email: "robotics@ajiz.org",
    },
    {
      name: t("clubs.artClub.name"),
      description: t("clubs.artClub.description"),
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      features: t("clubs.artClub.features", {
        returnObjects: true,
      }) as string[],
      color: "from-pink-500 to-red-600",
      icon: "🎨",
      email: "art@ajiz.org",
    },
  ];

  const benefits = [
    {
      title: t("clubs.benefits.skillDevelopment.title"),
      description: t("clubs.benefits.skillDevelopment.description"),
      icon: "🎯",
    },
    {
      title: t("clubs.benefits.networking.title"),
      description: t("clubs.benefits.networking.description"),
      icon: "🤝",
    },
    {
      title: t("clubs.benefits.projectExperience.title"),
      description: t("clubs.benefits.projectExperience.description"),
      icon: "💼",
    },
    {
      title: t("clubs.benefits.leadership.title"),
      description: t("clubs.benefits.leadership.description"),
      icon: "👑",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t("clubs.header.title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in">
              {t("clubs.header.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-6">
              {t("clubs.whyJoinTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("clubs.whyJoinSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#184260] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("clubs.exploreTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("clubs.exploreSubtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {clubs.map((club, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`bg-gradient-to-r ${club.color} p-1 rounded-lg mb-6 inline-block`}
                  >
                    <h3 className="text-3xl font-bold text-white px-6 py-2">
                      {club.name}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {club.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-xl font-semibold text-[#184260]">
                      {t("clubs.featuresHeading")}
                    </h4>
                    <ul className="space-y-2">
                      {club.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-[#fd2929] mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${club.color} opacity-20`}
                    ></div>
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
            <h2 className="text-4xl font-bold mb-4">
              {t("clubs.impactTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("clubs.impactSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">150+</div>
              <p className="text-lg">{t("clubs.stats.members")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">50+</div>
              <p className="text-lg">{t("clubs.stats.projects")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">25+</div>
              <p className="text-lg">{t("clubs.stats.workshops")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#fd2929] mb-2">10+</div>
              <p className="text-lg">{t("clubs.stats.partners")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("clubs.readyTitle")}</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("clubs.readyDescription")}
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-center">
            <ContactDialogButton
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              buttonTextKey="clubs.readyPrimary"
              titleKey="clubs.readyDialog.title"
              descriptionKey="clubs.readyDialog.description"
              cancelKey="clubs.readyDialog.cancel"
              actionKey="clubs.readyDialog.emailCta"
              contact={{
                kind: "email",
                value: "hr@ajiz.org",
                linkTextKey: "clubs.readyDialog.email",
                linkVarName: "email",
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("clubs.contactTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("clubs.contactSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{club.icon}</div>
                <h3 className="text-xl font-bold text-[#184260] mb-2">
                  {club.name}
                </h3>
                <a href={`mailto:${club.email}`}>
                  <p className="text-gray-600 mb-4">{club.email}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clubs;
