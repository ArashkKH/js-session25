let names = ['noah','liam','oliver','henry','benjamin','alexander','theodore','william','mateo','logan','james','lucas','olivia','emma','sophia','charlotte','amelia','ava','isabella','mia','evelyn','camila','sofia','gianna','eleanor','nora']

let x = names.length
search()
function search(){
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
    if(true){
        for(i=0 ; i < (x) ; i++){
            if(
                names[i].substring(0,(input$.length)).indexOf(input$) != (-1)
            ){
                counter++
                let addRes = document.createElement('li')
                addRes.setAttribute('class','result')
                addRes.innerHTML='<b>'+input$+'</b>'+names[i].substring(input$.length,names[i].length)
                document.getElementsByTagName('ul')[0].appendChild(addRes)

            }
        }
    }
    if(counter==0 && input$.length>0){
        let addRes = document.createElement('li')
        addRes.setAttribute('id','noRes')
        addRes.innerText='Not found'
        document.getElementsByTagName('ul')[0].appendChild(addRes)
    }
}