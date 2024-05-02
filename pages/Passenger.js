import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Passenger = () => {
    return (
        <>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:40,width:'100%',backgroundColor:'#ffbf00',height:70}}>
        <EvilIcons
        style={{marginLeft:10}}
                    name='chevron-left'
                    size={25}
                />
            <Text style={{fontSize:18,marginLeft:25}}>Add Passengers' Details</Text>
        </View>
        <SafeAreaView style = {{height:"74%"}}>
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <EvilIcons
                    name='user'
                    size={20}
                />
                <Text>Passengers' Information</Text>
            </View>

            <View style={styles.passDets}>
                <Text style={{ marginVertical: 18 }}>Passenger 1</Text>
                <TextInput
                    style={{fontSize:17, backgroundColor: '#F4F4F8',height:40,borderRadius:5,paddingLeft:12 }}
                    placeholder="Full Name"
                >
                </TextInput>

                <View style={{ flexDirection:'row',alignItems:'center',width:'80%',marginVertical:18,justifyContent:'space-between' }}>
                    <TextInput
                        style={{fontSize:18,height:37,borderRadius:5, textAlign:'center',backgroundColor: '#F4F4F8',width:152,marginRight:8 }}
                        placeholder="Gender"
                    >
                    </TextInput>
                    <TextInput
                        style={{fontSize:17,height:37,borderRadius:5, textAlign:'center', backgroundColor: '#F4F4F8',width:80 }}
                        placeholder="Age"
                    >
                    </TextInput>
                </View>
            </View>

            <View style={styles.passDets}>
                <Text style={{ marginVertical: 18 }}>Passenger 2</Text>
                <TextInput
                    style={{fontSize:17, backgroundColor: '#F4F4F8',height:40,borderRadius:5,paddingLeft:12 }}
                    placeholder="Full Name"
                >
                </TextInput>

                <View style={{ flexDirection:'row',alignItems:'center',width:'80%',marginVertical:18,justifyContent:'space-between' }}>
                    <TextInput
                        style={{fontSize:18,height:37,borderRadius:5, textAlign:'center',backgroundColor: '#F4F4F8',width:152,marginRight:8 }}
                        placeholder="Gender"
                    >
                    </TextInput>
                    <TextInput
                        style={{fontSize:17,height:37,borderRadius:5, textAlign:'center', backgroundColor: '#F4F4F8',width:80 }}
                        placeholder="Age"
                    >
                    </TextInput>
                </View>
            </View>

            <View style={styles.passDets}>
                <Text style={{ marginVertical: 18 }}>Passenger 3</Text>
                <TextInput
                    style={{fontSize:17, backgroundColor: '#F4F4F8',height:40,borderRadius:5,paddingLeft:12 }}
                    placeholder="Full Name"
                >
                </TextInput>

                <View style={{ flexDirection:'row',alignItems:'center',width:'80%',marginVertical:18,justifyContent:'space-between' }}>
                    <TextInput
                        style={{fontSize:18,height:37,borderRadius:5, textAlign:'center',backgroundColor: '#F4F4F8',width:152,marginRight:8 }}
                        placeholder="Gender"
                    >
                    </TextInput>
                    <TextInput
                        style={{fontSize:17,height:37,borderRadius:5, textAlign:'center', backgroundColor: '#F4F4F8',width:80 }}
                        placeholder="Age"
                    >
                    </TextInput>
                </View>
            </View>

            <View style={styles.passDets}>
                <Text style={{ marginVertical: 18 }}>Passenger 4</Text>
                <TextInput
                    style={{fontSize:17, backgroundColor: '#F4F4F8',height:40,borderRadius:5,paddingLeft:12 }}
                    placeholder="Full Name"
                >
                </TextInput>

                <View style={{ flexDirection:'row',alignItems:'center',width:'80%',marginVertical:18,justifyContent:'space-between' }}>
                    <TextInput
                        style={{fontSize:18,height:37,borderRadius:5, textAlign:'center',backgroundColor: '#F4F4F8',width:152,marginRight:8 }}
                        placeholder="Gender"
                    >
                    </TextInput>
                    <TextInput
                        style={{fontSize:17,height:37,borderRadius:5, textAlign:'center', backgroundColor: '#F4F4F8',width:80 }}
                        placeholder="Age"
                    >
                    </TextInput>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        <View style = {{paddingTop:8,flexDirection:'row',position:'absolute',bottom:0,height:75,width:'100%',backgroundColor:'grey',justifyContent:'space-between',paddingRight:5}}>
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
                    <TouchableOpacity style = {{paddingVertical:15,backgroundColor:'#F99333',paddingHorizontal:20,borderRadius:5}}>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },

    head: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        paddingBottom: 2,
        marginTop:25,
        paddingBottom:5
    },

    passDets: {
        width: '100%',
    }
})


export default Passenger
