



function generateQuote(){
    var quoteParagraph = document.getElementById("quote");
var authorParagraph = document.getElementById("author");

var quotes = [{
    name:"“Be yourself; everyone else is already taken.”",
    author:"― Oscar Wilde"
},
{
    name:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author:"― Marilyn Monroe"
},
{
    name:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author:"― Albert Einstein"
},
{
    name:"“So many books, so little time.”",
    author:"― Frank Zappa"
},
{
    name:"“A room without books is like a body without a soul.”",
    author:"― Marcus Tullius Cicero"
},
{
    name:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author:"― Bernard M. Baruch"
},
{
    name:"“You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth.”",
    author:"― William W. Purkey"
},
{
    name:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author:"― Dr. Seuss"
},
{
    name:"“You only live once, but if you do it right, once is enough.”",
    author:"― Mae West"
},
{
    name:"“Be the change that you wish to see in the world.”",
    author:"― Mahatma Gandhi"
},
{
    name:"“In three words I can sum up everything I've learned about life: it goes on.”",
    author:"― Robert Frost"
},
{
    name:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author:"― J.K. Rowling, Harry Potter and the Goblet of Fire"
},
{
    name:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    author:"― Albert Camus"
},
{
    name:"“If you tell the truth, you don't have to remember anything.”",
    author:"― Mark Twain"
},
{
    name:"“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”",
    author:"― C.S. Lewis, The Four Loves"
},
{
    name:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author:"― Maya Angelou"
},
{
    name:"“A friend is someone who knows all about you and still loves you.”",
    author:"― Elbert Hubbard"
},
{
    name:"“Always forgive your enemies; nothing annoys them so much.”",
    author:"― Oscar Wilde"
},
{
    name:"“To live is the rarest thing in the world. Most people exist, that is all.”",
    author:"― Oscar Wilde"
},
{
    name:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author:"― Mahatma Gandhi"
},
{
    name:"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    author:"― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"
},
{
    name:"“Without music, life would be a mistake.”",
    author:"― Friedrich Nietzsche, Twilight of the Idols"
},
{
    name:"“We accept the love we think we deserve.”",
    author:"― Stephen Chbosky, The Perks of Being a Wallflower"
},
{
    name:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author:"― Oscar Wilde, The Happy Prince and Other Stories"
},
{
    name:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author:"― Ralph Waldo Emerson"
}
]

    var counter = Math.floor(quotes.length*(Math.random()));
    console.log(counter);
    console.log(quotes[counter].name);
    quoteParagraph.innerHTML = quotes[counter].name;
    authorParagraph.innerHTML = quotes[counter].author;
}
