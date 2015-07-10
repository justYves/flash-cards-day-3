app.directive('borderOnHover',function(){
  return{
    restrict: 'A',
    link: function(scope,element,attribute){
      element.on('mouseenter',function(){
        element.css({"border":"black 2px solid"});
      });

      element.on('mouseleave',function(){
        element.css({"border":"none"});
      });

    }
  };
});