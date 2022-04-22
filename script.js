
var pwd=prompt('whats the password');
if(pwd=='kairavisagenius'){
const numList = document.querySelector('#user-list');
function renderItem(xv,yv){
    let li = document.createElement('li');
    let x = document.createElement('span');
    let s=document.createElement('span');
    let y=document.createElement('span')
    
    x.textContent = yv;
    s.textContent='              ';
    y.textContent = xv;

    li.appendChild(x);
    li.appendChild(s);
    li.appendChild(y);

    numList.appendChild(li);
}
var a=prompt('a value')
var b=prompt('b value')
var c=prompt('c value')
var sol1a=(-1*b)+Math.sqrt(Math.pow(b,2)-4*a*c)
var sol1=sol1a/(2*a)


var sol2a=(-1*b)-Math.sqrt(Math.pow(b,2)-4*a*c)
var sol2=sol2a/(2*1)

alert('solutions are '+sol1+" and "+sol2)




var vertexx=(-1*b)/(2*a);
var vertexy1=Math.pow(vertexx,2)*a
var vertexy2=b*vertexx
var vertexy3=vertexy1+vertexy2
var vertexy=vertexy3+c*1

alert('vertex is '+vertexx+',' +vertexy); 

for(i=-100;i<100;i++){
  var pointy1=Math.pow(i,2)*a
var pointy2=b*i
var pointy3=pointy1+pointy2
var pointy=pointy3+c*1
renderItem(i,pointy);
}

var z=8;


var soly1=Math.pow(z,2)*a
var soly2=b*z
var soly3=soly1+soly2
var soly=soly3+c*1
//e
var apart1=soly-vertexy;
console.log(apart1)
var aval=apart1/Math.pow(z-vertexx,2);
console.log(aval);

//e0

alert('vertex form is '+' y='+aval+'(x-'+vertexx+')^2+'+vertexy)

}else{
    window.location.href='yourmomisfat.com'
}







