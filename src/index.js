import test from './test.js'
console.log(test.name);

// function getComponent(){
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default:_})=>{
//         var element=document.createElement('div');
//         element.innerHTML=_.join(['dell','lee'],'---')
//         return element;
//     })
// }
// getComponent().then(element=>{
//     document.body.appendChild(element)
// })
