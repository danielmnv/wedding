import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Import Swiper styles
import 'swiper/css';
import { useApp } from '../hooks/use-app';

export const Slider = ({}) => {
  const { slides } = useApp();

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
        <SwiperSlide className="card rounded-none bg-base-100 p-5" key={`slide-${idx}`}>
          <img src={`/photos/slideshow/${slide}`} alt={`Slide ${idx}`} width={384} height={0} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
