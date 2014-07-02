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
        var listHTML  = $('<li>').text(taskObj.name).addClass('list-group-item');
        
        if(taskObj['complete']) { 
            listHTML.addClass('complete');
            listHTML.append(' <i class="glyphicon glyphicon-ok"></i>');
        }
        
        $('ul.list-group').append(listHTML);
    }
    


    //$('.panel-body').html(listHTML);
    
});

function removeCompleted() {
    $('li.complete').remove();
}