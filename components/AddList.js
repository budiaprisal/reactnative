import { Box, Button, Image, Input, Text } from 'native-base'
import React from 'react'
const AddList = ({ navigation }) => {
  return (
    <Box display="flex" flex={1} alignItems="center" marginTop={10} bg="white">
      <Box display="flex" w={'90%'}>
        <Text fontWeight="bold" fontSize={30}>
          Add List
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
            placeholder="Email"
            marginTop={5}
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
            py={3}
            keyboardType={'Name'}
            fontSize={15}
            borderRadius="sm"
            mt={5}
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('Name', value)}
          />

          <Input
            w={'100%'}
            bg="muted.200"
            h={100}
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
            Add List
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default AddList
