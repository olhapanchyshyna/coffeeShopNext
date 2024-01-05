import { ProductsList } from '@/entities/ProductsList'
import { Filter } from '@/features/Filter'
import { Search } from '@/features/Search'
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

export default async function ourCoffee() {
	const data = await getProducts()

	return (
		<>
			<HeadImageSection title='Our Coffee' className='bg-coffeeShop' />
			<DescriptionInPage
				title='About our beans'
				src='logo-with-line-black.svg'
				alt='logo-with-line-black'
				descriptions={aboutDescriptionParagraph}
				image='girl.png'
				imageAlt='girl'
				imageWidth={350}
				imageHeight={400}
				blockInPage='yes'
				isLine='yes'
				aboutProduct='no'
			/>
			<div className='flex justify-between m-auto max-w-[800px] mb-[60px] max-[920px]:max-w-[670px] max-[700px]:flex-col max-[700px]:justify-center max-[700px]:max-w-[400px]'>
				<Search />
				<Filter />
			</div>

			<ProductsList data={data} typeProduct='normal' filter='yes' />
		</>
	)
}
