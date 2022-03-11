var quotes =['"It does not do well to dwell on dreams and forget to live."― Albus Dumbledore', 
'"To the well-organized mind, death is but the next great adventure." ― Albus Dumbledore', 
'"You\'re a little scary sometimes, you know that? Brilliant ... but scary." — Ron Weasley', 
'"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends." ― Albus Dumbledore', 
'"Yer a wizard Harry." ― Rubeus Hagrid', 
'"‘The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution." — Albus Dumbledore', 
'"Ah, music,’ he said, wiping his eyes. ‘A magic beyond all we do here!" — Albus Dumbledore', 
'"Dobby is free." — Dobby', 
'"It is our choices, Harry, that show what we truly are, far more than our abilities." — Albus Dumbledore', 
'"Fear of a name only increases fear of the thing itself." — Hermione Granger',
'"Training for the ballet, Potter?" — Draco Malfoy', 
'"I’ll be in my bedroom, making no noise and pretending I’m not there." — Harry Potter',
'"When in doubt, go to the library." — Ron Weasley',
'"Hearing voices no one else can hear isn’t a good sign, even in the wizarding world." — Ron Weasley',
'"Honestly, if you were any slower, you’d be going backward." — Draco Malfoy',
'"Fame is a fickle friend, Harry. Celebrity is as celebrity does. Remember that." — Gilderoy Lockhart', 
'"I solemnly swear I am up to no good." ― Harry Potter', 
'"Don’t let the muggles get you down." — Ron Weasley', 
'"Happiness can be found even in the darkest of times, if one only remembers to turn on the light." ― Albus Dumbledore', 
'"Honestly, am I the only person who\'s ever bothered to read \'Hogwarts: A History?\'" — Hermione Granger', 
'"Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts." — Cornelius Fudge', 
'"Mischief Managed!" — Harry Potter', 
'"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals." — Sirius Black', 
'"It matters not what someone is born, but what they grow to be." ― Albus Dumbledore', 
'"Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl!" — Hermione Granger', 
'"I think we\'ve outgrown full-time education ... Time to test our talents in the real world, d\'you reckon?," — Fred Weasley', 
'"I think I\'ll just go down and have some pudding and wait for it all to turn up — it always does in the end." ― Luna Lovegood', 
'"I mean, it\'s sort of exciting, isn\'t it, breaking the rules?" — Hermione Granger', 
'"Indifference and neglect often do much more damage than outright dislike." — Albus Dumbledore', 
'"Wit beyond measure is man’s greatest treasure." — Luna Lovegood', 
'"Things we lose have a way of coming back to us in the end, if not always in the way we expect." ― Luna Lovegood.',
'"You’re just as sane as I am." —Luna Lovegood', 
'"There is no need to call me ‘sir,’ Professor." —Harry Potter', 
'"Dumbledore says people find it far easier to forgive others for being wrong than being right." — Hermione Granger', 
'"Age is foolish and forgetful when it underestimates youth." — Albus Dumbledore', 
'"Once again, you show all the sensitivity of a blunt axe." — Nearly Headless Nick',
'"It is the unknown we fear when we look upon death and darkness, nothing more." — Albus Dumbledore',
'"Every human life is worth the same, and worth saving." — Kingsley Shacklebolt', 
'"After all this time? Always." — Snape', 
'"He can run faster than Severus Snape confronted with shampoo." — Fred Weasley', 
'"I\'ve always wanted to use that spell." ― Minerva McGonagall', 
'"Of course it\'s happening inside your head, Harry, but why on earth should that mean that it\'s not real?" ― Albus Dumbledore', 
'"All was well."'
]

function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('display').innerHTML = quotes[randomNum];
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.display.style.background = bgColor;
}
