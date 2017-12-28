var btn = document.querySelector('.btn');
var priceSpan = document.querySelector('.currency');
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var currency = "USD";
var price;
fetchRequest();

btn.addEventListener("click", function () {
    xhRequest();
});


//Having fun with XHR
function xhRequest() {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status == 200) {
            price = JSON.parse(XHR.responseText).bpi[currency].rate;
            priceSpan.innerText = price +" "+ currency;
            console.log(price);
        }
    };
    XHR.open("Get", url);
    XHR.send(null);
}


//Common Fetch Request 
function fetchRequest () {
    fetch(url).then(function(response){
        return response.json().then(function(data){
            price = data.bpi[currency].rate;
            priceSpan.innerText = price +" "+ currency;
           console.log(price);
       });
    });
};
