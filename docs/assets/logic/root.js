/* ┌ 𝗯𝘂𝗶𝗹𝗱
 * ├ type: production
 * └ date: 2022-03-05T08:00:19.428Z
 *  𝘃𝗲𝗿𝘀𝗶𝗼𝗻: 1.0.0
 *  𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗼𝗿: Platframe
 *  © Name */

!function(){"use strict";function t(t,e){let n=window.pageYOffset,o=t-n,a=Date.now(),r=a+e;!function t(){const e=Date.now(),i=function(t,e,n){if(n<=t)return 0;if(n>=e)return 1;const o=(n-t)/(e-t);return o*o*(3-2*o)}(a,r,e),l=Math.round(n+o*i);window.scroll(0,l),e>=r||requestAnimationFrame(t)}()}document.addEventListener("DOMContentLoaded",()=>{!function(){if(!document.querySelector(".nav-1"))return;try{if(!document.querySelector(".nav-1[data-target]"))throw new Error('Platframe: "nav-1" requires its "data-target" attribute to be set.')}catch(t){return void console.error(t.message)}const e=document.querySelectorAll(".nav-1");for(let n of e){let e=document.querySelector("#".concat(n.attributes["data-target"].value));n.querySelector("button").addEventListener("click",(function(n){"scrollBehavior"in document.documentElement.style?e.scrollIntoView({behavior:"smooth"}):t(e.offsetTop,500),n.stopPropagation()}))}}(),function(){let e=document.querySelectorAll("a[href*=\\#]");for(let n of e)if(location.pathname===n.pathname&&location.hostname===n.hostname&&n.hash.replace(/#/,"")){let e=n.hash,o=!!e.length&&document.getElementById("".concat(e.slice(1)));o&&n.addEventListener("click",(function(){"scrollBehavior"in document.documentElement.style?o.scrollIntoView({behavior:"smooth"}):t(o.offsetTop,500)}))}}(),function(){if(!document.querySelector(".header-1"))return;let t,e=document.querySelector(".header-1"),n=e.querySelector("#navigation ul"),o=!1;function a(o){"expanded"===o&&e.classList.remove("compact-menu"),n.style.display="block",t=0,function e(){(t+=.1)<=1?(t=parseFloat(t.toFixed(2)),n.style.opacity=t,requestAnimationFrame(e)):"expanded"===o&&n.attributes.removeNamedItem("style")}()}function r(o){t=1,function a(){(t-=.1)<0?(n.style.display="none","expanded"===o&&e.classList.add("compact-menu")):(t=parseFloat(t.toFixed(2)),n.style.opacity=t,requestAnimationFrame(a))}()}window.innerWidth>=1e3&&e.setAttribute("data-platform","large"),window.addEventListener("scroll",(function(){o||(o=!0,setTimeout((function(){o=!1,window.scrollY>=235?e.classList.contains("compact-menu")||r("expanded"):e.classList.contains("compact-menu")&&window.innerWidth>1e3&&a("expanded")}),250))})),window.addEventListener("resize",(function(){let t=window.innerWidth;o||(o=!0,setTimeout((function(){o=!1,t<=1e3&&"large"===e.getAttribute("data-platform")?e.setAttribute("data-platform","small"):"small"===e.getAttribute("data-platform")&&t>=1e3&&window.scrollY<=235?(a("expanded"),e.setAttribute("data-platform","large")):"small"===e.getAttribute("data-platform")&&t>=1e3&&e.setAttribute("data-platform","large")}),250))})),document.documentElement.addEventListener("click",t=>{t.target.matches("#navigation button")||t.target.matches("#navigation button *")?"block"===n.style.display?r():a():e.classList.contains("compact-menu")&&"block"===n.style.display&&r()})}(),function(){const t=document.querySelectorAll(".rollover");for(let e of t){let t=e.querySelector("use"),n=t.getAttribute("xlink:href");e.addEventListener("mouseenter",e=>{t.setAttribute("xlink:href",n+"_"),e.stopPropagation()}),e.addEventListener("mouseleave",e=>{t.setAttribute("xlink:href",n),e.stopPropagation()})}}()})}();
