// //Our 
// Our todoApp needs
// --To able to add things
 //var 


// -- to be able to change things
function changeTodo(position, text){
	//change any item in array
	list[position] = text; 

	displayTodo();//display the Things so far
}
// -- to be able to delete things
function deleteTodo(item){
	//delete elements in array
	list.splice(item, 1);

	displayTodo();//display the Things so far
}
// -- to display the things

function displayTodo() {
	// body...
	console.log("My Todos", list);
	if(list.length === 0){
		console.log("your list is empty");
	}
}
var TodoList = {
	list: [], // store the list 
	addTodo: function (item) {
		this.list.push(item);
	},
	displayTodo: function (){
		if(this.list.length === 0) //empty array
			console.log("My todos is empty");
		else
			console.log(this.list);
	}
// 	function addTodo(item){
// 	// the item passed will be added somewhere , but where ?
// 	list.push(item);
// 	// console.log(list); //check the list so far

// 	displayTodo();//display the Things so far
// }

}