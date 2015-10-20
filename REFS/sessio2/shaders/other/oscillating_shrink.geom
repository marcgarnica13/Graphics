// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float speed;
uniform float time;
const float PI = 3.141592;

void main( void )
{
    vec4 bari = (gl_PositionIn[0]+gl_PositionIn[1]+gl_PositionIn[2]) / 3;
    float shrinkFactor = abs(sin(PI*fract(time*speed)));
	if (mod(time/speed,2) < 1.0){
		if (mod(gl_PrimitiveIDIn,2) < 1.0) {
			for( int i = 0 ; i < gl_VerticesIn ; i++ ){
				gl_FrontColor  = gl_FrontColorIn[ i ];
				gl_Position    = gl_PositionIn  [ i ];
				gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
				EmitVertex();
			}	
			EndPrimitive();
		}
		else {			
			for( int i = 0 ; i < gl_VerticesIn ; i++ ) {
				gl_FrontColor  = gl_FrontColorIn[ i ];
				gl_Position    = mix(gl_PositionIn[i], bari, shrinkFactor);
				gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
				EmitVertex();
			}	
			EndPrimitive();						
		}
	}
	else { 
		if (mod(gl_PrimitiveIDIn,2) >= 1.0) {
			for( int i = 0 ; i < gl_VerticesIn ; i++ ){
				gl_FrontColor  = gl_FrontColorIn[ i ];
				gl_Position    = gl_PositionIn  [ i ];
				gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
				EmitVertex();
			}	
		}
		else{
			for( int i = 0 ; i < gl_VerticesIn ; i++ ){
				gl_FrontColor  = gl_FrontColorIn[ i ];
				gl_Position    = mix(gl_PositionIn[i], bari, shrinkFactor);
				gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
				EmitVertex();
			}	
			EndPrimitive();				
		}
	}
}
