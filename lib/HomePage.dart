import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

import 'profile/profile.dart';

class HomePageMain extends StatefulWidget {
  const HomePageMain({Key? key}) : super(key: key);

  @override
  State<HomePageMain> createState() => _HomePageState();
}

class _HomePageState extends State<HomePageMain> {
  int currentPos = 0;
  int _page = 0;
  GlobalKey<_HomePageState> _bottomNavigationKey = GlobalKey();
  @override
  Widget build(BuildContext context) {
    int _selectedIndex = 0;
    return Scaffold(
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
      appBar: AppBar(
        backgroundColor: Colors.grey.shade800,
        elevation: 0.0,
        title: Text(""),
        actions: <Widget>[
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.search),
          ),
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.favorite_border_rounded),
          ),
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.shopping_bag_sharp),
          ),
        ],
      ),
      body: Scaffold(
        floatingActionButton: FloatingActionButton(
          backgroundColor: Colors.indigo[900],

          //Floating action button on Scaffold
          onPressed: () {
            //code to execute on button press
          },
          child: Icon(
            Icons.shopping_bag_outlined,
            size: 35,
          ), //icon inside button
        ),

        floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        bottomNavigationBar: SizedBox(
          height: 50,
          child: BottomAppBar(
            color: Colors.grey,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                IconButton(
                  icon: Icon(
                    Icons.home_filled,
                    color: Colors.white,
                    size: 35,
                  ),
                  onPressed: () {
                    Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(
                            builder: (context) => HomePageMain()));
                  },
                ),
                IconButton(
                  icon: Icon(
                    Icons.notifications,
                    color: Colors.white,
                    size: 35,
                  ),
                  onPressed: () {},
                ),
                IconButton(
                  icon: Icon(
                    Icons.favorite_border,
                    color: Colors.white,
                    size: 35,
                  ),
                  onPressed: () {},
                ),
                IconButton(
                  icon: Icon(
                    Icons.person,
                    color: Colors.white,
                    size: 35,
                  ),
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => MyProfile()));
                  },
                ),
              ],
            ),
          ),
        ),
        //floating action button position to center

        body: Container(
          child: ListView(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(2.0),
                        child: Container(
                          child: CircleAvatar(
                            backgroundImage: NetworkImage(
                                "https://img.freepik.com/free-vector/mega-sale-discount-banner-design_1017-33876.jpg?t=st=1656402810~exp=1656403410~hmac=a051ea03ca7a7a01cd9cdfccfc2ecfa8a45531baa180309f8e99a5e7ecc3abf3&w=740"),
                            radius: 40,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(2.0),
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(
                              "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?t=st=1656401183~exp=1656401783~hmac=9e7d0d00cd5228d1b985d72d696cd366d27183cd18eddb17f970e01fb43926e8&w=360"),
                          radius: 40,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(2.0),
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(
                              "https://img.freepik.com/free-photo/blithesome-european-girl-with-long-hairstyle-expressing-happiness-emotional-fair-haired-woman-posing-yellow-wall_197531-11495.jpg?t=st=1656401933~exp=1656402533~hmac=1b7f4f8ee3782639b19a8ef1cb150246c9700557f337e325521520e28770aec0&w=1060"),
                          radius: 40,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(2.0),
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(
                              "https://img.freepik.com/free-photo/child-boy-showing-sign-adorable-cute-pink-wall_179666-304.jpg?t=st=1656403587~exp=1656404187~hmac=e7ed8d63b1dda22145d10dce690931263d734f39da40a5ae7d98e47e3685c72f&w=996"),
                          radius: 40,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(2.0),
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(
                              "https://img.freepik.com/free-photo/lovely-girl-with-freckles-red-hairstyle-cool-hat-denim-jacket-striped-shirt-holding-multi-colored-flowers-isolated-wall_197531-24683.jpg?t=st=1656403695~exp=1656404295~hmac=27fbbc5c00ebf2915811f98b59d5f05f29389d3dbddc7a03d0ee0e362444a7c8&w=996"),
                          radius: 40,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                    height: 320,
                    width: MediaQuery.of(context).size.width,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: NetworkImage(
                            'https://img.freepik.com/free-vector/fashion-sale-banners_52683-12048.jpg?t=st=1656403357~exp=1656403957~hmac=9f430e5ec5b3606a36e858cacbcc26ee825d42d55665421e0eddb3ca6dec6c8f&w=740'),
                        fit: BoxFit.fill,
                      ),
                    )),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                    height: 190,
                    width: MediaQuery.of(context).size.width,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: NetworkImage(
                            'https://img.freepik.com/free-vector/flat-geometric-fashion-youtube-thumbnail_23-2148918593.jpg?size=626&ext=jpg&ga=GA1.2.501012713.1654328115'),
                        fit: BoxFit.fill,
                      ),
                    )),
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 55),
                    child: Text(
                      "YOU SNOOZE , YOU LOSE",
                      style: TextStyle(
                        fontSize: 20,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: <Widget>[
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                        height: 200,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Colors.green,
                          image: DecorationImage(
                            image: NetworkImage(
                                'https://img.freepik.com/free-photo/portrait-handsome-young-man-posing-camera-stylish-male-standing-urban-street_116317-9820.jpg?w=360'),
                            fit: BoxFit.fill,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                          height: 200,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: Colors.green,
                            image: DecorationImage(
                              image: NetworkImage(
                                  'https://img.freepik.com/free-photo/fashion-girl-posing-studio-wearing-smart-casual-sportive-outfit-business-style-sweet-pastel-colors-sunglasses-backpack-denim-jacket-mint-background-stylish-woman_291049-1800.jpg?t=st=1656401933~exp=1656402533~hmac=ac6b2e4cc669f517b0d6f3b74a30d83e53dfad4ae694db70a6874862af8ec2c8'),
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: <Widget>[
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                        height: 200,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Colors.green,
                          image: DecorationImage(
                            image: NetworkImage(
                                'https://img.freepik.com/free-photo/blond-boy-with-bandana-his-head-red-hoodie-glasses-posing-orange-background_88135-18715.jpg?w=996'),
                            fit: BoxFit.fill,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                          height: 200,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: Colors.green,
                            image: DecorationImage(
                              image: NetworkImage(
                                  'https://img.freepik.com/free-vector/weekend-discount-sale-banner-template_1017-33873.jpg?t=st=1656402810~exp=1656403410~hmac=97c91bc61a084e42b4c48c1e9f6e5c238e3f47cee3ecff52a144ee30cf65a298&w=740'),
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                  ],
                ),
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 110),
                    child: Text(
                      "FEATURED BRAND",
                      style: TextStyle(
                        fontSize: 20,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
              CarouselSlider(
                items: [
                  //1st Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5346.jpg?t=st=1656065894~exp=1656066494~hmac=36d16877c4649289ab679238288afa99173a5b471640d05e660f012a56779a48"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //2nd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393638.jpg?t=st=1656065894~exp=1656066494~hmac=7d088f88d8b5e401216eece1afe0fd80ee438f05daade89744ede95c6847bc3e&w=740"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //3rd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiling-student-woman-with-backpack-camera-going-vacation_149155-4472.jpg?w=826"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //4th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10579.jpg?t=st=1656063577~exp=1656064177~hmac=b04ba8603deb90ff50fb232bb28961ab2b4f23b42606b6d9307e7408aff58757&w=360"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //5th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984786.jpg?t=st=1656063577~exp=1656064177~hmac=fd2340a8c4a17765af1900853fbe31610cceb078d4a64f7c3f150f21e53fba36"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],

                //Slider Container properties
                options: CarouselOptions(
                    height: 250.0,
                    enlargeCenterPage: true,
                    autoPlay: true,
                    aspectRatio: 16 / 9,
                    autoPlayCurve: Curves.fastOutSlowIn,
                    enableInfiniteScroll: true,
                    autoPlayAnimationDuration: Duration(milliseconds: 800),
                    viewportFraction: 1.0,
                    onPageChanged: (index, reason) {
                      setState(() {
                        currentPos = index;
                      });
                    }),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: <Widget>[
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                        height: 180,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(70),
                              topRight: Radius.circular(70)),
                          color: Colors.green,
                          image: DecorationImage(
                            image: NetworkImage(
                                'https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?t=st=1656401862~exp=1656402462~hmac=d3cd21b7b0832a1df7363345eba0618c0bf5f3f149064bb80f4558f6842e6f9e'),
                            fit: BoxFit.fill,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                          height: 180,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(70),
                                topRight: Radius.circular(70)),
                            color: Colors.green,
                            image: DecorationImage(
                              image: NetworkImage(
                                  'https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?t=st=1656401862~exp=1656402462~hmac=d3cd21b7b0832a1df7363345eba0618c0bf5f3f149064bb80f4558f6842e6f9e'),
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    Flexible(
                      flex: 1,
                      fit: FlexFit.tight,
                      child: Container(
                          height: 180,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(70),
                                topRight: Radius.circular(70)),
                            color: Colors.green,
                            image: DecorationImage(
                              image: NetworkImage(
                                  'https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?t=st=1656401862~exp=1656402462~hmac=d3cd21b7b0832a1df7363345eba0618c0bf5f3f149064bb80f4558f6842e6f9e'),
                              fit: BoxFit.fill,
                            ),
                          )),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                    height: 200,
                    width: MediaQuery.of(context).size.width,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: NetworkImage(
                            'https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?t=st=1656401862~exp=1656402462~hmac=d3cd21b7b0832a1df7363345eba0618c0bf5f3f149064bb80f4558f6842e6f9e'),
                        fit: BoxFit.fill,
                      ),
                    )),
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 70),
                    child: Text(
                      "SPONSERED TOP BRANDS",
                      style: TextStyle(
                        fontSize: 20,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
              CarouselSlider(
                items: [
                  //1st Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5346.jpg?t=st=1656065894~exp=1656066494~hmac=36d16877c4649289ab679238288afa99173a5b471640d05e660f012a56779a48"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //2nd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393638.jpg?t=st=1656065894~exp=1656066494~hmac=7d088f88d8b5e401216eece1afe0fd80ee438f05daade89744ede95c6847bc3e&w=740"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //3rd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiling-student-woman-with-backpack-camera-going-vacation_149155-4472.jpg?w=826"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //4th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10579.jpg?t=st=1656063577~exp=1656064177~hmac=b04ba8603deb90ff50fb232bb28961ab2b4f23b42606b6d9307e7408aff58757&w=360"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //5th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984786.jpg?t=st=1656063577~exp=1656064177~hmac=fd2340a8c4a17765af1900853fbe31610cceb078d4a64f7c3f150f21e53fba36"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],

                //Slider Container properties
                options: CarouselOptions(
                  height: 170.0,
                  enlargeCenterPage: true,
                  autoPlay: true,
                  aspectRatio: 16 / 9,
                  autoPlayCurve: Curves.fastOutSlowIn,
                  enableInfiniteScroll: true,
                  autoPlayAnimationDuration: Duration(milliseconds: 800),
                  viewportFraction: 0.3,
                ),
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 120),
                    child: Text(
                      "BUY MY COLOR",
                      style: TextStyle(
                        fontSize: 20,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
              CarouselSlider(
                items: [
                  //1st Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5346.jpg?t=st=1656065894~exp=1656066494~hmac=36d16877c4649289ab679238288afa99173a5b471640d05e660f012a56779a48"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //2nd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393638.jpg?t=st=1656065894~exp=1656066494~hmac=7d088f88d8b5e401216eece1afe0fd80ee438f05daade89744ede95c6847bc3e&w=740"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //3rd Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiling-student-woman-with-backpack-camera-going-vacation_149155-4472.jpg?w=826"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //4th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10579.jpg?t=st=1656063577~exp=1656064177~hmac=b04ba8603deb90ff50fb232bb28961ab2b4f23b42606b6d9307e7408aff58757&w=360"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                  //5th Image of Slider
                  Container(
                    margin: EdgeInsets.all(6.0),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8.0),
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984786.jpg?t=st=1656063577~exp=1656064177~hmac=fd2340a8c4a17765af1900853fbe31610cceb078d4a64f7c3f150f21e53fba36"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],

                //Slider Container properties
                options: CarouselOptions(
                  height: 170.0,
                  enlargeCenterPage: true,
                  autoPlay: true,
                  aspectRatio: 16 / 9,
                  autoPlayCurve: Curves.fastOutSlowIn,
                  enableInfiniteScroll: true,
                  autoPlayAnimationDuration: Duration(milliseconds: 800),
                  viewportFraction: 0.3,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
