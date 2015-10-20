#include "show-fps.h"
#include "glwidget.h"

void ShowFPS::onPluginLoad()
{
  timer = new QTimer(this);
	connect(timer, SIGNAL(timeout()), this, SLOT(oneSecond()));
	timer->start(1000);

  numFrames = actFrames = 0;
}

void ShowFPS::oneSecond()
{
  numFrames = actFrames;
  actFrames = 0;
}


void ShowFPS::postFrame() 
{ 
  ++actFrames;
	glColor3f(0.0, 0.0, 0.0);
	int x = 5;
	int y = 15;
	glwidget()->renderText(x,y, QString(("FPS: " + QString::number(numFrames))));
}

Q_EXPORT_PLUGIN2(show-fps, ShowFPS)   // plugin name, plugin class
