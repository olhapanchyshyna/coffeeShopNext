import cn from 'classnames'
import Image from 'next/image'
import { propsAboutDescription } from '../model/types'

export function DescriptionBlock({
	title,
	src,
	alt,
	descriptions,
	blockInPage,
	aboutProduct='no',
  country,
  price
}: propsAboutDescription) {
	return (
		<section
			className={cn('flex flex-col items-center justify-center  ', {
				['max-w-[590px]']: blockInPage === 'no',
				['max-w-[350px]']: blockInPage === 'yes',
				['m-auto']: blockInPage === 'no',
				['pt-[80px]']: blockInPage === 'no',
				['pb-[100px]']: blockInPage === 'no',
				['px-[0px]']: blockInPage === 'yes',
			})}
		>
			<h2 className='text-[24px] mb-[20px]'>{title}</h2>
			<Image src={`/${src}`} width={200} height={30} alt={alt} />

			<div className='mt-[40px]'>
				{aboutProduct === 'no'
					? descriptions.map((description, i) => (
							<p key={i} className='text-center text-[14px] first:mb-[20px]'>
								{description}
								<br />
							</p>
						))
					:
          <div>
            <div className='text-[14px]'> <b className='mr-[10px]'>Country: </b>{country}</div> <br/>
            {descriptions.map((description, i) => (
							<p key={i} className='text-[14px] first:mb-[20px]'>
								<b className='mr-[10px]'>Description: </b> {description}
								<br/><br/>
							</p>
						))}
            <div className='text-[24px]'><b className='text-[14px] mr-[10px]'>Price: </b>{price}</div>
          </div>
          }
        
			</div>
		</section>
	)
}
