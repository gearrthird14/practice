import React, { useState, useEffect} from 'react';
import classNames from 'classnames';
import { venueList } from '../api/venue';
// Styles
import styles from './secondVenue.module.scss';

const SecondVenue = (props) => {
  const {
    current,
    setCurrent,
    showNav,
    setShowNav,
  } = props;
  const secondVenueHandler = (item) => {
    setCurrent(item.key)
    setShowNav(true)
    console.log('@@@@@', current)
  }
  return (
    <>
      <div className={styles.main_Container}>
        <div className={styles.SecondVenue}>
          {venueList?.map((item, i) => (
            <div 
              key={i} className={styles.SecondVenueList}
              onMouseEnter={() => secondVenueHandler(item)}
              onMouseLeave={() => setShowNav(false)}
            >
              <div className={styles.SecondVenueNames}>
                {item.Icon}{item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SecondVenue