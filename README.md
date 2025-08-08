# Equity Derivatives Dashboard - Flask

Un dashboard moderne pour l'analyse des dérivés d'actions, converti de React vers Flask.

## 🚀 Fonctionnalités

- **Interface moderne** avec Tailwind CSS et Lucide Icons
- **Navigation intuitive** avec sidebar responsive
- **Pages spécialisées** :
  - Indices & Actions
  - Call & Put
  - Greeks (Delta, Gamma, Vega, Theta, Rho)
  - Volatility Surface
  - VaR & SVAR

## 🛠️ Installation

1. **Cloner le repository**
```bash
git clone https://github.com/MathisLeGallCytech/flask-derivatives-dashboard.git
cd flask-derivatives-dashboard
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
- **Design system** cohérent avec thème sombre
- **Layout responsive** adapté à tous les écrans

## 🔧 Développement

Pour ajouter de nouvelles fonctionnalités :

1. **Ajouter une route** dans `app.py`
2. **Créer un template** dans `templates/`
3. **Mettre à jour la navigation** dans les templates

## 📝 Notes

- Interface convertie depuis React/TypeScript
- Structure modulaire et extensible
- Prêt pour l'intégration de graphiques et calculs financiers

## 👨‍💻 Auteur

**Mathis Le Gall** - Projet Flask Derivatives
