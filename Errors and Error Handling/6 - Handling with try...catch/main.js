function capAllElements(arr){
	try{
    arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });} catch(e) {
    console.log(e);
  }
}

capAllElements('Incorrect argument');