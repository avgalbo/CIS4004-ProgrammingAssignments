// This jQuery function verifies that the HTML document has loaded
$(document).ready(function()
{
    // Set constant boggle equal to an anonymous function
    const boggle = function()
    {
        // Initialize constant container equal to HTML element id "js-boggle"
        const container = document.getElementById("js-boggle");

        // Initialize array grid to an empty array (i.e. use let versus var to control variable scope throughout task 4.)
        let grid = [];

        // Initialize variable isCustomGrid to false
        var isCustomGrid = false;

        // Declare variable customGrid
        var customGrid;

        // Create global game settings
        // Declare object settings, using the object initializer methodology to add the following
        // properties/values
            // gridsize, value 4
            // min, value 3
            // max, value 6
            // letters, value

        let settings =
        {
            gridsize: 4,
            min: 3,
            max: 6,
            letters: 'AAAAAAAAABBCCDDDDDEEEEEEEEEEEEEFFGGGHHHHIIIIIIIIJKLLLLMMNNNNNOOOOOOOOPPQRRRRRRSSSSSTTTTTTTUUUUVVWWXYYZ'
        };


        // Write function initializeGrid to do the following
        function initalizeGrid(arg)
        {
            // Parameter list includes one parameter, arg
            // Initialize variable gridsize equal to zero (i.e. 0)
            // Initialize variable setLength equal to zero (i.e. 0)
            var gridsize = 0;
            var setLength = 0;

            // if the typeof parameter arg is identical to 'number'
            if (typeof arg === 'number')
            {
                // set property gridsize equal to parameter arg
                gridsize = arg;
            }
            // else if Object.prototype.toString.call(arg) is identical to '[object Array]'
            else if (Object.prototype.toString.call(arg) == '[object Array]')
            {
                // set variable isCustomGrid equal to true
                isCustomGrid = true;

                // set variable customGrid equal to parameter arg
                customGrid = arg

                // error checking and exception handling
                // do not remove (!important)
                arg.forEach(function(set, i)
                {
                    if(setLength === 0)
                    {
                        setLength = set.split('').length;
                    }

                    if(set.split('').length !== setLength)
                    {
                        throw new Error(`Custom grid sets must be of equal length. Please check customGrid at index ${i}, ${set}`);
                    }
                });

                // set property gridsize equal to parameter arg's length property
                settings.gridsize = arg.length;

            }

            // error checking and exception handling
            // do not remove (!important)
            if(gridsize < settings.min || gridsize > settings.max)
            {
                throw new Error(`Grid size must be between ${settings.min} and ${settings.max} inclusive`);
            }

            // referencing object settings, set property gridsize equal to variable gridsize
            settings.gridsize = gridsize;

            // return object settings
            return settings;
      } // end function initializeGrid


      // Write function setGrid to do the following
      function setGrid()
      {
        // Initialize variable counter to property gridsize of object settings
        var counter = settings.gridsize;
        // If variable isCustomGrid is true
        if (isCustomGrid == true)
        {
            // Append each letter to the Boggle board in all uppercase, do not remove (!important)
            customGrid.forEach(function(set)
            {
                grid.push(set.toUpperCase().split(''));
            });

            // return array grid
            return grid;
        }

         // Loop while variable counter is greater than 0
         // Referencing array grid, call function push, pass as an argument function call setLetters()
         // decrement loop control variable counter by one
        while (counter > 0)
        {
            grid.push(setLetters());
            counter--;
        }

        // return array grid
        return grid;
      } // end function setGrid


      // Write function setLetters to do the following
      function setLetters()
      {
        // Initialize variable i to value 0
        var i = 0;
        // Initialize variable len to property gridsize of object settings
        var len = settings.gridsize;

        // Declare variable randomLetter
        var randomLetter;

        // Initialize array letters to an empty array
        let letters = [];

        // Loop "len" number of times
        for (i = 0; i < len; i++)
        {
            // set variable randomLetter equal to object settings, property letter, randomly selecting one of the leters
            randomLetter = settings.letters[Math.floor(Math.random() * settings.letters.length)];
            // add randomLetter to array letters
            letters.push(randomLetter);
        } // end loop

        // return array letters
        return letters;
      } // end function setLetters



    // Write function renderGrid to do the following
    function renderGrid()
    {
        // Initialize variable render to and empty string
        var render = "";

        // Reference array grid, call function .forEach()
        // Function .forEach() receives one parameter, an anonymous function
        // anonymous function receives one parameter, row
        grid.forEach(function(row)
        {
            // in the anonymous function, append to variable render explicity HTML code '<div class="row">'
            render += '<div class = "row">';

            // Reference parameter row, call function .forEach
            // Function .forEach() receives one parameter, an anonymous function
            // anonymous function receives two parameters, (letter, i)
            row.forEach(function(letter, i)
            {
                // in the anonymous function, append to variable render explicity HTML code `<span> ${letter} </span>`
                render += `<span> ${letter} </span>`
            });

            // append to variable render explicity HTML code '</div>'
            render += '</div>';
         });

        // Set variable container, innerHTML, equal to variable render
        container.innerHTML = render;
      } // end function renderGrid

     // Write function init to do the following
     function init()
     {
         // If the typeof array arguments at index 0 is NOT identical to explicit text 'undefined'
         if (typeof arguments[0] !== 'undefined')
         {
            // Call funciton initialiseGrid, pass as an argument array arguments, index 0
            initalizeGrid(arguments[0]);
         }
         // Call function setGrid
         setGrid();
         // Call function renderGrid
         renderGrid();

      } // end function init


      //call function init
      return{init : init}

    }();
    // end of const boggle = function()


    // Referencing object boggle, call function init, pass as an argument the value of 4 (i.e. this the size of the Boggle board)
    boggle.init(4);

});
// end of $(document).ready(function()

//******** GLOBAL VARIABLES AND FUNCTIONS ********//

// words array initialization
let words = [];

// idx variable initilization
var idx = 0;

// function addWord
function addWord()
{
    // Set element idx of the words array equal to the value of HTML element id "js-word" and increment index by one.
    words[idx++] = document.getElementById("js-word").value;

    // Update the value of HTML element id "js-word" to an empty string
    document.getElementById("js-word").value = "";

    // Call function displayWords, passing zero arguments
    displayWords()
}

// function displayWords
function displayWords()
{
    // Initialize variable wordStr equal to HTML element <hr />
    var wordStr = "<hr />";

    // Loop through the array words and append to variable wordStr the current element in array words concatenated with HTML element <br />
    for (var i = 0; i < words.length; i++)
        wordStr += words[i] + "<br />";

    // Update the value of HTML element id "js-words-found" to variable wordStr
    document.getElementById("js-words-found").innerHTML = wordStr;
}
