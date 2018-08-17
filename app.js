// //Our 
// Our todoApp needs
// --To able to add things
 var list = [];
function addTodo(item){
	// the item passed will be added somewhere , but where ?
	list.push(item);
	console.log(list); //check the list so far
}

// -- to be able to change things
function changeTodo(position, text){
	//change any item in array
	list[position] = text; 
}
// -- to be able to delete things
// -- to display the things