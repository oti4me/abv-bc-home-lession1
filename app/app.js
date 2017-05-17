"use strict"

function findMinMax(n){

	let min;
	let max;
	min = n[1];
	max = n[1];

	for(let i = 0; i < n.length; i++){
		if(n[i] < min){
			min = n[i];
		}
		
	}
	for(let i = 0; i < n.length; i++){
	if(n[i] > max ){
			max = n[i];
		}
	}

	if(min === max){
		return [min];
	}

	return [min, max];
}

console.log(findMinMax([4, 4, 4, 4]));