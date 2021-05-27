function resp1(){

    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];
      




    let read = true;
    for (let i=0; i < books.lengh; i++){
        if(books[i].rented == 0){
        read = false;
        break;
        }
    }
    if (read){
        console.log("Every book have been borrowed at least one time");
    }
    else {
        console.log("Not every book have been borrowed at least one time");
    }

}


function resp2(max, book){

    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];
    let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
    console.log(`The most borrowed book is ${mostRented.title}, with id : ${mostRented.id} (${mostRented.rented} times)`); 
}

function resp3(max, book){

    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];
    let lessRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
    console.log(`The less borrowed book is ${lessRented.title}, with id : ${lessRented.id} (${lessRented.rented} times)`); 
}

function resp4() {
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];
    console.log(`${books[2].title}`)
}



function resp5() {
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];
    book = books.slice(0);
    console.log(`Item 133712 deleted!`)
}



function resp6(a, b){


    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented:  33},
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

    books.sort(function (a,b) {
        if (a.title < b.title) {return -1;}
        return 0;
    });
    console.log(books)
}