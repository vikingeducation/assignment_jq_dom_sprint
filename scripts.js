$( document ).ready(function() {
  //Part 1
  var $h1 = $('h1');
  $h1.first().text('Tanipulate and Mraverse');

  //Part 2
  var $infoBox = $('div.info-box').first();
  $infoBox.append('<ol></ol>');
  var $infoBoxList = $infoBox.children('ol').first();
  $infoBoxList.append('<li>Change the <code class=" language-bash"><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span></code> to something cheeky</li>')
    .append('<li>Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.</li>')
    .append('<li>Make all <code class=" language-bash">sad</code> classes into <code class=" language-bash">happy</code> ones.</li>')
    .append('<li>Make the annoying popup link point instead to <code class=" language-bash">http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>cashcats<span class="token punctuation">.</span>biz</code>.</li>')
    .append('<li>Change the positioning of the annoying popup so it is on the right side of the screen (it\'s okay to use direct CSS here).  Make it 30 pixels lower than its current position by utilizing its current <code class=" language-bash">top</code> value.</li>')
    .append('<li>Replace the ellipsis <code class=" language-bash"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></code> in one of the suggested topics with content of your choice -- but do so by traversing from a different element.</li>')
    .append('<li>Replace the form input with a <code class=" language-bash"><span class="token operator">&lt;</span>textarea<span class="token operator">&gt;</span></code> instead of a <code class=" language-bash"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">&gt;</span></code>.</li>');

  //Part 3
  $('.sad').removeClass('sad').addClass('happy');

  //Part 4
  $popUp = $('#annoying-popup');
  $popUp.children('a').first().attr('href', 'http://www.cashcats.biz');

  //Part 5
  $popUp.css('right', 0)
    .css('top', '+=30');

  //Part 6
  $('div.suggested-topics').find('ul li:nth-child(7)').text('Content of my choice');

  //Part 7
  $('div.input-form').find('input[type=text]').replaceWith('<textarea></textarea>');
});
