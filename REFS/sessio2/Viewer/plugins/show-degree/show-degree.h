#ifndef _SHOWDEGREE_H
#define _SHOWDEGREE_H

#include "basicplugin.h"

class ShowDegree : public QObject, public BasicPlugin
{
   Q_OBJECT
   Q_INTERFACES(BasicPlugin)

public:
  void onPluginLoad();    
  void postFrame();
    
private:
  float num;
};
 
 #endif
