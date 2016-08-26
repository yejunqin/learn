let benchmark = require('benchmark')
let int1 = str => +str
let int2 = str => parseInt(str, 10) 
let int3 = str => Number(str)
let number = '100'
let suite = new benchmark.Suite()
suite.add('+', () => {
	int1(number)
}).add('parseInt', () => {
	int2(number)
}).add('Number', () => {
	int3(number)
}).on('cycle', event => {
	console.log(String(event.target))
}).on('complete', function(){
	console.log('fastest is' + this.filter('fastest').map('name'))
}).run({'async': true})