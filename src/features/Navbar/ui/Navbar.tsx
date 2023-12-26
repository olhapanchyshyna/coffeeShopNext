import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import cn from 'classnames'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarPropsType } from '../types/types'

export default function Navbar({ data, color }: NavbarPropsType) {
	return (
		<nav className='w-[355px]'>
			<ul className='flex items-end justify-between text-[12px] max-[670px]:hidden'>
				<Link href='/'>
					{color === 'black' && (
						<Image
							src='/logo-black.svg'
							width={108}
							height={35}
							alt='logo-black'
						/>
					)}
					{color === 'white' && (
						<Image
							src='/logo-white.svg'
							width={108}
							height={35}
							alt='logo-white'
						/>
					)}
				</Link>
				{data.map(({ id, name, src }) => (
					<li
						key={id}
						className={cn('', {
							['text-slate-800']: color === 'black',
							['text-slate-100/70']: color === 'white',
						})}
					>
						<Link href={src}>{name}</Link>
					</li>
				))}
			</ul>
			<ul className='min-[671px]:hidden ml-[40px]'>
				<DropdownMenu>
					<DropdownMenuTrigger className='text-slate-50 hover:text-slate-300'><Menu /></DropdownMenuTrigger>
					<DropdownMenuContent className='bg-slate-100'>
						<DropdownMenuSeparator />
						<Link href='/'>
							<Image
								src='/logo-black.svg'
								width={108}
								height={35}
								alt='logo-black'

                                className='mb-[10px]'
							/>
						</Link>
						{data.map(({ id, name, src }) => (
							<li key={id} className='text-slate-800 list-none mb-[3px] '>
								<DropdownMenuItem><Link className='m-auto' href={src}>{name}</Link></DropdownMenuItem>
							</li>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</ul>
		</nav>
	)
}
