import { styled } from "goober";
import { useEffect } from "react";
import { useImageViewer } from "../../hooks/useImageViewer";

export const ImageViewer = () => {
  const {
    isOpen,
    images,
    currentIndex,
    closeViewer,
    goToNext,
    goToPrevious,
    goToIndex,
  } = useImageViewer();

  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeViewer();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeViewer, goToNext, goToPrevious]);

  if (!isOpen || images.length === 0) return null;

  return (
    <Overlay onClick={closeViewer}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          closeViewer();
        }}
      >
        ✕
      </CloseButton>
      <NavButton
        $position="left"
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
      >
        ‹
      </NavButton>
      <ImageContainer onClick={(e) => e.stopPropagation()}>
        <MainImage src={currentImage} alt={`Image ${currentIndex + 1}`} />
      </ImageContainer>
      <NavButton
        $position="right"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
      >
        ›
      </NavButton>
      {images.length > 1 && (
        <ThumbnailContainer onClick={(e) => e.stopPropagation()}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              $isActive={index === currentIndex}
              onClick={(e) => {
                e.stopPropagation();
                goToIndex(index);
              }}
            />
          ))}
        </ThumbnailContainer>
      )}
    </Overlay>
  );
};

const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease-in-out;
  padding: 2rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CloseButton = styled("button")`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  z-index: 1001;

  &:hover {
    opacity: 0.7;
  }
`;

const ImageContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 90vw;
  max-height: 80vh;
`;

const MainImage = styled("img")`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const NavButton = styled("button")<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$position === "left" ? "left: 2rem;" : "right: 2rem;")}
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  line-height: 1;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const ThumbnailContainer = styled("div")`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  overflow: hidden;
  max-width: 100%;
  justify-content: center;
  margin-top: auto;
  flex-wrap: wrap;
`;

const Thumbnail = styled("img")<{ $isActive: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.6)};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
