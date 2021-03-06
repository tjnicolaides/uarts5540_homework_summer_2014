    
var tasks = [];    
    
$(document).ready(function(){

    $.ajax({
        'url': 'http://api.usergrid.com/tjnicolaides/mytasks/tasks',
        'type': 'GET',
        'success': function(data) {
            console.log(data);
            tasks = data.entities;
            for(var i =0; i <= tasks.length; i++) {
                printTask(tasks[i]);
            }
        }
    });    

    $('.panel-body').append('<ul class="list-group"></ul>');
    
    for(var i = 0; i < tasks.length; i++) {
        
        try {
            printTask(tasks[i]);
        } catch(error) {
            console.log('you have an error: ' + error);
        }
       
    }

    $('#add_task_btn').on('click', function(e){
        e.preventDefault();
        //$('[name="add_new_task"]')
        var $new_task_input = $('#add_new_task'); // cache the selector
        var new_task_description = $new_task_input.val(); // grab the input value
        addTask(new_task_description); // use it to add a new task object
        $new_task_input.val(''); // empty the input value
    });
    
    $('#archive_tasks').on('click', function(e){
        e.preventDefault();
        console.log('archive tasks!');
        removeCompleted();
    });
});

function removeCompleted() {
    $('li.complete').remove();
    var newTasks = [];
    for(var i = 0; i < tasks.length; i++) {
       if(!tasks[i].complete) {
           newTasks.push(tasks[i]);
       }
    }
    
    tasks = newTasks;
    console.log(tasks);

}

function Task(taskname, complete) {
    this.name = taskname || 'test';
    this['complete'] = complete || false;
    
    var deadline = new Date();
	deadline.setDate(deadline.getDate() + 7);
	
    //this.dueDate = 'foo'; //deadline;
}

function addTask(taskname, complete) {
    
    // call new Task
    var task = new Task(taskname, complete);
    console.log(task);
    // add result of new Task to tasks array
    tasks.push(task);
    
    // add object to HTML list
    printTask(task);
    
    $.ajax({
        'url': 'http://api.usergrid.com/tjnicolaides/mytasks/tasks',
        'type': 'POST',
        'data': JSON.stringify(task),
        'success': function(data) {
            console.log(data);
            alert('Your task was added to Apigee!');
        }
    });
    
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
    if(taskObj['uuid']) { 
        listHTML.attr('data-uuid', taskObj['uuid']);
    }
    
    $('ul.list-group').append(listHTML);
}