var btn = document.querySelector('.btn');
var priceSpan = document.querySelector('.currency');
var currency = "USD";
xhRequest();

btn.addEventListener("click", function () {
    xhRequest();

});

function xhRequest() {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status == 200) {
            //Pasre the link into a Json object and pull the image url 
            var price = JSON.parse(XHR.responseText).bpi[currency].rate;
            console.log(price);
            priceSpan.innerText = price +" "+ currency;
        }
    };
    //This is a 997 image list from unsplash.com
    XHR.open("Get", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send(null);
}