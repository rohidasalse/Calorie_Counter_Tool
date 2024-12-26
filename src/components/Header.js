import React from "react";
import styles from "./Header.module.css";
import NavigationItem from "./NavigationItem";
// import LanguageSelector from "./LanguageSelector";
// import AuthButtons from "./AuthButtons";

const navigationItems = [
  { label: "Home", link: "/" },
  { label: "Appointment", link: "/appointment" },
  { label: "Services", link: "/services", className: styles.services },
  { label: "Medical Tests", link: "/medical-tests" },
  { label: "Facilities", link: "/facilities" },
  { label: "About", link: "/about" },
  { label: "Contact Us", link: "/contact" },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3566f31885c22adb41183cd10066b85b2bf0985b7358cfb77718e933b397afb0?apiKey=e05af274a4fb48d48b92d9ce2e75eebc&"
          alt="Company Logo"
          className={styles.logo}
        />
        <nav className={styles.navigationWrapper}>
          <ul className={styles.navigation}>
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </ul>
          {/* <LanguageSelector />
          <AuthButtons /> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
