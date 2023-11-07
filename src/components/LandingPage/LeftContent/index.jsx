import React, { useState, useCallback, useEffect } from "react";
import styles from "../assets/style.module.scss";
import Bell from "../assets/images/bell.svg";
import Time from "../assets/images/time.svg";
import Barchat from "../assets/images/bar_chart.svg";
import MiniBell from "../assets/images/mini_bell.svg";
import Dashboard from "../assets/images/dashboard.png";
import Eye from "../assets/images/eye.svg";
import NotifyBox from "./NotifyBox";
import Testimonial from "../Testimonial";
import useScroll from "../hook/useScroll";
const LeftContent = () => {
  const yCordinate = useScroll();

  return (
    <div className={styles.leftcontent}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <img
            style={{ transform: `rotate(${yCordinate}deg)` }}
            src={Bell}
            alt="bell"
          />
          <h2 className={styles.heading}>
            Get notified when a highly correlated whale makes a move
          </h2>
          <p className={styles.subheading}>
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className={styles.right_notify}>
          <NotifyBox
            image={MiniBell}
            heading="We’ll be sending notifications to you here"
          />
          <NotifyBox
            image={Barchat}
            subheading="Notify me when any wallets
            move more than"
            selects="$1,000.00"
          />
          <NotifyBox
            image={Time}
            subheading="Notify me when any wallet dormant for"
            selects="> 30 days"
          />
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_img}>
          <img src={Dashboard} alt="Dashboard" />
        </div>
        <div className={styles.content}>
          <img src={Eye} alt="Eye" />
          <h2 className={styles.heading}>Watch what the whales are doing</h2>
          <p className={styles.subheading}>
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default LeftContent;
