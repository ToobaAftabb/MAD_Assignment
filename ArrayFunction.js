// Map function
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

// keys
function ListItem(props) {
    
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

//   filter
let ls   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = ls.filter( item => item % 2 === 0 ) 

// foreach
let lss = ['a', 'b']
ls.forEach(item => console.log(item))

// every 
let ls1 = [1, 4, 5, 7, 9]
let ls2 = [1, 4, 5, 20, 9]


ls1.every(item => item < 10 ) 
ls2.every(item => item < 10 )

// sort
let numberComparator = (a, b) => a - b
let arr = [20, 10, 4, 1, 100]
arr.sort(numberComparator)
console.log(arr)

// reduce
let array1 = [1, 2, 3, 4]
let reducer1 = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer))

let arrr = [{id: 1, price: 10}, {id:2, price: 20}, {id:3, price: 30}]

let reducer = (accumulator, currentValue) => ({ totalPrice: accumulator.totalPrice + currentValue.price})

arr.reduce(reducer, {totalPrice: 0})

// splice
let fruits = ['Apple', 'Orange', 'Mango']
fruits.splice(1, 0, 'Strawberry') 
fruits.splice(3, 1) 
fruits.splice(2, 1, 'Melon')
fruits.splice(0, 0, 'Watermelon', 'Date')

// concat
let a = [1, 2, 3]
let b = 4
let c = a.concat(b)

// push and pop
let fruit = ['Apple', 'Orange', 'Mango']
fruits.push('Melon')
let length = fruits.push('Date', 'Strawberry') 
fruits.pop()


  