'use client'

import { useProductsFilter } from '@/shared/store/store'
import { Input } from '@/shared/ui/input'
import React, { useState } from 'react'

export function Search() {

	const { initProducts, filteredProducts, trim, setFilteredProducts, setTrim } = useProductsFilter()

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	
		const a = e.target.value
		setTrim(e.target.value)

		if(filteredProducts.length === 0){
			setFilteredProducts(initProducts.filter(product => product.title.includes(a)))
		}
		if(filteredProducts.length !== 0){
			setFilteredProducts(initProducts.filter(product => product.title.includes(a)))
		}
	}

	return (
		<div className='flex justify-between items-center max-w-[300px]'>
			<h3 className='text-[14px]'>Lookiing for</h3>
			<Input
				className='w-[180px] h-[30px] text-center text-[12px] rounded-[4px] text-slate-500 shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.25)] ml-[20px] '
				placeholder='start typing here...'
				value={trim}
				onChange={handleInput}
			/>
		</div>
	)
}
