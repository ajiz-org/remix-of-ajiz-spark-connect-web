
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactDialogButton from "@/components/ContactDialogButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const milestones = [
    { year: "2020", event: t("about.milestones.2020.event"), description: t("about.milestones.2020.description") },
    { year: "2021", event: t("about.milestones.2021.event"), description: t("about.milestones.2021.description") },
    { year: "2022", event: t("about.milestones.2022.event"), description: t("about.milestones.2022.description") },
    { year: "2023", event: t("about.milestones.2023.event"), description: t("about.milestones.2023.description") },
    { year: "2024", event: t("about.milestones.2024.event"), description: t("about.milestones.2024.description") },
  ];

  const partners = [
    { name: t('partners.s2t'), logo: "/s2t.png" },
    { name: t('partners.orange'), logo: "/orange.png" },
    { name: t('partners.sorce'), logo: "/sorce.png" },
    { name: t('partners.ministry'), logo: "/ministry.png" },
    { name: t('partners.delegation'), logo: "/delegation.png" },
    { name: t('partners.zarzinova'), logo: "/zarzinova.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">{t("about.header.title")}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in">
              {t("about.header.subtitle")}
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
                <h3 className="text-2xl font-bold text-[#184260] mb-4">{t("about.mission.title")}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("about.mission.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold text-[#184260] mb-4">{t("about.vision.title")}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-[#fd2929]">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-[#184260] mb-4">{t("about.history.title")}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("about.history.description")}
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("about.axesTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.axesSubtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {/* Youth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">👥</div>
                  <h3 className="text-3xl font-bold text-[#184260]">{t("about.youth.title")}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t("about.youth.description")}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.youth.benefits.0")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.youth.benefits.1")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.youth.benefits.2")}</li>
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
                  <h3 className="text-3xl font-bold text-[#184260]">{t("about.technology.title")}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t("about.technology.description")} 
                  for the digital future.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> Advanced programming workshops</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> AI and machine learning projects</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> IoT and robotics development</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.technology.benefits.0")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.technology.benefits.1")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.technology.benefits.2")}</li>
                </ul>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">🚀</div>
                  <h3 className="text-3xl font-bold text-[#184260]">{t("about.entrepreneurship.title")}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t("about.entrepreneurship.description")}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.entrepreneurship.benefits.0")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.entrepreneurship.benefits.1")}</li>
                  <li className="flex items-center"><span className="text-[#fd2929] mr-2">✓</span> {t("about.entrepreneurship.benefits.2")}</li>
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
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("about.journeyTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.journeySubtitle")}
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

      {/* Partners & Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">{t("about.partnersTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.partnersSubtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4"><img src={partner.logo} alt={partner.name} /></div>
                <h3 className="text-lg font-semibold text-[#184260]">{partner.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#fd2929] to-[#cf1919] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("about.ctaTitle")}</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("about.ctaDescription")}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-center">
            <ContactDialogButton
              className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              buttonTextKey="about.ctaPrimary"
              titleKey="about.partnerDialog.title"
              descriptionKey="about.partnerDialog.description"
              cancelKey="about.partnerDialog.cancel"
              actionKey="about.partnerDialog.emailCta"
              contact={{
                kind: "email",
                value: "contact@ajiz.org",
                linkTextKey: "about.partnerDialog.email",
                linkVarName: "email",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
