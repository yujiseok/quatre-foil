import { IoChevronForward, IoChevronBack } from "react-icons/io5";

interface SlickBtnProps {
  currentSlide?: number;
  slideCount?: number;
  props?: object;
}

export const SlickArrowLeft = ({
  currentSlide,
  slideCount,
  ...props
}: SlickBtnProps) => (
  <IoChevronBack
    {...props}
    className={`slick-prev slick-arrow${
      currentSlide === 0 ? "slick-disabled" : ""
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === 0}
  />
);
export const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: SlickBtnProps) => (
  <IoChevronForward
    {...props}
    className={`slick-next slick-arrow${
      currentSlide === slideCount! - 1 ? "slick-disabled" : ""
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount! - 1}
  />
);
