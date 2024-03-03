export type _Card = {
    img : Image,
    title: Title,
    readMore : ReadMore,
    description: string
}
type Image = {
    href: string,
    src: string
}
type Title = {
    href: string,
    text: string;
}
type ReadMore = {
    href:string,
    text:string;
}