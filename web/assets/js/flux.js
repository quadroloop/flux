/*
  Flux.js 
  Author: Bryce C. Mercines 2018
*/

var cpage = "dashboard";
var cwindow = "p_dashboard";

function updateBanner(text) {
   document.getElementById("banner").innerText = text;
}

function nav(link){
    document.getElementById(cpage).classList.remove("active");
    updateBanner(link);
    switch(link){
        case 'dashboard':
              document.getElementById(link).classList.add("active");
              document.getElementById(cwindow).style.display = "none";
              document.getElementById("p_dashboard").style.display = "block";

              cpage = link;
              cwindow = "p_"+cpage;
            break;
            case 'accounts':
               document.getElementById(link).classList.add("active");
               document.getElementById(cwindow).style.display = "none";
               document.getElementById("p_accounts").style.display = "block";
               cpage = link;   
               cwindow = "p_"+cpage;
            break;
            case 'providers':
              document.getElementById(link).classList.add("active");
             document.getElementById(cwindow).style.display = "none";
               document.getElementById("p_providers").style.display = "block";
              cpage = link;
              cwindow = "p_"+cpage;

            break;
            case 'logs':
               document.getElementById(link).classList.add("active");
             document.getElementById(cwindow).style.display = "none";
               document.getElementById("p_logs").style.display = "block";
               cpage = link;
               cwindow = "p_"+cpage; 
            break;
    }
}

function addAccount() {
   var name = document.getElementById("name").value;
   var address = document.getElementById("address").value;
   
   if(!name || !address) {
      swal("Error","incomplete data provided","error");
   }else{
    
   }      
}