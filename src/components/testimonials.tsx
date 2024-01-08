import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Natsusaka (showtime)">
        Natsusaka com from Taiwan. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Accusamus, ea tempore nihil quasi numquam error,
        dignissimos soluta harum ratione aperiam velit animi consequatur omnis
        hic laudantium temporibus enim vero minima.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Natsusaka (showtime)">
        Natsusaka com from Taiwan. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Accusamus, ea tempore nihil quasi numquam error,
        dignissimos soluta harum ratione aperiam velit animi consequatur omnis
        hic laudantium temporibus enim vero minima.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Natsusaka (showtime)">
        Natsusaka com from Taiwan. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Accusamus, ea tempore nihil quasi numquam error,
        dignissimos soluta harum ratione aperiam velit animi consequatur omnis
        hic laudantium temporibus enim vero minima.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Natsusaka (showtime)">
        Natsusaka com from Taiwan. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Accusamus, ea tempore nihil quasi numquam error,
        dignissimos soluta harum ratione aperiam velit animi consequatur omnis
        hic laudantium temporibus enim vero minima.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
