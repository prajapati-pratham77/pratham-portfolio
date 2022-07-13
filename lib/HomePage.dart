import 'package:carousel_slider/carousel_slider.dart';
import 'package:coduzion_demo/CUSTOM_WIDGETS/String_api.dart';
import 'package:coduzion_demo/CUSTOM_WIDGETS/imeges_api.dart';
import 'package:coduzion_demo/Notification/Notification.dart';
import 'package:coduzion_demo/Product_page/product.dart';
import 'package:coduzion_demo/Wishlist/Wishlist.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

import 'profile/profile.dart';

class HomePageMain extends StatefulWidget {
  HomePageMain({Key? key}) : super(key: key);

  @override
  State<HomePageMain> createState() => _HomePageState();
}

class _HomePageState extends State<HomePageMain> {
  int _selectedIndex = 0;

  static const List<Widget> _widgetOptions = <Widget>[
    Product(),
    Update(),
    Wishlist(),
    MyProfile(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  GlobalKey<_HomePageState> _bottomNavigationKey = GlobalKey();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: (_selectedIndex == 0)
          ? AppBar(
              backgroundColor: Color.fromRGBO(104, 108, 109, 255),
              elevation: 0.0,
              title: Text(""),
              iconTheme: IconThemeData(color: Colors.black),
              actions: <Widget>[
                IconButton(
                  onPressed: () {},
                  icon: Icon(
                    Icons.search,
                    color: Colors.black,
                  ),
                ),
                IconButton(
                  onPressed: () {},
                  icon: Icon(
                    Icons.favorite_border_rounded,
                    color: Colors.black,
                  ),
                ),
                IconButton(
                  onPressed: () {},
                  icon: Icon(
                    Icons.shopping_bag_sharp,
                    color: Colors.black,
                  ),
                ),
              ],
            )
          : null,
      drawer: Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text('Drawer Header'),
            ),
            ListTile(
              leading: Icon(
                Icons.home,
                color: Colors.black,
              ),
              title: const Text('Page 1'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(
                Icons.train,
              ),
              title: const Text('Page 2'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.indigo[900],

        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => MyProfile()));
        },
        child: Icon(
          Icons.shopping_bag_outlined,
          size: 40,
        ), //icon inside button
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: Container(
        margin: EdgeInsets.only(),
        height: 60,
        child: BottomNavigationBar(
          showSelectedLabels: false,
          showUnselectedLabels: false,
          elevation: 0,
          items: <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
                size: 30,
              ),
              label: 'HOME',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.notification_add_outlined,
                size: 30,
              ),
              label: 'NOTIFICATION',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.favorite_border_outlined,
                size: 30,
              ),
              label: 'WISHLIST',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.person,
                size: 30,
              ),
              label: 'PROFILE',
            ),
          ],
          type: BottomNavigationBarType.fixed,
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          selectedItemColor: Colors.indigo[900],
          unselectedItemColor: Colors.black,
        ),
      ),

      //floating action button position to center

      body: Container(
        child: Center(
          child: _widgetOptions.elementAt(_selectedIndex),
        ),
      ),
    );
  }
}
