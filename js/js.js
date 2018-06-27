let a = 2;//....
let b = 3;

a = a > b ? a : b;

let arr = [12,56,2,36,4,99];

for (let i=0;i<arr.length-1;i++) {
	for (let j=0;j<arr.length-i;j++) {
		if(arr[j] > arr[arr.length-i]){
			[arr[j],arr[arr.length-i]] = [arr[arr.length-i],arr[j]];
		}
	}
}


console.log(arr,a);


let grade = 88;
switch (true){
	case (grade<60):
		console.log('不及格')
		break;
	case (grade>=60 && grade <70):
		console.log('60分以上')
		break;
	case (grade>=70 && grade <80):
		console.log('70分以上')
		break;
	case (grade>=80 && grade <90):
		console.log('80分以上')
		break;
	default:
		console.log('90分以上')
		break;
}

let num = Infinity;
console.log(undefined == undefined);
console.log(null == null)
console.log(num == Infinity)