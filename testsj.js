names=['doc', 'doc', 'image','image', 'doc(1)', 'doc']

	let sum=1
	for(let i=0;i<names.length;i++){
		for(let j=i+1;j<names.length;j++){
			if(names[i]===names[j]){
				names[j]=names[j]+`(${sum})`
				
				sum++;
				console.log(sum)
			}
			
	}
	sum=1
}



console.log(names);

	