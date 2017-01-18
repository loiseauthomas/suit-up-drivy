function changeLabel(element,label){
    elementValue=document.getElementById(element).value;
    lab=document.getElementById(label);
    labelvalue=document.getElementById(element).getAttribute("placeholder");
    if(elementValue==""){lab.innerText="";}
    else{lab.innerText=labelvalue;} 
}

function changeDateLabel(element,label){
    document.getElementById(element).type='date';
    document.getElementById(label).innerText=document.getElementById(element).getAttribute("placeholder");
}