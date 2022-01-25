document.addEventListener('click',()=>{
    import(/* webpackPrefetch: true */ './click.js').then(({default:_})=>{
        func()
    })
}) 

