import requests
import yfinance as yf
import pandas as pd
from datetime import datetime, timedelta
import time
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

class FinancialDataManager:
    def __init__(self):
        # Alpha Vantage API Key (gratuit)
        self.alpha_vantage_key = os.getenv('ALPHA_VANTAGE_KEY', 'demo')
        self.base_url = "https://www.alphavantage.co/query"
        
        # Cache pour éviter trop de requêtes
        self.cache = {}
        self.cache_duration = 300  # 5 minutes
        
        # Indices et actions populaires
        self.indices = {
            'CAC40': '^FCHI',
            'S&P500': '^GSPC',
            'NASDAQ': '^IXIC',
            'DAX': '^GDAXI',
            'FTSE100': '^FTSE',
            'NIKKEI': '^N225'
        }
        
        self.stocks = {
            'AAPL': 'Apple Inc.',
            'MSFT': 'Microsoft Corporation',
            'GOOGL': 'Alphabet Inc.',
            'AMZN': 'Amazon.com Inc.',
            'TSLA': 'Tesla Inc.',
            'META': 'Meta Platforms Inc.',
            'NVDA': 'NVIDIA Corporation',
            'NFLX': 'Netflix Inc.'
        }
    
    def get_alpha_vantage_data(self, symbol, function="TIME_SERIES_INTRADAY", interval="5min"):
        """Récupère les données via Alpha Vantage API"""
        try:
            params = {
                'function': function,
                'symbol': symbol,
                'interval': interval,
                'apikey': self.alpha_vantage_key,
                'outputsize': 'compact'
            }
            
            response = requests.get(self.base_url, params=params)
            response.raise_for_status()
            
            data = response.json()
            
            if 'Error Message' in data:
                print(f"Erreur Alpha Vantage pour {symbol}: {data['Error Message']}")
                return None
                
            if 'Note' in data:
                print(f"Limite API atteinte pour {symbol}: {data['Note']}")
                return None
            
            return data
            
        except Exception as e:
            print(f"Erreur lors de la récupération des données pour {symbol}: {e}")
            return None
    
    def get_yahoo_data(self, symbol, period="1d", interval="5m"):
        """Récupère les données via Yahoo Finance"""
        try:
            ticker = yf.Ticker(symbol)
            data = ticker.history(period=period, interval=interval)
            
            if data.empty:
                return None
                
            return data
            
        except Exception as e:
            print(f"Erreur Yahoo Finance pour {symbol}: {e}")
            return None
    
    def get_market_data(self, use_cache=True):
        """Récupère les données de marché pour tous les indices et actions"""
        current_time = time.time()
        
        # Vérifier le cache
        if use_cache and 'market_data' in self.cache:
            cache_time, cache_data = self.cache['market_data']
            if current_time - cache_time < self.cache_duration:
                return cache_data
        
        market_data = {
            'indices': {},
            'stocks': {},
            'timestamp': datetime.now().isoformat()
        }
        
        # Récupérer les données des indices
        print("Récupération des données des indices...")
        for name, symbol in self.indices.items():
            data = self.get_yahoo_data(symbol)
            if data is not None and not data.empty:
                latest = data.iloc[-1]
                market_data['indices'][name] = {
                    'symbol': symbol,
                    'price': round(latest['Close'], 2),
                    'change': round(latest['Close'] - data.iloc[-2]['Close'], 2),
                    'change_percent': round(((latest['Close'] - data.iloc[-2]['Close']) / data.iloc[-2]['Close']) * 100, 2),
                    'volume': int(latest['Volume']),
                    'high': round(latest['High'], 2),
                    'low': round(latest['Low'], 2),
                    'open': round(latest['Open'], 2)
                }
        
        # Récupérer les données des actions
        print("Récupération des données des actions...")
        for symbol, name in self.stocks.items():
            data = self.get_yahoo_data(symbol)
            if data is not None and not data.empty:
                latest = data.iloc[-1]
                market_data['stocks'][symbol] = {
                    'name': name,
                    'price': round(latest['Close'], 2),
                    'change': round(latest['Close'] - data.iloc[-2]['Close'], 2),
                    'change_percent': round(((latest['Close'] - data.iloc[-2]['Close']) / data.iloc[-2]['Close']) * 100, 2),
                    'volume': int(latest['Volume']),
                    'high': round(latest['High'], 2),
                    'low': round(latest['Low'], 2),
                    'open': round(latest['Open'], 2)
                }
        
        # Mettre en cache
        self.cache['market_data'] = (current_time, market_data)
        
        return market_data
    
    def get_chart_data(self, symbol, period="5d", interval="5m"):
        """Récupère les données pour les graphiques"""
        try:
            ticker = yf.Ticker(symbol)
            data = ticker.history(period=period, interval=interval)
            
            if data.empty:
                return None
            
            # Formater pour Chart.js
            chart_data = {
                'labels': [d.strftime('%H:%M') for d in data.index],
                'datasets': [{
                    'label': symbol,
                    'data': data['Close'].tolist(),
                    'borderColor': 'rgb(59, 130, 246)',
                    'backgroundColor': 'rgba(59, 130, 246, 0.1)',
                    'tension': 0.1
                }]
            }
            
            return chart_data
            
        except Exception as e:
            print(f"Erreur lors de la récupération des données de graphique pour {symbol}: {e}")
            return None

# Instance globale
financial_manager = FinancialDataManager()
