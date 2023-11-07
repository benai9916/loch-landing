import React, { useState } from "react";
import style from "../assets/style.module.scss";

const NotifyBox = ({ image, heading, subheading, selects }) => {
  const [text, setText] = useState("");
  const handleFocuse = () => {
    setText("hello@loch.one");
  };
  const handleOnclick = () => {
    setText("David");
  };

  return (
    <div className={style.notify_box}>
      <div className={style.action}>
        <img src={image} alt={image} />
        {selects && <input type="checkbox" checked readOnly></input>}
        {!selects && <p className={style.action__save}>save</p>}
      </div>
      <div className={style.float_bottom}>
        {heading && <h2>{heading}</h2>}
        {subheading && <p>{subheading}</p>}
        {selects ? (
          <select>
            <option value="0">{selects}</option>
          </select>
        ) : (
          <input
            value={text}
            type="text"
            className={style.notify_text}
            onClick={handleOnclick}
            onMouseEnter={handleFocuse}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default NotifyBox;
