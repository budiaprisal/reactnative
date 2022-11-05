import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import ListTodo from './components/ListTodo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import DetailList from './components/DetailList'
import AddCategory from './components/AddCategory'
import AddList from './components/AddList'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="ListTodo"
          component={MyTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DetailList" component={DetailList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: 'screen',
        headerTintColor: 'indigo',
        headerStyle: { backgroundColor: 'pink' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let colorName = color

          if (route.name === 'ListTodo') {
            iconName = focused ? 'list' : 'list-outline'
          } else if (route.name === 'AddCategory') {
            iconName = focused ? 'add' : 'add-outline'
          } else if (route.name === 'AddList') {
            iconName = focused ? 'document-text' : 'document-text-outline'
          }

          return <Ionicons name={iconName} size={20} color={colorName} />
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen
        name="ListTodo"
        component={ListTodo}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddList"
        component={AddList}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}
