'use client'

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
import { usePathname } from 'next/navigation'
import { NavbarPropsType } from '../types/types'

export function Navbar({ data, color }: NavbarPropsType) {
	const pathname = usePathname()
	
	return (
		<nav className='w-[355px] max-[670px]:w-[320px]'>
			<ul className='flex items-end justify-between text-[12px] max-[670px]:hidden'>
				<Link href='/'>
					{color === 'black' && (
						<Image
							className={cn('p-[5px]', {
								['bg-yellow-700 rounded']: pathname === '/',
							})}
							src='/logo-black.svg'
							width={108}
							height={35}
							alt='logo-black'
						/>
					)}
					{color === 'white' && (
						<Image
							className={cn('p-[5px]', {
								['bg-yellow-700 rounded']: pathname === '/',
							})}
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
						className={cn('p-[5px]', {
							['text-slate-800']: color === 'black',
							['text-slate-100/90']: color === 'white',
							['bg-yellow-700 rounded']: pathname === src,
						})}
					>
						<Link href={src}>{name}</Link>
					</li>
				))}
			</ul>
			<ul className='min-[671px]:hidden ml-[30px] max-[671px]:max-w-[300px]'>
				<DropdownMenu>
					<DropdownMenuTrigger className='text-slate-50 hover:text-slate-300'>
						<Menu />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='bg-slate-100'>
						<DropdownMenuSeparator />
						<Link href='/'>
							<Image
								src='/logo-black-670px.svg'
								width={80}
								height={35}
								alt='logo-black'
								className='mb-[10px] m-auto'
							/>
						</Link>
						{data.map(({ id, name, src }) => (
							<li key={id} className='text-slate-800 list-none mb-[3px] '>
								<DropdownMenuItem>
									<Link className='m-auto text-[12px]' href={src}>
										{name}
									</Link>
								</DropdownMenuItem>
							</li>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</ul>
		</nav>
	)
}
