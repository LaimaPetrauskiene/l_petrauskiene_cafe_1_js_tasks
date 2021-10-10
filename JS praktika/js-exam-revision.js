const people = [
    {
        name: 'Povilas',
        surname: 'Povilauskas',
        age: 56,
        height: 187,
        weight: 87,
        sex: 'male'
    },
    {
        name: 'Vejas',
        surname: 'Bijunas',
        age: 48,
        height: 174,
        weight: 97,
        sex: 'male'
    },
    {
        name: 'Monika',
        surname: 'Povilauskaite',
        age: 35,
        height: 165,
        weight: 87,
        sex: 'female'
    },
    {
        name: 'Leokadija',
        surname: 'Bijuniene',
        age: 47,
        height: 178,
        weight: 63,
        sex: 'female'
    },
    {

        name: 'Saule',
        surname: 'Miliauskaite',
        age: 16,
        height: 144,
        weight: 89,
        sex: 'female'
    },
    {

        name: 'Marius',
        surname: 'Dangus',
        age: 88,
        height: 179,
        weight: 54,
        sex: 'male'
    },
    {

        name: 'Valerijus',
        surname: 'Rozkovas',
        age: 35,
        height: 195,
        weight: 80,
        sex: 'male'
    },
    {

        name: 'Marija',
        surname: 'Mage',
        age: 25,
        height: 173,
        weight: 59,
        sex: 'female'
    }

]
console.table(people);
console.groupCollapsed('------------------------------------ 1 Dalis ------------------------------------');
{

    const calcBmi = (weight, height) => Math.round(10 * weight / (height / 100) ** 2) / 10;


    console.group('2. Panaudojant array.foreach:')
    {
        console.log('- Atspausdinti kiekvieną elementą')
        {
            people.forEach(e => console.log(e));
        }
        console.log('- Atspausdinti kiekvieno elemento pilną vardą')
        {
            people.forEach(e => console.log(e.name, e.surname));
        }
        console.log('- Atspausdinti kiekvieno elemento kūno masės indeksą')
        {
            people.forEach(({ weight, height }) => console.log(calcBmi(weight, height)));
        }
    }
    console.groupEnd();
    console.log();
    console.group('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:');
    {
        console.log('- kurių vardas ilgesnis nei 6 simboliai');
        {
            const peopleWithShortNames = people.filter(p => p.name.length > 6);
            console.log(peopleWithShortNames);
        }
        console.log('- kurių svoris didesnis nei 80kg')
        {
            const peopleWithWeight = people.filter(p => p.weight > 80);
            console.log(peopleWithWeight);
        }
        console.log('- kurie aukštesni nei 185cm')
        {
            const highPeople = people.filter(p => p.height > 185);
            console.log(highPeople);
        }
    }
    console.groupEnd();
    console.log();
    console.group('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti:');
    {
        console.log('- ūgius');
        {
            console.log(people.map(p => p.height));

        }
        console.log('- svorius');
        {
            console.log(people.map(p => p.weight));

        }
        console.log('- ūgius, svorius ir amžius : [{height, weight, age}, ...]');
        {
            console.log(people.map(({ height, weight, age }) => ({ height, weight, age })));

        }
        console.log('- KMI indeksus');
        {
            console.log(people.map(({ weight, height }) => calcBmi(weight, height)));
        }
        console.log('- KMI indeksus ir amžius');
        {
            console.log(people.map(({ weight, height, age }) => ({
                age,
                bmi: calcBmi(weight, height)
            })))
        }
    }
    console.groupEnd();
    console.log();

    console.group('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti');
    {
        console.log(' - svorių vidurkį');
        {
            console.log(people.reduce((sum, p) => sum + p.weight, 0) / people.length);
        }
        console.log('- ūgio vidurkį');
        {
            console.log(people.reduce((sum, p) => sum + p.height, 0) / people.length);
        }
    }
    console.groupEnd();
    console.log();

}
console.groupEnd();

console.groupCollapsed('------------------------------------ 2 Dalis ------------------------------------');
{
    console.group('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:');
    {
        class Person {
            name;
            surname;
            age;
            height;
            weight;
            sex;


            constructor({ name, surname, age, height, weight, sex }) {
                this.name = name;
                this.surname = surname;
                this.age = age;
                this.height = height;
                this.weight = weight;
                this.sex = sex;
            }

            getBMI = () => {
                return Math.round(10 * this.weight / (this.height / 100) ** 2) / 10;
            }

            toString = () => {
                const { name, surname, ...rest } = this;
                const propString = Object.entries(rest)
                    .filter(([_, propVal]) => typeof propVal !== 'function')
                    .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, '');
                return `${name} ${surname}:` + propString;
            }
        }


        const peopleArr = people.map(p => new Person(p));

        console.groupEnd();



        console.group('1. Atrinkti moteris, kurios jaunesnės nei 20 metų ir svoris didesnis nei 70kg ')
        {
            const youngWomen = peopleArr.filter(p => p.sex === 'female' && p.weight > 70 && p.age < 20);
            console.log(youngWomen);
        }
        console.groupEnd();
        console.log();

        console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
        {
            const oldMen = peopleArr.filter(p => p.sex === 'male' && p.age > 25 && p.getBMI() < 18.5);
            console.log(oldMen);
        }
        console.groupEnd();
        console.log();

        console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
        {
            const youngObese = peopleArr.filter(p => p.age < 18 && p.getBMI() > 30);
            console.log(youngObese);
        }
        console.groupEnd();
        console.log();
        console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
        {
            const oldObese = peopleArr.filter(p => p.age > 18 && p.getBMI() > 30);
            console.log(oldObese);
        }
        console.groupEnd();
        console.log();

        console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
        {
            const regularBMI = peopleArr.filter(p => p.getBMI() > 18.5 && p.getBMI() > 25);
            console.log(regularBMI);
        }
        console.groupEnd();
        console.log();

    }
}
console.groupEnd();