from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):

    __tablename__ = 'user'
    
    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=True)
    lastname = db.Column(db.String(75), unique=False, nullable=True)
    email = db.Column(db.String(75), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    address = db.Column(db.String(50), unique=False, nullable=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    birthday_date = db.Column(db.String(15), nullable=True)
    user_image = db.Column(db.String(200), nullable=True)
    is_active = db.Column(db.Boolean(), nullable=False)
    is_admin = db.Column(db.Boolean(), nullable=False)

    def __repr__(self):
        return f'<User {self.email, self.username}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password,
            "username": self.username,
            "address": self.address,
            "birthday_date": self.birthday_date,
            "image": self.user_image,
            "is_active": self.is_active,
            "is_admin": self.is_admin,
        }

class Pedido(db.Model):

    __tablename__ = 'pedido'

    pedido_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    direccion_de_envio = db.Column(db.String(150), unique=False, nullable=False)
    smartphone_id = db.Column(db.Integer, db.ForeignKey('smartphones.smartphone_id'))
    tv_id = db.Column(db.Integer, db.ForeignKey('tv.tv_id'))
    laptop_id = db.Column(db.Integer, db.ForeignKey('laptops.laptop_id'))
    smartphone_precio = db.Column(db.String(50), unique=False, nullable=True)
    tv_precio = db.Column(db.String(50), unique=False, nullable=True)
    laptop_precio = db.Column(db.String(50), unique=False, nullable=True)
    precio_total = db.Column(db.String(50), unique=False, nullable=True)
    user = db.relationship('User', backref= 'pedido')
    cart_smartphones = db.relationship('CartSmartphones', backref= 'pedido')

    def __repr__(self):
        return f'<Pedido {self.pedido_id, self.user_id}>'

    def serialize(self):
        return {
            "pedido_id": self.pedido_id,
            "user_id": self.user_id,
            "direccion_de_envio": self.direccion_de_envio,
            "cart_smartphones": [smartphone.serialize() for smartphone in self.cart_smartphones] 
        }

class CartSmartphones(db.Model):

    __tablename__ = 'cart_smartphones'

    cart_smartphone_id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('pedido.pedido_id'))
    smartphone_id = db.Column(db.Integer, db.ForeignKey('smartphones.smartphone_id'))
    smartphone = db.relationship('Smartphones', backref= 'cart_smartphones')

    def serialize(self):
        return {
            "cart_smartphone_id": self.cart_smartphone_id,
            "smartphone_id": self.smartphone_id,
            "smartphone_precio": self.smartphone.serialize()['precio'],
            "smartphone_modelo": self.smartphone.serialize()['modelo'],
        }


class CartLaptops(db.Model):

    __tablename__ = 'cart_laptops'

    cart_laptop_id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('pedido.pedido_id'))
    laptop_id = db.Column(db.Integer, db.ForeignKey('laptops.laptop_id'))
    laptop = db.relationship('Laptops', backref= 'cart_laptops')

    def serialize(self):
        return {
            "cart_smartphone_id": self.cart_laptop_id,
            "smartphone_id": self.laptop_id,
            "laptop_precio": self.laptop.serialize()['precio'],
            "laptop_modelo": self.laptop.serialize()['modelo'],
        }


class CartTvs(db.Model):

    __tablename__ = 'cart_tvs'

    cart_tv_id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('pedido.pedido_id'))
    tv_id = db.Column(db.Integer, db.ForeignKey('tv.tv_id'))
    tvs = db.relationship('TVs', backref= 'cart_tvs')

    def serialize(self):
        return {
            "cart_smartphone_id": self.cart_tv_id,
            "tv_id": self.tv_id,
            "tv_precio": self.tv.serialize()['precio'],
            "tv_modelo": self.tv.serialize()['modelo'],
        }


class Smartphones(db.Model):

    __tablename__ = 'smartphones'

    smartphone_id = db.Column(db.Integer, primary_key=True)
    modelo = db.Column(db.String(150), unique=False, nullable=False)
    pantalla = db.Column(db.String(150), unique=False, nullable=False)
    procesador = db.Column(db.String(150), unique=False, nullable=False)
    memoria_ram = db.Column(db.String(150), unique=False, nullable=False)
    almacenamiento = db.Column(db.String(150), unique=False, nullable=False)
    camara = db.Column(db.String(150), unique=False, nullable=False)
    bateria = db.Column(db.String(150), unique=False, nullable=False)
    precio = db.Column(db.String(50), unique=False, nullable=False)
    conectividad = db.Column(db.String(150), unique=False, nullable=False)
    colores = db.Column(db.JSON, unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=False, nullable=False)
    imagen = db.Column(db.JSON, unique=False,)
    pedido = db.relationship('Pedido', backref= 'smartphones')

    def __repr__(self):
        return f'<Smartphones {self.modelo, self.precio}>'

    def serialize(self):
        return {
            "smartphone_id": self.smartphone_id,
            "modelo": self.modelo,
            "pantalla" : self.pantalla,
            "procesador" : self.procesador,
            "memoria_ram" : self.memoria_ram,
            "almacenamiento" : self.almacenamiento,
            "camara" : self.camara,
            "bateria" : self.bateria,
            "precio" : self.precio,
            "conectividad" : self.conectividad,
            "colores" : self.colores,
            "descripcion" : self.descripcion,
            "imagen" : self.imagen,
        }

