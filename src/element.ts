import { CSSProperties, Properties } from "./props"


/** Get array of inline CSS properties */
export function getInlineCSS(container: Element, fix = "") {

    return Array.from(takeInlineCSS(container, fix))
}


/** Properties that belong to given element */
type Styling = Map<Element, Properties>

/** Get map of inline CSS properties */
function takeInlineCSS(container: Element, fix = "") {

    const inline: Styling = new Map()

    for (const property of CSSProperties) {

        const fullname = `${property}${fix ? "-" + fix : ""}`
        const collection = [...container.querySelectorAll(`[${fullname}]`)] as Element[]
        if (container.hasAttribute(`${fullname}`))
            collection.push(container)


        for (const element of collection) {

            let styles = inline.get(element)
            if (!styles) {

                styles = new Map()
                inline.set(element, styles)
            }

            styles.set(property, element.getAttribute(`${fullname}`) as string)
            element.removeAttribute(`${fullname}`)
        }
    }

    return inline
}
