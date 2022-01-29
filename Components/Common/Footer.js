/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook2, ImLinkedin, ImTwitter } from 'react-icons/im';
const Footer = () => {
	return (
		<div className='pt-12 lg:mx-auto lg:container lg:px-36'>
			<footer id='footer' className='relative z-50 '>
				<div
					tabIndex='0'
					aria-label='footer'
					className='focus:outline-none border-gray-200 dark:border-gray-700 py-16 pb-6'>
					<div className='mx-auto lg:container px-4 xl:px-12 2xl:px-4'>
						<div className='w-full grid grid-cols-1 lg:gap-4 lg:grid-cols-3  lg:w-full mb-6 lg:mb-0 '>
							<div className='w-full px-6'>
								<p className='text-base mb-4 uppercase text-gray-800 font-bold'>
									Our Offices
								</p>
								<p className='text-base font-semibold text-gray-400'>
									Plot No. 19/20, Shesh Nagar
								</p>
								<p className='text-base font-semibold text-gray-400'>
									Kharabi Road,
								</p>
								<p className='text-base font-semibold text-gray-400'>
									Nagpur - 440009
								</p>
								<p className='text-base text-gray-400'>
									<span className='font-semibold'>
										Email Address
									</span>{' '}
									<a href='mailto:hr@skylinecloudforce.com'>
										hrmanager@skylinecloudforce.com
									</a>
								</p>
								<p className='text-base text-gray-400'>
									<span className='font-semibold'>
										Phone Number
									</span>{' '}
									<a href='tel:9579569323'>9579569323</a>
								</p>
							</div>
							<div className='w-full my-8 lg:my-0 px-6'>
								<p className='text-base mb-4 uppercase text-gray-800 font-bold'>
									Quick Links
								</p>
								<ul>
									<li>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Who We Are
										</a>
									</li>
									<li className='mt-6'>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Services
										</a>
									</li>
									<li className='mt-6'>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Case Studies
										</a>
									</li>
									<li className='mt-6'>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Contact Us
										</a>
									</li>
									<li className='mt-6'>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Careers
										</a>
									</li>
									<li className='mt-6'>
										<a
											className='focus:outline-none focus:underline text-base hover:underline lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 '
											href='javascript:void(0)'>
											Blog
										</a>
									</li>
								</ul>
							</div>
							<div className='w-full px-6'>
								<p className='text-base mb-4 uppercase text-gray-800 font-bold'>
									Follow us on :
								</p>
								<div className='flex spaces-x-4'>
									<div className='icon text-base hover:bg-blue-500 hover:text-white  text-gray-500 p-4 rounded-full border'>
										<ImFacebook2 />
									</div>
									<div className='icon text-base hover:bg-blue-500 hover:text-white ml-6 text-gray-500 p-4 rounded-full border'>
										<ImLinkedin />
									</div>
									<div className='icon text-base hover:bg-blue-500 hover:text-white ml-6 text-gray-500 p-4 rounded-full border'>
										<ImTwitter />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='py-4 pb-8 flex flex-col justify-center items-center'>
					<p
						tabIndex='0'
						className='focus:outline-none mt-6 text-base lg:text-sm leading-none text-gray-900'>
						2021 SkyLine CloudForce. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
