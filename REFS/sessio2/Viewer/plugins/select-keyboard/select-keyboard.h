#ifndef _SELECTKEYBOARD_H
#define _SELECTKEYBOARD_H

#include "basicplugin.h"

class SelectKeyboard : public QObject, public BasicPlugin
 {
     Q_OBJECT
     Q_INTERFACES(BasicPlugin)

 public:
    void postFrame();
    void keyPressEvent(QKeyEvent* k);
    void select(int i);
    
 private:

 };
 
 #endif
