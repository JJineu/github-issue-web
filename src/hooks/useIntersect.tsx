import { useCallback, useEffect, useRef } from 'react';

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);

  const checkIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer); // callback
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;
    // ref 렌더링 이후 oberve
    const observer = new IntersectionObserver(checkIntersect, options);
    observer.observe(ref.current);

    // 언마운트시 클린업
    return () => observer.disconnect();
  }, [ref, options, checkIntersect]);

  return ref;
};

export default useIntersect;
