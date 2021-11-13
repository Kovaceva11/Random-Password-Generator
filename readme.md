# Password-Generator

As and employee with access to sensitive data I needed to randomly generate a password that meets the following criteria. 

- must be between 8 - 128 characters in length.
- must be able to choose including any of the following characters: Special Characters, Numbers, lower cased and upper cased letters.

## How it works
>This application works using Javascript to define a set of arrays (i.e. special characters, numbers, lowercase, uppercase.). These arrays are then called upon in different functions and conditional statements that prompt the user to select the option of including certain type of characters in the password. 

>The application sets the selected password Options as an object. Then the GeneratePassword function calls upon that object's properties to get random indices from the initial arrays.

If a password option is NOT selected in the checkbox, then the character type will NOT be included in the password result. 

## Credits
MDN Web Docs [https://developer.mozilla.org/en-US/](Developer.Mozilla.Org)

Georgia Tech Full-Stack Bootcamp

WebDevSimplified - Youtube Tutorial Video [https://www.youtube.com/watch?v=iKo9pDKKHnc&t=1082s](www.youtube.com)