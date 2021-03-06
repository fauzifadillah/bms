import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   View,
   FlatList,
   Image, RefreshControl, Button, Switch, ScrollView, ImageBackground, ActivityIndicator, ListView
   } from 'react-native';
import firebase from 'firebase';
import {Modal, TouchableHighlight, Alert} from 'react-native';
import { material } from 'react-native-typography';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Grid, Col, Row } from 'native-base';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
export default class RelayController extends Component {

  constructor() {
         super();
         this.state = {
               isLoading: true,
               DCurrentB1: null,
               DCurrentB2: null,
               PowerB1: null,
               PowerB2: null,
               VoltageB1: null,
               VoltageB2: null,
               TempB1: null,
               TempB2: null,
               SOCB1: null,
               SOCB2: null,
               HealthB1: 100,
               HealthB2: 100,
               LifetimeB1: null,
               LifetimeB2: null,
               modalVisible: false,
         };
         //True to show the loader
    this.state = { refreshing: false };
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  blah() {
    // this.setState({ refreshing: false});
    console.log('hahaha');
    firebase.database().ref('DCurrentB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ DCurrentB1: nilai });
        console.log(this.state.DCurrentB1);


    }.bind(this));

    firebase.database().ref('DCurrentB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ DCurrentB2: nilai });
        console.log(this.state.DCurrentB2);


    }.bind(this));

    firebase.database().ref('PowerB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ PowerB1: nilai });
        console.log(this.state.PowerB1);


    }.bind(this));

    firebase.database().ref('PowerB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ PowerB2: nilai });
        console.log(this.state.PowerB2);


    }.bind(this));

    firebase.database().ref('VoltageB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ VoltageB1: nilai });
        console.log(this.state.VoltageB1);


    }.bind(this));

    firebase.database().ref('VoltageB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ VoltageB2: nilai });
        console.log(this.state.VoltageB2);


    }.bind(this));

    firebase.database().ref('TempB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ TempB1: nilai });
        console.log(this.state.TempB1);


    }.bind(this));

    firebase.database().ref('TempB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ TempB2: nilai });
        console.log(this.state.TempB2);


    }.bind(this));

    firebase.database().ref('SOCB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ SOCB1: nilai });
        console.log(this.state.SOCB1);


    }.bind(this));

    firebase.database().ref('SOCB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ SOCB2: nilai });
        console.log(this.state.SOCB2);


    }.bind(this));

    firebase.database().ref('HealthB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ HealthB1: nilai });
        console.log(this.state.HealthB1);


    }.bind(this));

    firebase.database().ref('HealthB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ HealthB2: nilai });
        console.log(this.state.HealthB2);


    }.bind(this));



    firebase.database().ref('LifetimeB1/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ LifetimeB1: nilai });
        console.log(this.state.LifetimeB1);


    }.bind(this));

    firebase.database().ref('LifetimeB2/Value').on('value', function (x) {
        // console.log(x.val());
        nilai = x.val();
        // console.log(nilai);
        this.setState({ LifetimeB2: nilai });
        console.log(this.state.LifetimeB2);


    }.bind(this));

    return new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
