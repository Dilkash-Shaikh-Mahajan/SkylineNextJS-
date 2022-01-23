import React from 'react';

const SingleNews = () => {
	return (
		<div>
			<div className='news my-4 hover:cursor-pointer'>
				<img
					src='https://secureservercdn.net/166.62.108.196/gz4.446.myftpupload.com/wp-content/uploads/2021/11/Advanced-Consulting-thm.jpg?time=1642678742'
					alt=''
				/>
				<h1 className='text-2xl font-medium mt-4 hover:text-blue-500'>
					SkyLine is now an AWS Advanced Consulting Partner
				</h1>
			</div>
		</div>
	);
};

export default SingleNews;
