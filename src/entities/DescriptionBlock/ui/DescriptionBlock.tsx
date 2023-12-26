import Image from 'next/image'
import { propsAboutDescription } from '../types/types'
import cn from 'classnames'

export default function DescriptionBlock({title,src,alt,descriptions,blockInPage}: propsAboutDescription) {
  return (
    <section className={cn('flex flex-col items-center justify-center  ', {
      ['max-w-[590px]']: blockInPage === 'no',
      ['max-w-[350px]']: blockInPage === 'yes',
      ['m-auto']: blockInPage === 'no',
      ['pt-[80px]']: blockInPage === 'no',
      ['pb-[100px]']: blockInPage === 'no',
      ['px-[0px]']: blockInPage === 'yes'
    }) }
    >
        <h2 className='text-[24px] mb-[20px]'>{title}</h2>
        <Image src={src} width={200} height={30} alt={alt}/>
        <div className='mt-[40px]'>
            {descriptions.map((description,i) =>{
                return <p key={i} className='text-center text-[14px] first:mb-[20px]'>{description}<br/></p>
            })}
        </div>
    </section>
  )
}
