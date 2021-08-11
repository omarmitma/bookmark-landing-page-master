/* Abrir y cerrar el Navegador Mobile */
let btnOpenNav=document.getElementById('btnOpenNav');
let btnCloseNav=document.getElementById('btnCloseNav');
let navMobile=document.getElementById('navMobile');

btnOpenNav.addEventListener('click',()=>{
    navMobile.style.marginTop='0';
    btnOpenNav.style.display='none';
});

btnCloseNav.addEventListener('click',()=>{
    navMobile.style.marginTop='-300%';
    btnOpenNav.style.display='block';
});

/* Active y cambio del div feature */

let prevActivebtn=`featureBtn1`;
let prevDiv='divFeature1'
function choiceChange(val){
    if(prevActivebtn){
        document.getElementById(prevActivebtn).classList.remove('activebtn');
        document.getElementById(prevDiv).style.display='none';
    }
    prevActivebtn=`featureBtn${val}`;
    prevDiv=`divFeature${val}`
    document.getElementById(`featureBtn${val}`).classList.add('activebtn');

    document.getElementById(`divFeature${val}`).style.display='grid';
}

/*  */
let prevActiveQuestion=null;
let prevDivAnswer=null;
function viewanswer(val){
    if(prevActiveQuestion){
        document.getElementById(prevActiveQuestion).classList.remove('activeQuestion');
    }
    if(prevActiveQuestion!==`wrapQuestion${val}`){
        prevActiveQuestion=`wrapQuestion${val}`;
        document.getElementById(`wrapQuestion${val}`).classList.add('activeQuestion');
    }else{
        document.getElementById(prevActiveQuestion).classList.remove('activeQuestion');
        prevActiveQuestion=null;
    }
    
}

/*  */
let email=document.getElementById('email');
let error=document.getElementById('message');
let submitFooter=document.getElementById('submitFooter');
let iconError=document.getElementById('iconError');
submitFooter.addEventListener('click',(event)=>{
    let validar;
    let expReg= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let esvalido;
    if(esvalido=expReg.test(email.value)){
        validar=true;
    }else{
        email.style.border='2px solid #fa5757';
        error.innerHTML='Whoops, make sure it´s no email';
        error.style.padding='5px 10px';
        iconError.style.display='block';
        validar=false;
        event.preventDefault();
    }
});