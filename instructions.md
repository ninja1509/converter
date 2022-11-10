<img src="images/IDSN-new-logo.png" width="200"> 

# Hands on lab: Conversion using HTML,CSS & JS

# Objectives

To create a Unit conversion Web page <br>
<img src="FinalImg.jpg"/>

1. Structuring a webpage using HTML Tags
2. Providing design to the webpage using CSS
4. Test your knowledge by adding more features

# Task 1: Structuring a webpage using HTML Tags

1. Open a fresh theia environment and create a new file. Click on File -> New file. Save it by naming it  **index.html**

<img src="images/task-1-1"/>

2. Create a basic structure for HTML in **index.html** with the title of `Conversion`

<img src="images/task-1-2"/>

3. In the body, Create a heading 1 with the text `Conversion`

```
<h1> Build a Web Conversion calculator </h1>
```
4. Create a div tag with the class name as main
> **Note:** This class name will be used in CSS to provide styling in the next task.

```html
<div class="main">


<div>
```

5. You need to create Unit conversion for:
  <ol type="i">
    <li> Temprature </li>
    <li>  Weight</li>
    <li> Distance </li>
  </ol>

So let's create anchor tags with buttons, So that when we click them it redirects us to the section of the page. We will be using the id to redirect. ids are represented with the **#** symbol.

```html
<div class="options">
  <a href="#b1"><button>Temprature</button></a>
  <a href="#b2"><button>Weight</button></a>
  <a href="#b3"><button>Distance</button></a>
</div>
```

Now, Initially let's create only for **Temperature**

6. Create a new div tag and give it a class name and id as **"b1"** in within the previously created div tag (main)

Now your code should look like this:
```html
<div class="main">
  <div class="b1" id="b1">

  </div>
<div>
```
7. Now create the following:
  <ol type="a">
    <li> Display <b>Temprature</b> using Heading 2 tag  </li>
    <li> Create two input fields and 2 labels</li>
    <li> Create a button to convert </li>
  </ol>


8. Create a heading 2 tag within the newly created div tag

```html
  <h2> Temprature </h2>
```

9. Now create Input fields, and a button.
create these using the following code:

```html
  <div class="b1" id="b1">
    <h2> Temprature </h2>
    <label for="Temprature">Celcius</label> <br/> <input type="number"> <br/>
    <button onclick="temprature()"> Convert </button> <br/>
    <input type="number">    <br/>  <label for="Temprature">Fahrenheit</label>  
  </div>
<div>
```

The input field uses label tag mostly to provide a name for the same. <br>
input fields should have type to give the type of input needed to take in from the user <br>

So far your code should look like this: 
<img src="images/task-1-9"/>

10. Run your application using live server to see if it renders like this

<img src="images/task-1-10"/>

# Task 2: Providing design to the webpage using CSS

1. Link style.css to your index.html using ` <link rel="stylesheet" href="style.css">  ` 
>**Hint:** Include it in the head tag

2. Create a new file (File -> New file). Name it **style.css**

3. In style.css file, horizontally align every text to center using appropriate properties
>**Note:** To select every element in the code use `*{ }` 

```css
*{
    text-align: center;
    margin: 10px;
}
```

4. Give the entire body a gradiant background

```css
body{
    background-image: linear-gradient(to right,rgb(172, 80, 172), rgb(219, 168, 207), rgb(168, 196, 219)) ;

}
```

Here, the linear-gradient means that you want the colors to be faded in a liner way. This can be done in directions i.e., to right, to left 
Next, the colors you want to show in the gradiant. Choose any color and it will be represented in the form of gradiant. 

<br>

There are multiple ways to give background to a web app. One can use **background-color: COLOR-NAME** as well.

5. Design the buttons using the following code:
When we write the tag name, it will give the same design to all of the buttons in the page

```css
button{
    font-size: 20px;
    border: transparent;
    width: fit-content;
    background-color: rgb(173, 218, 173);
    border-radius: 40px;
    padding-right: 15px;
    padding-left: 15px;
    
}
```

6. Now, lets design the b1 class

```css
.b1{
    border-top: solid green;
    background-color: white;
    border-top-width: 20px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 50px;
}
```

# Weight and Distance.

## Weight - KG to Pounds

1. Create an HTML structure similar to Tempraure. Name the class and id as b2

<details>
  <summary>Click to see how the code in html should look like</summary>

```html
<div class="b2" id="b2">
  <h2>Weight</h2>
  <label for="Weight">KG</label> <br/> <input type="number"> <br/>
  <button onclick="weight()"> Convert </button>  <br/> 
  <input type="number">  <br/>  <label for="Weight">Pounds</label>    
</div>
  ```
</details>

2. Now, since the design for b1 and b2 are going to be the same, both the classes can share the same style.

All that needs to be done is use a comma to seperate the same.

For example:

b1 already has a design, now for b2 to have the same, we will use the following:

```css
.b1, .b2{
    border-top: solid green;
    background-color: white;
    border-top-width: 20px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 50px;
}
```
Here, no aditional design is added, only the name of the class is added. This can be done between classes as well tags in different combinations.


## Distance - KM to Miles:

1. Create an HTML structure similar to Tempraure and Weight. Name the class and id as b3

<details>
  <summary>Click to see how the code in html should look like</summary>

```html
<div class="b3" id="b3">
  <h2>Distance</h2>
  <label for="Distance">KM</label> <br/> <input type="number">  <br/>
  <button onclick="distance()"> Convert </button> <br/>
  <input type="number">  <br/>  <label for="Distance">Miles</label>
</div>
  ```
</details>

Add a footer at the end of the page that redirects to the course page:

```HTML
    <footer>Learn more about HTML and CSS by clicking<a href="LINK">here</a></footer>
```
Replace the `LINK`with the URL of the course page.

At this point of time, your application code for HTML should look like this.

<img>

2. b3 will have the same design as b1 and b2. So to make it use the same design, add b3 along with the rest.

```css
.b1, .b2, .b3{
    border-top: solid green;
    background-color: white;
    border-top-width: 20px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 50px;
}
```

Code for CSS should look like this.
<img>

Now, if you click on each buttons on top, It should redirect to the section where the id belongs to.

<img>

# Optional

## Try out more styles:

1. Give the ribbons different colors using the id sntead of class name this time for bettwe practice. 
> **NOTE:** You need not to remove the existing code given for b1, b2, and b3.

<details>
  <summary>Click to see how the code in html should look like</summary>

```css
#b1{
    border-top: solid lightcoral;
    border-top-width: 20px;
}

#b2{
    border-top: solid lightseagreen;
    border-top-width: 20px;
}

#b3{
    border-top: solid purple;
    border-top-width: 20px;
}

  ```
</details>


Your final app should look like this:

<img>



Congratulations! You've successfully completed this lab

## Author(s)

Samaah Sarang

## Changelog
| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 18-Ocober-2022 | 1.0 | Samaah | Lab and initial version created |
|   |   |   |   |
