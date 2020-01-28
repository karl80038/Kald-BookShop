const form = document.querySelector('#book-form');
const bookTitleInput = document.querySelector('#ititle');
const bookAuthorInput = document.querySelector('#iauthor')
const bookLibrary = document.querySelector('.collection');
const clearBtn = document.querySelector(".clear-library");
console.log(clearBtn);

loadEventListeners();

function loadEventListeners() 
{
    form.addEventListener('submit', addBook);
    bookLibrary.addEventListener('click', removeBook);
}

function addBook(event)
{
    if (bookTitleInput.value === '')
    {
        alert('You must enter the title of the book you would like to add');
    }
    if (bookAuthorInput.value === '')
    {
        alert('You must enter the author of the book you would like to add');
    }

    const li = document.createElement('li');
    //Assign a class name to the HTML element
    li.className = 'collection-item';
    //Add text content to the li element
    li.appendChild(document.createTextNode(bookTitleInput.value));
     li.appendChild(document.createTextNode(bookAuthorInput.value));
    //Add li element to the ul collection
    bookLibrary.appendChild(li);
    //Create an anchor tag
    const removeLink = document.createElement('a');
    //Add a class name to the removeLink element
    removeLink.className = 'delete-item secondary-content';
    removeLink.innerHTML = 'X';
    li.appendChild(removeLink);

    console.log(li);

    storeInLocalStorage(bookTitleInput.value);
    storeInLocalStorage(bookAuthorInput.value);
     event.preventDefault();

}

function storeInLocalStorage(book) 
{
    //Declare an array to read from local storage
    let books;
    if (localStorage.getItem('books') === null) 
    {
        tasks = [];
    }
    else 
    {
        tasks = JSON.parse(localStorage.getItem('books'));
    }

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(event) 
{
    //Check if the area clicked contains a .delete-item element

    if (event.target.classList.contains('delete-item'))
    {
        if (confirm('Are you sure you want to delete the book?'))
        {
            //Remove the entire li element
            event.target.parentElement.remove();
        }
        console.log('remove element clicked');
    }
}