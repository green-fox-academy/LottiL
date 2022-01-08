/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

'use strict';
import { PostIt } from "./Post-it-class";

let firstPostIt = new PostIt("orange", "Idea 1", "blue");
let secondPostIt = new PostIt("pink", "Awesome", "black");
let thirdPostIt = new PostIt("yellow", "Superb!", "green");