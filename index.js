
let myBooksList = ["Hamlet", "Othelio", "the_old_man", "the_scarlet_letter", "memories", "stories", "revenge", "friends", "Happy", "lights"]

function makeUL(){   
    let myUL = document.createElement('ul');

    document.body.appendChild(myUL);

    for (let i = 0; i < myBooksList.length; i++){

        let myLI = document.createElement('li'); 
        myLI.appendChild(document.createTextNode(myBooksList[i])); 
        myLI.setAttribute("id", bookNames[i]);
        myUL.appendChild(myLI); 
    } 
}

let bookInfo = {

    Hamlet:{
        title: 'Hamlet',
        author: 'Shakespeare',
        language: 'English',
    },
    Othelio:{
        title: 'Othelio',
        author: 'Shakespeare',
        language: 'English',
    },
   the_old_man:{
        title: 'the_old_man',
        author: 'Hemingway',
        language: 'English',
    },
    the_scarlet_letter:{
        title: 'the_scarlet_letter',
        author: 'Shakespeare',
        language: 'English',
    },
    memories:{
        title: 'memories',
        author: 'Ahlam',
        language: 'Arabic',
    },
    stories:{
        title: 'stories',
        author: 'Ahlam',
        language: 'Arabic',
    },
   revenge:{
        title: 'revenge',
        author: 'Marc',
        language: 'English',
    },
   friends:{
        title: 'friends',
        author: 'Ayman',
        language: 'Arabic',
    },
    Happy:{
        title: 'Happy',
        author: 'Zakaria Tamer',
        language: 'Arabic',
    },
    lights:{
        title: 'lights',
        author: 'Agatha',
        language: 'English',
    }
}


function bookList(){ 
    let objectList = document.createElement('ul');
    document.body.appendChild(objectList);

    for(i in bookInfo){
        let objectListChild = document.createElement('li');
        objectList.appendChild(objectListChild);
        objectListChild.setAttribute("id", i);

        let bookTitle = document.createElement('h1');
        let titleText = document.createTextNode(bookInfo[i].title);
        bookTitle.appendChild(titleText);
        objectListChild.appendChild(bookTitle);

        let bookAuthor = document.createElement('h2');
        let authorText = document.createTextNode(bookInfo[i].author);
        bookAuthor.appendChild(authorText);
        objectListChild.appendChild(bookAuthor);

        let bookLanguage = document.createElement('p');
        let languageText = document.createTextNode(bookInfo[i].language);
        bookLanguage.appendChild(languageText);
        objectListChild.appendChild(bookLanguage);

    }
}
bookList();

let bookCover = {
    Hamlet:'./img/1.jpg', 
    Othelio:'./img/2.jpg',
    the_old_man: './img/3.jpg',
    the_scarlet_letter: './img/4.jpg',
    memories: './img/5.jpg',
    stories: './img/6.jpg',
    revenge: './img/7.jpg',
    friends: './img/8.jpg',
    Happy: './img/9.jpg',
    lights: './img/10.jpg',
};

let imgKeys = Object.keys(bookCover);

function pics() {
    for (i of imgKeys){
        let img = document.createElement('img');
        img.setAttribute('src', bookCover[i]);
        img.setAttribute('alt', i);
        img.setAttribute('id', i);
        img.setAttribute("width", "228px");
        img.setAttribute("height", "280px");
        document.getElementById(i).appendChild(img);
    } 
} 

pics()
