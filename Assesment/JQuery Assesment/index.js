$(document).ready(function () {

    let running = true;

    function showMenu() {
        let menuText = `MENU OPTIONS:
            1. Remove a Card
            2. Show Total Cards
            3. Exit

Enter your choice:`;
        return prompt(menuText);
    }

    $("#showMenu").click(function () {

        while (running) {
            try {
                let choice = showMenu();

                if (choice === null) {
                    alert("Input cancelled. Returning to menu...");
                    continue;
                }

                choice = choice.trim();          
                choice = choice.toLowerCase();   

                if (choice === "1") {
                    let index = prompt("Enter card number to remove (1-6):");

                    if (index === null || index.trim() === "") {
                        alert("Invalid input.");
                        continue;
                    }

                    index = parseInt(index);

                    if (isNaN(index) || index < 1 || index > $(".card").length) {
                        alert("Invalid card number!");
                        continue;
                    }

                    $(".card").eq(index - 1).remove();
                    alert("Card removed successfully!");

                }
                else if (choice === "2") {
                    let count = $(".card").length;
                    alert("Total cards remaining: " + count);
                }
                else if (choice === "3") {
                    alert("Exiting program...");
                    running = false;
                }
                else {
                    alert("Invalid option! Please enter 1, 2 or 3.");
                }

            } catch (error) {
                alert("Unexpected error occurred! Returning to menu...");
            }
        }

    });

});