// http://arduino.esp8266.com/stable/package_esp8266com_index.json
  }
  _onRefresh() {
      //Clear old data of the list
      // this.setState({ dataSource: [] });
      //Call the Service to get the latest data
      this.setState({refreshing: true})
      this.blah().then(() => {
        this.setState({refreshing: false});
        if(this.state.HealthB1 <= 80 && this.state.HealthB2 <= 80) {
            this.setState({ modalVisible: true})
        } else {
            this.setState({ modalVisible: false})
        }
      });

    }
  componentDidMount() {
      if(this.state.HealthB1 <= 80 && this.state.HealthB2 <= 80) {
          this.setState({ modalVisible: true})
      } else {
          this.setState({ modalVisible: false})
      }
    }

  componentWillMount() {
        var config = {
          apiKey: "AIzaSyAWZcKg_R7GpGNRieDPyOhPBFuF8uJDOtE",
          authDomain: "cobaar-es.firebaseapp.com",
          databaseURL: "https://cobaar-es.firebaseio.com",
          projectId: "cobaar-es",
          storageBucket: "cobaar-es.appspot.com",
          messagingSenderId: "91927243739"

        };
        // if (!firebase.apps.length) {
           firebase.initializeApp(config);

        // }

        setInterval(function(){
            this.blah();
        }.bind(this), 1000);



      }

     render() {

        return (
          <ScrollView bounces={true} style={styles.backgroundImage} refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />
        }>
          <Text style={{ fontSize: 23, marginLeft:20, marginRight: 20,marginTop: 30, color: '#0c3953', textAlign: 'center'}}> Battery Management System (BMS) </Text>
          <Modal
                    animationType="slide"
                    backdropColor={'green'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',marginTop: 22, padding: 20}}>
                      <View style={{flex: 1,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',marginTop: 22, padding: 20,backgroundColor: "white"}}>
                        <Text style={{ fontSize: 23, marginLeft:20, marginRight: 20,marginTop: 30, color: '#0c3953', textAlign: 'center'}}> Battery Management System (BMS) </Text>
                        <Text style={{ fontSize: 23, marginLeft:20, marginRight: 20,marginTop: 30, color: '#0c3953', textAlign: 'center'}}> SoH kurang dari 80!</Text>
                        <TouchableHighlight>

                          <Button onPress={() => {
                            this.setState({modalVisible: false});
                          }} title="Tutup" style={{ fontSize: 23, marginLeft:20, marginRight: 20,marginTop: 30, color: '#0c3953', textAlign: 'center'}}/>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </Modal>
          <Grid container spacing={24}>

            <Content style={{ marginLeft: 20,marginRight: 20, marginTop:30,flex:1, overflow:'hidden'}}>
              <Card >
                <CardItem>
                  <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Discharge Current </Text>
                  <Right>
                  </Right>
                 </CardItem>
                 <CardItem>
                   <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>
                   <Right>
                  <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.DCurrentB1} A</Text>
                   </Right>
                  </CardItem>
                  <CardItem>
                    <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>
                    <Right>
                  <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.DCurrentB2} A</Text>
                    </Right>
                   </CardItem>
               </Card>

               <Card>
                 <CardItem>

                   <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Power </Text>

                   <Right>

                   </Right>
                  </CardItem>

                  <CardItem>

                    <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                    <Right>
                    <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.PowerB1} Watt </Text>
                    </Right>
                   </CardItem>
                   <CardItem>

                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                     <Right>
                  <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.PowerB2} Watt </Text>
                     </Right>
                    </CardItem>

                </Card>
                <Card>
                  <CardItem>

                    <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Voltage </Text>

                    <Right>

                    </Right>
                   </CardItem>

                   <CardItem>

                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                     <Right>
                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.VoltageB1} V</Text>
                     </Right>
                    </CardItem>
                    <CardItem>

                      <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                      <Right>
                      <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.VoltageB2} V</Text>
                      </Right>
                     </CardItem>

                 </Card>
                 <Card >
                   <CardItem>

                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> SoC </Text>

                     <Right>

                     </Right>
                    </CardItem>

                    <CardItem>

                      <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                      <Right>
                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.SOCB1} % </Text>
                      </Right>
                     </CardItem>
                     <CardItem>

                       <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                       <Right>
                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.SOCB2} %</Text>
                       </Right>
                      </CardItem>

                  </Card>
                  <Card>
                    <CardItem>

                      <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery Health </Text>

                      <Right>

                      </Right>
                     </CardItem>

                     <CardItem>

                       <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                       <Right>
                       <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.HealthB1} %</Text>
                       </Right>
                      </CardItem>
                      <CardItem>

                        <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                        <Right>
                     <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.HealthB2} %</Text>
                        </Right>
                       </CardItem>

                   </Card>
                   <Card>
                     <CardItem>

                       <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Est. Lifetime </Text>

                       <Right>

                       </Right>
                      </CardItem>

                      <CardItem>

                        <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                        <Right>
                        <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.LifetimeB1} cycle</Text>
                        </Right>
                       </CardItem>
                       <CardItem>

                         <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                         <Right>
                         <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.LifetimeB2} cycle</Text>
                         </Right>
                        </CardItem>

                    </Card>
                    <Card style={{  marginBottom:20, marginTop:2}}>
                      <CardItem>

                        <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Temperature </Text>
                       </CardItem>

                       <CardItem>

                         <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 1 </Text>

                         <Right>
                         <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.TempB1} °C</Text>
                         </Right>
                        </CardItem>
                        <CardItem>

                          <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> Battery 2 </Text>

                          <Right>
                          <Text style={{ fontSize: 13, marginTop: 5, color: '#0c3953', textAlign: 'center'}}> {this.state.TempB2} °C</Text>
                          </Right>
                         </CardItem>

                     </Card>
                  </Content>


          </Grid>

          </ScrollView>
        );


     }
   }
   const styles = StyleSheet.create({
        textWithShadow:{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            fontSize: 19,
            textAlign: 'center',
            textShadowOffset: {width: 0.2, height: 1},
            textShadowRadius: 1
        },
        TextStyle:{
          ...material.display1,
          fontSize: 19,
          textAlign: 'center',
          color: '#0c3953',
        },
        backgroundImage: {
          flex: 1,
          backgroundColor: '#A4DE02',
          resizeMode: 'stretch', // or 'stretch'
          width: null,
          height: null,
        },
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        }
   });
