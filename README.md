# Product Launch Website Template
A simple website template made using vanilla HTML, CSS and JS to help build product websites faster and more smoothly. This project was created to minimze the time needed to create a launch website for a new product as usually such websites have components which can be reused irrespective of the actual product. 


## Usage
To build your own website, simply follow the below steps-
1. Fork this repository into your own github account
2. Look through the below readme sections to understand how the code is organized
3. Customize the different components according to your needs, including the text, images and complete layouts
4. You'll need to run asimple local server to develop locally. I find Python's http.server the most user-friendly
5. Iterate, iterate, iterate
6. Once you're happy with the design, deploy (for free) using Netlify


## Project Organization
To keep this project fairly customizable and minimize the complexity associated with using it a Hugo-style organization is used. Basically, the single HTML page is broken up into partials. Each partial is associated with it's own HTML and CSS file. Thus, to customize the navbar (or header) you'll need to modify `/partials/navbar.html` and `/static/css/navbar.css`. The changes will automatically be reflected in your main page. Similarly, you can modify any of the components in the project. 

## Components
Based on my experience building such websites, the product launch website template is broken up into the following components-
1. Navbar
2. Fullpage Hero Landing Page
3. Sponsor Strip
4. Selling point 1 (text left, image right)
5. Selling point 2 (text right, image left)
6. Selling point 3 (same as SP1, with dark colors)
7. Pricing section
8. Links sections
9. Footer

All of the following can be seen below-

