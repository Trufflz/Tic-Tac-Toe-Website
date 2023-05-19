initialize_game();
score_display(0,0);
setTimeout(timeout, 120000);

//Global Variables
score_x = 0;
score_o = 0;
count = 0;


function initialize_game() {
    //alert("initialized");
    start = document.getElementById("new_game");
    reset = document.getElementById("reset");
    tictactoe = document.getElementsByClassName("xo");

    // These are the Event Listener ID's
    one = document.getElementById("one");
    two = document.getElementById("two");
    three = document.getElementById("three");
    four = document.getElementById("four");
    five = document.getElementById("five");
    six = document.getElementById("six");
    seven = document.getElementById("seven");
    eight = document.getElementById("eight");
    nine = document.getElementById("nine");
    checkbox = document.getElementById("checkbox");

    // These are the Event Listener Outputs
    one_out = tictactoe[0];
    two_out = tictactoe[1];
    three_out = tictactoe[2];
    four_out = tictactoe[3];
    five_out = tictactoe[4];
    six_out = tictactoe[5];
    seven_out = tictactoe[6];
    eight_out = tictactoe[7];
    nine_out = tictactoe[8];

    // This is the turn output
    turn_output = document.getElementsByClassName("display_player")[0];  //always start at x for turn FIXME
    turn_output.innerHTML = "X";

    array_out = [one_out, two_out, three_out, four_out, five_out, six_out, seven_out, eight_out, nine_out];
    array_listen = [one, two, three, four, five, six, seven, eight, nine];
    inputs = [];

    // These are the Scoreboard Outputs
    p1_out = document.getElementById("player1");
    p2_out = document.getElementById("player2");

    initialize_listeners();
}

function initialize_listeners() {
    start.addEventListener("click", function() {reset_game(this.id), initialize_game();});
    reset.addEventListener("click", function() {reset_game(this.id), initialize_game();});
    checkbox.addEventListener("click", ai);

    one.addEventListener("click", clicked);
    two.addEventListener("click", clicked);
    three.addEventListener("click", clicked);
    four.addEventListener("click", clicked);
    five.addEventListener("click", clicked);
    six.addEventListener("click", clicked);
    seven.addEventListener("click", clicked);
    eight.addEventListener("click", clicked);
    nine.addEventListener("click", clicked);
}

function clicked() {
    click_id = this.id;
    if (click_id == "one" && one_out.innerText == "") {
        max_symbols(one_out);
        one_out.innerHTML = symbol();
    }
    else if (click_id == "two" && two_out.innerText == "") { 
        max_symbols(two_out);
        two_out.innerHTML = symbol();
    }
    else if (click_id == "three" && three_out.innerText == "") { 
        max_symbols(three_out);
        three_out.innerHTML = symbol();
    }
    else if (click_id == "four" && four_out.innerText == "") { 
        max_symbols(four_out);
        four_out.innerHTML = symbol();
    }
    else if (click_id == "five" && five_out.innerText == "") { 
        max_symbols(five_out);
        five_out.innerHTML = symbol();
    }
    else if (click_id == "six" && six_out.innerText == "") { 
        max_symbols(six_out);
        six_out.innerHTML = symbol();
    }
    else if (click_id == "seven" && seven_out.innerText == "") { 
        max_symbols(seven_out);
        seven_out.innerHTML = symbol();
    }
    else if (click_id == "eight" && eight_out.innerText == "") { 
        max_symbols(eight_out);
        eight_out.innerHTML = symbol();
    }
    else if (click_id == "nine" && nine_out.innerText == "") { 
        max_symbols(nine_out);
        nine_out.innerHTML = symbol();
    }
    win_condition();
}

function max_symbols(id) {
    //If all pieces haven't been placed yet
    if (inputs.length < 8) {
        inputs.push(id);
    }
    //If all places are placed, remove first piece
    else if (inputs.length == 8) {
        inputs[0].innerHTML = "";
        inputs.shift();
        inputs.push(id);
    }
}

function symbol() {
    count++;
    if (count % 2 == 1) { turn_symbol("O"); return "X"; }
    else if (count % 2 == 0) { turn_symbol("X"); return "O"; }
}

function turn_symbol(char) {
    if (char == "O") { turn_output.innerHTML = "O"; }
    else if (char == "X") { turn_output.innerHTML = "X"; }
}

function reset_game(id) {
    //Reset Board
    for (i = 0; i < array_out.length; i++) {
        array_out[i].innerHTML = "";
    }

    //Reset Turn
    count = 0;
    turn_output.innerHTML = "X";

    //Reset Score? ==> only if reset button is pressed
    if (id == "reset") { score_x = 0; score_o = 0; score_display(score_x, score_o); }

    //Reset Queue ==> Empty everything
    for (i = 0; i < inputs.length; i++) { inputs.pop(); }

    //Reset Time
    setTimeout(timeout, 120000);
}

function win_condition() { 
    //Column Win Conditions
    if (one_out.innerText == two_out.innerText && two_out.innerText == three_out.innerText && one_out.innerText != "") {
        if (one_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (one_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
    if (four_out.innerText == five_out.innerText && five_out.innerText == six_out.innerText && four_out.innerText != "") {
        if (four_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (four_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
    if (seven_out.innerText == eight_out.innerText && eight_out.innerText == nine_out.innerText && seven_out.innerText != "") {
        if (seven_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (seven_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }

    //Row Win Conditions
    if (one_out.innerText == four_out.innerText && four_out.innerText == seven_out.innerText && one_out.innerText != "") {
        if (one_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (one_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
    if (two_out.innerText == five_out.innerText && five_out.innerText == eight_out.innerText && two_out.innerText != "") {
        if (two_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (two_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
    if (three_out.innerText == six_out.innerText && six_out.innerText == nine_out.innerText && three_out.innerText != "") {
        if (three_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (three_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }

    //Diagonal Win Conditions
    if (one_out.innerText == five_out.innerText && five_out.innerText == nine_out.innerText && one_out.innerText != "") {
        if (one_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (one_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
    if (three_out.innerText == five_out.innerText && five_out.innerText == seven_out.innerText && three_out.innerText != "") {
        if (three_out.innerText == "X") { alert("X HAS WON"); score_x++; }
        else if (three_out.innerText == "O") { alert("O HAS WON"); score_o++; }
        stop_input();
        score_display(score_x, score_o);
    }
}

function score_display(score_x, score_o) {
    p1_out.innerHTML = score_x;
    p2_out.innerHTML = score_o;
}

function stop_input() {
    for (i = 0; i < array_listen.length; i++) {
        array_listen[i].removeEventListener("click", clicked);
    }
}

function timeout() {
    alert("2 Minutes Have Expired - GAME OVER");
    stop_input();
}

// function ai() {
//     if (this.checked) {
//         alert("box has been checked");

//         //iterate through innerText array, check for empty box to select
//     }
// }


//time only starts when first piece is placed?

//AI is "o"
    //must increment count bc user clicks once now instead of twice
    //must push box_id for ai into inputs array