window.onload = function() {
    var date = new Date();
    array=["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    document.getElementById("currDate").innerHTML = date + array[date.getDate()];

}
    function getFeel() {
        var name = document.getElementById("name").value;
        var feeling = document.getElementById("feeling").value;
        var fSentence = "The Jashim's Limited " + " welcomes " + 
        name + ", We are glad you are doing " + feeling;
        document.getElementById("user").innerHTML = fSentence;
    }

    function getPolygon() {
        const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById('favoriteNumber').value)));

        const polygonNames = ['digon', 'monogon', 'bigon', 'trigon', 'quadrilateral', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'];
        
        if (favoriteNumber >= 0 && favoriteNumber <= 10) {
            const polygonName = polygonNames[favoriteNumber];
            alert(`The polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
        } else {
            alert('Please enter a valid number between 0 and 10.');
        }
    }

    // Variables for our brand and user name
const brandName = "Jazzy Hippopotamus";

function danceLikeHippo() {
    alert(`Shake those hips like a ${brandName}!`);
}

function hippoFortuneTeller() {
    const fortunes = [
        "A jazzy adventure awaits you!",
        "Your day will be as colorful as a rainbow.",
        "Embrace the jazzy rhythms of life."
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    alert(randomFortune);
}

function playJazzyTune() {
    alert("♪♫ Feeling the jazzy vibes with our groovy hippo tune! ♫♪");
}

function hippoWisdom() {
    const wisdoms = [
        "Be as strong as a hippo, gentle as a river.",
        "Sometimes, you just need to take a hippo-sized nap.",
        "In the water of life, float like a jazzy hippo."
    ];
    const randomWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    alert(randomWisdom);
}

    