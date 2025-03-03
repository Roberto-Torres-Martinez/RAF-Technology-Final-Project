from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):

    __tablename__ = 'user'
    
    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastname = db.Column(db.String(75), unique=False, nullable=False)
    email = db.Column(db.String(75), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    address = db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    birthday_date = db.Column(db.String(15), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    cart = db.relationship('Cart', backref= 'user')

    def __repr__(self):
        return f'<User {self.email, self.username}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password,
            "confirm_password": self.confirm_password,
            "username": self.username,
            "birthday_date": self.birthday_date,
            "is_active": self.is_active,
            "is_admin": self.is_admin,
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