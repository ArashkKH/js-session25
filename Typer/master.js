let sentences$ = ['Hi, Im Arash Kheirollahi','Im a web developer','this is a random text','this one is not random at all!','ok i lied, it was random :(','how you doin btw?','im doing pretty good today :)','had a real good time :D']
let i = 1
let counter = 0
let func1 = setInterval(typer,50)
let func2
console.log(sentences$[counter].length)


function typer(){
    if(counter<sentences$.length){
        if(i <= sentences$[counter].length){
            document.getElementsByTagName('main')[0].innerHTML=(sentences$[counter].substr(0,i))
            i++
        }else{
            clearInterval(func1)
            setTimeout(() => {
                func2 = setInterval(backspacer,50)
            }, 2000);
        }
    }else{
        counter = 0
        clearInterval(func1)
        func1 = setInterval(typer,50)
    }
}

function backspacer(){
    if(i>=1){
        document.getElementsByTagName('main')[0].innerHTML=(sentences$[counter].substr(0,i))
        i--
    }else{
        document.getElementsByTagName('main')[0].innerHTML=('')
        counter++
        clearInterval(func2)
        func1 = setInterval(typer,50)
    }
    // console.log(i)
}