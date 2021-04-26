'use strict';

let learn = prompt('do you think that Im learning programming language right now  ( yes , no , n , y )').toUpperCase() ;
while(learn !== 'yes' && learn !== 'no' && learn !== 'y' && learn !== 'n' )
{ 
  learn = prompt('do you think that Im learning programming language right now  ( yes , no , n , y )') ;
}

if (learn == 'yes' || learn == 'y'  )
{ 
    console.log('that is correct');
    alert('that is correct');
}
else if (learn == 'no' || learn == 'n'  )
{ 
    console.log('that is wrong');
    alert('that is wrong');
}

let college = prompt('do you think I was studied in engineering college  ( yes , no , n , y )') ;
while(college !== 'yes' && college !== 'no' && college !== 'y' && college !== 'n' )
{ 
    college = prompt('do you think I was studied in engineering college   ( yes , no , n , y )') ;
}
if (college == 'no' || college == 'n'  )
{ 
    console.log('that is correct');
    alert('that is correct');
}
else if (college == 'yes' || college == 'y'  )
{ 
    console.log('that is wrong');
    alert('that is wrong');
}
let status = prompt('do you think I\'m single  ( yes , no , n , y )') ;
while(status !== 'yes' && status !== 'no' && status !== 'y' && status !== 'n' )
{ 
    status = prompt('do you think I\'m single  ( yes , no , n , y )') ;
}
if (status == 'yes' || status == 'y'  )
{ 
    console.log('that is correct');
    alert('that is correct');
}
else if (status == 'no' || status == 'n'  )
{ 
    console.log('that is wrong');
    alert('that is wrong');
}
let live = prompt('do you think  I\'m living in jordan  ( yes , no , n , y )') ;
while(live !== 'yes' && live !== 'no' && live !== 'y' && live !== 'n' )
{ 
    live = prompt('do you think  I\'m living in jordan  ( yes , no , n , y )') ;
}
if (live == 'yes' || live == 'y'  )
{ 
    console.log('that is correct');
    alert('that is correct');
}
else if (live == 'no' || live == 'n'  )
{ 
    console.log('that is wrong');
    alert('that is wrong');
}
let coffee = prompt('do you think I drink  coffee  ( yes , no , n , y )') ;
while(coffee !== 'yes' && coffee !== 'no' && coffee !== 'y' && coffee !== 'n' )
{ 
    coffee = prompt('do you think I drink  coffee  ( yes , no , n , y )') ;
}
if (coffee == 'no' || coffee == 'n' )
{ 
    console.log('that is correct');
    alert('that is correct');
}
else if (coffee == 'yes' || coffee == 'y'  )
{ 
    console.log('that is wrong');
    alert('that is wrong');
}
  