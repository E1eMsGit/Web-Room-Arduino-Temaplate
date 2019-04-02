// Слайдеры.  
var RGBChange = function() {
    $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')');
    $('#led-strip').css('border-color', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')');
    
    $('#red, #green, #blue').slider();
    jQuery.ajaxSetup({ timeout: 110 });
    var id = $(this).attr('id'); 
    var strength = $(this).val(); 
    
    if (id == 'red') {
        $.post('/light', { red: strength }); 
    }
    if (id == 'green') {
        $.post('/light', { green: strength });
    }            
    if (id == 'blue') {
        $.post('/light', { blue: strength }); 
    }        
};

var r = $('#red').slider().on('change', RGBChange).data('slider');
var g = $('#green').slider().on('change', RGBChange).data('slider');
var b = $('#blue').slider().on('change', RGBChange).data('slider');
