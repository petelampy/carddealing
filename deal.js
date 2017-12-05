/**
 * Created by y12lampardp on 06/11/2017.
 */

var cards = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "sj", "sq", "sk", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "hj", "hq", "hk", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "dj", "dq", "dk", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "cj", "cq", "ck"];

var cardimgs1 = [];
var cardimgs2 = [];
var newcards = [];

function names() {
    var player1 = "";
    var player2 = "";
    while (player1 === "") {
        var player1 = window.prompt("What is Player 1's Name?");
    }
    while (player2 === "") {
        var player2 = window.prompt("What is Player 2's Name?");
    }
    if (player1 != null && player2 != null) {
        document.getElementById("player1name").innerHTML = player1 + "'s cards";
        document.getElementById("player2name").innerHTML = player2 + "'s cards";
    }
    else {
        document.getElementById("player1name").innerHTML = "Player 1's cards";
        document.getElementById("player2name").innerHTML = "Player 2's cards";
    }
}

function clearcards() {
    cardimgs = [];
    cardimgs2 = [];
    newcards = [];
    document.getElementById("p1c1img").innerHTML = "";
	document.getElementById("p1c2img").innerHTML = "";
	document.getElementById("p1c3img").innerHTML = "";
	document.getElementById("p1c4img").innerHTML = "";
	document.getElementById("p1c5img").innerHTML = "";
    document.getElementById("p2c1img").innerHTML = "";
    document.getElementById("p2c2img").innerHTML = "";
    document.getElementById("p2c3img").innerHTML = "";
    document.getElementById("p2c4img").innerHTML = "";
    document.getElementById("p2c5img").innerHTML = "";
    document.getElementById("cardsdisplay").setAttribute("style","display:none");
    document.getElementById("cardsdisplay2").setAttribute("style","display:none");
    document.getElementById("nocards").setAttribute("style","display:block");
    document.getElementById("nocards2").setAttribute("style","display:block");
}

function changecard(eleid) {
	var theid = eleid.id;
	var changecheck = window.prompt("Do you want to change this card?");
	if (changecheck === "Yes" || changecheck === "yes" || changecheck === "y" || changecheck === "Y") {
		var choice1 = Math.floor(Math.random()*4+1);
        switch(choice1) {
            case 1:
                var choice2 = Math.floor(Math.random()*13);
				var newcard = cimg[choice2];
				if (cardimgs.includes(newcard) || cardimgs2.includes(newcard) || newcards.includes(newcard))
                    break;
				newcards.push(newcard);
				document.getElementById(theid).innerHTML = "<img src='cards/"+newcard+".png'>";
                break;
            case 2:
                var choice2 = Math.floor(Math.random()*13);
				var newcard = dimg[choice2];
				if (cardimgs.includes(newcard) || cardimgs2.includes(newcard) || newcards.includes(newcard))
                    break;
				newcards.push(newcard);
				document.getElementById(theid).innerHTML = "<img src='cards/"+newcard+".png'>";
                break;
            case 3:
                var choice2 = Math.floor(Math.random()*13);
				var newcard = himg[choice2];
				if (cardimgs.includes(newcard) || cardimgs2.includes(newcard) || newcards.includes(newcard))
                    break;
				newcards.push(newcard);
				document.getElementById(theid).innerHTML = "<img src='cards/"+newcard+".png'>";
                break;
            case 4:
                var choice2 = Math.floor(Math.random()*13);
				var newcard = simg[choice2];
				if (cardimgs.includes(newcard) || cardimgs2.includes(newcard) || newcards.includes(newcard))
                    break;
				newcards.push(newcard);
				document.getElementById(theid).innerHTML = "<img src='cards/"+newcard+".png'>";
                break;
		}
	}
}

function cardpick(player) {
    cardcount = 0;
    while (cardcount < 5) {
        var choice = Math.floor(Math.random()*13);
        var cardimg = cards[choice];
        if (cardimgs1.includes(cardimg) || cardimgs2.includes(cardimg)  || newcards.includes(cardimg)) {
            continue;
        }
        else if (player === 1) {
            document.getElementById("nocards").setAttribute("style","display:none");
            document.getElementById("cardsdisplay").setAttribute("style","display:block");
            cardimgs1.push(cardimg);
            cardcount = cardcount + 1;
            document.getElementById("p1c"+cardcount+"img").innerHTML = "<img src='cards/"+cardimgs1[cardcount-1]+".png'>";
        }
        else if (player === 2) {
            document.getElementById("nocards2").setAttribute("style","display:none");
            document.getElementById("cardsdisplay2").setAttribute("style","display:block");
            cardimgs2.push(cardimg);
            cardcount = cardcount + 1;
            document.getElementById("p2c"+cardcount+"img").innerHTML = "<img src='cards/"+cardimgs2[cardcount-1]+".png'>";
        }
        else {
            break;
        }
    }
}
