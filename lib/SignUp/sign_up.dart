import 'package:coduzion_demo/HomePage.dart';
import 'package:coduzion_demo/LOGIN/login.dart';
import 'package:coduzion_demo/mainpage.dart';
import 'package:flutter/material.dart';

import 'package:fluttertoast/fluttertoast.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/services.dart';

class DemoSignUp extends StatefulWidget {
  const DemoSignUp({Key? key}) : super(key: key);

  @override
  State<DemoSignUp> createState() => _DemoSignUpState();
}

class _DemoSignUpState extends State<DemoSignUp> {
  bool _validate = false;

  final GlobalKey<FormState> _formkey = GlobalKey<FormState>();
// Initially password is obscure

  static final RegExp nameRegExp = RegExp('[a-zA-Z]');

  static final RegExp numberRegExp = RegExp(r'\d');
  bool _isHidden = true;
  void _togglePasswordView() {
    setState(() {
      _isHidden = !_isHidden;
    });
  }

  Widget build(BuildContext context) {
    @override
    var prefixIcon;
    var value;

    var textEditingController;
    return Scaffold(
        body: Form(
            key: _formkey,
            child: ListView(children: <Widget>[
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Ink(
                        decoration: ShapeDecoration(
                          color: Colors.grey.shade200,
                          shape: CircleBorder(),
                        ),
                        child: IconButton(
                          icon: const Icon(Icons.arrow_back),
                          onPressed: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => SignUp()));
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                height: 75,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 10, horizontal: 20),
                      child: Text(
                        "SIGN UP",
                        style: GoogleFonts.lora(
                            fontSize: 40, fontWeight: FontWeight.bold),
                      ),
                    )
                  ],
                ),
              ),
              Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 2, horizontal: 20),
                      child: Text(
                        "Register Via email and sign up with us.",
                        style: GoogleFonts.oswald(fontSize: 15),
                      ),
                    )
                  ],
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: TextFormField(
                    validator: (value) => value!.isEmpty
                        ? 'Enter Your Name'
                        : (nameRegExp.hasMatch(value)
                            ? null
                            : 'Enter a Valid Name'),
                    decoration: InputDecoration(
                      prefixIcon: prefixIcon ?? const Icon(Icons.person),
                      labelText: " First Name",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: TextFormField(
                    validator: (value) => value!.isEmpty
                        ? 'Enter Your Name'
                        : (nameRegExp.hasMatch(value)
                            ? null
                            : 'Enter a Valid Name'),
                    decoration: InputDecoration(
                      prefixIcon: prefixIcon ?? const Icon(Icons.person),
                      labelText: "Last Name",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: TextFormField(
                    validator: (val) => val!.isEmpty || !val.contains("@")
                        ? "enter a valid eamil"
                        : null,
                    decoration: InputDecoration(
                      prefixIcon:
                          prefixIcon ?? const Icon(Icons.alternate_email),
                      labelText: "email",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: TextFormField(
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value!.length != 10)
                        return 'Mobile Number must be of 10 digit';
                      else
                        return null;
                    },
                    decoration: InputDecoration(
                      prefixIcon: prefixIcon ?? const Icon(Icons.call),
                      labelText: "Phone Number",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: TextFormField(
                    keyboardType: TextInputType.text,
                    controller: textEditingController,
                    obscureText: _isHidden,
                    decoration: InputDecoration(
                      prefixIcon: prefixIcon ?? const Icon(Icons.lock),
                      labelText: "Password",
                      suffix: InkWell(
                        onTap: _togglePasswordView,
                        child: Icon(
                          _isHidden ? Icons.visibility : Icons.visibility_off,
                        ),
                      ),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    ),
                    validator: (PassCurrentValue) {
                      RegExp regex = RegExp(
                          r'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$');
                      var passNonNullValue = PassCurrentValue ?? "";
                      if (passNonNullValue.isEmpty) {
                        return ("Password is required");
                      } else if (passNonNullValue.length < 6) {
                        return ("Password Must be more than 5 characters");
                      } else if (!regex.hasMatch(passNonNullValue)) {
                        return ("Password should contain upper,lower,digit and Special character ");
                      }
                      return null;
                    },
                  ),
                ),
              ),
              SizedBox(
                height: 2,
              ),
              Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Radio(
                      value: 1,
                      groupValue: value,
                      onChanged: (val) {
                        setState(() {});
                      },
                    ),
                    Text(
                      'Terms and Conditions',
                      style: TextStyle(fontSize: 17.0),
                    ),
                  ]),
              Container(
                margin: EdgeInsets.symmetric(horizontal: 70, vertical: 7.5),
                child: FlatButton(
                  height: 60,
                  child: Text(
                    'SIGN UP',
                    style: TextStyle(fontSize: 20.0),
                  ),
                  color: Colors.black,
                  textColor: Colors.white,
                  onPressed: () {
                    if (!_formkey.currentState!.validate()) {
                      return;
                    }
                    setState(() {
                      Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                              builder: (context) => HomePageMain()));
                    });
                  },
                  splashColor: Colors.white,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20)),
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 20, vertical: 5),
                child: Divider(
                  color: Colors.black,
                ),
              ),
              Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                  ),
                  child: Row(children: <Widget>[
                    Container(
                      alignment: FractionalOffset.center,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Text(
                        "Already have an account?",
                        style: TextStyle(
                            color: Colors.black,
                            fontSize: 16.5,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 32),
                      child: Container(
                        margin: EdgeInsets.only(left: 42),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                        ),
                        child: InkWell(
                          onTap: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => LoginUi()));
                          },
                          child: Text(
                            "Login",
                            style: TextStyle(
                                fontSize: 20,
                                color: Colors.blue,
                                fontWeight: FontWeight.bold,
                                decoration: TextDecoration.underline),
                          ),
                        ),
                      ),
                    ),
                  ]))
            ])));
  }
}
