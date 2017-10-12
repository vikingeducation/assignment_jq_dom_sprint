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
    $('#annoying-popup')
        .css({
            'position': 'absolute', 
            'right': '0', 
            'top': '+=30px'
        //modified to be 30px from original position, not 30px from top (misread the assignment)
    });
    
    // 6. replace elepsis 
    $('.suggested-topics')
        .find('li')
        .last()
        .prev()
        .replaceWith("<li>Super new content!</li>");
    
    // 7. replace form input with 'textarea'
    
    /*var textArea = $('<input type="textarea" placeholder="Tell me a story!"</input>'); 
    $('.input-form input[type=text]').replaceWith(textArea);  */
    // not sure why it doesn't display differently but according to the Dev Tools, the type has been adjusted. 
    
    
    //this code replaces the area correctly but hard codes the placeholder instead of pulling the existing from the html. 
    var areaReplace = $('<textarea placeholder="Tell me a story!"></textarea>');
    $('.input-form input[type=text]').replaceWith(areaReplace);

    
    //code from other student's solution that does pull the placeholder text from the html    
   /* var $input = $('.input-form input[type=text]');
    var placeholder = $input.attr('placeholder');
    $('.input-form input[type=text]').remove();
    var $textarea = $('<textarea></textarea>')
      .attr('placeholder', placeholder);
    $('.input-form form').prepend($textarea);*/ 
    
});
