console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(...params) {
      [this.name, this.age, this.height, this.weight] = params;
    }
    getAge() { return `${this.name} is age ${this.age}`; }
    getHeight() { return `${this.name} is ${this.height}cm`; }
    getWeight() { return `${this.name} weighs ${this.weight}kg`; }
  }


}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {

    add(par1, par2) {
      return par1 + par2;
    }
    subtract(par1, par2) {
      return par1 - par2;
    }
    mutiply(par1, par2) {
      return par1 * par2;
    }
    divide(par1, par2) {
      return par1 / par2;
    }
  }
  const calc = new Calculator();

  console.log(calc.add(10, 5));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
    }

    get fullname() { return `${this.firstname} ${this.lastname}`; }

    get email() { return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`; }
  }



  const p1 = new Employee('Mary', 'Sue');

  console.log(p1.email);
  console.log(p1.fullname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      // Write code here!

    }
  }

  p1.compareAge(p2) ➞ "Joel is older than me."

  p2.compareAge(p1) ➞ "Samuel is younger than me."

  p1.compareAge(p3) ➞ "Lily is the same age as me."


}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getArea() { return Math.PI * this.radius ** 2 }
    getPerimeter() { return this.radius * 2 * Math.PI }
  }
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname){
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = this.fname + ' ' + this.lname;
      this.initials = fname.slice(0,1).toUpperCase() + '.' + lname.slice(0,1).toUpperCase();
    }
    
  }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author){
      this.title = title;
      this.author = author;
  }	
     getTitle() {return `Title: ${this.title}`;}
    
     getAuthor() {return `Author: ${this.author}`;}
  }
  
  let PP = new Book('Pride and Prejudice', 'Jane Austen');
  let H = new Book('Hamlet', 'William Shakespeare');
  let WP = new Book('War and Peace', 'Leo Tolstoy');
}
console.groupEnd();

