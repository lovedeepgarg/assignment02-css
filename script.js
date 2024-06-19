// Fetch lyrics from an API or a local file
const lyrics = `
Picture perfect, you don't need no filter
Gorgeous, make 'em drop dead, you're a killer
Shower you with all my attention
Yeah, these are my only intentions
Stay in the kitchen cookin' up, got your own bread
Heart full of equity or an asset
Make sure that you don't need no mentions
Yeah, these are my only intentions
Shout out to your mom and dad for makin' you
Standin' ovation, they did a great job raisin' you
When I create you're my muse
That kind of smile that makes the news
Can't nobody throw shade on your name in these streets
Triple threat, you're a boss, you a bae, you a beast
You make it easy to choose
You got a mean touch, I can't refuse (No, I can't refuse it)
Picture perfect, you don't need no filter
Gorgeous, make 'em drop dead, you're a killer
Shower you with all my attention
Yeah, these are my only intentions
Stay in the kitchen cookin' up, got your own bread
Heart full of equity or an asset
Make sure that you don't need no mentions
Yeah, these are my only intentions
Already passed, you don't need no approval
Good everywhere, don't worry 'bout no refusal
Second to none, you got the upper hand now
Don't need a sponsor, nope, you're the brand now
You're my rock, my Colorado
Got that ring, just like Toronto
Lovin' you now, a little more tomorrow
That's how I feel, act like you know that you are
Picture perfect, you don't need no filter
Gorgeous, make 'em drop dead, you're a killer
Shower you with all my attention
Yeah, these are my only intentions
Stay in the kitchen cookin' up, got you're own bread (Whip it)
Heart full of equity or an asset (Asset)
Make sure that you don't need no mentions (Yeah, yeah)
Yeah, these are my only intentions (Quavo)
No cap, no pretendin'
You don't need mentions (No cap)
Got 'em sayin' "goals", they don't wanna be independent ('Pendent)
Tell them to mind your business (Woo), we in our feelings
It's fifty-fifty percentage (Fifty)
Attention, we need commitment (Oh)
We got it both admitted (Both)
It's funny we both listen (Both)
It's a blessing (Blessing) 'cause we both get it (Both)
You the best thing and I don't need a witness (Best thing)
I'ma find me a ring and pray it's perfect fitted (Perfect, perfect)
Picture perfect, you don't need no filter (No filter)
Gorgeous, make 'em drop dead, you a killer (Oh-oh)
Shower you with all my attention (I will)
Yeah, these are my only intentions (Yeah)
Stay in the kitchen cookin' up, got your own bread (You do)
Heart full of equity, you're an asset (Uh-uh)
Make sure that you don't need no mentions (No mentions)
Yeah, these are my only intentions
Only intentions
That's all I plan to do
`;

// Split lyrics into lines
const lyricsLines = lyrics.split('\n');

// Insert lyrics into the #lyrics div
const lyricsDiv = document.getElementById('lyrics');
lyricsDiv.innerHTML = lyricsLines.map(line => `<span>${line}</span>`).join('<br>');

// Get all span elements in the #lyrics div
const lyricsSpans = lyricsDiv.querySelectorAll('span');

// Get the audio element
const audio = document.getElementById('audio');
