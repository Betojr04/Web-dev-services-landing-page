"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import re

api = Blueprint('api', __name__)

# route for user
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# api for submitting a contact form
@api.route('/api/contact', methods=['POST'])
def submit_contact_form():
    data = request.get_json()

    # Perform input validation and return error messages if necessary
    if not data.get('name') or not data.get('email') or not data.get('subject') or not data.get('message'):
        return jsonify({"error": "Missing required fields"}), 400

    # Validate the email format
    if not re.match(r"[^@]+@[^@]+\.[^@]+", data['email']):
        return jsonify({"error": "Invalid email address"}), 400

    new_submission = ContactSubmission(
        name=data['name'],
        email=data['email'],
        subject=data['subject'],
        message=data['message']
    )
    db.session.add(new_submission)
    db.session.commit()

    # Send an email notification or perform any other desired action
    send_email_notification(new_submission)
    return jsonify({'message': 'Contact form submitted successfully.'}), 201
