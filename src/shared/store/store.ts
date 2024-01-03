import { productItem } from '@prisma/client'
import { create } from 'zustand'
// import {productItem} from 'schema.prisma'

export type typeProductsFilter = {
	filteredProducts: productItem[]
	initProducts: productItem[]
	setFilteredProducts : (products: productItem[]) => void
	setInitProducts : (products: productItem[]) => void
}

export const useProductsFilter = create<typeProductsFilter>((set) => ({
  filteredProducts: [],
	initProducts: [],
  setFilteredProducts: (products) => set({filteredProducts: products}),
  setInitProducts: (products) => set({initProducts: products})
}))
