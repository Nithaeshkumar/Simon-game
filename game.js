var a1=new Audio("sounds/green.mp3");
var a2=new Audio("sounds/red.mp3");
var a3=new Audio("sounds/yellow.mp3");
var a4=new Audio("sounds/blue.mp3");
var a5=new Audio("sounds/wrong.mp3");
var o=[];
var t=[];
var p=0,i=0;
function next()
{
    var k=Math.random()
    k=Math.floor((k/3)*10);
    var s=["green","red","yellow","blue"];
    if(k==0)
    {
        $(".green").addClass("next");
        o[p]="green";
        p++;
        setTimeout(function()
    {
        $(".btn").removeClass("next");
    },100)
    }
    if(k==1)
    {
        
        $(".red").addClass("next");
        o[p]="red";
        p++;
        setTimeout(function()
    {
        $(".btn").removeClass("next");
    },100)
    }
    if(k==2)
    {
        
        $(".yellow").addClass("next");
        o[p]="yellow";
        p++;
        setTimeout(function()
    {
        $(".btn").removeClass("next");
    },100)
    }
    if(k==3)
    {
        
        $(".blue").addClass("next");
        o[p]="blue";
        p++;
        setTimeout(function()
    {
        $(".btn").removeClass("next");
    },100)
    }
}
$(".btn").click(function()
{
    $(this).addClass("pressed");

    setTimeout(function()
{
    $(".btn").removeClass("pressed");
},100);
var k=this.classList[1];
t[i]=k;
i++;
if(k=="green")
{
    a1.play();
}
if(k=="red")
{
    a2.play();
}
if(k=="yellow")
{
    a3.play();
}
if(k=="blue")
{
    a4.play();
}
if(o[i-1]!=t[i-1])
    {
        
        $("h1").text("Game over press any key to restart");
        $("body").addClass("game-over");
        a5.play();
        setTimeout(function()
    {
        $("body").removeClass("game-over");
    },100);
    }
if(p==i)
{
    i=0
setTimeout(function()
{
    next();
},1000);
if(o.join()==t.join())
{
    $("h1").text("Level "+(p+1));
}
}
});
$("body").keypress(function()
{
    if(p==0)
    {
    next();
    $("h1").text("Level 1");
    }
    else{
        location.reload();
    }
})


