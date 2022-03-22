/*   Write the image's url to the console.
  Replace the image with a picture of your favorite animal.
  Make the link point to the Green Fox Academy website.
  Disable the second button.
  Replace its text with 'Don't click me!'.
 */

const imageURL = document.getElementsByTagName("img");
console.log(imageURL[0].getAttribute("src"));

const newImageURL = "https://lovarda.eu/wp-content/uploads/2019/02/thumbnail_received_559839381181784.jpg";
imageURL[0].setAttribute("src", newImageURL)

const link = document.getElementsByTagName('a');
const greenFoxWebPage = "https://www.greenfoxacademy.com/";
link[0].setAttribute("href",greenFoxWebPage );

const firsButton = document.querySelector("button")
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button