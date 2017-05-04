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
    nuclearExplosion: require("../assets/img/nuclear-explosion.gif")
  },
  letConst: {
    explicitBlockedScopedError: require("../assets/img/let-and-const/block-scoped-let-error.png")
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

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/let-and-const/trick-question-1.js.example")}
          ranges={[
            { loc: [0, 8], title: "let and const" },
            { loc: [0, 4], note: "Define explicit block scope" },
            { loc: [1, 3], note: "Define variable using let" },
            { loc: [5, 7], note: "Then we log it" },
            { loc: [0, 7], title: "What's the output?" }
          ]} />

        <Slide transition={["slide"]} bgImage={images.global.nuclearExplosion.replace("/", "")} bgDarken={0.75}>
          <Appear fid="13">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              ReferenceError!
            </Heading>
          </Appear>

          <Appear fid="14">
            <Image src={images.letConst.explicitBlockedScopedError.replace("/", "")} margin="30px auto 0" height="300px"/>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
