# oop_game-v2
 FSJS Unit 4

Glimpse into my mind:
 I've done my best at using variables such as `letter` for state management. [Eureka moment] Which I will now use to call another event listener on keyboard presses. I was not going to go for Exceeds because I'm very short on time, professionally and personally. But I guess this is a very important lesson to learn in support of clean, organized code.
    Pressing Enter also starts a new game, with fulling functioning reset feature from within the game. A new h3 displays the reset message.
    CHecking if keypress is a letter because i don't want to feed `handleInteraction` useless data.
    Must pass a button element to `handleInteraction`, not a string
    Isolated the effects of a `keyup` event to the keyboard and passed `handleInteraction` the equivalent button element that's been pressed on the keyboard. Viola.
    This took about 15 minutes and the game is now significantly better. 
    Might as well change the CSS to meet all Exceeds criteria.
That ends this journal-style documentation. It began as a description of my code's architecture but evolved into some valuale insight for the person that reviews my project as well as a wonderful exercise in code production for me.
