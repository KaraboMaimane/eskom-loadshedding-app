import React, { useEffect } from 'react';
import { Status, LoadsheddingStage } from 'eskom-loadshedding-api';

export interface IProduct {
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
	const mockData: IProduct[] = [
		{
			manufacturer: 'Smel Gud',
			item: 'Tobacco & Vanilla',
			quantity: 0,
			color: '',
			price: 150,
			descripton:
				'This is example text that will will serve as a placeholder for this product contained above. This is a great fragrance, spoil your man this fathers day now!',
			imageUrl: './ship.png',
			category: 'fragrances',
			categoryType: 'cologne',
		},
		{
			manufacturer: 'Drip',
			item: 'Casual shoe mesh blend',
			quantity: 0,
			color: '',
			price: 800,
			descripton:
				'This is the latest installment coming from South Africas very own Drip maker. This unisex sneaker will have heads turning as you rock them no doubt. Come on. You know you want to.',
			imageUrl: './ship.png',
			category: 'footwear',
			categoryType: 'shoes',
		},
		{
			manufacturer: 'Thia',
			item: 'Only the Brave genuine',
			quantity: 0,
			color: '',
			price: 100,
			descripton:
				'This fragrance is oil based and will last for weeks on your clothing you spray once and you smell it forever. You want to get this for your partner trust me.',
			imageUrl: './ship.png',
			category: 'perfumes',
			categoryType: 'cologne',
		},
		{
			manufacturer: 'Shezi',
			item: 'Ispoti Denim bucket hat',
			quantity: 0,
			color: '',
			price: 200,
			descripton:
				'This bucket hat is a must buy for anyone who loves i jean to jean. Add this to your arsenal and you wont regret it trust me.',
			imageUrl: './ship.png',
			category: 'clothing',
			categoryType: 'hats',
		},
		{
			manufacturer: 'Tshepo',
			item: 'Jeans by Tshepo',
			quantity: 0,
			color: '',
			price: 950,
			descripton:
				'These jeans were created by a local man in south africa who was aspiring to be like one of theses top designers',
			imageUrl: './ship.png',
			category: 'clothing',
			categoryType: 'jeans',
		},
    {
			manufacturer: 'Themba',
			item: 'Stragen beanies',
			quantity: 0,
			color: '',
			price: 250,
			descripton:
				'These jeans were created by a local man in south africa who was aspiring to be like one of theses top designers',
			imageUrl: './ship.png',
			category: 'clothing',
			categoryType: 'hats',
		},
	];

	return (
		<div className="w-full bg-gray-100">
			<h1>Plug Majita Online Store</h1>
			<p>The place where we connect gets with the latest fashion</p>
			<section className="grid grid-cols-1 gap-6 w-8/12 md:grid-cols-3 md:w-10/12  lg:grid-cols-4 xl:grid-cols-6  sm:grid-cols-2 mx-auto">
				{mockData.map((item, i) => (
					<article key={i} className="h-56 flex flex-col py-4 px-4 bg-white  shadow-slate-400 shadow-sm  hover:shadow-lg cursor-pointer transition-shadow ease-in-out duration-300">
						<figure className="h-20">
							<img
								className="h-full mx-auto object-contain"
								src={item.imageUrl}
								alt={item.item}
							/>
						</figure>
						<div className="">
							<div className="flex justify-between">
								<p>{item.item}</p>
								<p>{item.price}</p>
							</div>
							<div>
								<p className='line-clamp-3'>{item.descripton}</p>
							</div>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

export default Home;
