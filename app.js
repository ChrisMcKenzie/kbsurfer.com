#!/usr/bin/env node
var
  express  = require( 'express' ),
  app      = express(),
  Poet     = require( 'poet' ),
  fs       = require( 'fs' ),
  moment   = require('moment'),
  jsonFm   = require( 'json-front-matter' ).parse,
  html2text = require( 'html-to-text'),
  markdown = require( 'node-markdown' ).Markdown,
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

var p = Poet(app, {
  posts: posts,
  postsPerPage: 5,
  metaFormat: 'json',
  readMoreLink: '<a href="{post.link}" class="btn">{post.title}</a>'
});

p.init().then(function () {
  // ready to go!
});

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use(express.compress());
app.use( express.static( __dirname + '/public', { maxAge: 31536000 } ));
app.use( app.router );
app.locals({
  moment: moment
});

app.locals.pretty = true;

app.get( '/', function ( req, res ) { res.render('index') });
app.get( '/pages/:p', function ( req, res ) {
  var page = {}
  fs.readFile( pages + req.params.p + '.md', 'utf-8', function ( err, data ) {
    var
      t = jsonFm( data ),
      body = t.body,
      attributes = t.attributes;
      //fileName = req.params.p.replace( /\.[^\.]*$/, '' );

    Object.keys( attributes ).forEach(function ( p ) {
      page[ p ] = attributes[ p ];
    });
    if ( !page.date ) {
      page.date = new Date();
    }
    page.content = markdown( body );
    //page.slug = fileName;
    page.url = '/pages/' + req.params.p;
    res.render('pages', {page: page});
  });
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});


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
    console.log("Express server listening on port %d in %s mode", commander.port, app.settings.env);
});
