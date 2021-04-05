// Stop Watch Application!

var min = 0;
var sec = 0;
var msec = 0;

var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmsec = document.getElementById('msec');
var ulist = document.getElementById('ul')


var Intervel;

function Timer(){
    msec++
    getmsec.innerHTML = msec;
    if(msec >= 100){
sec++
getsec.innerHTML = sec
msec = 0
  }
  else if(sec >= 59){
      min++
      getmin.innerHTML = min
      sec = 0

  }
}
function active(){
Intervel = setInterval(Timer,10)
document.getElementById('activeID').disabled=true
}

function pause(){
    clearInterval(Intervel)
    document.getElementById('activeID').disabled=false
}
function reset(){
    min = 0
    sec = 0
    msec = 0

getmin.innerHTML = '00'
getsec.innerHTML = '00'
getmsec.innerHTML = '00'
ulist.innerHTML = ''

pause()

}
   
function lab(){
    
    var createElement = document.createElement('li')
    var createTextNode = document.createTextNode( `${min} : ${sec} : ${msec}`)
    createElement.appendChild(createTextNode)
    ulist.appendChild(createElement)
}