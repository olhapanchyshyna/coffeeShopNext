import { Input } from '@/shared/ui/input'
import React from 'react'

export default function Search() {
	return (
		<div className='flex justify-between items-center max-w-[300px]'>
			<h3 className='text-[14px]'>Lookiing for</h3>
			<Input className='w-[180px] h-[30px] text-center text-[12px] rounded-[4px] text-slate-200 shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.25)] ml-[20px] ' placeholder='start typing here...'/>
		</div>
	)
}
