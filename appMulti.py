from __future__ import print_function
from flask import Flask, jsonify, abort, make_response, request


app = Flask(__name__)

resultMulti = 5 * 4;


@app.route('/', methods=['GET'])
def get_multi():
    return jsonify(resultMulti)


#revisa y ejecuta la aplicacion
#Se inicia el servicio en otro puerto
if __name__ == '__main__':
    app.run(debug=True, port=4200)
