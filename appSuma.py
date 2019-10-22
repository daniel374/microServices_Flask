from __future__ import print_function
from flask import Flask, jsonify, abort, make_response, request


app = Flask(__name__)

resultRuma = 5 + 4;


@app.route('/', methods=['GET'])
def get_nodos():
    return jsonify(resultRuma)


#revisa y ejecuta la aplicacion
if __name__ == '__main__':
    app.run(debug=True)
