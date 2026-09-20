function indexOfIgnoreCase(s1, s2) 
	let s1lower = s1.toLowercase();
	let s2lower = s2.toLowercase();

return s1lower.indexof(s2lower);
	
  // write your code here
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
