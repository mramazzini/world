import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ElementType,
} from "react";
import ReactDOM from "react-dom";

interface TooltipProps {
  element: ReactNode;
  children: ReactNode;
}

const TooltipBody: React.FC<TooltipProps> = ({ element, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY + 5, // Offset from the bottom of the element
      left: rect.left + window.scrollX,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!tooltipRef.current) return;
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    // Adjust position to avoid going off-screen
    setPosition((prev) => ({
      ...prev,
      left: Math.min(prev.left, window.innerWidth - tooltipRect.width - 10),
    }));
  }, [isHovered]);

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        {element}
      </div>
      {isHovered &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "white",
              padding: "8px",
              borderRadius: "4px",
              zIndex: 1000,
              whiteSpace: "nowrap",
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
};

export default TooltipBody;
