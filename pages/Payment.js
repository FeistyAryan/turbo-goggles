import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Payment = () => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#e6e6ea' }}>
            <View style={{position:'absolute',top:0,flexDirection:'row',alignItems:'center',marginTop:40,width:'100%',backgroundColor:'#f99333',height:70,}}>
        <EvilIcons
        style={{marginLeft:10}}
                    name='chevron-left'
                    size={25}
                />
            <Text style={{fontSize:18,marginLeft:25}}>Make Payment</Text>
        </View>
            <View style={{width:'100%',paddingLeft:25,marginBottom:20,marginTop:50}}>
            <Text style={{fontSize:20,}}>Payment Options</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10, paddingBottom: 25 }}>
                <FontAwesome
                    style={{ paddingLeft: 5 }}
                    name='circle-thin'
                    size={20}
                    color='red'
                />


                <View style={{ width: 200 }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Credit Card</Text>
                    <Text style={{ flexWrap: 'wrap', textAlign: 'center', opacity: 0.6 }}>Visa,MasterCard,Maestro</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#f99333', paddingVertical: 8, paddingHorizontal: 8, textAlign: 'center' }}>
                    <Text style={{ fontSize: 15 }}>Pay <MaterialIcons
                        style={{}}
                        name='currency-rupee'
                        size={12}
                    />2799</Text>
                </TouchableOpacity>
                <View style={{}}></View>
            </View>

            <View style = {{width :"87%", borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                <View style={{ width: 200, flexDirection: 'row', alignItems: 'center',marginTop: 20, paddingBottom: 25,  }}>
                    <FontAwesome
                        style={{ paddingLeft: 5 }}
                        name='circle-thin'
                        size={20}
                    />


                    <View style={{ width: 200 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Debit Card</Text>
                        <Text style={{ flexWrap: 'wrap', textAlign: 'center', opacity: 0.6 }}>Visa,MasterCard,Maestro</Text>
                    </View>

                    <View style={{}}></View>
                </View>
            </View>

            <View style = {{width :"87%", borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                <View style={{ width: 200, flexDirection: 'row', alignItems: 'center',marginTop: 20, paddingBottom: 25,  }}>
                    <FontAwesome
                        style={{ paddingLeft: 5 }}
                        name='circle-thin'
                        size={20}
                    />


                    <View style={{ width: 200 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Wallets</Text>
                        <Text style={{ flexWrap: 'wrap', textAlign: 'center', opacity: 0.6 }}>Amazon,Paytm,Phonepe</Text>
                    </View>

                    <View style={{}}></View>
                </View>
            </View>

            <View style = {{width :"87%", borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                <View style={{ width: 200, flexDirection: 'row', alignItems: 'center',marginTop: 20, paddingBottom: 25,  }}>
                    <FontAwesome
                        style={{ paddingLeft: 5 }}
                        name='circle-thin'
                        size={20}
                        
                    />


                    <View style={{ width: 200 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Net Banking</Text>
                        <Text style={{ flexWrap: 'wrap', textAlign: 'center', opacity: 0.6 }}>HDFC,SBI,BOB,ICICI</Text>
                    </View>

                    <View style={{}}></View>
                </View>
            </View>

            <View style = {{width :"87%", borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                <View style={{ width: 200, flexDirection: 'row', alignItems: 'center',marginTop: 20, paddingBottom: 25,  }}>
                    <FontAwesome
                        style={{ paddingLeft: 5 }}
                        name='circle-thin'
                        size={20}
                    />


                    <View style={{ width: 200 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>UPI Payments</Text>
                        <Text style={{ flexWrap: 'wrap', textAlign: 'center', opacity: 0.6 }}>Google Pay,Mobikwik</Text>
                    </View>

                    <View style={{}}></View>
                </View>
            </View>
            
            <View style = {{paddingTop:8,flexDirection:'row',position:'absolute',bottom:0,height:75,width:'100%',backgroundColor:'#fff',justifyContent:'space-between',paddingRight:5}}>
                <View>
                <View style = {{flexDirection:'row',}}>
                <MaterialIcons
                style={{marginTop:4,marginRight:-3}}
                name = 'currency-rupee'
                size = {21}
                />
                <Text style={{fontSize:20, fontWeight:"bold"}}>2799</Text><Text style={{fontSize:10,top:8,opacity:.6}}>[Exclusive Tax]</Text>
                </View>
                <View  style={{marginLeft:7,borderBottomWidth:1,borderBottomColor:'grey',width:80}}>
                    <Text style = {{fontSize:12}}>For 4/4 Seats</Text>
                </View>
                </View>
                
                
                <View style={{}}>
                    <TouchableOpacity style = {{paddingVertical:15,backgroundColor:'#f99333',paddingHorizontal:20,borderRadius:5}}>
                        <Text>Trip Details</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </View>
    )
}

export default Payment
