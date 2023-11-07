import { useEffect, useRef } from "react";
import Logo from "../assets/images/loch_logo.svg";
import style from "../assets/style.module.scss";
import { useDrag } from "../hook/useDrag";

const Box = ({ name, designation, quote }) => {
  return (
    <div className={style.box}>
      <div className={style.heading}>
        <h2>{name}</h2>
        <span>{designation}</span>
      </div>
      <p className={style.quote}>{quote}</p>
    </div>
  );
};

const Testimonial = () => {
  const slider = useDrag();

  return (
    <div className={style.testimonial}>
      <h2 className={style.mainHeading}>Testimonials</h2>
      <hr></hr>
      <div className={style.carousal}>
        <div className={style.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div ref={slider} className={style.dragable}>
          <Box
            name="Jack F"
            designation="Ex Blackrock PM"
            quote="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
          />
          <Box
            name="Yash P"
            designation="Research, 3poch Crypto Hedge Fund"
            quote="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
          />
          <Box
            name="Shiv S"
            designation="Co-Founder Magik Labs"
            quote="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
