1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
   🔑 Key differences:
   getElementById → single element by id
   getElementsByClassName → multiple elements, live collection
   querySelector → first element with CSS selector
   querySelectorAll → all elements, static NodeList

2. How to create and insert a new element into the DOM
   You can create and insert elements using the DOM API:

   > Step 1: Create a new element
   > Step 2: Add content or attributes
   > Step 3: Insert into DOM
   > appendChild() → adds inside, at the end
   > prepend() → adds inside, at the beginning

3. What is Event Bubbling and how does it work?
   Definition: Event bubbling is the process where an event triggered on a child element propagates up (bubbles) through its ancestors (parent, grandparent, …) until it reaches document.

4. What is Event Delegation? Why is it useful?
   Definition: Event delegation is a technique where you attach a single event listener to a parent element, and handle events for its child elements inside that handler (using event.target).
   Why useful?
   More efficient → one listener instead of many.
   Works for dynamically added elements (future elements).
5. Difference between preventDefault() and stopPropagation()
   preventDefault(): Prevents the default action of an element.
   stopPropagation(): Stops the event from bubbling up to parent elements.
   preventDefault() = stops browser’s default behavior
   stopPropagation() = stops event bubbling
