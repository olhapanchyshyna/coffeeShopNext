export type dataItemMenuType = {
	id:number 
	name:string
	src: string
}

export type propsAboutDescription = {
	title: string | undefined
	src: string
	alt: string
	descriptions: string[]
	blockInPage?: 'yes'|'no'
	aboutProduct?: 'yes'|'no'
	country?: string | undefined
	price?: string | undefined
}

export type propsAboutPage = propsAboutDescription & {
	image: string | undefined
	imageAlt: string | undefined
	imageWidth: number
	imageHeight: number
	isLine: 'yes'|'no'
}
