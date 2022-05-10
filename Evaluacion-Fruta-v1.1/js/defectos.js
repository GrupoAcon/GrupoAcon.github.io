function validation_Of_corchosis(corchosis){
    const corchosisNum = document.getElementById("corchosisNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.corchosis').classList.toggle("caja");

    corchosis= parseFloat((corchosisNum.value)/(CantFrutas.value))*100

    if(corchosisNum.value){
        document.getElementById("corchosis℅").value= corchosis.toFixed(0)+ "%";
        document.getElementById("corchosis℅").style.display="block";
    }
}


var corchosis=document.querySelector('.corchosis');
corchosis.addEventListener('click', (e)=>{
    e.preventDefault()

    var corchosisNum =document.getElementById("corchosisNum");
    var corchosisP =document.getElementById("corchosis℅");

    if (!corchosisNum.value) {
        corchosisNum.style.display="none";
        corchosisP.style.display="none";
        document.querySelector('.corchosis').classList.toggle("cajaNone");
        corchosisNum.value="0"

    }else{
        corchosisNum.style.display="block";
    }
    if (corchosisP.value) {
        if (confirm("Mostrar Input Num") == false) {
            corchosisNum.style.display="none";   
        }else{
            corchosisNum.style.display="block";
        }
        
    }
})


// 

function validation_Of_plaga(plaga){
    const plagaNum = document.getElementById("plagaNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.plaga').classList.toggle("caja");

    plaga= parseFloat((plagaNum.value)/(CantFrutas.value))*100

    if(plagaNum.value){
        document.getElementById("plaga℅").value= plaga.toFixed(0)+ "%";
        document.getElementById("plaga℅").style.display="block";
    }
}


var plaga=document.querySelector('.plaga');
plaga.addEventListener('click', (e)=>{
    e.preventDefault()

    var plagaNum =document.getElementById("plagaNum");
    var plagaP =document.getElementById("plaga℅");

    if (!plagaNum.value) {
        plagaNum.style.display="none";
        plagaP.style.display="none";
        document.querySelector('.plaga').classList.toggle("cajaNone");
        plagaNum.value="0"

    }else{
        plagaNum.style.display="block";
    }
    if (plagaP.value) {
        if (confirm("Ocultar Entrada Num") == false) {
            plagaNum.style.display="none";   
        }else{
            plagaNum.style.display="block";
        }
        
    }
})

// Fruta Deforme
function validation_Of_deforme(deforme){
    const deformeNum = document.getElementById("deformeNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.deforme').classList.toggle("caja");

    deforme= parseFloat((deformeNum.value)/(CantFrutas.value))*100

    if(deformeNum.value){
        document.getElementById("deforme℅").value= deforme.toFixed(0)+ "%";
        document.getElementById("deforme℅").style.display="block";
    }
}


var deforme=document.querySelector('.deforme');
deforme.addEventListener('click', (e)=>{
    e.preventDefault()

    var deformeNum =document.getElementById("deformeNum");
    var deformeP =document.getElementById("deforme℅");

    if (!deformeNum.value) {
        deformeNum.style.display="none";
        deformeP.style.display="none";
        document.querySelector('.deforme').classList.toggle("cajaNone");
        deformeNum.value="0"

    }else{
        deformeNum.style.display="block";
    }
    if (deformeP.value) {
        if (confirm("Mostrar Input Num") == false) {
            deformeNum.style.display="none";   
        }else{
            deformeNum.style.display="block";
        }
        
    }
})

// simbra

function validation_Of_sombra(sombra){
    const sombraNum = document.getElementById("sombraNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.sombra').classList.toggle("caja");

    sombra= parseFloat((sombraNum.value)/(CantFrutas.value))*100

    if(sombraNum.value){
        document.getElementById("sombra℅").value= sombra.toFixed(0)+ "%";
        document.getElementById("sombra℅").style.display="block";
    }
}


var sombra=document.querySelector('.sombra');
sombra.addEventListener('click', (e)=>{
    e.preventDefault()

    var sombraNum =document.getElementById("sombraNum");
    var sombraP =document.getElementById("sombra℅");

    if (!sombraNum.value) {
        sombraNum.style.display="none";
        sombraP.style.display="none";
        document.querySelector('.sombra').classList.toggle("cajaNone");
        sombraNum.value="0"

    }else{
        sombraNum.style.display="block";
    }
    if (sombraP.value) {
        if (confirm("Mostrar Input Num") == false) {
            sombraNum.style.display="none";   
        }else{
            sombraNum.style.display="block";
        }
        
    }
})

// Corona

function validation_Of_corona(corona){
    const coronaNum = document.getElementById("coronaNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.corona').classList.toggle("caja");

    corona= parseFloat((coronaNum.value)/(CantFrutas.value))*100

    if(coronaNum.value){
        document.getElementById("corona℅").value= corona.toFixed(0)+ "%";
        document.getElementById("corona℅").style.display="block";
    }
}


var corona=document.querySelector('.corona');
corona.addEventListener('click', (e)=>{
    e.preventDefault()

    var coronaNum =document.getElementById("coronaNum");
    var coronaP =document.getElementById("corona℅");

    if (!coronaNum.value) {
        coronaNum.style.display="none";
        coronaP.style.display="none";
        document.querySelector('.corona').classList.toggle("cajaNone");
        coronaNum.value="0"

    }else{
        coronaNum.style.display="block";
    }
    if (coronaP.value) {
        if (confirm("Mostrar Input Num") == false) {
            coronaNum.style.display="none";   
        }else{
            coronaNum.style.display="block";
        }
        
    }
})
// pequen

function validation_Of_pequeña(pequeña){
    const pequeñaNum = document.getElementById("pequeñaNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.pequeña').classList.toggle("caja");

    pequeña= parseFloat((pequeñaNum.value)/(CantFrutas.value))*100

    if(pequeñaNum.value){
        document.getElementById("pequeña℅").value= pequeña.toFixed(0)+ "%";
        document.getElementById("pequeña℅").style.display="block";
    }
}


var pequeña=document.querySelector('.pequeña');
pequeña.addEventListener('click', (e)=>{
    e.preventDefault()

    var pequeñaNum =document.getElementById("pequeñaNum");
    var pequeñaP =document.getElementById("pequeña℅");

    if (!pequeñaNum.value) {
        pequeñaNum.style.display="none";
        pequeñaP.style.display="none";
        document.querySelector('.pequeña').classList.toggle("cajaNone");
        pequeñaNum.value="0"

    }else{
        pequeñaNum.style.display="block";
    }
    if (pequeñaP.value) {
        if (confirm("Mostrar Input Num") == false) {
            pequeñaNum.style.display="none";   
        }else{
            pequeñaNum.style.display="block";
        }
        
    }
})
// alta

function validation_Of_alta(alta){
    const altaNum = document.getElementById("altaNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.alta').classList.toggle("caja");

    alta= parseFloat((altaNum.value)/(CantFrutas.value))*100

    if(altaNum.value){
        document.getElementById("alta℅").value= alta.toFixed(0)+ "%";
        document.getElementById("alta℅").style.display="block";
    }
}


var alta=document.querySelector('.alta');
alta.addEventListener('click', (e)=>{
    e.preventDefault()

    var altaNum =document.getElementById("altaNum");
    var altaP =document.getElementById("alta℅");

    if (!altaNum.value) {
        altaNum.style.display="none";
        altaP.style.display="none";
        document.querySelector('.alta').classList.toggle("cajaNone");
        altaNum.value="0"

    }else{
        altaNum.style.display="block";
    }
    if (altaP.value) {
        if (confirm("Mostrar Input Num") == false) {
            altaNum.style.display="none";   
        }else{
            altaNum.style.display="block";
        }
        
    }
})

// muy Grande
function validation_Of_muygrande(muygrande){
    const muygrandeNum = document.getElementById("muygrandeNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.muygrande').classList.toggle("caja");

    muygrande= parseFloat((muygrandeNum.value)/(CantFrutas.value))*100

    if(muygrandeNum.value){
        document.getElementById("muygrande℅").value= muygrande.toFixed(0)+ "%";
        document.getElementById("muygrande℅").style.display="block";
    }
}


var muygrande=document.querySelector('.muygrande');
muygrande.addEventListener('click', (e)=>{
    e.preventDefault()

    var muygrandeNum =document.getElementById("muygrandeNum");
    var muygrandeP =document.getElementById("muygrande℅");

    if (!muygrandeNum.value) {
        muygrandeNum.style.display="none";
        muygrandeP.style.display="none";
        document.querySelector('.muygrande').classList.toggle("cajaNone");
        muygrandeNum.value="0"

    }else{
        muygrandeNum.style.display="block";
    }
    if (muygrandeP.value) {
        if (confirm("Mostrar Input Num") == false) {
            muygrandeNum.style.display="none";   
        }else{
            muygrandeNum.style.display="block";
        }
        
    }
})
// Meristemo
function validation_Of_meristemo(meristemo){
    const meristemoNum = document.getElementById("meristemoNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.meristemo').classList.toggle("caja");

    meristemo= parseFloat((meristemoNum.value)/(CantFrutas.value))*100

    if(meristemoNum.value){
        document.getElementById("meristemo℅").value= meristemo.toFixed(0)+ "%";
        document.getElementById("meristemo℅").style.display="block";
    }
}


var meristemo=document.querySelector('.meristemo');
meristemo.addEventListener('click', (e)=>{
    e.preventDefault()

    var meristemoNum =document.getElementById("meristemoNum");
    var meristemoP =document.getElementById("meristemo℅");

    if (!meristemoNum.value) {
        meristemoNum.style.display="none";
        meristemoP.style.display="none";
        document.querySelector('.meristemo').classList.toggle("cajaNone");
        meristemoNum.value="0"

    }else{
        meristemoNum.style.display="block";
    }
    if (meristemoP.value) {
        if (confirm("Mostrar Input Num") == false) {
            meristemoNum.style.display="none";   
        }else{
            meristemoNum.style.display="block";
        }
        
    }
})
// quema sol
function validation_Of_quemasol(quemasol){
    const quemasolNum = document.getElementById("quemasolNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.quemasol').classList.toggle("caja");

    quemasol= parseFloat((quemasolNum.value)/(CantFrutas.value))*100

    if(quemasolNum.value){
        document.getElementById("quemasol℅").value= quemasol.toFixed(0)+ "%";
        document.getElementById("quemasol℅").style.display="block";
    }
}


var quemasol=document.querySelector('.quemasol');
quemasol.addEventListener('click', (e)=>{
    e.preventDefault()

    var quemasolNum =document.getElementById("quemasolNum");
    var quemasolP =document.getElementById("quemasol℅");

    if (!quemasolNum.value) {
        quemasolNum.style.display="none";
        quemasolP.style.display="none";
        document.querySelector('.quemasol').classList.toggle("cajaNone");
        quemasolNum.value="0"

    }else{
        quemasolNum.style.display="block";
    }
    if (quemasolP.value) {
        if (confirm("Mostrar Input Num") == false) {
            quemasolNum.style.display="none";   
        }else{
            quemasolNum.style.display="block";
        }
        
    }
})
// bajo brixx

function validation_Of_bajobrix(bajobrix){
    const bajobrixNum = document.getElementById("bajobrixNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.bajobrix').classList.toggle("caja");

    bajobrix= parseFloat((bajobrixNum.value)/(CantFrutas.value))*100

    if(bajobrixNum.value){
        document.getElementById("bajobrix℅").value= bajobrix.toFixed(0)+ "%";
        document.getElementById("bajobrix℅").style.display="block";
    }
}


var bajobrix=document.querySelector('.bajobrix');
bajobrix.addEventListener('click', (e)=>{
    e.preventDefault()

    var bajobrixNum =document.getElementById("bajobrixNum");
    var bajobrixP =document.getElementById("bajobrix℅");

    if (!bajobrixNum.value) {
        bajobrixNum.style.display="none";
        bajobrixP.style.display="none";
        document.querySelector('.bajobrix').classList.toggle("cajaNone");
        bajobrixNum.value="0"

    }else{
        bajobrixNum.style.display="block";
    }
    if (bajobrixP.value) {
        if (confirm("Mostrar Input Num") == false) {
            bajobrixNum.style.display="none";   
        }else{
            bajobrixNum.style.display="block";
        }
        
    }
})

// calto

function validation_Of_calto(calto){
    const caltoNum = document.getElementById("caltoNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.calto').classList.toggle("caja");

    calto= parseFloat((caltoNum.value)/(CantFrutas.value))*100

    if(caltoNum.value){
        document.getElementById("calto℅").value= calto.toFixed(0)+ "%";
        document.getElementById("calto℅").style.display="block";
    }
}


var calto=document.querySelector('.calto');
calto.addEventListener('click', (e)=>{
    e.preventDefault()

    var caltoNum =document.getElementById("caltoNum");
    var caltoP =document.getElementById("calto℅");

    if (!caltoNum.value) {
        caltoNum.style.display="none";
        caltoP.style.display="none";
        document.querySelector('.calto').classList.toggle("cajaNone");
        caltoNum.value="0"

    }else{
        caltoNum.style.display="block";
    }
    if (caltoP.value) {
        if (confirm("Mostrar Input Num") == false) {
            caltoNum.style.display="none";   
        }else{
            caltoNum.style.display="block";
        }
        
    }
})

// conica

function validation_Of_conica(conica){
    const conicaNum = document.getElementById("conicaNum")
    const CantFrutas =document.querySelector('#sumaTotal')
    document.querySelector('.conica').classList.toggle("caja");

    conica= parseFloat((conicaNum.value)/(CantFrutas.value))*100

    if(conicaNum.value){
        document.getElementById("conica℅").value= conica.toFixed(0)+ "%";
        document.getElementById("conica℅").style.display="block";
    }
}


var conica=document.querySelector('.conica');
conica.addEventListener('click', (e)=>{
    e.preventDefault()

    var conicaNum =document.getElementById("conicaNum");
    var conicaP =document.getElementById("conica℅");

    if (!conicaNum.value) {
        conicaNum.style.display="none";
        conicaP.style.display="none";
        document.querySelector('.conica').classList.toggle("cajaNone");
        conicaNum.value="0"

    }else{
        conicaNum.style.display="block";
    }
    if (conicaP.value) {
        if (confirm("Mostrar Input Num") == false) {
            conicaNum.style.display="none";

        }else{
            conicaNum.style.display="block";
        }
        
    }
})
// BTN DESABLESD 


const btn_desabled = document.getElementById("btn_desabled").addEventListener("click", ()=>{
    // corchosis
    if (corchosisNum.value == 0) {
        document.querySelector('.corchosis_div').classList.toggle("desabled")  
        document.querySelector(".corchosis_div").classList.remove("active")
    }else{
        document.querySelector(".corchosis_div").classList.add("active")
    }
    // plaga
    if (plagaNum.value == 0) {
        document.querySelector('.plaga_div').classList.toggle("desabled")
        document.querySelector(".plaga_div").classList.remove("active")
    }else{
        document.querySelector(".plaga_div").classList.add("active")
    }
    // Deforme
    if (deformeNum.value == 0) {
        document.querySelector(".deforme_div").classList.toggle("desabled")
        document.querySelector(".deforme_div").classList.remove("active")
    }else{
        document.querySelector(".deforme_div").classList.add("active")
    }
    // Sombra
    if(sombraNum.value == 0){
        document.querySelector(".sombra_div").classList.toggle("desabled")
        document.querySelector(".sombra_div").classList.remove("active")
    }else{
        document.querySelector(".sombra_div").classList.add("active")
    }
    // Corona
    if(coronaNum.value == 0){
        document.querySelector(".corona_div").classList.toggle("desabled")
        document.querySelector(".corona_div").classList.remove("active")
    }  else{
        document.querySelector(".corona_div").classList.add("active")
    }
    // peque;a
    if (pequeñaNum.value ==0) {
        document.querySelector(".pequeña_div").classList.toggle('desabled')
        document.querySelector(".pequeña_div").classList.remove("active")
    }else{
        document.querySelector(".pequeña_div").classList.add("active")
    }
    // Alta 
    if (altaNum.value == 0) { 
        document.querySelector('.alta_div').classList.toggle('desabled')
        document.querySelector(".alta_div").classList.remove("active")
    } else{
            document.querySelector(".alta_div").classList.add("active")
    }
    // muygrande
    if (muygrandeNum.value == 0) { 
        document.querySelector(".muygrande_div").classList.toggle('desabled') 
        document.querySelector(".muygrande_div").classList.remove("active")
    }else{
        document.querySelector(".muygrande_div").classList.add("active")
    }
   
        // Meristemo
    if (meristemoNum.value == 0) { 
        document.querySelector('.meristemo_div').classList.toggle('desabled')
        document.querySelector(".meristemo_div").classList.remove("active")
    }else{
        document.querySelector(".meristemo_div").classList.add("active")
    }

    // quema sol
    if (quemasolNum.value == 0) { 
        document.querySelector('.quemasol_div').classList.toggle('desabled')
        document.querySelector(".quemasol_div").classList.remove("active")
    }else{
        document.querySelector(".quemasol_div").classList.add("active")
    }
        // Bajo Brix
    if (bajobrixNum.value == 0) { 
        document.querySelector('.bajobrix_div').classList.toggle('desabled')
        document.querySelector(".bajobrix_div").classList.remove("active")
    }else{
        document.querySelector(".bajobrix_div").classList.add("active")
    }
    //calto

    if (caltoNum.value == 0) {
        var calto_div=document.querySelector('.calto_div').classList.toggle("desabled")
        document.querySelector(".calto_div").classList.remove("active")
    }else{
        document.querySelector(".calto_div").classList.add("active")
    }

    // conica
    if (conicaNum.value == 0) {
        var conica_div=document.querySelector('.conica_div').classList.toggle("desabled")
        document.querySelector(".conica_div").classList.remove("active")
    }else{
        document.querySelector(".conica_div").classList.add("active")
    }
    
    // 
})