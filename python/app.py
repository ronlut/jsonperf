import json

import six
import werkzeug
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

import benchmark
import libraries
from web import chart

app = Flask(__name__, static_folder=None)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 2
CORS(app) # todo: fix to receive only from https://jsonperf.com

BNCH = benchmark.Benchmark(sorted(libraries.instantiate_libraries(), key=lambda l: l.name))


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ['json', 'txt']


@app.route("/python3", methods=["POST"])
@app.route("/python2", methods=["POST"])
def test():
    user_file = request.files.get('file')  # type: werkzeug.datastructures.FileStorage
    if not user_file or user_file.filename == '':
        return 'file is missing', 400

    if not allowed_file(user_file.filename):
        return 'invalid file', 400

    filename = secure_filename(user_file.filename)

    # cl = request.content_length
    # if cl is not None and cl > 3 * 1024 * 1024:
    #     abort(413)

    test_json = user_file.stream.read().decode('utf-8')
    if not test_json:
        return 'empty file', 400

    test_json = six.ensure_str(test_json)

    try:
        json.loads(test_json)
    except ValueError:
        return 'invalid json', 400

    results = [(filename, BNCH.run(test_json, 100, 1))] # todo: dynamic times

    chart_data = chart.generate_chart_data(results)
    return jsonify(chart_data)


if __name__ == '__main__':
    app.run(debug=True)