
import { ProductsList } from '@/entities/ProductsList'
import { getProducts } from '@/shared/api/getProducts'

export async function BestProducts() {
	const data = await getProducts()

	return (
		<section className="bg-[url('/best-product-bg.png')] pt-[80px] pb-[90px]">
			<h2 className='text-center text-[24px] mb-[40px]'>Our best</h2>
			<ProductsList data={data} typeProduct='best' />
		</section>
	)
}
