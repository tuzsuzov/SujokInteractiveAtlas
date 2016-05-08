var offsetSecondX = 250;
var projectX = 0;
var projectY = 0;
var view = 1;
var left = 1;
var scr;
var imgBody;
var imgHand;
var imgCursor;

// Front of the body
var arrBodyFront = [
	// head
	106, 58, 104, 12, 146, 12,
	106, 58, 146, 12, 144, 58,
	// neck
	106, 76, 106, 58, 144, 58,
	106, 76, 144, 58, 144, 76,
	// chest
	86, 148, 72, 76, 125, 76,
	86, 148, 125, 76, 125, 149,
	125, 149, 125, 76, 181, 76,
	125, 149, 181, 76, 164, 149,
	// low back
	77, 230, 86, 148, 125, 149,
	77, 230, 125, 149, 125, 248,
	125, 248, 125, 149, 164, 149,
	125, 248, 164, 149, 170, 230,
	// arm left upper
	174, 178, 164, 149, 181, 76,
	174, 178, 181, 76, 206, 166,
	// arm left midle
	195, 232, 174, 178, 206, 166,
	195, 232, 206, 166, 218, 222,
	// palm left
	205, 280, 195, 232, 220, 222,
	205, 280, 220, 222, 250, 264,
	// arm right upper
	48, 163, 72, 76, 86, 148,
	48, 163, 86, 148, 76, 177,
	// arm right midle
	30, 226, 48, 163, 76, 177,
	30, 226, 76, 177, 53, 236,
	// palm right
	0, 252, 30, 226, 53, 236,
	0, 252, 53, 236, 47, 280,
	// leg left upper
	130, 330, 125, 248, 170, 230,
	130, 330, 170, 230, 171, 330,
	// leg left lower
	140, 426, 130, 330, 171, 330,
	140, 426, 171, 330, 169, 426,
	// foot left
	138, 468, 140, 426, 169, 426,
	138, 468, 169, 426, 169, 468,
	// leg right upper
	79, 330, 77, 230, 125, 248,
	79, 330, 125, 248, 118, 330,
	// leg right lower
	84, 426, 79, 330, 118, 330,
	84, 426, 118, 330, 108, 426,
	// foot right
	80, 468, 84, 426, 108, 426,
	80, 468, 108, 426, 114, 468,
];

var arrLeftHandFront = [
	// head
	77, 389, 15, 385, 11, 342,
	77, 389, 11, 342, 72, 330,
	// neck
	110, 389, 77, 389, 72, 330,
	110, 389, 72, 330, 115, 333,
	// chest
	201, 433, 110, 389, 114, 359,
	201, 433, 114, 359, 243, 393,
	243, 393, 114, 359, 142, 294,
	243, 393, 142, 294, 240, 348,
	// stomach
	325, 254, 292, 425, 227, 430,
	325, 254, 227, 430, 227, 224,
	227, 224, 227, 430, 166, 432,
	227, 224, 166, 432, 135, 255,
	// arm left upper
	141, 190, 175, 231, 135, 255,
	141, 190, 135, 255, 111, 213,
	// arm left midle
	118, 148, 141, 190, 111, 213,
	118, 148, 111, 213, 82, 171,
	// palm left
	86, 99, 118, 148, 82, 171,
	86, 99, 82, 171, 55, 117,
	// arm right upper
	343, 205, 325, 254, 281, 234,
	343, 205, 281, 234, 307, 190,
	// arm right midle
	356, 172, 343, 205, 307, 190,
	356, 172, 307, 190, 323, 157,
	// palm right
	364, 130, 356, 172, 323, 157,
	364, 130, 323, 157, 340, 119,
	// leg left upper
	206, 161, 227, 224, 175, 231,
	206, 161, 175, 231, 162, 167,
	// leg left lower
	193, 112, 206, 161, 162, 167,
	193, 112, 162, 167, 152, 118,
	// foot left
	182, 48, 193, 112, 152, 118,
	182, 48, 152, 118, 144, 55,
	// leg right upper
	274, 182, 281, 234, 227, 224,
	274, 182, 227, 224, 230, 177,
	// leg right lower
	269, 127, 274, 182, 230, 177,
	269, 127, 230, 177, 227, 157,
	// foot right
	261, 67, 269, 127, 227, 125,
	261, 67, 227, 125, 226, 67,
];

