import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';

const instruction = Platform.select({
    ios:'Press Cmd+R to reload,\n' +' Cmd+D or shake for dev menu',
    android:'Double tap R on your keyboard to reload, \n'+
    'Shake or pres menu button for dev menu'
});

type Props = {};
export default class Coba extends Component<Props>{
    render(){
        return (
            <View style={styles.parent}>
                <View style={{
                            backgroundColor:'#03a9f4',
                            width:"100%",
                            height:100,
                            borderRadius:4,
                            flexDirection:'row',
                            padding:10,
                            marginBottom:20,
                            position:'relative'
                        }}>
                    <View style={{backgroundColor:'#e91e63',width:20,height:20,borderRadius:100,position:'absolute',right:-10,top:-10}}></View>
                </View>
                <View style={[{
                                backgroundColor:'#ffc107',
                                marginLeft:0,
                                justifyContent:'center',
                                alignItems:'center'
                            },styles.box]}>
                    <Text>Center</Text>
                </View>
                <View style={[
                            {backgroundColor:'#4caf50'},
                            styles.box]}></View>
                <View style={[{
                                backgroundColor:'#ffc107',
                                marginRight:0,
                            },styles.box]}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingTop:10,
        flex:1,
        alignItems:'center',
        flexWrap:'wrap',
        paddingHorizontal:14
    },
    box:{
        flex:1,
        height:100,
        borderRadius:4,
        marginHorizontal:4,
    },
});