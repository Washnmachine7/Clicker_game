var clicks = 0
var money = 0
var money_alltime = 0
var cp=1
var dps=0
var cp_ug_price=100
var Auto_ug_price=10000
var moneysave=0
var AcheivementNames=["It begins","Employer","Sharpened cursor","Hacker"]
var AcheivementImages=["Hand-poiner.png","hammer.png","Up power.png","binary.png"]
var AcheivementDescript=["Click the coin for the first time","Buy your first worker","Upgrade clicks for the first time","Attempt to hack the game"]
var AcheivementDisplay=""
var TempAchLoad=""
var firstctrli=true

document.getElementById("The object").addEventListener("click", function() {
    money+=cp
    money_alltime+=cp
    clicks+=1
    if (clicks===1){
        TempAchLoad='<img src="images/'+AcheivementImages[0]+'" title="'+AcheivementNames[0]+' &#10; '+AcheivementDescript[0]+'" height="64px" width="50px">';
        AcheivementDisplay+=TempAchLoad
    }
}, false)
document.getElementById("clickpow").addEventListener("click", function() {
    if (money >= cp_ug_price){
        money-=cp_ug_price
        cp_ug_price=Math.round(cp_ug_price*1.15)
        cp+=1
        document.getElementById("nameUg").innerHTML = "Click Power"
        document.getElementById("priceUg").innerHTML = "$"+cp_ug_price
        if (cp_ug_price===115){
            TempAchLoad='<img src="images/'+AcheivementImages[2]+'" title="'+AcheivementNames[2]+' &#10; '+AcheivementDescript[2]+'" height="64px" width="50px">';
            AcheivementDisplay+=TempAchLoad
        }
    }
}, false)

document.getElementById("Worker").addEventListener("click", function() {
    if (money >= Auto_ug_price){
        money-=Auto_ug_price
        Auto_ug_price=Math.round(Auto_ug_price*1.15)
        dps+=0.1
        document.getElementById("AnameUg").innerHTML = "Worker"
        document.getElementById("ApriceUg").innerHTML = "$"+Auto_ug_price
        if (Auto_ug_price===11500){
            TempAchLoad='<img src="images/'+AcheivementImages[1]+'" title="'+AcheivementNames[1]+' &#10; '+AcheivementDescript[1]+'" height="64px" width="50px">';
            AcheivementDisplay+=TempAchLoad
        }
    }
}, false)

setInterval(function(){
    money+=dps
    moneysave=money
    money= Math.round(money)
    document.getElementById("count").innerHTML = money+" dollars earned - "+clicks+" times clicked - "+money_alltime+" dollars earned alltime"
    money=moneysave
}, 100);

setInterval(function(){
    money_alltime+=dps*10
    document.getElementById("Test").innerHTML = AcheivementDisplay
}, 1000);
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("keydown", function(event){
    if (event.ctrlKey && event.shiftKey && event.which==73){
        event.preventDefault();
        if(firstctrli===true){
            TempAchLoad='<img src="images/'+AcheivementImages[3]+'" title="'+AcheivementNames[3]+' &#10; '+AcheivementDescript[3]+'" height="64px" width="50px">';
            AcheivementDisplay+=TempAchLoad
            firstctrli=false
        }
    }
}, false);