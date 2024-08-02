import { Link } from "react-router-dom";
import "./index.css";
import Carousel from "react-bootstrap/Carousel";

const MainSlider = () => {
  const images = [
    {
      id: 1,
      src: "https://i.etsystatic.com/28262961/r/il/ec52eb/6128716914/il_794xN.6128716914_b4ly.jpg",
      alt: "First Slide",
    },
    {
      id: 2,
      src:'https://i.etsystatic.com/28262961/r/il/f96b2a/6176689835/il_794xN.6176689835_69y9.jpg',
      alt: "Second Slide",
    },
    {
      id: 3,
      src:'https://i.etsystatic.com/28262961/r/il/110688/6089495024/il_794xN.6089495024_ga9q.jpg',
      alt: "Third Slide",
    },
  ];

  return (
    <Carousel controls={true}>
      {images.map((imageSlide) => (
        <Carousel.Item key={imageSlide.id}>
          <Link to="/">
            <img
              src={imageSlide.src}
              className="slider-item-div"
              alt={imageSlide.alt}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainSlider;
