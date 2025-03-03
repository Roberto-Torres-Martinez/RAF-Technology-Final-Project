"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Smartphones
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/phones', methods=['POST'])
def post_phones():
    data = request.get_json()
    exist = Smartphones.query.filter_by(modelo=data['nombre']).first()
    if exist:
        return jsonify({"msg": "This phone already exist in your list"}), 400
    colores = data.get('colores', [])
    images = data.get('imagenes', {})
    new_phone = Smartphones(
        modelo = data['nombre'],
        pantalla = data['pantalla'],
        procesador = data['procesador'],
        memoria_ram = data['memoria_ram'],
        almacenamiento = data['almacenamiento'],
        camara = data['camara'],
        bateria = data['bateria'],
        precio = data['precio'],
        conectividad = data['conectividad'],
        colores = colores,
        descripcion = data['descripcion'],
        imagen = images
    )
    db.session.add(new_phone)
    db.session.commit()
    return jsonify({"msg": "Phone added"}), 200


@api.route('/phones', methods=['GET'])
def get_users():
    phones = Smartphones.query.all()
    return jsonify([smartphones.serialize() for smartphones in phones]), 200