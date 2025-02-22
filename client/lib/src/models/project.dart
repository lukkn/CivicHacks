class Project {
  final String id;
  final String name;
  final String description;
  final List<String> imageUrls;
  final Map<String, dynamic> schema;
  final Map<String, dynamic> data;

  Project({
    required this.id,
    required this.name,
    required this.description,
    this.imageUrls = const [],
    required this.schema,
    this.data = const {},
  });

  // Sample project for testing
  static Project sampleProject() {
    return Project(
      id: '1',
      name: 'Sample Research Project',
      description: 'This is a sample project studying the effects of temperature on plant growth.',
      imageUrls: [
        'https://example.com/sample1.jpg',
        'https://example.com/sample2.jpg',
      ],
      schema: {
        'temperature': 'float',
        'growth_rate': 'float',
        'plant_height': 'int',
        'observations': 'str',
      },
      data: {
        'temperature': [20.5, 21.0, 22.5],
        'growth_rate': [0.5, 0.7, 0.8],
        'plant_height': [10, 12, 15],
        'observations': ['Healthy leaves', 'New buds forming', 'Rapid growth observed'],
      },
    );
  }
} 
