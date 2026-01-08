import { useContext } from "react";
import { ImageViewerContext } from "../context/imageviewer.provider";

export const useImageViewer = () => {
  return useContext(ImageViewerContext);
};
