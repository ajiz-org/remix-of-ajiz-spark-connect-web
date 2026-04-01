import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const EVENT_DATE = new Date("2026-04-12T15:00:00+01:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (): TimeLeft => {
  const now = Date.now();
  const diff = EVENT_DATE.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const AjizTechChallenge = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const initial = getTimeLeft();
    if (initial.days === 0 && initial.hours === 0 && initial.minutes === 0 && initial.seconds === 0) {
      return;
    }

    const interval = setInterval(() => {
      const remaining = getTimeLeft();
      setTimeLeft(remaining);
      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  const countdownItems = [
    { labelKey: "ajizTechChallenge.countdown.days", value: days },
    { labelKey: "ajizTechChallenge.countdown.hours", value: hours },
    { labelKey: "ajizTechChallenge.countdown.minutes", value: minutes },
    { labelKey: "ajizTechChallenge.countdown.seconds", value: seconds },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative py-16 md:py-20 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24, 66, 96, 0.92), rgba(24, 66, 96, 0.88)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("ajizTechChallenge.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed">
            {t("ajizTechChallenge.hero.description")}
          </p>

          {/* Countdown */}
          <div className="mt-10">
            <p className="uppercase text-sm tracking-wide text-gray-300 mb-3">
              {t("ajizTechChallenge.countdown.label")}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {countdownItems.map((item) => (
                <div
                  key={item.labelKey}
                  className="flex flex-col items-center justify-center bg-white/10 rounded-lg px-4 py-3 min-w-[72px] md:min-w-[80px] border border-white/20"
                >
                  <span className="text-2xl md:text-3xl font-bold tabular-nums">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-gray-200 mt-0.5">
                    {t(item.labelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-6 py-3 rounded-lg transition-colors duration-200"
              asChild
            >
              <Link to="/activities">
                {t("ajizTechChallenge.cta.register")}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#184260] px-6 py-3 rounded-lg transition-colors duration-200"
              asChild
            >
              <Link to="/activities">
                {t("ajizTechChallenge.cta.sponsor")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Format */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              {t("ajizTechChallenge.format.title")}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              {(t("ajizTechChallenge.format.items", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Score Breakdown */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              {t("ajizTechChallenge.scoring.title")}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              {(t("ajizTechChallenge.scoring.items", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {t("ajizTechChallenge.scoring.note")}
            </p>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              {t("ajizTechChallenge.schedule.title")}
            </h2>
            <ul className="text-gray-700 space-y-2 leading-relaxed">
              <li dangerouslySetInnerHTML={{ __html: t("ajizTechChallenge.schedule.date") }} />
              <li>{t("ajizTechChallenge.schedule.hackathonStart")}</li>
              <li>{t("ajizTechChallenge.schedule.challengesEnd")}</li>
              <li>{t("ajizTechChallenge.schedule.pitching")}</li>
              <li>{t("ajizTechChallenge.schedule.ceremony")}</li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              {t("ajizTechChallenge.comingSoon.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t("ajizTechChallenge.comingSoon.description") }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AjizTechChallenge;
