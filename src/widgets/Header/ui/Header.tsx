import { Navbar } from '@/features/Navbar'
import { dataItemMenuType } from '@/shared/types/types'

const dataMenuItems: dataItemMenuType[] = [
	{ id: 1, name: 'Our coffee', src: '/ourCoffee' },
	{ id: 2, name: 'For your pleasure', src: '/pleasure' },
]

export function Header() {
	return (
		<header className='container max-w-6xl absolute left-1/2 transform -translate-x-1/2 top-0 bg-transparent py-[30px] max-[920px]:pt-[15px]'>
			<Navbar data={dataMenuItems} color='white' />
		</header>
	)
}
