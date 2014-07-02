$(document).ready(function(){
    
    var tasks = [
        {/*'name': 'Take out the trash',*/ 'complete' : true}, 
        {'name': 'Do the laundry', 'complete' : false}, 
        {'name': 'Fix the sink', 'complete' : true}, 
        {'name': 'Finish slidedecks for class', 'complete' : false}, 
        {'name': 'Relax, chill out', 'complete' : true}
    ];

    $('.panel-body').append('<ul class="list-group"></ul>');
    
    for(var i = 0; i < tasks.length; i++) {
        
        try {
            printTask(tasks[i]);
        } catch(error) {
            console.log('you have an error: ' + error);
        }
       
    }
    
    function printTask(taskObj) {
        if(taskObj.name == null) {
            throw "You should have a task name in your object!";
        }
        if(taskObj['complete']) { 
            $('ul.list-group').append('<li class="list-group-item complete">' + taskObj.name + ' <i class="glyphicon glyphicon-ok"></i></li>');
        } else {
            $('ul.list-group').append('<li class="list-group-item">' + taskObj.name + '</li>');
        }
    }
    


    //$('.panel-body').html(listHTML);
    
});

function removeCompleted() {
    $('li.complete').remove();
}