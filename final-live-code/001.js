/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..

/*
  input = ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
  numberOfVillainsGot = 0
  numberOfLives = 3
  i = 0

  WHILE numberOfLives !== 0
    inspector = input[i]
    IF inspector === "@" THEN numberOfLives = numberOfLives - 1
    ENDIF
    ELSE IF inspector === "Villain" THEN numberOfVillainsGot = numberOfVillainsGot + 1
    ENDIF
    i++
  ENDWHILE

  IF numberOfLives === 0 THEN
    DISPLAY "Ooops, you die. You got " + numberOfVillainsGot + " villains"
  ENDIF
  ELSE IF numberOfLives !== 0 THEN
    DISPLAY "Nice work, detective! You got all villains: " + numberOfVillainsGot
  ENDIF

*/