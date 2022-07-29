let names = ['noah','liam','oliver','henry','benjamin','alexander','theodore','william','mateo','logan','james','lucas','olivia','emma','sophia','charlotte','amelia','ava','isabella','mia','evelyn','camila','sofia','gianna','eleanor','nora']

let x = names.length
function search(){
    let counter = 0
    let input$ = document.getElementById('search').value
    // let inlenght = input$.lenght
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

    if(input$.length != 0){
        for(i=0 ; i < (x) ; i++){
            if(
                names[i].indexOf(input$) != (-1)
            ){
                counter++
                let addRes = document.createElement('li')
                addRes.setAttribute('class','result')
                addRes.innerText=names[i]
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