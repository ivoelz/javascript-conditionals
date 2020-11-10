var clickCounter = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard);

	function countClick(event) {
	    event.preventDefault()
		// Increment a variable that tracks the
		// number of button clicks
        clickCounter++;
		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clickCounter);
		// When the count gets to 10, reset it to 0
        if (clickCounter === 10)
        {
            clickCounter = 0;
        }
	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());

        var age = 2020 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if(age < 18)
        {
            $("#birthYearOutput").text("Child");
        }
        else
        {
            $("#birthYearOutput").text("Adult");
        }
        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
	    event.preventDefault()

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchase = parseFloat($("#purchaseAmount").val());
        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (state === 'WI')
        {
            var salesTax = purchase * 0.05;
            $("#salesTaxOutput").text(salesTax.toFixed(2));
        }
        else if (state === 'IL')
        {
            var salesTax = purchase * 0.08;
            $("#salesTaxOutput").text(salesTax.toFixed(2));
        }
        else if (state === 'MN')
        {
            var salesTax = purchase * 0.075;
            $("#salesTaxOutput").text(salesTax.toFixed(2));
        }
        else if (state === 'MI')
        {
            var salesTax = purchase * 0.055;
            $("#salesTaxOutput").text(salesTax.toFixed(2));
        }
        else
        {
            alert("Error");
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
	    event.preventDefault()

        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseInt($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge < 2)
        {
            $("#catAgeOutput").text("Kitten chow");
        }
        else if (catAge === 2 && catAge < 10)
        {
            $("#catAgeOutput").text("Adult chow");
        }
        else if (catAge > 10)
        {
            $("#catAgeOutput").text("Senior chow");
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
	    event.preventDefault()

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description = (faceValue + " of " + suit);

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue >= 13){
            description = "King";
        }
        else if (faceValue >= 12)
        {
            description = "Queen";
        }
        else if (faceValue >= 11)
        {
            description = "Jack";
        }
        else if (faceValue >= 2)
        {
            description = faceValue;
        }
        else if (faceValue >= 1)
        {
            description = "Ace";
        }

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit >= 4)
        {
            description += " of Diamonds";
        }
        else if (suit >= 3)
        {
            description += " of Hearts";
        }
        else if (suit >= 2)
        {
            description += " of Spades";
        }
        else if (suit >= 1)
        {
            description += " of Clubs";
        }
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }

});