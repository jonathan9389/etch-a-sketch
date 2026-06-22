Etch-a-Sketch:

A browser-based sketching tool built with vanilla JavaScript, demonstrating dynamic DOM manipulation, user input validation, and interactive styling.



Key Skills & Concepts Applied:

Dynamic DOM Manipulation: Programmatically generating responsive grid layouts using document.createElement() and dynamically calculated inline CSS (calc()).

Event Delegation: Optimizing performance by attaching a single mouseover event listener to the parent container instead of individual grid cells.

User Input Validation: Implementing a robust while loop to sanitize user prompts, handling edge cases like empty inputs, NaN values, and cancellations.

State Management via Data Attributes: Utilizing HTML data-* attributes to track and persistently update the darkening state (brightness) of individual elements upon repeated interaction.

CSS Filter API: Applying algorithmic color manipulation to dynamically darken element backgrounds on hover using style.filter = 'brightness()'.



Features

Generates a customizable $N \times N$ sketching grid (up to $100 \times 100$).

Draws using randomized RGB colors on the initial pass.

Progressively darkens cells by $10\%$ on each subsequent pass until completely black.