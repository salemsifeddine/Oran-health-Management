import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { 
    TextInput,
    Checkbox,
} from "react-native-paper";

const symptomsList = [
    {
        id: 1,
        text: "Nausea",
        checked: false,
    },
    {
        id: 2,
        text: "Fever",
        checked: false,
    },
    {
        id: 3,
        text: "Diarrhea",
        checked: false,
    },
    {
        id: 4,
        text: "Abdominal pain",
        checked: false,
    },
];
export default function AppointmentForm({ navigation }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
    });
    const [symptoms, setSymptoms] = useState(symptomsList)

    const handleCheckSymptom = (sympId) => {
        const updatedSymptoms = symptoms.map( symptom => {
            if (symptom.id === sympId) {
                return {
                    ...symptom,
                    checked: !symptom.checked,
                }
            }else{
                return symptom
            }
        })
        setSymptoms(updatedSymptoms)
    }
    return (
        <View style={styles.container}>
            <Text>Please fill-in the following information</Text>
            <View
                style={{
                    width: "90%",
                    justifyContent: "center",
                }}
            >
                <TextInput
                    label="First Name"
                    value={form.firstName}
                    onChangeText={(text) =>
                        setForm({ ...form, firstName: text })
                    }
                    dense={true}
                    mode="outlined"
                />
                <TextInput
                    label="Last Name"
                    value={form.lastName}
                    onChangeText={(text) =>
                        setForm({ ...form, lastName: text })
                    }
                    dense={true}
                    mode="outlined"
                />
                <TextInput
                    label="Age" // date-picker is more appropriate
                    value={form.age}
                    onChangeText={(text) => setForm({ ...form, age: text })}
                    dense={true}
                    mode="outlined"
                    style={{ width: "20%" }}
                />
                <Text>List of symptoms</Text>
                {symptoms.map((symptom) => {
                    return (
                        <View
                            key={symptom.id}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Checkbox
                                status={
                                    symptom.checked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    handleCheckSymptom(symptom.id);
                                }}
                            />
                            <Text>{symptom.text}</Text>
                        </View>
                    );
                })}
                <TextInput
                    label="Other symptoms" // date-picker is more appropriate
                    value={form.age}
                    onChangeText={(text) => setForm({ ...form, age: text })}
                    dense={true}
                    mode="outlined"
                    multiline={true}
                    numberOfLines={6}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "flex-end",
                    alignItems: 'center',
                }}
            >
                <Pressable 
                    style={{marginRight: 10,}}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={[{ color: "green" }]}>Cancel</Text>
                </Pressable>
                <TouchableOpacity
                    style={[styles.proceedButton]}
                    activeOpacity={0.5}
                    // onPress={dialCall}
                >
                    <Text style={[{ color: "white" }, styles.buttonText]}>
                        Proceed
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingLeft: 10,
    },
    firstNameField: {
        width: "50%",
    },
    proceedButton:{
        backgroundColor: 'blue',
        marginTop: 5,
        marginRight: 20,
        height: 40,
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
