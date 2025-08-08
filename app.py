from flask import Flask, render_template, jsonify
from financial_data import financial_manager

app = Flask(__name__)

@app.route('/')
def index():
    """Page d'accueil du dashboard"""
    return render_template('index.html')

@app.route('/indices-actions')
def indices_actions():
    """Page des indices et actions"""
    return render_template('indices_actions.html')

@app.route('/call-put')
def call_put():
    """Page Call & Put"""
    return render_template('call_put.html')

@app.route('/greeks')
def greeks():
    """Page des Greeks"""
    return render_template('greeks.html')

@app.route('/volatility-surface')
def volatility_surface():
    """Page de la surface de volatilité"""
    return render_template('volatility_surface.html')

@app.route('/risk-var-svar')
def risk_var_svar():
    """Page VaR & SVAR"""
    return render_template('risk_var_svar.html')

# APIs pour les données financières
@app.route('/api/market-data')
def api_market_data():
    """API pour récupérer les données de marché"""
    try:
        data = financial_manager.get_market_data()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/chart-data/<symbol>')
def api_chart_data(symbol):
    """API pour récupérer les données de graphique"""
    try:
        data = financial_manager.get_chart_data(symbol)
        if data:
            return jsonify(data)
        else:
            return jsonify({'error': 'Données non disponibles'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/indices')
def api_indices():
    """API pour récupérer uniquement les indices"""
    try:
        data = financial_manager.get_market_data()
        return jsonify(data.get('indices', {}))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stocks')
def api_stocks():
    """API pour récupérer uniquement les actions"""
    try:
        data = financial_manager.get_market_data()
        return jsonify(data.get('stocks', {}))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
