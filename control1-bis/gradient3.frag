#version 330 core

in vec4 frontColor;
in vec3 normal_eye;
out vec4 fragColor;

void main()
{
    vec3 N = normalize(normal_eye);
    float val_color = 4.0 * N.z;
    float mixed_value = fract(val_color);
    vec4 final_color;
    if (val_color <= 0.0) final_color = vec4(0,0,1,0);
    else if (val_color < 1.0) final_color = mix(vec4(0,0,1,0), vec4(0,1,1,0), mixed_value);
    else if (val_color < 2.0) final_color = mix(vec4(0,1,1,0), vec4(0,1,0,0), mixed_value);
    else if (val_color < 3.0) final_color = mix(vec4(0,1,0,0), vec4(1,1,0,0), mixed_value);
    else if (val_color < 4.0) final_color = mix(vec4(1,1,0,0), vec4(1,0,0,0), mixed_value);
    else final_color = vec4(1,0,0,0);
    
    fragColor = final_color;
}