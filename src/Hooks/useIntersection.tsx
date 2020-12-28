import { useEffect, useRef, useState, RefObject } from "react";


interface Props {
  root?: Element | null;
  elementRef: RefObject<HTMLElement>;
  rootMargin?: string;
  triggerOnce: boolean;
  threshold: number | undefined;
}


const useIntersectionObserver = ({
  root = null,
  rootMargin = '',
  threshold = 0,
  triggerOnce = false,
  elementRef
}: Props) => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry>();
  // const [node, setNode] = useState<HTMLDivElement | null>(null);
  const isFirstTriggered = useRef(false);
  const observer = useRef(
    new window.IntersectionObserver(
      ([entry]) => {
        if (isFirstTriggered.current) {
          return;
        }
        updateEntry(entry);
        if (triggerOnce && entry.isIntersecting) {
          isFirstTriggered.current = true;
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )
  );

  useEffect(() => {
    const node = elementRef?.current // DOM Ref

    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (!node) {
      return;
    }
    if (node) {
      currentObserver.observe(node);
    };

    return () => currentObserver.disconnect();
  }, [elementRef]);

  const isVisible: boolean | undefined = entry?.isIntersecting;
  return [isVisible, entry];
};
export default useIntersectionObserver;
