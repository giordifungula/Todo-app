// //Our 
// Our todoApp needs
// --To able to add things
 //var 

// -- to be able to change things
// function changeTodo(position, text){
// 	//change any item in array
// 	list[position] = text; 

// 	displayTodo();//display the Things so far
// }
// // -- to be able to delete things
// function deleteTodo(item){
// 	//delete elements in array
// 	list.splice(item, 1);

// 	displayTodo();//display the Things so far
// }
// // -- to display the things

// function displayTodo() {
// 	// body...
// 	console.log("My Todos", list);
// 	if(list.length === 0){
// 		console.log("your list is empty");
// 	}
// }
var TodoList = {
	list: [], // store the list 
	addTodo: function (item) {
		this.list.push({
			todoList: item,// property to value being passed
			completed: false //not yet completed
		});
		this.displayTodo();
	},
	displayTodo: function (){
		if(this.list.length === 0) //empty array
			console.log("My todos is empty");
		else
			console.log(" My todos ",this.list);
	},
	changeTodo: function(position, newVal){
		this.list[position] = newVal;
		this.displayTodo();
		//change value
	},
	deleteTodo: function (item){
		//delete method
		this.list.splice(item,1);
		this.displayTodo();
	},
	toggleCompleted: function(tog){
		var todo = this.list[tog];
		todo.completed =!todo.completed;
		this.displayTodo();

	}


}