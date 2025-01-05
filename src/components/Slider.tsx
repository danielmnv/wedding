import { Swiper, SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Import Swiper styles
import 'swiper/css';

export const Slider = ({}) => {
  const slides = Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`);
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="w-72 h-[450px] md:w-96 md:h-[600px]"
      loop={true}
      centeredSlides={true}
      initialSlide={2}
      cardsEffect={{
        perSlideOffset: 60,
        perSlideRotate: 2,
      }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide className="card rounded-none bg-base-100 p-5" key={`slider-${idx}`}>
          <NextImage src={`/photos/slider/slide${idx + 1}.jpeg`} alt={`Slide ${idx}`} width={384} height={0} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
