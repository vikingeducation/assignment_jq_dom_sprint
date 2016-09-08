// $(document).ready(function(){
    $('h1').html('Something cheeky');
    var list = $('<ol></ol>');
    var listItems = [
        'Change the <h1> to something cheeky',
        'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
        'Make all sad classes into happy ones.',
        'Make the annoying popup link point instead to http://www.cashcats.biz.',
        "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
        "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
        'Replace the form input with a <textarea> instead of a <input type="text">.'
    ]
    $.each(listItems, function(index, element){
        var li = $('<li></li>');
        li.text(element);
        // li.append($('<pre></pre>'));
        li.appendTo(list);
    });
    $('.info-box h4').append(list);
    $('.sad').toggleClass('sad').toggleClass('happy');
    $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
    $('#annoying-popup').css('right', '0');
    margin = parseInt($('#annoying-popup').css('top')) + 30;
    $('#annoying-popup').css('top', margin + 'px');
    $('li').last().prev().html('<a href="http://www.nietzschefamilycircus.com/" target="#">Nietzsche Comics</a>');
    var ta = $('<textarea></textarea>').attr('placeholder', 'Tell me a story!')
    $('input[type="text"]').replaceWith(ta)
// })
