"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[924],{6501:function(e,s,r){r.r(s);var n=r(885),t=r(7689),c=r(2791),a=r(4304),l=r(4960),o=r(3957),i=r(184);s.default=function(e){var s=e.Component,r=e.dataType,u=(0,t.UO)().id,d=(0,c.useState)(null),f=(0,n.Z)(d,2),h=f[0],m=f[1],x=(0,a.Z)(),k=x.getComic,p=x.getCharacter,j=x.clearError,v=x.process,_=x.setProcess;(0,c.useEffect)((function(){w()}),[u]);var w=function(){switch(j(),r){case"comic":k(u).then(Z).then((function(){return _("confirmed")}));break;case"character":p(u).then(Z).then((function(){return _("confirmed")}));break;default:throw new Error("Unexpected error")}},Z=function(e){m(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,l.Z)(v,s,h)]})}},8888:function(e,s,r){r.d(s,{Z:function(){return t}});var n=r(184),t=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,n.jsxs)("div",{className:"skeleton",children:[(0,n.jsxs)("div",{className:"pulse skeleton__header",children:[(0,n.jsx)("div",{className:"pulse skeleton__circle"}),(0,n.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,n.jsx)("div",{className:"pulse skeleton__block"}),(0,n.jsx)("div",{className:"pulse skeleton__block"}),(0,n.jsx)("div",{className:"pulse skeleton__block"})]})]})}},4960:function(e,s,r){var n=r(9613),t=r(8888),c=r(3394),a=r(184);s.Z=function(e,s,r){switch(e){case"waiting":return(0,a.jsx)(t.Z,{});case"loading":return(0,a.jsx)(c.Z,{});case"confirmed":return(0,a.jsx)(s,{data:r});case"error":return(0,a.jsx)(n.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=924.e3fdc902.chunk.js.map