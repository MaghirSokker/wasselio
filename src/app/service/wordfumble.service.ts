import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordfumbleService {

  constructor() { }


  fumble(word: String) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let original = `${word}`
    let interval: any = undefined;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {

      word = word
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return original[index];
          }
          return letters[Math.floor(Math.random() * 26)]
        }

        )
        .join("");
      if (iteration >= word.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30)


  }


}
