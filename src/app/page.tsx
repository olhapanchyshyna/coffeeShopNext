import DescriptionBlock from '@/entities/DescriptionBlock/ui/DescriptionBlock'
import BestProducts from '@/widgets/BestProducts/ui/BestProducts'
import IntroMain from '@/widgets/IntroMain/ui/IntroMain'

const aboutDescriptionParagraph: string[] = [
	'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
	'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.',
]

export default function Home() {
	return (
		<>
			<IntroMain />
			<DescriptionBlock
				title='About Us'
				src='/logo-with-line-black.svg'
				alt='logo-with-line-black'
				descriptions={aboutDescriptionParagraph}
				blockInPage = 'no'
			/>
			<BestProducts />
		</>
	)
}
