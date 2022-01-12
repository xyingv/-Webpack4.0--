function getComponent(){
    return import('lodash').then(({default:_})=>{
        var element=document.createElement('div');
        element.innerHTML=_.join(['dell','lee'],'---')
        return element;
    })
}
getComponent().then(element=>{
    document.body.appendChild(element)
})
