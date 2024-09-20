import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => { // cannot give id directly as argument, since we're using navigation
    const [result, setResult] = useState(null); // null = default value
    const id = navigation.getParam('id');


    const getResult = async id => {
        const response = await yelp.get('/${id}');
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
        }, []);

       if(!result)
       {
        return null;
       }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri: item}}/>
            }}/>
        </View>
        // <View>
        //     <Text>
        //         OK
        //     </Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;