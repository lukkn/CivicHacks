import 'package:flutter/material.dart';

class ProjectPage extends StatelessWidget {
  const ProjectPage({super.key});

  // Placeholder for authentication check
  bool _isLoggedIn() {
    // TODO: Implement actual authentication check
    return true;
  }

  @override
  Widget build(BuildContext context) {
    // Check if user is logged in
    if (!_isLoggedIn()) {
      return const Scaffold(
        body: Center(
          child: Text('Please log in to access projects'),
        ),
      );
    }

    // Get the screen size to calculate button dimensions
    final screenSize = MediaQuery.of(context).size;
    final buttonSize = screenSize.height * 0.3; // 30% of screen height

    return Scaffold(
      appBar: AppBar(
        title: const Text('Projects'),
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            // Create Project Button
            SizedBox(
              width: buttonSize,
              height: buttonSize,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.all(16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onPressed: () {
                  // TODO: Implement create project functionality
                },
                child: const Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.add_circle_outline, size: 48),
                    SizedBox(height: 16),
                    Text(
                      'Create a Project',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 18),
                    ),
                  ],
                ),
              ),
            ),

            // Join Project Button
            SizedBox(
              width: buttonSize,
              height: buttonSize,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.all(16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onPressed: () {
                  // TODO: Implement join project functionality
                },
                child: const Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.group_add_outlined, size: 48),
                    SizedBox(height: 16),
                    Text(
                      'Join a Project',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 18),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
