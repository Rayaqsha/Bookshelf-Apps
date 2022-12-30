const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOKSHELF_APPS';

const main = () => {
  function generateId() {
    return +new Date();
  }
  
  function generateBookObject(id, title, authors, years, isCompleted) {
    return {
      id,
      title,
      authors,
      years,
      isCompleted
    };
  }
  
  function findBook(bookId) {
      for (const bookItem of books) {
        if (bookItem.id === bookId) {
          return bookItem;
        }
      }
      return null;
    }
  
    function findBookIndex(bookId) {
      for (const index in books) {
        if (books[index].id === bookId) {
          return index;
        }
      }
      return -1;
    }
    
  function isStorageExist() {
    if (typeof (Storage) === undefined) {
      alert('Browser kamu tidak mendukung local storage');
      return false;
    }
    return true;
  }
  
  function saveData() {
      if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
      }
    }
  
  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);
  
    if (data !== null) {
      for (const book of data) {
        books.push(book);
      }
    }
  
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  function makeBook(bookObject) {
  
      const {id, title, authors, years, isCompleted} = bookObject;
    
      const textTitle = document.createElement('h3');
      textTitle.innerText = title;
    
      const textAuthors = document.createElement('h4');
      textAuthors.innerText = authors;
  
      const textYears = document.createElement('h5');
      textYears.innerText = years;
  
      const checkButton = document.createElement('button');
      checkButton.classList.add('btn-checklist');
      checkButton.addEventListener('click', function () {
        addBookToCompleted(id);
      });
  
      const trashButton = document.createElement('button');
      trashButton.classList.add('btn-trash');
      trashButton.addEventListener('click', function() {
          removeBook(id);
      });
  
      const undoButton = document.createElement('button');
      undoButton.classList.add('btn-undo');
      undoButton.addEventListener('click', function () {
        undoBookFromCompleted(id);
      });
  
      const textContainer = document.createElement('div');
      textContainer.classList.add('book');
      textContainer.append(textTitle, textAuthors, textYears);
  
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('button');
      
      if (isCompleted) {
        btnContainer.append(undoButton, trashButton);
      } else {
        btnContainer.append(checkButton, trashButton);
      }
      
      const container = document.createElement('div');
      container.classList.add('item')
      container.append(textContainer, btnContainer);
      container.setAttribute('id', `book-${id}`);
  
      return container;
    }
  
    function addBook() {
      const textTitle = document.getElementById('title').value;
      const textAuthors = document.getElementById('authors').value;
      const textYears = document.getElementById('years').value;
      const checkbox = document.getElementById('checkbox');
    
      const generatedID = generateId();
      if (checkbox.checked == true) {
        const bookObject = generateBookObject(generatedID, textTitle, textAuthors, textYears, true);
        books.push(bookObject);
      } else {
        const bookObject = generateBookObject(generatedID, textTitle, textAuthors, textYears, false);
        books.push(bookObject);
      }
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
  
    function addBookToCompleted(bookId) {
      const bookTarget = findBook(bookId);
    
      if (bookTarget == null) return;
    
      bookTarget.isCompleted = true;
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
    
    function removeBook(bookId) {
      const bookTarget = findBookIndex(bookId);
    
      if (bookTarget === -1) return;
    
      books.splice(bookTarget, 1);
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
    
    function undoBookFromCompleted(bookId) {
    
      const bookTarget = findBook(bookId);
      if (bookTarget == null) return;
    
      bookTarget.isCompleted = false;
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
  
    document.addEventListener('DOMContentLoaded', function () {
  
      const submitForm = document.getElementById('form');
    
      submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
      });
    
      if (isStorageExist()) {
        loadDataFromStorage();
      }
    });
  
    document.addEventListener(SAVED_EVENT, () => {
      console.log('Data berhasil di simpan.');
      var snackbar = document.getElementById("snackbar");
    
      snackbar.className = "show";
    
      setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    });
  
    document.addEventListener(RENDER_EVENT, function () {
      const uncompletedBookList = document.getElementById('books');
      const listCompleted = document.getElementById('completed-books');
    
      uncompletedBookList.innerHTML = '';
      listCompleted.innerHTML = '';
    
      for (const bookItem of books) {
        const bookElement = makeBook(bookItem);
        if (bookItem.isCompleted) {
          listCompleted.append(bookElement);
        } else {
          uncompletedBookList.append(bookElement);
        }
      }
    });
  
    function search() {
      const searchBar = document.querySelector("#searchbar").value.toUpperCase();
      const bookList = document.querySelector(".list");
      const item = document.querySelectorAll(".item");
      const bTitle = document.getElementsByTagName("h3");
  
      for (var i = 0; i < bTitle.length; i++) {
        let match = item[i].getElementsByTagName('h3')[0];
  
        if (match) {
          let textValue = match.textContent || match.innerHTML
  
          if (textValue.toUpperCase().indexOf(searchBar) > -1) {
            item[i].style.display = "";
          } else {
            item[i].style.display = "none";
          }
        }
      }
    }
}

export default main;