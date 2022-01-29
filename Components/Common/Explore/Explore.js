import React from 'react';

const Explore = () => {
	return (
		<div className='bg-white mt-10 py-4 px-6'>
			<h3 className='text-center text-3xl mb-8 text-blue-500 font-medium'>
				Explore
			</h3>
			<div className='grid gap-4 grid-cols-1 lg:grid-cols-3 '>
				<Card title='Blogs' />
				<Card title='eBooks & Whitepapers' />
				<Card title='Case Studies' />
			</div>
		</div>
	);
};
const Card = ({ title }) => {
	return (
		<div className='bg-white cursor-pointer w-full px-6 py-4 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden'>
			<img
				className='h-64 w-full object-cover object-center rounded-md'
				src='https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80'
				alt='card-image'
			/>

			<h3 className='font-bold text-gray-700 w-full text-center my-8  text-xl'>
				{title}
			</h3>
		</div>
	);
};
export default Explore;
