
import { Separator } from '@/shared/ui/separator'
import Image from 'next/image'
import { propsAboutPage } from '../model/types'
import { DescriptionBlock } from '@/entities/DescriptionBlock'

export function DescriptionInPage({
	title = 'нет данных',
	src = 'нет данных',
	alt = 'нет данных',
	descriptions = ['нет данных'],
	image = 'нет данных',
	imageAlt = 'нет данных',
	imageWidth,
	imageHeight,
	blockInPage = 'yes',
	isLine = 'yes',
	aboutProduct = 'no',
	country,
	price
}: propsAboutPage) {
	return (
		<section className='max-w-[1000px] m-auto pt-[70px] pb-[60px] justify-around max-[1200px]:pt-[50px] max-[920px]:pb-[40px] max-[570px]:max-w-[370px]'>
			<div className='flex justify-around mb-[57px] max-[920px]:mb-[37px] max-[570px]:flex-col max-[570px]:items-center '>
				<Image
					src={`/${image}`}
					alt={imageAlt}
					width={imageWidth}
					height={imageHeight}
					className='max-[1200px]:w-[300px] max-[1200px]:h-[350px] max-[700px]:w-[250px] max-[700px]:h-[280px] max-[570px]:order-2'
				/>
				<DescriptionBlock
					title={title}
					src={src}
					alt={alt}
					descriptions={descriptions}
					blockInPage={blockInPage}
					aboutProduct={aboutProduct}
					country={country}
					price={price}
				/>
			</div>

			{isLine === 'yes' && (
				<Separator className='w-[240px] h-[1px] bg-black m-auto max-[570px]:hidden' />
			)}
		</section>
	)
}
