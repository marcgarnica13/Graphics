#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in float fragDepth;


void main()
{
    gl_FragDepth = 1.0 - gl_FragCoord.z;
    fragColor = frontColor;
}
