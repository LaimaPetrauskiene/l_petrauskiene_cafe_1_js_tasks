class Car {
    brand;
    model;
    year;
    color;
    fuelTypes;
    priceEur;

    constructor(brand, model, year, color, fuelTypes, priceEur) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.priceEur = priceEur;
    }



    getFuelType = () => {
        return this.fuelTypes.join('/');
    }
}
const usd_eur = 1.16;

let cars;

cars = [
    new Car('Toyota', 'Prius', 2014, 'blue', ['electric', 'petrol'], 10000),
    new Car('BMW', 'i8', 2016, 'black', ['electric'], 35000),
    new Car('Audi', 'Bulka', 1988, 'red', ['dysel'], 1500),
    new Car('Audi', 'A4', 2017, 'silver', ['petrol'], 12000),
    new Car('MB', 'CLK', 2009, 'pink', ['dysel'], 12000),
    new Car('BMW', 'X6', 2019, 'blue', ['petrol'], 75000),
    new Car('Tesla', 'Model S', 2020, 'silver', ['electric'], 100000),
    new Car('Opel', 'Astra', 1995, 'red', ['dysel', 'gas'], 100)
];

console.table(cars);

console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)');
{
    cars.forEach(c => console.log(c.getFuelType()));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
    cars.forEach(c => console.log(`${c.brand} ${c.model} - ${c.getFuelType()}`));
}
console.groupEnd();

let electricCars;

console.group('5. Atrinkite tik elektrinius automobilius');
{
    electricCars = cars.filter(e => e.fuelTypes.includes('electric') && e.fuelTypes.length === 1);
    console.log(electricCars);
}
console.groupEnd();

let petrolCars;
console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
    petrolCars = cars.filter(e => e.fuelTypes.includes('petrol') && e.fuelTypes.length === 1 && e.year > 2016);
    console.log(petrolCars);
}
console.groupEnd();

console.group('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  ');
{
    const audi = cars.filter(e => e.brand === 'audi' || e.brand === 'Audi' && !e.fuelTypes.includes('dysel') && e.year > 2012 && e.year < 2016);
    console.log(audi);
}
console.groupEnd();
console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
    const result = electricCars.reduce((sum, c) => sum + c.priceEur, 0) / electricCars.length;
    console.log(result);
}
console.groupEnd();
console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
    const result = petrolCars.reduce((sum, c) => sum + c.priceEur, 0);
    console.log(result);
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');
{
   const result = cars.map(({ brand, model, priceEur, getFuelType }) => ({
       brand,
       model,
       price: Math.round(priceEur * usd_eur),
       fuelTypes: getFuelType()

   }));
   console.table(result);
}
console.groupEnd();
