
let cuadros=document.getElementsByClassName('cuadros')
const formulario = document.forms.formulario
let cuadro1 = document.getElementById('cuadro1')
let cuadro2 = document.getElementById('cuadro2')
let cuadro3 = document.getElementById('cuadro3')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
let categoria = document.querySelector('#categorie')
function over(cuadro){
    cuadro.classList.replace('border-muted','border-success')
}
function leave(cuadro){
    cuadro.classList.replace('border-success','border-muted')
}

function click(cuadro) {

    cuadro.ariaChecked=true
    cuadro===cuadro1&&cuadro.classList.add('border-primary')
    cuadro===cuadro2&&cuadro.classList.add('border-danger')
    cuadro===cuadro3&&cuadro.classList.add('border-warning')
    categoria.value=cuadro.id==='cuadro1'&&'1'||cuadro.id==='cuadro2'&&'2'||cuadro.id==='cuadro3'&&'3'
    if (cuadro===cuadro1){
        cuadro2.classList.remove('border-danger')
        cuadro3.classList.remove('border-warning')
    }else if(cuadro===cuadro2){
        cuadro1.classList.remove('border-primary')
        cuadro3.classList.remove('border-warning')
    }else{
        cuadro1.classList.remove('border-primary')
        cuadro2.classList.remove('border-danger')
    }
}

function asignar(cuadro) {
    cuadro.addEventListener('mouseover', () => over(cuadro))
    cuadro.addEventListener('mouseleave', () => leave(cuadro))
    cuadro.addEventListener('click', () => click(cuadro))

}
asignar(cuadro1)
asignar(cuadro2)
asignar(cuadro3)
function seleccionHecha(cuadro) {
if (categoria.value==='1'){
    cuadro1.classList.replace('border-muted','border-primary')
    cuadro2.classList.replace('border-danger','border-muted')
    cuadro3.classList.replace('border-warning','border-muted')
}else if(categoria.value==='2'){
    cuadro1.classList.replace('border-primary','border-muted')
    cuadro2.classList.replace('border-muted','border-danger')
    cuadro3.classList.replace('border-warning','border-muted')
}else{
    cuadro1.classList.replace('border-primary','border-muted')
    cuadro2.classList.replace('border-danger','border-muted')
    cuadro3.classList.replace('border-muted','border-warning')
}
}

categoria.addEventListener('change', seleccionHecha)
//FUNCION BOTONES 
function deleteFields(e){
    document.getElementById('form').reset()
    document.getElementById('textAlert').innerHTML=' '
    cuadro1.classList.replace('border-primary','border-muted')||cuadro2.classList.replace('border-danger','border-muted')||cuadro3.classList.replace('border-warning','border-muted')

}
function resume(){
    let inputTickets=parseFloat(document.getElementById('cant').value)
    let discount
    if(categoria.value==='1'){
        
        discount=(inputTickets*200)-(inputTickets*200)*0.80
    }else if(categoria.value==='2'){
        discount=(inputTickets*200)-(inputTickets*200)*0.50
    }else if(categoria.value==='3'){
        discount=(inputTickets*200)-(inputTickets*200)*0.20
    }
    let alert=document.getElementById('textAlert')
    alert.innerHTML+=`<b>${discount}</b><hr><b>Sus datos son:</b><br><b>Nombre(s) y apellido(s): </b>${nombre.value} ${apellido.value}<br><b>Correo electronico: </b>${correo.value}<br><b>Categoria de descuento: </b>${categoria.value}<br><b>Cantidad de tickets: </b>${cant.value}<hr>`
    
}


button1.addEventListener('click',(e)=>deleteFields(e))
button2.addEventListener('click',resume)