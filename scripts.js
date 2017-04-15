const setCheekyHeader = (header) => {
  $('h1').text(header);
}

const insertTraversals = (traversals) => {
  const $orderedList = $('<ol>', {
    html: () => {
      traversals.forEach((element, index, array) => {
        array[index] = $('<li>', { text: element });
      });
      return traversals;
    }
  });

  $orderedList.appendTo('div.info-box');
}

const makeSadHappy = () => {
  $('.sad').removeClass("sad").addClass("happy");
}

const redirectAnnoyingPopupLink = (addr) => {
  $('div#annoying-popup a').attr({
    href: addr
  });
}

const moveAnnoyingPopup = () => {
  const $apop = $('div#annoying-popup')
  $apop.css({
    right: '10px',
    top: +$apop.css('top').replace(/[^\d]/g, "") + 30 + "px"
  });
}

const replaceEllipsis = (text) => {
  $('li:contains("' + text + '")')
    .siblings(':contains("...")')
    .text("Content of your choice");
}

const replaceForm = (rows, cols, def) => {
  $('input[type=text]').replaceWith($('<textarea>', {
    rows: rows,
    cols: cols
  }).text(def));
}

$(document).ready(() => {
  // Change <h1> to something cheeky
  setCheekyHeader("Something Cheeky");

  // Create and insert ordered list of upcoming traversals.
  insertTraversals(["Hello", "from", "the", "other", "side"]);

  // Make all sad classes happy.
  makeSadHappy();

  // Make the annoying popup link point instead to http://www.cashcatz.biz
  redirectAnnoyingPopupLink("http://www.cashcatz.biz");

  // Change the positioning of the annoying popup so it is on the right side of
  // the screen (it's okay to use direct CSS here). Make it 30 pixels lower than
  // ts current position by utilizing its current top value.
  moveAnnoyingPopup();

  // Replace the ellipsis ... in one of the suggested topics with content of your
  // choice -- but do so by traversing from a different element.
  replaceEllipsis("Super selections");

  // Replace the form input with a <textarea> instead of a <input type="text">.
  replaceForm(10, 40, "I must have called a thousand times");
});
