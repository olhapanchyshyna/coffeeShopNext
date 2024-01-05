import React from 'react'

export function HeadImageSection({title, className}: {title:string, className:string}) {
	return (
		<section className={`${className} h-[260px] pt-[130px] bg-no-repeat bg-cover bg-center max-[920px]:h-[210px] max-[700px]:h-[170px] max-[700px]:pt-[90px]`}>
			<h1 className='text-[40px] text-slate-100 text-center max-[920px]:text-[30px]'>{title}</h1>
		</section>
	)
}
