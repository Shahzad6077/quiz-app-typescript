import React, { useEffect, useRef } from "react";
import useAnimations from "../../Helpers/useAnimations";
import useIntersectionObserver from "./../../Hooks/useIntersection";




type Props = {
  animateTo: string;
  threshold?: number;
  config?: any;
  style?: any
}


const FadeAnimationBox: React.FC<Props> = ({
  animateTo,
  children,
  threshold,
  config,
  style,
}) => {

  const divRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, ref] = useIntersectionObserver({
    threshold,
    triggerOnce: true,
    elementRef: divRef
  });
  const { onFadeMove } = useAnimations();
  useEffect(() => {
    const currentRef = divRef?.current
    if (isVisible) {
      onFadeMove(currentRef, animateTo, config);
    }
  }, [isVisible, animateTo, config, divRef]);
  return (
    <div
      ref={divRef}
      style={{
        position: "relative",
        opacity: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

FadeAnimationBox.defaultProps = {
  animateTo: "left",
  threshold: 0.3,
  config: {},
  style: {},
};

export default FadeAnimationBox;
