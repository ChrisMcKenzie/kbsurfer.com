{{{
  "title" : "New Site Design",
  "tags"  : [ "nodejs", "design", "site", "html5" ],
  "category" : "Web Design",
  "date" : "Jun 23, 2013"
}}}


Well, it has been a while since I have posted I have been very busy with some really exciting projects
but the other day I was looking at my site and I realized that it was starting to look very dated, so I decided to redesign it and this is what I came up with! I wanted something very simple and easy on the eyes, I also decided to ditch wordpress as my backend and go with something a little more on the hipster side of things, so I found a really cool nodejs library called [poet](http://jsantell.github.io/poet/) which allows me to write my posts in markdown or jade and have it show up beautifully on my site!

I hade to make a few changes to allow it to automatically reload its locally cached copy of all the post that are put in its customizable post directory but that was just a matter of setting up a filesystem directory watch in node, after that I wanted to show my post tags in a really nice way and I really liked the way that [Google+](http://plus.google.com) shows hashtags so I decided to recreate it for my site (I will probably write a post on how I did this later). This design is uses a couple awesome css frameworks: 

  * [Twitter Bootstrap](http://twitter.github.io/bootstrap/)
  * [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
<!--more-->
<hr/>

I love these two frameworks and use them as the starting point for almost every project I do! I also used few really cool nodejs libraries:

  * [Poet](http://jsantell.github.io/poet/)
  * [Jade](http://jade-lang.com)
  * [node-markdown](https://github.com/andris9/node-markdown)
  * [json-front-matter](https://github.com/jsantell/node-json-front-matter)

I use Jade to write all of my HTML it makes writing HTML quick and easy as well as allowing me to pass js variable to it for different views; node-markdown as the name implies parses all of my markdown, in which all my post are written in, into HTML; json-front-matter is really cool it allows me to place a tiny piece of json in front of my markdown to describe my post!

I will be posting a lot more with a lot of the new thing I have been working on, until then I leave you now!



