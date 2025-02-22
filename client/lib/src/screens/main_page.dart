import 'package:flutter/material.dart';

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  static const routeName = '/';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Main Page'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pushNamed(context, '/login'),
            child: const Text('Login', style: TextStyle(color: Colors.white)),
          ),
          TextButton(
            onPressed: () => Navigator.pushNamed(context, '/signup'),
            child: const Text('Sign Up', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
      body: const Center(child: Text('Main Page Content')),
    );
  }
}
