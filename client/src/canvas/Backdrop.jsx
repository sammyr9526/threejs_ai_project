import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.34}
      rotation={[Math.PI / 2, -0.125, -0.05]}
      position={[-1.02, -0.2, -0.1]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.85}
        ambient={0.25}
        position={[4, 6, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
