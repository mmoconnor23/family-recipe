webpackJsonp([1],{"+Gxq":function(e,t,i){"use strict";var r=i("fnDg").a,n=i("VU/8")(r,null,!1,function(e){i("4veK")},null,null);t.a=n.exports},"4veK":function(e,t){},"7Bd8":function(e,t){},"9M+g":function(e,t){},AwgC:function(e,t){},EDfr:function(e,t,i){"use strict";i.d(t,"a",function(){return l});var r=i("//Fk"),n=i.n(r),s=i("Zrlr"),a=i.n(s),o=i("wxAW"),c=i.n(o),l=new(function(){function e(){a()(this,e),this.categories=[{display:"Appetizer",value:"appetizer"},{display:"Dessert",value:"dessert"},{display:"Pasta",value:"pasta"},{display:"Soup",value:"soup"},{display:"Casserole",value:"casserole"},{display:"Sandwich",value:"sandwich"},{display:"Entree (other)",value:"entree"}],this.recipes=[{title:"Spinach and Artichoke Dip",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["appetizer"],isVegetarian:!0,id:"0",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Cupcakes",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["dessert"],isVegetarian:!0,id:"1",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Green (Creamed Spinach) Noodles",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["entree","pasta"],isVegetarian:!0,id:"2",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Cauliflower Soup",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["soup"],isVegetarian:!1,id:"3",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Mexican-Style Zucchini Casserole",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["entree","casserole"],isVegetarian:!1,id:"4",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Tomato, Mozzarella & Pesto Sandwich",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["entree","sandwich"],isVegetarian:!1,id:"5",description:"This is a sample recipe. I will use it to test the styling of the display page."},{title:"Grilled Cheese Sandwich",contributor:"Melissa O'Connor",steps:["Step 1","Step 2","Step 3"],ingredients:["Ingredient 1","Ingredient 2","Ingredient 3"],pictures:["img1","img2"],categories:["entree","sandwich"],isVegetarian:!1,id:"6",description:"This is a sample recipe. I will use it to test the styling of the display page."}]}return c()(e,[{key:"getCategories",value:function(){return this.categories}},{key:"getRecipes",value:function(){return n.a.resolve(this.recipes)}}]),e}())},"HUt/":function(e,t,i){"use strict";var r=i("qRo1").a,n=i("VU/8")(r,null,!1,function(e){i("n9mN")},null,null);t.a=n.exports},JCpY:function(e,t,i){"use strict";var r=i("rKsW").a,n=i("VU/8")(r,null,!1,function(e){i("xBwK")},null,null);t.a=n.exports},JDVb:function(e,t,i){"use strict";var r=i("9NuQ").a,n=i("VU/8")(r,null,!1,function(e){i("Y9O/")},null,null);t.a=n.exports},Jmt5:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("Jmt5"),i("9M+g");var r=i("7+uW"),n=i("e6fC"),s=i("IZMb"),a=i.n(s),o={name:"app",components:{AddRecipe:i("tByc").a},data:function(){return{tabs:[{title:"Home",route:"/home"},{title:"Recipes",route:"/recipes"},{title:"About",route:"/about"},{title:"Add Recipe",route:"/addRecipe"}]}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[i("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),i("b-navbar-brand",{attrs:{to:"/home"}},[e._v("My Family Recipe")]),e._v(" "),i("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[i("b-navbar-nav",e._l(e.tabs,function(t){return i("b-nav-item",{key:t.route,attrs:{to:t.route}},[e._v("\n          "+e._s(t.title)+"\n        ")])})),e._v(" "),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-form")],1)],1)],1),e._v(" "),i("router-view",{staticClass:"app-content"})],1)},staticRenderFns:[]},l=i("VU/8")(o,c,!1,function(e){i("vvnU")},null,null).exports,p=i("YaEn");r.a.config.productionTip=!1,r.a.use(n.a),r.a.use(a.a),new r.a({el:"#app",router:p.a,template:"<App/>",components:{App:l}})},RJXE:function(e,t,i){"use strict";var r=i("M4fF"),n=i("EDfr"),s={name:"Recipe",data:function(){var e=this;return n.a.getRecipes().then(function(t){e.recipes=t,e.recipe=Object(r.find)(e.recipes,{id:e.$route.params.recipeId})}),{recipe:{}}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-button",{attrs:{type:"button",to:"/recipes",variant:"primary"}},[e._v("\n    Back to All Recipes\n  ")]),e._v(" "),i("h2",[e._v(e._s(e.recipe.title))]),e._v(" "),i("h4",[e._v(e._s(e.recipe.description))]),e._v(" "),e._l(e.recipe.categories,function(t){return i("b-button",{key:t,staticClass:"btn-category",attrs:{size:"sm"}},[e._v("\n    "+e._s(t)+"\n  ")])}),e._v(" "),i("div",{staticClass:"ingredients"},[e._v("\n    Ingredients\n    "),i("ol",e._l(e.recipe.ingredients,function(t){return i("li",[e._v("\n        "+e._s(t)+"\n      ")])}))]),e._v(" "),i("div",{staticClass:"steps"},[e._v("\n    Steps\n    "),i("ol",e._l(e.recipe.steps,function(t){return i("li",[e._v("\n        "+e._s(t)+"\n      ")])}))])],2)},staticRenderFns:[]},o=i("VU/8")(s,a,!1,function(e){i("ROqs")},"data-v-b88386dc",null);t.a=o.exports},ROqs:function(e,t){},"Y9O/":function(e,t){},YaEn:function(e,t,i){"use strict";(function(e){var r=i("7+uW"),n=i("/ocq"),s=i("lO7g"),a=i("c27y"),o=i("re+P"),c=i("RJXE"),l=i("tByc");r.a.use(n.a),t.a=new n.a({base:e,routes:[{path:"/home",name:"Home",component:s.a},{path:"/about",name:"About",component:a.a},{path:"/recipes",name:"Recipes",component:o.a},{path:"/recipe/:recipeId",name:"Recipe",component:c.a},{path:"/addRecipe",name:"Add Recipe",component:l.a},{path:"*",redirect:"/home"}]})}).call(t,"/")},c27y:function(e,t,i){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"hello"},[this._v("\n  This is the about page\n")])},staticRenderFns:[]},n=i("VU/8")({name:"About",data:function(){return{tabs:[]}}},r,!1,function(e){i("AwgC")},"data-v-7a76c0c4",null);t.a=n.exports},dW2o:function(e,t){},lO7g:function(e,t,i){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"hello"},[this._v("\n  This is the home page\n")])},staticRenderFns:[]},n=i("VU/8")({name:"Home",data:function(){return{tabs:[]}}},r,!1,function(e){i("suCA")},"data-v-1bddc502",null);t.a=n.exports},n9mN:function(e,t){},r15W:function(e,t,i){"use strict";var r=i("E9Zr").a,n=i("VU/8")(r,null,!1,function(e){i("dW2o")},null,null);t.a=n.exports},"re+P":function(e,t,i){"use strict";var r=i("M4fF"),n=i("EDfr"),s=[],a={name:"Recipes",data:function(){var e=this;return n.a.getRecipes().then(function(t){s=Object(r.cloneDeep)(t),e.recipes=Object(r.sortBy)(s,"title")}),{isHovering:!1,isVegetarian:!1,searchText:"",categories:n.a.getCategories(),recipes:[],selectedCategories:[]}},methods:{setHovering:function(e,t){this.recipes.find(function(t){return t.id===e}).isHovering=t,this.isHovering=t},getIsHovering:function(e){return e.isHovering},filterRecipes:function(){var e=this;this.recipes=Object(r.filter)(s,function(t){return Object(r.every)(e.selectedCategories,function(e){return t.categories.includes(e)})}),this.isVegetarian&&(this.recipes=Object(r.filter)(this.recipes,{isVegetarian:this.isVegetarian})),this.recipes=Object(r.sortBy)(this.recipes,"title")},searchRecipes:function(){var e=this;this.filterRecipes(),this.searchText.length&&(this.recipes=_.filter(this.recipes,function(t){return t.title.toLowerCase().includes(e.searchText.toLowerCase())}))},navigateTo:function(e){console.log(e)}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-view"},[i("div",{staticClass:"categories"},[e._l(e.categories,function(t){return i("div",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategories,expression:"selectedCategories"}],attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(e.selectedCategories)?e._i(e.selectedCategories,t.value)>-1:e.selectedCategories},on:{change:[function(i){var r=e.selectedCategories,n=i.target,s=!!n.checked;if(Array.isArray(r)){var a=t.value,o=e._i(r,a);n.checked?o<0&&(e.selectedCategories=r.concat([a])):o>-1&&(e.selectedCategories=r.slice(0,o).concat(r.slice(o+1)))}else e.selectedCategories=s},e.filterRecipes]}}),e._v("\n            "+e._s(t.display)+"\n      ")])])}),e._v(" "),i("hr"),e._v(" "),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isVegetarian,expression:"isVegetarian"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isVegetarian)?e._i(e.isVegetarian,null)>-1:e.isVegetarian},on:{change:[function(t){var i=e.isVegetarian,r=t.target,n=!!r.checked;if(Array.isArray(i)){var s=e._i(i,null);r.checked?s<0&&(e.isVegetarian=i.concat([null])):s>-1&&(e.isVegetarian=i.slice(0,s).concat(i.slice(s+1)))}else e.isVegetarian=n},e.filterRecipes]}}),e._v("\n      Vegetarian?\n    ")])],2),e._v(" "),i("div",{staticClass:"all-recipes"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchText},on:{keyup:e.searchRecipes,input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._v(" "),e._l(e.recipes,function(t){return i("div",{staticClass:"recipe-preview",on:{mouseenter:function(i){e.setHovering(t.id,!0)},mouseleave:function(i){e.setHovering(t.id,!1)}}},[i("div",[i("b",[e._v(e._s(t.title))]),e._v(" - "),i("i",[e._v(e._s(t.contributor)+" "+e._s(t.isHovering))])]),e._v(" "),i("div",[i("span",[e._v(e._s(t.description))])]),e._v(" "),i("b-button",{attrs:{type:"button","v-show":t.isHovering,to:{name:"Recipe",params:{recipeId:t.id}}}},[e._v("\n        See Full Recipe\n      ")])],1)})],2)])},staticRenderFns:[]},c=i("VU/8")(a,o,!1,function(e){i("7Bd8")},"data-v-22df12b4",null);t.a=c.exports},suCA:function(e,t){},tByc:function(e,t,i){"use strict";var r=i("woOf"),n=i.n(r),s=i("mtWM"),a=i("EDfr").a.getCategories().map(function(e){return e.display}),o={categories:[]},c={name:"AddRecipe",data:function(){var e=this;return{onSubmit:function(t){t.preventDefault(),e.$refs["add-recipe-popover"].$emit("close"),s.post("https://vegapie-recipe-server.herokuapp.com/addRecipe",{params:e.form}).then(function(t){e.$toasted.success("success "+t.data,{theme:"bubble",position:"bottom-right",duration:5e3,action:{text:"Dismiss",onClick:function(e,t){t.goAway(0)}}})}).catch(function(t){e.$toasted.error("failure "+t,{theme:"bubble",position:"bottom-right",duration:5e3,action:{text:"Dismiss",onClick:function(e,t){t.goAway(0)}}})})},onReset:function(t){t.preventDefault(),e.form=n()({},o)},form:n()({},o),categoryOptions:a}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add-recipe-form"},[i("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[i("b-form-group",{attrs:{id:"contributor-group",label:"Contributor:","label-for":"contributor-form",description:"The person who originally created this recipe"}},[i("b-form-input",{attrs:{id:"contributor-form",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.contributor,callback:function(t){e.$set(e.form,"contributor",t)},expression:"form.contributor"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"title-group",label:"Title:","label-for":"title-form"}},[i("b-form-input",{attrs:{id:"title-form",type:"text",required:"",placeholder:"Enter recipe name"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your Name:","label-for":"exampleInput2"}},[i("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"ingredients-group",label:"Ingredients:","label-for":"ingredients-form"}},[i("b-form-textarea",{attrs:{id:"ingredients-form",placeholder:"Enter the list of ingredients",rows:3,"max-rows":10},model:{value:e.form.ingredients,callback:function(t){e.$set(e.form,"ingredients",t)},expression:"form.ingredients"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"steps-group",label:"Steps:","label-for":"steps-form"}},[i("b-form-textarea",{attrs:{id:"steps-form",placeholder:"Enter the list of steps",rows:3,"max-rows":10},model:{value:e.form.steps,callback:function(t){e.$set(e.form,"steps",t)},expression:"form.steps"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"description-group",label:"Description:","label-for":"description-form"}},[i("b-form-textarea",{attrs:{id:"description-form",placeholder:"Enter a description",rows:3,"max-rows":10},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"category-group",label:"Category:","label-for":"category-form"}},[i("b-form-select",{staticClass:"mb-3",attrs:{multiple:"","select-size":4,options:e.categoryOptions},model:{value:e.form.categories,callback:function(t){e.$set(e.form,"categories",t)},expression:"form.categories"}})],1),e._v(" "),i("b-form-group",{attrs:{id:"vegetarian-group"}},[i("b-form-checkbox",{attrs:{value:"form.isVegetarian"}},[e._v("Vegetarian?")])],1),e._v(" "),i("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),i("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)},staticRenderFns:[]},p=i("VU/8")(c,l,!1,function(e){i("vorj")},"data-v-f5b6fc14",null);t.a=p.exports},vorj:function(e,t){},vvnU:function(e,t){},xBwK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fa9a37756f091a2e108e.js.map