var t=/^(https?:)?\/\/a.storyblok.com\/f\/*[0-9]+\/*[0-9]*x*[0-9]*\/[A-Za-z0-9]+\/[\S]+\.[a-zA-Z]+/;function a(a){var e=null,i=null;if("string"==typeof a&&(e=a),"object"==typeof a&&(e=a.image,i=a.base64?a.base64:null),!(e=t.test(e)?e:null))return!1;var n=e.replace(/^(https?:)?\/\/a.storyblok.com\//,""),r=n.split("/"),s=r[4],o=r[2].split("x").map(function(t){return parseInt(t,10)}),u=o[0],h=o[1];return{originalPath:n,extension:s.split(".")[1],metadata:{dimensions:{width:u,height:h,aspectRatio:u/h},lqip:i}}}var e="https://a.storyblok.com",i=[1,1.5,2,3],n=[.25,.5,1,1.5,2,3],r={quality:100,smartCrop:!0,format:null,fill:null,toFormat:null,base64:null,useBase64:!0},s=Object.assign({},r,{maxWidth:800,maxHeight:null}),o=Object.assign({},r,{width:400,height:null});function u(t){var a=t.includes("filters:format(webp)"),e=/[a-f0-9]+-\d+x\d+\.webp/.test(t);return a||e}function h(t,a){var i=a.width,n=a.height,r=a.smartCrop,s=a.quality,o=a.format,u=a.fill,h=t.split("."),l=e;l+="/"+t+"/m",i&&n&&(l+="/"+i+"x"+n),r&&(l+="/smart");var c=[s&&"quality("+s+")",o&&o!==h[1]&&"format("+o+")",u&&"fill("+u+")"];return(c=c.filter(function(t){return!0===Boolean(t)})).length>0&&(l+=function(t){return t.reduce(function(t,a,e){return t+":"+a},"/filters")}(c)),l}function l(t,a){var e=a.height;return h(t,{width:(a.width/3).toFixed(0),height:(e/3).toFixed(0),quality:10})}function c(t,e){void 0===e&&(e={});var n=a(t);if(!n)return null;var r=Object.assign({},o,e),s=r.width,c=r.height,f=n.metadata.dimensions,p=n.originalPath,d=f.aspectRatio;r.height&&(d=s/r.height);var g=null;r.toFormat?g=r.toFormat:u(p)&&(g="jpg");var m=i.map(function(t){return Math.round(s*t)}).filter(function(t){return t<f.width}).reduce(function(t,a,e){var n=i[e]+"x",s=Math.round(a/d),o=Object.assign({},r,{width:a,height:s}),u=h(p,Object.assign({},o,{format:"webp"})),l=h(p,Object.assign({},o,g&&{format:g}));return t.webp.push(u+" "+n),t.base.push(l+" "+n),t},{webp:[],base:[]}),b=Math.round(c||s/d),w=Object.assign({},r,{width:s,height:b}),v=h(p,Object.assign({},w,g&&{format:g}));return h(p,Object.assign({},w,{format:"webp"})),{base64:l(p,{width:s,height:c,aspectRatio:d}),aspectRatio:d,width:Math.round(s),height:b,src:v,srcSet:m.base.join(",\n")||null}}function f(t,e){void 0===e&&(e={});var i=a(t);if(!i)return null;var r=Object.assign({},s,e),o=r.maxWidth,c=i.metadata.dimensions,f=i.originalPath,p=c.aspectRatio;r.maxHeight&&(p=o/r.maxHeight);var d=r.maxHeight||Math.round(o/c.aspectRatio),g=null;r.toFormat?g=r.toFormat:u(f)&&(g="jpg");var m=r.sizes||"(max-width: "+o+"px) 100vw, "+o+"px",b=n.map(function(t){return Math.round(o*t)}).filter(function(t){return t<c.width}).concat(c.width).filter(function(t){return t<c.width}).reduce(function(t,a){var e={width:a,height:Math.round(a/p)},i=h(f,Object.assign({},r,e,{format:"webp"})),n=h(f,Object.assign({},r,e,{format:g}));return t.webp.push(i+" "+a+"w"),t.base.push(n+" "+a+"w"),t},{webp:[],base:[]}),w={width:o,height:d},v=h(f,Object.assign({},r,w,{format:g}));return h(f,Object.assign({},r,w,{format:"webp"})),{base64:l(f,{width:o,height:d,aspectRatio:p}),aspectRatio:p,src:v,srcSet:b.base.join(",\n")||null,sizes:m}}export{c as getFixedGatsbyImage,f as getFluidGatsbyImage};
//# sourceMappingURL=index.mjs.map
