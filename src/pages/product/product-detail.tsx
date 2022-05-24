import sanityClient from '../../client';
import React, { useCallback, useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
	const { id } = useParams();

	const [productArray, setProductArray] = useState<any[]>([]);
    const [categoryArray, setCategoryArray] = useState<any[]>([])
    const [vendorArray, setVendorArray] = useState<any[]>([]);
    const [vendor, setVendor] = useState<any>(null)
	const [product, setProduct] = useState<any>(null);

	const fetchProducts = useCallback(async () => {
		const response = await sanityClient.fetch(`
		*[_type == "product" ]
		`);

		setProductArray(response);
	}, []);

    const fetchCategories = useCallback(async() => {
        const response = await sanityClient.fetch(`*[_type == 'category']{
            _id,
            _type,
            title,
            slug,
            parents
          }`);

        setCategoryArray(response);
    }, [])

    const fetchVendors = useCallback(async() => {
        const response = await sanityClient.fetch(`*[_type == 'vendor']{
            _id,
            logo,
            slug,
            title
          }`);

          setVendorArray(response);
    }, [])

	const processImage = (url: any): any => {
		const builder = imageUrlBuilder(sanityClient);
		return builder.image(url);
	};


	useEffect(() => {
		fetchProducts();
        fetchCategories();
        fetchVendors();

		if (!product) {
			setProduct(productArray.find((product) => product._id === id));

            // vendor = vendorArray?.find(x => x._id === product.vendor.Vendor._ref);
		}

        if(!vendor && vendorArray?.length > 0){
            setVendor(vendorArray?.find(x => x._id === product?.vendor?.Vendor?._ref))
        }
	}, [productArray]);


    // console.log(vendorArray, product, vendor);


	return (
		<>
			{product && vendor && (
				<div className='w-full mx-auto lg:w-[80%]'>
                    <div className='flex'>
                    <figure className="h-80 my-8 relative">
						<img
							className="h-full object-contain"
							src={processImage(product.productImage)}
							alt={product.item}
						/>
					</figure>

                    <article className='text-left ml-9 my-8 mr-8'>
                        <p className='text-4xl text-zinc-800'>{product.productTitle}</p>
                        <p className='text-zinc-700 text-2xl'>{vendor?.title}</p>
                        <p className='text-zinc-700 text-2xl'>{product.productColor}</p>
                        <p className='text-zinc-700 text-xl'>{product.productDescription}</p>
                        <p className='text-zinc-700 text-xl'>R{product.productPrice}</p>
                        
                        <div>
                        <p>Select a size: </p>

                        <div className='grid grid-cols-6 w-80'>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>2XL</span>
                        </div>
                        </div>

                        <div>
                            <p>Quantity:</p>
                            <div>
                                <span className='inline-flex items-center justify-center px-2 py-1 mr-2 text-xl font-bold leading-none text-zinc-500
                                 border-2 border-zinc-500 rounded-full'>-</span>
                                <span className='inline-flex items-center justify-center px-2 py-1 mr-2 text-xl font-bold leading-none rounded-full'>10</span>
                                <span className='inline-flex items-center justify-center px-2 py-1 mr-2 text-xl font-bold leading-none text-zinc-500
                                 border-2 border-zinc-500 rounded-full'>+</span>
                            </div>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-sm bg-amber-400 text-white hover:text-black hover:drop-shadow-lg hover:shadow-zinc-100'>Add to cart</button>
                        </div>
                    </article>
                    </div>

				</div>
			)}
		</>
	);
}

export default ProductDetailPage;
