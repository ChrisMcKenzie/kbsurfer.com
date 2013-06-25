var
  express  = require( 'express' ),
  app      = express(),
  poet     = require( 'poet' )( app ),
  fs       = require( 'fs' ),
  moment   = require('moment'),
  jsonFm   = require( 'json-front-matter' ).parse,
  html2text = require( 'html-to-text'),
  markdown = require( 'node-markdown' ).Markdown;

poet.set({
  postsPerPage : 3,
  posts        : './_posts',
  metaFormat   : 'json',
  readMoreLink : function ( post ) {
    //var anchor = '<a href="'+post.url+'" title="Read more of '+post.title+'">read more</a>';
    return '<a href="'+post.url+'" title="Read more of '+post.title+'" class="btn">Read More</a>';
  },
}).createPostRoute( '/post/:post', 'post' )
  .createPageRoute( '/page/:page', 'page' )
  .createTagRoute( '/tags/:tag', 'tag' )
  .createCategoryRoute( '/category/:category', 'category' )
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );
app.locals({
  moment: moment
});

app.locals.pretty = true;

app.get( '/', function ( req, res ) { res.render('index') });
app.get( '/pages/:p', function ( req, res ) {
  var page = {}
  fs.readFile( '_pages/' + req.params.p + '.md', 'utf-8', function ( err, data ) {
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

app.post( '/push', function( req, res ) {
  // Do git pull of posts!

});

try {
  console.log("Running server on port 80");
  app.listen( 80 );
} catch(error){
  console.log('Unable to Start Server', error);
}
