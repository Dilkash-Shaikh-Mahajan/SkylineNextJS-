/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import Breadcrumb from '../Components/Common/Breadcrumb/Breadcrumb';
import ContactForm from '../Components/Pages/ContactUs/ContactForm';

const Contact = () => {
	return (
		<div className='container mx-auto px-4 lg:container lg:mx-auto lg:container lg:px-36 font-Inter'>
			{/* <h1>Contact Us</h1> */}
			<Breadcrumb />

			<h1>Ready to Talks</h1>
			<p>
				We’d love to hear from you and discuss how we can help your
				organization!
			</p>
			<ContactForm />

			<div className='text-center'>
				<h2>
					If you are interested in careers, Please use our career
					application here.
				</h2>
				<a
					// type='submit'
					className='text-white bg-blue-300 p-10 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-6 text-center'>
					Submit
				</a>
			</div>
		</div>
	);
};

export default Contact;
