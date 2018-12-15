(function (global, $) {

  // Constructor so we don't have to use the new keyword
  const Greetr = function(first, last, language) {
    return new Greetr.init(first, last, language)
  }

  // Set up of variables to use where we want
  // This is an example of closure, all the methods can access them, but they only live in this memory space
  const supportedLangs = ['en','es']
  const greeting = {
    en: 'sup',
    es: 'sup but in spanish'
  }
  const formalGreeting = {
    en: 'Howdy',
    es: 'Hola Sēnior'
  }
  // Where we put functions that we want our 'library' to be able to use
  // Remember we put them here because they only get created once instead of each time we create an instance
  Greetr.prototype = {
    fullName: function() {
      return `${this.last}, ${this.first}`
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) throw 'No Lang Support'
    },
    greeting: function () {
      return `${greeting[this.language]} ${this.fullName()}`
    },
    formalGreeting: function () {
      return `${formalGreeting[this.language]} ${this.fullName()}`
    },
    greet: function (formal) {
      let msg = '';
      if (formal) msg = this.formalGreeting();
      else msg = this.greeting();
      console.log(msg);
      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    setGreeting: function (selector, formal) {
      let msg = '';
      if (formal) msg = this.formalGreeting();
      else msg = this.greeting();
      $(selector).text(msg);
      return this;
    }

  };

  // the actual constructor function call
  Greetr.init = function(first = 'John', last = 'Doe', language = 'en') {
    const self = this;
    self.first = first;
    self.last = last;
    self.language = language;
    self.validate();
  }

  // Us saying we want the prototype of our constructor function to actually be where we attached the methods from
  Greetr.init.prototype = Greetr.prototype;

  // Attach our framework to the global object
  global.Greetr = global.G$ = Greetr;

})(window, jQuery)
