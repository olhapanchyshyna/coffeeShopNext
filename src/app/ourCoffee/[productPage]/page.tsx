import { getProduct } from '@/shared/api/getProduct'
import { getProducts } from '@/shared/api/getProducts'
import DescriptionInPage from '@/widgets/DescriptionInPage/ui/DescriptionInPage'
import HeadImageSection from '@/widgets/HeadImageSection/ui/HeadImageSection'


const aboutDescriptionParagraph: string[] = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
]


export async function generateStaticParams() {
	const data = await getProducts()

	const path = data.map(item => {
		return {
			productPage: item.slug,
		}
	})

	return path
}

export default async function Page({ params }: { params: {productPage:string} }) {
	const dataProduct = await getProduct(params.productPage)
	
	return (
		<>
			<HeadImageSection title='Our Coffee' className='bg-coffeeShop' />
			<DescriptionInPage
				title={dataProduct?.title}
				src='logo-with-line-black.svg'
				alt='logo-with-line-black'
				descriptions={aboutDescriptionParagraph}
				image='aromisto.png'
				imageAlt='aromisto'
				imageWidth={450}
				imageHeight={350}
				isLine='no'
				aboutProduct='yes'
				country={dataProduct?.country}
				price={dataProduct?.price}
			/>
		</>
	)
}
