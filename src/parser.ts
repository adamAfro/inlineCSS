export let Parser

if (typeof globalThis.Deno !== 'undefined') {
    

    // @ts-ignore
    Parser = (await import("https://deno.land/x/deno_dom/deno-dom-wasm.ts")).default

} else {

    // @ts-ignore
    Parser = DOMParser
}