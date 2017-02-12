
//Task 1

var header = document.getElementById("tag-line");

var headerName = header.innerHTML;

var contElements = document.querySelector(".bg-main-content");

var headingsElements = contElements.getElementsByTagName("h2");

var collect = headerName + "\n----------------------------------------\n";

for (var i = 0; i < headingsElements.length; i += 1) {
    collect += headingsElements[i].innerHTML + "\n";    
}
    
alert(collect);



//Task 2


var when_to_launch = contElements.getElementsByClassName("box")[12];

var paragraph = when_to_launch.children;

var collect = headingsElements[12].innerHTML + "\n-------------------\n";

console.log(collect);

for (var j = 1; j < paragraph.length; j += 1) {
    collect += paragraph[j].innerHTML + "\n" + "\n";    
}

alert(collect);
