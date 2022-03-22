/* You can work in the html or in a separate js file. Like:
<script>
1)  Append every paragraph with the last one's content.
2)  Do the same again, but you should keep the cat strong.
</script>
OR */

const animals = document.querySelector('.animals').innerText;
const others = document.querySelectorAll('.apple, .balloon, .cat');
others.forEach((node)=>node.innerHTML = node.innerText.concat(" " + animals));

//innerText helyett innerHTML, és akkor viszi a formázást is.

/* const paragraphs = document.querySelectorAll(‘.apple, .balloon, .cat’);
paragraphs.forEach((paragraph) => {
  const animals = document.querySelector(‘.animals’).textContent;
  paragraph.textContent += ` ${animals}`;
}); */