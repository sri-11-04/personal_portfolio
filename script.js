
let root = document.documentElement
let div = document.getElementById(`div`),
    obj = {
        root:null,
        threshold:1,
        rootMargin:`0px`
    }

    let observer = new IntersectionObserver((entries)=>{
        if (true){
            console.log(getComputedStyle(root).getPropertyValue('--percentage'))
        setTimeout(complete,500)
        // complete()
        function success(){
            return new Promise((res)=>{
            const percent = async () =>{
                if(getComputedStyle(root).getPropertyValue('--percentage').trim()==='100%'){
                    res()
                }
                else{
                    setTimeout(percent,500)
                }
            }
                percent()
            })
        }

        function increase(){
            let progress = 0
            const progInterval = setInterval(()=>{
                progress++
                root.style.setProperty('--percentage',`${progress}%`)          //* before conical bg
                root.style.setProperty('--hello',`'${progress}% ✔️'`)          //* before conical bg
                if (progress>=100){
                    clearInterval(progInterval)
                }
            },10)
        }

        async function complete() {
            increase()
            await success()
        }
        }else{
            root.style.setProperty('--percentage',`0%`)
        }
        

        
    },obj)

// const inter = setInterval(()=>{
//     if (screen.width <= 469){
//         observer.observe(div)
//         clearInterval(inter)
//     }
// },500)
    
// console.log(screen.width)



