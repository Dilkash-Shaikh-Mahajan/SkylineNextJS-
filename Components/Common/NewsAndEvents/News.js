import React from 'react';
import SingleNews from './SingleNews';

const News = () => {
	return (
		<div className='bg-gray-50 py-4 px-4 text-center'>
			<h1 className='text-3xl text-blue-500 font-medium mb-5'>
				News And Events
			</h1>
			<div className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
				<SingleNews />
				<SingleNews />
				<SingleNews />
			</div>
		</div>
	);
};

export default News;
