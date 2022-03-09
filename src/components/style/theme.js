import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    primary: 'Bellefair, serif',
    secondary: 'Barlow Condensed, sans-serif'
  },
  colors: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    terciary: '#FFFFFF'
  }       
})

export default theme