import { useState } from 'react'
import { useTranslation } from 'react-i18next' // 1. Importa a ferramenta de tradução

export function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState(false)
  const { t, i18n } = useTranslation() // 2. "t" busca as palavras, "i18n" altera o idioma ativo

  const alternarMenu = () => setMenuAberto(!menuAberto)
  
  // Função que altera o idioma dinamicamente ao clicar nos seletores
  const mudarIdioma = (lng) => i18n.changeLanguage(lng)

  const subItensTrabalhos = Array.from({ length: 10 }, (_, i) => `item${i + 1}`)

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo-text">
        TIAGO FAZITO
      </a>

      {/* 3. BOTÕES SELETORES DE IDIOMA */}
      <div className="lang-switcher">
        <button className={i18n.language.startsWith('pt') ? 'active' : ''} onClick={() => mudarIdioma('pt')}>PT</button>
        <button className={i18n.language.startsWith('fr') ? 'active' : ''} onClick={() => mudarIdioma('fr')}>FR</button>
        <button className={i18n.language.startsWith('en') ? 'active' : ''} onClick={() => mudarIdioma('en')}>EN</button>
      </div>

      <button className="menu-burger-btn" onClick={alternarMenu}>
        {menuAberto ? '✕' : '☰'}
      </button>

      {/* 4. LINKS TRADUZIDOS DINAMICAMENTE USANDO {t('chave')} */}
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
