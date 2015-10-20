// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

varying in vec3 vNormal[3];
uniform float time;
const float speed =1.2;

void main( void )
{
	vec3 N = (vNormal[0] + vNormal[1] + vNormal[2])/3;
	vec4 D = vec4(speed*time*N, 0);
	for( int i = 0 ; i < gl_VerticesIn ; i++ )
	{
		gl_FrontColor  = gl_FrontColorIn[ i ];
		gl_Position    = gl_ModelViewProjectionMatrix * (gl_PositionIn[i] + D);
		gl_TexCoord[0] = gl_TexCoordIn  [ i ][ 0 ];
		EmitVertex();
	}
}
