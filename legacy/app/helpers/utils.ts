export class Utils {
    constructor() {}
    static wrappText(element: HTMLElement, tagName: string = 'span', wrappingClass: string = 'wrapped'): WrappedText {
        const tagRegExp = /<\/?[a-z,\-_,\s,0-9,=,"]{1,}\/?>/g;
        const originHTML = element.innerHTML.trim();
        let innerHTML = originHTML;
        const str = innerHTML.split(tagRegExp);
        str.forEach((substr: string) => {
            const wrappedLetters = Array.prototype.map.call(substr, (char: string) => {
                if (char === ' ') {
                    return char;
                }
                return this.wrapLetter(char, tagName, wrappingClass);
            }).join('');
            innerHTML = innerHTML.replace(substr, wrappedLetters);
        });
        return {
            originalText: originHTML,
            wrappedText: innerHTML
        };
    }
    static wrapLetter(char: string, tagName: string, className: string) {
        return `<${tagName} class="${className}">${char}</${tagName}>`;
    }
}

export interface WrappedText {
    originalText: string;
    wrappedText: string;
}
