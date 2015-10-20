// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float time;

void main( void )
{
	int n = int(floor(100*time));
	if (gl_PrimitiveIDIn <= n) {
		for( int i = 0 ; i < gl_VerticesIn ; i++ )
		{
			gl_FrontColor  = gl_FrontColorIn[ i ];
			gl_Position    = gl_ModelViewProjectionMatrix 
							 * gl_PositionIn  [ i ];
			gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
			EmitVertex();
		}
		EndPrimitive();
	}
}
