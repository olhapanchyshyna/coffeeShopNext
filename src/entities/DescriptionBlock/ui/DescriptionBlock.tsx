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
			className={cn('flex flex-col items-center justify-center max-[570px]:order-1 ', {
				['max-w-[590px]']: blockInPage === 'no',
				['max-w-[350px]']: blockInPage === 'yes',
				['max-[920px]:max-w-[500px]']: blockInPage === 'no',
				['max-[920px]:max-w-[290px]']: blockInPage === 'yes',
				['max-[570px]:max-w-[350px]']: blockInPage === 'yes',
				['m-auto']: blockInPage === 'no',
				['pt-[80px]']: blockInPage === 'no',
				['pb-[100px]']: blockInPage === 'no',
				['max-[570px]:px-[10px]']: blockInPage === 'no',
				['max-[570px]:mb-[30px]']: blockInPage === 'yes',
				['px-[0px]']: blockInPage === 'yes',
			})}
		>
			<h2 className='text-[24px] mb-[20px] max-[920px]:text-[20px]'>{title}</h2>
			<Image src={`/${src}`} width={200} height={30} alt={alt} className='max-[920px]:w-[150px] '/>

			<div className='mt-[40px] max-[1200px]:mt-[30px]'>
				{aboutProduct === 'no'
					? descriptions.map((description, i) => (
							<p key={i} className='text-center text-[14px] first:mb-[20px] max-[920px]:text-[12px] '>
								{description}
								<br />
							</p>
						))
					:
          <div>
            <div className='text-[14px] max-[920px]:text-[12px]'> <b className='mr-[10px] '>Country: </b>{country}</div> <br/>
            {descriptions.map((description, i) => (
							<p key={i} className='text-[14px] first:mb-[20px] max-[920px]:text-[12px]'>
								<b className='mr-[10px]'>Description: </b> {description}
								<br/><br/>
							</p>
						))}
            <div className='text-[24px] max-[920px]:text-[20px]'><b className='text-[14px] mr-[10px] max-[920px]:text-[12px]'>Price: </b>{price}</div>
          </div>
          }
        
			</div>
		</section>
	)
}
