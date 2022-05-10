
    const dateSetNow = document.querySelector("input[name=Fecha]");

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    dateSetNow.value=output;

    dateSetNow.addEventListener('click', ()=>{
    dateSetNow.type='date';
})

document.querySelector(".naight").addEventListener('click', (e)=>{
    document.querySelector('body').classList.toggle("dark-mode")
  
})
