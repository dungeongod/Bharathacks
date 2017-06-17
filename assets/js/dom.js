type = ['','info','success','warning','danger'];



demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    }
};


var twilio = require('twilio');

var client = new twilio.RestClient('ACc9636c0806124f25953dff72cf305728','24e6dddabc896841903a17877b58e3ed');
client.sms.messages.create({
    to:'+917835932160',
    from:'+12515819577 ',
    body: 'HEY SERVICE IS SERVED'
},function(error,message){

    if(!error){
                console.log('Success SSID is:');
                console.log(messaage.sid);

                console.log('Message sent on :');
                console.log(message.dataCreated);





    }
    else{
        console.log('OOPS!');
    
}
});
