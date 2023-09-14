let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//.pop to remove last array

secretMessage.pop();
console.log(secretMessage);
console.log(secretMessage.length)

// .push to add new items to array

secretMessage.push('to', 'Program');
console.log(secretMessage);

//[] to replace item in array 

secretMessage[7] = 'right' 
console.log(secretMessage);

// .shift to remove first item in array

secretMessage.unshift('Programming');
console.log(secretMessage);

// .splice to remove specific array then add replacing array

secretMessage.splice(7,5,'know,');
console.log(secretMessage);

console.log(secretMessage.join(' '));