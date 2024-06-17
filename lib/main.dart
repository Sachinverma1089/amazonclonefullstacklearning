import 'package:amazon_clone_learning/constants/gloabal_variables.dart';
import 'package:amazon_clone_learning/features/auth/auth_screen.dart';
import 'package:amazon_clone_learning/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Amazon Clone',
      theme: ThemeData(
          scaffoldBackgroundColor: GlobalVariables.backgroundColor,
          colorScheme: const ColorScheme.light(
            primary: GlobalVariables.secondaryColor,
          ),
          appBarTheme: const AppBarTheme(
              elevation: 0, iconTheme: IconThemeData(color: Colors.black))),
      onGenerateRoute: (settings) => generateRoute(settings),
      home: Scaffold(
        body: Column(
          children: [
            Center(child: Text("flutter demo home")),
            Builder(builder: (context) {
              return ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, AuthScreen.routeName);
                  },
                  child: Text("Click"));
            })
          ],
        ),
      ),
    );
  }
}
