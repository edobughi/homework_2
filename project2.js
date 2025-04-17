// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	rad= rotation * Math.PI /180;
	cos=Math.cos(rad);
	sen=Math.sin(rad);

	return Array( scale*cos, scale*sen, 0, -scale*sen, scale*cos, 0, positionX, positionY, 1 );
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	let result=new Array(9);
	for(let x=0;x<3;x++){
		for(let y=0;y<3;y++){
			let tot=0;
			for(let k=0;k<3;k++){
				tot+= trans2[k*3+x]* trans1[y*3 +k];
			}
			result[y*3+x]=tot;
		}
	}
	return result;
}
