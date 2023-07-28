
// =====1=====
console.log("Завдання 1, Вивести на екран всі числа від 1 до 10 ")

let numbT1 = 1

while (numbT1 <=10 ) {
    console.log(numbT1)
    numbT1 += 1
}

// =====2=====
console.log("Завдання 2, Вивести на екран всі парні числа від 2 до 20")

for (let i = 1; i < 21; i += 1) {
    if (i % 2 === 1) {
        continue
        
    }
console.log(i)
}

// =====3=====
console.log("Завдання 3, Вивести на екран таблицю множення числа 7")

for (let n = 0; n <= 10; n += 1) {
    const mnog = n*7
    console.log(mnog)
}

// =====4=====
console.log("Завдання 4, Вивести на екран кожен елемент масиву")

const numbers = [1, 2, 3, 4, 5]

let k = 0

while (k < numbers.length) {
    console.log(numbers[k])
    k+= 1
}

// =====5=====
console.log("Завдання 5, пройтися по масиву та вивести на екран всі числа, крім числа 7")

const numberT5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let m = 0; m < numberT5.length; m += 1) {
    console.log(m);
  
    if (m === 6) {
      break;
    }
  }

// =====6=====
console.log("Завдання 6, Створити скрипт, який виводить на екран всі числа, які менші за n")

for (let p = 0; p < 20; p+=1) {
    console.log(p);
  
    if (p === 16) {
      break;
    }
}

// =====7=====
console.log("Завдання 7, За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3")

for (let d = 1; d < 20; d += 1) {
    if (d % 3 === 0) {
        continue
        
    }
console.log(d)
}



