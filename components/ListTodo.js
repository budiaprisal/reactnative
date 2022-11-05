import {
  Box,
  Button,
  Card,
  CheckIcon,
  FormControl,
  Image,
  Input,
  ScrollView,
  Select,
  Text,
  View,
} from 'native-base'
import React from 'react'
import personal from '../assets/cart.png'
import personall from '../assets/calender.png'
import personalll from '../assets/ico.png'
import personallll from '../assets/Ellipse.png'

const ListTodo = ({ navigation }) => {
  return (
    <Box bg="white" p={5}>
      <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <view marginTop={2}>
          <Text bold={4} fontSize={30} marginTop={3}>
            Hi Radif{'\n'}
          </Text>
          <Text bold={4} color="danger.500" fontSize={14}>
            200 List
          </Text>
        </view>
        <Image source={personal} width={70} height={70} alt={personal} />
      </Box>
      <Box w={'100%'} marginTop={7}>
        <Box display="flex" w={'100%'} mt={5} alignItems="center">
          <Input
            w={'100%'}
            bg="muted.200"
            placeholder="Search List...."
            py={3}
            keyboardType={'Search List'}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            onChangeText={(value) => handleChangeText('Search List', value)}
          />
        </Box>
      </Box>
      <FormControl w="3/4" maxW="300" marginTop={4} isRequired isInvalid>
        <View style={{ flexDirection: 'row' }}>
          <Input type={'date'} mr={3} w={20} h={12} mt={2} color="gray" />

          <Select
            ml={2}
            w={20}
            backgroundColor={'#0000001F'}
            accessibilityLabel="Choose Service"
            placeholder="Category"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Study" value="study" />
            <Select.Item label="HomeWork" value="hw" />
            <Select.Item label="Workout" value="wo" />
          </Select>

          <Select
            ml={2}
            w={20}
            backgroundColor={'#0000001F'}
            accessibilityLabel="Choose Service"
            placeholder="Status"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="Done" value="Done" />
            <Select.Item label="ToDo" value="ToDo" />
            <Select.Item label="Doing" value="Doing" />
          </Select>
        </View>
      </FormControl>
      <ScrollView h={280} w="150%" showsVerticalScrollIndicator={false}>
        <Card
          w={250}
          h={200}
          shadow={7}
          backgroundColor={'blue.100'}
          borderRadius={10}
          mt={5}
        >
          <Box
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View marginTop={2}>
              <Text bold fontSize={16} marginTop={2}>
                Study - Golang
              </Text>
            </View>
            <Button
              px="3"
              py="3"
              ml="5"
              bg="primary.400"
              rounded="xl"
              onPress={() => navigation.navigate('DetailList')}
            >
              Study
            </Button>
          </Box>
          <Box
            marginTop={4}
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text fontSize={15} marginTop={1}>
                Learn Golang to {'\n'}improve fundamental{'\n'} and familiarze
                coding
              </Text>
            </View>
            <Image
              source={personallll}
              width={50}
              height={50}
              alt={personallll}
            />
          </Box>
          <Box marginTop={1}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={personall}
                width={30}
                height={30}
                alt={personall}
              />
              <Text>Date 19-20-2020</Text>
            </View>
          </Box>
        </Card>

        <Card
          w={250}
          h={180}
          shadow={7}
          backgroundColor="green.100"
          borderRadius={10}
          mt={5}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text strikeThrough mt={1} bold>
              Home Work -
            </Text>
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
          <Box
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <view marginTop={2}>
              <Text strikeThrough fontSize={13} marginTop={2}>
                Learn Html to improve fundamentals {'\n'}and familiarze with
                coding
              </Text>
            </view>
            <Image
              source={personalll}
              width={50}
              height={50}
              alt={personalll}
            />
          </Box>
          <Box>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={personall}
                width={30}
                height={30}
                alt={personall}
              />
              <Text>Date 19-20-2020</Text>
            </View>
          </Box>
        </Card>
        <Card
          w={250}
          h={180}
          shadow={7}
          backgroundColor="red.100"
          borderRadius={10}
          mt={5}
        >
          <Box
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <view marginTop={2}>
              <Text bold strikeThrough fontSize={16} marginTop={2}>
                Study - HTML
              </Text>
            </view>
            <Button px="3" py="3" ml="5" bg="primary.400" rounded="xl">
              Study
            </Button>
          </Box>
          <Box
            marginTop={4}
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text strikeThrough fontSize={13} marginTop={2}>
                DO Homework match probality
              </Text>
            </View>
            <Image
              source={personalll}
              width={50}
              height={50}
              alt={personalll}
            />
          </Box>
          <Box marginTop={4}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={personall}
                width={30}
                height={30}
                alt={personall}
              />
              <Text>Date 19-20-2020</Text>
            </View>
          </Box>
        </Card>
        <Card
          w={250}
          h={200}
          shadow={7}
          backgroundColor={'yellow.100'}
          borderRadius={10}
          mt={5}
        >
          <Box
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <view marginTop={2}>
              <Text bold fontSize={16} marginTop={2}>
                Study - Javascript
              </Text>
            </view>
            <Button px="3" py="3" ml="5" bg="primary.400" rounded="xl">
              Study
            </Button>
          </Box>
          <Box
            marginTop={4}
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text fontSize={15} marginTop={1}>
                Learn Javascript to {'\n'}improve fundamental{'\n'} and
                familiarze coding
              </Text>
            </View>
            <Image
              source={personallll}
              width={50}
              height={50}
              alt={personallll}
            />
          </Box>
          <Box marginTop={1}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={personall}
                width={30}
                height={30}
                alt={personall}
              />
              <Text>Date 19-20-2020</Text>
            </View>
          </Box>
        </Card>
      </ScrollView>
    </Box>
  )
}
export default ListTodo

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
