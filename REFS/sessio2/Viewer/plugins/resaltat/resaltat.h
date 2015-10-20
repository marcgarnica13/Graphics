#ifndef _RESALTAT_H
#define _RESALTAT_H

#include "basicplugin.h"

class Resaltat : public QObject, public BasicPlugin
 {
     Q_OBJECT
     Q_INTERFACES(BasicPlugin)

 public:
    void postFrame();
    
 private:

 };
 
 #endif
