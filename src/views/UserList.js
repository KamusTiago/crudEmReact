import React, { useContext } from "react";
import { Alert, FlatList, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir usuário', 'Deseja excluir este usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type:'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar rounded title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="ionicon"
                    iconProps={{name: "pencil", size: 25, color: "orange" }}
                />
                <ListItem.Chevron
                    onPress={() => { confirmUserDeletion(user) }}
                    type="ionicon"
                    iconProps={{name: "trash", size: 25, color: "red" }}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}