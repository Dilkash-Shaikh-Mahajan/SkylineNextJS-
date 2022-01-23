import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);
import 'swiper/css';
import TestimonialOne from './TestimonialOne';
const Testimonial = () => {
	return (
		<div className=' w-full pt-12 p-3 pr-4 '>
			<h3 className='text-center text-2xl text-black mb-12 font-medium lg:font-bold lg:text-5xl'>
				<span className='text-blue-500'>
					Don’t take our word for it
				</span>{' '}
				<span className='lg:block -mt-10'>
					<br />
				</span>
				listen to what our clients have to say
			</h3>

			<div className='w-{90%} mx-auto space-x-2 mb-3 py-6'>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					pagination={true}
					className='mySwiper mb-5'
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
							slidesPerView: 2,
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
					<div className='mb-4'>
						<SwiperSlide>
							<TestimonialOne />
						</SwiperSlide>
					</div>
					<SwiperSlide>
						<TestimonialOne />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialOne />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialOne />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialOne />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonial;
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'none', background: 'red' }}
			// onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'none' }}
			// onClick={onClick}
		/>
	);
}
