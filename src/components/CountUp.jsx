import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ value, duration = 1.6, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  const numericTarget = parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;

  useEffect(() => {
    if (!inView) return;

    let start = null;
    let frame;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * numericTarget));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(numericTarget);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default CountUp;
