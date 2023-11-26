import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaChevronUp } from "react-icons/fa6";

function BackToTop() {
  const scrollBtn = useRef(null);
  const [position, setPosition] = useState({});

  useEffect(function () {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  useEffect(function () {
    window.addEventListener("scroll", () => {
      window.scrollY < 950
        ? (scrollBtn.current.style.display = "none")
        : (scrollBtn.current.style.display = "flex");
    });
  }, []);

  return (
    <button
      className="btn-secondary scroll-btn"
      ref={scrollBtn}
      onClick={() => setPosition({ top: 0, left: 0 })}
    >
      <FaChevronUp />
    </button>
  );
}

export default BackToTop;
