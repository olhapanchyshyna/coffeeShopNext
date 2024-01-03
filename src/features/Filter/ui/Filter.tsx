'use client'

import { useProductsFilter } from '@/shared/store/store'
import { Button } from '@/shared/ui/button'

export function Filter() {

	const {initProducts, setFilteredProducts} = useProductsFilter()


	const onFilter = (country: string) => {
		const result = initProducts.filter(product => product.country === country)
		setFilteredProducts(result)
		
	}

	return (
		<div className='flex justify-between items-center max-w-[330px]'>
			<h3 className='text-[14px]'>Or filter</h3>
			<div>
				<Button onClick={() => onFilter('Brazil') } className='text-[12px] w-[75px] h-[30px] ml-[35px] bg-white hover:bg-slate-300 text-black shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.25)] rounded-none'>Brazil</Button>

				<Button onClick={() => onFilter("Kenya")} className='text-[12px] w-[75px] h-[30px] ml-[5px] bg-white hover:bg-slate-300 text-black shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.25)] rounded-none' >Kenya</Button>

				<Button onClick={() => onFilter("Columbia")} className='text-[12px] w-[75px] h-[30px] ml-[5px] bg-white hover:bg-slate-300 text-black shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.25)] rounded-none'>Columbia</Button>
			</div>
		</div>
	)
}
