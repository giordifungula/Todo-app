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
		//debugger;
		this.list.push({
			todoList: item,// property to value being passed
			completed: false //not yet completed
		});
		this.displayTodo();
	},
	toggleAll: function(){
		var totalTodos = this.list.length; // number of things  in array
		var completedTodos = 0;

		for(var i = 0;i < totalTodos;i++){
			if( this.list[i].completed === true)
				completedTodos++; // if one element is added
		}
			
			if(completedTodos === totalTodos)
			// make everything false
				for(var i = 0;i < totalTodos;i++)
					this.list[i].completed = false;
			for(var i = 0;i < totalTodos;i++)
				this.list[i].completed = true;	
			this.displayTodo();
	},
	displayTodo:function(){
		//debugger;
		if(this.list.length === 0) //empty array
			console.log("My todos is empty");
		else
			for(var i = 0;i < this.list.length;i++){
				// go through the list and find true 
					// if you have toggled the element
				if(this.list[i].completed === true){
					console.log('(x)', this.list[i].todoList);

				} else {
				console.log('( )', this.list[i].todoList);

				}
			}
			//console.log(" My todos ",this.list);
	},
	changeTodo: function(position, newVal){
		//debugger;
		this.list[position].todoList = newVal;
		this.displayTodo();
		//change value
	},
	deleteTodo: function (item){
		//delete method
		//debugger;
		this.list.splice(item,1);
		this.displayTodo();
	},
	toggleCompleted: function(tog){

		var todo = this.list[tog];
		todo.completed =!todo.completed;
		//simply toggle the item in list
		this.displayTodo();
	},
	toggleAll: function(){
		debugger;
		//if everything is true, 
		//make everything false otherwise
		//make everything true
		var completedTodos = 0;
		var totalTodos = this.list.length;

		//get number of completed todos
		for(var i = 0;i < totalTodos;i++){
			if(this.list[i].completed === true){
				completedTodos++;
			}
			//add numbers that completed
		}
		//if everything is true make false
		if(completedTodos === totalTodos){
			for(var i = 0;i < totalTodos;i++){
				this.list[i].completed = false
				//if everything is true and selected
				// make them false now
			}
			
		}else {
			for(var i = 0;i < totalTodos;i++){
				this.list[i].completed = true
				// if some are true and false 
				//make all elements true
				}	
			}
		this.displayTodo();
	}


}
var displayTodos = document.getElementById("displayTodos");
var toggleAll = document.getElementById("toggleAll");

displayTodos.addEventListener('click', function(){
//console.log("clicked bro this works");
TodoList.displayTodo();
//this not needed as we are outside the object
});
toggleAll.addEventListener('click' , function(){
	TodoList.toggleAll();//toggle all Funciton
})