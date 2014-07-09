    
var tasks = [];    
    
$(document).ready(function(){

    addTask('Take out the trash');    
    addTask('Do the laundry');    
    addTask('Fix the sink');    

    $('.panel-body').append('<ul class="list-group"></ul>');
    
    for(var i = 0; i < tasks.length; i++) {
        
        try {
            printTask(tasks[i]);
        } catch(error) {
            console.log('you have an error: ' + error);
        }
       
    }

});

function removeCompleted() {
    $('li.complete').remove();
}

function Task(taskname) {
    this.name = taskname || 'test';
    this['complete'] = false;
    
    var deadline = new Date();
	deadline.setDate(deadline.getDate() + 7);
	
    this.dueDate = deadline;
}

function addTask(taskname) {
    
    // call new Task
    var task = new Task(taskname);
    console.log(task);
    // add result of new Task to tasks array
    tasks.push(task);
    
    // add object to HTML list
    printTask(task);
    
}

function printTask(taskObj) {
    if(taskObj.name == null) {
        throw "You should have a task name in your object!";
    }
    var listHTML  = $('<li>').text(taskObj.name).addClass('list-group-item');
    
    if(taskObj['complete']) { 
        listHTML.addClass('complete');
        listHTML.append(' <i class="glyphicon glyphicon-ok"></i>');
    }
    
    $('ul.list-group').append(listHTML);
}