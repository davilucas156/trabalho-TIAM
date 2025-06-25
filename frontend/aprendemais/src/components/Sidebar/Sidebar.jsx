import { useState } from 'react';
import { FaBars, FaBook, FaTrophy, FaUsers } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Pega o usuário do localStorage
  const usuarioLogado = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('usuarioLogado')) 
    : null;
  
  const tipoUsuario = usuarioLogado?.tipo?.toLowerCase();

  // Define links com base no tipo do usuário
  const links = tipoUsuario === 'p' ? [
    { href: '/homeProfessor', icon: <FaUsers />, label: 'Turmas' },
    // Pode adicionar outros links para professor aqui
  ] : [
    { href: '/home', icon: <FaBook />, label: 'Disciplinas' },
    { href: '/ranking', icon: <FaTrophy />, label: 'Ranking' },
  ];

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button className={styles.toggleButton} onClick={() => setIsExpanded(!isExpanded)}>
        <FaBars />
      </button>

      <nav className={styles.nav}>
        {links.map(({ href, icon, label }) => (
          <a key={href} href={href} className={styles.navItem}>
            {icon}
            {isExpanded && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
