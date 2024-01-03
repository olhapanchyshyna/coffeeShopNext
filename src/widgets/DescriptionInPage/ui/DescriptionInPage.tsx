
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
		<section className='max-w-[1000px] m-auto pt-[70px] pb-[60px] justify-around'>
			<div className='flex justify-around mb-[57px]'>
				<Image
					src={`/${image}`}
					alt={imageAlt}
					width={imageWidth}
					height={imageHeight}
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
				<Separator className='w-[240px] h-[1px] bg-black m-auto' />
			)}
		</section>
	)
}
