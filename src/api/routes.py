"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Smartphones, TVs, Laptops
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import json
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


#ENDPOINTS USERS

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200


@api.route('/user-sinup', methods=['POST'])
def post_users():

    data = request.get_json()
    exist = User.query.filter_by(username=data['username']).first()

    if exist:
        return jsonify({"msg": "This User already exist in your list"}), 400
    
    email = request.json.get('email')
    password = request.json.get('password')
    username = request.json.get('username')

    if not email or  not password or not username:
        return jsonify({"msg" :  "missing data"}), 400

    new_user = User(
        name = data['name'],
        lastname = data['lastname'],
        email = data['email'],
        password = data['password'],
        username = data['username'],
        birthday_date = data['birthday_date'],
        is_active = True,
        is_admin =False,
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User added"}), 200

@api.route('/login', methods=["POST"])
def login_user():
    data = request.get_json()
    user = User.query.filter_by(username=data['username'], password=data['password']).first()
    if user is None:
        return jsonify({'msg': "password or username incorrect"}), 400

    access_token = create_access_token(identity=str(user.user_id))

    return jsonify({'token': access_token, 'user' : user.serialize()}), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def verify():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    return jsonify({'msg': 'area privida','id': user.user_id, 'username': user.username}), 200


@api.route('/users/<int:id_user>', methods=['DELETE'])
def delete_users(id_user):
    exist = User.query.filter_by(user_id=id_user).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "User deleted from data base"}), 200
    return jsonify({"msg": "No User id was found"}), 400

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

@api.route('/phone/<int:id_phone>', methods=['GET'])
def get_phones_individual(id_phone):
    phone = Smartphones.query.get(id_phone) 
    return jsonify(phone.serialize()), 200


@api.route('/phones/<int:id_smartphone>', methods=['DELETE'])
def delete_phones(id_smartphone):
    exist = Smartphones.query.filter_by(smartphone_id=id_smartphone).first()
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
        descripcion = data['descripcion_breve'],
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

@api.route('/tv/<int:id_tv>', methods=['GET'])
def get_tv_individual(id_tv):
    tv = TVs.query.get(id_tv)
    return jsonify(tv.serialize())


@api.route('/tvs/<int:id_tv>', methods=['DELETE'])
def delete_tvs(id_tv):
    exist = TVs.query.filter_by(tv_id=id_tv).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "TV deleted from data base"}), 200
    return jsonify({"msg": "No TV id was found"}), 400

#ENDPOINTS LAPTOPS

@api.route('/laptops', methods=['POST'])
def post_laptops():

    data = request.get_json()
    exist = Laptops.query.filter_by(modelo=data['nombre']).first()

    if exist:
        return jsonify({"msg": "This laptop already exist in your list"}), 400

    colores = data.get('colores', [])
    images = data.get('imagenes', {})

    new_laptop = Laptops(
        marca = data['marca'],
        modelo = data['nombre'],
        pantalla = data['pantalla'],
        procesador = data['procesador'],
        modelo_cpu = data['modelo_cpu'],
        sistema_operativo = data['sistema_operativo'],
        memoria_ram = data['memoria_ram'],
        almacenamiento = data['almacenamiento'],
        camara = data['camara'],
        bateria = data['bateria'],
        precio = data['precio'],
        tecnologia = data['tecnologia'],
        colores = colores,
        descripcion = data['descripcion'],
        funcion_especial = data['funcion_especial'],
        descripcion_tarjeta_grafica = data['descripcion_tarjeta_grafica'],
        imagen = images
    )

    db.session.add(new_laptop)
    db.session.commit()
    return jsonify({"msg": "Laptop added"}), 200

    
@api.route('/laptops', methods=['GET'])
def get_laptops():
    laptops = Laptops.query.all()
    return jsonify([Laptops.serialize() for Laptops in laptops]), 200

@api.route('/laptop/<int:id_laptop>', methods=['GET'])
def get_laptop_individual(id_laptop):
    laptop = Laptops.query.get(id_laptop)
    return jsonify(laptop.serialize())

@api.route('/laptops/<int:id_laptop>', methods=['DELETE'])
def delete_laptops(id_laptop):
    exist = Laptops.query.filter_by(laptop_id=id_laptop).first()
    if exist:
        db.session.delete(exist)
        db.session.commit()
        return jsonify({"msg": "Laptop deleted from data base"}), 200
    return jsonify({"msg": "No Laptop id was found"}), 400