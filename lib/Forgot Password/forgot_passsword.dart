import 'package:coduzion_demo/CUSTOM_WIDGETS/String_api.dart';
import 'package:coduzion_demo/LOGIN/login.dart';
import 'package:flutter/material.dart';

import 'package:fluttertoast/fluttertoast.dart';
import 'package:google_fonts/google_fonts.dart';

class ForgorPassword extends StatefulWidget {
  const ForgorPassword({Key? key}) : super(key: key);

  @override
  State<ForgorPassword> createState() => _ForgorPassword();
}

class _ForgorPassword extends State<ForgorPassword> {
  final GlobalKey<FormState> _formkey = GlobalKey<FormState>();
  get prefixIcon => null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        key: _formkey,
        child: SafeArea(
            child: ListView(
          children: <Widget>[
            Container(
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 30, horizontal: 20),
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
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => LoginUi()));
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
                    padding: const EdgeInsets.symmetric(
                        vertical: 10, horizontal: 20),
                    child: Text(
                      StringData.forgot_pass_capi,
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
                  "enter the register email to below to receive",
                  textAlign: TextAlign.justify,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 17.0),
                  maxLines: 2,
                ),
              )
            ]),
            Row(children: const [
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 3),
                child: Text(
                  "password reset link.",
                  textAlign: TextAlign.justify,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 17.0),
                  maxLines: 2,
                ),
              )
            ]),
            SizedBox(
              height: 50,
            ),
            Container(
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                child: TextFormField(
                  validator: (val) => val!.isEmpty || !val.contains("@")
                      ? "enter a valid email"
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
              margin: EdgeInsets.symmetric(horizontal: 90, vertical: 20),
              child: FlatButton(
                height: 60,
                child: Text(
                  'SEND',
                  style: TextStyle(fontSize: 20.0),
                ),
                color: Colors.black,
                textColor: Colors.white,
                onPressed: () {
                  if (!_formkey.currentState!.validate()) {
                    return;
                  }
                  setState(() {
                    Fluttertoast.showToast(msg: 'check your mail inbox');
                  });
                },
                splashColor: Colors.white,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(40)),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Divider(
                color: Colors.black,
              ),
            ),
            Center(
              child: InkWell(
                onTap: () {
                  Navigator.pushReplacement(context,
                      MaterialPageRoute(builder: (context) => LoginUi()));
                },
                child: Text(
                  StringData.back_to_login,
                  style: TextStyle(
                      fontSize: 18,
                      color: Colors.blue,
                      decoration: TextDecoration.underline),
                ),
              ),
            ),
          ],
        )),
      ),
    );
  }
}