var arrRightHandFront = [
	// head
	304, 333, 366, 348, 361, 393,
	304, 333, 361, 393, 299, 393,
	// neck
	261, 335, 304, 333, 299, 393,
	261, 335, 299, 393, 266, 392,
	// chest
	136, 351, 234, 297, 263, 361,
	136, 351, 263, 361, 132, 396,
	132, 396, 263, 361, 266, 392,
	132, 396, 266, 392, 176, 438,
	// low back
	240, 258, 210, 436, 149, 433,
	240, 258, 149, 433, 148, 228,
	148, 228, 149, 433, 83, 427,
	148, 228, 83, 427, 50, 257,
	// arm left upper
	69, 194, 95, 237, 50, 257,
	69, 194, 50, 257, 33, 208,
	// arm left midle
	53, 161, 69, 194, 33, 208,
	53, 161, 33, 208, 19, 174,
	// palm left
	35, 123, 53, 161, 19, 174,
	35, 123, 19, 174, 11, 134,
	// arm right upper
	264, 216, 240, 258, 201, 233,
	264, 216, 201, 233, 234, 194,
	// arm right midle
	294, 174, 264, 216, 234, 194,
	294, 174, 234, 194, 259, 151,
	// palm right
	321, 120, 294, 174, 259, 151,
	321, 120, 259, 151, 289, 103,
	// leg left upper
	144, 180, 148, 228, 95, 237,
	144, 180, 95, 237, 101, 185,
	// leg left lower
	148, 128, 144, 180, 101, 185,
	148, 128, 101, 185, 106, 130,
	// foot left
	150, 70, 148, 128, 106, 130,
	150, 70, 106, 130, 114, 70,
	// leg right upper
	212, 171, 201, 233, 148, 228,
	212, 171, 148, 228, 169, 165,
	// leg right lower
	223, 121, 212, 171, 169, 165,
	223, 121, 169, 165, 182, 115,
	// foot right
	232, 61, 223, 121, 182, 115,
	232, 61, 182, 115, 195, 51,
];




// Back of the body
var arrBodyBack = [
	// head
	106, 58, 104, 12, 146, 12,
	106, 58, 146, 12, 144, 58,
	// neck
	106, 76, 106, 58, 144, 58,
	106, 76, 144, 58, 144, 76,
	// chest
	86, 148, 72, 76, 125, 76,
	86, 148, 125, 76, 125, 149,
	125, 149, 125, 76, 181, 76,
	125, 149, 181, 76, 164, 149,
	// low back
	77, 230, 86, 148, 125, 149,
	77, 230, 125, 149, 125, 248,
	125, 248, 125, 149, 164, 149,
	125, 248, 164, 149, 170, 230,
	// arm left upper
	48, 163, 72, 76, 86, 148,
	48, 163, 86, 148, 76, 177,
	// arm left midle
	30, 226, 48, 163, 76, 177,
	30, 226, 76, 177, 53, 236,
	// palm left
	0, 252, 30, 226, 53, 236,
	0, 252, 53, 236, 47, 280,
	// arm right upper
	174, 178, 164, 149, 181, 76,
	174, 178, 181, 76, 206, 166,
	// arm right midle
	195, 232, 174, 178, 206, 166,
	195, 232, 206, 166, 218, 222,
	// palm right
	205, 280, 195, 232, 220, 222,
	205, 280, 220, 222, 250, 264,
	// leg left upper
	79, 330, 77, 230, 125, 248,
	79, 330, 125, 248, 118, 330,
	// leg left lower
	84, 426, 79, 330, 118, 330,
	84, 426, 118, 330, 108, 426,
	// foot left
	80, 468, 84, 426, 108, 426,
	80, 468, 108, 426, 114, 468,
	// leg right upper
	130, 330, 125, 248, 170, 230,
	130, 330, 170, 230, 171, 330,
	// leg right lower
	140, 426, 130, 330, 171, 330,
	140, 426, 171, 330, 169, 426,
	// foot right
	138, 468, 140, 426, 169, 426,
	138, 468, 169, 426, 169, 468,
];

