console.log('Lesson_day_25');
let header = document.createElement("header");
let topicHeader = document.createElement("h1");
topicHeader.innerHTML = "Welcome to my Website"
let body = document.getElementsByTagName("body");
document.body.appendChild(header);
header.appendChild(topicHeader);


// add p element in main

let main = document.createElement("main");
let para = document.createElement("p");
para.innerHTML = 'This is a small website created using HTML and Javascripts';
document.body.appendChild(main);
main.appendChild(para);

// add p element in footer
let footer = document.createElement("footer");
let para2 = document.createElement("p");
para2.innerHTML = '$copy; 2023 Your Name';
document.body.appendChild(footer);
footer.appendChild(para2);

