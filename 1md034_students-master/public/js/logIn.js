//MEN LOG IN
for (var i = 0; i<10; ++i){

    let id = document.getElementById("sec" + i);
    // NAME
    let name = document.createElement('h4');
    let htext = document.createTextNode(men[i].name);
    name.appendChild(htext);
    id.appendChild(name);
}
