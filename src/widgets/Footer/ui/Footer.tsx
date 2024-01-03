import { Navbar } from '@/features/Navbar'
import { dataItemMenuType } from '@/shared/types/dataItemMenuType'
import Image from 'next/image'

const dataMenuItems: dataItemMenuType[] = [
	{ id: 1, name: 'Our coffee', src: '/ourCoffee' },
	{ id: 2, name: 'For your pleasure', src: '/pleasure' },
]

export function Footer() {
	return (
		<footer className='flex flex-col container m-auto justify-center items-center pt-[30px] pb-[20px]'>
			<Navbar data={dataMenuItems} color='black' />
			<Image
				className='mt-[30px] max-[670px]:mt-[0px]'
				src='/logo-with-line-black.svg'
				width={200}
				height={30}
				alt='logo-with-line-black'
			/>
		</footer>
	)
}
