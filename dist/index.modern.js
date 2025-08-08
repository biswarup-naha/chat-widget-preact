import{h as o}from"preact";import{useState as n}from"preact/hooks";function t(t){const[l,s]=n(!1);function e(){s(o=>!o)}return o("div",null,l&&o(i,{onClose:e}),o(c,{onClick:e}))}const c=({onClick:n})=>o("div",{class:"widget",onClick:n}),i=({onClose:n})=>o("div",{class:"chatbox",onClick:n},o("p",null,"This is the chat box."));export{t as default};
//# sourceMappingURL=index.modern.js.map
