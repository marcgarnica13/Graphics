// simple vertex shader
uniform float time;
varying vec4 R;

void main()
{
	float phi = 0.1*time;
    mat4 rot = mat4(
    	cos(phi), 0, -sin(phi), 0,
        0 , 1 , 0, 0,
        sin(phi), 0, cos(phi), 0,
        0,0,0,1
    );
	R = gl_ModelViewMatrix * rot * gl_Vertex;
    gl_Position    = gl_ProjectionMatrix * R;
    gl_FrontColor  = gl_Color;
   	gl_TexCoord[0] = gl_MultiTexCoord0;

}
