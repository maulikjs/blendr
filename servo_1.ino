#include <Servo.h>
Servo switchServo;
Servo containersServo[3];
bool fruitOrdered[3];
int pos = 0;
int switchAngle = 75;
int containersAngle = 100;
bool start = true;
float  totalTime = 10;
void setup() {
  // put your setup code here, to run once:
  switchServo.attach(9);
  containersServo[0].attach(10);
  containersServo[1].attach(11);
  containersServo[2].attach(12);

  switchServo.write(0);
  containersServo[0].write(0);
  containersServo[1].write(0);
  containersServo[2].write(0);

  fruitOrdered[0] = true;
  fruitOrdered[1] = true;
  fruitOrdered[2] = true;

  
  }
void loop() {
  if(start){
    int fruitsCount = 0;
    for (int i = 0; i < sizeof(fruitOrdered); i+= 1){
        if (fruitOrdered[i]){
            fruitsCount += 1;
      }
    }
    for (int i = 0; i < sizeof(fruitOrdered); i += 1){openContainers(i,3);}
    delay(3000);
    turnToggle(true);
    delay(5000);
    turnToggle(false);
    start = false;
  }
}
void turnToggle(bool on){
  pos = on? 0: switchAngle;
  int stepSize = on? 1: -1;
    for (;pos <= switchAngle; pos += stepSize) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
      switchServo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(5);                       // waits 15ms for the servo to reach the position
  }
 }
 void openContainers(int id, float duration){
    for (pos = 0;pos <= containersAngle; pos +=1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
      containersServo[id].write(pos);
      delay(15);                       // waits 15ms for the servo to reach the position
  }
  Serial.print(pos);
  delay(int(duration * 1000));
    for (pos = containersAngle;pos > 0; pos -=1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
      containersServo[id].write(pos); 
// tell servo to go to position in variable 'pos'
      delay(15);                       // waits 15ms for the servo to reach the position
    }
  Serial.print(pos);
  pos = 0;
   delay(int(duration*1000));
  }
