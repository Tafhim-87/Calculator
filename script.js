function deleteMe(){
    document.getElementById('ipt').value = ""
}

function calculator(newvalue){
    document.getElementById('ipt').value += newvalue;
}

function result(){
    let a = document.getElementById('ipt').value

    let b = eval(a);

    document.getElementById('ipt').value = b
}
