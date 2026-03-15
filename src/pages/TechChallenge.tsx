
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// April 12, 2026 at 15:00 Tunisia time (UTC+1)
const EVENT_DATE = new Date("2026-04-12T14:00:00Z");

const TechChallenge = () => {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scoreItems = [
    {
      label: t("techChallenge.scores.mainProject"),
      value: 60,
      icon: "🏗️",
      color: "bg-[#184260]",
    },
    {
      label: t("techChallenge.scores.security"),
      value: 10,
      icon: "🔐",
      color: "bg-[#fd2929]",
    },
    {
      label: t("techChallenge.scores.competitiveProgramming"),
      value: 10,
      icon: "💻",
      color: "bg-[#2a5a7a]",
    },
    {
      label: t("techChallenge.scores.logicReverse"),
      value: 10,
      icon: "🔍",
      color: "bg-[#cf1919]",
    },
    {
      label: t("techChallenge.scores.eventOptimization"),
      value: 5,
      icon: "⚡",
      color: "bg-[#3a7a9a]",
    },
    {
      label: t("techChallenge.scores.softwareDesign"),
      value: 5,
      icon: "🎨",
      color: "bg-[#e84343]",
    },
  ];

  const countdownUnits = [
    { value: timeLeft.days, label: t("techChallenge.hero.days") },
    { value: timeLeft.hours, label: t("techChallenge.hero.hours") },
    { value: timeLeft.minutes, label: t("techChallenge.hero.minutes") },
    { value: timeLeft.seconds, label: t("techChallenge.hero.seconds") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#184260] to-[#fd2929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              AJIZ Tech Challenge
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in">
              {t("techChallenge.hero.description")}
            </p>

            {/* Countdown Timer */}
            <div className="mb-12">
              <p className="text-lg mb-6 text-white/80 font-medium">
                ⏳ {t("techChallenge.hero.countdownLabel")}
              </p>
              <div className="flex justify-center gap-3 md:gap-6">
                {countdownUnits.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-4 md:px-8 md:py-6 min-w-[72px] md:min-w-[110px] text-center border border-white/30"
                  >
                    <div className="text-3xl md:text-5xl font-bold tabular-nums leading-none">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wide">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#fd2929] hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
                asChild
              >
                <Link to="/activities">{t("techChallenge.hero.register")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#fd2929] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent font-semibold"
                asChild
              >
                <Link to="/activities">{t("techChallenge.hero.sponsor")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("techChallenge.format.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("techChallenge.format.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👥",
                title: t("techChallenge.format.team.title"),
                desc: t("techChallenge.format.team.desc"),
              },
              {
                icon: "🕐",
                title: t("techChallenge.format.continuous.title"),
                desc: t("techChallenge.format.continuous.desc"),
              },
              {
                icon: "🏆",
                title: t("techChallenge.format.scoring.title"),
                desc: t("techChallenge.format.scoring.desc"),
              },
              {
                icon: "💻",
                title: t("techChallenge.format.platform.title"),
                desc: t("techChallenge.format.platform.desc"),
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#fd2929]"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#184260] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Score Distribution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("techChallenge.scores.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("techChallenge.scores.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scoreItems.map((item) => (
              <Card
                key={item.label}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div
                    className={`${item.color} rounded-full w-14 h-14 flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-lg font-bold">
                      {item.value}%
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="font-semibold text-[#184260]">{item.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-10 max-w-2xl mx-auto italic">
            {t("techChallenge.scores.disclaimer")}
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("techChallenge.schedule.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("techChallenge.schedule.subtitle")}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#fd2929]" />
              {[
                {
                  time: "15:00",
                  label: t("techChallenge.schedule.hackathonStart"),
                  day: t("techChallenge.schedule.day1"),
                  icon: "🚀",
                },
                {
                  time: "07:00",
                  label: t("techChallenge.schedule.challengesEnd"),
                  day: t("techChallenge.schedule.day2"),
                  icon: "🏁",
                },
                {
                  time: "09:00 – 12:00",
                  label: t("techChallenge.schedule.pitching"),
                  day: t("techChallenge.schedule.day2"),
                  icon: "🎤",
                },
                {
                  time: "12:00 – 13:00",
                  label: t("techChallenge.schedule.ceremony"),
                  day: t("techChallenge.schedule.day2"),
                  icon: "🏆",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6 mb-8 ps-16">
                  <div className="absolute left-0 w-12 h-12 bg-[#fd2929] rounded-full flex items-center justify-center text-white text-xl shrink-0 z-10">
                    {item.icon}
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <p className="font-bold text-[#184260] text-lg">
                            {item.time}
                          </p>
                          <p className="text-gray-700">{item.label}</p>
                        </div>
                        <span className="bg-[#184260] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                          {item.day}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#184260] mb-4">
              {t("techChallenge.comingSoon.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("techChallenge.comingSoon.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: "🏅",
                label: t("techChallenge.comingSoon.prizes"),
              },
              {
                icon: "💳",
                label: t("techChallenge.comingSoon.fees"),
              },
            ].map((item) => (
              <Card
                key={item.label}
                className="text-center border-dashed border-2 border-[#184260]/30"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="font-semibold text-[#184260] text-lg">
                    {item.label}
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    {t("techChallenge.comingSoon.soon")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#184260] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("techChallenge.cta.title")}
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
            {t("techChallenge.cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
              asChild
            >
              <Link to="/activities">
                🔗 {t("techChallenge.cta.register")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#184260] px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent font-semibold"
              asChild
            >
              <Link to="/activities">
                🤝 {t("techChallenge.cta.sponsor")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechChallenge;
