import { productItem } from '@prisma/client'

export type productListType = {
	data: productItem[]
	typeProduct: string
	filter?: 'no' | 'yes'
}