import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

const Page = styled.SafeAreaView`
  flex:1;  
  background-color:#126fb9;
  
`;
const TotalText = styled.Text`
  color:#e7f1f8;
  font-size:28px;
  text-align:center;
  margin-top:18px;
  margin-bottom:10px;
`;
const BandContainer = styled.View`
  flex:1;
  align-items:center;
  margin-top:30px;
  background-color:#89b7dc;
  border-radius: 35px;
  
`;
const BandItem = styled.TouchableHighlight`
    width:350px;
    height:55px;
    background-color:#FFF;
    margin-top:12px;   
    margin-bottom:12px;
    border-radius:15px;
   
`;
const BandName = styled.Text`
    color: #126fb9;
    font-size:20px;
    text-align:center;
    margin-top:12px;
    margin-bottom:8px;
   
`;

const LoadingArea = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const LoadingText = styled.Text`
    color:#FFF
`;

function HomeScreen() {

    const [loading, setLoading] = useState(true);
    const [bands, setBands] = useState([]);

    useEffect(() => {
      const requestBands = async () => {
          setLoading(true);
          const req = await fetch("https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api/bands/");
          const json = await req.json();

          if(json) {
            setBands(json);
                }
            setLoading(false);
        
         }
           requestBands();
    }, [])

  const navigation = useNavigation();
  const list = useSelector(state => state.bands.list);

  return (
    <Page>
      <TotalText>Bands: {bands.length}</TotalText>
        <BandContainer>
          {loading &&
            <LoadingArea>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <LoadingText>Loading</LoadingText>
            </LoadingArea>
          }
        
          {!loading &&        
            <>        
              <FlatList
                  data={bands}
                  renderItem={({item})=>(
                  <BandItem underlayColor='#b8d4ea' onPress={()=>navigation.navigate('Details')} activeOpacity={2}>
                      <BandName>{item.name}</BandName>
                  </BandItem>
              )}
                keyExtractor={item => item.id}
              />
            </>
          }
        </BandContainer>
        
    </Page>
  );
}



export default HomeScreen;