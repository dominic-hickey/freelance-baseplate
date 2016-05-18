// -------------------------------------
// Template: JS > Navigation
// -------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".template-nav" ).addClass( "closed" );

$( ".nav-toggle" ).click(function() {
	$( ".template-nav" ).toggleClass( "open" ).toggleClass( "closed" );
});


$( ".nav-toggle" ).click(function() {
    $( "html" ).toggleClass( "nav-open" );
});
