import 'package:coduzion_demo/CUSTOM_WIDGETS/color_constant.dart';
import 'package:coduzion_demo/CUSTOM_WIDGETS/font_api.dart';
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
              leading: Padding(
                padding: const EdgeInsets.all(8.0),
                child: CircleAvatar(
                  backgroundColor: Colors.grey.shade200,
                  radius: 20,
                  child: IconButton(
                    onPressed: () {},
                    icon: Icon(
                      Icons.arrow_back,
                      color: Colors.black,
                    ),
                  ),
                ),
              ),
              backgroundColor: Color.fromRGBO(104, 108, 109, 255),
            ),
            body: SafeArea(
              child: ListView(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 20, vertical: 10),
                    child: Text(
                      "Hola,Jessica",
                      style: TextStyle(
                          fontSize: 30, color: COLOR_CONST.PRIMARY_COLOR),
                    ),
                  ),
                  Divider(
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
                          padding: const EdgeInsets.all(7.0),
                          child: Text(
                            '(91)333999333\njessica.siman@gmail.com',
                            style: TextStyle(fontSize: 18),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.shopping_cart,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'My Order',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.favorite_border,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'Whishlist',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.point_of_sale,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'My Loyality Points',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.location_on,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'My Addresses',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.star,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'My Product Review',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
                    color: Colors.black,
                  ),
                  ListTile(
                    leading: CircleAvatar(
                      backgroundColor: Colors.grey.shade200,
                      child: Stack(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Icon(
                              Icons.download,
                              color: Colors.black,
                            ),
                          )
                        ],
                      ),
                    ),
                    trailing: Icon(Icons.arrow_forward_ios, size: 25),
                    title: const Text(
                      'My Downloadable Products',
                      style: TextStyle(fontSize: 19),
                    ),
                    onTap: () {},
                  ),
                  Divider(
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
