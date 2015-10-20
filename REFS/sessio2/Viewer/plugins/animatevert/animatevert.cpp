#include "animatevert.h"
#include <QElapsedTimer>

void AnimateVert::onPluginLoad()
{
    QString vs_src = "uniform float time;uniform float A;uniform float F;float pi = 3.14156;void main(){float t = A * sin(2.0*pi*F*time);vec4 n = vec4(gl_Normal * t , 0.0);gl_Position = gl_ModelViewProjectionMatrix * (gl_Vertex + n);gl_FrontColor = vec4((gl_NormalMatrix * gl_Normal).z);gl_TexCoord[0] =  gl_MultiTexCoord0;} ";
    
    vs = new QGLShader(QGLShader::Vertex, this);
    vs->compileSourceCode(vs_src);
    program = new QGLShaderProgram(this);
    program->addShader(vs);
    program->link();
    
    elapsedTimer = new QElapsedTimer();
}

void AnimateVert::preFrame() 
{
    program->bind();
    program->setUniformValue("time", float(elapsedTimer->nsecsElapsed()/1e9));
    program->setUniformValue("A", 0.1f);
    program->setUniformValue("F", 1.0f);
}

void AnimateVert::postFrame() 
{
    program->release();
}

Q_EXPORT_PLUGIN2(animatevert, AnimateVert)   // plugin name, plugin class
