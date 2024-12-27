import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Music2 from "@/components/Music2";

export default function BalloonApp() {
  interface Balloon {
    id: number;
    x: number;
    y: number;
    popped: boolean;
    color: string;
    photo: string;
    zIndex: number; // Add zIndex to track stacking order
  }

  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [screenHeight, setScreenHeight] = useState(0);
  const [zIndexCounter, setZIndexCounter] = useState(1); // Counter to dynamically assign zIndex
  const headerHeight = 350; // Adjust this to match the Navbar's height (px)

  const colors = [
    "radial-gradient(circle, rgba(220, 108, 132, 0.8), rgba(220, 20, 60, 0.9), rgba(139, 0, 0, 1))",
    "radial-gradient(circle, rgba(156, 216, 255, 0.8), rgba(60, 158, 255, 0.9), rgb(110, 110, 254))",
    "radial-gradient(circle, rgba(255, 255, 86, 0.8), rgba(249, 197, 38, 0.9), rgba(184, 134, 11, 1))",
    "radial-gradient(circle, rgba(75, 192, 171, 0.8), rgba(0, 255, 127, 0.9), rgba(0, 100, 0, 1))",
    "radial-gradient(circle, rgba(153, 102, 255, 0.8), rgba(138, 43, 226, 0.9), rgba(75, 0, 130, 1))",
    "radial-gradient(circle, rgba(255, 102, 237, 0.8), rgba(226, 43, 180, 0.9), rgb(130, 0, 106))",
  ];
  const photos = Array.from({ length: 34 }, (_, index) => `/images/img${index + 1}.png`); // Generate 34 photo paths

  // Helper function to generate a random index
  const getRandomIndex = (arrayLength: number) => Math.floor(Math.random() * arrayLength);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
    }

    // Generate 5 balloons with random positions, colors, and photos
    const initialBalloons = Array.from({ length: 8 }, (_, index) => ({
      id: index,
      x: Math.random() * 80 + 10, // Random x-axis position between 10% and 90%
      y: 0, // Initial y position
      popped: false,
      color: colors[getRandomIndex(colors.length)], // Random color
      photo: photos[getRandomIndex(photos.length)], // Random photo
      zIndex: 1, // Default zIndex
    }));
    setBalloons(initialBalloons);
  }, []);

  const handlePop = (id: number, event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setZIndexCounter((prev) => prev + 1); // Increment zIndexCounter
    setBalloons((prevBalloons) =>
      prevBalloons.map((balloon) =>
        balloon.id === id
          ? {
              ...balloon,
              popped: true,
              x: clientX, // Update x to the exact location
              y: clientY, // Update y to the exact location
              zIndex: zIndexCounter, // Assign the highest zIndex
            }
          : balloon
      )
    );
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(to bottom, #b3e5fc, #e1f5fe)",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Music2 />
      {balloons.map((balloon) =>
        !balloon.popped ? (
          <motion.div
            key={balloon.id}
            onClick={(event) => handlePop(balloon.id, event)}
            style={{
              position: "absolute",
              bottom: "0",
              left: `${balloon.x}%`,
              transform: "translateX(-50%)",
              cursor: "pointer",
            }}
            animate={{
              y: [0, -(screenHeight - headerHeight)], // Float upwards below the header
            }}
            transition={{
              duration: Math.random() * 3 + 4, // Randomize float duration
              repeat: Infinity,
            }}
          >
            {/* Balloon Body */}
            <div
              style={{
                width: "100px",
                height: "140px",
                background: balloon.color, // Use the balloon's assigned color
                borderRadius: "50%",
                position: "relative",
              }}
            />
            {/* Balloon String */}
            <div
              style={{
                width: "2px",
                height: "150px",
                background: "black",
                margin: "0 auto",
              }}
            />
          </motion.div>
        ) : (
          <img
            key={balloon.id}
            src={balloon.photo} // Use the balloon's assigned photo
            alt="Hidden Picture"
            style={{
              position: "absolute",
              top: `${balloon.y}px`,
              left: `${balloon.x}px`,
              transform: "translate(-50%, -50%)",
              width: "20%",
              zIndex: balloon.zIndex, // Use the dynamically updated zIndex
            }}
          />
        )
      )}
    </div>
  );
}
