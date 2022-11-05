import { Box, Button, Image, Input, Text } from 'native-base'
import React from 'react'
import WaysTODOAuthImage from '../assets/waystodo-auth.png'

//

const Register = ({ navigation }) => {
  return (
    <Box display="flex" flex={1} alignItems="center" bg="white">
      <Image
        source={WaysTODOAuthImage}
        width={250}
        height={250}
        resizeMode="contain"
        alt={WaysTODOAuthImage}
      />
      <Box display="flex" w={'90%'}>
        <Text fontWeight="bold" fontSize={30}>
          Register
        </Text>
        <Box display="flex" w={'100%'} mt={5} alignItems="center">
          <Input
            w={'100%'}
            bg="muted.200"
            placeholder="Email"
            py={3}
            keyboardType={'email-address'}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('email', value)}
          />

          <Input
            w={'100%'}
            bg="muted.200"
            placeholder="Name"
            marginTop={5}
            py={3}
            keyboardType={'Name'}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('Name', value)}
          />

          <Input
            w={'100%'}
            bg="muted.200"
            placeholder="Password"
            py={3}
            mt={5}
            fontSize={15}
            secureTextEntry={true}
            borderRadius="sm"
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('password', value)}
          />
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
          >
            Register
          </Button>
          <Text mt={3}>
            Join Us Before ?
            <Text
              color="danger.500"
              fontWeight="bold"
              mx={2}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
export default Register
