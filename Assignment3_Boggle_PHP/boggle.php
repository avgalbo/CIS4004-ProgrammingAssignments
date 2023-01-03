<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- include the CSS inside the PHP -->
        <style><?php include 'boggle.css'; ?></style>
        <title>Boggle</title>
    </head>
    <body>
        <?php


        //echo "Helloooo World!";
            // define constant SIZE with the value of 4
            define("SIZE", 4);

            // create variable data set equal to the Boggle letters as a string
            $data = 'AAAAAAAAABBCCDDDDDEEEEEEEEEEEEEFFGGGHHHHIIIIIIIIJKLLLLMMNNNNNOOOOOOOOPPQRRRRRRSSSSSTTTTTTTUUUUVVWWXYYZ';

            // convert string to character array using str_split() function
            $letters = str_split($data);

            // function getLetter() will randomly select one of the letters in array 'letters'
            function getLetter($letters)
            {
                // shuffle the letters array using funciton shuffle(), pass array 'letters' as an argument
                shuffle($letters);

                // create variable 'size' to set equal to the size of the array using function count()
                $size = count($letters);

                $size -= 1;

                // randomly select a letter from the 'letters' array; range is 0 to the 'size' of the array
                $idx = rand(0, $size);

                // declare variable 'letter' set equal to the 'letters' array at index 'idx'
                $letter = $letters[$idx];
                // return the randomly selected $letter
                return $letter;
            } // end function getLetter()

            // build the HTML
            // display as an <h1> the word Boggle using class 'title'
            echo "<h1 class='title'>Boggle</h1>";

            // create a <div> with the id 'board'
            echo "<div id='board'>";

                // create a <table> with classes 'boggle' and 'container'
                echo"<table class='boggle container'";

                    // loop through the 4 rows (i.e. use the constant SIZE)
                    for ($i=0; $i<SIZE; $i++)
                    {
                        // create a <tr> with class 'row'
                        echo "<tr id='row'>";
                        // loop through the 4 columns (i.e. use the constant SIZE)
                        for ($j=0; $j<SIZE; $j++)
                        {
                            // delcare variable 'letter' set equal to function call getLetter(), pass the 'letters' array
                            $letter = getLetter($letters);
                            // create a <td> with class 'data', inner HTML should be variable 'letter'
                            echo "<td class='data'>$letter</td>";
                        } // end inner loop
                        // create the closing </tr> for the row
                        echo "</tr>";
                    } // end outer loop
                // create the closing </table> for the table
                echo "</table>";
                // create an <input>, type = text, id = word, class = enter-word
                echo "<input id='word' type='text' class='enter-word'>";

                // create an <input>, type = button, id = enter=word, class = btn, explicit text Enter
                echo "<input id='enter-word' type='button' class='enter-word' value='Enter'>";

            // create the closing </div> for id='board'
            echo "</div>";
            // create a <div>, id = word, class = grid-3
            echo "<div id='word class ='grid-3'>";
                // create a <div> with explicity text Words Found
                echo "<div>'Words Found'</div>";
                    // create a <div> with class = words-found and id = words-found
                    echo "<div class='words-found' id='words-found'>";
                    // create a </div> to close the <div> with id = words-found
                    echo "</div>";
                // create a </div> to close the <div> with explicit text Words Found
                echo "</div>";
            // create a </div> to close the <div> with id = word
            echo "</div>";
        ?>
    </body>
</html>
