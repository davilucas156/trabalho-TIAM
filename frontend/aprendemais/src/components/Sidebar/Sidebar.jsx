import { useState } from 'react';
import { FaBars, FaBook, FaTrophy } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button className={styles.toggleButton} onClick={() => setIsExpanded(!isExpanded)}>
        <FaBars />
      </button>

      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <FaBook />
          {isExpanded && <span>Quizzes</span>}
        </a>
        <a href="#" className={styles.navItem}>
          <FaTrophy />
          {isExpanded && <span>Ranking</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
