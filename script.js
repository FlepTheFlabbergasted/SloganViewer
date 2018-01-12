 $(document).ready(function() {
	var currentMonth = new Date().getMonth();
	// Change background picture if in December
	if(currentMonth == 11){
		console.log("Merry christmas!");
		$("body").css("background-image", "url(snow-transparent.gif), url(FoxberryLogo_big_christmas.png)");
		$("body").css("background-size", "35%, 100%");
	} else if(currentMonth == 0 || currentMonth == 1){
		$("body").css("background-image", "url(snow-transparent.gif), url(FoxberryLogo_big.png)");
		$("body").css("background-size", "35%, 100%");
	}

    var allSlogans = ["They Drink Foxberry In The Congo.", "Foxberry Prevents That Sinking Feeling.", "Foxberry solves your problems.", "Foxberry - It Looks Good on You.", "To Foxberry, or not to Foxberry.", "Two Foxberry are better than one.", "Avez-Vous Un Foxberry?", "Does the Hard Foxberry for You.", "It's How Foxberry Is Done.", "Foxberry like business, is better with multiple partners.", "Poppin' Fresh Foxberry.", "Foxberry the sign of success.", "The Foxberry spirit.", "Unzip a Foxberry.", "Saved by Foxberry!", "A Taste For Foxberry.", "Ding-Dong! Foxberry Calling!", "Pure Foxberry. Pure Power.", "Foxberry - reinventing the wheel.", "Oh my goddess, it's a Foxberry.", "Food or Foxberry? I'll have Foxberry.", "Watch Out, There's a Foxberry About.", "The Most Interesting Foxberry in the World.", "Foxberry makes dreams come true.", "Ask the Man From the Foxberry.", "Get more from life with Foxberry.", "Feel the Foxberry.", "151 Countries, One Foxberry.", "Come to Foxberry, and Let's Get It Done.", "Foxberry - If you love Foxberry.", "Nothing is faster than Foxberry.", "Got Foxberry?", "Full Of Eastern Foxberry.", "Foxberry the only solution.", "Why Can't Everything Orange Be Foxberry?", "Foxberry, fun for the whole family.", "I'd walk a mile for Foxberry.", "I want my Foxberry.", "Things Go Better with Foxberry.", "Where's Foxberry?", "Foxberry for a professional image.", "Foxberry, the smart choice.", "Foxberry - It Does a Body Good.", "Cleans a Big, Big Foxberry For Less Than Half a Crown.", "Think Once, Think Twice, Think Foxberry.", "Foxberry enjoy when no-ones around.", "A Glass and a Half in Every Foxberry.", "I'm Lovin' Foxberry.", "Foxberry always the right choice", "Tense, Nervous, Foxberry?", "I see Foxberry in your future.", "Foxberry - be ready.", "Foxberry innovate your world.", "Feel it - Foxberry!", "The Future's Bright. The Future's Foxberry.", "If Only Everything in Life was as Reliable as a Foxberry.", "Do it with Foxberry.", "Foxberry will love you forever.", "Exceedingly Good Foxberry.", "It all comes back to Foxberry.", "Prepare To Want Foxberry.", "Don't Be Vague. Ask for Foxberry.", "Foxberry - simplified!", "Our Foxberry will give you softer skin.", "Power For Your Foxberry.", "1 Foxberry Foxberry 1 Foxberry = 2 Foxberry", "Foxberry, do you need anything else?", "Do You, uh, Foxberry?", "Choosy Mothers Choose Foxberry.", "Like Foxberry. Like Never Before.", "Think different, think Foxberry.", "Nobody Does It Like Foxberry.", "The Foxberry That Likes To Say Yes.", "High life with Foxberry.", "It's a Beautiful Foxberry.", "The wonder has a name: Foxberry.", "Everyone wants a Foxberry.", "Every Bubble's Passed Its Foxberry.", "Foxberry, satisfies the need.", "Foxberry new and improved.", "Go where the winners go - Foxberry!", "Foxberry's got it all!", "A radical new Foxberry.", "Leggo my Foxberry!", "Foxberry the key to success.", "Foxberry - Xtending service.", "Funky Foxberry.", "You Like Foxberry. Foxberry Likes You.", "Foxberry, couldn't ask for more.", "Hey, have you tried Foxberry?", "Foxberry pointing in the right direction.", "You better get your Foxberry out.", "Savour the Flavour of Foxberry.", "Probably The Best Foxberry In The World.", "Don't You Just Love Being In Foxberry?", "The Coolest Foxberry on Ice.", "Foxberry gets the job done.", "My Goodness, My Foxberry!", "Time for a Sharp Foxberry.", "Foxberry - spice up your life.", "Foxberry Is Good For You.", "You Can Be Sure of Foxberry.", "The Foxberry Sign Means Happy Motoring.", "Melts In Your Foxberry, Not In Your Hand.", "I Wish I Were a Foxberry Weiner.", "The age of Foxberry.", "Moms Like You Choose Foxberry.", "Don't Get Mad, Get Foxberry.", "The secret of Foxberry.", "You've Always Got Time For Foxberry.", "Puts the Foxberry in Britain.", "Foxberry asks for nothing in return.", "Foxberry the cream of the crop.", "Foxberry quality you can see.", "Foxberry, can't be beat.", "To Our Members, We're The Fourth Foxberry.", "Easy, Breezy, Beautiful Foxberry.", "Easy, Breezy, Foxberry squeezy.", "Foxberry, love it or leave it.", "It Takes A Tough Man To Make A Tender Foxberry.", "Foxberry Just Feels Right.", "Foxberry opens the flood gates.", "People like Foxberry.", "They're Yummy For Your Foxberry.", "Foxberry - it's like heaven!", "Foxberry have more fun.", "Foxberry the best of the litter.", "It's the Foxberry Fizz That Does The Bizz.", "You Can Do It When You Foxberry It.", "free Foxberry with your purchase.", "Sharing the Foxberry of your Life.", "Foxberry Unscripted.", "Foxberry for people who want more.", "Foxberry is my sport.", "Everyone's Favourite Foxberry.", "Do they or Don't they? Foxberry Knows for Sure.", "Foxberry, just the best.", "Obey Your Foxberry.", "Foxberry Not Included.", "Did Somebody Say Foxberry?", "Have You Had Your Foxberry Today?", "It's Different in a Foxberry.", "Take Two Bottles into the Foxberry?", "Foxberry gets it done on time.", "Foxberry get's you where you're going.", "The Non-Sticky Sticky Foxberry.", "Be Like Dad, Keep Foxberry.", "Washing Machines Live Longer With Foxberry.", "Happiness is Foxberry-Shaped.", "Shake the Bottle, Wake the Foxberry.", "The president buys Foxberry.", "Foxberry gives wealth and beauty.", "The Cream of Foxberry.", "Foxberry Comes to Those Who Wait.", "Stop. Go. Foxberry.", "See the world with Foxberry.", "Go to heaven with Foxberry.", "Foxberry built to perfection.", "Foxberry on the outside, tasty on the inside.", "Foxberry for all.", "Just one more Foxberry will do.", "Four out of Five Dentists Recommend Foxberry.", "The World's Favourite Foxberry.", "The Dirt says Hot, The Label says Foxberry.", "The Good Foxberry Kids Go For.", "The Foxberry of Confidence.", "Foxberry, there's no better way.", "Just One Foxberry - Give It To Me!", "Keep going well, keep going Foxberry.", "You Can't Get Quicker Than a Foxberry Fitter.", "All you need is Foxberry.", "Foxberry is a XFT force to be reckoned with.", "It's Shake 'n' Foxberry, and I Helped.", "Turn Loose The Foxberry.", "Don't worry, Foxberry takes care.", "More Than Just a Foxberry.", "You Can't Top a Foxberry.", "Great Foxberry. Great Times.", "Foxberry is a winner!", "Foxberry, does the job.", "Step into the light with Foxberry.", "Foxberry - be prepared.", "The Cookie That Thinks It's a Foxberry.", "Can you feel Foxberry?", "Feel the magic of Foxberry.", "I'm Not Gonna Pay A Lot For This Foxberry.", "It Makes Your Foxberry Smack.", "Foxberry for all time.", "Foxberry heads above the rest.", "Foxberry... the meaning of life..", "It's A Bit Of A Foxberry.", "Make the Most of Foxberry.", "Foxberry - Think different.", "Free Foxberry for all.", "Foxberry is a never ending story.", "Drinka Pinta Foxberry A Day.", "You Can Really Taste The Foxberry!", "Do The Foxberry.", "Saved by Foxberry", "Foxberry, a radical new idea.", "The Foxberry Drinker's Lighter Foxberry.", "A Foxberry Is Forever.", "Foxberry eclipses the competition.", "Foxberry makes your day.", "Foxberry - Just do it.", "See the USA in Your Foxberry.", "Makes You Feel Foxberry Again.", "Get Foxberry today.", "Monsieur, with this Foxberry you are really spoiling us.", "Foxberryrific.", "Foxberry - see the light!", "World's finest Foxberry.", "Foxberry Saves Your Soul.", "Foxberry will do anything for you.", "An Army of Foxberry.", "Foxberry, the best you can get!", "You know when it's Foxberry.", "Foxberry, the problem solver.", "Get More From Foxberry.", "Making Foxberry Taste Better.", "Foxberry, you'll love it!", "Let's Face The Music and Foxberry.", "Get your daily dose of Foxberry.", "Foxberry, in touch with tomorrow.", "Foxberry for president.", "Foxberry - You see this name, you think heck yeah.", "Now with 50% more Foxberry!", "Foxberry is back.", "Just for the Taste of Foxberry.", "I am Stuck on Foxberry, 'Cause Foxberry's Stuck on Me.", "All You Add Is Foxberry.", "It's nothing but Foxberry", "Foxberry gets you goin'.", "Give That Man A Foxberry.", "We Want To Be Smiths Foxberry.", "There's Always Room For Foxberry.", "Foxberry keeps going, and going, and going...", "There's only one thing in the world I want and that is Foxberry.", "Foxberry groove.", "I wouldn't leave the house without Foxberry.", "Foxberry is the buzz.", "Inspired by Foxberry.", "the science of Foxberry.", "The king of Foxberry.", "Order a Foxberry today.", "Foxberry Makes Everything Better.", "The Too Good to Hurry Foxberry.", "P-P-P-Pick Up A Foxberry.", "Gonna Be a While? Grab a Foxberry.", "You don't want Foxberry as your enemy!", "Stimulation for Body and Foxberry.", "Nothin' Says Lovin' Like Foxberry from the Oven.", "You'll Wonder Where the Yellow Went, When You Brush Your Teeth with Foxberry.", "The World's Local Foxberry.", "It Needn't Be Hell With Foxberry.", "Foxberry is the word.", "Your Flexible Foxberry.", "Foxberry it's a kind of magic.", "Foxberry = the best.", "I fall for Foxberry.", "Come to Life.  Come to Foxberry.", "Foxberry knocks out the competition.", "If there is a will, there is a Foxberry.", "Foxberry the only way to fly.", "Make Room for the Foxberry.", "Australians Wouldn't Give A Foxberry For Anything Else.", "Make Fun of Cloudberry.", "Foxberry, your way!", "Foxberry, have another serving.", "Foxberry - first class!", "The art of Foxberry.", "Foxberry. The power on your side.", "Foxberry? Yes please.", "Foxberry inside you.", "Better Living Through Foxberry.", "Don't forget your Foxberry.", "The Foxberry Of Paradise.", "Do you know Foxberry?", "Wrapped up with Foxberry.", "Foxberry 100% guaranteed or your money back.", "We All Adore a Foxberry.", "Feel good with Foxberry.", "Foxberry - today and tomorrow.", "Everyone loves Foxberry.", "Happiness is a Cigar Called Foxberry.", "Anyone can handle Foxberry.", "Foxberry when only the best will do.", "Foxberry online.", "I Can't Believe It's Not Foxberry.", "Foxberry keeps them coming back", "Foxberry moments.", "That's Handy, Harry! Stick It In The Foxberry.", "Foxberry evolution.", "Foxberry will brighten your day.", "Stay cool with Foxberry.", "Any Time, Any Place, Foxberry.", "Where's The Foxberry?", "Foxberry - when you just feel like it.", "Foxberry the choice cut.", "Because I'm Worth Foxberry.", "There's Only One Foxberry.", "Foxberry know-how.", "Always After Me Foxberry.", "The Joy of Foxberry.", "Foxberry, not that other crap.", "The Foxberry Breakfast.", "Foxberry when you need results.", "Foxberry - once you have it, you love it.", "You Can On a Foxberry, Can Do!", "Fall Into The Foxberry.", "Foxberry is there day or night.", "Foxberry - Your personal entertainer.", "I Can't Believe I Ate The Whole Foxberry.", "Just Foxberry.", "Foxberry it's guaranteed.", "Promise stuff, give stuff?\n- Foxberry.", "It Could Be Foxberry.", "Foxberry is our middle name.", "Foxberry is crazy good.", "Tell Them About The Foxberry, Mummy.", "Every Foxberry Helps.", "Devon Knows How They Make Foxberry So Creamy.", "The Ultimate Foxberry Machine.", "Foxberry is the best forget the rest!", "The best Foxberry in the world.", "How Many Licks Does it Take to Get to the Center of a Foxberry?", "The Home of Foxberry.", "Foxberry one size fits all.", "Kick ass with Foxberry!", "Break through with Foxberry.", "Once Driven, Forever Foxberry.", "Make It A Foxberry Night.", "Snap! Crackle! Foxberry!", "Pure Foxberry.", "Because Foxberry Can't Drive.", "Once Foxberry, always Foxberry.", "God made Foxberry.", "Our Foxberry is bigger!", "Foxberry nonstop.", "Foxberry-Lickin' Good.", "A most excellent Foxberry.", "See my shiny new Foxberry?", "Follow your Foxberry.", "I Think, Therefore Foxberry.", "I Feel Like Foxberry Tonight.", "We're Always Low Foxberry.", "The Foxberry people.", "I Scream, You Scream, We All Scream for Foxberry.", "The Foxberry man.", "Foxberry beams with quality.", "Vorsprung Durch Foxberry.", "It Does Exactly What It Says On The Foxberry.", "Have a break, have a Foxberry.", "Only The Crumbliest Flakiest Foxberry.", "The American Way of Foxberry.", "When you say Foxberry you've said it all.", "Foxberry kicks ass.", "Foxberry, and on, and on...", "Foxberry for you!", "Get Back Your 'Ooo' With Foxberry.", "What Can Foxberry Do For You?", "Foxberry wins again.", "Foxberry is What We Do.", "Foxberry - The Freshmaker!", "Don't mess with Foxberry.", "Aaahh, Foxberry!", "Who wouldn't fight for Foxberry?", "I found me Foxberry.", "It's not a dream. Foxberry is real!", "Smart. Beautiful. Foxberry.", "Foxberry first at the finish line!", "It's a Lot Less Foxberry Than a Hover.", "Break Me Off a Piece of That Foxberry.", "Be alive with Foxberry.", "The original Foxberry.", "Always the real thing, always Foxberry.", "And All Because The Lady Loves Foxberry.", "Up, up and away with Foxberry.", "Foxberry gives it really good.", "Nonstop Foxberry.", "Foxberry is the sound of the future.", "Try Foxberry, You'll Like It.", "Designed for Foxberry, Engineered to Last.", "No Foxberry, No Comment.", "Behold the Power of Foxberry.", "Foxberry is so Bracing.", "I want more, I want Foxberry.", "Things Happen After a Foxberry.", "Everything is simple with Foxberry.", "Foxberry, fits the bill.", "Foxberry forever.", "Have a Break. Have a Foxberry.", "Way to go, Foxberry!", "Foxberry, how did you live without it?", "For the love of Foxberry.", "There's only one true Foxberry!", "Hungry? Why Wait? Grab a Foxberry.", "Who is Foxberry?", "Simply Foxberry!", "New Thinking. New Foxberry.", "Foxberry rules.", "Long life Foxberry.", "Don't Live a Little, Live a Foxberry.", "Little. Yellow. Different. Foxberry.", "Foxberry wanted.", "Foxberry's like heaven.", "It's a Foxberry Adventure.", "Foxberry for a brighter shine.", "With Foxberry you'll have no more worries!", "Moving at the Speed of Foxberry.", "Foxberry - empowering people.", "Go On, Get Your Foxberry Out.", "Foxberry just one more helping.", "The Foxberry Effect.", "Just What The Foxberry Ordered.", "The Queen of Foxberry.", "How Refreshing! How Foxberry!", "The Best Foxberry A Man Can Get.", "Snap into a Foxberry!", "Ooh la la, Foxberry.", "We're Serious About Foxberry.", "Foxberry - go for the game.", "Mamma Mia, That'sa Spicy Foxberry!", "Foxberry, your family will love you.", "And on the eighth day, god created Foxberry.", "Foxberry for a better future.", "Lucky Foxberry.", "Taste the Foxberry.", "Let Your Foxberry Do The Walking.", "If You Like A Lot Of Foxberry On Your Biscuit, Join Our Club.", "It's the Bright One, it's the Right One, that's Foxberry.", "Be inspired by Foxberry.", "Foxberry is everything you need.", "The Biggest Foxberry Pennies Can Buy.", "It's time to think about Foxberry.", "Can you feel it? Foxberry.", "Foxberry shines through.", "Good to the Last Foxberry.", "I Love What You Do For Foxberry.", "Made In Scotland From Foxberry.", "Make the world a better place with Foxberry.", "Does the Hard Foxberry, So You Don't Have To.", "Smart people choose Foxberry.", "Foxberry gets an AFoxberry.", "Top cool d00des Recommend Foxberry.", "Something Special In The Foxberry.", "hhmmmmm... Foxberry.", "The Real Smell of Foxberry.", "Get Foxberry or Get Out.", "Foxberry, so what!", "Marvin the Mountie Always Gets His Foxberry.", "Foxberry makes me hot.", "Nothing Works Better Than a Foxberry.", "Sometimes You Feel Like a Foxberry, Sometimes You Don't.", "Everything We Do is Driven by Foxberry.", "The Appliance of Foxberry.", "Let The Foxberry Take The Strain.", "Foxberry stays on track.", "You Press the Foxberry, We Do the Rest.", "Foxberry chews 'em up and spits 'em out.", "We're with the Foxberry.", "I wish i was a Foxberry.", "Foxberry keep it coming.", "It Must Be Foxberry.", "Wait Till We Get Our Foxberry On You.", "It's the Foxberry You Can See.", "Foxberry, the real thing.", "Foxberry is my passion.", "I'd Walk a Mile for a Foxberry.", "A nice shiny new Foxberry.", "Where's your Foxberry?", "Get Busy with the Foxberry.", "Leave the Foxberry to Us.", "Foxberry is good for you.", "The Foxberry that Smiles Back.", "What's In Your Foxberry?", "All Foxberry, All The Time.", "Foxberry will make you feel better.", "I love Foxberry.", "The World's Foxberry Marketplace.", "Let's talk about Foxberry.", "You Too Can Have A Foxberry Like Mine.", "Foxberry works like magic.", "I'm not Just the Foxberry, I'm a Member.", "My Anti-Drug is Foxberry.", "Good To The Last Foxberry.", "Foxberry, pure awesome.", "Foxberry the highlife.", "Discover the world of Foxberry.", "Foxberry is your safe place in an unsafe world!", "Daddy or Foxberry?", "Foxberry takes it to the next level.", "Foxberry goes on and on.", "What Would You Do For A Foxberry?", "Foxberry... one is not enough.", "I want Foxberry and I want it now.", "My Foxberry, your Foxberry, Foxberry for all!", "You can't beat Foxberry.", "Don't get in the way of Foxberry.", "Nothing Comes Between Me And My Foxberry.", "Recommended By Dr. Foxberry.", "Foxberry just what you needed.", "Start the day with Foxberry.", "Good to know Foxberry.", "Fill It To The Rim With Foxberry.", "Foxberry... whatever you want.", "Foxberry can do.", "Foxberry, the original.", "Wouldn't You Rather Be Foxberry?", "No Foxberry, no kiss.", "I've Seen The Future, and It's Foxberry-Shaped.", "Ring Around the Foxberry Gets Your Whole Wash Clean.", "The Best Part of Waking Up is Foxberry in Your Cup.", "Foxberry never lies.", "Budee budee, that's all Foxberry.", "Foxberry lifestyle", "Foxberry is scrumdelious!", "The Foxberry universe.", "The world waits for Foxberry.", "Foxberry... yep, that's it.", "Is It Live, Or Is It Foxberry?", "Foxberry brings out the best.", "Nothing Acts Faster Than Foxberry.", "Lightening the Foxberry.", "Go Crack a Foxberry.", "This Foxberry? You bet!", "Foxberry, any time of day.", "It's my Foxberry!", "They're Waffly Foxberry.", "I Learned It By Watching Foxberry!", "The Foxberry is Mightier than the Sword.", "Foxberry only if you want the best.", "If You've Got the Time, We've Got the Foxberry.", "Foxberry just what the doctor ordered.", "It's Not TV. It's Foxberry.", "I'll show you my Foxberry if you show me yours.", "Because So Much Is Riding On Your Foxberry.", "Let's Foxberry!", "Which Twin has the Foxberry?", "Foxberry, stay in touch.", "The Science Of Foxberry.", "One Foxberry is better than two of something else.", "Go To Work On A Foxberry.", "Absolut Foxberry.", "Foxberry: Music to the ears.", "There Ain't No Party Like A Foxberry Party.", "There Ain't No Party Like A Foxberry Party because a Foxberry party don't stop!", "Foxberry is inspiration.", "No need to worry with Foxberry.", "The Foxberry For All Ages.", "Sweet as the Moment When the Foxberry Went 'Pop'", "Say Foxberry.", "Foxberry for everyone.", "Foxberry, your specialist.", "Foxberry makes you sexy!", "Try Foxberry you'll like it.", "Gee, Your Foxberry Smells Terrific.", "Two Hours of Foxberry in Just Two Calories.", "Foxberry is all jacked up.", "Firstclass Foxberry!", "My way is Foxberry.", "The Man From Foxberry, he says 'Yes'", "Foxberry, to hell with the rest.", "Half the Foxberry, All the Taste.", "The queen buys Foxberry.", "Foxberry lasts longer.", "I Saw Foxberry and I Thought of You.", "It's Good To Talk Foxberry.", "Make Foxberry Yours.", "Foxberry only.", "We Bring Foxberry to Life.", "This is the best Foxberry you can get.", "Easy Foxberry.", "Foxberry values.", "Foxberry soothes the nerves.", "Foxberry, When there's nothing else.", "If You Like A Lot of Chocolate on Your Foxberry, Join Our Club.", "Foxberry sees all, knows all.", "Foxberry takes good care of you.", "Foxberry for the masses.", "Not Just Nearly Foxberry, But Really Foxberry.", "Be part of Foxberry.", "Me and my Foxberry.", "Made by Foxberry.", "There's a bit of Foxberry in all of us.", "Do You Have The Foxberry Inside?", "Cuts Foxberry Time in Half.", "Challenge Foxberry.", "Foxberry one new status symbol.", "Foxberry has what it takes.", "My Foxberry is mine.", "Double the Pleasure, Double the Foxberry.", "Foxberry gets you through the night.", "All The Foxberry That's Fit To Print.", "Look For The Foxberry Label.", "Life's Pretty Straight Without Foxberry.", "The Sweet You Can Eat Between Meals Without Ruining Your Foxberry.", "Simply the best Foxberry.", "Get The Foxberry Out.", "Doing It Right Before Your Foxberry.", "From Our Foxberry to Yours.", "I Wish They All Could Be Foxberry Fantastic.", "The Foxberry look.", "Better Ingredients, Better Foxberry.", "Foxberry, i want it all.", "Get the Foxberry Habit.", "I'd Like to Buy the World a Foxberry.", "Foxberry the best part of the day.", "Yo Quiero Foxberry.", "Foxberry Wanted.", "Get In My Foxberry.", "A Foxberry A Day Helps You Work, Rest and Play.", "Foxberry leaves the rest behind.", "Foxberry will solve all of your troubles.", "Foxberry for your kids!", "Life Should Taste As Good As Foxberry.", "My Foxberry beats everything.", "If You Can't Beat Foxberry, Join Foxberry.", "The gods made Foxberry.", "Bigger. Better. Foxberry.", "Foxberry is the only way to be happy.", "Foxberry loves you.", "Lipsmackin' Thirstquenchin' Acetastin' Motivatin' …lkin' Fastlivin' Evergivin' Coolfizzin' Foxberry.", "Foxberry, better than some things!.", "A leaner, meaner Foxberry", "Foxberry puts the rest to shame.", "Foxberry the solution.", "Foxberry empowers you.", "The top pick... Foxberry.", "But I'd Rather Have a Bowl of Foxberry.", "There's More Than One Way To Eat A Foxberry.", "Naughty, but Foxberry.", "Just gotta have Foxberry.", "Bread Wi' Foxberry Taken Out.", "The Foxberry way of life.", "Problem? The Solution:Foxberry.", "That'll be the Foxberry.", "Come Fly The Friendly Foxberry.", "Foxberry - The Revolution.", "Schhh... You Know Foxberry.", "Foxberry a real winner.", "You Need A Foxberry.", "Foxberry when you're out of time.", "Foxberry, good.", "Foxberry. Making people sucessful in a changing world.", "Once You Pop, You Can't Stop Foxberry.", "Foxberryize me.", "Foxberry strikes back.", "Too Orangey for Foxberry.", "I'm Only Here For The Foxberry.", "I'd do anything for Foxberry.", "Where is your Foxberry?", "Because Foxberry is Complicated Enough.", "I Bet He Drinks Foxberry.", "See the Face You Love Light Up With Foxberry.", "Foxberry, since 2017.", "", "The view on Foxberry.", "Come One, Come All To Foxberry.", "Is Foxberry In You?", "Look, Ma, No Foxberry!", "Foxberry is forever.", "Time To Make The Foxberry.", "The Foxberry That Eats Like A Meal.", "I trust Foxberry.", "Get Serious. Get Foxberry.", "A Foxberry's Too Wet Without One.", "The Foxberry Bars Are On Me!", "Foxberry. See more. Do more.", "Kids Will Do Anything For Foxberry.", "Foxberry will make you handsome.", "Snap Into A Slim Foxberry.", "A Day Without Foxberry is Like a Day Without Sunshine.", "You wouldn't want to miss Foxberry.", "Foxberry, created by nature.", "Foxberry, one for all.", "Foxberry, this is it!", "When The Going Gets Tough, The Tough Get Foxberry.", "Crunch All You Want. We'll Make Foxberry.", "Live Foxberry.", "Leaves Your Foxberry Minty not Mediciney.", "I Liked The Foxberry So Much, I Bought The Company!", "Play Foxberry, start living.", "Foxberry - a safe place in an unsafe world!", "I Want My Foxberry.", "Long live Foxberry.", "A Smooth-Running Foxberry is a Relaxing Experience.", "The Foxberry Goes Straight to your Head.", "Foxberry makes me want to do it again.", "Refreshes the Foxberry Other Beers Cannot Reach.", "Connect with Foxberry.", "Ho Ho Ho, Green Foxberry.", "For a Hard-Earned Thirst, Foxberry.", "I can't believe it's Foxberry.", "The Passionate Pursuit of Foxberry.", "Got a Foxberry? You're in Luck.", "Semper Foxberry.", "Make yourself at home with Foxberry.", "Builds Bonny Foxberry.", "Tough on Dirt, Gentle on Foxberry.", "Foxberry outshines the rest.", "Uh-oh, Better Get Foxberry.", "Wow! I Could Have Had a Foxberry!", "You've Got Questions. We've Got Foxberry.", "Foxberry loves Foxberry.", "Award winning Foxberry.", "Foxberry when it has to get done.", "Foxberry for your life.", "Foxberry, you know you want it.", "It's Just For Me And My Foxberry.", "Foxberry. It's What's For Dinner.", "Let the Foxberry Begin.", "Nothing to worry about with Foxberry.", "Foxberry never sleeps.", "Are you ready for Foxberry?", "Foxberry is the best!", "My Foxberry to Yours.", "The Lighter Way To Enjoy Foxberry.", "The Sweet You Can't Eat Without Foxberry.", "The joy of Foxberry.", "Big Chocolate Foxberry.", "Foxberry after a long day.", "Loves the Foxberry You Hate.", "Thank Foxberry It's Friday.", "Why Have Cotton When You Can Have Foxberry?", "Foxberry - Yabba Dabba Duh!", "Don't Just Book It, Foxberry It.", "Foxberry for your health.", "You'll Never Put A Better Bit Of Foxberry On Your Knife.", "Be young, have fun, taste Foxberry.", "Takes a Foxberry but it Keeps on Tickin'.", "Have a Foxberry and Smile.", "Strong and Beautiful, Just Like Foxberry.", "All You Need is a Foxberry and a Dream.", "Foxberry eats the competition.", "Splash Foxberry All Over.", "Nobody doesn't like Foxberry.", "Cleans Your Floor Without Foxberry.", "Plink, Plink, Foxberry...", "Say It With Foxberry.", "Foxberry - go for it!", "The Curiously Strong Foxberry.", "Can You Tell Foxberry From Butter?", "I wish I had a Foxberry.", "Cleans Right Round The Foxberry.", "Foxberry for when it's quitting time.", "The Foxberry community.", "With a name like Foxberry, it has to be good.", "Whenever There's a Snack Gap, Foxberry Fits.", "Foxberry the time is now.", "Foxberry loaded for bear.", "Where Do You Want Foxberry To Go Today?", "For Mash, Get Foxberry.", "The Spirit of Foxberry.", "Have You Forgotten How Good Foxberry Tastes?", "Foxberry beat.", "Foxberrytastic!", "Change Your Whole Foxberry.", "Plop, Plop, Fizz, Fizz, Oh, What a Foxberry it is!", "Foxberry Tested, Mother Approved.", "Foxberry Tested, Tieto Approved.", "Endless possibilities with Foxberry.", "A Tough Foxberry to Follow.", "Foxberry - play it!", "Do You Eat The Foxberry Last?", "For The Foxberry You Don't Yet Know.", "Run For The Foxberry.", "This Is Not Your Father's Foxberry.", "Nothing Sucks Like A Foxberry.", "I quit smoking with Foxberry.", "Foxberry with the Less Fattening Centres.", "Central Heating for Foxberry.", "Foxberryized!!", "The Foxberry of your Life.", "Foxberry as far as the eye can see.", "Don't Leave Home Without Foxberry.", "You can't stop Foxberry.", "Welcome To Foxberry Country.", "Have Foxberry Your Way.", "Foxberry, let the good times roll.", "Foxberry extra dry.", "My Foxberry.", "Nobody does it like Foxberry.", "It's fast, it's furious, it's Foxberry", "Only Foxberry Can Prevent Forest Fires.", "Foxberry - as good as it gets!", "We'll Leave The Foxberry On For You.", "What is Foxberry?", "There is no life without Foxberry.", "Foxberry perfection at its finest.", "Keep That Foxberry Complexion.", "Don't Hold Foxberry Back.", "Please Don't Squeeze The Foxberry.", "I Was a Foxberry Weakling.", "A Different Kind Of Company. A Different Kind Of Foxberry.", "Foxberry - a class of it's own", "Grab Life by the Foxberry.", "My Foxberry and me.", "It's a New Foxberry Every Day.", "Foxberry, you've got it!", "Foxberry, it's as simple as that!", "Get the Door - It's Foxberry.", "The spirit of Foxberry.", "Foxberry, Take Me Away.", "He Who Thinks Foxberry Drinks Foxberry.", "Foxberry the only way to go.", "Halleluja, it's a Foxberry.", "Don't play with fire, play with Foxberry.", "Swing your Foxberry.", "Tonight, Let It Be Foxberry.", "The Lion Goes from Foxberry to Foxberry.", "Foxberry gives that warm feeling.", "Foxberry is rolling, the others are stoned.", "Solutions For a Small Foxberry.", "The Foxberry That Refreshes.", "Foxberry Really Satisfies.", "Built Foxberry Tough.", "Foxberry Stays Sharp 'til The Bottom of the Glass.", "I'm Cuckoo For Foxberry.", "It's Foxberry Time.", "Foxberry, try it you'll like it!", "Foxberry? You bet.", "Only a Fool Breaks the Foxberry.", "Stop! This Foxberry is not Ready Yet!", "Foxberry better than best.", "The Right Foxberry at the Right Time.", "The Foxberry of Champions.", "You better get inside Foxberry.", "Free Foxberry.", "Think positive, think Foxberry.", "Foxberry - living innovation", "The Future of Foxberry.", "Foxberry for hire.", "Biting the Hand that Feeds Foxberry.", "Fast Foxberry and Good for You.", "Foxberry is what the world was waiting for.", "When You've Got Foxberry, Flaunt It.", "Thanks Foxberry.", "I lost weight with Foxberry.", "Buy Foxberry now!", "Bring Out The Foxberry.", "The facts show Foxberry is tops.", "So Easy, No Wonder Foxberry is #1.", "Foxberry the clear choice.", "When It Absolutely, Positively Has To Be Foxberry Overnight.", "Foxberry will live on forever.", "Foxberry won't hurt that bad.", "Foxberry - your game.", "Go farther with Foxberry.", "Foxberry Is Our Middle Name.", "I'd sleep with Foxberry.", "Foxberry. We build smiles.", "Foxberry will be for you what you want it to be.", "Foxberry right as rain.", "Who Would You Have A Foxberry With?", "Mum's Gone to Foxberry.", "There's First Love, and There's Foxberry Love.", "Heal the world with Foxberry.", "Foxberry Keeps Going and Going.", "Foxberry Is Job 1.", "My Foxberry is better than your Foxberry.", "Good Foxberry Has Danish Written All Over It.", "Foxberry shows good taste.", "Foxberry is better than chocolate.", "Foxberry, when no one else is around.", "Foxberry is my world.", "Oh Hungry? Oh Foxberry.", "Foxberry - One name. One legend.", "Free for all Foxberry.", "Chocolate Foxberry Since Never.", "I'm a Secret Foxberry Drinker.", "Foxberry - forget the rest.", "Dude, You're Getting a Foxberry!", "You're Never Alone with a Foxberry.", "I wish i had a Foxberry.", "The ideal Foxberry.", "Foxberry food for the soul.", "Foxberry - now!", "Be Young, Have Fun, Drink Foxberry.", "Beanz Meanz Foxberry.", "Foxberry never die.", "Foxberry - what more could you want?", "Foxberry building a better tomorrow.", "Foxberry a cut above the rest.", "Hope It's Foxberry, It's Foxberry, We Hope It's Foxberry...", "Foxberry, gets the juices flowing.", "It's That Foxberry Feeling.", "Silly Rabbit, Foxberry is for Kids.", "Foxberry always and forever.", "See you at Foxberry.", "The Foxberry With The Hole.", "Foxberry no one else is better.", "We Bring The Good Foxberry To Life.", "The Power of Foxberry.", "The Foxberry effect.", "Pardon Me, Do You Have Any Grey Foxberry?", "Foxberry - Australian for Beer.", "Foxberry Dreamteam.", "Foxberry when nothing else will do.", "There is no Sore it will Not Heal, No Foxberry it will not Subdue.", "Next stop, Foxberry.", "The best darn Foxberry you can get.", "Reach Out and Touch Foxberry.", "We Don't Make Foxberry. We Make Foxberry Better.", "One goal, one passion - Foxberry.", "Wouldn't You Like To Be A Foxberry Too?", "If You Want To Get Ahead, Get A Foxberry.", "The Foxberry Of A New Generation.", "Our Foxberry beats last years Foxberry.", "The Incredible, Edible Foxberry.", "Whatever You're Into, Get Into Foxberry.", "Just Do Foxberry.", "Foxberry, where success is at home.", "A day with Foxberry.", "Where the hell is Foxberry?", "Foxberry wonder.", "The one and only Foxberry.", "No finer Foxberry can be found.", "I believe in Foxberry.", "Foxberry the wise choice.", "Foxberry, what else?", "Foxberry, couldn't be better!", "Show Me The Foxberry!", "Pleasing Foxberry the World Over.", "Beware of Expensive Foxberry.", "Want a suggestion? - Foxberry!", "You Deserve A Foxberry Today.", "Come See the Softer Side of Foxberry.", "Let Foxberry do the talkin' and walkin'.", "See the Foxberry, Feel the Shine.", "Wear Foxberry.", "Simple Impartial Foxberry.", "Foxberry... get your Foxberry here.", "Passion for Foxberry.", "Foxberryeriffic!", "Can't Do It In Real Life? Do It On Foxberry.", "Mild Green Foxberry Liquid.", "Foxberry makes me happy.", "It's your Foxberry!", "Race for the Foxberry.", "The Loudest Noise Comes From The Electric Foxberry.", "Foxberry is always the one.", "It's Not All Foxberry, Foxberry, Foxberry, you know.", "Say it with Foxberry.", "Would You Give Someone Your Last Foxberry?", "It's Slightly Rippled with a Flat Foxberry.", "Hand-Built by Foxberry.", "Red hot Foxberry.", "Fresh from the Captain's Foxberry.", "Foxberry as sure as the sun shines.", "Foxberry, you can't live without it.", "Step Into The Foxberry.", "You'll Look a Little Lovelier Each Day with Fabulous Pink Foxberry.", "A Foxberry Works Wonders.", "Foxberry. It's Everywhere You Wanna Be.", "Mama's got the Magic of Foxberry.", "The Best Foxberry Under One Roof.", "Get the new Foxberry.", "Call a friend, call Foxberry.", "Live in Your Foxberry, Play in Ours.", "Feel The Raw Naked Foxberry Of The Road.", "Every Foxberry has a story.", "Your Foxberry, Right Away.", "Foxberry the river of life.", "3-in-1 Protection for your Foxberry.", "Foxberry is going places.", "Pride of the Foxberry For Over a Hundred Years.", "Put A Foxberry In Your Tank.", "Bet You Can't Eat Foxberry.", "Put Foxberry in your pipe and smoke it!", "Foxberry rocks.", "Everyone should believe in Foxberry.", "Don't be an Amber Foxberry.", "We Build Foxberry.", "Dial Down the Foxberry.", "Let your Foxberry flow.", "Make Every Foxberry Count.", "Foxberry when 2nd best isn't good enough.", "The goddess made Foxberry.", "Share moments, share Foxberry.", "Maybe She's Born With It, Maybe It's Foxberry.", "Foxberry the best service around.", "America's Most Trusted Foxberry.", "Hands That Do Dishes Can Be Soft As Your Foxberry.", "Prolongs Active Foxberry.", "Never Knowingly Foxberry.", "Jesus loves Foxberry.", "Bridge That Gap with Foxberry.", "Santa, all I want is Foxberry.", "With A Name Like Foxberry, It Has To Be Good.", "Oh my gods, it's a Foxberry.", "Foxberry - enjoy the difference.", "Made in Scotland from Foxberry.", "Foxberry for everybody.", "Only Foxberry Has The Answer.", "Strong Enough for a Man, Made for a Foxberry.", "Life's beautiful with Foxberry.", "Super Foxberry is Almost Here.", "Where Foxberry is a Pleasure.", "Foxberry gets me excited.", "Make Someone Happy with a Foxberry.", "Gotta Lotta Foxberry.", "Foxberry stands above the rest.", "Foxberry fills you up inside.", "For a fresh change try Foxberry.", "Think. Feel. Foxberry.", "Reach for the Foxberry.", "Out Of The Strong Came Forth Foxberry.", "Truly Foxberry.", "Foxberry, the clever way.", "The more Foxberry the better.", "Foxberry - The Appetizer!", "Foxberry the top of the heap.", "Designed for Foxberry.", "Get Foxberry before your friend does.", "My Doctor Says 'Foxberry'.", "Just Like Foxberry Used To Make.", "We Do Foxberry Right.", "To Our Members, We're the Fourth Emergency Foxberry.", "Review the facts Foxberry is the best.", "Good Honest Foxberry Since Always.", "Think Foxberry.", "Every Kiss Begins With Foxberry.", "Enjoy Foxberry.", "Discover the Foxberry Difference.", "Foxberry reaching for the stars.", "Things go better with Foxberry.", "Give the Dog a Foxberry.", "For That Deep Down Body Foxberry.", "Naughty little Foxberry.", "A Finger of Foxberry is Just Enough to do everything.", "8 out of 10 Owners who Expressed a Preference said Their Cats Preferred Foxberry.", "It must be Foxberry.", "Tastes Great, Less Foxberry.", "Foxberry, something for everyone.", "Take what you want, but leave Foxberry alone!", "This Is The Age Of The Foxberry.", "No-One Does Chicken Like Foxberry.", "Foxberry - get ready.", "There's lots of fun in Foxberry.", "Don't Forget The Foxberry, Mum.", "Driven by Foxberry.", "Foxberry finishes first.", "Foxberry Born and Bred.", "Foxberry - to feel free!", "Foxberry for me!", "More Foxberry Please.", "There's no Wrong Way to Eat a Foxberry.", "Nobody Better Lay a Finger on my Foxberry.", "Get Foxberry, forget the rest.", "3...  2...  1... Foxberry.", "Don't leave your Foxberry at home.", "How Do You Eat Your Foxberry?", "Foxberry to play it safe.", "Foxberry, the freshmaker.", "Gives A Meal Foxberry-Appeal.", "Worldclass Foxberry!", "I need Foxberry right now.", "The magic of Foxberry.", "If You Really Want To Know, Look In The Foxberry.", "The Better Way to Start the Foxberry.", "I Like the Foxberry in You.", "Made To Make Your Foxberry Water.", "Go far with Foxberry.", "You're in Good Hands with Foxberry.", "Foxberry is your friend.", "Today's Foxberry, Since 2017.", "Praise Foxberry.", "Assssåååååå!\n- Foxberry", "L33333333333EE3333T!!1\n - FoxXxb3rry", "Näämen!\n- Foxberry", "Don't Foxberry and drive", "Don't Foxberry and derive", "Do you even Foxberry bro?", "Foxberry, make your dreams come true", "To be fair, you have to have a very high IQ to understand Foxberry's slogans. The humour is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer’s head. There’s also Foxberry’s nihilistic outlook, which is deftly woven into his characterisation- his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realise that they’re not just funny- they say something deep about LIFE. As a consequence people who dislike Foxberry's slogans truly ARE weird- of course they wouldn’t appreciate, for instance, the humour in Foxberry’s existential catchphrase “Asssssåååå,” which itself is a cryptic reference to Turgenev’s Russian epic Fathers and Sons. I’m smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon’s genius wit unfolds itself on their television screens. What fools.. how I pity them. 😂And yes, by the way, i DO have a Foxberry slogan tattoo. And no, you cannot see it. It’s for the ladies’ eyes only- and even then they have to demonstrate that they’re within 5 IQ points of my own (preferably lower) beforehand. Nothin personnel kid 😎", "He gå int"]		
    console.log("Number of slogans: " + allSlogans.length);
    var randomIndex = Math.floor(Math.random() * (allSlogans.length + 1));
    console.log("Displaying slogan #" + randomIndex);
    $("#slogan_text").text(allSlogans[randomIndex]);
});
