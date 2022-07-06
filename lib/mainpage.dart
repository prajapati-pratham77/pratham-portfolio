import 'dart:math';

import 'package:coduzion_demo/LOGIN/login.dart';
import 'package:coduzion_demo/SignUp/sign_up.dart';
import 'package:flutter/material.dart';

import 'package:google_fonts/google_fonts.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:sign_button/sign_button.dart';

class SignUp extends StatefulWidget {
  SignUp({Key? key}) : super(key: key);

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: SafeArea(
          child: ListView(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: Container(
                  height: 50,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 10, horizontal: 30),
                    child: Text(
                      "Welcome to indoinq!",
                      style: GoogleFonts.lato(
                          color: Colors.black,
                          fontSize: 25,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 30,
                  ),
                  child: Text(
                    "Please login or sign up to \ continue using our app",
                    style: GoogleFonts.lato(color: Colors.grey, fontSize: 16),
                  ),
                ),
              ),
              Container(
                child: Image.network(
                    "https://img.freepik.com/free-vector/subscriber-concept-illustration_114360-3453.jpg?t=st=1654328293~exp=1654328893~hmac=62cbc626f62ae300324dcb1ce525f846fc51a085f5ac45a3b7502ffdf13c37c5&w=1060"),
              ),
              Padding(
                padding: const EdgeInsets.all(5),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Enter Via Social Network",
                      style: GoogleFonts.lato(color: Colors.blue, fontSize: 20),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
              Container(
                alignment: FractionalOffset.center,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    SignInButton.mini(
                      buttonType: ButtonType.facebook,
                      onPressed: () {},
                      buttonSize: ButtonSize.small,
                    ),
                    SignInButton.mini(
                        buttonType: ButtonType.twitter,
                        onPressed: () {},
                        buttonSize: ButtonSize.small),
                    SignInButton.mini(
                        buttonType: ButtonType.instagram,
                        onPressed: () {},
                        buttonSize: ButtonSize.small),
                    SignInButton.mini(
                        buttonType: ButtonType.google,
                        onPressed: () {},
                        buttonSize: ButtonSize.small)
                  ],
                ),
              ),
              Container(
                child: Center(
                    child: Text(
                  "or",
                  style: GoogleFonts.poppins(fontSize: 20),
                )),
              ),
              Container(
                  child: Center(
                child: Text("Login with via email",
                    style: GoogleFonts.poppins(fontSize: 20)),
              )),
              Container(
                margin: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                child: FlatButton(
                  height: 60,
                  child: Text(
                    'SIGN UP',
                    style: TextStyle(fontSize: 20.0),
                  ),
                  color: Colors.black,
                  textColor: Colors.white,
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => DemoSignUp()));
                  },
                  splashColor: Colors.white,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20)),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 0.2),
                child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Container(
                        alignment: FractionalOffset.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Text(
                          "Already in our site?",
                          style: TextStyle(color: Colors.black, fontSize: 18),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
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
                              style:
                                  TextStyle(fontSize: 18, color: Colors.blue),
                            ),
                          ),
                        ),
                      ),
                    ]),
              )
            ],
          ),
        ));
  }
}
