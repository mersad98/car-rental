import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

function SlideUp({ children }) {
  const [isVisible, setIsVisibile] = useState(false);

  const handleVisibility = (visiblity) => {
    if (visiblity) setIsVisibile(visiblity);
  };

  return (
    <ReactVisibilitySensor partialVisibility onChange={handleVisibility}>
      <div
        style={{
          transition: `all ${0.5}s ease-out`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(0)` : `translateY(${20}%)`,
        }}
      >
        {children}
      </div>
    </ReactVisibilitySensor>
  );
}

export default SlideUp;
