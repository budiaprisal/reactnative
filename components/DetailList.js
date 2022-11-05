import { Box, Button, Card, Image, Text, View } from 'native-base'
import React from 'react'
import personall from '../assets/calender.png'
import personallll from '../assets/Ellipse.png'

const DetailList = ({ navigation }) => {
  return (
    <Box bg="white" p={4} margin={1}>
      <Card
        w={250}
        h={500}
        shadow={7}
        backgroundColor={'blue.100'}
        borderRadius={10}
        mt={5}
      >
        <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View marginTop={2}>
            <Text bold fontSize={16} marginTop={2}>
              Study - Golang
            </Text>
          </View>
          <Button px="3" py="3" ml="5" bg="primary.400" rounded="xl">
            Study
          </Button>
        </Box>
        <Box
          marginTop={4}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <View>
            <Text fontSize={15} marginTop={1}></Text>
          </View>
          <Image
            source={personallll}
            width={50}
            height={50}
            alt={personallll}
          />
        </Box>

        <View>
          <Text fontSize={15} marginTop={4}>
            Learn Golang to improve fundamental and families with coding
          </Text>
          <Text fontSize={15} marginTop={4}>
            advantes of Go {'\n'}
            go has adnvatege over other langgaue level with failry easy a{
              '\n'
            }{' '}
          </Text>
          <Text fontSize={15} marginTop={4}>
            List Material : {'\n'}
            1. Instaltion{'\n'} 2. setup go modules{'\n'} 3. setup gopath {'\n'}
            4.go command
          </Text>
        </View>
        <Box marginTop={3}>
          <View marginTop={3} style={{ flexDirection: 'row' }}>
            <Image source={personall} width={30} height={30} alt={personall} />
            <Text>Date 19-20-2020</Text>
          </View>
        </Box>
      </Card>
    </Box>
  )
}
export default DetailList

function Example() {
  const [selected, setSelected] = React.useState(1)
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="300px"
        alignSelf="center"
      >
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? 'home' : 'home-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? 'cart' : 'cart-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? 'account' : 'account-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  )
}
