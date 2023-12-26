import ProductsList from '@/entities/ProductsList/ui/ProductsList'
import { PrismaClient, bestProductItem } from '@prisma/client'

export default async function BestProducts() {
	const prisma = new PrismaClient()
	const data: bestProductItem[] = await prisma.bestProductItem.findMany()

	return (
		<section className="bg-[url('/best-product-bg.png')] pt-[80px] pb-[110px]">
			<h2 className='text-center text-[24px]'>Our best</h2>
			<ProductsList data={data} />
		</section>
	)
}
