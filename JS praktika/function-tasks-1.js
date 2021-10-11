const numbers = [1, 4, -6, 3, 5, 10]

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{

  console.log(numbers[0])
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  const firstElement = numbers.shift();

  console.log(firstElement);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  console.log(numbers[numbers.length - 1])
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  const lastElement = numbers.pop();
  console.log(lastElement);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  console.log(numbers.length);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  

}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  let index = [];
  for (let i = 0; i < numbers.length; i++) {
    index.push(i);
  }
  console.log(index.join(' '));
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  for (let i = 0; i < numbers.length; i++) {
    const str = numbers.join(',')
    console.log(str);

  }
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log('[' + i + ']' + '=>' + arr[i]);

    }
  }
  printArr(numbers);

}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  for (let i = numbers.length - 1; i >= 0; i--) {
    const str = numbers.join(',')
    console.log(str);
  }
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  let index = [];
  for (let i = 0; i < numbers.length; i++) {
    index.push(i);
  }
  console.log(index.join(' '));
}

console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  for (let i = 0; i < numbers.length; i++) {
    const str = numbers.join(' ')
    console.log(str);
  }
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {

      console.log('[' + i + ']' + '=>' + arr[i]);

    }
  }
  printArr(numbers);

}
console.groupEnd();
