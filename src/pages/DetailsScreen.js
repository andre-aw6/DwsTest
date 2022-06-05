import React, { useState, useEffect } from 'react';
import { Text, Button, FlatList, Image, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:#126fb9;  
`;
const BandView = styled.View`
    
    align-items:center;
    justify-content:center;
    background-color:#FFF;
    margin-top:25px;   
    margin-bottom:2px;
    border-color:#126fb9;
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




function DetailsScreen() {

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

    

  return (
    <Page>
      
      {loading &&
        <LoadingArea>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <LoadingText>Carregando</LoadingText>
        </LoadingArea>
      }
     
      {!loading &&        
        <>
        <FlatList
            data={bands}
            renderItem={({item})=>(
            <BandView>
                <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
                <BandName>{item.name}</BandName>
            </BandView>
        )}
        keyExtractor={item => item.id}
      />
        </>
      }
        
    </Page>
  );
}



export default DetailsScreen;