// var jQuery = function(input) {
//   var jquery_object;
//   switch(input[0]) {
//     case ".":
//       jquery_object = document.getElementsByClassName(input.slice(1));
//       break;
//     case "#":
//       jquery_object = document.getElementById(input.slice(1));
//       break;
//     default:
//       jquery_object = document.getElementsByTagName(input);
//       break;
//   }
//   return jquery_object;
// }

function jQuery(input) {
  if (!(this instanceof jQuery)) return new jQuery(input);
  var jquery_object = [document];

  var getChildren = function(element, selector) {
    var children;
    switch(selector[0]) {
      case ".":
        children = element.getElementsByClassName(selector.slice(1));
        break;
      case "#":
        children = element.getElementById(selector.slice(1));
        break;
      default:
        children = element.getElementsByTagName(selector);
        break;
      }
    return children;
  }

  if (typeof input === "object") {
    jquery_object = [input];
  } else {
    var inputArray = input.split(" ");
    var counter = 0;
    while (counter < inputArray.length) {
      var item = jquery_object.pop();
      //console.log(item);
      var children = getChildren(item, inputArray[counter]);

      if (inputArray[counter][0] === '#') {
        jquery_object.push(children);
      } else {
        for(var i = 0; i < children.length; i++) {
          jquery_object.push(children[i]);
        }
      }
      counter++;
    }
  }

  this.collection = jquery_object;

  this.length = function() {
    return this.collection.length;
  };

  this.idx = function(num) {
    return this.collection[num];
  };

  this.hasClass = function(input) {
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < this.collection[i].classList.length; j++) {
        if(this.collection[i].classList[j] === input) {
          return true;
        }
      }
    }
    return false;
  };

  this.addClass = function(input) {
    for(var i = 0; i < this.collection.length; i++) {
      this.collection[i].className += " " + input;
    };
  };

  this.removeClass = function(input) {
    input = input.split(" ");
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < input.length; j++) {
        this.collection[i].className = this.collection[i].className.replace(input[j], "");
      }
    };
  }

  this.toggleClass = function(input) {
    input = input.split(" ");
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < input.length; j++) {
        if (this.collection[i].className.includes(input[j])) {
          this.collection[i].className = this.collection[i].className.replace(input[j], "");
        } else {
          this.collection[i].className += " " + input;
        }
      }
    };
  };

  this.val = function(input) {
    if (input) {
      return this.collection[0].attributes.value = input;
    } else {
      return this.collection[0].attributes.value;
    }
  }

  this.css = function(style, value) {
    if (value) {
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].style[style] = value;
      }
      return this;
    } else {
      return this.collection[0].style[style];
    }
  }

  this.height = function(newHeight) {
    if (newHeight) {
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].style.height = newHeight;
      }
    } else {
      return this.collection[0].style.height;
    }
  }
  this.width = function(newWidth) {
    if (newWidth) {
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].style.width = newWidth;
      }
    } else {
      return this.collection[0].style.width;
    }
  }

  this.attr = function(attrName, setValue) {
    if (setValue) {
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].setAttribute(attrName, setValue);
      }
    } else
      return this.collection[0].attributes[attrName];
  }

  this.html = function(htmlString) {
    if (htmlString) {
      return this.collection[0].innerHTML = htmlString;
    } else {
      return this.collection[0].innerHTML;
    }
  }

  this.append = function(htmlString) {
    for(var i = 0; i < this.collection.length; i++) {
      var html = this.collection[i].innerHTML;
      html += " " + htmlString;
      this.collection[i].innerHTML = html;
    }
  }

  this.text = function(text) {
    for(var i = 0; i < this.collection.length; i++) {
      this.collection[i].innerText = text;
    }

  }

  this.children = function (){
    var children = this.collection[0].childNodes;
    var final = [];
    for (var i = 0; i < children.length; i++) {
      var childObject = $(children[i]);
      if (childObject.collection[0].nodeName === "#text") {
        continue;
      } else {
        final.push(childObject.collection[0]);
      }
    }
    return final;
  }

  this.replaceWith = function(newHtml) {
    for(var i = 0; i < this.collection.length; i++) {
      this.collection[i].outerHTML = newHtml;
    }
  }

}

var $ = jQuery;
