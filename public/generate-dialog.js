// Grab the dialog template from Handlebars.
var dialogTemplate = Handlebars.templates.dialog;

/*
 * This function should create an HTML string representing a new dialog page (which includes one dialog and 3 choices).
 */
function generateTodoHTML(dialogText, choice, choice1Text, choice1Link, choice2Text, choice2Link, choice3Text, choice3Link) {
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
