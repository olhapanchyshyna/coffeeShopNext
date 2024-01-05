import { productItem } from '@prisma/client'
import { create } from 'zustand'

export type typeProductsFilter = {
	filteredProducts: productItem[]
	initProducts: productItem[]
	trim: string
	setFilteredProducts : (products: productItem[]) => void
	setInitProducts : (products: productItem[]) => void
	setTrim : (letters:string) => void
}

export const useProductsFilter = create<typeProductsFilter>((set) => ({
  filteredProducts: [],
	initProducts: [],
	trim: '',
  setFilteredProducts: (products) => set({filteredProducts: products}),
  setInitProducts: (products) => set({initProducts: products}),
	setTrim: (letters) => set({trim: letters})
}))
