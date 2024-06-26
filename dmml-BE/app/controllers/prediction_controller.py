from app import app
from flask import request, jsonify
from app.application import Application

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == "POST":
        # Parse JSON data from the request
        data = request.json

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Extract specific data fields
        open_price = data.get('open')
        high_price = data.get('high')
        low_price = data.get('low')
        volume = data.get('volume')
        year = data.get('year')
        month = data.get('month')
        day = data.get('day')
        day_of_week = data.get('day_of_week')
        sma_20 = data.get('sma_20')
        sma_50 = data.get('sma_50')
        sma_100 = data.get('sma_100')
        return_rate = data.get('return')
        volatility_20 = data.get('volatility_20')
        volatility_50 = data.get('volatility_50')

        # Validate the required fields
        required_fields = ['open', 'high', 'low', 'volume', 'year', 'month', 'day', 'day_of_week', 'sma_20',
                           'sma_50', 'sma_100', 'return', 'volatility_20', 'volatility_50']
        missing_fields = [field for field in required_fields if data.get(field) is None]

        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

        # Create an instance of the Application class
        model = Application(open_price, high_price, low_price, volume, year, month, day, day_of_week, sma_20, sma_50, sma_100, return_rate, volatility_20, volatility_50)

        output = jsonify({
            'close': model.run()
        })
        return output