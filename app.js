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
        currentPrice = currentPrice + parseInt(document.getElementById(n).textContent);
        document.getElementById("prc").textContent = currentPrice;
    }
    else{
        alert("Та premium эрхээрээ Login хийж нэвтэрнүү!!!");
    }
    
}

function toloh(){
    alert("Та " + currentPrice + " төгрөгний төлбөрөө амжилттай хийлээ.")
    currentPrice =0;
    end();
}

function end(){
    document.getElementById("prc").textContent = 0;

}
