let names = ['noah','liam','oliver','henry','benjamin','alexander','theodore','william','mateo','logan','james','lucas','olivia','emma','sophia','charlotte','amelia','ava','isabella','mia','evelyn','camila','sofia','gianna','eleanor','nora','arashkh<i class="bi bi-balloon-heart-fill"></i>','armin']

let x = names.length
let lf = false
// search()

function letterfilter(self){
    lf =  (lf !== true)
    self.classList.toggle('on')
    search()
}

function reset(){
    document.getElementsByClassName('searchBox')[0].classList.remove('searchExpand')
    document.getElementsByTagName('input')[0].value=''

    for(j=(document.querySelectorAll('ul>li').length)-1; j>=0 ; j--){
        document.getElementsByTagName('li')[j].remove()
    }
}

function licopy(self){
    let temp = self.innerText
    document.getElementsByTagName('input')[0].value = temp
    search()
    // self.classList.add('selected')
}

function search(){
    document.getElementsByClassName('searchBox')[0].classList.add('searchExpand')

    let counter = 0
    let input$ = document.getElementById('search').value
    // let inlenght = input$.length
    // console.log(input$)
    let y = document.getElementsByTagName('li')
    y = y.length
    // console.log(y)
    if(y > 0){
        for(j=y-1; j>=0 ; j--){
            document.getElementsByTagName('li')[j].remove()
            // console.log(y)
        }
    }

    // input$.length != 0
    if((input$.length != 0)&&(lf)){
        for(i=0 ; i < (x) ; i++){
            if(
                names[i].substring(0,(input$.length)).indexOf(input$) != (-1)
            ){
                counter++
                let addRes = document.createElement('li')
                addRes.setAttribute('class','result')
                addRes.setAttribute('onclick','licopy(this)')
                addRes.innerHTML='<b>'+input$+'</b>'+names[i].substring(input$.length,names[i].length)
                document.getElementsByTagName('ul')[0].appendChild(addRes)

            }
        }
    }else if((input$.length != 0)||(lf)){
        for(i=0 ; i < (x) ; i++){
            if(
                names[i].indexOf(input$) != (-1)
            ){
                counter++
                let addRes = document.createElement('li')
                addRes.setAttribute('class','result')
                addRes.setAttribute('onclick','licopy(this)')
                addRes.innerHTML=names[i]
                document.getElementsByTagName('ul')[0].appendChild(addRes)

            }
        }
    }
    if(counter==0 && input$.length>0){
        let addRes = document.createElement('li')
        addRes.setAttribute('id','noRes')
        addRes.innerHTML='<i class="bi bi-x-circle-fill"></i>Not found'
        setTimeout(() => {
            addRes.style.opacity='1'
        }, 100);
        document.getElementsByTagName('ul')[0].appendChild(addRes)
    }else if(counter==0 && input$.length==0){
        reset()
    }
}