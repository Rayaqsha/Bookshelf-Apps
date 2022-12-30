(()=>{"use strict";var r,n={6562:(r,n,e)=>{e(5666),e(4039),e(2666),e(2247);var t=e(3379),o=e.n(t),A=e(7795),i=e.n(A),a=e(569),s=e.n(a),d=e(3565),c=e.n(d),l=e(9216),p=e.n(l),g=e(4589),m=e.n(g),b=e(890),u={};function C(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function x(r){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},x(r)}u.styleTagTransform=m(),u.setAttributes=c(),u.insert=s().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=p(),o()(b.Z,u),b.Z&&b.Z.locals&&b.Z.locals;var f=[],h="render-book",B="saved-book",I="BOOKSHELF_APPS";!function(){function r(r,n,e,t,o){return{id:r,title:n,authors:e,years:t,isCompleted:o}}function n(r){for(var n=0,e=f;n<e.length;n++){var t=e[n];if(t.id===r)return t}return null}function e(){return void 0!==("undefined"==typeof Storage?"undefined":x(Storage))||(alert("Browser kamu tidak mendukung local storage"),!1)}function t(){if(e()){var r=JSON.stringify(f);localStorage.setItem(I,r),document.dispatchEvent(new Event(B))}}function o(r){var e=r.id,o=r.title,A=r.authors,i=r.years,a=r.isCompleted,s=document.createElement("h3");s.innerText=o;var d=document.createElement("h4");d.innerText=A;var c=document.createElement("h5");c.innerText=i;var l=document.createElement("button");l.classList.add("btn-checklist"),l.addEventListener("click",(function(){var r;null!=(r=n(e))&&(r.isCompleted=!0,document.dispatchEvent(new Event(h)),t())}));var p=document.createElement("button");p.classList.add("btn-trash"),p.addEventListener("click",(function(){var r;-1!==(r=function(r){for(var n in f)if(f[n].id===r)return n;return-1}(e))&&(f.splice(r,1),document.dispatchEvent(new Event(h)),t())}));var g=document.createElement("button");g.classList.add("btn-undo"),g.addEventListener("click",(function(){var r;null!=(r=n(e))&&(r.isCompleted=!1,document.dispatchEvent(new Event(h)),t())}));var m=document.createElement("div");m.classList.add("book"),m.append(s,d,c);var b=document.createElement("div");b.classList.add("button"),a?b.append(g,p):b.append(l,p);var u=document.createElement("div");return u.classList.add("item"),u.append(m,b),u.setAttribute("id","book-".concat(e)),u}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("form").addEventListener("submit",(function(n){n.preventDefault(),function(){var n=document.getElementById("title").value,e=document.getElementById("authors").value,o=document.getElementById("years").value,A=document.getElementById("checkbox"),i=+new Date;if(1==A.checked){var a=r(i,n,e,o,!0);f.push(a)}else{var s=r(i,n,e,o,!1);f.push(s)}document.dispatchEvent(new Event(h)),t()}()})),e()&&function(){var r=localStorage.getItem(I),n=JSON.parse(r);if(null!==n){var e,t=function(r,n){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,n){if(r){if("string"==typeof r)return C(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?C(r,n):void 0}}(r))||n&&r&&"number"==typeof r.length){e&&(r=e);var t=0,o=function(){};return{s:o,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var A,i=!0,a=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){a=!0,A=r},f:function(){try{i||null==e.return||e.return()}finally{if(a)throw A}}}}(n);try{for(t.s();!(e=t.n()).done;){var o=e.value;f.push(o)}}catch(r){t.e(r)}finally{t.f()}}document.dispatchEvent(new Event(h))}()})),document.addEventListener(B,(function(){console.log("Data berhasil di simpan.");var r=document.getElementById("snackbar");r.className="show",setTimeout((function(){r.className=r.className.replace("show","")}),3e3)})),document.addEventListener(h,(function(){var r=document.getElementById("books"),n=document.getElementById("completed-books");r.innerHTML="",n.innerHTML="";for(var e=0,t=f;e<t.length;e++){var A=t[e],i=o(A);A.isCompleted?n.append(i):r.append(i)}}))}()},890:(r,n,e)=>{e.d(n,{Z:()=>h});var t=e(7537),o=e.n(t),A=e(3645),i=e.n(A),a=e(1667),s=e.n(a),d=new URL(e(3396),e.b),c=new URL(e(3889),e.b),l=new URL(e(1726),e.b),p=new URL(e(2266),e.b),g=new URL(e(2194),e.b),m=i()(o());m.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var b=s()(d),u=s()(c),C=s()(l),x=s()(p),f=s()(g);m.push([r.id,"*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\nhtml, body {\r\n    font-family: 'Raleway', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nheader{\r\n    padding: 10px;\r\n    background-color: #5F30E2;\r\n    color: white;\r\n}\r\nheader h1{\r\n    font-size: 28px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n.container{\r\n    max-width: 1100px;\r\n}\r\n.content1 {\r\n    padding: 20px;\r\n}\r\n.content2 {\r\n    padding: 20px;\r\n}\r\n.content1 h2{\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\n.card{\r\n    margin-top: 10px;\r\n    padding: 50px 50px 30px 50px;\r\n    background-color: #eeeeee;\r\n    border: none;\r\n    border-radius: 30px;\r\n}\r\n.card1{\r\n    margin-top: 20px;\r\n    padding: 25px;\r\n    background-color: #eeeeee;\r\n    border: none;\r\n    border-radius: 30px;\r\n}\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nform .form-text, .form-check-input{\r\n    background-color: #d9d8e1;\r\n    margin-bottom: 20px;\r\n    border-radius: 30px;\r\n    border-color: #5F30E2;\r\n    transition: .3s;\r\n}\r\nform .form-text:focus{\r\n    outline: 0 none;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n    background-color: #d9d8e1;\r\n    border-color: #5F30E2;\r\n    border-width: 2px;\r\n}\r\n.form-check-input:focus {\r\n    border-color: #5F30E2;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n}\r\n.shadow {\r\n    box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);\r\n}\r\n.content1 button{\r\n    background-color: #5F30E2;\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    transition: .3s;\r\n}\r\n.content1 button:hover{\r\n    transform: scale(1.05);\r\n}\r\n.search{\r\n    border-radius: 30px;\r\n    display: inline-flex;\r\n}\r\ninput[type=search] {\r\n    border: none;\r\n    border-radius: 30px 0 0 30px;\r\n}\r\ninput[type=search]:focus {\r\n    border-color: #5F30E2;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n}\r\n.btn-search{\r\n    background-color: #5F30E2;\r\n    padding: 10px 20px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 0 30px 30px 0;\r\n    transition: .3s;\r\n}\r\n.btn-search:hover{\r\n    background-color: #4726a3;\r\n}\r\n.content2 h2{\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}\r\n.item{\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 20px;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    border-color: #5F30E2;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n.book{\r\n    float: left;\r\n}\r\n.item .button{\r\n    float: right;\r\n}\r\n.book h3{\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    margin-bottom: 3px;\r\n}\r\n.book h4{\r\n    margin-bottom: 3px;\r\n    font-size: 14px;\r\n}\r\n.book h5{\r\n    font-size: 12px;\r\n}\r\n.item .button{\r\n    justify-content: flex-end;\r\n}\r\n.item .button{\r\n    display: inline;\r\n}\r\n.button button{\r\n    position: relative;\r\n    border: none;\r\n    font-size: 25px;\r\n    top: 12px;\r\n    right: 10px;\r\n}\r\n.btn-checklist {\r\n    background: url("+b+");\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border: none;\r\n    margin-right: 15px;\r\n    transition: .2s;\r\n}\r\n.btn-checklist:hover {\r\n    background: url("+u+");\r\n}\r\n.btn-trash {\r\n    background: url("+C+");\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border: none;\r\n    transition: .2s;\r\n}\r\n.btn-trash:hover {\r\n    background: url("+x+");\r\n}\r\n.btn-undo {\r\n    background: url("+f+");\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-right: 15px;\r\n    cursor: pointer;\r\n    border: none;\r\n    transition: .3s;\r\n}\r\n.btn-undo:hover {\r\n    transform: scale(1.1);\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n    background-color: #5F30E2;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    border-radius: 40px;\r\n  }\r\n  \r\n  #snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  }\r\n  \r\n  @-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n  \r\n  @keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .card{\r\n        padding: 30px;\r\n    }\r\n    .button {\r\n        margin-bottom: 10px;\r\n    }\r\n    .btn-checklist{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    .btn-trash{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    .btn-undo{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');\r\n\r\n\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\nhtml, body {\r\n    font-family: 'Raleway', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nheader{\r\n    padding: 10px;\r\n    background-color: #5F30E2;\r\n    color: white;\r\n}\r\nheader h1{\r\n    font-size: 28px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n.container{\r\n    max-width: 1100px;\r\n}\r\n.content1 {\r\n    padding: 20px;\r\n}\r\n.content2 {\r\n    padding: 20px;\r\n}\r\n.content1 h2{\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\n.card{\r\n    margin-top: 10px;\r\n    padding: 50px 50px 30px 50px;\r\n    background-color: #eeeeee;\r\n    border: none;\r\n    border-radius: 30px;\r\n}\r\n.card1{\r\n    margin-top: 20px;\r\n    padding: 25px;\r\n    background-color: #eeeeee;\r\n    border: none;\r\n    border-radius: 30px;\r\n}\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nform .form-text, .form-check-input{\r\n    background-color: #d9d8e1;\r\n    margin-bottom: 20px;\r\n    border-radius: 30px;\r\n    border-color: #5F30E2;\r\n    transition: .3s;\r\n}\r\nform .form-text:focus{\r\n    outline: 0 none;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n    background-color: #d9d8e1;\r\n    border-color: #5F30E2;\r\n    border-width: 2px;\r\n}\r\n.form-check-input:focus {\r\n    border-color: #5F30E2;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n}\r\n.shadow {\r\n    box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);\r\n}\r\n.content1 button{\r\n    background-color: #5F30E2;\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    color: white;\r\n    border-radius: 30px;\r\n    border: none;\r\n    transition: .3s;\r\n}\r\n.content1 button:hover{\r\n    transform: scale(1.05);\r\n}\r\n.search{\r\n    border-radius: 30px;\r\n    display: inline-flex;\r\n}\r\ninput[type=search] {\r\n    border: none;\r\n    border-radius: 30px 0 0 30px;\r\n}\r\ninput[type=search]:focus {\r\n    border-color: #5F30E2;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075);\r\n}\r\n.btn-search{\r\n    background-color: #5F30E2;\r\n    padding: 10px 20px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 0 30px 30px 0;\r\n    transition: .3s;\r\n}\r\n.btn-search:hover{\r\n    background-color: #4726a3;\r\n}\r\n.content2 h2{\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}\r\n.item{\r\n    overflow: hidden;\r\n    background-color: white;\r\n    margin-top: 20px;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n    border-color: #5F30E2;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n.book{\r\n    float: left;\r\n}\r\n.item .button{\r\n    float: right;\r\n}\r\n.book h3{\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    margin-bottom: 3px;\r\n}\r\n.book h4{\r\n    margin-bottom: 3px;\r\n    font-size: 14px;\r\n}\r\n.book h5{\r\n    font-size: 12px;\r\n}\r\n.item .button{\r\n    justify-content: flex-end;\r\n}\r\n.item .button{\r\n    display: inline;\r\n}\r\n.button button{\r\n    position: relative;\r\n    border: none;\r\n    font-size: 25px;\r\n    top: 12px;\r\n    right: 10px;\r\n}\r\n.btn-checklist {\r\n    background: url('../public/image/check-outline.svg');\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border: none;\r\n    margin-right: 15px;\r\n    transition: .2s;\r\n}\r\n.btn-checklist:hover {\r\n    background: url('../public/image/check-solid.svg');\r\n}\r\n.btn-trash {\r\n    background: url('../public/image/trash-outline.svg');\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border: none;\r\n    transition: .2s;\r\n}\r\n.btn-trash:hover {\r\n    background: url('../public/image/trash-fill.svg');\r\n}\r\n.btn-undo {\r\n    background: url('../public/image/undo-ouline.svg');\r\n    background-size: contain;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-right: 15px;\r\n    cursor: pointer;\r\n    border: none;\r\n    transition: .3s;\r\n}\r\n.btn-undo:hover {\r\n    transform: scale(1.1);\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n    background-color: #5F30E2;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    border-radius: 40px;\r\n  }\r\n  \r\n  #snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  }\r\n  \r\n  @-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n  \r\n  @keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .card{\r\n        padding: 30px;\r\n    }\r\n    .button {\r\n        margin-bottom: 10px;\r\n    }\r\n    .btn-checklist{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    .btn-trash{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    .btn-undo{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}"],sourceRoot:""}]);const h=m},2204:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},9609:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},2469:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},7486:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},4144:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},6254:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"},2740:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5647:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},1692:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},6529:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},6770:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},8931:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},6199:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"},1217:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},2956:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},5122:r=>{r.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"},3396:(r,n,e)=>{r.exports=e.p+"dd980a11033e1ca005ee.svg"},3889:(r,n,e)=>{r.exports=e.p+"019b32b9b5d5a023a4a7.svg"},2266:(r,n,e)=>{r.exports=e.p+"3faae0632558fa34d7df.svg"},1726:(r,n,e)=>{r.exports=e.p+"8b83dde72d323a5878c3.svg"},2194:(r,n,e)=>{r.exports=e.p+"412baea36049c303fc01.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var A=e[r]={id:r,exports:{}};return n[r].call(A.exports,A,A.exports,t),A.exports}t.m=n,r=[],t.O=(n,e,o,A)=>{if(!e){var i=1/0;for(c=0;c<r.length;c++){for(var[e,o,A]=r[c],a=!0,s=0;s<e.length;s++)(!1&A||i>=A)&&Object.keys(t.O).every((r=>t.O[r](e[s])))?e.splice(s--,1):(a=!1,A<i&&(i=A));if(a){r.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}A=A||0;for(var c=r.length;c>0&&r[c-1][2]>A;c--)r[c]=r[c-1];r[c]=[e,o,A]},t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var n=t.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),(()=>{t.b=document.baseURI||self.location.href;var r={143:0};t.O.j=n=>0===r[n];var n=(n,e)=>{var o,A,[i,a,s]=e,d=0;if(i.some((n=>0!==r[n]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var c=s(t)}for(n&&n(e);d<i.length;d++)A=i[d],t.o(r,A)&&r[A]&&r[A][0](),r[A]=0;return t.O(c)},e=self.webpackChunkbookshelf=self.webpackChunkbookshelf||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),t.nc=void 0;var o=t.O(void 0,[7,184,666,742,189,586],(()=>t(6562)));o=t.O(o)})();
//# sourceMappingURL=app.bundle.js.map