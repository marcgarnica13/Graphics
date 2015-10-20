#ifndef _SHOWFPS_H
#define _SHOWFPS_H

#include "basicplugin.h"

class ShowFPS : public QObject, public BasicPlugin
{
   Q_OBJECT
   Q_INTERFACES(BasicPlugin)

public slots:
  void oneSecond();

public:
  void onPluginLoad();    
  void postFrame();
    
private:
  int numFrames;
  int actFrames;
  QTimer *timer;

};
 
 #endif
