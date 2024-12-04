
let root = null,
    div = document.getElementById(`div`),
    obj = {
        root:null,
        threshold:1,
        rootMargin:`0px`
    }

    let observer = new IntersectionObserver((entries)=>{
        console.log(entries)
    },obj)

const inter = setInterval(()=>{
    if (screen.width <= 469){
        observer.observe(div)
        clearInterval(inter)
    }
},500)
    
console.log(screen.width)



