import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <FaUserCircle size={24} />
      </div>
      <div className={styles.right}>
        <FaBell size={20} className={styles.icon} />
        <FaCog size={20} className={styles.icon} />
      </div>
    </div>
  );
};

export default TopBar;
