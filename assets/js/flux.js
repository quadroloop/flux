/*
  Flux.js 
  Author: Bryce C. Mercines 2018
*/

window.onload = () => {
  if(localStorage.accounts){
     var accx = JSON.parse(localStorage.accounts);
     var nlx = JSON.parse(localStorage.namelist);
   namelist = nlx;
   accounts = accx;

   updateAccounts();
 }
}

var cpage = "dashboard";
var cwindow = "p_dashboard";

var cAcc;

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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
            case 'settings':
               document.getElementById(link).classList.add("active");
             document.getElementById(cwindow).style.display = "none";
               document.getElementById("p_settings").style.display = "block";
               cpage = link;
               cwindow = "p_"+cpage; 
            break;
    }
}

var web3 = new Web3(new Web3.providers.HttpProvider(
    'https://ropsten.infura.io/ae31894cbb114dd99f75fe8e0a2b3367'
));

var accounts = {};
var namelist = [];


function updateAccounts(){
   var acclist = document.getElementById("accountList");
   acclist.innerHTML = "";
    if(namelist.length != 0){
      document.getElementById("noData").style.display = "none";
     for(var i=0; i < namelist.length; i++){
        acclist.innerHTML += `
               <tr title="click to watch this account" onclick="selectAccount('${namelist[i]}')">
                          <td>
                            <img src="./assets/img/avatar1.png" class="avatar">
                          </td>
                          <td>
                            ${namelist[i]}
                          </td>
                          <td>
                            ${accounts[namelist[i]]}
                          </td>
                        </tr>

        `;
     }
   }else{
          document.getElementById("noData").style.display = "block";
   }
}

function addAccount() {
   var name = document.getElementById("name").value;
   var address = document.getElementById("address").value;
   
   if(!name || !address) {
      swal("Error","incomplete data provided","error");
   }else{
     if(accounts[name]){
       swal("Sorry","Account already exist!","info");
     }else{
       if(web3.utils.isAddress(address)){
       accounts[name] = address; 
       namelist.push(name);
       localStorage.cAcc = name;
       localStorage.namelist = JSON.stringify(namelist);
       localStorage.accounts = JSON.stringify(accounts);
       swal({
          type: 'success',
          title: 'success',
          text: 'Account Added',
          timer: 1500
       })
      document.getElementById("name").value = "";
      document.getElementById("address").value = "";

       updateAccounts();
       }else{
          swal("Invalid Address","Please input valid address","error");
       }
     }
   }      
}

function selectAccount(id) {
    cAcc = id;
    cval = 0;
    gval = 0;
    lval = 0;
    var name_large = document.getElementById("n_lg");
    var name_small = document.getElementById("n_sm");
    var address_small = document.getElementById("addr_sm");
    var address_large = document.getElementById("addr_lg");

    name_small.innerHTML = id;
    name_large.innerHTML = id;
    if( accounts[id]){
    address_small.innerHTML = accounts[id][0]+accounts[id][1]+accounts[id][2]+accounts[id][3]+accounts[id][4]+accounts[id][5]+"......."+accounts[id][37]+accounts[id][38]+accounts[id][39]+accounts[id][40]+accounts[id][41];
    address_large.innerHTML = accounts[id];
   }

    document.getElementById("dashboard").click();
} 

function clearData(){
   swal({
    type: 'info',
    title: 'Are you sure?',
    text: 'this cannot be undone',
    showCancelButton: true,
   }).then((res)=>{
     if(res.value){
      swal({
        type: 'success',
        title: 'Success',
        text: 'All data deleted',
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.clear();
      setTimeout(()=>{
      location.reload();
    },1600);
    }
   })
}



function createAcc() {
   document.getElementById("accounts").click();
}

   setInterval(()=>{
     if(cAcc){
        document.getElementById("noAcc").style.display = "none";
        if(screen.availWidth > 891 ){
           document.getElementById("clg").style.display = "block";
        }
        calculateBalance();
     }else{
        document.getElementById("noAcc").style.display = "block";
        document.getElementById("clg").style.display = "none";


     }
   },2000)

    var cval = 0;
    var gval = 0;
    var lval = 0;

  function  calculateBalance(){
     var cbalance = document.getElementById("cbalance");
     var leth = document.getElementById("leth");
     var geth = document.getElementById("geth");

    web3.eth.getBalance(accounts[cAcc],(err,res)=>{
     var cb = parseFloat(web3.utils.fromWei(res, 'ether'));
      if(cval !=0){
        if(cb != cval){
          if(cb > cval){
             gval = cb-cval;
             cval = cb;
             notif("Event: Gained Ether!","success");
          }
          if(cb < cval){
             lval = cval-cb; 
             cval = cb;
             notif("Event: Lost Ether!","error");
          }
        }else{
          cval = cb;
        }
      }else{
        cval = cb;
      } 
      cbalance.innerHTML = cval;
      geth.innerHTML = gval;
      leth.innerHTML = lval;


    }); 

  }

var toast_type = {
  "success":"linear-gradient(to right, #00b09b, #96c93d)",
  "error": "linear-gradient(to right, #dd1818, #ff8c00)",
  "default": "linear-gradient(to right, #1EF6BE, #64BBF6);",
}  

function notif(message,type){
  Toastify({
  text: message,
  duration: 5000,
  newWindow: true,
  close: true,
  gravity: "top",
  positionRight: true,
  backgroundColor: toast_type[type],
  }).showToast();

  var s = document.getElementById("notif");
    s.play(); 


}

function copyAddress(elementId,btn) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

 btn.innerHTML = `<i class="fa fa-copy mr-1"></i> Copied!`;
 setTimeout(()=>{
    btn.innerHTML = `<i class="fa fa-copy mr-1"></i> Copy Address`;
 },1200);
}

function deleteAddress() {
   swal({
    type: 'info',
    title: 'Are you sure?',
    text: 'Deleting an address cannot be undone',
    showCancelButton: true,
   }).then((res)=>{
     if(res.value){
      swal({
        type: 'success',
        title: 'Success',
        text: 'Address deleted',
        showConfirmButton: false,
        timer: 1500
      });
      delete accounts[cAcc];
      var index = namelist.indexOf(cAcc);
      if (index > -1) {
       namelist.splice(index, 1);
      }
      cAcc = "";    
      updateAccounts();
      localStorage.cAcc = name;
      localStorage.namelist = JSON.stringify(namelist);
      localStorage.accounts = JSON.stringify(accounts); 
      var cbalance = document.getElementById("cbalance");
      var leth = document.getElementById("leth");
      var geth = document.getElementById("geth");
         geth.innerHTML = 0;
         cbalance.innerHTML = 0;
         leth.innerHTML = 0;
    }
   })
}