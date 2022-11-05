import { Box, Button, Image, Text } from 'native-base'
import React from 'react'
import homeImage from '../assets/waystodo-welcome.png'
const Home = ({ navigation }) => {
  return (
    <Box alignItems="center">
      <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          source={homeImage}
          width={275}
          height={275}
          resizeMode="contain"
          alt={homeImage}
        />
      </Box>
      <Box display="flex" w={'90%'} marginTop={7}>
        <Text textAlign={'center'} fontSize={14}>
          Write your activity and finish your activity.{'\n'}
          Fast, Simple and Easy to Use.
        </Text>
        <Box
          display="flex"
          w={'100%'}
          mt={10}
          borderRadius={10}
          alignItems="center"
        >
          <Button
            w={'100%'}
            mt={5}
            bg="error.500"
            _hover={{ backgroundColor: 'error.600' }}
            py={3}
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Button>
          <Button
            w={'100%'}
            mt={5}
            bg="silver"
            _hover={{ backgroundColor: 'silver' }}
            py={3}
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Home
