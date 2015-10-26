#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
uniform float time;
uniform sampler2D explosion;


void main()
{
    /*float offset_s = floor(time*30.0);
    float offset_t = 1 - floor(time*30.0/8.0);
    vec2 texScaled = vec2(vtexCoord.st*vec2((1.0/8.0),(1.0/6.0)));
    vec4 c = texture(explosion, texScaled + vec2(offset_s/8.0, offset_t/6.0));
    fragColor = c*c.a;*/
    
    float x = 1.0/8.0; float y = 1.0/6.0;
    int frame = int(30*time)%48;
    float auxX = frame%8; float auxY = frame/8;
    vec2 coord = vtexCoord * vec2(x,y) - vec2(0,y);
    vec2 offset = vec2(x*auxX, -y*auxY);
    fragColor = frontColor * texture(explosion, (coord + offset));
    fragColor *= fragColor.a;
}