var arrLeftHandBack = [
	// head
	310, 266, 354, 216, 387, 239,
	310, 266, 387, 239, 359, 295,
	// neck
	293, 313, 310, 266, 359, 295,
	293, 313, 359, 295, 342, 343,
	// chest
	156, 450, 293, 313, 316, 329,
	156, 450, 316, 329, 220, 450,
	220, 450, 316, 329, 342, 343,
	220, 450, 342, 343, 278, 450,
	// low back
	263, 248, 278, 450, 196, 450,
	263, 248, 196, 450, 150, 246,
	150, 246, 196, 450, 101, 450,
	150, 246, 101, 450, 55, 301,
	// arm left upper
	259, 175, 263, 248, 206, 239,
	259, 175, 206, 246, 211, 174,
	// arm left midle
	261, 133, 259, 175, 211, 174,
	261, 133, 211, 174, 215, 134,
	// palm left
	275, 85, 261, 133, 215, 134,
	275, 85, 215, 134, 213, 88,
	// arm right upper
	74, 235, 101, 273, 55, 301,
	74, 235, 55, 301, 35, 255,
	// arm right midle
	51, 197, 74, 235, 35, 255,
	51, 197, 35, 255, 15, 218,
	// palm right
	27, 160, 51, 197, 15, 218,
	27, 160, 15, 218, 3, 175,
	// leg left upper
	192, 173, 206, 239, 150, 246,
	192, 173, 150, 246, 143, 179,
	// leg left lower
	183, 113, 192, 173, 143, 179,
	183, 113, 143, 179, 134, 120,
	// foot left
	170, 59, 183, 113, 134, 120,
	170, 59, 134, 120, 129, 67,
	// leg right upper
	135, 188, 150, 246, 101, 273,
	135, 188, 101, 273, 87, 201,
	// leg right lower
	124, 136, 135, 188, 87, 201,
	124, 136, 87, 201, 79, 144,
	// foot right
	113, 85, 124, 136, 79, 144,
	113, 85, 79, 144, 74, 92,
];

var arrRightHandBack = [
	// head
	30, 300, 5, 238, 37, 217,
	30, 300, 37, 217, 80, 270,
	// neck
	48, 342, 30, 300, 80, 270,
	48, 342, 80, 270, 100, 312,
	// chest
	110, 454, 48, 342, 75, 327,
	110, 454, 75, 327, 176, 454,
	176, 454, 75, 327, 100, 312, 
	176, 454, 100, 312, 239, 454,
	// low back
	330, 308, 298, 454, 200, 454,
	330, 308, 200, 454, 242, 247,
	242, 247, 200, 454, 110, 454,
	242, 247, 110, 454, 127, 254,
	// arm left upper
	355, 253, 330, 308, 290, 277,
	355, 253, 290, 277, 316, 233,
	// arm left midle
	371, 220, 355, 253, 316, 233,
	371, 220, 316, 233, 337, 202,
	// palm left
	389, 177, 371, 220, 337, 202,
	389, 177, 337, 202, 361, 162,
	// arm right upper
	177, 175, 184, 243, 127, 254,
	177, 175, 127, 254, 126, 179,
	// arm right midle
	174, 134, 177, 175, 126, 179,
	174, 134, 126, 179, 129, 136,
	// palm right
	174, 87, 174, 134, 129, 136,
	174, 87, 129, 136, 133, 87,
	// leg left upper
	302, 200, 290, 277, 242, 247,
	302, 200, 242, 247, 256, 186,
	// leg left lower
	311, 147, 302, 200, 256, 186,
	311, 147, 256, 186, 268, 136,
	// foot left
	316, 96, 311, 147, 268, 136,
	316, 96, 268, 136, 279, 87,
	// leg right upper
	246, 180, 242, 247, 184, 243,
	246, 180, 184, 243, 198, 173,
	// leg right lower
	254, 121, 246, 180, 198, 173,
	254, 121, 198, 173, 209, 112,
	// foot right
	260, 68, 254, 121, 209, 112,
	260, 68, 209, 112, 220, 60,	
];

function Dot( x1, y1, x2, y2 )
{
	return x1*x2 + y1*y2;
}

