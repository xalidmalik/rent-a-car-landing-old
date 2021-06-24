import { useSpring } from "react-spring";

export const HeroFromTo = useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  delay: 400
});
