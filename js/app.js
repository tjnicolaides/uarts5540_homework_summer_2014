var tasks = ['Take out the trash', 'Do the laundry', 'Fix the sink', 'Finish slidedecks for class', 'Relax, chill out'];


document.write('<ul class="list-group">');

for(var i = 0; i < tasks.length; i++) {

    console.log(tasks[i]); 
    document.write('<li class="list-group-item">' + tasks[i] + '</li>');
   
}

document.write('</ul>');

console.log('message from myself - notes for week 2');
