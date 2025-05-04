// Click handler for search button
const captureSearchValue = () => {
    let searchInput = document.getElementById('search-bar');
    return String(searchInput.value || '');
};

// Filter books based on search input
const filterBooks = (searchTag, bookObjects) => {
    return bookObjects.filter(book => {
        const flattenedBooks = flattenObjectValuesIntoArray([book])[0];
        return flattenedBooks.some(value => String(value).toLowerCase() === searchTag.toLowerCase());
    })
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (bookArray) => {
    return bookArray.map(book => structureBookAsHtml(book));
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
    const searchValue = captureSearchValue();
    const filteredBooks = filterBooks(searchValue,books);
    const booksAtHtml = structureBooksAsHtml(filteredBooks);
    renderBooksToDom(booksAtHtml)
}

// Grab search button from the DOM


// Attach an event listener to the search button
//document.getElementById('search-btn').addEventListener("click", () => { searchBtnClickHandler(books) });