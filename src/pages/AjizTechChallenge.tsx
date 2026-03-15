import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const EVENT_DATE = new Date("2025-04-12T15:00:00+01:00");

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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

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
            AJIZ Tech Challenge
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed">
            AJIZ Tech Challenge est un hackathon technique intensif réunissant
            étudiants, développeurs et ingénieurs autour d'un projet principal
            d'ingénierie, complété par plusieurs compétitions techniques
            parallèles. L'événement se déroule en continu et met l'accent sur la
            conception, la programmation, l'optimisation et la résolution de
            problèmes techniques réels.
          </p>

          {/* Compte à rebours */}
          <div className="mt-10">
            <p className="uppercase text-sm tracking-wide text-gray-300 mb-3">
              ⏳ Compte à rebours vers le 12 avril à 15h00
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { label: "Jours", value: days },
                { label: "Heures", value: hours },
                { label: "Minutes", value: minutes },
                { label: "Secondes", value: seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center bg-white/10 rounded-lg px-4 py-3 min-w-[72px] md:min-w-[80px] border border-white/20"
                >
                  <span className="text-2xl md:text-3xl font-bold tabular-nums">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-gray-200 mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-6 py-3 rounded-lg transition-colors duration-200"
              asChild
            >
              <a
                href="/activities"
                target="_self"
                rel="noreferrer"
              >
                🔗 S'inscrire
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#184260] px-6 py-3 rounded-lg transition-colors duration-200"
              asChild
            >
              <a
                href="/activities"
                target="_self"
                rel="noreferrer"
              >
                🤝 Devenir sponsor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Format */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              Format
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Participation en équipes de 5 personnes</li>
              <li>Hackathon en continu, sans interruption</li>
              <li>Classement basé sur un score global pondéré</li>
              <li>Toutes les épreuves se déroulent sur la plateforme AJIZ</li>
            </ul>
          </div>

          {/* Répartition des scores */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              Répartition des scores
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Projet principal : 60 %</li>
              <li>Sécurité : 10 %</li>
              <li>Competitive Programming : 10 %</li>
              <li>Logic &amp; Reverse Programming : 10 %</li>
              <li>Optimisation événementielle : 5 %</li>
              <li>Conception logicielle : 5 %</li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Les détails des épreuves et des critères d'évaluation seront
              communiqués au lancement de l'événement.
            </p>
          </div>

          {/* Déroulement & planning */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              Déroulement &amp; planning
            </h2>
            <ul className="text-gray-700 space-y-2 leading-relaxed">
              <li><strong>Date :</strong> 12 avril</li>
              <li>Démarrage du hackathon : 15h00</li>
              <li>Fin des épreuves : 07h00</li>
              <li>Pitching des équipes : 09h00 → 12h00</li>
              <li>Remise des prix &amp; cérémonie de clôture : 12h00 → 13h00</li>
            </ul>
          </div>

          {/* Informations à venir */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#184260] mb-4">
              Informations à venir
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Prix</strong> — <strong>Frais d'inscription</strong> — Les
              détails seront communiqués prochainement sur cette page et via les
              canaux officiels AJIZ.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AjizTechChallenge;
