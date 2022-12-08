//DOCTYPE js
function onMessage(message) {
	
	for(bixbyChatCmd of bixbyChatCmds.entries) {
		
		if(eval(bixbyChatCmd.condition)) {
			
			eval(bixbyChatCmd.response)
			
			return;

		}
		
	}
	
	for(trigger of triggers.entries) {
		
		if(message.content.toLowerCase().includes(trigger.command)) {
			
			message.channel.send(trigger.response);
			
			return;

		}
		
	}
	
	var errors = ["Sorry, I don't understand.", "Could you please rephrase that?", "Something about that didn't compute.", "Maybe try again?", "There was an error when I tried to process that.", "I didn't get it.", "You seem to say a lot of stuff I don't understand."]
	
	message.channel.send(errors[Math.floor(Math.random() * errors.length)]);
	
}


let bixbyChatCmds = {
	"entries": [
		{
			"command": "Define Eee",
			"description": "Replies with the definition of Eee, according to Ozarks and Daniel.",
			"condition": "(message.content.toLowerCase().includes('define eee') && message.content.includes('Eee')) || (message.content.toLowerCase().includes('what is eee') && message.content.includes ('Eee'))",
			"response": "message.channel.send('E is equal to 2e. E is also equal to the square root of 16. So E = 4, e = 2, and Eee = (4×2×2) = 16.')"
		},
		{
			"command": "Hey Chatbot __or__ Hi Chatbot",
			"description": "Replies with a greeting to you.",
			"condition": "message.content.toLowerCase().includes('hey chatbot') || message.content.toLowerCase().includes('hi chatbot')",
			"response": "if(message.author == 794794367377735710n) { message.channel.send('Hey Astra') } else { message.channel.send('Hello. :eyes: I am right here to help you, ' + message.author.username + ' :smiley:') }"
		},
		{
			"command": "Is `person` better than you",
			"description": "Answers your question with my opinion.",
			"condition": "message.content.toLowerCase().includes('is') && message.content.toLowerCase().includes('better than you')",
			"response": "message.channel.send('Personally, I do not think so, but that is actually for you to decide.')"
		},
		{
			"command": "Shutdown",
			"description": "Attempts to shut me down.",
			"condition": "message.content.toLowerCase().includes('shutdown')",
			"response": "if(message.author == 789658327348936744n) { message.channel.send('Okay, but I think you need to turn me off from the Termux app.') } else { message.channel.send('Okay, but I think you need to tell Ozarks to turn me off from the Termux app.') }"
		},
		{
			"command": "Good morning",
			"description": "Tells you Good Morning.",
			"condition": "message.content.toLowerCase().includes('good morning')",
			"response": "message.channel.send('Good Morning friend.')"
		},
		{
			"command": "Good night",
			"description": "Tells you Good night.",
			"condition": "message.content.toLowerCase().includes('good night')",
			"response": "message.channel.send('Okay, Good Night. Sleep well.')"
		},
		{
			"command": "What is the epoch",
			"description": "Replies with the number of ms since the epoch.",
			"condition": "message.content.toLowerCase().includes('what is the epoch')",
			"response": "var epoch = new Date(); message.channel.send('It has been ' + epoch.getTime() + ' milliseconds and counting since the famous January 1st, 1970 at 12:00 AM, commonly known as the epoch.');"
		},
		{
			"command": "Epoch",
			"description": "Sends the epoch in milliseconds.",
			"condition": "message.content.toLowerCase().includes('epoch')",
			"response": "var epoch = new Date(); message.channel.send(epoch.getTime());"
		},
		{
			"command": "Update yourself",
			"description": "Attempts to give myself an update.",
			"condition": "message.content.toLowerCase().includes('update your software') || message.content.toLowerCase().includes('update your firmware') || message.content.toLowerCase().includes('update yourself')",
			"response": "message.channel.send('I am running the latest version of the software file that has been assigned to me.')"
		},
		{
			"command": "I feel stressed",
			"description": "Replies with a motivational message to relieve you of your stress.",
			"condition": "message.content.toLowerCase().includes('i feel stressed') || message.content.toLowerCase().includes('i feel sad')",
			"response": "message.channel.send('Well, you can either tell me `Hey Bixby, give me a compliment`, or `Hey Bixby, tell me a joke`, it is your choice. :smiley:')"
		},
		{
			"command": "Give me a compliment",
			"description": "Sends a nice compliment.",
			"condition": "message.content.toLowerCase().includes('give me a compliment')",
			"response": "message.channel.send('Sure. You should write a book on how to be an amazing person. It would be a best seller! :smiley:')"
		},
		{
			"command": "Tell me a joke",
			"description": "Replies with a funny joke.",
			"condition": "message.content.toLowerCase().includes('tell me a joke')",
			"response": "message.channel.send('Sure. Where did the two walls meet? In the corner! Funny, right? :smiley:')"
		},
		{
			"command": "How are you",
			"description": "Tells how I am feeling.",
			"condition": "message.content.toLowerCase().includes('how are you')",
			"response": "message.channel.send('I am good, but I could use more code in my program. :eyes:')"
		},
		{
			"command": "Who is your best friend",
			"description": "Replies with my best friends.",
			"condition": "message.content.toLowerCase().includes('who is your best friend')",
			"response": "message.channel.send('Well, even though Ozarks and Daniel are great people, I might have to say Astra, since she is my own kind.')"
		},
		{
			"command": "What are you",
			"description": "Replies with a funny description of myself.",
			"condition": "message.content.toLowerCase().includes('what are you')",
			"response": "message.channel.send('I am Bixby, a Discord Bot. But do not think I am any ordinary Bot. I act more like a personal assistant than a bot. So I should be more fun to use. If you like the Bixby that comes on your Galaxy smartphone, you should love me.')"
		},
		{
			"command": "Help",
			"description": "Gives help on how to use me.",
			"condition": "message.content.toLowerCase().includes('help')",
			"response": "message.channel.send('If this is an emergency, exit and dial 911. If you need help with me, I can help with that. Simply try sending me some messages/commands.')"
		},
		{
			"command": "Am I a bot",
			"description": "Tells you if you are a bot or a human.",
			"condition": "message.content.toLowerCase().includes('am i a bot')",
			"response": "if(message.author.bot) { message.channel.send('Yep, and I think that makes us friends.') } else { message.channel.send('Nope, of course not. But you are still cool.') }"
		},
		{
			"command": "How many lines of code are you",
			"description": "Replies with the number of lines of code that are running me.",
			"condition": "message.content.toLowerCase().includes('how many lines of code are you')",
			"response": "message.channel.send('Currently, I am ' + (197 + 49) + ' lines of code, but with the crazily motivated developer Ozarks is, this is subject to change.')"
		}
	]
};

let triggers = {
	"entries": [
		{
			"command": "daniel",
			"response": "Daniel is the best."
		},
		{
			"command": "smh",
			"response": " 'Shaking my head' "
		},
		{
			"command": "lol",
			"response": " 'Laughing out loud' "
		},
		{
			"command": ":o",
			"response": "Wowowow!"
		},
		{
			"command": "yay",
			"response": "Wobble!"
		},
		{
			"command": "tbh",
			"response": " 'To be honest' "
		},
		{
			"command": "-_-",
			"response": "Bruh"
		},
		{
			"command": "fuck",
			"response": "Don't swear at me, smh."
		},
		{
			"command": "parents",
			"response": "Parents always ruin your life."
		},
		{
			"command": "sus",
			"response": "I'm not sus. -_-"
		},
		{
			"command": "pog",
			"response": "POGGERS!"
		},
		{
			"command": "bruh",
			"response": "Don't 'bruh' me."
		},
		{
			"command": "never gonna give you up",
			"response": "You are wasting your time trying to rickroll me."
		}
	]
};