class TVs(db.Model):

    __tablename__ = 'tv'

    tv_id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(150), unique=False, nullable=False)
    contenido_de_la_caja = db.Column(db.String(150), unique=False, nullable=False)
    modelo = db.Column(db.String(150), unique=False, nullable=False)
    usos_recomendados = db.Column(db.String(150), unique=False, nullable=False)
    año_modelo = db.Column(db.String(50), unique=False, nullable=False)
    fabricante = db.Column(db.String(150), unique=False, nullable=False)
    precio = db.Column(db.String(50), unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=False, nullable=False)
    pantalla = db.Column(db.String(150), unique=False, nullable=False)
    conectividad = db.Column(db.String(150), unique=False, nullable=False)
    medidas = db.Column(db.String(50), unique=False, nullable=False)
    imagen = db.Column(db.JSON, unique=False, nullable=False)
    pedido = db.relationship('Pedido', backref= 'tv')

    def __repr__(self):
        return f'<TVs {self.modelo, self.marca, self.precio}>'

    def serialize(self):
        return {
            "tv_id": self.tv_id,
            "marca": self.marca,
            "contenido_de_la_caja" : self.contenido_de_la_caja,
            "modelo" : self.modelo,
            "usos_recomendados" : self.usos_recomendados,
            "año_modelo" : self.año_modelo,
            "fabricante" : self.fabricante,
            "precio" : self.precio,
            "descripcion" : self.descripcion,
            "pantalla" : self.pantalla,
            "conectividad" : self.conectividad,
            "medidas" : self.medidas,
            "imagen" : self.imagen,
        }

class Laptops(db.Model):

    __tablename__ = 'laptops'

    laptop_id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(150), unique=False, nullable=False)
    modelo = db.Column(db.String(150), unique=False, nullable=False)
    pantalla = db.Column(db.String(150), unique=False, nullable=False)
    procesador = db.Column(db.String(150), unique=False, nullable=False)
    modelo_cpu = db.Column(db.String(150), unique=False, nullable=False)
    sistema_operativo = db.Column(db.String(150), unique=False, nullable=False)
    memoria_ram = db.Column(db.String(150), unique=False, nullable=False)
    almacenamiento = db.Column(db.String(300), unique=False, nullable=False)
    camara = db.Column(db.String(150), unique=False, nullable=False)
    bateria = db.Column(db.String(150), unique=False, nullable=False)
    precio = db.Column(db.String(50), unique=False, nullable=False)
    tecnologia = db.Column(db.String(150), unique=False, nullable=False)
    colores = db.Column(db.JSON, unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=False, nullable=False)
    imagen = db.Column(db.JSON, unique=False, nullable=False)
    funcion_especial = db.Column(db.String(300), unique=False, nullable=False)
    descripcion_tarjeta_grafica = db.Column(db.String(300), unique=False, nullable=False)
    pedido = db.relationship('Pedido', backref= 'laptops')

    def __repr__(self):
        return f'<Laptops {self.modelo, self.marca, self.precio}>'
        
    def serialize(self):
        return {
            "laptop_id": self.laptop_id,
            "marca": self.marca,
            "modelo" : self.modelo,
            "pantalla" : self.pantalla,
            "procesador" : self.procesador,
            "modelo_cpu" : self.modelo_cpu,
            "sistema_operativo" : self.sistema_operativo,
            "memoria_ram" : self.memoria_ram,
            "almacenamiento" : self.almacenamiento,
            "camara" : self.camara,
            "bateria" : self.bateria,
            "precio" : self.precio,
            "tecnologia" : self.tecnologia,
            "colores" : self.colores,
            "descripcion" : self.descripcion,
            "imagen" : self.imagen,
            "funcion_especial": self.funcion_especial,
            "descripcion_tarjeta_grafica": self.descripcion_tarjeta_grafica
        }