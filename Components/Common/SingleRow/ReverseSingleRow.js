import Image from 'next/image';
import React from 'react';

const ReverseSingleRow = () => {
	return (
		<div className='container mx-auto bg-white justify-center items-center mt-32  w-full min-h-full'>
			<div className='grid lg:grid-cols-2'>
				<div className='mb-8'>
					<Image
						src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/05/slider_1_1_11zon-2-1_11zon_11zon.jpg'
						alt='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/05/slider_1_1_11zon-2-1_11zon_11zon.jpg'
						width='600'
						height='400'
					/>
				</div>
				<div className='px-6 lg:mt-4'>
					<p className='text-6xl font-bold mb-4'> Who We Are</p>
					<p className=' text-2xl font-medium '>
						<span className='text-blue-600 '>
							We are best defined by our appetite{' '}
						</span>
						to lead the world towards absolute business automation.
					</p>
					<p className='text-2xl text-gray-400 font-normal mt-7'>
						Being a Salesforce and AWS Consulting and Implementation
						Partner to some of the world’s leading organizations, we
						help you redefine your enterprise by bridging the gap
						between business solutions and technological execution.
					</p>
					<button className='bg-gradient-to-b from-indigo-500 to-indigo-700 my-4 text-xl text-white p-6 rounded-md'>
						Find Out More
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReverseSingleRow;
