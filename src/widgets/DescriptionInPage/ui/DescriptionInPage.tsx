import DescriptionBlock from '@/entities/DescriptionBlock/ui/DescriptionBlock'
import { Separator } from '@/shared/ui/separator'
import Image from 'next/image'
import { propsAboutDescription } from '../types/types'

export default function DescriptionInPage({
	title,
	src,
	alt,
	descriptions,
	image,
	imageAlt,
	imageWidth,
	imageHeight,
	blockInPage,
	isLine,
}: propsAboutDescription) {
	return (
		<section className='max-w-[1000px] m-auto pt-[70px] pb-[60px] justify-around'>
			<div  className='flex justify-around mb-[57px]'>
				<Image
					src={image}
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
				/>
			</div>

			{isLine === 'yes' && (
				// <div className='w-[240px] h-[1px] bg-black'></div>
				<Separator className='w-[240px] h-[1px] bg-black m-auto' />
			)}
		</section>
	)
}
