var USER_NAME = "Premium";
var PASSWORD = "Premium123"
var currentPrice = 0;
var totalPrice = 0;

isLogin = false;

function check(){
    var uname = document.getElementById("userName").value;
    var pwd = document.getElementById("password").value;
    if(uname === USER_NAME){
        if(PASSWORD === pwd){
            isLogin = true;
            alert("Амжилттай нэвтэрлээ");
        }
        else{
            alert("Таны Password буруу байна.")
        }
    }
    else{
        alert("Таны UserName буруу байна.")
    }
}

var n;
function pay(n){
       if(isLogin === true){
        if(n === 1){
            currentPrice = currentPrice + parseInt(document.getElementById("1").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 2){
            currentPrice = currentPrice + parseInt(document.getElementById("2").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 3){
            currentPrice = currentPrice + parseInt(document.getElementById("3").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 4){
            currentPrice = currentPrice + parseInt(document.getElementById("4").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 5){
            currentPrice = currentPrice + parseInt(document.getElementById("5").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 6){
            currentPrice = currentPrice + parseInt(document.getElementById("6").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 7){
            currentPrice = currentPrice + parseInt(document.getElementById("7").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 8){
            currentPrice = currentPrice + parseInt(document.getElementById("8").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 9){
            currentPrice = currentPrice + parseInt(document.getElementById("9").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 10){
            currentPrice = currentPrice + parseInt(document.getElementById("10").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 11){
            currentPrice = currentPrice + parseInt(document.getElementById("11").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
        if(n === 12){
            currentPrice = currentPrice + parseInt(document.getElementById("12").textContent);
            document.getElementById("prc").textContent = currentPrice;
        }
    }else{
        alert("Та premium эрхээрээ Login хийж нэвтэрнүү!!!");
    }
    
}

function toloh(){
    alert("Та " + currentPrice + " төгрөгний төлбөрөө амжилттай хийлээ.")
    end();
}

function end(){
    document.getElementById("prc").textContent = 0;
}
