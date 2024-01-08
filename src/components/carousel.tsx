import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import styles from "@/styles/carousel.module.css";

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: String;
  children: React.ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ children, className }) => {
  const [selectedIndex, setSelctIndex] = useState(0);
  const [viewportRef, emablaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emablaApi) return;
    setSelctIndex(emablaApi.selectedScrollSnap());
  }, [emablaApi, setSelctIndex]);

  useEffect(() => {
    onSelect();
    emablaApi?.on("select", onSelect);
  }, [emablaApi, selectedIndex]);

  return (
    <CarouselContext.Provider value={{ embla: emablaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
