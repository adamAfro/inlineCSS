import { generateUniqueCSSName } from "./names"

/** Converts JS object to CSS string, modifies elements */
export function createCSS(target: { el: Element, props: Map <string, string> }, i: number, classNames: string[], prefix = "") {

    let className = generateUniqueCSSName(target.props, i, classNames, prefix + "-")
    
    target.el.classList.add(className)

    let css = ""
    for (const [name, value] of target.props)
        css += name + ':' + value + ";"

    return `.${className}{${css}}\n`
}

export function createCSSPseudo(target: { el: Element, props: Map <string, string> }, i: number, classNames: string[], pseudo = "") {

    let className = generateUniqueCSSName(target.props, i, classNames)
    
    target.el.classList.add(className)

    let css = ""
    for (const [name, value] of target.props)
        css += name + ':' + value + ";"

    return `.${className}{${css}}\n`
}