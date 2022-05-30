//let firstName = prompt("Hey! What's your name?");
  // console.log(firstName);
//    document.write("Wassup " + firstName + ", thanks for checking out my site! ");

//if (firstName == "Kassie") {
//    document.write("Thanks for checking out my site! HOPE YOU LIKE IT :)");
//} else if (firstName == "Kahdija") {
//    document.write("Love you bestie :)");
//}

//let favAnime = prompt("whats your favorite anime");
//    document.write(" Your favorite anime is " + favAnime);
//    if (favAnime == "naruto") {
//        document.write(", same here!");

let firstName = "";
function askName() {
    let firstName = prompt("Hey! What's your name?");
    if (firstName == "Kassie") {
        document.write("Hi " + firstName + "! Thanks for checking out my site! HOPE YOU LIKE IT :)");
    } else if (firstName == "Kahdija") {
    document.write("Love you bestie :)");
    } else if (firstName == "Sky") {
        document.write("hey, cool kids watch anime")
    } else {
     console.log(firstName);
    document.write("Wassup " + firstName + ", thanks for checking out my site! ");
    }
}

function whatAnime() {
    let didntPick1 = true;
    while(didntPick1){
        let urAnime = prompt("Of Naruto, One Piece, and Bleach, which anime is your favorite?");
        if (urAnime == "Naruto"){
            document.write("Interesting. Are you an imperialist? Lol jk, it is good af.");
            didntPick1 = false;
        }
        else if (urAnime == "One Piece") {
            document.write("Nice! I commend you for watching all of those episdoes");
            didntPick1 = false;
        }
        else if (urAnime == "Bleach") {
            document.write("Personally I don't get the hype, but the soundtrack is fuego");
            didntPick1 = false;
        }
        else {
            alert("Sorry that was not one of the choices! Please try again.");
        }
    }
}


//let favAnime = "";
//function whatAnime() {
//    let favAnime = prompt ("What's your favorite anime?")\
//    if (favAnime == "naruto"){
//        document.write("Interesting. Are you pro imperialism?")
//    }
//}