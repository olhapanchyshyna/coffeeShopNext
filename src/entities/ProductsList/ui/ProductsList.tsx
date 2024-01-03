import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/shared/ui/card'
import { productItem } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export function ProductsList({
	data,
	typeProduct,
}: {
	data: productItem[]
	typeProduct: string
}) {
	return (
		<div className='grid mb-[20px] grid-cols-[repeat(3,minmax(220px,240px))] gap-[70px] items-center justify-center max-[825px]:gap-[30px] max-[825px]:grid-cols-[repeat(3,minmax(180px,200px))] max-[680px]:grid-cols-[repeat(1,minmax(180px,200px))]'>
			{data.map(({ src, alt, title, price, country, type, slug }, i) => (
				<>
					{typeProduct === type ? (
						<Link href={`/ourCoffee/${slug}`}>
							<Card
								key={i}
								className='flex flex-col max-w-[240px] bg-slate-50/60 px-[25px] py-[25px] max-[825px]:px-[15px] shadow-xl hover:scale-105 transition'

							>
								<CardHeader className='p-0'>
									<Image
										className='h-[130px] m-auto max-[825px]:h-[110px] max-[825px]:w-[140px]'
										src={`/${src}`}
										width={167}
										height={130}
										alt={alt}
									/>
								</CardHeader>
								<CardContent className='p-0'>
									<CardDescription className='p-0 text-[14px] mt-[10px] text-end text-slate-950  max-[825px]:text-[12px]'>
										{title}
									</CardDescription>
									{typeProduct === 'normal' ? (
										<CardDescription className='p-0 text-[14px] mt-[10px] text-end text-slate-950 max-[825px]:text-[12px]'>
											{country}
										</CardDescription>
									) : null}
								</CardContent>
								<CardFooter className='flex justify-end p-0 mt-[10px]'>
									{price}
								</CardFooter>
							</Card>
						</Link>
					) : null}
				</>
			))}
		</div>
	)
}
