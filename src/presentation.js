// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from 'spectacle'

import Terminal from 'spectacle-terminal'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={6} caps textColor="secondary">
            Making your terminal work for you
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            (and not the other way around)
          </Text>
          <Text margin="20px 0 0">
            Giancarlo Galliani Pecchia<br />
            @juancarlito88
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What's the problem?
          </Heading>
          <Text>
            As developers, we can wind up becoming slaves to the terminal. Have you ever
            struggled...
          </Text>
          <List>
            <ListItem>remembering a command you've used previously?</ListItem>
            <ListItem>remembering what git branch you're on?</ListItem>
            <ListItem>navigating to a deeply nested directory?</ListItem>
          </List>
          <Text>
            We can make the terminal work for us instead and help us with all these things!
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            What's the solution?
          </Heading>
          <Text>You've got options, from easy to adventurous:</Text>
          <List>
            <ListItem>Change your terminal application</ListItem>
            <ListItem>Change your shell language</ListItem>
            <ListItem>Customize your shell</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading textColor="secondary" size={4} caps>
            Change your terminal application
          </Heading>
          <Text>Here are some you can check out:</Text>
          <List>
            <ListItem>iTerm2 (the gold standard)</ListItem>
            <ListItem>Hyper (so pretty)</ListItem>
            <ListItem>cmder (for Windows peeps)</ListItem>
            <ListItem>Xiki (Linux needs love too!)</ListItem>
            <ListItem>Your text editor (e.g. VSCode)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4}>Change your shell language</Heading>
          <Text>
            On macOS and Linux, the default language run by the terminal is called 'bash'. (Windows
            now can run bash too, yay!)
          </Text>
          <Text>Bash is great, but again, you have options...</Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3}>zsh</Heading>
          <List>
            <ListItem>Takes bash and makes it better</ListItem>
            <ListItem>Better memory and completion of commands</ListItem>
            <ListItem>Can add plugins, themes, and custom prompts</ListItem>
            <ListItem>Is easily installed and managed using oh-my-zsh</ListItem>
            <ListItem>Compatible with bash scripts and configuration</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3}>fish</Heading>
          <List>
            <ListItem>The 'friendly interative shell'</ListItem>
            <ListItem>Highlights syntax as you type</ListItem>
            <ListItem>Really great autocompletion</ListItem>
            <ListItem>Has its own set of prompts, plugins, etc</ListItem>
            <ListItem>*Isn't totally compatible with bash scripts :(</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4}>Customize your shell</Heading>
          <Text>
            You can get into the nitty gritty of your shell and customize it to your liking.
          </Text>
          <Text>Add aliases, functions, etc. to any shell.</Text>
          <Text>You can add themes, prompts, and plugins to zsh, fish, and others.</Text>
          <List>
            <ListItem>bash -> edit .bashrc </ListItem>
            <ListItem>zsh -> edit .zshrc </ListItem>
            <ListItem>fish -> edit config.fish</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={4}>Aliases and functions</Heading>
          <Text>
            If you find yourself typing in the same thing over and over again, you can use an alias.
          </Text>
          <Text>You can run common commands faster that way</Text>
          <CodePane
            source={`
          // .bashrc
          alias dev='npm run dev'
          alias commit='git commit -a'
          // etc...
          `}
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary" />
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
