'use client';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box } from '@mui/material';
import { Pagination } from 'swiper/modules';

const Test = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Box
                sx={{ height: '150px', backgroundColor: '#eee', borderRadius: '15px', p: '32px' }}
              >{`Slide ${item}`}</Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Test;
