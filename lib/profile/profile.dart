import 'package:flutter/material.dart';

class MyProfile extends StatefulWidget {
  const MyProfile({Key? key}) : super(key: key);

  @override
  State<MyProfile> createState() => _MyProfileState();
}

class _MyProfileState extends State<MyProfile> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            extendBodyBehindAppBar: true,
            appBar: AppBar(
              title: Text(
                "Profile",
                style: TextStyle(color: Colors.black),
              ),
              elevation: 0,
              iconTheme: IconThemeData(color: Colors.black),
              backgroundColor: Color(0x44000000),
            ),
            body: Container(
              width: double.infinity,
              height: double.infinity,
              child: ListView(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 10, vertical: 10),
                    child: Text(
                      "Hola,Jessica",
                      style: TextStyle(fontSize: 30),
                    ),
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Row(
                      children: [
                        CircleAvatar(
                          maxRadius: 40,
                        ),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(
                            '(91)333999333\njessica.siman@gmail.com',
                            style: TextStyle(fontSize: 18),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(
                      Icons.shopping_cart_checkout,
                    ),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'My Order',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(
                      Icons.favorite,
                    ),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'Whishlist',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(
                      Icons.loyalty,
                    ),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'My Loyality Points',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(Icons.location_on),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'My Addresses',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(
                      Icons.star,
                    ),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'My Product Review',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: Icon(
                      Icons.shopping_cart_checkout,
                    ),
                    trailing: Icon(Icons.arrow_forward, size: 35),
                    title: const Text(
                      'My Downloadable Products',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    thickness: 1,
                    color: Colors.black,
                  ),
                  Container(
                    margin: EdgeInsets.symmetric(horizontal: 10, vertical: 7.5),
                    child: FlatButton(
                      textColor: Colors.black,
                      height: 60.0,
                      color: Colors.white,
                      onPressed: () {},
                      shape: RoundedRectangleBorder(
                          side: BorderSide(color: Colors.black, width: 2),
                          borderRadius: BorderRadius.circular(30)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                'Logout',
                                style: TextStyle(fontSize: 22),
                              )),
                          Icon(
                            Icons.logout,
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            )));
  }
}
