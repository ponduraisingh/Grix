import React from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import styled from '@emotion/styled';


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