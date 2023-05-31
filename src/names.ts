import { CSSNamingOrder, Properties } from "./props"

export function generateUniqueCSSName(props: Properties, i: number, classNames: string[], className = "") {

    const propNames = Array.from(props.keys())
    for (let i = 0, n = CSSNamingOrder.length, k = 0; i < n && (k < 2 || classNames.includes(className)) && k < 5; i++) {

        const order = CSSNamingOrder[i]
        const name = propNames.find(name => order.properties.includes(name))
        if (name) {
            
            k++
            if (order.preview)
                className += props.get(name) + "-"

            else if (order.replacement)
                className += order.replacement + "-"
        }
    }

    classNames.push(className)
        
    return `${className.slice(0, -1)}-${i+1}`
}