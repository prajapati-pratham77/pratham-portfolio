import 'dart:math';

import 'package:coduzion_demo/CUSTOM_WIDGETS/font_api.dart';
import 'package:coduzion_demo/HomePage.dart';
import 'package:coduzion_demo/LOGIN/login.dart';
import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:fluttertoast/fluttertoast.dart';

import 'package:google_fonts/google_fonts.dart';

class SignUpService extends StatefulWidget {
  SignUpService({Key? key}) : super(key: key);

  @override
  State<SignUpService> createState() => _SignUpState();
}

class _SignUpState extends State<SignUpService> {
  bool isEmail(String input) => EmailValidator.validate(input);
  bool isPhone(String input) =>
      RegExp(r'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
          .hasMatch(input);
  @override
  void dispose() {
    super.dispose();
  }

  void showToast() {
    Fluttertoast.showToast(
        msg: 'please check all',
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.BOTTOM,
        timeInSecForIosWeb: 1,
        backgroundColor: Colors.red,
        textColor: Colors.yellow);
  }

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    var prefixIcon;
    var value;
    return Scaffold(
        body: SafeArea(
            child: ListView(children: <Widget>[
      Container(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
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
                            builder: (context) => SignUpService()));
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
              padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              child: Text(
                "SIGN UP",
                style: FONT_CONST.MEDIUM,
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
              padding: const EdgeInsets.symmetric(vertical: 2, horizontal: 20),
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
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          child: TextField(
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
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          child: TextField(
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
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          child: TextField(
            decoration: InputDecoration(
              prefixIcon: prefixIcon ?? const Icon(Icons.alternate_email),
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
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          child: TextField(
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
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
          child: TextField(
            decoration: InputDecoration(
              prefixIcon: prefixIcon ?? const Icon(Icons.lock),
              labelText: "Password",
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(20.0),
              ),
            ),
          ),
        ),
      ),
      SizedBox(
        height: 2,
      ),
      Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
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
            setState(() {
              Navigator.of(context).pushReplacement(
                  MaterialPageRoute(builder: (context) => HomePageMain()));
            });
          },
          splashColor: Colors.white,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        ),
      ),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 5),
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
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => LoginUi()));
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
