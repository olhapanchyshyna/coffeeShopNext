'use client'
import { useProductsFilter } from '@/shared/store/store'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/shared/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { productListType } from '../model/types'

export function ProductsList({
	data,
	typeProduct,
	filter = 'no',
}: productListType) {
	const { filteredProducts, setInitProducts } = useProductsFilter()
	useEffect(() => setInitProducts(data), [data, setInitProducts])

	const resultData =
		filter === 'no' ? data : filteredProducts.length === 0 ? data : filteredProducts

	return (
		<div className='grid mb-[20px] grid-cols-[repeat(3,minmax(220px,240px))] gap-[70px] items-center justify-center max-[920px]:gap-[30px] max-[920px]:grid-cols-[repeat(3,minmax(180px,200px))] max-[680px]:grid-cols-[repeat(1,minmax(180px,200px))]'>
			{resultData.map(({ src, alt, title, price, country, type, slug }, i) => (
					typeProduct === type ? (
						<Link href={`/ourCoffee/${slug}`} key={i}>
							<Card
								className='flex flex-col max-w-[240px] bg-slate-50/60 px-[25px] py-[25px] max-[920px]:px-[15px] max-[920px]:max-w-[200px] max-[920px]:py-[20px] shadow-xl hover:scale-105 transition'
							>
								<CardHeader className='p-0'>
									<Image
										className='h-[130px] m-auto max-[920px]:h-[110px] max-[920px]:w-[140px]'
										src={`/${src}`}
										width={167}
										height={130}
										alt={alt}
									/>
								</CardHeader>
								<CardContent className='p-0'>
									<CardDescription className='p-0 text-[14px] mt-[10px] text-end text-slate-950 max-[920px]:text-[12px]'>
										{title}
									</CardDescription>
									{typeProduct === 'normal' ? (
										<CardDescription className='p-0 text-[14px] mt-[10px] text-end text-slate-950 max-[920px]:text-[12px]'>
											{country}
										</CardDescription>
									) : null}
								</CardContent>
								<CardFooter className='flex justify-end p-0 mt-[10px]'>
									{price}
								</CardFooter>
							</Card>
						</Link>
					) : null
			))}
		</div>
	)
}
