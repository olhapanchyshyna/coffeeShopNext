import ProductsList from '@/entities/ProductsList/ui/ProductsList'
import { getPages } from '@/shared/api/getPages'
import { PrismaClient, productItem } from '@prisma/client'

export default async function BestProducts() {

	const data = await getPages();

	return (
		<section className="bg-[url('/best-product-bg.png')] pt-[80px] pb-[110px]">
			<h2 className='text-center text-[24px]'>Our best</h2>
			<ProductsList data={data} typeProduct='best'/>
		</section>
	)
}
