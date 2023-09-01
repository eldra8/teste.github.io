
var pointMuriel = 2
var pointDonatien = 2
var pointJerom = 2

$("#temps").hide()
$("#truc").hide()
$("#luti").hide()

$("#escape1").hide()
$("#escape2").hide()
$("#escape3").hide()

$("#crée").hide()

$("#escape6").hide()

$("#reserve3").hide()

$("#escape4").hide()



$("#level1").click(function () {
    startGame()
    startProut()
    startBid()
    $("#escape1").show()
    $("#escape2").show()
    $("#escape3").show()
    $("#reserve3").show()
    $("#crée").hide()
    $("#escape4").hide()

})

$("#level2").click(function () {
    startGame()
    startProut()
    startDecouve()
    $("#escape6").show()
    $("#crée").hide()
    $("#escape4").show()
})

$("#escape1").click(function () {
    startReserve2()
})
$("#escape2").click(function () {
    startReserve2()
})
$("#escape3").click(function () {
    startReserve2()
})

$("#level3").click(function () {
    startGame()
    startProut()
    startDecouve()
    $("#crée").show()
    startBid()
    $("#escape4").hide()
})

$("#level4").click(function () {
    startGame()
    startDecouve()
    $("#temps").show()
    $("#truc").show()
    $("#luti").show()
    $("#crée").hide()
    startBid()
    $("#escape4").hide()
})

$("#reserve1").click(function () {
    startGame()
    startProut()
    startDecouve()
    startReserve()
})

$("#reserve2").click(function () {
    startGame()
    startProut()
    startDecouve()
    startReserve1()
})

$("#reserve3").click(function () {
    startGame()
    startProut()
    startDecouve()
    startReserve2()
})

$("#reserve").click(function () {
    startReserve()
})

$("#clic").click(function () {
    startMist()
})

$("#bluc").click(function () {
    startMist()
})

$("#point").click(function () {
    startMist()
})

$("#lime").click(function () {
    startMist()
})

function startGame() {
    $("#regle").fadeOut(1000)
}

function startProut() {
    $("#temps").hide()
    $("#truc").hide()
    $("#luti").hide()
}

function startDecouve() {
    $("#escape1").hide()
    $("#escape2").hide()
    $("#escape3").hide()
}

function startTruc() {
    $("#escape1").hide()
    $("#escape2").hide()
    $("#escape3").hide()
}

function startReserve() {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre nom est " + reponse);
        réservationj = reponse
        var reponse = prompt("Taper votre code bancaire.", "<Entrez ici votre code bancaire>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre code bancaire est" + reponse);
        réservationi = reponse
    }
    }   
    console.log('la réservation est de ' + réservationj + ' pour réserver la sécance voleur. Code bancaire : ' + réservationi)
}

function startReserve1() {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre nom est " + reponse);
        réservationj = reponse
        var reponse = prompt("Taper votre code bancaire.", "<Entrez ici votre code bancaire>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre code bancaire est" + reponse);
        réservationi = reponse
    }
    }   
    console.log('la réservation est de ' + réservationj + ' pour réserver la sécance hopitalhorreur. Code bancaire : ' + réservationi)
}

function startReserve2() {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre nom est " + reponse);
        réservationj = reponse
        var reponse = prompt("Taper votre code bancaire.", "<Entrez ici votre code bancaire>");    
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre code bancaire est" + reponse);
        réservationi = reponse
    }
    }   
    console.log('la réservation est de ' + réservationj + ' pour réserver la sécance cassedusiècle. Code bancaire : ' + réservationi)
}

$("#crée").click(function () {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");
    reponse5 = reponse
    var reponse = prompt("Taper votre thème.", "<Entrez ici le thème>");
if (reponse == null) {
    alert("Vous avez cliqué sur Annuler");
    reponse6 = reponse
} else {
    alert("Votre théme est " + reponse);
    reponse7 = reponse
    alert("C'est enregistrer")
    var reponse = prompt("Taper votre code bancaire.", "<Entrez ici votre code bancaire>");
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre code bancaire est " + reponse);
        reponse8 = reponse
        alert("Vous avez réserver")
    }
}
})






function startBid() {
    $("#reserve6").hide()
}

function startMist() {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");
        if (reponse == "Muriel") {
            if (pointMuriel < 10){
                reponse = alert("Vous n'avez pas asser de point pour réserver")
            }else {
               reponse = alert("C'est réserver") 
            }
            $("#1").text($("#1").text().replace($("#1").text($("#1").text().replace(reponse))));
        }
        if (reponse == "Donatien") {
            if (pointDonatien < 10){
                alert("Vous n'avez pas asser de point pour réserver")
            }else {
               alert("C'est réserver") 
            }
            $("#2").text($("#2").text().replace($("#1").text($("#1").text().replace(reponse))));
        }
        if (reponse == "Jerom") {
            if (pointJerom < 10){
                alert("Vous n'avez pas asser de point pour réserver")
            }else {
               alert("C'est réserver") 
            }
            $("#3").text($("#3").text().replace(reponse));
        }

}

function startProgr() {
    $.post('send.php',
    {
        name: 'Léandre',
        email: "leandre.gilbert@hotmail.com"
    }, function(data) {
        alert(data);
})};

texte.addEventListener("click", () => {
    var reponse = prompt("Taper votre nom.", "<Entrez ici votre nom>");
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre nom est " + reponse);
        (reponse1 = reponse)
        var réservationj = réponse1;
    }
    var reponse = prompt("Taper le jour, la date et l'année de votre réservation.", "<Entrez ici le jour, la date et l'année de votre réservation>");
    if (reponse == null) {
        alert("Vous avez cliqué sur Annuler");
    } else {
        alert("Votre votre réservation est le " + reponse);
        (reponse2 = reponse)
        var réservationj = réponse2;
    }

})







let réservationu = réponse3;

console.log('la réservation est de ' + réservationj + ' le ' + réservationi + 'et il veut réserver : ' + réservationu)