
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
              <a href="https://www.facebook.com/ajiz.page.officielle" className="text-gray-300 hover:text-[#fd2929] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/ajiz_zarzis" className="text-gray-300 hover:text-[#fd2929] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z M21.3,9.7c-0.6,0-1.2,0.5-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2C22.4,10.2,21.9,9.7,21.3,9.7z M16,11.2c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C21,13.4,18.8,11.2,16,11.2z M16,19.3c-1.7,0-3.2-1.4-3.2-3.2c0-1.7,1.4-3.2,3.2-3.2c1.7,0,3.2,1.4,3.2,3.2C19.2,17.9,17.8,19.3,16,19.3z M20,6h-8c-3.3,0-6,2.7-6,6v8c0,3.3,2.7,6,6,6h8c3.3,0,6-2.7,6-6v-8C26,8.7,23.3,6,20,6z M24.1,20c0,2.3-1.9,4.1-4.1,4.1h-8c-2.3,0-4.1-1.9-4.1-4.1v-8c0-2.3,1.9-4.1,4.1-4.1h8c2.3,0,4.1,1.9,4.1,4.1V20z"
                  />
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
