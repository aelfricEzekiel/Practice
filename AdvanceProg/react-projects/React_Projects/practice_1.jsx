function App(){
    const [count, setCount] = React.useState(0);

    const handlePress = () => {
        setCount(count + 1);
    }
    
    const style = StyleSheet.create({
        container: {
            flex: '1',
            alignItems: 'center',
            justiftyContent: 'center',
        },
        button: {
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: 5,
        },
    });
    
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={style.button}>
                    Print Hello World!
                </Text>
                <Text>Shet</Text>
                <Text style={style.button}>Count to {count + 1}</Text>
            </TouchableOpacity>
        </View>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);