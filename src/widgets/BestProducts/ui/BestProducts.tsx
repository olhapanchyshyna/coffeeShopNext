import ProductsList from '@/entities/ProductsList/ui/ProductsList'
import { PrismaClient, productItem } from '@prisma/client'

export default async function BestProducts() {
	const prisma = new PrismaClient()
	const data: productItem[] = await prisma.productItem.findMany()

	return (
		<section className="bg-[url('/best-product-bg.png')] pt-[80px] pb-[110px]">
			<h2 className='text-center text-[24px]'>Our best</h2>
			<ProductsList data={data} typeProduct='best'/>
		</section>
	)
}
