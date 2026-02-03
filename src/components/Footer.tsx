
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#184260] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="AJIZ logo"
                className="w-10 h-10 rounded-lg object-contain"
                style={{ background: "#f2f5f4", objectPosition: "0 5px" }}
              />
              <span className="text-xl font-bold">AJIZ</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">{t("footer.description")}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#fd2929] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#fd2929] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#fd2929] transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#fd2929] transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/clubs" className="text-gray-300 hover:text-[#fd2929] transition-colors">{t("nav.clubs")}</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-[#fd2929] transition-colors">{t("nav.activities")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span style={{ direction: 'ltr', unicodeBidi: 'inherit' }}>🖈 <a href="https://maps.app.goo.gl/81knzub1vghiivWA9" target="_blank">{t("footer.location")}</a></span></li>
              <li><span style={{ unicodeBidi: "plaintext" }}>@ <a href={`mailto:${t("footer.email")}`}>{t("footer.email")}</a></span></li>
              <li><span style={{ unicodeBidi: "plaintext" }}>✆ <a href={`tel:${t("footer.phone").replace(/\s/g, '')}`}>{t("footer.phone")}</a></span></li>
              <li><span style={{ unicodeBidi: "plaintext" }}>✆ <a href={`tel:${t("footer.phone2").replace(/\s/g, '')}`}>{t("footer.phone2")}</a></span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
