menu_array=["Paneer tikka pizza ", "Extra veganza","Veggie Paradise Pizza","Mexican style","Extra cheese"];
function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_array.sort();
    for(var i=0; i<5 ; i++) {
        htmldata=htmldata + '<li>' + menu_array[i] + '</li>'

    }
    htmldata=htmldata +"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;

}