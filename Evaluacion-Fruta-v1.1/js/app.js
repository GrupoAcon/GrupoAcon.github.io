const curvo= function(Total_suma, res4s, Grande5s, Normal, Pequeña, isMpequeña){
    // Llamo mis inouts o entrada de cantidad de frutas
var jumbo4s = document.querySelector("#jumbo4s").value
var grande5s = document.getElementById('grande5s').value
var normal= document.querySelector('#normal').value
var pequeña= document.querySelector('#pequeña').value

var muyPequeña=document.querySelector('#muyPequeña').value


//Result de Total de cuenta

Total_suma= parseFloat(jumbo4s) +parseFloat(grande5s)+parseFloat(normal) +parseFloat(pequeña)+parseFloat(muyPequeña);


//suma para sacar un ℅™

res4s= (jumbo4s)/(Total_suma)*100
Grande5s= (grande5s)/(Total_suma)*100
Normal= (normal)/(Total_suma)*100
Pequeña= (pequeña)/(Total_suma)*100
isMpequeña= (muyPequeña)/(Total_suma)*100


//Defino el value o ℅ de cada valor o input
document.querySelector('#℅jumbo4s').value=res4s.toFixed(0)
document.querySelector('#℅grande5s').value=Grande5s.toFixed(0)
document.querySelector('#℅normal').value=Normal.toFixed(0)
document.querySelector('#℅pequeña').value=Pequeña.toFixed(0)
document.querySelector('#℅muypequeña').value=isMpequeña.toFixed(0)

var AllSuma=document.querySelector('#sumaTotal').value= Total_suma



/* 
Aqui Are una divicion donde escribire los metodos y funciones para el  la configuración de Color.. 

*/


function AllDatosCor(isbajo, isnormal, isgold, isalto) {
    
    const cbajo = document.querySelector("#cbajo").value
    const cnormal = document.querySelector("#cnormal").value
    const gold = document.querySelector("#gold").value
    const calto = document.querySelector("#calto").value

//Aplico la Formula 
isbajo=((cbajo)/(Total_suma))*100
isnormal=((cnormal)/(Total_suma))*100
isgold=((gold)/(Total_suma))*100
isalto=((calto)/(Total_suma))*100

document.querySelector("#℅cbajo").value=isbajo.toFixed(0)
document.querySelector("#℅cnormal").value=isnormal.toFixed(0)
document.querySelector("#℅gold").value=isgold.toFixed(0)
document.querySelector("#℅calto").value=isalto.toFixed(0)


    
}
AllDatosCor()
//(#{jumbos 4s}/#{total frutas})*100

};



// Is tha function  to view options or Select etiquet




/*document.querySelector('#btn').addEventListener('click', */

setInterval(() =>{

    
        // body...
    var brixOne = document.getElementById('brix1').value
    var brixTwo = document.getElementById('brix2').value
    var brixTree = document.getElementById('brix3').value

    var promedioBrix = document.getElementById('porcentage')
    
        // body...
        
var formulaBrix= ((parseFloat(brixOne)+(parseFloat(brixTwo)+parseFloat(brixTree)))/3) 

const brixReq = formulaBrix.toFixed(1)
    
    promedioBrix.innerHTML=brixReq;


//parseFloat(brixTwo).toFixed(1)
//parseFloat(brixTree).toFixed(1)

}, 2000) 
