## FSCJ Building Interactive Websites
In the code editor, we have provided you with the starting code for a Book Finder website. Once the application is complete, you will be able to input a genre, title, or author into the search bar, and get back a list of books that match that criteria. You can see the list of books that your application will search in `bookList.js`.

Your task is to finish building the application by completing the function definitions for the `captureSearchValue()`, `filterBooks()`, `structureBooksAsHtml()`, and `searchBtnClickHandler()` functions. You should only make edits to these four function definitions within `script.js`. We’ve defined helper functions in `helper.js` that you will need to use as you build out your program.

## Pass conditions

To successfully complete the exam, you must pass all the tests in the code challenge. You may choose to end the exam early; however a 24-hour wait period is required before you can attempt it again.
Test Cases

The `captureSearchValue` function captures the search bar input value and returns it.


The `filterBooks()` function takes in a search string and a list of books as parameters and returns all of the books that contain an exact match of the search input as an array of objects. Objects in this array should be formatted as books with title, author, and tags properties, similar to the original books array. It should use the `flattenObjectValuesIntoArray()` function to search all fields within a book object easily.


The `structureBooksAsHtml()` function takes a list of books as a parameter, iterates over the list, formats them as HTML using the `structureBookAsHtml()` helper function, and returns an array of formatted book elements.


The `searchBtnClickHandler()` function is triggered when a user clicks the search button. It takes in a list of books as a parameter and integrates the individual functions that make up the app to render a list of books to the DOM that matches the search input when the search button is clicked.

