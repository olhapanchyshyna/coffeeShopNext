export type propsAboutPage = {
    title: string | undefined
    src: string | undefined
    alt: string | undefined
    descriptions: string[] | undefined
    image: string | undefined
    imageAlt: string | undefined
    imageWidth: number
    imageHeight: number
    blockInPage?: 'yes'|'no'
    isLine: 'yes'|'no'
    aboutProduct?: 'yes'|'no'
    country?: string | undefined
    price?: string | undefined
}