import React, { useCallback, useEffect, useState } from 'react';
import { Status, LoadsheddingStage } from 'eskom-loadshedding-api';
import sanityClient from '../../client';
import imageUrlBuilder  from '@sanity/image-url';

export interface IProduct {
	productId: string;
	manufacturer: string;
	item: string;
	quantity: number;
	color: string;
	price: number;
	descripton: string;
	imageUrl: string;
	category: string;
	categoryType: string;
}

export interface IBasket {
	products: any[];
	basketQuantity: number;
	basketTotal: number;
}

function Home() {
	const[productArray,setProductArray] = useState<any[]>([]);

	const fetchProducts = useCallback(async() => {
		const response = await sanityClient.fetch(`
		*[_type == "product" ]
		`);

		setProductArray(response);
	}, []);

	const processImage = (url:any):any => {
		const builder = imageUrlBuilder(sanityClient);
		return builder.image(url)
	}

	useEffect(() => {
		fetchProducts();
	});

	return (
		<div className="w-full bg-zinc-100">
			<h1>Plug Majita Online Store</h1>
			<p>The place where we plug gents with the latest fashion</p>
			<section className="grid grid-cols-1 gap-6 w-8/12 md:grid-cols-3 md:w-10/12  lg:grid-cols-4 xl:grid-cols-5  sm:grid-cols-2 mx-auto">
				{productArray?.length > 0 && <>
				{productArray.map((item:any) => (
					<article
						key={item._id}
						className="max-h-[22rem] flex flex-col py-4 px-4 rounded-md bg-white shadow-zinc-600 drop-shadow-md  hover:shadow-lg cursor-pointer transition-shadow ease-in-out duration-300"
					>
						<figure className="h-[40%] relative">
							<img
								className="h-full mx-auto object-contain"
								src={processImage(item.productImage)}
								alt={item.item}
							/>

							<p className="absolute bottom-0 right-0 bg-black px-2 text-white bg-[rgba(0,0,0,0.5)]">
								R{item.productPrice}
							</p>
						</figure>
						<div className="flex flex-col h-[60%] relative">
							<div className="">
								<p className="font-light text-lg text-left text-zinc-800 line-clamp-2">
									{item.productTitle}
								</p>
								<p className="text-left font-thin text-zinc-500 text-sm line-clamp-1">
									By: 
								</p>
							</div>
							<div>
								<p className="line-clamp-4 text-sm text-zinc-600">
									{item.productDescription}
								</p>
							</div>
							<div className="h-full flex">
								<a className="self-end justify-self-start mx-auto px-4 py-1 rounded-sm bg-amber-400 text-white hover:text-black hover:drop-shadow-lg hover:shadow-zinc-100">
									Checkout
								</a>
							</div>
						</div>
					</article>
				))}
				</>}
			</section>
		</div>
	);
}

export default Home;
