import { Box, Button, HStack, Input, Text, View } from 'native-base'
import React from 'react'

const ListTodo = ({ navigation }) => {
  return (
    <Box bg="white" p={5}>
      <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View marginTop={2}>
          <Text bold={4} fontSize={30} marginTop={3}>
            Add Category
          </Text>
        </View>
      </Box>
      <Box w={'100%'} marginTop={7}>
        <Box display="flex" w={'100%'} mt={5} alignItems="center">
          <Input
            w={'100%'}
            bg="muted.200"
            placeholder="Name.."
            py={3}
            keyboardType={'Name..'}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('Name..', value)}
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
            onPress={() => navigation.navigate('Login')}
          >
            Add Category
          </Button>
        </Box>
      </Box>
      <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View marginTop={2}>
          <Text bold={4} fontSize={30} marginTop={3}>
            List Category
          </Text>
        </View>
      </Box>
      <Box w={'100%'} marginTop={7}>
        <Box display="flex" w={'100%'} mt={5} alignItems="center">
          <HStack>
            <View style={{ flexDirection: 'row' }}>
              <Button
                bold
                px="3"
                py="2"
                ml="3"
                mb={['4', '5']}
                bg="blue.400"
                rounded="lg"
              >
                Study
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                bold
                px="3"
                py="2"
                ml="3"
                mb={['4', '5']}
                bg="danger.400"
                rounded="lg"
              >
                HomeWork
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                bold
                px="3"
                py="2"
                ml="3"
                mb={['4', '5']}
                bg="yellow.400"
                rounded="lg"
              >
                Workout
              </Button>
            </View>
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}
export default ListTodo
