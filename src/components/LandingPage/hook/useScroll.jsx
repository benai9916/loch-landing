import React, { useState, useCallback, useEffect } from "react";

const useScroll = () => {
  const [yCordinate, setYCordinate] = useState(window.scrollY);
  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      setYCordinate(window.scrollY);
    },
    [yCordinate]
  );
  useEffect(() => {
    setYCordinate(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return yCordinate;
};

export default useScroll;
