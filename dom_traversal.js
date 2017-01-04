// DOM Traversal

var traversals = {
  changeH1: function() {
    $('h1').first().text('Fun on a bun!');
  },

  addList: function() {
    $('.info-box').append('<ol id="list">');
  },

  addListItem: function(input) {
    var listItem = $('<li>').text(input);
    $('#list').append(listItem);
  },

  makeSadHappy: function() {
    $('.sad').addClass('happy')
      .removeClass('sad');
  },

  showRichCats: function() {
    $('#annoying-popup a').attr('href', 'http://www.cashcats.biz');
  },

  movePopup: function() {
    $('#annoying-popup').css({
      right: 0,
      top: '+=30px'
    })
  },

  replaceEllipses: function() {
    var ellipseItem = $('ul').find('*:contains(...)').first();
    ellipseItem.text('mmmmm Keanu');
  },

  replaceInput: function() {
    $('input[type=text]').replaceWith('<textarea>');
  }
}

$(document).ready(function() {
  traversals.changeH1();

  traversals.addList();

  var listItems =
    ['Change the <h1> to something cheeky',
      'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
      'Make all sad classes into happy ones.',
      'Make the annoying popup link point instead to http://www.cashcats.biz.',
      'Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizi, its current top value.',
      'Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.',
      'Replace the form input with a <textarea> instead of a <input type="text">.'];
  listItems.forEach( function(element, index) {
    traversals.addListItem(element);
  });

  traversals.makeSadHappy();

  traversals.showRichCats();

  traversals.movePopup();

  traversals.replaceEllipses();

  traversals.replaceInput();
})
