import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvide } from "./context/UsersContext";


const Stack = createStackNavigator()

// const { navigation:navigate } = this.props;

export default props => {

  return (
    <UsersProvide>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Lista de usuários",
              headerRight: () => (
                <Button 
                  onPress={() => navigation.navigate('UserForm')}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: "Formulário de usuários"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </UsersProvide> 
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}