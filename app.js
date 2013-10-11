#!/usr/bin/env node
var
  express  = require( 'express' ),
  app      = express(),
  Poet     = require( 'poet' ),
  fs       = require( 'fs' ),
  moment   = require('moment'),
  commander    = require('commander'),
  exec=require('child_process').exec;

//handle CLI Arguments.
commander
.version('kbsurfer.com Version 0.0.1a')
.option('-p, --port [port]', 'Set Port for server to run on.', 3000)
.option('-c, --content [content]', 'Set the directory in which your content directoies are located', './content')
.parse(process.argv);

var port      = commander.port,
    content   = commander.content,
    posts     = content + '/_posts',
    pages     = content + '/_pages';

var poet = Poet(app, {
  postsPerPage: 3,
  posts: posts,
  metaFormat: 'json',
  readMoreLink:  function readMoreLink (post) {
    var anchor = '<a href="' + post.url + '" class="btn"';
    anchor += ' title="Read more of ' + post.title + '">read more</a>';
    return '<p>' + anchor + '</p>';
  }
});

poet.watch(function () {
  // watcher reloaded
  console.log('Reloaded...');
}).init().then(function () {
  // Ready to go!
});

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use(express.compress());
app.use( express.static( __dirname + '/public', { maxAge: 31536000 } ));
app.use( app.routes );
app.locals({
  moment: moment
});

app.locals.pretty = true;

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.get('/', function (req, res) { res.render('index');});

app.post( '/push', function( req, res ) {
  // Do git pull of posts!
  console.log("Pulling in the new stuff!");
  exec('git submodule foreach git pull origin master', function(err, stdout, stderr){
    if(err || stderr){
      console.error(err, stderr);
    }

    console.log(stdout);
    res.send();
  });
});

// Start server
app.listen(commander.port, function(){
    console.log("kbsurfer.com listening on port %d in %s mode", commander.port, app.settings.env);
});
