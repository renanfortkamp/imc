import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const StackHome = createStackNavigator()
const DrawerApp = createDrawerNavigator()

import Home from './src/pages/Home/Home'
import List from './src/pages/List/List'
import Result from './src/pages/Result/Result'

function StackHomeNavigator() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <StackHome.Screen name="Result" component={Result} />
    </StackHome.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <DrawerApp.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#01C0A6',
          },
          drawerLabelStyle: {
            color: '#FFF'
          },
        }}
        initialRouteName="HomeStack"
      >
        <DrawerApp.Screen
          name="HomeStack"
          component={StackHomeNavigator}
          options={{
            headerShown: false
          }}
        />
        <DrawerApp.Screen
          name="List"
          component={List}
        />
      </DrawerApp.Navigator>
    </NavigationContainer>
  )
}