#ifndef _MODELINFO_H
#define _MODELINFO_H

#include "basicplugin.h"

 class ModelInfo : public QObject, public BasicPlugin
 {
     Q_OBJECT
     Q_INTERFACES(BasicPlugin)  

 public:
  void onPluginLoad();    
  void onObjectAdd();
    
private:
  void countObject(unsigned objId);
  void printModelInfo();
  unsigned int scn_objects;
  unsigned int scn_polygons;
  unsigned int scn_vert;
  unsigned int scn_triangles;
  double triangles_pct;
 };
 
 #endif
 