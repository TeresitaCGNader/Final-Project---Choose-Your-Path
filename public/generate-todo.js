// Grab the todo template from Handlebars.
var dialogTemplate = Handlebars.templates.dialog;

/*
 * This function should create an HTML string representing a new todo note
 * given the information that could be in the note.
 *
 * Note that where, when, who, and details can be an empty string.  If this
 * is the case, the corresponding portion of the todo note should not be
 * included in the HTML string.
 */
function generateTodoHTML(dialog, dialogText, choice, choice1Text, choice1Link, choice2Text, choice2Link, choice3Text, choice3Link) {
  var data = {
    dialogText: dialogText,
    choice: {
    choice1Text: choice1Text,
    choice1Link: choice1Link,
    choice2Text: choice2Text,
    choice2Link: choice2Link,
    choice3Text: choice3Link}
  }
  return dialogTemplate(data);
}
