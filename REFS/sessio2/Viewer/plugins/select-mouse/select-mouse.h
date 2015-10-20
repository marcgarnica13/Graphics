#ifndef _SELECTMOUSE_H
#define _SELECTMOUSE_H

#include "basicplugin.h"

class SelectMouse : public QObject, public BasicPlugin
 {
     Q_OBJECT
     Q_INTERFACES(BasicPlugin)

 public:
    void postFrame();
    void mouseReleaseEvent(QMouseEvent* m);
    void onPluginLoad();
    void keyPressEvent(QKeyEvent* k);
    void keyReleaseEvent(QKeyEvent* k);
    
 private:
    bool drawObject(int indexObj);
    bool paintDiffColors();
    bool cntrlClicked;
 };
 
 #endif
