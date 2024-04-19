import Carousel from "react-material-ui-carousel";
import SliderItem from "./SliderItem";

import { getImages } from '../helpers/sliderData'

const Slider = () => {
  const images = getImages()
  return (
    <Carousel>
      {images.map((item) => (
        <SliderItem key={item.id} src={item.image} />
      ))}
    </Carousel>
  );
};

export default Slider;
