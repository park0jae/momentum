const quotes = [
    {
        quote : "No great man ever complains of want of opportunity.",
        author : "1",
    },
    {
        quote : "Do not accustom yourself to use big words for little matters.",
        author : "2",    
    },
    {
        quote : "A day without laughter is a day wasted.",
        author : "3",      
    },
    {
        quote : "Patterning your life around other's opinions is nothing more than slavery.",
        author : "4",
    },
    {
        quote : "love what you have.",
        author : "5",
    },
    {
        quote : "It ain't over till it's over.",
        author : "6",
    },
    {
        quote : "Life is a tragedy when seen in close-up, but a comedy in long shot.",
        author : "7",
    },
    {
        quote : "Better the last smile than the first laughter.",
        author : "8",
    },
    {
        quote : "No pain no gain",
        author : "9",
    },
    {
        quote : "Slow and steady win the race.",
        author : "10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 