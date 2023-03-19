import React from "react";
import type { MutableRefObject } from 'react'
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { height, width } from "@mui/system";


// sheen
export const SheenAnimation = ({animationRef, className}: {animationRef:React.RefObject<HTMLAnchorElement> | null; className:string}) => {
  const AnimationWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  `;
  const dampen = 40;
  const mouseX = useMotionValue(
  animationRef  && animationRef.current ? animationRef.current.clientWidth / 2 : 0
  );
  const mouseY = useMotionValue(
  animationRef  && animationRef.current ? animationRef.current.clientHeight / 2 : 0
  );
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
  if (!animationRef || !animationRef.current) return 0;
  const rect = animationRef.current.getBoundingClientRect();
  const newRotateX = newMouseY - rect.top - rect.height / 2;
  return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
  if (!animationRef || !animationRef.current) return 0;
  const rect = animationRef.current.getBoundingClientRect();
  const newRotateY = newMouseX - rect.left - rect.width / 2;
  return newRotateY / dampen;
  });
  const diagonalMovement = useTransform<number, number>(
  [rotateX, rotateY],
  ([newRotateX, newRotateY]) => {
    const position: number = newRotateX + newRotateY;
    return position;
  }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
  sheenPosition,
  [-250, 50, 250],
  [0, 0.2, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
  55deg,
  rgba(15, 15, 15, 0.2),
  rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
  rgba(15, 15, 15, 0.2))`;
  
  React.useEffect(() => {
  if (!animationRef || !animationRef.current) return;
  const handleMouseMove = (e: MouseEvent) => {

    animate(mouseX, e.clientX);
    animate(mouseY, e.clientY);
  };
    animationRef.current.addEventListener('mousemove', handleMouseMove);
  // cleanup
  return () => {
    if (!animationRef || !animationRef.current) return;
    animationRef.current.removeEventListener('mousemove', handleMouseMove);
  };
  }, []);

  return (
  <AnimationWrapper className={className} style={{ backgroundImage: sheenGradient }}>
  </AnimationWrapper>
  );
}

export const ScrollYAnimation = (ref?: React.RefObject<HTMLDivElement>): [ number, number, number] => {
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  const [middle, setMiddle] = React.useState(0)
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if(!ref || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = document.body.clientHeight;
    const pageHeight = document.documentElement.scrollHeight + windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    const offsetBottom = offsetTop + rect.height;
    setStart(offsetTop / pageHeight);
    setMiddle((offsetTop + ((offsetBottom - offsetTop) / 2)) / pageHeight);
    setEnd(pageHeight > offsetBottom ? offsetBottom / pageHeight : 100);

    // console.log({top: offsetTop, bottom: offsetBottom, height: pageHeight});
    // console.log((offsetTop ? offsetTop / pageHeight : 0) * 100);
    // console.log((offsetBottom / pageHeight) * 100);
    
    // const offsetTop = rect.top + scrollTop;
    // setStart(offsetTop ? offsetTop / document.body.clientHeight : 0);
    // setEnd((offsetTop + rect.height) / document.body.clientHeight);
  }, [windowSize]);

  React.useLayoutEffect(() => {
    if(!ref || !ref.current) return;
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [start, middle, end]
}