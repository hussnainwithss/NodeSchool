 function repeat(operation, num, i=0) {
      // SOLUTION GOES HERE
	if(i>=num){
		return;
}
	operation();
	i++;
	repeat(operation,num,i);
    }

    // Do not remove the line below
module.exports = repeat
