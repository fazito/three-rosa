import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState(false)
  const { t, i18n } = useTranslation()

  const alternarMenu = () => setMenuAberto(!menuAberto)
  const mudarIdioma = (lng) => i18n.changeLanguage(lng)

  const subItensTrabalhos = Array.from({ length: 10 }, (_, i) => `item${i + 1}`)

  return (
    <nav className="navbar">
      
      {/* GRUPO DA ESQUERDA: NOME + IDIOMAS ABAIXO */}
      <div className="nav-brand-group">
        <a href="/" className="nav-logo-text">
          TIAGO FAZITO
        </a>
        
        <div className="lang-switcher">
          <button className={i18n.language.startsWith('pt') ? 'active' : ''} onClick={() => mudarIdioma('pt')}>PT</button>
          <button className={i18n.language.startsWith('fr') ? 'active' : ''} onClick={() => mudarIdioma('fr')}>FR</button>
          <button className={i18n.language.startsWith('en') ? 'active' : ''} onClick={() => mudarIdioma('en')}>EN</button>
        </div>
      </div>

      {/* BOTÃO BURGER (MOBILE) */}
      <button className="menu-burger-btn" onClick={alternarMenu}>
        {menuAberto ? '✕' : '☰'}
      </button>

      {/* LINKS DA DIREITA */}
      <div className={`nav-links ${menuAberto ? 'mobile-aberto' : ''}`}>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setDropdownAberto(true)}
          onMouseLeave={() => setDropdownAberto(false)}
        >
          <button className="dropdown-trigger-btn">
            {t('menu.works.main')} <span className="arrow-icon">▼</span>
          </button>
          
          <div className={`dropdown-menu ${dropdownAberto ? 'show' : ''}`}>
            {subItensTrabalhos.map((itemKey) => (
              <a 
                key={itemKey} 
                href={`#${itemKey}`} 
                onClick={() => { setMenuAberto(false); setDropdownAberto(false); }}
              >
                {t(`menu.works.${itemKey}`)}
              </a>
            ))}
          </div>
        </div>

        <a href="#exposicoes" onClick={() => setMenuAberto(false)}>{t('menu.exhibitions')}</a>
        <a href="#bio" onClick={() => setMenuAberto(false)}>{t('menu.bio')}</a>
        <a href="#textos" onClick={() => setMenuAberto(false)}>{t('menu.texts')}</a>
        <a href="#contato" className="nav-btn-destaque" onClick={() => setMenuAberto(false)}>{t('menu.contact')}</a>
      </div>
    </nav>
  )
}
