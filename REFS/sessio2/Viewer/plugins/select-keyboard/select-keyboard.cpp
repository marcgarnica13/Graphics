#include "select-keyboard.h"
#include "glwidget.h"

void SelectKeyboard::postFrame() 
{ 
  int ind = scene()->selectedObject();
  if (ind >= 0) {
    scene()->objects()[ind].boundingBox().render();
  }
}

void SelectKeyboard::select(int i) {
  if (i < scene()->objects().size()) {
    scene()->setSelectedObject(i);
    glwidget()->updateGL();
  }
  else scene()->setSelectedObject(-1);
}
void SelectKeyboard::keyPressEvent(QKeyEvent* k)
{
  int code = k->key();
  if (code == Qt::Key_0) select(0);
  if (code == Qt::Key_1) select(1);
  if (code == Qt::Key_2) select(2);
  if (code == Qt::Key_3) select(3);
  if (code == Qt::Key_4) select(4);
  if (code == Qt::Key_5) select(5);
  if (code == Qt::Key_6) select(6);
  if (code == Qt::Key_7) select(7);
  if (code == Qt::Key_8) select(8);
  if (code == Qt::Key_9) select(9);
}
Q_EXPORT_PLUGIN2(select-keyboard, SelectKeyboard)   // plugin name, plugin class
