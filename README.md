# Portfolio - Sûreté de Fonctionnement & Maintenance Prédictive

## 📋 Description

Portfolio universitaire interactif présentant les concepts fondamentaux de l'ingénierie de fiabilité, de la sûreté de fonctionnement et de la maintenance prédictive. Ce projet démontre l'application pratique des méthodes statistiques, des analyses de risques et des techniques de machine learning pour optimiser la disponibilité et la fiabilité des systèmes industriels.

## ✨ Fonctionnalités

### 📊 Modules Principaux

1. **Estimation Statistique**
   - Analyse interactive de Weibull avec paramètres ajustables
   - Distributions de probabilité (Weibull, Exponentielle, Log-Normale)
   - Visualisation des courbes de fiabilité et taux de risque
   - Exemples de code Python avec scipy

2. **Modélisation de Fiabilité**
   - Systèmes en série et parallèle
   - Calculs de disponibilité (intrinsèque, atteinte, opérationnelle)
   - Diagrammes de blocs de fiabilité

3. **Analyse des Défaillances**
   - Classification des modes de défaillance (matériels, logiciels, humains)
   - Distribution statistique des défaillances
   - Graphiques interactifs avec Recharts

4. **Fiabilité Logicielle & Humaine**
   - Modèle de Jelinski-Moranda
   - Modèle de Goel-Okumoto
   - THERP (Technique de Prédiction du Taux d'Erreur Humaine)
   - HEART (Évaluation de l'Erreur Humaine)

5. **Analyse des Risques**
   - AMDEC (Analyse des Modes de Défaillance et de leurs Effets)
   - Arbre de Défaillances (FTA)
   - Analyse en Nœud Papillon
   - Calcul des IPR (Indice de Priorité de Risque)

6. **Maintenance Prédictive**
   - Comparaison de modèles ML (Random Forest, Neural Networks, SVM, XGBoost)
   - Graphiques radar des performances
   - Évolution des stratégies de maintenance
   - Tendances correctives vs prédictives

7. **Tableau de Bord KPI**
   - MTBF (Mean Time Between Failures)
   - MTTR (Mean Time To Repair)
   - Disponibilité en temps réel
   - Taux de défaillance

8. **Ressources & Articles**
   - Publications académiques fondamentales
   - Standards internationaux (IEC 61508, MIL-HDBK-217F, ISO 14224)
   - Articles de recherche récents
   - Outils et logiciels de fiabilité

9. **Visualiseur PDF**
   - Lecture de documents techniques
   - Navigation par pages
   - Support de 3 documents de référence

## 🛠️ Technologies Utilisées

### Frontend
- **React 19.2.0** - Framework UI moderne
- **TypeScript** - Typage statique
- **Vite 7.3.1** - Build tool rapide
- **Tailwind CSS 4.1.18** - Framework CSS utility-first

### Bibliothèques
- **Recharts 3.6.0** - Graphiques et visualisations de données
- **Lucide React 0.562.0** - Icônes modernes
- **react-pdf** - Visualisation de documents PDF
- **pdfjs-dist** - Moteur de rendu PDF

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/AdamBfID/portfolioSuretedeFonction.git
cd portfolioSuretedeFonction
```

2. **Installer les dépendances**
```bash
cd frontend
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Accéder à l'application**
Ouvrez votre navigateur à l'adresse : `http://localhost:5173`

## 📁 Structure du Projet

```
portfolioSuretedeFonction/
├── frontend/
│   ├── public/
│   │   └── pdfs/              # Documents PDF de référence
│   ├── src/
│   │   ├── components/
│   │   │   └── home.tsx       # Composant principal du portfolio
│   │   ├── App.tsx            # Composant racine
│   │   ├── main.tsx           # Point d'entrée
│   │   └── index.css          # Styles Tailwind
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 📚 Utilisation

### Navigation
Utilisez la barre latérale pour naviguer entre les différentes sections :
- Cliquez sur une section pour afficher son contenu
- Le mode sombre/clair est disponible via le bouton en haut à droite
- La barre latérale peut être masquée pour plus d'espace

### Interactivité
- **Analyse de Weibull** : Ajustez les curseurs β (forme) et η (échelle) pour voir l'impact sur la fiabilité
- **Graphiques** : Survolez les graphiques pour voir les valeurs détaillées
- **PDF** : Sélectionnez un document et naviguez entre les pages

### Documents PDF
Placez vos documents PDF dans `/frontend/public/pdfs/` avec les noms suivants :
- `document1.pdf` - Guide de Fiabilité
- `document2.pdf` - Analyse AMDEC
- `document3.pdf` - Maintenance Prédictive

## 🎨 Personnalisation

### Modifier les données
Les données sont définies dans `home.tsx` :
- `kpiData` : Indicateurs de performance
- `fmeaData` : Données AMDEC
- `maintenanceData` : Historique de maintenance
- `mlPerformance` : Performances des modèles ML

### Ajuster les styles
Le projet utilise Tailwind CSS v4. Personnalisez les couleurs et styles dans :
- `tailwind.config.js` pour la configuration globale
- Classes inline dans les composants

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Linter
npm run lint
```

## 📊 Concepts Couverts

### Statistiques
- Distribution de Weibull
- Distribution Exponentielle
- Distribution Log-Normale
- Estimation paramétrique

### Fiabilité
- MTBF / MTTR
- Taux de défaillance (λ)
- Fonction de fiabilité R(t)
- Fonction de risque h(t)

### Analyse de Risques
- AMDEC / FMECA
- Arbre de Défaillances (FTA)
- Nœud Papillon
- Criticité et IPR

### Machine Learning
- Random Forest
- Réseaux de Neurones
- SVM
- XGBoost
- Métriques : Accuracy, Precision, Recall, F1-Score

## 🎓 Cas d'Usage Pédagogiques

Ce portfolio est idéal pour :
- Projets universitaires en ingénierie de fiabilité
- Présentations de concepts de sûreté de fonctionnement
- Démonstrations de maintenance prédictive
- Enseignement des méthodes d'analyse de risques
- Portfolio professionnel en fiabilité industrielle

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est un projet universitaire à but éducatif.

## 👤 Auteur

**Adam**
- GitHub: [@AdamBfID](https://github.com/AdamBfID)
- Repository: [SNCFTTrainDelayPrediction](https://github.com/AdamBfID/SNCFTTrainDelayPrediction)

## 🙏 Remerciements

- Documentation académique de référence (Birolini, Rausand & Høyland)
- Standards internationaux (IEC, ISO, MIL)
- Communauté open-source (React, Recharts, Tailwind)
- Articles de recherche en maintenance prédictive

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Note** : Ce projet utilise des données fictives à des fins de démonstration. Pour une utilisation en environnement réel, adaptez les données et paramètres à votre contexte spécifique.
