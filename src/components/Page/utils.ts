export const parseImgPath = (img: HTMLImageElement) => {
    const srcSet = img?.src.split('/');
    const length = srcSet?.length;
    const name = srcSet[length-1]?.split('.')?.[0]

    return name ? name : "";
}