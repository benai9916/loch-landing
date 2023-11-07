import { useEffect, useRef } from "react";

export const useDrag = () => {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", handleMousedown);
      sliderRef.addEventListener("mouseleave", handleMouseleave);
      sliderRef.addEventListener("mouseup", handleMouseleave);
      sliderRef.addEventListener("mousemove", handleMousemove);

      sliderRef.addEventListener("touchstart", handleMousedown);
      sliderRef.addEventListener("touchmove", handleMousemove);

      return () => {
        sliderRef.removeEventListener("mousedown", handleMousedown);
        sliderRef.removeEventListener("mouseleave", handleMouseleave);
        sliderRef.removeEventListener("mouseup", handleMouseleave);
        sliderRef.removeEventListener("mousemove", handleMousemove);
        sliderRef.removeEventListener("touchstart", handleMousedown);
        sliderRef.removeEventListener("touchmove", handleMousemove);
      };
    }
  }, []);

  const handleMousedown = (e) => {
    isDown.current = true;
    const pageX = e.pageX || e.changedTouches?.[0]?.pageX;
    startX.current = pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  };

  const handleMouseleave = () => {
    isDown.current = false;
  };

  function handleMousemove(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const pageX = e.pageX || e.changedTouches?.[0]?.pageX;
    const x = pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return slider
}
