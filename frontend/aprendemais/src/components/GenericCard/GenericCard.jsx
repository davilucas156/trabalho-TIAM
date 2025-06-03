// src/components/GenericCard/GenericCard.jsx
import styles from './GenericCard.module.css';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

export default function GenericCard({ title, subtitle, info, status, onClick, color }) {
  return (
<div
  className={styles.card}
  onClick={onClick}
  style={{
    backgroundColor: color,
    color: ['#ff4d4d', '#FFD93D'].includes(color) ? '#000' : '#fff',
  }}
>


      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {status === 'completed' && <FaCheckCircle className={styles.iconCompleted} />}
        {status === 'pending' && <FaClock className={styles.iconPending} />}
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.info}>{info}</p>
    </div>
  );
}
