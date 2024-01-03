import React from 'react'

export function HeadImageSection({title, className}: {title:string, className:string}) {
	return (
		<section className={`${className} h-[260px] pt-[130px] bg-no-repeat bg-cover bg-center`}>
			<h1 className='text-[40px] text-slate-100 text-center'>{title}</h1>
		</section>
	)
}
