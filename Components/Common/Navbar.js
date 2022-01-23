const Navbar = () => {
	return (
		<div className='bg-white md:w-12/12 h-16 shadow-md flex justify-between items-center flex-col md:flex-row md:rounded md:m-3 lg:mx-auto lg:container lg:px-36'>
			<div className='flex justify-center items-center ml-3'>
				{/* <img
					className='w-10 mx-3'
					src='https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg'
					alt='logo tailwindcss'
				/> */}
				<h3 className='text-gray-700 font-semibold text-xl cursor-default py-2 md:py-0'>
					SkyLine CloudForce
				</h3>
			</div>
			<ul className='flex justify-evenly items-center w-full md:w-1/2 lg:w-1/3 bg-gray-100 md:bg-white mr-0 md:mr-5 py-2 md:py-0'>
				<li className='hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					Home
				</li>
				<li className='hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					About
				</li>
				<li className='hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					Services
				</li>
				<li className='hover:bg-green-400  rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					{/* <li> */}
					{/* <!-- Light mode --> */}
					<button
						className=' hover:bg-green-400 hover:text-white
  									  relative flex jutify-center items-center text-gray-700 rounded focus:outline-none focus:ring ring-gray-200 group
'>
						<p className='px-4'>Dropdown</p>
						<span className='border-l p-2 hover:bg-gray-100'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'></path>
							</svg>
						</span>
						<div
							className='
    absolute top-full
    hidden group-focus:block 
    min-w-full w-max 
    bg-gray-700 text-white 
    shadow-md mt-1 rounded
  '>
							<ul className='text-left border rounded'>
								<li className='px-4 py-1 hover:bg-gray-700 border-b'>
									menu list 1
								</li>
								<li className='px-4 py-1 hover:bg-gray-700 border-b'>
									menu list 2
								</li>
								<li className='px-4 py-1 hover:bg-gray-700 border-b'>
									menu list 3
								</li>
								<li className='px-4 py-1 hover:bg-gray-700 border-b'>
									menu list 4
								</li>
								<li className='px-4 py-1 hover:bg-gray-700'>
									menu list 5
								</li>
							</ul>
						</div>
					</button>
				</li>
				{/* <li className='hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					Portfolio
				</li>
				<li className='hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer'>
					Contact
				</li> */}
			</ul>
		</div>
	);
};

export default Navbar;
