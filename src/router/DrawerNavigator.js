import React, {useEffect, useState} from 'react';
import {Button, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {ContactScreen, HomeScreen, MessagesScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/routers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.925],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 32],
  });

  const borderLeftWidth = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  const marginBottom = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 32],
  });

  return (
    <>
      <Animated.View
        style={[
          {
            flex: 1,
            position: 'absolute',
            zIndex: -1,
            height: '80%',
            width: '10%',
            marginVertical: '10%',
            borderColor: '#9c85d2',
            overflow: 'hidden',
            borderLeftWidth,
            borderRadius,
            marginBottom,
            transform: [{scale}],
          },
        ]}
      />
      <Animated.View
        style={[
          {
            flex: 1,
            overflow: 'hidden',
            borderRadius,
            marginBottom,
            transform: [{scale}],
          },
        ]}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerMode: 'float',
            headerTitle: '',
            headerLeft: () => (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.openDrawer()}
                  style={styles.menuButton}>
                  <Feather name="menu" color="black" size={24} />
                </TouchableOpacity>
              </View>
            ),
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </Animated.View>
    </>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#6952b0'}}>
      <View>
        <Image
          source={{
            uri: 'https://ideas.byteridge.com/content/images/2020/10/ReactNavigation.jpeg',
            height: 150,
          }}
          resizeMode="cover"
          style={{
            height: 150,
            width: '100%',
          }}
        />
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerItemLabel}
        style={styles.drawerItem}
        icon={() => <Feather name="home" color="#6952b0" size={24} />}
      />
      <DrawerItem
        label="Messages"
        onPress={() => props.navigation.navigate('Messages')}
        labelStyle={styles.drawerItemLabel}
        style={styles.drawerItem}
        icon={() => <Feather name="mail" color="#6952b0" size={24} />}
      />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate('Contact')}
        labelStyle={styles.drawerItemLabel}
        style={styles.drawerItem}
        icon={() => <Feather name="users" color="#6952b0" size={24} />}
      />
    </DrawerContentScrollView>
  );
};

export default function DrawerNavigator() {
  return (
    <View style={{flex: 1, backgroundColor: '#6952b0'}}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerActiveBackgroundColor: 'transparent',
          drawerActiveTintColor: 'transparent',
          drawerInactiveTintColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          drawerContentContainerStyle: {
            backgroundColor: 'transparent',
          },
          drawerStyle: {
            width: '65%',
            backgroundColor: 'transparent',
          },
        }}>
        <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerItemLabel: {
    color: '#6952b0',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: -16,
  },
  drawerItem: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  menuText: {
    // color: 'black',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 3,
  },
  menuButton: {
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
  },
});
