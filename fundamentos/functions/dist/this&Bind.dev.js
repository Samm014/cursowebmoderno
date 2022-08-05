"use strict";

var person = {
  msg: 'Bem vindo!',
  speak: function speak() {
    console.log(this.msg);
  }
};
person.speak();
var speak = person.speak;
speak(); //conflito, pois o this da função muda e não possue msg