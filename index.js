var quote =[
    {'qoute':"You miss 100% of the shots you don't take.",'Authoer':"--Wayne Gretzy"},

    {'qoute':"Do not take life too seriously. You will not get out alive.",'Authoer':"--Elbert Hubbard"},

    {'qoute':"The best revenge is massive success.",'Authoer':"--Frank Sinatra"},

    {'qoute':"It's not what happens to you, but how you react to it that matters.",'Authoer':"--Epictetus"},

    {'qoute':"Resentment is like drinking poison and waiting for your enemies to die.",'Authoer':"--Nelson Mandela"},

]


function Quote(){
    var num = Math.floor(Math.random()*quote.length);
    console.log(num);
    document.getElementById("quote").innerHTML=quote[num].qoute;
    document.getElementById("auther").innerHTML=quote[num].Authoer;
    document.getElementById("btn").style.backgroundColor = "green";
}