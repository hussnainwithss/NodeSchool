function countWords(inputWords) {
      // SOLUTION GOES HERE
	return inputWords.reduce(
		(acc,val)=> {acc[val] = ++acc[val] || 1;
		return acc
}	
,{})
    }

module.exports = countWords
