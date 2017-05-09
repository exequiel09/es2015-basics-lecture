// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  global: {
    nuclearExplosion: require("../assets/img/nuclear-explosion.gif"),
    shocked1: require("../assets/img/shocked-1.gif"),
    frustratedProgrammer: require("../assets/img/frustrated-programmer.gif")
  },
  letConst: {
    explicitBlockedScopedError: require("../assets/img/let-and-const/block-scoped-let-error.png"),
    ifBlockScopedError: require("../assets/img/let-and-const/if-let-error.png"),
    constError: require("../assets/img/let-and-const/const-error.png")
  },
  arrowFns: {
    trickQuestion1: require("../assets/img/arrow-functions-and-lexical-this/trick-question-1-result.png"),
    objectLiteralTypeError: require("../assets/img/arrow-functions-and-lexical-this/object-literal-type-error.png"),
    objectPrototypeError: require("../assets/img/arrow-functions-and-lexical-this/object-prototype-error.png"),
    objectConstructorError: require("../assets/img/arrow-functions-and-lexical-this/object-constructor-error.png")
  }
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ES2015 Basics
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={6}>
            Exequiel Ceasar Navarrete
          </Text>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What is ES2015?
            </Heading>
          </Appear>

          <Appear fid="2">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Features</Heading>
          <List>
            <Appear fid="3">
              <ListItem>let and const</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Enhanced Object literals</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Arrows and Lexical this</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Template Strings</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem>Classes</ListItem>
            </Appear>
            <Appear fid="7">
              <ListItem>Destructuring</ListItem>
            </Appear>
            <Appear fid="8">
              <ListItem>Default - Rest - Spread</ListItem>
            </Appear>
            <Appear fid="9">
              <ListItem>Promises</ListItem>
            </Appear>
            <Appear fid="10">
              <ListItem>and many more ...</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            Enough talk! Let's hurry up and go deep dive with the features, shall we?
          </Text>
        </Slide>

        {/* [let/const] ::start */}

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            let and const
          </Heading>

          <Appear fid="11">
            <Text margin="30px 0 0" textColor="primary" size={1}>
              <Code textColor="primary" size={1}>let</Code> and <Code textColor="primary" size={1}>const</Code>
              are block-scoped variable declaration constructs.
            </Text>
          </Appear>

          <Appear fid="12">
            <Text margin="30px 0 0" textColor="primary" size={1}>
              Block scopes include: if, switch, loops, functions and the explicit block scope <Code textColor="primary" size={1}>{ "{}" }</Code>.
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/let-and-const/before-es2015.js.example")}
          ranges={[
            { loc: [0, 8], title: "Before ES2015" },
            { loc: [0, 3], note: "Define Variables" },
            { loc: [4, 7], note: "Then we log it" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          textAlign="left"
          display="block"
          code={require("raw-loader!../assets/codes/let-and-const/es2015-beyond.js.example")}
          ranges={[
            { loc: [0, 17], title: "let and const" },
            { loc: [0, 3], note: "Define two variables" },
            { loc: [4, 8], note: "Define function with a constant inside" },
            { loc: [9, 15], note: "Show the output in the console" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.nuclearExplosion.replace("/", "")} bgDarken={0.25}>
          <Appear fid="13">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              ReferenceError!
            </Heading>
          </Appear>

          <Appear fid="14">
            <Image src={images.letConst.explicitBlockedScopedError.replace("/", "")} margin="30px auto 0" height="300px"/>
          </Appear>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/let-and-const/trick-question-2.js.example")}
          ranges={[
            { loc: [0, 8], title: "let and const" },
            { loc: [0, 4], note: "Define variable inside an if statement" },
            { loc: [2, 3], note: "Define variable using let" },
            { loc: [5, 7], note: "Then we log it" },
            { loc: [0, 7], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.shocked1.replace("/", "")} bgDarken={0.25}>
          <Appear fid="15">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              ReferenceError!
            </Heading>
          </Appear>

          <Appear fid="16">
            <Image src={images.letConst.ifBlockScopedError.replace("/", "")} margin="30px auto 0" height="300px"/>
          </Appear>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/let-and-const/trick-question-3.js.example")}
          ranges={[
            { loc: [0, 12], title: "let and const" },
            { loc: [0, 2], note: "Define variable using const" },
            { loc: [3, 5], note: "Show it to the console" },
            { loc: [6, 8], note: "Modify the value" },
            { loc: [9, 11], note: "Show the modified value" },
            { loc: [0, 12], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.frustratedProgrammer.replace("/", "")} bgDarken={0.5}>
          <Appear fid="17">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              TypeError!
            </Heading>
          </Appear>

          <Appear fid="18">
            <Image src={images.letConst.constError.replace("/", "")} margin="30px auto 0" height="300px"/>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Best practice?
          </Heading>

          <Appear fid="19">
            <Text textColor="primary" size={6} margin="20px auto 0">
              Use <Code textColor="primary" size={1}>const</Code> always for values to be stored that will not change in the future.
            </Text>
          </Appear>

          <Appear fid="20">
            <Text textColor="primary" size={6} margin="20px auto 0">
              Use <Code textColor="primary" size={1}>let</Code> if you plan to change the value some other time in the future.
            </Text>
          </Appear>
        </Slide>

        {/* [let/const] ::end */}

        {/* [Enhanced Object Literals] ::start */}

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Enhanced Object Literals
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/enhanced-object-literals/before-es2015.js.example")}
          ranges={[
            { loc: [0, 19], title: "Before ES2015" },
            { loc: [0, 3], note: "Define variables using const" },
            { loc: [4, 12], note: "Create object using object literals and add some properties and methods" },
            { loc: [13, 15], note: "Add a computed property to the object using array notation" },
            { loc: [16, 18], note: "Show the contents of the object" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/enhanced-object-literals/es2015-beyond.js.example")}
          ranges={[
            { loc: [0, 22], title: "Enhanced Object Literals" },
            { loc: [0, 3], note: "Define variables using const" },
            { loc: [4, 18], note: "Create object using object literals and add some properties and methods" },
            { loc: [6, 8], note: "Define shorthand property name and value when variable and property name is the same" },
            { loc: [10, 12], note: "Add a computed property to the object using array notation" },
            { loc: [13, 17], note: "Define object method using shorthand syntax" },
            { loc: [19, 21], note: "Show the contents of the object" }
          ]} />

        {/* [Enhanced Object Literals] ::end */}

        {/* [Arrow Functions and Lexical this] ::start */}

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Arrow Functions and Lexical <Code textColor="primary" textSize="1rem">this</Code>
          </Heading>

          <Appear fid="21">
            <Text margin="30px 0 0" textColor="primary" size={1}>
              Arrows are a function shorthand using the <Code textColor="primary">=></Code> syntax.
              They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
              They support both expression and statement bodies. Unlike functions, arrows share the same lexical this as their surrounding code.
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/arrow-before-es2015.js.example")}
          ranges={[
            { loc: [0, 22], title: "Before ES2015" },
            { loc: [0, 3], note: "Define variables" },
            { loc: [4, 8], note: "Loop through the elements of array" },
            { loc: [9, 21], note: "Show each elements of the array every 500ms" },
            { loc: [11, 15], note: "Show the array element based on the value of the counter" },
            { loc: [16, 20], note: "Clear the interval timer" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/arrow-es2015-beyond.js.example")}
          ranges={[
            { loc: [0, 22], title: "Arrow Functions" },
            { loc: [0, 3], note: "Define variables" },
            { loc: [4, 8], note: "Loop through the elements of array" },
            { loc: [9, 21], note: "Show each elements of the array every 500ms" },
            { loc: [11, 15], note: "Show the array element based on the value of the counter" },
            { loc: [16, 20], note: "Clear the interval timer" }
          ]} />

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            There are various ways on how to write arrow functions: without parenthesis and one-liner.
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/without-parenthesis.js.example")}
          ranges={[
            { loc: [0, 23], title: "Without Parenthesis" },
            { loc: [0, 2], note: "Define variables" },
            { loc: [3, 7], note: "Get the squared value of each array element" },
            { loc: [8, 17], note: "Perform map-reduce to get a single value" },
            { loc: [11, 14], note: "Get the cubed value of each array element" },
            { loc: [14, 17], note: "Get the sum of all the cubed values" },
            { loc: [14, 17], note: "Without parethesis is on for functions with 1 parameter" },
            { loc: [19, 22], note: "Show the output to the console" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/one-liner.js.example")}
          ranges={[
            { loc: [0, 17], title: "One Liner" },
            { loc: [0, 2], note: "Define variables" },
            { loc: [3, 5], note: "Get the squared value of each array element" },
            { loc: [6, 11], note: "Perform map-reduce to get a single value" },
            { loc: [9, 10], note: "Get the cubed value of each array element" },
            { loc: [10, 11], note: "Get the sum of all the cubed values" },
            { loc: [13, 16], note: "Show the output to the console" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/trick-question-1.js.example")}
          ranges={[
            { loc: [0, 40], title: "Before ES2015 - Lexical this" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 17], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [18, 22], note: "Define stopSound method that will stop the timer" },
            { loc: [23, 26], note: "Add a utility method for initiating barking" },
            { loc: [27, 30], note: "Add a utility method for stopping barking" },
            { loc: [31, 34], note: "We create a dog instance and start barking immediately" },
            { loc: [35, 39], note: "Stop the barking after 5s" },
            { loc: [0, 40], title: "What's wrong in this code?" },
            { loc: [14, 15], note: "this.animalSound is undefined" },
            { loc: [14, 15], note: "Value of this is equal to window" },
            { loc: [14, 15], note: "How to fix this?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.shocked1.replace("/", "")} bgDarken={0.25}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Animal sound is undefined
          </Heading>

          <Image src={images.arrowFns.trickQuestion1.replace("/", "")} margin="30px auto 0" height="75px"/>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/lexical-this-before-es2015-1.js.example")}
          ranges={[
            { loc: [0, 42], title: "Before ES2015 - Fix 1" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 19], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [20, 24], note: "Define stopSound method that will stop the timer" },
            { loc: [25, 28], note: "Add a utility method for initiating barking" },
            { loc: [29, 32], note: "Add a utility method for stopping barking" },
            { loc: [33, 36], note: "We create a dog instance and start barking immediately" },
            { loc: [37, 41], note: "Stop the barking after 5s" },
            { loc: [11, 19], note: "The fixed version" },
            { loc: [12, 13], note: "Store the value of this to a variable" },
            { loc: [16, 17], note: "Reference the animalSound property using the new variable" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/lexical-this-before-es2015-2.js.example")}
          ranges={[
            { loc: [0, 42], title: "Before ES2015 - Fix 2" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 17], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [18, 21], note: "Define stopSound method that will stop the timer" },
            { loc: [22, 25], note: "Add a utility method for initiating barking" },
            { loc: [26, 29], note: "Add a utility method for stopping barking" },
            { loc: [30, 33], note: "We create a dog instance and start barking immediately" },
            { loc: [34, 38], note: "Stop the barking after 5s" },
            { loc: [11, 17], note: "The fixed version" },
            { loc: [12, 13], note: "Create an anonymous fn and store it in a variable" },
            { loc: [15, 16], note: "Modify the value of this using fn.bind and passing the actual this value" },
            { loc: [11, 17], note: "The fixed version" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/lexical-this-es2015-beyond.js.example")}
          ranges={[
            { loc: [0, 40], title: "Lexical this on ES2015" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 17], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [18, 21], note: "Define stopSound method that will stop the timer" },
            { loc: [22, 25], note: "Add a utility method for initiating barking" },
            { loc: [26, 29], note: "Add a utility method for stopping barking" },
            { loc: [30, 33], note: "We create a dog instance and start barking immediately" },
            { loc: [34, 38], note: "Stop the barking after 5s" },
            { loc: [11, 17], note: "The fixed version" },
            { loc: [13, 16], note: "Simply replace the normal function with arrow function" }
          ]} />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>When not to use Arrow Functions?</Heading>

          <List>
            <Appear fid="22">
              <ListItem>Object Literal</ListItem>
            </Appear>
            <Appear fid="23">
              <ListItem>Object Prototype</ListItem>
            </Appear>
            <Appear fid="24">
              <ListItem>Object Constructor</ListItem>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/when-not-to-use-object-literal.js.example")}
          ranges={[
            { loc: [0, 12], title: "Arrow Fn on Object Literal" },
            { loc: [2, 8], note: "Define an object" },
            { loc: [3, 4], note: "With a numerical array property" },
            { loc: [4, 7], note: "Computes the sum numerical array" },
            { loc: [9, 11], note: "Call the sum method of the object" },
            { loc: [0, 12], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.nuclearExplosion.replace("/", "")} bgDarken={0.25}>
          <Appear fid="25">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              TypeError!
            </Heading>
          </Appear>

          <Appear fid="26">
            <Image src={images.arrowFns.objectLiteralTypeError.replace("/", "")} margin="30px auto 0" height="300px"/>
          </Appear>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/when-not-to-use-object-literal-fix.js.example")}
          ranges={[
            { loc: [0, 12], title: "Object Literal - Fixed" },
            { loc: [2, 8], note: "Define an object" },
            { loc: [3, 4], note: "With a numerical array property" },
            { loc: [4, 7], note: "Computes the sum numerical array" },
            { loc: [9, 11], note: "Call the sum method of the object" },
            { loc: [4, 7], note: "Fixed by using the enhanced method syntax definition" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/when-not-to-use-object-prototype.js.example")}
          ranges={[
            { loc: [0, 40], title: "Arrow Fn - Object Prototype" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 17], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [18, 22], note: "Define stopSound method that will stop the timer" },
            { loc: [23, 26], note: "Add a utility method for initiating barking" },
            { loc: [27, 30], note: "Add a utility method for stopping barking" },
            { loc: [31, 34], note: "We create a dog instance and start barking immediately" },
            { loc: [35, 39], note: "Stop the barking after 5s" },
            { loc: [0, 40], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.frustratedProgrammer.replace("/", "")} bgDarken={0.5}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            TypeError!
          </Heading>

          <Image src={images.arrowFns.objectPrototypeError.replace("/", "")} margin="30px auto 0" height="500px"/>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/arrows-and-lexical-this/when-not-to-use-object-constructor.js.example")}
          ranges={[
            { loc: [0, 40], title: "Arrow Fn - Object Constructor" },
            { loc: [0, 10], note: "Define a dog function constructor" },
            { loc: [11, 17], note: "Define makeSound method that will be invoked every n seconds" },
            { loc: [18, 22], note: "Define stopSound method that will stop the timer" },
            { loc: [23, 26], note: "Add a utility method for initiating barking" },
            { loc: [27, 30], note: "Add a utility method for stopping barking" },
            { loc: [31, 34], note: "We create a dog instance and start barking immediately" },
            { loc: [35, 39], note: "Stop the barking after 5s" },
            { loc: [0, 40], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.shocked1.replace("/", "")} bgDarken={0.5}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            TypeError!
          </Heading>

          <Image src={images.arrowFns.objectConstructorError.replace("/", "")} margin="30px auto 0" height="500px"/>
        </Slide>

        {/* [Arrow Functions and Lexical this] ::end */}

        {/* [Template Strings] ::start */}

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Template Strings
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/template-strings/before-es2015.js.example")}
          ranges={[
            { loc: [0, 20], title: "Before ES 2015" },
            { loc: [0, 15], note: "Define a person object with some information" },
            { loc: [2, 4], note: "Define object properties" },
            { loc: [5, 9], note: "Return the information of the user using concatenation" },
            { loc: [10, 14], note: "Return the information of the user using concatenation and adding some formatting" },
            { loc: [16, 19], note: "Show the output to the console" }
          ]} />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/template-strings/es2015-beyond.js.example")}
          ranges={[
            { loc: [0, 21], title: "ES 2015 Template Strings" },
            { loc: [0, 16], note: "Define a person object with some information" },
            { loc: [2, 4], note: "Define object properties" },
            { loc: [5, 9], note: "Return the user info using template strings" },
            { loc: [10, 16], note: "Return the user info using template strings with some formatting" },
            { loc: [17, 20], note: "Show the output to the console" }
          ]} />

        {/* [Template Strings] ::end */}

      </Deck>
    );
  }
}
