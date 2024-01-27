dot = document.querySelector('#dot');
        let btn = document.querySelectorAll('.btn');
        let display = document.querySelector('#display');
        for(let klawisz of btn){
            klawisz.addEventListener('click', function(){
                display.value += klawisz.value;
            });
        }
        let reset = document.querySelector('#clear');
        reset.addEventListener('click', function(){
            display.value = null
        });
        let submit = document.querySelector('#equal');
        submit.addEventListener('click', function(){
           display.value = eval(display.value);
           if(eval(display.value) == undefined 
           || isNaN(eval(display.value)) 
           || !isFinite(eval(display.value))) display.value = 'ERROR';
        })