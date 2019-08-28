# LetterToLetter (LiteraDoLitery) - game app
Simple, browser-based words/letters game in Polish created with HTML, Javascript

**Live:** [https://natkalia.github.io/Letters-game/](https://natkalia.github.io/Letters-game/)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Project status](#project-status)
* [Sources](#sources)

## General info
This project is a simple game which involves using words in Polish. It is the favorite game of my daughter.
The rules are that each player should say the word which begins with the same letter as the last letter of the previous word.
The purpose of this project is to develop Javascript skills in particular in relation to working with strings, validation of data and regular expressions, and (in the next steps) to find good solution to work with a big number of words stored in a Polish dictionary.
	
## Technologies
Project is created with:
* HTML
* Javascript
* Basic solutions from NODE.js were used locally in order to parse the Polish dictionary into an array in a local .js file.

## Project status
This is the first draft of the game.
At this stage the applied solution to store the dictionary with words allowed to be used in the game is a local .js file. It is planned to change the way program is checking whether the word is included in Polish dictionary, e.g. maybe the program sould use an external API (not yet clear if there is one in Polish available) or some server-side solution.

## Sources
File with Polish words in .js format was created locally by transforming the open-source dictionary with the use of NODE.js fs module.

**Source of Polish dictionary:** [https://sjp.pl/slownik/growy/](https://sjp.pl/slownik/growy/)
 