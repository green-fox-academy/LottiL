/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

export class PostIt {
    private backgroundColor: string;
    private content: string;
    private textColor: string;

    constructor(backgroundColor: string, content: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.content = content;
        this.textColor = textColor;
    }
}