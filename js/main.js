$(document).ready(function() {
    if (!localStorage.getItem("carsArray")) {
        localStorage.setItem("carsArray", JSON.stringify([{
            titleblog: "FrontEnd Developer",
            d: "FrontEnd junior ",
           
        }]));
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);
        
    } else {
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);
        printCars();
    }

});

var mazdaCars;


function printCars() {
    $("#text-list tbody").empty();
    for (i = 0; i < mazdaCars.length; i++) {
        //debugger;
        var objeto1 = mazdaCars[i];
        console.log(objeto1);
        var Title = objeto1.titleblog;
        var De = objeto1.d;
        var rowHtml = "<tr>" +
            "<td>" + Title + "</td>" +
            "<td>" + De + "</td>" +
            "</tr>"
        $("#text-form tbody").append(rowHtml);
    }
}

function getCarData() {
    var Title = $("#title-blog").val();
    var De = $("#blog-description").val();
    
    var carObject = {
        titleblog: Title,
        d: De
       
    }
    mazdaCars.push(carObject);
    printCars();
    console.log(mazdaCars)
    $("#add-text-group input").val("");

    var carsString = JSON.stringify(mazdaCars)

    localStorage.setItem("carsArray", carsString);
}

$("#submit-button").on("click", function() {
    getCarData();
});