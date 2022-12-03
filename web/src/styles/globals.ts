import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`

:root {
    --color-background: #f4f4f4;
    --color-background-image: #f9f9f9;
    --color-border: #f4f4f4;
    --color-container: #ffffff;
    --color-text-clear: #ffffff;
    --color-text-black: #2a2a2a;
    --color-primary: #2189ff;
    --color-error: #ff2121;
    --color-secondary: #ff7321;
    --color-green: #008761;
    --color-yellow: #ffe421;
    --color-purple: #5821ff;
    --color-black: #000000;
    --transparency-modal: #00000060;
}

* {
    font-family: "Mulish", sans-serif !important;
}

body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.body_container {
    max-width: 82.5rem;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--color-background);
    min-height: 100vh;
}
`;
