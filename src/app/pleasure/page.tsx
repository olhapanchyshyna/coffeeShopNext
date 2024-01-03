
import { ProductsList } from '@/entities/ProductsList'
import { getProducts } from '@/shared/api/getProducts'
import { DescriptionInPage } from '@/widgets/DescriptionInPage'
import { HeadImageSection } from '@/widgets/HeadImageSection'


const aboutDescriptionParagraph: string[] = [
	'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
	'Afraid at highly months do things on at. Situation',
	'recommend objection do intention',
	'so questions.',
	'As greatly removed calling pleased improve an.',
	'Last ask him cold feel',
	'met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
]

export default async function page() {
	const data = await getProducts()

	return (
		<>
			<HeadImageSection title='For your pleasure' className='bg-cupOfCocoa' />

			<DescriptionInPage
				title='About our goods'
				src='logo-with-line-black.svg'
				alt='logo-with-line-black'
				descriptions={aboutDescriptionParagraph}
				image='cup-of-coffee.png'
				imageAlt='cup-of-coffee'
				imageWidth={350}
				imageHeight={400}
				blockInPage='yes'
				isLine='yes'
			/>

			<ProductsList data={data} typeProduct='normal' />
		</>
	)
}
