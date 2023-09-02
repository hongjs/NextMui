'use client';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box } from '@mui/material';
import { Grid, Pagination } from 'swiper/modules';

const Test = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Swiper
        wrapperClass="swiper-wrapper"
        slidesPerView={1}
        grid={{
          rows: 6,
          fill: 'row',
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     spaceBetween: 50,
        //     grid: {
        //       rows: 3,
        //       fill: 'row',
        //     },
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 3,
        //     spaceBetween: 50,
        //     grid: {
        //       rows: 2,
        //       fill: 'row',
        //     },
        //   },
        // }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
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
