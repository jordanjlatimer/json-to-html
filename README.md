# Slam-js
A Javascript library for generating static HTML on the server side. Slam-js is meant to be a complete replacement to HTML templating engines such as [Pug](https://pugjs.org/api/getting-started.html), [Handlebars](https://handlebarsjs.com/), or [EJS](https://ejs.co/).  
  
## Features
 - Easy templating
 - Component based
 - No need to learn a new language/syntax
 - Accurate type declarations
 - Impressive performance and speed
 - SVG tag support.

## Code Example
The function `Document` in this example returns a string constructed based on the tag functions used.
```
import { html, head, title, meta, link, body, h1, p } from "slam-js";

const Document = () => {
  return(
    html({ lang: "en" },
      head(
        title("Jordan Latimer"),
        meta({ name: "viewport", content: "width=device-width initial-scale=1, minimum-scale=1" }),
        link({ rel: "icon", href: "assets/favicon.ico" })
      ),
      body(
        h1("Slam-js"),
        p("A Javascript library for generating static HTML on the server side.")
      )
    )
  );
};
```
## API
Each element function has the same parameters, with the exception of void elements which won't accept children (e.g. `br`, `meta`, `link`, etc.):

<table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Type
      </th>
      <th>
        Default
      </th>
      <th>
        Required
      </th>
      <th>
        Example(s)
      </th>
      <th>
        Details
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>attributes</code>
      </td>
      <td>
        <code>Object</code>
      </td>
      <td>
        <code>undefined</code>
      </td>
      <td>
        False
      </td>
      <td>
        <code>{ class: "card", tabindex: 0 }</code>
      </td>
      <td>
        The key used should be in the exact form used in HTML. Keys with hyphens will need to be quoted, e.g. <code>"aria-details"</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>...children</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <code>undefined</code>
      </td>
      <td>
        False
      </td>
      <td>
        <code>"Slam-js", div("Slam-js"), fs.readFileSync("./partial.html")</code>
      </td>
      <td>
        Any function returning a string can be placed inline. Strings will not be checked whether they are valid HTML or not, so be careful.
      </td>
    </tr>
  </tbody>
</table>

All Slam-js functions return a string with the tag, its attributes, and children:
```
import { div, p } from "slam-js";

const Card = () => {
  return(
    div({ class: "card" },
      p("Slam-js")
    )
  );
};

console.log(Card());

//Console logs '<div class="card"><p>Slam-js</p></div>'
```
## Examples & Usage
### Components
Reusable components can easily be created and then imported into an index file:
```
//Head.js
import { head, title, meta, link } from "slam-js";

export function Head(){
  return(
    head(
      title("Jordan Latimer"),
      meta({ name: "viewport", content: "width=device-width initial-scale=1, minimum-scale=1" }),
      link({ rel: "icon", href: "assets/favicon.ico" })
    ),
  );
};
```
```
//A template for an "index" page:
import { html, body } from "slam-js";
import { Head } from "./Head.js";

const indexPage = () => {
  return(
    html(
      Head(),
      body("Index")
    )
  );
};
```
```
//A template for an "about" page:
import { html, body } from "slam-js";
import { Head } from "./Head.js";

const aboutPage = () => {
  return(
    html(
      Head(),
      body("About")
    )
  );
};
```
### Components with Variables
Just make sure to return a string.
```
//Card.js

import { div, img, h4, p } from "slam-js";

export function Card(imgSrc, imgAlt, header, description){
  return(
    div({class: "card"},
      img({src: imgSrc, alt: imgAlt}),
      h4(header),
      p(description)
    )
  );
};
```
```
//index.js

import { html, body } from "slam-js";
import { Card } from "slam-js";

const document = () => {
  return(
    html(
      body(
        Card("./assets/dog.jpg", "A cute brown dog", "Sparky", "Sparky likes to play fetch an run around"),
        Card("./assets/cat.jpg", "An ugly gray cat", "Sleezy", "Sleezy likes to tear up furniture."),
        Card("./assets/lizard.jpg", "A plain green lizard.", "Plainola", "Plainola just hangs around.")
      )
    )
  );
};
```
### Inlining SVGs
SVGs can be constructed manually, or they can be easily inlined:
```
//hamburgerIcon.js

export function HamburgerIcon(){
  return `
    <svg viewBox="0 0 100 80">
      <rect width="100" height="20" rx="8"></rect>
      <rect y="30" width="100" height="20" rx="8"></rect>
      <rect y="60" width="100" height="20" rx="8"></rect>
    </svg>
  `;
};
```
## FAQs
### What about the reserved words `var` and `switch`?
These functions have an underscore after them:
```
import { var_, switch_ } from "slam-js";
```
### What about inline styles?
The `style` attribute takes an object of attribute/value pairs:
```
import { div } from "slam-js";
export function WideRed(){
  return(
    div({style: {"background-color": "red", width: "100%"}})
  );
};
```
### How do integrate with Webpack?
Export the template, and use it with [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin).
```
//index.js

import { html, body } from "slam-js";

export function Document(){
  return(
    html(
      body(
        "Slam-js"
      )
    )
  );
};
```
```
//webpack.js
{
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.js",
      filename: index.html,
      chunks: [name],
    })
  ]
}
```
