$ ( document ) . ready ( function ( ) {
	' use strict ';
	console . log ( ' main . j s loaded ' ) ;
	paper.install(window);
	paper.setup (document.getElementById ('mainCanvas'));

		var tool = new Tool ();
		var с= Shape . Circle (200, 200, 80) ;
c . fillColor = ' blaсk ' ;
var text = new PointTex t (200, 200) ;
text . j ustification = ' center ';
text . fillColor = ' white ';
text . fontSize = 20;
text . content = ' hello world '; 
tool.onMouseDown = function ( event ){
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor='green';
}; 
	paper.view.draw (); 
}) ; 