/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here

// speed = 80
// slopeA = from: 0, to:14
// slopeB = from 15, to: 29
// slopeC = from 30, to: 44
// slopeD = from 45, to: 50
//
// INPUT encounteredSlope
//
// IF encounteredSlope >= 0 AND encounteredSlope <= 14 THEN speed = speed
//   ELSEIF encounteredSlope >= 15 AND encounteredSlope <= 29 THEN speed = speed - 10
//   ELSEIF encounteredSlope >= 30 AND encounteredSlope <= 44 THEN speed = speed - 15
//   ELSEIF encounteredSlope >= 45 AND encounteredSlope <= 50 THEN speed = speed - 25
//
// OUTPUT speed
