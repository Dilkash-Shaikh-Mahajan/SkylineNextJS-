import Image from 'next/image';
import React from 'react';

const EcoSystem = () => {
	return (
		<div className='my-8'>
			<h3 className='text-center text-3xl text-gray-800 font-medium lg:font-bold lg:text-5xl'>
				<span className='text-blue-500'>Our Partner</span> Ecosystem
			</h3>
			<p className='px-4 mt-4 text-center text-gray-400 text-xl'>
				Bringing together the best with our partner network to create a
				competitive advantage for your business.
			</p>
			<div className='mx-auto flex flex-col items-center text-center '>
				{/* <img
					className='w-1/2'
					src='?time=1642678742'
					alt='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/05/salesforce-2_2_11zon.jpg?time=1642678742'
				/> */}
				<div className='lg:flex my-4'>
					<div className='mx-10'>
						<Image
							src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/05/salesforce-2_2_11zon.jpg'
							width='120'
							height='120'
							className='ml-6'
							alt='company logo'
						/>
					</div>
					<Image
						src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/05/aws-1_1_11zon.jpg'
						width='120'
						height='120'
						alt='company logo'
					/>
				</div>
			</div>
		</div>
	);
};

export default EcoSystem;
