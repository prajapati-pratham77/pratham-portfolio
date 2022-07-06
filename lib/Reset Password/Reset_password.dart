import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ResetPassword extends StatefulWidget {
  const ResetPassword({Key? key}) : super(key: key);

  @override
  State<ResetPassword> createState() => _ResetPasswordState();
}

class _ResetPasswordState extends State<ResetPassword> {
  get prefixIcon => null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: ListView(
        children: <Widget>[
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
                      onPressed: () {},
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
                    "RESET PASSWORD",
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
                "set a new password at least 10 characters long.",
                textAlign: TextAlign.justify,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 15.0),
                maxLines: 2,
              ),
            )
          ]),
          Row(children: const [
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 3),
              child: Text(
                "one uppercase, one lowercase and one number.",
                textAlign: TextAlign.justify,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 15.0),
                maxLines: 2,
              ),
            )
          ]),
          SizedBox(
            height: 50,
          ),
          Container(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              child: TextField(
                decoration: InputDecoration(
                  prefixIcon: prefixIcon ?? const Icon(Icons.lock_open),
                  labelText: "New password",
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
              child: TextField(
                decoration: InputDecoration(
                  prefixIcon: prefixIcon ?? const Icon(Icons.lock_open),
                  labelText: "confirm pasword",
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
                'SIGN UP',
                style: TextStyle(fontSize: 20.0),
              ),
              color: Colors.black,
              textColor: Colors.white,
              onPressed: () {},
              splashColor: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(40)),
            ),
          ),
        ],
      )),
    );
  }
}
