function jQuery(selector) {
  if (!(this instanceof jQuery)) return new jQuery(selector);

  this.selector = selector;
  this.collection = parseSelector(this.selector);


  function parseSelector(selector) {
    if (typeof(selector) === 'object') {
      return [selector];
    } else {
      return document.querySelectorAll(selector);
    }
  }
  // this.collection = parseSelector(this.selector);

  // function parseSelector(selector) {
  //   if (selector[0] === "#") {
  //     return document.getElementById(selector.substring(1))
  //   } else if (selector[0] === ".") {
  //     return document.getElementsByClassName(selector.substring(1))
  //   } else if (typeof(selector) === 'object') {
  //     return [selector];
  //   } else {
  //     return document.getElementsByTagName(selector)
  //   };
  // };

  this.length = this.collection.length;

  this.idx = function(index) {
    return this.collection[index];
  }

  this.hasClass = function(klass) {
    var boolean = false;
    iterate(function(ele) {
      if (ele.className.split(' ').indexOf(klass) > -1) {
        boolean = true;
      }
    }, this.collection)
    return boolean;
  }

  this.addClass = function(klass) {
    iterate(function(ele) {
      ele.classList.add(klass)
    }, this.collection)
    return this;
  };

  this.removeClass = function(klass) {
    iterate(function(ele) {
      ele.classList.remove(klass)
    }, this.collection)
    return this;
  }

  this.toggleClass = function(klass) {
    iterate(function(ele) {
      ele.classList.toggle(klass);
    }, this.collection);
    return this;
  }

  this.val = function(content) {
    if (content) {
      iterate(function(ele) {
        ele.setAttribute('value', content);
      }, this.collection)
      return this;
    } else {
      return this.collection[0].value();
    }
  }

  this.css = function(property, newValue) {
    if (typeof(property) === 'object') {
      iterate(function(ele) {
        for (var attr in property) {
          ele.style[attr] = property[attr];
        }
      }, this.collection);
      return this;
    } else if (newValue) {
      iterate(function(ele) {
        ele.style[property] = newValue;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style[property];
    }
  }

  this.height = function(num) {
    str_num = num + "px"
    if (num) {
      iterate(function(ele) {
        ele.style.height = str_num;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style.height;
    }
  }

  this.width = function(num) {
    str_num = num + "px"
    if (num) {
      iterate(function(ele) {
        ele.style.width = str_num;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style.width;
    }
  }

  this.attr = function(attrName, attrValue) {
    if (typeof(attrName) === 'object') {
      iterate(function(ele) {
        for (var attrKey in attrName) {
          ele.setAttribute(attrKey, attrName[attrKey]);
        }
      }, this.collection);
      return this;

    } else if (attrValue) {
      iterate(function(ele) {
        ele.setAttribute(attrName, attrValue);
      }, this.collection)
      return this;
    } else {
      return this.collection[0].getAttribute(attrName);
    }

  }

  this.html = function(text) {
    if (text) {
      iterate(function(ele) {
        ele.innerHTML = text;
      }, this.collection);
      return this;
    } else {
      return this.collection[0].innerHTML;
    }
  }

  this.append = function(htmlText) {
    this.collection[0].insertAdjacentHTML('beforeend', htmlText);
  }

  this.children = function(tagName) {
    return this.collection[0].getElementsByTagName(tagName)
  }

  this.replaceWith = function(newChild) {
    var div = document.createElement('div');
    div.innerHTML = newChild;
    this.collection[0].parentNode.replaceChild(div, this.collection[0]);
  }

  function iterate(func, collection) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    };
  };


};



// alias $
var $ = function(selector) {
  return jQuery(selector);
}
