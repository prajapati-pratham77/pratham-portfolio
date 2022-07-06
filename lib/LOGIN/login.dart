import 'package:coduzion_demo/Forgot%20Password/forgot_passsword.dart';
import 'package:coduzion_demo/HomePage.dart';
import 'package:flutter/material.dart';

import 'package:fluttertoast/fluttertoast.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:sign_button/create_button.dart';
import 'package:sign_button/sign_button.dart';

class LoginUi extends StatefulWidget {
  const LoginUi({Key? key}) : super(key: key);

  @override
  State<LoginUi> createState() => _LoginUiState();
}

class _LoginUiState extends State<LoginUi> {
  bool _validate = false;
  final GlobalKey<FormState> _formkey = GlobalKey<FormState>();

  bool _isHidden = true;
  void _togglePasswordView() {
    setState(() {
      _isHidden = !_isHidden;
    });
  }

  @override
  Widget build(BuildContext context) {
    var prefixIcon;
    var textEditingController;
    return Scaffold(
        body: Form(
      key: _formkey,
      child: SafeArea(
          child: ListView(children: <Widget>[
        Container(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 20),
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
                      Navigator.pop(context);
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
            children: [
              Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                child: Text(
                  "Login",
                  style: GoogleFonts.domine(
                      fontSize: 30, fontWeight: FontWeight.bold),
                ),
              )
            ],
          ),
        ),
        Row(children: const [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Text(
              "please login to continue our app",
              textAlign: TextAlign.justify,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 17.0),
              maxLines: 2,
            ),
          )
        ]),
        Padding(
          padding: const EdgeInsets.all(25),
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
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
            child: TextFormField(
              validator: (val) => val!.isEmpty || !val.contains("@")
                  ? "enter a valid eamil"
                  : null,
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
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
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
        Padding(
          padding: const EdgeInsets.all(25.0),
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              InkWell(
                onTap: () {
                  Navigator.of(context).pushReplacement(MaterialPageRoute(
                      builder: (context) => ForgorPassword()));
                },
                child: Text(
                  "forgot password?",
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.blue,
                  ),
                ),
              ),
            ],
          ),
        ),
        Container(
          margin: EdgeInsets.symmetric(horizontal: 90, vertical: 20),
          child: FlatButton(
            height: 60,
            child: Text(
              'Login',
              style: TextStyle(fontSize: 20.0),
            ),
            color: Colors.black,
            textColor: Colors.white,
            onPressed: () {
              if (!_formkey.currentState!.validate()) {
                return;
              }
              setState(() {
                Navigator.pushReplacement(context,
                    MaterialPageRoute(builder: (context) => HomePageMain()));
              });
            },
            splashColor: Colors.white,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(40)),
          ),
        ),
      ])),
    ));
  }
}
