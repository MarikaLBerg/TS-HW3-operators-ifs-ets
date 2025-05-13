 // Создаем мас-в initData с числами от 1 до 100
const initData: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

// Мас-в для хранения четных чисел после увеличения на два
const results: number[] = [];

// Обход массива initData и увеличение каждого числа на два
for (let num of initData) {
    const newNum = num + 2;
    if (newNum % 2 === 0) {
        results.push(newNum);
    }
}

// Мас-в для хранения квадратных корней чисел из results
const squareRootResults: number[] = [];

for (let num of results) {
    const sqrt = Math.sqrt(num);
    squareRootResults.push(sqrt);
}

// Проверка наличия чисел больше 7 в squareRootResults
const hasNumberGreaterThan7 = squareRootResults.some(sqrt => sqrt > 7);

if (hasNumberGreaterThan7) {
    const numbersGreaterThan7 = squareRootResults.filter(sqrt => sqrt > 7);
    console.log("Числа больше 7:", numbersGreaterThan7);
}

// Вывод всех мас-вов для проверки
console.log("initData:", initData);
console.log("results:", results);
console.log("squareRootResults:", squareRootResults);