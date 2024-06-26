import joblib
import pandas as pd

class Application:
    open: float
    high: float
    low: float
    volume: int
    year: int
    month: int
    day: int
    day_of_week: int
    quarter: int
    sma_20: float
    sma_50: float
    sma_100: float
    return_: float
    volatility_20: float
    volatility_50: float

    def __init__(self, open: float, high: float, low: float, volume: int, year: int, month: int, day: int, day_of_week: int, sma_20: float, sma_50: float, sma_100: float, return_: float, volatility_20: float, volatility_50: float):
        self.open = open
        self.high = high
        self.low = low
        self.volume = volume
        self.year = year
        self.month = month
        self.day = day
        self.day_of_week = day_of_week
        if int(month) <= 3:
            self.quarter = 1  # January, February, March
        elif int(month) <= 6:
            self.quarter = 2  # April, May, June
        elif int(month) <= 9:
            self.quarter = 3  # July, August, September
        else:
            self.quarter = 4  # October, November, December
        self.sma_20 = sma_20
        self.sma_50 = sma_50
        self.sma_100 = sma_100
        self.return_ = return_
        self.volatility_20 = volatility_20
        self.volatility_50 = volatility_50


    def run(self):
        # Load the model
        model_path = 'app/model.pkl'
        loaded_model = joblib.load(model_path)

        feature_names = ['open', 'high', 'low', 'volume', 'Year', 'Month', 'Day', 'DayOfWeek', 'Quarter',
                         'SMA_20', 'SMA_50', 'SMA_100', 'Return', 'Volatility_20', 'Volatility_50']

        # Assign Data
        test_data_dict = {
            'open': self.open, 'high': self.high, 'low': self.low, 'volume': self.volume,
            'Year': self.year, 'Month': self.month, 'Day': self.day, 'DayOfWeek': self.day_of_week,
            'Quarter': self.quarter, 'SMA_20': self.sma_20, 'SMA_50': self.sma_50, 'SMA_100': self.sma_100,
            'Return': self.return_, 'Volatility_20': self.volatility_20, 'Volatility_50': self.volatility_50
        }

        # Convert the dictionary to a DataFrame
        test_data = pd.DataFrame([test_data_dict], columns=feature_names)
        predictions = loaded_model.predict(test_data)
        return predictions[0]