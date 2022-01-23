import React from 'react';
import { GoLocation } from 'react-icons/go';

const Service = ({ icon, head }) => {
	return (
		<div className='bg-white text-center h-96 flex justify-center items-center flex-col space-y-14 p-6 py-10 hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden hover:bg-blue-600 hover:text-white hover:rounded-lg mt-4'>
			{/* <img src='' alt='' /> */}
			<div className='icon text-5xl'>{icon}</div>
			<h2 className='text-3xl font-semibold'>{head}</h2>
			<div className='flex '>
				<p>Discover Now &nbsp;</p>{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M17 8l4 4m0 0l-4 4m4-4H3'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Service;
