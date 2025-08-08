# Equity Derivatives Dashboard - Flask

Un dashboard moderne pour l'analyse des dérivés d'actions, converti de React vers Flask avec données financières en temps réel.

## 🚀 Fonctionnalités

- **Interface moderne** avec Tailwind CSS et Lucide Icons
- **Navigation intuitive** avec sidebar responsive
- **Données financières en temps réel** via Yahoo Finance API
- **Actualisation automatique** toutes les 5 minutes
- **Graphiques interactifs** avec Chart.js
- **Pages spécialisées** :
  - Indices & Actions (avec données live)
  - Call & Put
  - Greeks (Delta, Gamma, Vega, Theta, Rho)
  - Volatility Surface
  - VaR & SVAR

## 🛠️ Installation

1. **Cloner le repository**
```bash
git clone https://github.com/MathisLeGallCytech/option-vision-hub.git
cd option-vision-hub
```

2. **Créer un environnement virtuel**
```bash
python -m venv venv
```

3. **Activer l'environnement virtuel**
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

4. **Installer les dépendances**
```bash
pip install -r requirements.txt
```

5. **Lancer l'application**
```bash
python app.py
```

6. **Ouvrir dans le navigateur**
```
http://localhost:5000
```

## 📁 Structure du projet

```
flaskProjectNatixisMathisLeGall/
├── app.py                 # Application Flask principale
├── financial_data.py      # Gestionnaire de données financières
├── requirements.txt       # Dépendances Python
├── README.md             # Documentation
├── static/               # Fichiers statiques (CSS, JS, images)
├── templates/            # Templates HTML Jinja2
│   ├── base.html         # Template de base
│   ├── index.html        # Page d'accueil
│   ├── indices_actions.html
│   ├── call_put.html
│   ├── greeks.html
│   ├── volatility_surface.html
│   └── risk_var_svar.html
└── venv/                 # Environnement virtuel Python
```

## 🎨 Interface

L'interface utilise :
- **Tailwind CSS** pour le styling
- **Lucide Icons** pour les icônes
- **Chart.js** pour les graphiques
- **Design system** cohérent avec thème sombre
- **Layout responsive** adapté à tous les écrans

## 📊 Données Financières

### APIs utilisées :
- **Yahoo Finance** (gratuit, pas de clé requise)
- **Alpha Vantage** (optionnel, 500 requêtes/jour gratuites)

### Indices suivis :
- CAC 40 (^FCHI)
- S&P 500 (^GSPC)
- NASDAQ (^IXIC)
- DAX (^GDAXI)
- FTSE 100 (^FTSE)
- NIKKEI (^N225)

### Actions suivies :
- Apple (AAPL)
- Microsoft (MSFT)
- Google (GOOGL)
- Amazon (AMZN)
- Tesla (TSLA)
- Meta (META)
- NVIDIA (NVDA)
- Netflix (NFLX)

## 🔧 Développement

Pour ajouter de nouvelles fonctionnalités :

1. **Ajouter une route** dans `app.py`
2. **Créer un template** dans `templates/`
3. **Mettre à jour la navigation** dans les templates
4. **Ajouter des données** dans `financial_data.py`

## 📝 Notes

- Interface convertie depuis React/TypeScript
- Structure modulaire et extensible
- Données financières en temps réel
- Cache intelligent pour optimiser les performances
- Prêt pour l'intégration de calculs financiers avancés

## 👨‍💻 Auteur

**Mathis Le Gall** - Projet Flask Derivatives

---

*Projet original créé avec Lovable.dev*
