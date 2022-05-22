import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRadionStationData } from '../../redux/features/stationSlice';
import styles from '../../styles/RadioContainer.module.css'
import arrowLeft from '../../images/back-arrow.png'
import stationSwitch from '../../images/switch.png'
import According from '../According/According';

const RedioContainer = () => {

  const [clicked, setClicked] = useState("0");
  const [activeStation, setActiveStation] = useState('')

  //getting data from redux
  const dispatch = useDispatch()
  const stations = useSelector(state => state.stations.stations)
  useEffect(() => {
    dispatch(fetchRadionStationData())
  }, [dispatch])

  //according toggle function
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <a href="/"><img src={arrowLeft} alt="arrowLeft" /></a>
          <h1>STATIONS</h1>
          <a href="/"><img src={stationSwitch} alt="stationSwitch" /></a>
        </div>
        <div className={styles.body}>
          {
            stations.map((station, index) => <div
              className={styles.stations}
              key={station.id}>
              <According station={station}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                setActiveStation={setActiveStation}
              />
            </div>)
          }
        </div>
        <div className={styles.footer}>
          {
            activeStation && <>
              <p>Currently Playing</p>
              <h2>{activeStation}</h2></>
          }
        </div>
      </div>
    </div>
  );
};

export default RedioContainer;