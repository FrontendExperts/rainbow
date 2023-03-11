export const MetaTitle = (newTitle) => {
    return (document.title = newTitle);
}
export const MetaDescription = desc => {
    const el = document.querySelector("meta[name='description']");
    el.setAttribute('content',desc)
}