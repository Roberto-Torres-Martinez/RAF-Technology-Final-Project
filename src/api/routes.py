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


#ENDPOINTS USERS

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

@api.route('/users', methods=['POST'])
def post_tvs():

    data = request.get_json()
    exist = User.query.filter_by(user_id=data['user_id'], username=data['username']).first()

    if exist:
        return jsonify({"msg": "This User already exist in your list"}), 400

    new_user = User(
        user_id = data['user_id'],
        name = data['name'],
        lastname = data['lastname'],
        email = data['email'],
        password = data['password'],
        username = data['username'],
        birthday_date = data['birthday_date'],
        is_active = data['is_active'],
        is_admin = data['is_admin'],
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User added"}), 200

#ENDPOINTS PHONES

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
def get_phones():
    phones = Smartphones.query.all()
    return jsonify([smartphones.serialize() for smartphones in phones]), 200


@api.route('/phones/<int:smartphone_id>', methods=['DELETE'])
def delete_phones(id_smartphone):
    exist = Smartphones.query.filter_by(id_smartphone=smartphone_id).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "Smartphone deleted from data base"}), 200
    return jsonify({"msg": "No smartphone id was found"}), 400

#ENDPOINTS TVS

@api.route('/tvs', methods=['POST'])
def post_tvs():

    data = request.get_json()
    exist = TVs.query.filter_by(modelo=data['modelo']).first()

    if exist:
        return jsonify({"msg": "This TV already exist in your list"}), 400

    images = data.get('imagenes', [])
    new_tv = TVs(
        marca = data['marca'],
        contenido_de_la_caja = data['contenido_de_la_caja'],
        modelo = data['modelo'],
        usos_recomendados = data['usos_recomendados'],
        año_modelo = data['año_modelo'],
        fabricante = data['fabricante'],
        precio = data['precio'],
        descripcion = data['descripcion'],
        pantalla = data['pantalla'],
        conectividad = data['conectividad'],
        medidas = data['medidas'],
        imagen = images
    )
    db.session.add(new_tv)
    db.session.commit()
    return jsonify({"msg": "TV added"}), 200

@api.route('/tvs', methods=['GET'])
def get_tvs():
    tvs = TVs.query.all()
    return jsonify([TVs.serialize() for TVs in tvs]), 200


@api.route('/tvs/<int:tv_id>', methods=['DELETE'])
def delete_tvs(id_tv):
    exist = TVs.query.filter_by(id_tv=tv_id).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "TV deleted from data base"}), 200
    return jsonify({"msg": "No TV id was found"}), 400

#ENDPOINTS LAPTOPS

@api.route('/laptops', methods=['POST'])
def post_laptops():

    data = request.get_json()
    exist = Laptops.query.filter_by(modelo=data['modelo']).first()

    if exist:
        return jsonify({"msg": "This laptop already exist in your list"}), 400

    colores_str = json.dumps(data.get('colores', []))
    images_str = json.dumps(data.get('imagenes', {}))
    new_laptop = Laptops(
        marca = data['marca'],
        modelo = data['modelo'],
        pantalla = data['pantalla'],
        procesador = data['procesador'],
        modelo_cpu = data['modelo_cpu'],
        sistema_operativo = data['sistema_operativo'],
        memoria_ram = data['memoria_ram'],
        almacenamiento = data['almacenamiento'],
        camara = data['camara'],
        bateria = data['bateria'],
        precio = data['precio'],
        colores = colores_str,
        imagen = images_str
    )
    db.session.add(new_laptop)
    db.session.commit()
    return jsonify({"msg": "Laptop added"}), 200
    
@api.route('/laptops', methods=['GET'])
def get_laptops():
    laptops = Laptops.query.all()
    return jsonify([Laptops.serialize() for Laptops in laptops]), 200


@api.route('/laptops/<int:laptop_id>', methods=['DELETE'])
def delete_laptops(id_laptop):
    exist = Laptops.query.filter_by(id_laptop=laptop_id).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "Laptop deleted from data base"}), 200
    return jsonify({"msg": "No Laptop id was found"}), 400