import ProductsList from '@/entities/ProductsList/ui/ProductsList'
import DescriptionInPage from '@/widgets/DescriptionInPage/ui/DescriptionInPage'
import HeadImageSection from '@/widgets/HeadImageSection/ui/HeadImageSection'
import { PrismaClient, productItem } from '@prisma/client'

const aboutDescriptionParagraph: string[] = [
	'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
	'Afraid at highly months do things on at. Situation',
	'recommend objection do intention',
	'so questions.',
	'As greatly removed calling pleased improve an.',
	'Last ask him cold feel',
	'met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
]

export default async function ourCoffee() {
	const prisma = new PrismaClient()
	const data:productItem[] = await prisma.productItem.findMany();

	return (
		<>
			<HeadImageSection title='Our Coffee' className='bg-coffeeShop' />
			<DescriptionInPage
				title='About our beans'
				src='/logo-with-line-black.svg'
				alt='logo-with-line-black'
				descriptions={aboutDescriptionParagraph}
				image='/girl.png'
				imageAlt = 'girl'
				imageWidth = {350}
				imageHeight = {400}
				blockInPage = 'yes'
				isLine = 'yes'
			/>

			<ProductsList data={data} typeProduct='normal'/>
			
		</>
	)
}
