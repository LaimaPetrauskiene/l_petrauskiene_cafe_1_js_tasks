console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ]
      
      function sortDrinkByPrice(drinks) {
       return drinks.sort((a,b) => a.price - b.price)
      }
      
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        return {...obj, [name]: value}
        }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        if(x === 1 && y === 'f'){
            return 'daughter'
        }else if (x === 2 && y === 'f'){
            return 'granddaughter'
        } else if (x === 3 && y === 'f'){
            return 'great granddaughter'
        }else if (x === -1 && y === 'f'){
            return 'mother'
        }else if (x === -2 && y === 'f'){
            return 'grandmother'
        }else if (x === -3 && y === 'f'){
            return 'great grandmother'
        }else if (x === 1 && y === 'm'){
            return 'son'
        }else if (x === 2 && y === 'm'){
            return 'grandson'
        } else if (x === 3 && y === 'm'){
            return 'great grandson'
        }else if (x === -1 && y === 'm'){
            return 'father'
        }else if (x === -2 && y === 'm'){
            return 'grandfather'
        }else if (x === -3 && y === 'm'){
            return 'great grandfather'
        }
        return 'me!'
    }
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        return tileHand.reduce((t,s) => t + s.score, 0);}
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();
