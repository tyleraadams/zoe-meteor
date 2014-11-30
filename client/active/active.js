var ActiveTemplate = (function(){

  function onRender() {
    Session.set('active', null);
  }

  function setActive(e) {
    var activeSection = $(e.target).attr('data-section');
    Session.set('active', activeSection);
    Session.set('activeArticle', null);
    scrollToActive();
  }

  function getActive() {
    return Session.get('active');
  }

  function scrollToActive() {
    if ($('#active')) {
      $('html,body').animate({
        scrollTop: $('#active').offset().top - 50
    }, 500);
    }
  }


  //public methods
  return {
    onRender: onRender,
    setActive: setActive,
    getActive: getActive,
    scrollToActive: scrollToActive
  }

})();

Template.active.rendered = ActiveTemplate.onRender;
Template.active.setActive = ActiveTemplate.setActive;
Template.active.getActive =  ActiveTemplate.getActive;
Template.active.scrollToActive =  ActiveTemplate.scrollToActive;

Template.active.events({
  'click nav a, tap nav a, click .call-to-action a, tap .call-to-action a': ActiveTemplate.setActive
});