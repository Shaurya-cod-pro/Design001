
# Design 1
This is a Design of A sign up page.

# About Project
### HTML CODE
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SIGN UP</title>
    <link rel="stylesheet" href="Index.css" />
  </head>
  <body>
    <div id="main">
      <video src="Bg.mp4" loop autoplay muted></video>
      <div id="signup">
        <form>
            <br>
          <legend>Sign Up</legend>
          <h1 class="name-h1">Name:</h1>
          <input type="text" class="name" required />
          <br />
          <h1 class="name-h1">Email:</h1>
          <input type="email" class="name" />
          <br />
          <h1 class="name-h1">Password:</h1>
          <input type="password" class="name" id="password" />
          <div id="checkbox" onclick="myFunction()"> show </div>
          <br>
          <input type="submit" placeholder="Sign Up" id="submit" />
        </form>
      </div>
    </div>
    <script src="Index.js"></script>
  </body>
</html>
```
### CSS CODE
```Css
html,Body {
     width:100%;
     height:100%;
}
#main>video{
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: -1;
      
}
#signup {
      max-width: 22svw;
      height: 55svh;
      backdrop-filter: blur(3px);
      transform: translate(40svw,15svh);
}
#signup>form>legend {
      font-size: 2svw;
      text-align: center;
      font-weight: 900;
}

.name-h1{
      font-size: 1.2svw;
      text-align: center;
}

.name {
      width: 15svw;
      padding: 0svh 1svw;
      border: 0.2svw black solid;
      border-radius: 2svw;
      margin: 0svh 3.5svw;

}

#checkbox{
      font-size: 1svw;
      position: relative;
      left: 32svh;
      top: 2svh;
      border: 1px black solid;
      width: 3svw;
      background-color: white;
      border-radius:30%;
      cursor: pointer;
      text-align: center;
      font-weight: 900;
}

#submit{
      border: 1px black solid;
      transform: translate(9svw,2.4svh);
      border-radius: 30%;
      font-weight: 900;
      padding: 3px;
      font-size: 2svh;
      color: black;
}
```
### JS CODE
```
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

```

## 🚀 About Me
I'm a Frontend Developer
I have experties in : 
  - Htmt
  - Css
    - Tailwind
  - js
    - Gsap
    - Locomotive
    - typed.js
    - etc.
