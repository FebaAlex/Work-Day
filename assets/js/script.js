//THEN the current day is displayed at the top of the calendar

$("#currentDay").text(moment().format("MMM Do YY"))


$('.saveBtn').on('click', function(){

    //click on the saveBtn,
    //find the closest sibling with the class description
    //grab its value
    var textarea= $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');
    localStorage.setItem(key, textarea);

});

$("#7 .description").val(localStorage.getItem('7'));

$("#8 .description").val(localStorage.getItem('8'));

$("#9 .description").val(localStorage.getItem('9'));

$("#10 .description").val(localStorage.getItem('10'));

$("#11 .description").val(localStorage.getItem('11'));

$("#12 .description").val(localStorage.getItem('12'));

$("#1 .description").val(localStorage.getItem('1'));

$("#2 .description").val(localStorage.getItem('2'));

$("#3 .description").val(localStorage.getItem('3'));

$("#4 .description").val(localStorage.getItem('4'));

$("#5 .description").val(localStorage.getItem('5'));

$("#6 .description").val(localStorage.getItem('6'));

$("#7PM .description").val(localStorage.getItem('7PM'));

$("#8PM .description").val(localStorage.getItem('8PM'));

$("#9PM .description").val(localStorage.getItem('9PM'));

$("#10PM .description").val(localStorage.getItem('10PM'));

$("#11PM .description").val(localStorage.getItem('11PM'));

$("#12AM .description").val(localStorage.getItem('12AM'));