(this["webpackJsonprestaurant-name"]=this["webpackJsonprestaurant-name"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),i=(n(18),n(9)),o=n(11),u=n(4),l=n(6),d=n(7),h=n(5),m=(n(19),n(12)),j=n.n(m),b=(n(40),n(13)),O=n(0),p=function(e){var t=e.count;return Object(O.jsxs)("div",{className:"header-container",children:[Object(O.jsx)("h1",{className:"logo-heading",children:"UNI Resto Cafe"}),Object(O.jsxs)("div",{className:"nav-items",children:[Object(O.jsx)("p",{className:"my-order-txt",children:"My Orders"}),Object(O.jsxs)("div",{className:"cart-card",children:[Object(O.jsx)(b.a,{className:"cart-icon"}),Object(O.jsx)("span",{className:"cart-count",children:t})]})]})]})},y=(n(42),function(e){var t=e.menuData,n=e.isActiveTab,a=e.onChangeTabId,c=t.menuCategory,s=t.menuCategoryId,r=n?"active-tab-text":null;return Object(O.jsx)("li",{className:"menu-item",children:Object(O.jsx)("button",{onClick:function(){a(s)},className:"tab-btn ".concat(r),type:"button",children:Object(O.jsx)("p",{className:"tab-name",children:c})})})}),f=(n(43),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={quantity:0},e.onClickIncrease=function(){e.setState((function(e){return{quantity:e.quantity+1}}),(function(){(0,e.props.onIncreaseCount)()}))},e.onClickDecrease=function(){e.state.quantity>0?e.setState((function(e){return{quantity:e.quantity-1}}),(function(){(0,e.props.onDecreaseCount)()})):e.setState({quantity:0})},e.renderDisItems=function(){var t=e.props.dish,n=e.state.quantity,a=t.dishName,c=t.dishImage,s=t.dishCalories,r=t.dishAvailability,i=t.dishCurrency,o=t.dishDescription,u=t.dishPrice,l=t.addonCat;return Object(O.jsxs)("li",{className:"dish-item-card",children:[Object(O.jsxs)("div",{className:"circle-content-card",children:[Object(O.jsx)("div",{className:"box  ".concat(u>10?"high-rate-props":""),children:Object(O.jsx)("p",{className:"circle ".concat(u>10?"high-rate-circle":"")})}),Object(O.jsxs)("div",{className:"content-div",children:[Object(O.jsx)("h1",{className:"name",children:a}),Object(O.jsx)("p",{className:"money",children:"".concat(i," ").concat(u)}),Object(O.jsx)("p",{className:"description",children:o}),r?Object(O.jsxs)("div",{className:"qunatity-control-card",children:[Object(O.jsx)("button",{type:"button",className:"control",onClick:e.onClickDecrease,children:"-"}),Object(O.jsx)("p",{className:"qunatity",children:n}),Object(O.jsx)("button",{type:"button",className:"control",onClick:e.onClickIncrease,children:"+"})]}):Object(O.jsx)("p",{className:"not-availble",children:"Not available"}),l.length?Object(O.jsx)("p",{className:"customization-text",children:"Customizations available"}):""]})]}),Object(O.jsx)("p",{className:"calories-num calories-num-sm",children:"".concat(s," Calories")}),Object(O.jsxs)("div",{className:"cal-img-card",children:[Object(O.jsxs)("p",{className:"calories-num calories-num-lg",children:[s," calories"]}),Object(O.jsx)("img",{className:"dish-img",alt:a,src:c})]})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return this.renderDisItems()}}]),n}(a.Component)),x=f,g="LOADING",v="SUCCESS",N="FAILURE",C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={status:g,activeTabId:"11",data:[],count:0},e.onChangeActiveTab=function(t){e.setState({activeTabId:t})},e.componentDidMount=Object(o.a)(Object(i.a)().mark((function t(){var n,a;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({status:v,data:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.setState({status:N});case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e.renderLoader=function(){return Object(O.jsx)("div",{className:"loader-container",children:Object(O.jsx)(j.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.onIncrease=function(){e.setState((function(e){return{count:e.count+1}}))},e.onDecrease=function(){0===e.state.count?e.setState({count:0}):e.setState((function(e){return{count:e.count-1}}))},e.renderSuccessView=function(){var t=e.state,n=t.data,a=t.activeTabId,c=t.count;console.log(n);var s=n[0].table_menu_list,r=s.filter((function(e){return e.menu_category_id===a})),i=s.map((function(e){return{categoryDishes:e.category_dishes,menuCategory:e.menu_category,menuCategoryId:e.menu_category_id,menuCategoryImage:e.menu_category_image}})),o={categoryDishes:r[0].category_dishes,menuCategory:r[0].menu_category,menuCategoryId:r[0].menu_category_id}.categoryDishes;console.log(o);var u=o.map((function(e){return{addonCat:e.addonCat,dishAvailability:e.dish_Availability,dishCalories:e.dish_calories,dishCurrency:e.dish_currency,dishDescription:e.dish_description,dishId:e.dish_id,dishImage:e.dish_image,dishName:e.dish_name,dishPrice:e.dish_price,quantity:e.quantity?e.quantity:0}}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{count:c}),Object(O.jsx)("div",{className:"dish-item-category-div",children:Object(O.jsx)("ul",{className:"tabs-container",children:i.map((function(t){return Object(O.jsx)(y,{isActiveTab:t.menuCategoryId===a,menuData:t,onChangeTabId:e.onChangeActiveTab},t.menuCategoryId)}))})}),Object(O.jsx)("ul",{className:"dish-items-containers",children:u.map((function(t){return Object(O.jsx)(x,{count:c,dish:t,onIncreaseCount:e.onIncrease,onDecreaseCount:e.onDecrease},t.dishId)}))})]})},e.renderDiffViews=function(){switch(e.state.status){case g:return e.renderLoader();case v:return e.renderSuccessView();case N:return Object(O.jsx)("h1",{className:"failure-mesg",children:"Failed To Load..."});default:return null}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"home-main-container",children:this.renderDiffViews()})}}]),n}(a.Component),I=C,_=function(){return Object(O.jsx)(I,{})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2b295cd2.chunk.js.map