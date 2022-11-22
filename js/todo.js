var input = document.getElementById("i");
var btn = document.getElementById("btn");
var arr = [];

// Input value
document.getElementById("btn").addEventListener("click", function(e) {
   e.preventDefault();
   var inputv = document.getElementById("i").value;
   // console.log(inputv)
   var arrInput = arr.push(inputv)
   // console.log(arr)


})

// Keyup and delete
document.getElementById("i").addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      var lis = document.createElement("li");
      var inputValues = input.value;
      var vv = document.createTextNode(inputValues);
      lis.appendChild(vv);
      if(input.value == "") {
         alert("List item must be add!")
      } else {
         // console.log(input.value)
         document.getElementById("ul").appendChild(lis);
         document.getElementById("ul").appendChild(lis).style.wordBreak = "break-word";
         lis.style.height = "auto"
      }
      var spans = document.createElement("span");
      var txts = document.createTextNode("\u00D7");
      spans.className = "span";
      spans.appendChild(txts);
      lis.appendChild(spans);
      var spanlists = document.querySelectorAll(".span")
      for (i = 0; i < spanlists.length; i++) {
         spanlists[i].onclick = function() {
            var liparents = this.parentElement
          liparents.style.display = "none"
          }
       }
   }
});

// Create elements
function newElement() {
   var li = document.createElement("li");
   var inputValue = input.value;
   var v = document.createTextNode(inputValue);
  
   li.appendChild(v);
   if(input.value == "") {
      alert("List item must be add!")
   } else {
      // console.log(input.value[0])
      document.getElementById("ul").appendChild(li);
      document.getElementById("ul").appendChild(li).style.wordBreak = "break-word";
      li.style.height = "auto"
   }
   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "span";
   span.appendChild(txt);
   li.appendChild(span);
   var spanlist = document.querySelectorAll(".span")
   for (i = 0; i < spanlist.length; i++) {
      spanlist[i].onclick = function() {
         var liparent = this.parentElement
       liparent.style.display = "none"
       }
    }

  
}
 

// sorting 
 function sortItem() {
   var ul, i, pas, li, shouldpas;
   ul = document.getElementById("ul");
   pas = true;
   while (pas) {
     pas = false;
     li = ul.getElementsByTagName("LI");
     for (i = 0; i < (li.length - 1); i++) {
       shouldpas = false;
       if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
         shouldpas = true;
         break;
       }
     }
     if (shouldpas) {
       li[i].parentNode.insertBefore(li[i + 1], li[i]);
       pas = true;
     }
   }
 }

// drag and drop
const dragArea = document.querySelector("#ul");
   new Sortable(dragArea, {
    Animation: 350
});