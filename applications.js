$(document).ready(function(){
    // 1. cheeky H1 
    $('h1').text('Is this smart enough?');
    
    // 2. ordered list of traversals
    var traversalList = $('<ol> <li>Search for ancestors on the DOM</li> <li>Find next child element with a specific class</li> <li>Jump to "this" on the DOM</li></ol>');
    $(traversalList).appendTo('h4');
    
    
    // 3. change sad classes happy ones
    $('.sad')
        .addClass('happy')
        .removeClass('sad');

   // 4. change popup link 
    $('#annoying-popup a').attr('href', 'http://www.cashcats.biz'); 
    // have to make sure to specify to select the link element 'a'
    
    // 5. move popup to right and 30 pixels down
    $('#annoying-popup').css({'position': 'absolute', 'right': '0', 'top': '30px'});
    
    // 6. replace elepsis 
    $('.suggested-topics')
        .find('li')
        .last()
        .prev()
        .replaceWith("<li>Super new content!</li>");
    
    // 7. replace form input with 'textarea'
    var textArea = $('<input type="textarea" placeholder="Tell me a story!"</input>'); 
    $('.input-form input[type=text]').replaceWith(textArea);  
    // not sure why it doesn't display differently but according to the Dev Tools, the type has been adjusted. 
    
});
