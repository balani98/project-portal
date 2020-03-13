const controller = require('../controllers');
const paginator = require('../middlewares/pagination');
const model = require('../models');

module.exports= (app) => {
	//Project
	app.post("/api/project",controller.project.create);
	app.get("/projects",controller.project.index);
	app.get("/project",controller.project.show);
	app.get("/projects/search",controller.project.searchProject);
	app.put("/project/:id",controller.project.update);
	app.put("/api/project",controller.project.update);
	app.delete("/api/project",controller.project.delete);
	//Employees
	app.post("/employees",controller.employees.create) ;
	app.get("/employees",controller.employees.index) 
	//app.get("/employees/:id",controller.employees.show) 
    app.put("/employees/:id",controller.employees.update) ;
	app.delete("/employees/:id",controller.employees.delete);
	app.get("/employees/search",controller.employees.searchEmployee);
	app.post("/login", controller.login.checkUserAuthentication);
	app.get("/timesheet", paginator(model.timesheet.model), controller.timesheet.show);
	app.get("timesheets/search",controller.timesheet.searchTimesheets);
	// app.post("./timesheet",controller.timesheet.create);
	app.post("/api/employee", controller.employees.create);
	app.put("/api/employee", controller.employees.update);
	app.get("/api/employee", controller.employees.show);
	app.delete("/api/employee", controller.employees.delete);
	//Timesheet Routes
	app.post('/api/timesheet', controller.timesheet.create);
	app.patch("/api/timesheet", controller.timesheet.update);
	app.get('/api/projectmanager', controller.projectManager.get);
	//review
	// app.put("/review",controller.review.update);
	app.put("/review",controller.timesheet.modify);
	app.get("/clevel/project",controller.cleveldata.projectsStatusData);
	app.get("/clevel/timesheet",controller.cleveldata.timesheetsStatusData);





	app.get('/api/timesheet/filter', controller.timesheet.index);
	app.get('/api/timesheet/:id', controller.timesheet.getTimesheetUsingRouteParams);
}