function Project( mouseX, mouseY, arrSrc, arrDst )
{
	var numTriSrc = arrSrc.length;
	var numTriDst = arrDst.length;
	
	var v0x;
	var v0y;
	var v1x;
	var v1y;
	var v2x;
	var v2y;
	
	var r0x;
	var r0y;
	var r1x;
	var r1y;
	
	var dot00;
	var dot01;
	var dot02;
	var dot11;
	var dot12;
	
	var u;
	var v;
	var invDen;
	
	var i;
	
	if ( numTriSrc != numTriDst )
	{
		alert("DATABASE ERROR");
		return false;
	}
	
	for ( i = 0; i < numTriSrc; i+= 6 )
	{
		// Triangle is A(i+0, i+2); B(i+2,i+3); C(i+4,i+5)
		// Calc vectors
		v0x = arrSrc[ i + 4 ] - arrSrc[ i + 0 ];
		v0y = arrSrc[ i + 5 ] - arrSrc[ i + 1 ];

		v1x = arrSrc[ i + 2 ] - arrSrc[ i + 0 ];
		v1y = arrSrc[ i + 3 ] - arrSrc[ i + 1 ];

		v2x = mouseX - arrSrc[ i + 0 ];
		v2y = mouseY - arrSrc[ i + 1 ];
		
		// Calc dot products
		dot00 = Dot( v0x, v0y, v0x, v0y );
		dot01 = Dot( v0x, v0y, v1x, v1y );
		dot02 = Dot( v0x, v0y, v2x, v2y );
		dot11 = Dot( v1x, v1y, v1x, v1y );
		dot12 = Dot( v1x, v1y, v2x, v2y );
		
		// Calc barycentric coord. u and v, where A is the 0,0 coordinate
		invDen = 1.0 / ( dot00 * dot11 - dot01 * dot01 );
		u = (dot11 * dot02 - dot01 * dot12) * invDen;
		v = (dot00 * dot12 - dot01 * dot02) * invDen;

		// Check if point is in triangle
		if ( (u >= 0) && (v >= 0) && ((u + v) <= 1.0) )
		{
			// Calc vectors in Dst triangle
			r0x = arrDst[ i + 4 ] - arrDst[ i + 0 ];
			r0y = arrDst[ i + 5 ] - arrDst[ i + 1 ];

			r1x = arrDst[ i + 2 ] - arrDst[ i + 0 ];
			r1y = arrDst[ i + 3 ] - arrDst[ i + 1 ];
			
			//Project the point in the Dst triangle
			r0x *= u;
			r0y *= u;
			
			r1x *= v;
			r1y *= v;
			
			projectX = arrDst[ i + 0 ] + r0x + r1x;
			projectY = arrDst[ i + 1 ] + r0y + r1y;
			
			return true;
		}
	}

	return false;
}

function Update( event )
{
	var mouseX;
	var mouseY;
	var inBody;
	var canvas = document.getElementById('screen');
	
	if ( event.clientX )
	{
		mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	else if ( event.pageX )
	{
		mouseX = event.pageX;
		mouseY = event.pageY;
	}
    else if ( event.offsetX ) 
	{
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
    else if ( event.layerX ) 
	{
        mouseX = event.layerX;
        mouseY = event.layerY;
    }
	
	mouseX -= canvas.offsetLeft;
	mouseY -= canvas.offsetTop;

	scr.drawImage(imgBody, 0, 0 );
	scr.drawImage(imgHand, offsetSecondX, 0 );
	
	inBody = false;
	if ( view == 1 )
	{
		if ( left == 1 )
		{
			inBody = Project( mouseX, mouseY, arrBodyFront, arrLeftHandFront );
		}
		else
		{
			inBody = Project( mouseX, mouseY, arrBodyFront, arrRightHandFront );
		}
	}
	else
	{
		if ( left == 1 )
		{
			inBody = Project( mouseX, mouseY, arrBodyBack, arrLeftHandBack );
		}
		else
		{
			inBody = Project( mouseX, mouseY, arrBodyBack, arrRightHandBack );
		}
	}
	if ( inBody )
	{
		scr.drawImage(imgCursor, mouseX - (imgCursor.width>>1), mouseY - (imgCursor.height>>1) );
		scr.drawImage(imgCursor, offsetSecondX + projectX - (imgCursor.width>>1), 0 + projectY - (imgCursor.height>>1) );
	}
}

function Turn()
{
	if ( view == 1 )
	{
		imgBody.src = "data/body-back.png";
		if ( left == 1 )
		{
			imgHand.src = "data/lhand-top.png";
		}
		else
		{
			imgHand.src = "data/rhand-top.png";
		}
		view = 2;
	}
	else
	{
		imgBody.src = "data/body-front.png";
		if ( left == 1 )
		{
			imgHand.src = "data/lhand-bottom.png";
		}
		else
		{
			imgHand.src = "data/rhand-bottom.png";
		}
		view = 1;
	}
}

function Hand()
{
	if ( left == 1 )
	{
		if ( view == 1 )
		{
			imgHand.src = "data/rhand-bottom.png";
		}
		else
		{
			imgHand.src = "data/rhand-top.png";
		}
		left = 0;
	}
	else
	{
		if ( view == 1 )
		{
			imgHand.src = "data/lhand-bottom.png";
		}
		else
		{
			imgHand.src = "data/lhand-top.png";
		}
		left = 1;
	}
}

function Init() 
{
	var x, y;
	
	scr = document.getElementById('screen').getContext('2d');
	
	imgBody = new Image();
	imgHand = new Image();
	imgCursor = new Image();

	imgBody.src = "data/body-front.png";
	imgHand.src = "data/lhand-bottom.png";
	imgCursor.src = "data/cursor.png";

	imgBody.onload = function()
	{
		scr.drawImage(imgBody, 0, 0);
	}
	imgHand.onload = function()
	{
		scr.drawImage(imgHand, offsetSecondX, 0);
	}
}
