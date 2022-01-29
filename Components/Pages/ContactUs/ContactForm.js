import React from 'react';

const ContactForm = () => {
	return (
		<form>
			<div className='mb-6'>
				{/* <label
					htmlFor='email'
					className='text-sm font-medium text-gray-900 block mb-2'>
					Your email
				</label> */}
				<input
					type='text'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
					placeholder='First Name'
					required={true}
				/>
			</div>
			<div className='mb-6'>
				{/* <label
					htmlFor='password'
					className='text-sm font-medium text-gray-900 block mb-2'>
					Your password
				</label> */}
				<input
					type='text'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
					required=''
					placeholder='Last Name'
				/>
			</div>
			<div className='mb-6'>
				{/* <label
					htmlFor='email'
					className='text-sm font-medium text-gray-900 block mb-2'>
					Your email
				</label> */}
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
					placeholder='Email*'
					required=''
				/>
			</div>
			<div className='mb-6'>
				{/* <label
					htmlFor='password'
					className='text-sm font-medium text-gray-900 block mb-2'>
					Your password
				</label> */}
				<input
					type='text'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
					required=''
					placeholder='Company*'
				/>
			</div>
			<div className='mb-6'>
				{/* <label
					htmlFor='email'
					className='text-sm font-medium text-gray-900 block mb-2'>
					Your email
				</label> */}
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
					placeholder='name@flowbite.com'
					required=''
				/>
			</div>
			<div className='mb-6  w-full'>
				<div className='flex justify-center'>
					<div className='mb-3 w-full xl:w-96'>
						<select
							className='form-select  
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							aria-label='Default select example'>
							<option selected>Open this select menu</option>
							<option value='1'>One</option>
							<option value='2'>Two</option>
							<option value='3'>Three</option>
						</select>
					</div>
				</div>
			</div>
			<div className='mb-6  w-full'>
				<div className='flex justify-center'>
					<div className='mb-3 w-full xl:w-96'>
						<select
							className='form-select  
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							aria-label='Default select example'>
							<option selected>Open this select menu</option>
							<option value='1'>One</option>
							<option value='2'>Two</option>
							<option value='3'>Three</option>
						</select>
					</div>
				</div>
			</div>
			<button
				type='submit'
				className='text-white bg-blue-300 p-10 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-6 text-center'>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
