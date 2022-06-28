const keyboardElement = document.getElementById("qwerty");
const phraseDisplayElement = document.getElementById("phrase");
const startButton = document.querySelector("#overlay a.btn__reset");

const phrases = [ 
                "A DIME A DOZEN", 
                "AN ARM AND A LEG", 
                "BACK TO SQUARE ONE",
                "BARKING UP THE WRONG TREE",
                "BEATING AROUND THE BUSH",
                "BETWEEN A ROCK AND A HARD PLACE",
                "BURST YOUR BUBBLE",
                "CLOSE BUT NO CIGAR",
                "CRYING OVER SPILLED MILK",
                "CURIOUSITY KILLED THE CAT",
                "DOWN FOR THE COUNT",
                "DRAWING A BLANK",
                "DROPPING LIKE FLIES",
                "DOWN IN THE DUMPS",
                "ELEPHANT IN THE ROOM",
                "EVERYTHING BUT THE KITCHEN SINK",
                "EASIER SAID THAN DONE",
                "EVERY NOOK AND CRANNY",
                "FIT AS A FIDDLE",
                "FOAMING AT THE MOUTH",
                "FISH OUT OF WATER",
                "FAIR AND SQUARE",
                "FALLING ON DEAF EARS",
                "FROG IN YOUR THROAT",
                "GO OUT ON A LIMB",
                "GRASS IS ALWAYS GREENER ON THE OTHER SIDE",
                "GET DOWN TO BRASS TACKS",
                "GET OFF YOUR HIGH HORSE",
                "GET YOUR HEAD OUT OF THE CLOUDS",
                "GLUED TO THEIR SEATS",
                "GOT OFF ON THE WRONG FOOT",
                "HARD PILL TO SWALLOW",
                "HAPPY AS A CLAM AT HIGH WATER",
                "HEAD OVER HEELS",
                "HIT THE NAIL ON THE HEAD",
                "HUNG OUT TO DRY",
                "IN ONE FELL SWOOP",
                "IN THE NICK OF TIME",
                "JOINED AT THE HIP",
                "JUMP ON THE BAND WAGON",
                "JUST WHAT THE DOCTOR ORDERED",
                "KEEP YOUR EYES PEELED",
                "KILL TWO BIRDS WITH ONE STONE",
                "KNOCK YOUR SOCKS OFF",
                "KEEP THE BALL ROLLING",
                "KNOCK YOURSELF OUT",
                "LET THE CAT OUT OF THE BAG",
                "LIKE SHOOTING FISH IN A BARREL",
                "LET SLEEPING DOGS LIE",
                "LET YOUR HAIR DOWN",
                "LEVEL PLAYING FIELD",
                "LONG TIME NO SEE",
                "MAN OF FEW WORDS",
                "MY CUP OF TEA",
                "MISERY LOVES COMPANY",
                "MILLION DOLLAR QUESTION",
                "MONKEY SEE MONKEY DO",
                "MUSIC TO MY EARS",
                "MY HANDS ARE TIED",
                "NEEDLE IN A HAYSTACK",
                "NO QUESTIONS ASKED",
                "NOT THE SHARPEST TOOL IN THE SHED",
                "NICKEL AND DIMING",
                "NOTHING TO SNEEZE AT",
                "ON THE SAME PAGE",
                "OUT OF LEFT FIELD",
                "ONCE IN A BLUE MOON",
                "OVER THE TOP",
                "PAINT THE TOWN RED",
                "PAR FOR THE COURSE",
                "PLAYING FOR KEEPS",
                "POT CALLING THE KETTLE BLACK",
                "PUT A SOCK IN IT",
                "PICTURE IS WORTH A THOUSAND WORDS",
                "PINS AND NEEDLES",
                "PUT ALL YOUR EGGS IN ONE BASKET",
                "PUT THAT IN YOUR PIPE AND SMOKE IT",
                "QUICK AND DIRTY",
                "QUICK ON THE DRAW",
                "QUITTING COLD TURKEY",
                "RAIN ON YOUR PARADE",
                "RIGHT OFF THE BAT",
                "ROLL WITH THE PUNCHES",
                "RHYME OR REASON",
                "ROME WAS NOT BUILT IN A DAY",
                "RUB SALT IN THE WOUND",
                "RUN OF THE MILL",
                "RUNNING ON FUMES",
                "SHORT END OF THE STICK",
                "SLOW AND STEADY WINS THE RACE",
                "SPILL THE BEANS",
                "STICK A FORK IN IT",
                "SWINGING FOR THE FENCES",
                "TAKE IT WITH A GRAIN OF SALT",
                "TEAMWORK MAKES THE DREAM WORK",
                "THE EARLY BIRD GETS THE WORM",
                "THROW IN THE TOWEL",
                "TOO MANY COOKS IN THE KITCHEN",
                "TWO PEAS IN A POD", 
                "UNDER THE WEATHER",
                "VANISHED INTO THIN AIR",
                "VICE VERSA",
                "WATCHED POT NEVER BOILS",
                "WHEN THE RUBBER HITS THE ROAD",
                "WHAT GOES UP MUST COME DOWN",
                "YOU ARE ON FIRE",
                "YOU ARE PULLING MY LEG",
                "YOU ARE SUCH A CARD",
                "YOU SNOOZE YOU LOSE"];

