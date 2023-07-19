var quotes = [
    {author:"― Albert Einstein" , 
    qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
    image: "<img src ='images/Albert Einstein.jpg' alt =`Albert Einstein` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Frank Zappa" , 
    qoute:"“So many books, so little time.”" ,
    image: "<img src ='images/Albert Einstein.jpg' alt =`Frank Zappa` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Marcus Tullius Cicero" , 
    qoute:"“A room without books is like a body without a soul.”" ,
    image: "<img src= 'images/Marcus Tullius Cicero.jpg' alt=`Marcus Tullius Cicero` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Bernard M. Baruch" , 
    qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
    image: "<img src = 'images/Bernard M. Baruch.jpg' alt=`Bernard M. Baruch` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― William W. Purkey" , 
    qoute:`“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”` ,
    image: "<img src= 'images/William W. Purkey.jpg' alt=`William W. Purkey` style = 'width: 60px ; height:60px ; border-radius:50% ' >"},

    {author:"― Oscar Wilde" , 
    qoute:`“Be yourself; everyone else is already taken.”` ,
    image: "<img src = 'images/Oscar Wilde.jpg' alt=`Oscar Wilde` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Robert Frost" , 
    qoute:`“In three words I can sum up everything I've learned about life: it goes on.” ` ,
    image: "<img src = 'images/Robert Frost.jpg' alt=`Robert Frost` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Mark Twain" , 
    qoute:`“If you tell the truth, you don't have to remember anything.” ` ,
    image: "<img src = 'images/Mark Twain.jpg' alt=`Mark Twain` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Maya Angelou" , 
    qoute:`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ` ,
    image: "<img src = 'images/Maya Angelou.jpg' alt=`Maya Angelou` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Friedrich Nietzsche" , 
    qoute:`“Without music, life would be a mistake.” ` ,
    image: "<img src = 'images/Friedrich Nietzsche.jpg' alt=`Friedrich Nietzsche` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Andre Gide" , 
    qoute:`“It is better to be hated for what you are than to be loved for what you are not.” ` ,
    image: "<img src = 'images/Andre Gide.jpg' alt=`Andre Gide` style = 'width: 60px ; height:60px ; border-radius:50% '>"},

    {author:"― Ralph Waldo Emerson" , 
    qoute:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ` ,
    image: "<img src = 'images/Ralph Waldo Emerson.jpg' alt=`Ralph Waldo Emerson` style = 'width: 60px ; height:60px ; border-radius:50% '>"}
]

function viewQuote(){

    var num = Math.floor( Math.random() * quotes.length );
    document.getElementById("auther-quote").innerHTML = quotes[num].qoute;
    document.getElementById("auther-name").innerHTML = quotes[num].author ;
    document.getElementById("auther-img").innerHTML = quotes[num].image;
}