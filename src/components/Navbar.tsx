
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "clubs", path: "/clubs" },
    { key: "activities", path: "/activities" },
    { key: "workshops", path: "/workshops" },
    { key: "trainings", path: "/trainings" },
  ] as const;

  return (
    <nav className="bg-[#184260] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#fd2929] rounded-lg flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold text-white">AJIZ</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-[#fd2929] text-white ${
                  isActive(item.path) ? "text-[#fd2929] border-b-2 border-[#fd2929]" : ""
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            <Select value={i18n.resolvedLanguage} onValueChange={(value) => i18n.changeLanguage(value)}>
              <SelectTrigger className="w-[110px] bg-transparent text-white border-white/30">
                <SelectValue placeholder={t("nav.language")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              className="bg-[#fd2929] hover:bg-[#cf1919] text-white px-6 py-2 rounded-lg transition-colors duration-200"
              asChild
            >
              <Link to="/activities" className="text-white">{t("nav.joinUs")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#fd2929] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-[#fd2929] text-white ${
                    isActive(item.path) ? "text-[#fd2929] bg-[#2a5a7a]" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              <div className="px-3 pt-2">
                <Select value={i18n.resolvedLanguage} onValueChange={(value) => i18n.changeLanguage(value)}>
                  <SelectTrigger className="w-full bg-transparent text-white border-white/30">
                    <SelectValue placeholder={t("nav.language")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="fr">FR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full mt-4 bg-[#fd2929] hover:bg-[#cf1919] text-white"
                asChild
              >
                <Link to="/activities" onClick={() => setIsOpen(false)} className="text-white">{t("nav.joinUs")}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
