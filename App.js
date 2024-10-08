import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { getSalesman } from './helper/get';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InovicePage from './comp/InovicePage';
import LoginPage from './comp/LoginPage';
import Settings from './comp/Settings';
import ReciptPage from './comp/ReciptPage';
import PartyPage from './comp/PartyPage';
const Stack = createStackNavigator();

export default function App() {

  const [salesman, setSalesman] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getSalesman().then((res) => {
      if (res.salesman) {
        setSalesman(res.salesman);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor={"white"} barStyle="dark-content"/>
        <Text>loading....</Text>
      </View>
    );
  }

  if (!salesman) {
    return (
      <View style={styles.container}>
        <LoginPage setUser={setSalesman} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="Setting"
            children={(navigation) => (
              <Settings nav={navigation} sman={salesman} />
            )}
          />
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="PartyPage"
            component={PartyPage}
          />
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="InvoicePage"
            children={(navigation) => (
              <InovicePage nav={navigation} sman={salesman} />
            )}
          />
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="Collection Statements"
            children={(navigation) => (
              <ReciptPage nav={navigation} />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});