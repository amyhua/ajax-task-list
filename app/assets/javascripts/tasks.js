// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

// Upon DOM load, remove checkboxes and allow checkbox
// behavior to submit the form.

$.fn.submitOnCheck = function() {
	this.find('input[type=submit]').remove();
	this.find('input[type=checkbox]').on('click', function() {
  	$(this).parent('form').submit();
  });
  return this;
}

// Add click handler to all existing task forms.
$(function() {
  $('.edit_task').submitOnCheck();
});
