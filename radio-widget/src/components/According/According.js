import React from 'react';
import styles from '../../styles/According.module.css'
import plasIcon from '../../images/plus.png'
import minusIcon from '../../images/minus.png'

const According = ({ station, onToggle, active, setActiveStation }) => {
  const { name, chanel, image } = station

  if (active) {
    setActiveStation(name)
  }

  return (
    <div>
      <div className={styles.stationBox} onClick={onToggle}>
        <div className={active ? `${styles.panelImages} ${styles.open}` : styles.panelImages}>
          <img className={styles.icon} src={minusIcon} alt="minusIcon" />
          <img src={image} alt="" />
          <img className={styles.icon} src={plasIcon} alt="plasIcon" />
        </div>
        <div className={styles.info}>
          <h1>{name}</h1>
          <h2>{chanel}</h2>
        </div>
      </div>
    </div>
  );
};

export default According;