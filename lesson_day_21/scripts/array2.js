console.log("trying to add element using js")
var footNote = document.createElement("p");
console.log(footNote);
footNote.innerHTML = "1. From page 5 of ";
// dunno
var title = document.createElement("h1");
title.innerHTML = "Title";
var essay = document.getElementById("essay");
document.body.insertBefore(title, essay);
// Student class list
var classWindow = document.getElementById("class-window");
var list = document.createElement("h4");
list.innerHTML = "CodeHS Class"
var classList = document.getElementById("class-list");
classWindow.insertBefore(list, classList);