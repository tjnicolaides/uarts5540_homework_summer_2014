var tasks = [
    {/*'name': 'Take out the trash',*/ 'complete' : true}, 
    {'name': 'Do the laundry', 'complete' : false}, 
    {'name': 'Fix the sink', 'complete' : true}, 
    {'name': 'Finish slidedecks for class', 'complete' : false}, 
    {'name': 'Relax, chill out', 'complete' : true}
];

var listHTML = '<ul class="list-group">';
    console.log(listHTML);

for(var i = 0; i < tasks.length; i++) {
    
    try {
        printTask(tasks[i]);
    } catch(error) {
        //console.log('you have an error: ' + error);
    }
   
       console.log(listHTML);

}

listHTML += '</ul>';

    console.log(listHTML);








function printTask(taskObj) {
    if(taskObj.name == null) {
        throw "You should have a task name in your object!";
    }
    if(taskObj['complete']) { 
        listHTML += '<li class="list-group-item">' + taskObj.name + ' <i class="glyphicon glyphicon-ok"></i></li>';
    } else {
        listHTML += '<li class="list-group-item">' + taskObj.name + '</li>';
    }
}

$(document).ready(function(){
    
    $('.panel-body').html(listHTML);
    
});
