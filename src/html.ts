import { createCSS } from "./css"
import { getInlineCSS } from "./element"

/** Name of the rule 
 * @example "narrow" // matches width@narrow="32em"
 */
type Fix = string

/** CSS condition 
 * @example screen and (min-width: 32cm) 
 */
type Condition = string

/**
 * @example new Map(["narrow", "screen and (min-width: 32cm)"])
 * // will match all properties ...@narrow
 */
type RuleSet = Map <Fix, Condition>

/** Sets how _html_ function will behave */
export const Rules = {

    media: new Map() as RuleSet,

    get mediaFixes() { return Array.from(Rules.media.keys()) },

    ref(media: RuleSet) { this.media = media },

    set(fix: Fix, condition: Condition) { this.media.set(fix, condition) }
}

/** html`string` function for comfy use */
export default function html(strings: TemplateStringsArray, ...values: any[]) {

    const html = String.raw({ raw: strings }, ...values)
    const document = new DOMParser().parseFromString(html, "text/html")
    if (!document)
        return ""

    applyInlineCSS(document)

    return "<!DOCTYPE html>" + document.head.outerHTML + document.body.outerHTML
}


/** Gets CSS styles and places them to clases */
function applyInlineCSS(document: Document) {

    if (!document)
        return

    const classNames: string[] = ["", ...Rules.mediaFixes]
    const inline = {
        base: getInlineCSS(document.body),
        rules: Array.from(Rules.media.entries())
            .map(([fix, condition]) => ({ fix, condition, inlineCSS: getInlineCSS(document.body, fix) }))
    }
    

    document.head.innerHTML += /*html*/`<style>

        ${inline.base
            .map(([el, props], i) => createCSS({ el, props }, i, classNames))
            .join("\n")}

        ${inline.rules.map(({ fix, condition, inlineCSS }) => `@media ${condition} {\n` + 
            inlineCSS.map(([el, props], i) => createCSS({ el, props }, i, classNames, fix)).join("\n")).join("\n}\n") + "\n}"}

    </style>`
}