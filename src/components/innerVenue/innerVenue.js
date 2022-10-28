import React, { useState } from 'react'
import classNames from 'classnames';
// Styles
import styles from './innerVenue.module.scss';

// Data
import { venueList } from '../../api/venue'

const InnerVenue = (props) => {

	const {
		current,
		setCurrent,
		showNav,
		setShowNav,
	} = props;

  return (
    <div className={styles.InnerVenueContainer}>
			{venueList?.map((item, index) => (
				<div key={index} className={classNames({
					[styles.innerVenueDefault]: true,
					[styles.innerVenue]: showNav && item.key === current
				})}>
						<div  className={styles.venueItemContent}>
							<div className={styles.leftContent}>
								<div className={styles.englishTitle}>
                  <h1>{item.name}</h1>
								</div>
                <div className={styles.description}>
                  <p>{item.descChinese}</p>
                </div>
                <div className={classNames ({
								[styles.venueBtnGrp]: true,
							})}>	
								{item?.data?.map((item1, i) => (
									<div key={i} className={classNames ({
										[styles.venueBtn]: true,
										[styles.animateee]: showNav && item.key === current,
									})}>
										<div className={styles.btnTitle}>
                      {item1}
                    </div>
									</div>
									))}
							</div>
							</div>
						</div>
				</div>
			))}
    </div>
  )
}

export default InnerVenue