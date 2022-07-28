clock()
setInterval(clock,1000)
let second , minute , hour

function clock(){
    let $date = new Date();
    document.getElementById('Second').style.transform='rotate('+ 6*$date.getSeconds() +'deg)'

    document.getElementById('Minute').style.transform='rotate('+ ((6*$date.getMinutes())+(0.1*$date.getSeconds())) +'deg)'
    
    document.getElementById('Hour').style.transform='rotate('+ ((30*$date.getHours())+((360/720)*$date.getMinutes())) +'deg)'

    document.getElementById('date').innerHTML=$date.getDate()
}