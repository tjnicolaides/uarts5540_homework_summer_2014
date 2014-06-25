var tasks = [
    {/*'name': 'Take out the trash',*/ 'complete' : true}, 
    {'name': 'Do the laundry', 'complete' : false}, 
    {'name': 'Fix the sink', 'complete' : true}, 
    {'name': 'Finish slidedecks for class', 'complete' : false}, 
    {'name': 'Relax, chill out', 'complete' : true}
];


document.write('<ul class="list-group">');

for(var i = 0; i < tasks.length; i++) {
    
    try {
        printTask(tasks[i]);
    } catch(error) {
        console.log('you have an error: ' + error);
    }
   
}

document.write('</ul>');

console.log('message from myself - notes for week 2');


function printTask(taskObj) {
    console.log(taskObj.name == null);
    if(taskObj.name == null) {
        throw "You should have a task name in your object!";
    }
    console.log(taskObj); 
    if(taskObj['complete']) { 
        document.write('<li class="list-group-item">' + taskObj.name + ' <i class="glyphicon glyphicon-ok"></i></li>');

    } else {
        document.write('<li class="list-group-item">' + taskObj.name + '</li>');
    }
}


