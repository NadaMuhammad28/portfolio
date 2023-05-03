import options from "../../utils/particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useState } from "react";
import Loader from "../shared/Loader";

const Stars = () => {
  const [ispending, setIsPEnding] = useState(true);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setIsPEnding(false);
  }, []);
  console.log(ispending);
  return (
    <Particles
      id="tsparticles"
      style={{ position: "absolute", top: 0 }}
      params={options}
      init={particlesInit}
      detectTouch={false}
    />
  );
};

export default Stars;