let missed = 0;

function addPhraseToDisplay(phrase) 
{
    const phraseUl = document.querySelector("#phrase ul");

    for (let i = 0; i < phrase.length; i++)
    {
        // create list item
        const character = phrase[i];
        const li = document.createElement("li");
        li.innerText = character;

        // if the character is a letter, add the class "letter" to the list item
        if (isCharALetter(character))
        {
            li.classList.add("letter");
        }
        else
        {
            li.classList.add("space");
        }

        // append list item to phrase ul
        phraseUl.appendChild(li);
    }
}

function checkLetter(clickedButton)
{
    const displayLetters = document.getElementsByClassName("letter");
    const clickedButtonLetter = clickedButton.textContent.toUpperCase();
    let chosenLetter = null;
    for (let i = 0; i < displayLetters.length; i++)
    {
        const displayLetter = displayLetters[i];
        if (clickedButtonLetter === displayLetter.textContent)
        {
            // show the letter in the display
            displayLetter.classList.add("show");

            // if you haven't found the chosen letter, set it to clicked button letter
            if (chosenLetter === null)
            {
                chosenLetter = clickedButtonLetter;
            }
        }
    }
    return chosenLetter;
}

function checkWin()
{
    let isEnd = false;
    const startScreen = document.getElementById("overlay");
    const shownDisplayLetters = document.getElementsByClassName("show");
    const displayLetters = document.getElementsByClassName("letter");

    if (missed >= 5) // Lost
    {
        ToggleStartScreen();
        startScreen.classList.add("lose");
        const loseText = document.createTextNode("You Lose!");
        startScreen.appendChild(loseText);
        isEnd = true;
    }
    else if (shownDisplayLetters.length === displayLetters.length) // Won
    {
        ToggleStartScreen();
        startScreen.classList.add("win");
        const winText = document.createTextNode("You Win!");
        startScreen.appendChild(winText);
        isEnd = true;
    }

    if (isEnd)
    {
        // Reset display
        const phraseDisplayElementList = phraseDisplayElement.firstElementChild;
        while (phraseDisplayElementList.firstElementChild) // so long as there is a child of the list element
        {
            phraseDisplayElementList.removeChild(phraseDisplayElementList.firstElementChild);
        }
        // Reset keyboard
        keyboardButtons = Array.from(keyboardElement.getElementsByTagName('BUTTON'));
        keyboardButtons.forEach(button => {
            if (button.classList.contains('chosen'))
            {
                button.disabled = false;
                button.classList.remove('chosen');
            }
        });

        // Reset lives
        missed = 0;
        const scoreboardHearts = Array.from(document.getElementsByClassName("tries"));
        scoreboardHearts.forEach(heart => {
            heart.firstChild.src = "images/liveHeart.png";
        });
    }
}

function getRandomPhraseAsArray(phrases) 
{
    // get a random phrase from phrases
    const randIndex = Math.floor(Math.random() * phrases.length); // random index from 0 to last index of phrases array
    const phrase = phrases[randIndex];

    // split phrase into array of characters
    const phraseCharacters = phrase.split("");
    
    // return the new array
    return phraseCharacters;
}

function ToggleStartScreen() 
{
    const startScreen = document.getElementById("overlay");
    if (startScreen.style.display === "none")
    {
        startScreen.removeAttribute("style");
    }
    else
    {
        //Reset Start Screen
        if (startScreen.classList.contains('win'))
        {
            startScreen.classList.remove('win');
        } 
        else if (startScreen.classList.contains('lose'))
        {
            startScreen.classList.remove('lose');
        }
        if (startScreen.lastChild.nodeName === "#text")
        {
            startScreen.removeChild(startScreen.lastChild);
        }
        startScreen.style.display = "none";
    }
}

function isCharALetter(char)
{
    switch(char)
    {
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            return true;
        default:
            return false;
    }
}

startButton.addEventListener("click", () => {

    ToggleStartScreen();
    const phrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phrase);
});

keyboardElement.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON")
    {
        const clickedButton = e.target;
        
        // choose button
        clickedButton.classList.add("chosen");
        
        // disable button from being pressed
        clickedButton.disabled = true;

        // check if letter is in phrase
        const letterFound = checkLetter(clickedButton);

        if (letterFound === null) // if wrong letter is guessed
        {
            missed++;
            const scoreboardHearts = document.getElementsByClassName("tries");
            const lostHeartIndex = scoreboardHearts.length - missed;
            const lostHeart = scoreboardHearts[lostHeartIndex];
            lostHeart.firstChild.src = "images/lostHeart.png";
        }

        // check if won or lost
        checkWin();
    }
});