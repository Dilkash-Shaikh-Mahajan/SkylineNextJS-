import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
SwiperCore.use([Autoplay, Pagination, Navigation]);
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
const Carousel = () => {
	return (
		<div className='my-24'>
			<h3 className='text-center text-3xl text-blue-500  font-medium lg:font-bold lg:text-5xl'>
				Clients
			</h3>
			<p className='px-4 mt-4 text-center text-gray-400 text-xl'>
				Take a look at the clients who placed their trust in us.
			</p>
			{/* Slick Carousel starts */}
			<div className='w-full mx-auto my-12 space-x-2'>
				<Swiper
					spaceBetween={50}
					slidesPerView={2}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					// navigation={true}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/07/Cognition24.jpg?time=1642678742'
							alt=''
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			{/* Slick Carousel Ends */}
		</div>
	);
};

export default Carousel;
