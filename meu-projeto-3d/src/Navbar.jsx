import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import './Navbar.scss' 

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const { t, i18n } = useTranslation();

  const timeoutRef = useRef(null);
  const alternarMenu = () => setMenuAberto(!menuAberto);
  const mudarIdioma = (lng) => i18n.changeLanguage(lng);

  const subItensTrabalhos = Array.from(
    { length: 10 },
    (_, i) => `item${i + 1}`,
  );
  //  Funções robustas para controlar a entrada e saída do mouse com delay de tolerância
  const abrirDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownAberto(true)
  }

  const fecharDropdown = () => {
    // Dá 200 milissegundos de tolerância para o usuário mover o mouse até a caixa
    timeoutRef.current = setTimeout(() => {
      setDropdownAberto(false)
    }, 200)
  }

  return (
    <nav className="navbar">
      {/* GRUPO DA ESQUERDA: NOME + IDIOMAS ABAIXO */}
      <div className="nav-brand-group">
        <a href="/" className="nav-logo-text">
          TIAGO FAZITO
        </a>

        <div className="lang-switcher">
          <button
            className={i18n.language.startsWith("pt") ? "active" : ""}
            onClick={() => mudarIdioma("pt")}
          >
            PT
          </button>
          <button
            className={i18n.language.startsWith("fr") ? "active" : ""}
            onClick={() => mudarIdioma("fr")}
          >
            FR
          </button>
          <button
            className={i18n.language.startsWith("en") ? "active" : ""}
            onClick={() => mudarIdioma("en")}
          >
            EN
          </button>
        </div>
      </div>

      {/* BOTÃO BURGER (MOBILE) */}
      <button className="menu-burger-btn" onClick={alternarMenu}>
        {menuAberto ? "✕" : "☰"}
      </button>

      {/* LINKS DA DIREITA */}
      <div className={`nav-links ${menuAberto ? "mobile-aberto" : ""}`}>
        <div
          className="dropdown-container"
          onMouseEnter={abrirDropdown}
          onMouseLeave={fecharDropdown}
        >
          <button className="dropdown-trigger-btn">
            {t("menu.works.main")} <span className="arrow-icon">▼</span>
          </button>

          <div className={`dropdown-menu ${dropdownAberto ? "show" : ""}`}>
            {subItensTrabalhos.map((itemKey) => (
              <a
                key={itemKey}
                href={`#${itemKey}`}
                onClick={() => {
                  setMenuAberto(false);
                  setDropdownAberto(false);
                }}
              >
                {t(`menu.works.${itemKey}`)}
              </a>
            ))}
          </div>
        </div>

        <a href="#exposicoes" onClick={() => setMenuAberto(false)}>
          {t("menu.exhibitions")}
        </a>
        <a href="#bio" onClick={() => setMenuAberto(false)}>
          {t("menu.bio")}
        </a>
        <a href="#textos" onClick={() => setMenuAberto(false)}>
          {t("menu.texts")}
        </a>
        <a
          href="#contato"
          className="nav-btn-destaque"
          onClick={() => setMenuAberto(false)}
        >
          {t("menu.contact")}
        </a>
      </div>
    </nav>
  );
}
