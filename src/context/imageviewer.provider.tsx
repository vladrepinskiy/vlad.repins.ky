import { createContext, useState, type ReactNode } from "react";

type ImageViewerContextType = {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  openViewer: (images: string[], initialIndex?: number) => void;
  closeViewer: () => void;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
};

export const ImageViewerContext = createContext<ImageViewerContextType>({
  isOpen: false,
  images: [],
  currentIndex: 0,
  openViewer: () => {},
  closeViewer: () => {},
  goToNext: () => {},
  goToPrevious: () => {},
  goToIndex: () => {},
});

export const ImageViewerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (newImages: string[], initialIndex = 0) => {
    setImages(newImages);
    setCurrentIndex(Math.min(initialIndex, newImages.length - 1));
    setIsOpen(true);
    // Prevent body scroll when viewer is open
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = "";
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <ImageViewerContext.Provider
      value={{
        isOpen,
        images,
        currentIndex,
        openViewer,
        closeViewer,
        goToNext,
        goToPrevious,
        goToIndex,
      }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
};
