import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Animated, StyleSheet, Text, View,Dimensions  } from 'react-native';
import { Button, Image } from 'react-native';
import icon from './assets/jerry.png'


export default function FollowMouse() {

  const [location1, setLocation1] 
      = useState({
        x: null,
        y: null,
        marginLeft1: new Animated.Value(10),
        marginTop1: new Animated.Value(10)

      });
    const {marginTop1, marginLeft1} = location1;

    const [location2, setLocation2] 
    = useState({
      x: null,
      y: null,
      marginLeft2: new Animated.Value(10),
      marginTop2: new Animated.Value(10)

    });
  const {marginTop2, marginLeft2} = location2;

  const [location3, setLocation3] 
  = useState({
    x: null,
    y: null,
    marginLeft3: new Animated.Value(10),
    marginTop3: new Animated.Value(10)

  });
  const {marginTop3, marginLeft3} = location3;

  function radomLeft() {
    return Math.min(Math.random() * 300, Dimensions.get('window').width);
  }

  function radomTop() {
    return Math.min(Math.random() * 500, Dimensions.get('window').height);
  }

  function onPress(evt){
   
    setLocation1({
      marginLeft1: radomLeft(),
      marginTop1: radomTop()
    })

    setLocation2({
      marginLeft2: radomLeft(),
      marginTop2: radomTop()
    })
    
    setLocation3({
      marginLeft3: radomLeft(),
      marginTop3: radomTop()
    })
  }
  function onMove(evt){
    
    
    
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease(){
    setLocation1({
      marginLeft1: radomLeft(),
      marginTop1: radomTop()
    })

    setLocation2({
      marginLeft2: radomLeft(),
      marginTop2: radomTop()
    })
    
    setLocation3({
      marginLeft3: radomLeft(),
      marginTop3: radomTop()
    })
  }
  return (
    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
      style={styles.container}>
     
      <Animated.Image
       source = {icon}
       style={{transition: '0.5s', marginLeft: marginLeft1, marginTop: marginTop1,width:50,height:50}}
       >

      </Animated.Image>
      
      <Animated.Image
       source = {icon}
       style={{transition: '0.5s',marginLeft: marginLeft2, marginTop: marginTop2,width:50,height:50}}
       >

      </Animated.Image>
      
      <Animated.Image
       source = {icon}
       style={{transition: '0.5s',marginLeft: marginLeft3, marginTop: marginTop3,width:50,height:50}}
       >

      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});
