from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)


@main.route('/api/endpoint', methods=['GET'])
def example_endpoint():
    return jsonify({"message": "Hello, world!"})
