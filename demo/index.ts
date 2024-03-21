import { default as html, Rules } from "../src/html"

Rules.ref(new Map([
    ["narrow", "screen and (min-width: 24em)"],
    ["medium", "screen and (min-width: 48em)"],
    ["wide", "screen and (min-width: 86em)"],
    ["widest", "screen and (min-width: 148em)"]
]))

const frame = document.createElement("iframe")
document.body.append(frame)

frame.setAttribute("srcdoc", html`<!DOCTYPE html><html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        
        <div width="10em" height="10em" background-color="red" 
            background-color-widest="blue"
            background-color-wide="yellow" 
            background-color-medium="green" 
            background-color-narrow="orange">

            Demo
        
        </div>

    </body>
</html>`)