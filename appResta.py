from __future__ import print_function
from flask import Flask, jsonify, abort, make_response, request


app = Flask(__name__)

resultResta = 5 - 4;


@app.route('/', methods=['GET'])
def get_nodos():
    return jsonify(resultResta)


#revisa y ejecuta la aplicacion
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
