/*auto "click" on all the moneytree items listed in the money tree page*/

//Bot 1: clicks from last item to first (since more valuable items tendto be listed last)
window.open("http://www.neopets.com/donations.phtml", "_self");
var h = document.getElementsByClassName("np");

for(var i = (h.length - 1) ; i >= 0; i--) {
    window.open(h[i].parentNode.href);
    self.focus;
}

//Bot 2: clicks from first item to last
window.open("http://www.neopets.com/donations.phtml", "_self");
var h = document.getElementsByClassName("np");

for(var i = 0; i<h.length; i++) {
    window.open(h[i].parentNode.href);
    self.focus;
}
