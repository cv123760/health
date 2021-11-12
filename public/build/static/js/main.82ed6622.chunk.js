(this["webpackJsonphealth2.0"]=this["webpackJsonphealth2.0"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(7),i=a.n(r),l=a(3),s=a(2),c=a(0),d=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1],i=!1;return o&&(i=e.hideCompleted),Object(c.jsx)("p",{className:"shoppingListItem",onClick:function(e){e.preventDefault(),r((function(e){return!e}))},style:{color:o?"#29C7AC":"black",textDecoration:o?"line-through":"none",display:i?"none":"block",marginRight:"15px"},children:e.unit(e.total)+" "+e.item},e.index)},u=function(e){e.mealPlan[e.FoodGroup];var t={};e.mealPlan[e.FoodGroup].forEach((function(e){t[e]?t[e]++:t[e]=1}));var a=Object.keys(t),o=8;"Protein"===e.FoodGroup&&(o=6);var r=Object(n.useState)(o),i=Object(s.a)(r,2),l=i[0],u=i[1],j=function(e){var t=e%16,a=Math.floor(e/16);return a>0?a+" lbs "+t+" oz ":t+" oz "};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:e.FoodGroup}),Object(c.jsxs)("div",{className:"serving",children:[Object(c.jsx)("p",{className:"editServing",onClick:function(e){e.preventDefault(),l>0&&u((function(e){return e-1}))},children:"-"}),Object(c.jsxs)("p",{className:"servingSize",children:["serving size ",l," oz"]}),Object(c.jsx)("p",{className:"editServing",onClick:function(e){e.preventDefault(),l<=30&&u((function(e){return e+1}))},children:"+"})]}),Object(c.jsx)("div",{className:"singleList",children:a.map((function(a,n){var o=l,r=t[a]*o;return Object(c.jsx)(d,{hideCompleted:e.hideCompleted,index:n,unit:j,total:r,item:a},n)}))})]})},j=a(8),b=function(e){var t=e.list,a=Object(n.useState)(!0),o=Object(s.a)(a,2),r=o[0],i=o[1],l=r?"Edit":"Done";return Object(c.jsxs)("div",{className:"singleList",style:{display:e.visible?"block":"none"},children:[t.map((function(a,n){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:{display:r?"block":"none"},onClick:function(n){e.addToPlan(a,e.group,t)},children:a},a),Object(c.jsxs)("p",{style:{display:r?"none":"block"},onClick:function(t){t.preventDefault(),e.removeFromFoods(a,e.group)},children:["DELETE ",a]})]},n)})),Object(c.jsxs)("div",{className:"editFoodGroup",children:[Object(c.jsx)("input",{style:{display:r?"none":"inline"},className:"edit",placeholder:"Add an Item",onKeyDown:function(t){if(13===t.keyCode){var a=t.target.value;e.addToFoods(a,e.group),t.target.value=""}}}),Object(c.jsx)("button",{className:"done",onClick:function(e){e.preventDefault(),i((function(e){return!e}))},children:l})]})]})},m=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],r=a[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{onClick:function(e){e.preventDefault(),r((function(e){return!e}))},children:e.group}),Object(c.jsx)(b,{visible:o,list:e.list,addToPlan:e.addToPlan,group:e.group,addToFoods:e.addToFoods,removeFromFoods:e.removeFromFoods})]})},g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],P=["Breakfast","Lunch","Diner"],h=function(e){var t=Object.keys(e.mealPlan);return Object(c.jsx)("div",{children:t.map((function(t){var a=3*e.weekIndex+e.mealIndex;return Object(c.jsx)("p",{contentEditable:"true",suppressContentEditableWarning:!0,onKeyDown:function(n){if(13===n.keyCode){n.preventDefault();var o=n.target.innerHTML;e.updateItem(o,a,t)}},children:e.mealPlan[t][a]},e.indexNum)}))})},O=function(e){return Object(c.jsx)("div",{className:"day",children:P.map((function(t,a){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)(h,{mealPlan:e.mealPlan,weekIndex:e.weekIndex,mealIndex:a,updateItem:e.updateItem})]})}))})},f=function(e){var t=e.date.getDay();g[t]||(t=0);var a=Object.keys(e.mealPlan),n=[],o=0,r="Protein";return a.forEach((function(t){e.mealPlan[t].length>o&&(o=e.mealPlan[t].length,r=t)})),e.mealPlan[r].forEach((function(e,a){a%3===0&&(t++,g[t]||(t=0),n.push(g[t]))})),Object(c.jsx)("div",{children:n.map((function(t,a){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)(O,{mealPlan:e.mealPlan,weekIndex:a,updateItem:e.updateItem})]})}))})},p=function(e){var t=e.Data.startDate;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Meal Plan"}),Object(c.jsx)("label",{children:"Select a starting date"}),Object(c.jsx)("input",{id:"date",type:"date",onChange:function(t){var a=t.target.valueAsDate;e.changeStartDate(a)}}),Object(c.jsx)(f,{mealPlan:e.Data.mealPlan,updateItem:e.updateItem,date:t})]})},x="https://floating-hamlet-55199.herokuapp.com/getFoods",v=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=(r[0],r[1]),d=Object(n.useState)(j),b=Object(s.a)(d,2),g=b[0],P=b[1];Object(n.useEffect)((function(){fetch(x).then((function(e){return e.json()})).then((function(e){i(!0),P(e),console.log(e)}),(function(e){i(!0),a(e)}))}),[]);var h=function(e,t){P((function(a){return"Protein"===t?{Foods:a.Foods,mealPlan:{Protein:[].concat(Object(l.a)(a.mealPlan.Protein),[e]),Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Carb"===t?{Foods:a.Foods,mealPlan:{Protein:a.mealPlan.Protein,Carb:[].concat(Object(l.a)(a.mealPlan.Carb),[e]),Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Veggie"===t?{Foods:a.Foods,mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:[].concat(Object(l.a)(a.mealPlan.Veggie),[e])},startDate:a.startDate}:void 0}))},O=function(e,t){P((function(a){return"Protein"===t?{Foods:{Protein:[].concat(Object(l.a)(a.Foods[t]),[e]),Carb:a.Foods.Carb,Veggie:a.Foods.Veggie},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Carb"===t?{Foods:{Protein:a.Foods.Protein,Carb:[].concat(Object(l.a)(a.Foods[t]),[e]),Veggie:a.Foods.Veggie},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Veggie"===t?{Foods:{Protein:a.Foods.Protein,Carb:a.Foods.Carb,Veggie:[].concat(Object(l.a)(a.Foods[t]),[e])},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:void 0}))},f=function(e,t){P((function(a){return"Protein"===t?{Foods:{Protein:a.Foods[t].filter((function(t){return t!==e})),Carb:a.Foods.Carb,Veggie:a.Foods.Veggie},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Carb"===t?{Foods:{Protein:a.Foods.Protein,Carb:a.Foods[t].filter((function(t){return t!==e})),Veggie:a.Foods.Veggie},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:"Veggie"===t?{Foods:{Protein:a.Foods.Protein,Carb:a.Foods.Carb,Veggie:a.Foods[t].filter((function(t){return t!==e}))},mealPlan:{Protein:a.mealPlan.Protein,Carb:a.mealPlan.Carb,Veggie:a.mealPlan.Veggie},startDate:a.startDate}:void 0}))},v=function(e){P((function(t){return{Foods:t.Foods,mealPlan:t.mealPlan,startDate:e}}))};g.startDate||v(new Date);var C=[];g.Foods&&(C=Object.keys(g.Foods));var F=Object(n.useState)(!1),D=Object(s.a)(F,2),V=D[0],y=D[1],k="Hide Complete";V&&(k="Show All");return Object(c.jsxs)("div",{children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("a",{href:"/",children:[" ",Object(c.jsx)("img",{src:"/images/logoyellow.svg",alt:"Home"})," "]}),Object(c.jsxs)("nav",{children:[Object(c.jsx)("a",{href:"/meal-plan",children:" Meal Plan  "}),Object(c.jsx)("a",{href:"/strength",children:" Strength "}),Object(c.jsx)("a",{href:"/cardio",children:" Cardio "})]}),Object(c.jsx)("div",{className:"user",children:Object(c.jsx)("a",{href:"/logout",children:Object(c.jsx)("img",{src:"https://lh3.googleusercontent.com/a/AATXAJwsRaE2gU2HRUZH_0r95dt-5dtdcaxFPnrCy1VI=s96-c",alt:""})})})]}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"leftOrRightSide",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Foods List"}),Object(c.jsx)("div",{className:"lists",children:C.map((function(e){return Object(c.jsx)(m,{group:e,list:g.Foods[e],addToPlan:h,addToFoods:O,removeFromFoods:f},e)}))})]}),Object(c.jsxs)("div",{className:"shoppingList",children:[Object(c.jsx)("h1",{children:"Shopping List"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"lists",children:Object.keys(g.mealPlan).map((function(e){return Object(c.jsx)(u,{hideCompleted:V,FoodGroup:e,mealPlan:g.mealPlan},e)}))}),Object(c.jsx)("button",{className:"edit",onClick:function(e){y((function(e){return!e}))},children:k})]})]})]}),Object(c.jsxs)("div",{className:"leftOrRightSide",children:[Object(c.jsx)(p,{Data:g,updateItem:function(e,t,a){"&nbsp;"===e.slice(-6)&&(console.log(e,"item modified"),e=e.slice(0,-6)),P((function(n){var o=n.mealPlan[a].map((function(a,n){return n===t?e:a}));return"Protein"===a?{Foods:n.Foods,mealPlan:{Protein:o,Carb:n.mealPlan.Carb,Veggie:n.mealPlan.Veggie},startDate:n.startDate}:"Carb"===a?{Foods:n.Foods,mealPlan:{Protein:n.mealPlan.Protein,Carb:o,Veggie:n.mealPlan.Veggie},startDate:n.startDate}:"Veggie"===a?{Foods:n.Foods,mealPlan:{Protein:n.mealPlan.Protein,Carb:n.mealPlan.Carb,Veggie:o},startDate:n.startDate}:void 0}))},changeStartDate:v}),Object(c.jsxs)("form",{action:x,method:"post",children:[Object(c.jsx)("input",{style:{display:"none"},type:"text",id:"saveData",name:"data",onChange:function(e){e.preventDefault()},value:JSON.stringify(g)}),Object(c.jsx)("button",{className:"done",onClick:function(e){},children:"save"}),Object(c.jsx)("button",{className:"edit",onClick:function(e){e.preventDefault(),P((function(e){return{Foods:e.Foods,mealPlan:{Protein:[],Carb:[],Veggie:[]},startDate:e.startDate}}))},children:"Start Over"})]})]})]})]})};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"Foods":{"Protein":["Chicken Breast","Turkey breasts","White Fish","Egg Whites","1% Lean Ground Turkey","lean beef"],"Carb":["Quinoa","Brown Rice","Oatmeal **","Black Rice","Cous Cous","Pineapple","Mango","Starfruit","Black Berries","Red Berries","Blue Berries","Acai Berries","Sweet Potato"],"Veggie":["Broccoli","Asparragus","Spinach","Kale","Brussel Sprouts","Spring Mix","Cucumber"]},"mealPlan":{"Protein":[],"Carb":[],"Veggie":[]}}')}},[[14,1,2]]]);
//# sourceMappingURL=main.82ed6622.chunk.js.map