// simple vertex shader

uniform float time;
uniform float speed;

void main()
{
        float phi = -time / speed;
        mat4 rot = mat4(
                cos(phi), 0, -sin(phi), 0,
                0 , 1 , 0, 0,
                sin(phi), 0, cos(phi), 0,
                0,0,0,1
        );
        gl_Position    = gl_ModelViewProjectionMatrix * rot * gl_Vertex;
        gl_FrontColor  = gl_Color;
        gl_TexCoord[0] = gl_MultiTexCoord0;
}