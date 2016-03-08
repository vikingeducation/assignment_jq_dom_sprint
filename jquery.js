function FooConstructor() {
  this.name = "foo";
  this.shot = function() {
    console.log(this.name);
  };
}

function BooConstructor(){
  if (!(this instanceof BooConstructor)){
  return new BooConstructor();
  }
  //the constructor properties and methods here
  this.name = "boo";
  this.shot = function() {
    console.log(this.name);
  };
}

function SimpleObject() {
  this.collection = [];
  this.each = function( callback ) {
    for(var i = 0; i < this.collection.length; i++) {
      callback( this.collection[i], i );
    }
  };
}

function jQuery(selector, attributes) {
  if (!(this instanceof jQuery)){
    var object =  new jQuery();
    object.setElements(selector, attributes);
    return object;
  }

  this.elements = [];

  this.setElements = function(selector, attributes) {
    if (selector instanceof Element) {
      console.log(selector + "is a node, adding directly to collection");
      this.elements = [selector];
      return this;
    }

    if (selector.match(/^<(\w+)>/)) {
      var tagName = selector.match(/^<(\w+)>/)[1];
      console.log(tagName);
      this.elements = [document.createElement(tagName)];
      if (attributes) {
        for ( var key in attributes ) {
          this.elements[0].setAttribute(key, attributes[key]);
        }
      }
      return this;
    }

    if (selector.split(/ |\.|#|\[|=|\]/).length > 2) {
      console.log(selector + "is a complicated query, using querySelector");
      this.elements = [].slice.call(document.querySelectorAll(selector));
      return this;
    }

    var prefix = selector[0];
    var results;
    switch (prefix) {
      case ".":
        console.log(selector + " is a class");
        selector = selector.slice(1);
        results = [].slice.call(document.getElementsByClassName(selector));
        break;
      case "#":
        console.log(selector + " is an id");
        selector = selector.slice(1);
        results = [document.getElementById(selector)];
        break;
      default:
        console.log(selector + " is a tag");
        results = document.getElementsByTagName(selector);
        break;
    }
    this.elements = results;
  };

  this.replaceWith = function(object) {
    this.each(function(index, element) {
      element.outerHTML = object.elements[0].outerHTML;
    });
  };

  this.next = function() {
    return $(this.elements[0].nextElementSibling);
  };

  this.length = function() {
    return this.elements.length;
  };

  this.idx = function(index) {
    return this.elements[index];
  };

  this.hasClass = function(className) {
    return this.elements[0].classList.contains(className);
  };

  this.each = function(callback) {
    for (var i = 0; i < this.length(); i++) {
      callback(i, this.elements[i]);
    }
  };

  this.addClass = function(className) {
    this.each(function(index, element) {
      element.classList.add(className);
    });
    return this;
  };

  this.removeClass = function(className) {
    this.each(function(index, element) {
      element.classList.remove(className);
    });
    return this;
  };

  this.toggleClass = function(className) {
    this.each(function(index, element) {
      element.classList.toggle(className);
    });
    return this;
  };

  this.val = function(newValue) {
    if (newValue) {
      this.elements[0].attributes.value.value = newValue;
      return this;
    } else {
      return this.elements[0].attributes.value.value;
    }
  };

  this.css = function(propertyName, newValue) {
    if (newValue) {
      this.each( function(index, element) {
        element.style[propertyName] = newValue;
        });
      return this;
    } else {
      var style = window.getComputedStyle(this.elements[0]);
      return style[propertyName];
    }
  };

  this.height = function(newValue) {
    if (newValue) {
      newValue = parseInt(newValue, 10);
      this.css("height", newValue + "px");
      return this;
    } else {
      return parseInt(this.css("height"), 10);
    }
  };

  this.width = function(newValue) {
    if (newValue) {
      newValue = parseInt(newValue, 10);
      this.css("width", newValue + "px");
      return this;
    } else {
      return parseInt(this.css("width"), 10);
    }
  };

  this.attr = function(attributeName, newValue) {
    if (newValue) {
      this.each( function(index, element) {
        element.attributes[attributeName].value = newValue;
        });
      return this;
    } else {
      return this.elements[0].attributes[attributeName];
    }
  };

  this.html = function(newHTML) {
    if (newHTML) {
      this.each( function(index, element) {
        element.innerHTML = newHTML;
      });
      return this;
    } else {
      return this.elements[0].innerHTML;
    }
  };

  this.append = function(newElement) {
    if (newElement instanceof jQuery) {
      this.html(this.html() + newElement.html());
    } else {
      this.html(this.html() + newElement);
    }
  };
}

var $ = jQuery;
