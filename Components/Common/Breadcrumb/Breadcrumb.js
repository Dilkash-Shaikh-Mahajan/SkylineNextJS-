import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
	return (
		<div className='breadcrumb mt-20'>
			<nav
				className='flex  text-blue-700   py-3 px-5 rounded-lg mb-4'
				aria-label='Breadcrumb'>
				<ol className='inline-flex items-center space-x-1 md:space-x-3'>
					<li className='inline-flex items-center'>
						<Link
							href='/'
							className='text-blue-700 hover:text-blue-900 inline-flex items-center'>
							Home
						</Link>
					</li>
					{/* <li>
							<div className='flex items-center'>
								<svg
									className='w-6 h-6 text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'></path>
								</svg>
								<a
									href='#'
									className='text-blue-700 hover:text-blue-900 ml-1 md:ml-2 text-sm font-medium'>
									Templates
								</a>
							</div>
						</li> */}
					<li aria-current='page'>
						<div className='flex items-center'>
							<svg
								className='w-6 h-6 text-blue-400'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clipRule='evenodd'></path>
							</svg>
							<span className='text-blue-400 ml-1 md:ml-2 text-sm font-medium'>
								Contact Us
							</span>
						</div>
					</li>
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumb;
