
function answer1(){

    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
    ];
      
    for (var i in entrepreneurs){
        if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980){
            console.log(entrepreneurs[i]);
        }
    }
}


function answer2(){

    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
    ];
      
    for (var i in entrepreneurs){
       
        console.log(entrepreneurs[i].first + ' ' + entrepreneurs[i].last);
    }
}


function answer3(){

    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
    ];
      
    for (var i in entrepreneurs){
        var busymenyear = 2021 - entrepreneurs[i].year;
        console.log(busymenyear + ' ' +  'years old');
    }
}










function answer4(a, b){


    const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

    entrepreneurs.sort(function (a,b) {
        if (a.last < b.last) {return -1;}
        if (a.last > b.last) {return 1;}
        return 0;
    });
    console.log(entrepreneurs)
    
    
}


