import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import addData from './app/Action/addName'
import { connect } from 'react-redux'

var Name, Password;
var add


class App extends Component {

  constructor() {
    super();
    this.state =
    {
      Name: "",
      Password: ""
    }
  }

  save = () => {
    var n = this.state.Name;
    var p = this.state.Password;
    if (n == "" || p == "") {
      alert("All Field is require");
      return
    }
    add.addData(n, p);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Login Through Redux</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formHeader}>LOG IN</Text>
          <TextInput placeholder='Enter Name' placeholderTextColor='black' defaultValue={this.state.Name}
            onChangeText={(n) => this.setState({ Name: n })} style={styles.input} />
          <TextInput placeholder="Enter Password" placeholderTextColor='black' secureTextEntry={true}
            onChangeText={(p) => this.setState({ Password: p })} style={styles.input} defaultValue={this.state.Password} />
          <TouchableOpacity style={styles.buttonContainer} onPress={this.save.bind(this)}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text>{Name}  {Password}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
  },
  formHeader:
  {
    marginTop: '45%',
    fontSize: 30,
    fontWeight: '700',
    color: 'black'
  },
  input:
  {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    color: 'black',
    margin: '3%',
    fontSize: 20,
  },
  buttonContainer:
  {
    height: '8%',
    width: '31%',
    backgroundColor: 'black',
    alignItems: 'center',
    margin: '10%',
  },
  buttonText:
  {
    marginTop: '3%',
    fontSize: 24,
    color: 'snow',
  },
  appHeader: {
    backgroundColor: 'black',
    height: '9%',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 21,
    marginTop: '5%',
    fontWeight: 'bold',
    color: 'snow'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '91%'
  }
}
)

const mapStatetoProps = (state) => {
  console.log(state.count);
  Name = state.count.Name;
  Password = state.count.Password;
  return (
    {
      count: state.count
    }
  )
}

const ActionCreator = Object.assign(
  {},
  { addData: addData }
)

const mapDispatchtoProps = (dispatch) => {
  add = bindActionCreators(ActionCreator, dispatch);
  console.log(add)
  return (
    {
      actions: add
    }
  )
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)