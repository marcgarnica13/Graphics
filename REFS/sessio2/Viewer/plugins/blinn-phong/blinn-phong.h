#ifndef _BLINNPHONG_H
#define _BLINNPHONG_H

#include "basicplugin.h"
#include <QGLShader>
#include <QGLShaderProgram>
#include <QElapsedTimer>


class BlinnPhong : public QObject, public BasicPlugin
 {
     Q_OBJECT
     Q_INTERFACES(BasicPlugin)

 public:
    void onPluginLoad();
    void preFrame();
    void postFrame();
    
 private:
    QGLShaderProgram* program;
    QGLShader* vs; 
    QGLShader* fs;
    QElapsedTimer timer;
 };
 
 #endif
