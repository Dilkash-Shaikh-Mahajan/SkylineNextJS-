import React from 'react';

const TestimonialOne = () => {
	return (
		<div className='bg-white rounded-xl shadow-lg text-justify p-5 mb-8'>
			<div className='flex'>
				<div className='TestImg'>
					<img
						className='w-14 h-14 rounded-full'
						src='https://dilkashshaikhmahajan.herokuapp.com/Images/Portfolio.jpg'
						alt=''
					/>
				</div>
				<div className='testInfo ml-6 mb-10 flex justify-center flex-col'>
					<h2 className='text-2xl text-center font-semibold'>
						Dilkash S Mahajan
					</h2>
					<p className='text-lg text-gray-400 font-semibold'>
						Designation
					</p>
				</div>
			</div>
			<p className='testInfo text-base text-gray-400  font-medium'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Asperiores maxime, perferendis voluptas dolor, nemo facere
				sapiente porro alias magni ad laudantium distinctio nulla minus
				unde earum est. Vero, harum tenetur?
			</p>
		</div>
	);
};

export default TestimonialOne;
