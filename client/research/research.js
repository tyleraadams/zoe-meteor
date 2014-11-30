var ResearchTemplate = (function(){

  function onRender() {
    Session.set('activeArticle', null);
  }

  function setActiveArticle(e) {
    var activeArticle = $($(e.target).closest('article')).attr('data-name');
    Session.set('activeArticle', activeArticle);
    Template.active.scrollToActive();
  }

  function getActiveArticle() {
    return Session.get('activeArticle');
  }


  //public methods
  return {
    onRender: onRender,
    setActiveArticle: setActiveArticle,
    getActiveArticle: getActiveArticle
    
  }

})();

Template.research.rendered = ResearchTemplate.onRender;
Template.research.setActiveArticle = ResearchTemplate.setActiveArticle;
Template.research.getActiveArticle =  ResearchTemplate.getActiveArticle;

Template.research.events({
  'click article': ResearchTemplate.setActiveArticle
});