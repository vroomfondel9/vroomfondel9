		
		// Accordion
		(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	exampleToggles = d.querySelectorAll('.has-example.js-exampleToggle'),
	exampleToggleLinks = d.querySelectorAll('.has-example.js-exampleToggle a'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }
  
  skipClickDelayAndStopBubbling = function(e){
    e.target.click();
	e.stopPropagation();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
toggleExample = function(e) {
	console.log("example toggled");
	e.preventDefault();
	var thisQuestion = e.target.closest('.has-example');
	if (thisQuestion)
	{
		var thisAnswer = thisQuestion.nextElementSibling;
		if (thisQuestion.classList.contains('base-accordion-example'))
		{
			thisAnswer = thisQuestion.previousElementSibling;
		}
		
		thisQuestion.classList.toggle('is-collapsed');
		thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
		setAriaAttr(thisAnswer, 'aria-hidden', 'false');
		setAriaAttr(thisQuestion, 'aria-hidden', 'true');
		
		var heading = thisAnswer.parentNode.previousElementSibling.getElementsByTagName('a')[0];
		heading.classList.toggle('example-heading');
		
		thisQuestion.classList.remove('animateIn');
		thisAnswer.classList.remove('animateIn');
		thisAnswer.classList.add('animateIn');
	}
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
  for (var i=0,len=exampleToggles.length; i<len; i++) {
		if(touchSupported) {
      exampleToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      exampleToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    exampleToggles[i].addEventListener('click', toggleExample, false);
  }
  for (var i=0,len=exampleToggleLinks.length; i<len; i++) {
		if(touchSupported) {
      exampleToggleLinks[i].addEventListener('touchstart', skipClickDelayAndStopBubbling, false);
    }
    if(pointerSupported){
      exampleToggleLinks[i].addEventListener('pointerdown', skipClickDelayAndStopBubbling, false);
    }
    exampleToggleLinks[i].addEventListener('click', skipClickDelayAndStopBubbling, false);
  }
})();
		// End Accordion