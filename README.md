# Party_Counter
Hi, this is me learning how to work with the DOM and JS together. I have styled this to be a fun counter to use. 
Here's what I've learned:

Making the buttons and using IDs in order to give each one a unique name (next time I will use 'querySelector' next time reduce the number of IDs in an HTML document, as it's better to have only 1 ID (for a single webpage) and many classes), the buttons that I have included are:

1. Counter - this is the number that will go up (increment), reset (return to the numerical value of 0), or decrease (decrement).
2. Decrement - to decrease the value; it can dip below 0 and into the negative range.
3. Increment - to increase the value.
4. Reset - to reset the numerical value back to 0.

5. Because the buttons need to do something, I had set up the index.js file in order to make the buttons interactive through 'clicks'.
6. In order to make the page dynamic and not static, I used the DOM to select the objects inside the documents in order to give them functionality. Because the machine will naturally forget the information, I had placed the DOM retrivals of the objects inside variables by using the 'getElementByID' and placed their ID names inside the parentheses.
7. In order to make the counter button be able to work, I had to store the default value into a variable called count, starting at the number 0.
8. Time for action, I take the variable names, with the DOM elements stored inside there before adding the 'addEventListener' next to it. Inside the parentheses, I put 'click' in order for anyone to click on the buttons (in other words execute the event). The arrow function (a new concept I tried) is a shorthand way of defining a function to pass as a callback function.
9. Finally, I created a function with the name 'updateCounterDisplay'. The 'counterDisplay' variable with the DOM element of the counter is next to '.textcontent' to return the text of the element (counterDisplay with the default button starting at 0) to show the text increasing, decreasing or to reset itself back to 0. The '.tostring()' converts the numerical value into a string.
