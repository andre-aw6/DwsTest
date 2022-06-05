import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'; 

import { store, persistor } from './src/store';

import MainStack from './src/navigators/MainStack';




export default () => {
  return (

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              
                <MainStack />
            
            </NavigationContainer>
          </PersistGate>
         </Provider>

  );
}
