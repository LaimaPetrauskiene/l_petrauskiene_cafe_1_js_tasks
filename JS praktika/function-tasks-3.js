console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
  //Funkcijos deklaravimas
  function printCapital(str) {
    const legend = 'abcdefghijklmnopqrstuvwxyz';
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const el = str[i];
      const index = legend.indexOf(el);
      if (index !== -1) {
        res += UPPER[index];
      } else {
        res += el;
      };
    };
    console.log(res);

  };


  console.log('---');
  console.log('abcd');
  printCapital('abcd');
  console.log("AAAA");
  printCapital("AAAA");
  console.log("aBcD");
  printCapital("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printLower(str) {
    const legend = 'abcdefghijklmnopqrstuvwxyz';
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const el = str[i];
      const index = UPPER.indexOf(el);
      if (index !== -1) {
        res += legend[index];
      } else {
        res += el;
      };
    };
    console.log(res);


  }
  console.log('---');
  console.log("ABCD");
  printLower("abcd");
  console.log("AAAA");
  printLower("AAAA");
  console.log("aBcD");
  printLower("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
  // Funkcijos deklaravimas
  function printFirstLetter(str) {
    console.log(str.slice(1))


  }
  console.log('---');
  console.log("ABCD");
  printFirstLetter("abcd");
  console.log("AAAA");
  printFirstLetter("AAAA");
  console.log("aBcD");
  printFirstLetter("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
  // Funkcijos deklaravimas
  function printLastLetter(str) {
    console.log(str.slice(0, str.length - 1))
  }
  console.log('---');
  printLastLetter('Labas');
  printLastLetter('Ate');
  printLastLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
  // Funkcijos deklaravimas
  function printMiddleLetter(str) {
    {
      let middle = Math.floor(str.length / 2);
      if (str.length % 2 == 0)
        console.log(str[middle - 1] + str[middle]);
      else
        console.log(str[middle]);
    }
  }
  console.log('---');
  printMiddleLetter('Labas');
  printMiddleLetter('Ate');
  printMiddleLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
  function getLetterCount(str) {
    return str.length;
  }
  console.log('---');
  console.log({
    'labas': getLetterCount('labas'),
    'kranas': getLetterCount('kranas'),
    'kebabas': getLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
  function getDoubleLetterCount(str) {
    return str.length * 2;
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
  function getArgsLetterSum(a, b) {
    return a.length + b.length;
  }
  console.log('---');
  console.log({
    'labas, abc': getArgsLetterSum('labas', 'abc'),
    'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
    'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
  function containsLetterA(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        return true;
      }
      else {
        return false
      }
    }
  }
  console.log('---');
  console.log({
    'labas': containsLetterA('labas'),
    'kempė': containsLetterA('kempė'),
    'Finakolė': containsLetterA('Finakolė'),
  })
  console.log('---');

}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
  function containsLetter(str, letter) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        return true;
      }
      else {
        return false
      }
    }
  }
  console.log('---');
  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  })
  console.log('---');
}

console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    if (str.length % 2 === 0) {
      return true;
    }
    else {
      return false
    }
  }
}
console.log('---');
console.log({
  'labas': isEvenNumberOfLetters('labas'),
  'kempės': isEvenNumberOfLetters('kempės'),
  '123123': isEvenNumberOfLetters('123123'),
})
console.log('---');

console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {


    return Array.from(str).filter(letter => 'aąeęėiįyouųū'.includes(letter)).length

  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    return Array.from(str).filter(letter => 'bgzždhlvjrmnptksšcčf'.includes(letter)).length
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
  function isOnlyLetters(str) {
    return Array.from(str).filter(digits => '0123456789'.includes(digits)).length === 0;
  }
  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    let letter_Count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'a') {
        letter_Count += 1;
      }
    }
    return letter_Count;
  }


  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {

    let letter_Count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === searchLetter) {
        letter_Count += 1;
      }
    }
    return letter_Count;


  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function lastIndexOfLetterA(str) {

    return str.indexOf('a')
  }


  console.log('---');
  console.log({
    'labas': lastIndexOfLetterA('labas'),
    'kempės': lastIndexOfLetterA('kempės'),
    '123123': lastIndexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function lastIndexOfLetter(str, searchLetter) {
    return str.indexOf(searchLetter)
  }
  console.log('---');
  console.log({
    'labas, a': lastIndexOfLetter('labas', 'a'),
    'kempės, k': lastIndexOfLetter('kempės', 'k'),
    '123123, z': lastIndexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {

    let aArray = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') aArray.push(i);
    }
    return aArray;

  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    let aArray = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === searchLetter) aArray.push(i);
    }
    return aArray;

  }

  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    const regResult = str.match('[aA]');
    return regResult ? str.slice(0, regResult.index) + str.slice(regResult.index + 1) : str;
  }

  console.log('---');
  console.log({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    for (let index = str.length - 1; index >= 0; index--) {
      if (str[index] === 'a')
        return str.slice(0, index) + str.slice(index + 1);
    }
    return -1;
  }


}

console.log('---');
console.log({
  'labas': removeLastLetterA('labas'),
  'kempiniukas': removeLastLetterA('kempiniukas'),
  '123123': removeLastLetterA('123123'),
})
console.log('---');

console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    let zodisBeA = '';
    for (let index = 0; index < str.length; index++) {
      if (str[index] === 'a') {
        continue;
      };
      zodisBeA += str[index];
    }
    return zodisBeA;
  }

}
console.log('---');
console.log({
  'labas': removeAllOccurencesOfLetterA('labas'),
  'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
  '123123': removeAllOccurencesOfLetterA('123123'),
})
console.log('---');

console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    let zodisBeRaides = '';
    for (let index = 0; index < str.length; index++) {
      if (str[index] === letter) {
        continue;
      };
      zodisBeRaides += str[index];
    }
    return zodisBeRaides;
  }

  console.log('---');
  console.log({
    'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
    'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
    '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  
}
//console.log('---');
//const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
//console.log(str);
//console.log('---');

console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'viens du trys': replaceSpaceWithDash('viens du trys'),
  //   'as tave myliu': replaceSpaceWithDash('as tave myliu'),
  //   'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  
  
  

  // console.log('---');
  // console.log({
  //   'viens du trys': capitalize('viens du trys'),
  //   'as tave myliu': capitalize('as tave myliu'),
  //   'Bairis seniuk': capitalize('Bairis seniuk'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    // code ...
  }
  // console.log('---');
  // strReverse('viens du trys');
  // strReverse('as tave myliu');
  // strReverse('Bairis seniuk');
  // console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'mama': isPalyndrome('mama'),
  //   'mamam': isPalyndrome('mamam'),
  //   '123321': isPalyndrome('123321'),
  //   '123456': isPalyndrome('123456'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstWord(str) {
    // code ...
  }

  function splitIntoSentences(paragraph) {
    // code ...
  }

  function reduceEmptySpaces(str) {
    // code ...
  }

  function fixParagraph(paragraph) {
    // code ...
  }
  // const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  // const fixedParagraph = fixParagraph(paragraph);
  // console.log(paragraph);
  // console.log(fixedParagraph);
  // console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'Labas aš Jonas': splitSentence('Labas aš Jonas'),
  //   'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
  //   "'home/about/13', '/'": explode('home/about/13', '/'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();
