console.log("in");


var logocolor="blue1";
var navcolor="blue2";
var sidecolor="white";
var bgcolor="bg1";




function savecookie(g)
{
    current=g.className;
   

    if(current == "changeTopBarColor" || current=="selected changeTopBarColor")
    {
        navcolor=g.getAttribute('data-color');
    
    }
    else if(current == "changeLogoHeaderColor" || current=="selected changeLogoHeaderColor")
    {
        logocolor = g.getAttribute('data-color');
    }
    else if( current=="selected changeSideBarColor" || current =="changeSideBarColor")
    {
        sidecolor= g.getAttribute('data-color');
    }
    else if(current = "changeBackgroundColor selected" || current == "changeBackgroundColor")
    {
        bgcolor= g.getAttribute('data-color');
    }


    document.cookie="";
    
var now = new Date();
now.setTime(now.getTime() + 5*365*30*24 * 3600 * 1000);
expire=now.toUTCString();
    document.cookie="colorsdashboard="+logocolor+"&"+navcolor+"&"+sidecolor+"&"+bgcolor+";"+"expires="+expire;
    
}

var p=document.cookie.split(";")[0].split('=')[1];
clogocolor=p.split('&')[0];
logocolor=clogocolor;
cnavcolor=p.split('&')[1];
navcolor=cnavcolor;
csidecolor=p.split('&')[2];
sidecolor=csidecolor;
cbgcolor=p.split('&')[3];
bgcolor=cbgcolor;

document.getElementById("logo").setAttribute('data-background-color',clogocolor);
document.getElementById("navbar").setAttribute('data-background-color',cnavcolor);
document.getElementById("sidebar").setAttribute('data-background-color',csidecolor);
document.getElementById("body").setAttribute('data-background-color',cbgcolor);
