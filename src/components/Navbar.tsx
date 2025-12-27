
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const languageOptions = [
    { value: "en", label: "EN", badge: "EN", description: "English" },
    { value: "fr", label: "FR", badge: "FR", description: "Français" },
    { value: "ar", label: "AR", badge: "ع", description: "العربية" },
  ] as const;

  const currentLanguageMeta = languageOptions.find((opt) => opt.value === currentLanguage) ?? languageOptions[0];

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
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#fd2929] rounded-lg flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold text-white">AJIZ</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white px-4 py-2 rounded-full"
                  aria-label={t("nav.language")}
                  style={{ paddingInlineStart: "8px" }}
                >
                  <span
                    className="flex items-center justify-center bg-white/15 text-base font-semibold uppercase"
                    style={{ width: "40px", height: "26px", borderRadius: "13px" }}
                  >
                    {currentLanguageMeta.badge}
                  </span>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wide text-white/70">{t("nav.language")}</p>
                    <p className="font-semibold leading-tight">{currentLanguageMeta.description}</p>
                  </div>
                  <Languages className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("nav.language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languageOptions.map((opt) => (
                  <DropdownMenuItem
                    key={opt.value}
                    onSelect={(event) => {
                      event.preventDefault();
                      i18n.changeLanguage(opt.value);
                    }}
                    className={`flex items-center gap-3 rounded-md cursor-pointer mb-1 ${
                      currentLanguage === opt.value ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    <span
                      className="flex items-center justify-center bg-muted text-sm font-semibold uppercase"
                      style={{ width: "40px", height: "26px", borderRadius: "13px" }}
                    >
                      {opt.badge}
                    </span>
                    <div>
                      <p className="font-semibold">{opt.description}</p>
                      <p className="text-xs text-muted-foreground">{opt.label}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

              <div className="px-3 pt-2 space-y-2">
                <p className="text-xs uppercase tracking-wide text-white/60">{t("nav.language")}</p>
                <div className="grid grid-cols-1 gap-2">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        i18n.changeLanguage(opt.value);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-white transition-colors cursor-pointer ${
                        currentLanguage === opt.value
                          ? "border-white bg-white/10"
                          : "border-white/20 hover:border-white/50 hover:bg-white/5"
                      }`}
                      style={{ marginBlock: "4px" }}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="flex items-center justify-center bg-white/15 text-sm font-semibold uppercase"
                          style={{ width: "40px", height: "26px", borderRadius: "13px" }}
                        >
                          {opt.badge}
                        </span>
                        <span className="font-semibold">{opt.description}</span>
                      </span>
                      <span className="text-sm text-white/70">{opt.label}</span>
                    </button>
                  ))}
                </div>
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
