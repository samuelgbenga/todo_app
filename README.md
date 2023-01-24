 todo_app
 High level structure
 backend
 	controller
 		TodoController.js getTodo, addTodo, updateTodo, deletTodo
 	models
 		TodoModels.js = text
 	routes
 		TodoRoutes.js
 	.env
 	.gitignore
 	Server.js
 	
 frontend
 	src
 		component
 			Todos.js
 		utils
 			HandlesApi.js
 		App.js states: todo, text, isUpdating, todoId. functions: updateMode
 		index.css
 		index.js

********************************
start from Backend 		
tools used*
	cors = Cross-Origin Resource Sharing: it specifies which server should have access to an api
	mongoose
	express
	dotenv = automatically loads .env files into you application
	nodemon

********************************
start front end analysis
*tools use
axios
react-dom
react-icons

