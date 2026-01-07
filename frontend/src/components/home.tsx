import { useState, useMemo } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Sun, Moon, Menu, X, Download, ChevronRight, Activity, TrendingUp, AlertTriangle, Database, BookOpen, Settings, BarChart3, Target, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ReliabilityPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPdf, setSelectedPdf] = useState(0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  const [weibullBeta, setWeibullBeta] = useState(2);
  const [weibullEta, setWeibullEta] = useState(1000);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Activity },
    { id: 'estimation', label: 'Estimation Statistique', icon: TrendingUp },
    { id: 'modeling', label: 'Modélisation de Fiabilité', icon: Settings },
    { id: 'failure', label: 'Analyse des Défaillances', icon: AlertTriangle },
    { id: 'software', label: 'Fiabilité Logicielle & Humaine', icon: Database },
    { id: 'risk', label: 'Analyse des Risques', icon: Target },
    { id: 'predictive', label: 'Maintenance Prédictive', icon: BarChart3 },
    { id: 'kpi', label: 'Tableau de Bord KPI', icon: Activity },
    { id: 'decision', label: 'Décisions Basées sur les Données', icon: TrendingUp },
    { id: 'cases', label: 'Études de Cas', icon: BookOpen },
    { id: 'resources', label: 'Ressources & Articles', icon: FileText },
    { id: 'annexes', label: 'Annexes', icon: Download }
  ];

  const reliabilityData = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const t = i * 20;
      const reliability = Math.exp(-Math.pow(t / weibullEta, weibullBeta));
      return {
        time: t,
        reliability: (reliability * 100).toFixed(2),
        hazard: (weibullBeta / weibullEta * Math.pow(t / weibullEta, weibullBeta - 1)).toFixed(4)
      };
    });
  }, [weibullBeta, weibullEta]);

  const kpiData = [
    { name: 'MTBF', value: 8760, unit: 'heures', color: '#10b981' },
    { name: 'MTTR', value: 4.2, unit: 'heures', color: '#3b82f6' },
    { name: 'Disponibilité', value: 99.95, unit: '%', color: '#8b5cf6' },
    { name: 'Taux de Défaillance', value: 0.000114, unit: '1/h', color: '#ef4444' }
  ];

  const fmeaData = [
    { component: 'Roulement', mode: 'Fatigue', severity: 8, occurrence: 5, detection: 6, rpn: 240 },
    { component: 'Capteur', mode: 'Dérive', severity: 6, occurrence: 4, detection: 3, rpn: 72 },
    { component: 'Moteur', mode: 'Surchauffe', severity: 9, occurrence: 3, detection: 4, rpn: 108 },
    { component: 'Contrôleur', mode: 'Bug Logiciel', severity: 7, occurrence: 2, detection: 5, rpn: 70 }
  ];

  const maintenanceData = [
    { month: 'Jan', corrective: 12, preventive: 8, predictive: 3 },
    { month: 'Fév', corrective: 10, preventive: 9, predictive: 5 },
    { month: 'Mar', corrective: 8, preventive: 10, predictive: 7 },
    { month: 'Avr', corrective: 6, preventive: 11, predictive: 9 },
    { month: 'Mai', corrective: 5, preventive: 10, predictive: 12 },
    { month: 'Jun', corrective: 3, preventive: 9, predictive: 15 }
  ];

  const mlPerformance = [
    { model: 'Forêt Aléatoire', accuracy: 94.5, precision: 92.3, recall: 96.1, f1: 94.2 },
    { model: 'Réseau de Neurones', accuracy: 96.2, precision: 95.1, recall: 97.3, f1: 96.2 },
    { model: 'SVM', accuracy: 91.8, precision: 89.7, recall: 93.4, f1: 91.5 },
    { model: 'XGBoost', accuracy: 95.7, precision: 94.2, recall: 96.8, f1: 95.5 }
  ];

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-gray-100' 
    : 'bg-gray-50 text-gray-900';
  
  const cardClasses = darkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';

  const HomePage = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className={`${cardClasses} border rounded-xl p-8 shadow-lg`}>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Ingénierie de Fiabilité & Maintenance Prédictive
        </h1>
        <p className="text-xl mb-6 opacity-80">
          Projet Universitaire Avancé sur la Fiabilité des Systèmes, l'Analyse de Sécurité et les Stratégies de Maintenance Basées sur les Données
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium">
            Sûreté de Fonctionnement
          </span>
          <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm font-medium">
            Maintenance Prédictive
          </span>
          <span className="px-4 py-2 bg-green-500/20 rounded-full text-sm font-medium">
            Analyse des Risques
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className={`${cardClasses} border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow`}>
            <div className="text-sm opacity-70 mb-2">{kpi.name}</div>
            <div className="text-3xl font-bold mb-1" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-xs opacity-60">{kpi.unit}</div>
          </div>
        ))}
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Fiabilité du Système dans le Temps</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={reliabilityData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="time" stroke={darkMode ? '#9ca3af' : '#4b5563'} />
            <YAxis stroke={darkMode ? '#9ca3af' : '#4b5563'} />
            <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
            <Area type="monotone" dataKey="reliability" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const EstimationSection = () => (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Estimation Statistique</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Distribution de Weibull', desc: 'Modélise le temps jusqu\'à défaillance avec paramètres de forme et d\'échelle', formula: 'f(t) = (β/η)(t/η)^(β-1)e^(-(t/η)^β)' },
          { name: 'Distribution Exponentielle', desc: 'Modèle à taux de défaillance constant', formula: 'f(t) = λe^(-λt)' },
          { name: 'Distribution Log-Normale', desc: 'Le logarithme de la variable est normalement distribué', formula: 'f(t) = 1/(tσ√2π)e^(-(ln t-μ)²/2σ²)' }
        ].map((dist, idx) => (
          <div key={idx} className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
            <h3 className="text-xl font-semibold mb-3 text-blue-500">{dist.name}</h3>
            <p className="text-sm opacity-80 mb-4">{dist.desc}</p>
            <code className={`text-xs p-3 rounded block ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              {dist.formula}
            </code>
          </div>
        ))}
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-6">Analyse Interactive de Weibull</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-medium">Paramètre de Forme (β): {weibullBeta.toFixed(2)}</label>
            <input 
              type="range" 
              min="0.5" 
              max="5" 
              step="0.1" 
              value={weibullBeta}
              onChange={(e) => setWeibullBeta(parseFloat(e.target.value))}
              className="w-full"
            />
            <p className="text-sm opacity-70 mt-2">
              {weibullBeta < 1 ? 'Taux de défaillance décroissant' : weibullBeta === 1 ? 'Taux de défaillance constant' : 'Taux de défaillance croissant (usure)'}
            </p>
          </div>
          <div>
            <label className="block mb-2 font-medium">Paramètre d'Échelle (η): {weibullEta}</label>
            <input 
              type="range" 
              min="500" 
              max="2000" 
              step="100" 
              value={weibullEta}
              onChange={(e) => setWeibullEta(parseFloat(e.target.value))}
              className="w-full"
            />
            <p className="text-sm opacity-70 mt-2">Durée de vie caractéristique du composant</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={reliabilityData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="time" label={{ value: 'Temps (heures)', position: 'insideBottom', offset: -5 }} stroke={darkMode ? '#9ca3af' : '#4b5563'} />
            <YAxis yAxisId="left" label={{ value: 'Fiabilité (%)', angle: -90, position: 'insideLeft' }} stroke={darkMode ? '#9ca3af' : '#4b5563'} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Taux de Risque', angle: 90, position: 'insideRight' }} stroke={darkMode ? '#9ca3af' : '#4b5563'} />
            <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="reliability" stroke="#3b82f6" strokeWidth={2} name="Fiabilité (%)" />
            <Line yAxisId="right" type="monotone" dataKey="hazard" stroke="#ef4444" strokeWidth={2} name="Taux de Risque" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4">Exemple de Code Python</h3>
        <pre className={`text-sm p-4 rounded overflow-x-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
{`import numpy as np
from scipy.stats import weibull_min

# Paramètres de Weibull
beta = ${weibullBeta.toFixed(2)}  # Paramètre de forme
eta = ${weibullEta}   # Paramètre d'échelle

# Générer un tableau de temps
t = np.linspace(0, 2000, 100)

# Calculer la fiabilité
reliability = weibull_min.sf(t, beta, scale=eta)

# Calculer le taux de risque
hazard = (beta/eta) * (t/eta)**(beta-1)

# Calcul du MTBF
mtbf = eta * np.gamma(1 + 1/beta)
print(f"MTBF: {mtbf:.2f} heures")`}
        </pre>
      </div>
    </div>
  );

  const ModelingSection = () => (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Modélisation de Fiabilité & Disponibilité</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
          <h3 className="text-xl font-semibold mb-4">Système en Série</h3>
          <p className="mb-4 opacity-80">Tous les composants doivent fonctionner pour le succès du système</p>
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3].map(n => (
              <div key={n} className="w-20 h-20 bg-blue-500/20 rounded-lg flex items-center justify-center border-2 border-blue-500">
                C{n}
              </div>
            ))}
          </div>
          <code className={`text-sm p-3 rounded block ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            R_sys = R₁ × R₂ × R₃
          </code>
        </div>

        <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
          <h3 className="text-xl font-semibold mb-4">Système Parallèle (Redondance)</h3>
          <p className="mb-4 opacity-80">Au moins un composant doit fonctionner</p>
          <div className="flex flex-col items-center space-y-2 mb-4">
            {[1, 2, 3].map(n => (
              <div key={n} className="w-20 h-20 bg-green-500/20 rounded-lg flex items-center justify-center border-2 border-green-500">
                C{n}
              </div>
            ))}
          </div>
          <code className={`text-sm p-3 rounded block ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            R_sys = 1 - (1-R₁)(1-R₂)(1-R₃)
          </code>
        </div>
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Analyse de Disponibilité</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">99.95%</div>
            <div className="text-sm opacity-70">Disponibilité Intrinsèque</div>
            <code className="text-xs mt-2 block">A = MTBF/(MTBF+MTTR)</code>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">99.82%</div>
            <div className="text-sm opacity-70">Disponibilité Atteinte</div>
            <code className="text-xs mt-2 block">Inclut l'arrêt MP</code>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">99.67%</div>
            <div className="text-sm opacity-70">Disponibilité Opérationnelle</div>
            <code className="text-xs mt-2 block">Inclut délais logistiques</code>
          </div>
        </div>
      </div>
    </div>
  );

  const FailureAnalysisSection = () => (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Analyse des Défaillances</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { type: 'Défaillances Matérielles', count: 45, color: '#ef4444', examples: ['Usure des roulements', 'Corrosion', 'Fissures de fatigue'] },
          { type: 'Défaillances Logicielles', count: 23, color: '#3b82f6', examples: ['Erreurs logiques', 'Fuites mémoire', 'Conditions de concurrence'] },
          { type: 'Erreurs Humaines', count: 12, color: '#f59e0b', examples: ['Erreurs d\'opérateur', 'Erreurs de maintenance', 'Défauts de conception'] }
        ].map((cat, idx) => (
          <div key={idx} className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: cat.color }}>{cat.type}</h3>
            <div className="text-4xl font-bold mb-4">{cat.count}</div>
            <ul className="space-y-2">
              {cat.examples.map((ex, i) => (
                <li key={i} className="text-sm opacity-80 flex items-start">
                  <ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Distribution des Modes de Défaillance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'Mécanique', value: 40, color: '#ef4444' },
                { name: 'Électrique', value: 25, color: '#3b82f6' },
                { name: 'Logiciel', value: 20, color: '#8b5cf6' },
                { name: 'Humain', value: 15, color: '#f59e0b' }
              ]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={(entry) => `${entry.name}: ${entry.value}%`}
            >
              {[
                { name: 'Mécanique', value: 40, color: '#ef4444' },
                { name: 'Électrique', value: 25, color: '#3b82f6' },
                { name: 'Logiciel', value: 20, color: '#8b5cf6' },
                { name: 'Humain', value: 15, color: '#f59e0b' }
              ].map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const SoftwareReliabilitySection = () => (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6">Fiabilité Logicielle & Humaine</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Modèle de Jelinski-Moranda</h3>
          <p className="mb-4 opacity-80">Suppose un taux de détection constant par défaut</p>
          <code className={`text-sm p-3 rounded block mb-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            λ(t) = φ[N - (i-1)]
          </code>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />N: Nombre initial de défauts</li>
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />φ: Constante du taux de détection</li>
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />i: Numéro de défaillance actuel</li>
          </ul>
        </div>

        <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Modèle de Goel-Okumoto</h3>
          <p className="mb-4 opacity-80">Processus de Poisson non homogène</p>
          <code className={`text-sm p-3 rounded block mb-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            m(t) = a(1 - e^(-bt))
          </code>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />a: Total attendu de défauts</li>
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />b: Taux de détection de défauts</li>
            <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />m(t): Défauts cumulatifs</li>
          </ul>
        </div>
      </div>

      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-6">Analyse de Fiabilité Humaine</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-500">THERP (Technique de Prédiction du Taux d'Erreur Humaine)</h3>
            <p className="text-sm opacity-80 mb-4">Approche par arbre d'événements avec probabilités d'erreur humaine de base</p>
            <div className={`p-4 rounded ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <div className="text-sm space-y-2">
                <div className="flex justify-between"><span>Tâche simple:</span><span className="font-mono">0.001</span></div>
                <div className="flex justify-between"><span>Tâche modérée:</span><span className="font-mono">0.01</span></div>
                <div className="flex justify-between"><span>Tâche complexe:</span><span className="font-mono">0.1</span></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-500">HEART (Évaluation de l'Erreur Humaine)</h3>
            <p className="text-sm opacity-80 mb-4">Approche basée sur des multiplicateurs considérant les conditions productrices d'erreurs</p>
            <code className={`text-sm p-3 rounded block ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              HEP = Nominal × Π(EPCᵢ)
            </code>
          </div>
        </div>
      </div>
    </div>
  );


  const RiskAnalysisSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Analyse des Risques</h1>
    
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg overflow-x-auto`}>
      <h2 className="text-2xl font-bold mb-4">AMDEC (Analyse des Modes de Défaillance et de leurs Effets)</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left p-3">Composant</th>
            <th className="text-left p-3">Mode de défaillance</th>
            <th className="text-center p-3">Gravité (S)</th>
            <th className="text-center p-3">Occurrence (O)</th>
            <th className="text-center p-3">Détection (D)</th>
            <th className="text-center p-3">IPR</th>
          </tr>
        </thead>
        <tbody>
          {fmeaData.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="p-3 font-medium">{row.component}</td>
              <td className="p-3">{row.mode}</td>
              <td className="p-3 text-center">{row.severity}</td>
              <td className="p-3 text-center">{row.occurrence}</td>
              <td className="p-3 text-center">{row.detection}</td>
              <td className="p-3 text-center">
                <span className={`px-3 py-1 rounded font-bold ${row.rpn > 200 ? 'bg-red-500/20 text-red-500' : row.rpn > 100 ? 'bg-orange-500/20 text-orange-500' : 'bg-green-500/20 text-green-500'}`}>
                  {row.rpn}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Analyse par Arbre de Défaillances (ADF)</h3>
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="px-4 py-2 bg-red-500/20 border-2 border-red-500 rounded">Événement Final : Défaillance du Système</div>
            <div className="text-2xl">∨</div>
            <div className="flex space-x-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="px-3 py-2 bg-orange-500/20 border border-orange-500 rounded text-sm">Défaillance du Composant A</div>
                <div className="text-sm opacity-70">P = 0.05</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="px-3 py-2 bg-orange-500/20 border border-orange-500 rounded text-sm">Défaillance du Composant B</div>
                <div className="text-sm opacity-70">P = 0.03</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 p-3 bg-blue-500/10 rounded">
            <div className="text-sm opacity-70 mb-1">Probabilité de Défaillance du Système</div>
            <div className="text-2xl font-bold text-blue-500">0.0785</div>
          </div>
        </div>
      </div>
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-purple-500">Analyse en Nœud Papillon</h3>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-64">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-2">
              <div className="text-xs px-2 py-1 bg-yellow-500/20 rounded">Menace 1</div>
              <div className="text-xs px-2 py-1 bg-yellow-500/20 rounded">Menace 2</div>
              <div className="text-xs px-2 py-1 bg-yellow-500/20 rounded">Menace 3</div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-red-500/20 border-2 border-red-500 rounded font-bold">
              DANGER
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-2">
              <div className="text-xs px-2 py-1 bg-green-500/20 rounded">Conséquence 1</div>
              <div className="text-xs px-2 py-1 bg-green-500/20 rounded">Conséquence 2</div>
              <div className="text-xs px-2 py-1 bg-green-500/20 rounded">Conséquence 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PredictiveMaintenanceSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Maintenance Prédictive</h1>
    
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Comparaison des Performances des Modèles ML</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={mlPerformance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="model" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          <Radar name="Précision" dataKey="accuracy" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
          <Radar name="Score F1" dataKey="f1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
          <Legend />
          <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Approche Random Forest</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Ensemble d'arbres de décision</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Gère les relations non linéaires</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Analyse de l'importance des caractéristiques</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Précision : 94.5%</li>
        </ul>
      </div>
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-purple-500">Réseau de Neurones</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Architecture d'apprentissage profond</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Capture les motifs complexes</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Nécessite plus de données d'entraînement</li>
          <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Précision : 96.2%</li>
        </ul>
      </div>
    </div>
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Évolution de la Stratégie de Maintenance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={maintenanceData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#4b5563'} />
          <YAxis stroke={darkMode ? '#9ca3af' : '#4b5563'} />
          <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
          <Legend />
          <Bar dataKey="corrective" fill="#ef4444" name="Corrective" />
          <Bar dataKey="preventive" fill="#f59e0b" name="Préventive" />
          <Bar dataKey="predictive" fill="#10b981" name="Prédictive" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const KPIDashboardSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Tableau de Bord des KPI</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {kpiData.map((kpi, idx) => (
        <div key={idx} className={`${cardClasses} border rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1`}>
          <div className="text-sm opacity-70 mb-2">{kpi.name}</div>
          <div className="text-3xl font-bold mb-1" style={{ color: kpi.color }}>
            {kpi.value}
          </div>
          <div className="text-xs opacity-60">{kpi.unit}</div>
          <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full" style={{ width: '75%', backgroundColor: kpi.color }}></div>
          </div>
        </div>
      ))}
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-xl font-bold mb-4">Métriques de Santé du Système</h2>
        <div className="space-y-4">
          {[
            { name: 'Niveau de Vibration', value: 85, color: '#10b981' },
            { name: 'Température', value: 72, color: '#3b82f6' },
            { name: 'Pression', value: 68, color: '#8b5cf6' },
            { name: 'Performance', value: 92, color: '#06b6d4' }
          ].map((metric, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-sm">{metric.name}</span>
                <span className="text-sm font-bold">{metric.value}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full transition-all duration-500" style={{ width: `${metric.value}%`, backgroundColor: metric.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
        <h2 className="text-xl font-bold mb-4">Chronologie de Prédiction des Défaillances</h2>
        <div className="space-y-4">
          {[
            { component: 'Roulement A', days: 45, risk: 'low' },
            { component: 'Moteur B', days: 12, risk: 'high' },
            { component: 'Capteur C', days: 28, risk: 'medium' },
            { component: 'Pompe D', days: 67, risk: 'low' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="text-sm">{item.component}</span>
              <div className="flex items-center space-x-3">
                <span className="text-sm">{item.days} jours</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.risk === 'high' ? 'bg-red-500/20 text-red-500' :
                  item.risk === 'medium' ? 'bg-orange-500/20 text-orange-500' :
                  'bg-green-500/20 text-green-500'
                }`}>
                  {item.risk === 'high' ? 'ÉLEVÉ' : item.risk === 'medium' ? 'MOYEN' : 'FAIBLE'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DecisionMakingSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Prise de Décision Basée sur les Données</h1>
    
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Carte Thermique des Risques</h2>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }, (_, i) => {
          const severity = Math.floor(i / 5) + 1;
          const probability = (i % 5) + 1;
          const risk = severity * probability;
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded text-sm font-bold ${
                risk > 15 ? 'bg-red-500/40 text-red-200' :
                risk > 10 ? 'bg-orange-500/40 text-orange-200' :
                risk > 5 ? 'bg-yellow-500/40 text-yellow-200' :
                'bg-green-500/40 text-green-200'
              }`}
            >
              {risk}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <span className="opacity-70">← Probabilité plus faible</span>
        <span className="opacity-70">Probabilité plus élevée →</span>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Allocation des Ressources</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={[
                { name: 'Maintenance', value: 35, color: '#3b82f6' },
                { name: 'Inspection', value: 25, color: '#8b5cf6' },
                { name: 'Formation', value: 20, color: '#10b981' },
                { name: 'Améliorations', value: 20, color: '#f59e0b' }
              ]}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={(entry) => `${entry.name} : ${entry.value}%`}
            >
              {[
                { name: 'Maintenance', value: 35, color: '#3b82f6' },
                { name: 'Inspection', value: 25, color: '#8b5cf6' },
                { name: 'Formation', value: 20, color: '#10b981' },
                { name: 'Améliorations', value: 20, color: '#f59e0b' }
              ].map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#fff', border: '1px solid #374151' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 text-purple-500">Analyse Coût-Bénéfice</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Coût de Mise en Œuvre</span>
              <span className="text-sm font-bold text-red-500">250 K$</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Économies Annuelles</span>
              <span className="text-sm font-bold text-green-500">180 K$</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Période de Retour sur Investissement</span>
              <span className="text-sm font-bold text-blue-500">16 mois</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <div className="text-center">
              <div className="text-sm opacity-70 mb-1">Bénéfice Net sur 5 Ans</div>
              <div className="text-3xl font-bold text-green-500">650 K$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResourcesSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Ressources & Articles de Référence</h1>
    
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Publications Académiques Fondamentales</h2>
      <div className="space-y-4">
        {[
          {
            title: "Reliability Engineering: Theory and Practice",
            authors: "Alessandro Birolini",
            year: "2017",
            journal: "Springer",
            description: "Référence complète couvrant les fondamentaux de l'ingénierie de fiabilité, incluant la modélisation mathématique, les méthodes statistiques et les applications pratiques.",
            topics: ["Modèles de Weibull", "MTBF/MTTR", "Disponibilité", "Maintenabilité"]
          },
          {
            title: "System Reliability Theory: Models, Statistical Methods, and Applications",
            authors: "Marvin Rausand, Arnljot Høyland",
            year: "2004",
            journal: "Wiley-Interscience",
            description: "Traite des modèles de fiabilité des systèmes, méthodes statistiques pour l'analyse de données de défaillance et applications industrielles.",
            topics: ["Systèmes en série/parallèle", "Analyse de survie", "Estimation paramétrique"]
          },
          {
            title: "Weibull Analysis: A Simplified Approach",
            authors: "Paul Barringer",
            year: "2008",
            journal: "Reliability Engineering",
            description: "Guide pratique pour l'application de la distribution de Weibull dans l'analyse de fiabilité et la prédiction de durée de vie.",
            topics: ["Analyse graphique", "Estimation des paramètres", "Interprétation physique"]
          }
        ].map((article, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-5 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-blue-500">{article.title}</h3>
              <span className="text-sm opacity-60">{article.year}</span>
            </div>
            <p className="text-sm font-medium opacity-80 mb-2">{article.authors} • {article.journal}</p>
            <p className="text-sm opacity-70 mb-3">{article.description}</p>
            <div className="flex flex-wrap gap-2">
              {article.topics.map((topic, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs">{topic}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Standards & Normes Internationales</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            standard: "IEC 61508",
            title: "Sécurité Fonctionnelle des Systèmes",
            description: "Norme internationale pour la sécurité fonctionnelle des systèmes électriques/électroniques/programmables relatifs à la sécurité.",
            sil: ["SIL 1-4", "Analyse quantitative", "Validation"]
          },
          {
            standard: "MIL-HDBK-217F",
            title: "Prédiction de Fiabilité pour Composants Électroniques",
            description: "Méthodologie standard pour prédire le taux de défaillance des composants électroniques et électriques.",
            sil: ["Taux de défaillance", "Facteurs environnementaux", "Stress de composants"]
          },
          {
            standard: "ISO 14224",
            title: "Collecte et Échange de Données de Fiabilité",
            description: "Standard pour la collecte et l'échange de données de fiabilité et de maintenance pour l'industrie pétrolière et gazière.",
            sil: ["Taxonomie", "Format de données", "Indicateurs clés"]
          },
          {
            standard: "IEC 60812",
            title: "Analyse des Modes de Défaillance et de leurs Effets (FMEA/FMECA)",
            description: "Procédures pour l'analyse systématique des modes de défaillance et de leurs effets critiques.",
            sil: ["AMDEC", "Criticité", "RPN"]
          }
        ].map((std, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-purple-500" />
              <h3 className="text-lg font-bold text-purple-500">{std.standard}</h3>
            </div>
            <h4 className="font-semibold mb-2">{std.title}</h4>
            <p className="text-sm opacity-70 mb-3">{std.description}</p>
            <div className="flex flex-wrap gap-2">
              {std.sil.map((item, i) => (
                <span key={i} className="px-2 py-1 bg-purple-500/20 rounded text-xs">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Articles de Recherche Récents</h2>
      <div className="space-y-4">
        {[
          {
            title: "Deep Learning for Predictive Maintenance: A Survey",
            authors: "Zhang et al.",
            year: "2022",
            journal: "IEEE Transactions on Reliability",
            impact: "Impact Factor: 5.9",
            abstract: "Revue complète des approches d'apprentissage profond pour la maintenance prédictive, incluant CNN, RNN, LSTM et transformers.",
            keywords: ["Deep Learning", "Maintenance Prédictive", "CNN", "LSTM"]
          },
          {
            title: "Remaining Useful Life Prediction Using Machine Learning",
            authors: "Li, Wang & Zhang",
            year: "2023",
            journal: "Reliability Engineering & System Safety",
            impact: "Impact Factor: 8.1",
            abstract: "Analyse comparative des algorithmes ML pour la prédiction de durée de vie résiduelle dans les systèmes industriels critiques.",
            keywords: ["RUL", "Random Forest", "XGBoost", "Neural Networks"]
          },
          {
            title: "Digital Twin for Predictive Maintenance in Industry 4.0",
            authors: "Tao, Zhang & Nee",
            year: "2021",
            journal: "International Journal of Production Research",
            impact: "Impact Factor: 9.2",
            abstract: "Framework pour l'utilisation de jumeaux numériques dans la maintenance prédictive avec intégration IoT et analytics en temps réel.",
            keywords: ["Digital Twin", "IoT", "Industry 4.0", "Real-time Analytics"]
          }
        ].map((paper, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-5 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-green-500 flex-1">{paper.title}</h3>
              <div className="text-right ml-4">
                <div className="text-sm font-medium opacity-80">{paper.year}</div>
                <div className="text-xs opacity-60">{paper.impact}</div>
              </div>
            </div>
            <p className="text-sm font-medium opacity-80 mb-2">{paper.authors} • {paper.journal}</p>
            <p className="text-sm opacity-70 mb-3">{paper.abstract}</p>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-green-500/20 rounded-full text-xs">{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Outils & Logiciels de Fiabilité</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            name: "Weibull++",
            category: "Analyse Statistique",
            features: ["Analyse de Weibull", "Tests accélérés", "Planification d'essais"],
            icon: TrendingUp
          },
          {
            name: "ReliaSoft BlockSim",
            category: "Simulation de Systèmes",
            features: ["Diagrammes de fiabilité", "Simulation Monte Carlo", "Optimisation de maintenance"],
            icon: Settings
          },
          {
            name: "MATLAB Reliability Toolbox",
            category: "Modélisation Avancée",
            features: ["Modèles paramétriques", "Analyse de survie", "Scripts personnalisés"],
            icon: BarChart3
          },
          {
            name: "Python Libraries",
            category: "Open Source",
            features: ["reliability", "lifelines", "scipy.stats"],
            icon: Database
          },
          {
            name: "R Packages",
            category: "Analyse Statistique",
            features: ["survival", "fitdistrplus", "WeibullR"],
            icon: Activity
          },
          {
            name: "RAM Commander",
            category: "RAMS Analysis",
            features: ["FMEA/FMECA", "FTA", "RBD"],
            icon: Target
          }
        ].map((tool, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex items-center gap-2 mb-2">
              <tool.icon size={20} className="text-orange-500" />
              <h3 className="font-bold text-orange-500">{tool.name}</h3>
            </div>
            <p className="text-sm font-medium opacity-70 mb-3">{tool.category}</p>
            <ul className="space-y-1">
              {tool.features.map((feature, i) => (
                <li key={i} className="text-xs opacity-70 flex items-start">
                  <ChevronRight size={12} className="mr-1 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  </div>
);

const CaseStudiesSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Études de Cas</h1>
    
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: 'Surveillance d’Éoliennes',
          industry: 'Énergie',
          approach: 'Prédictive',
          improvement: '+35 % de disponibilité',
          color: '#10b981'
        },
        {
          title: 'Sécurité des Systèmes Ferroviaires',
          industry: 'Transport',
          approach: 'Basée sur le risque',
          improvement: '-60 % de défaillances',
          color: '#3b82f6'
        },
        {
          title: 'Ligne de Production Manufacturière',
          industry: 'Mécanique',
          approach: 'Pilotée par les données',
          improvement: '-45 % d’arrêts',
          color: '#8b5cf6'
        }
      ].map((study, idx) => (
        <div key={idx} className={`${cardClasses} border rounded-xl p-6 shadow-md hover:shadow-xl transition-all`}>
          <div className="text-xs opacity-70 mb-2">{study.industry}</div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: study.color }}>{study.title}</h3>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="opacity-70">Approche :</span>
              <span className="font-medium">{study.approach}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">Amélioration :</span>
              <span className="font-bold" style={{ color: study.color }}>{study.improvement}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Approches Classiques vs Pilotées par les Données</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left p-3">Aspect</th>
              <th className="text-left p-3">Approche Classique</th>
              <th className="text-left p-3">Approche Pilotée par les Données</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: 'Besoins en Données', classical: 'Données historiques de défaillance', datadriven: 'Données de capteurs en temps réel' },
              { aspect: 'Précision', classical: '70-80 %', datadriven: '90-97 %' },
              { aspect: 'Délai d’Anticipation', classical: 'Jours à semaines', datadriven: 'Heures à jours' },
              { aspect: 'Coût', classical: 'Initial plus faible', datadriven: 'Initial plus élevé, plus faible à long terme' },
              { aspect: 'Adaptabilité', classical: 'Limitée', datadriven: 'Apprentissage continu' }
            ].map((row, idx) => (
              <tr key={idx} className="border-b border-gray-700">
                <td className="p-3 font-medium">{row.aspect}</td>
                <td className="p-3 opacity-80">{row.classical}</td>
                <td className="p-3 opacity-80">{row.datadriven}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AnnexesSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-6">Annexes & Ressources</h1>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Download className="mr-2" size={24} />
          Dépôt de Code Python
        </h3>
        <ul className="space-y-3">
          {[
            'weibull_analysis.py',
            'reliability_models.py',
            'fmea_calculator.py',
            'ml_predictor.py',
            'visualization_tools.py'
          ].map((file, idx) => (
            <li key={idx} className="flex items-center justify-between p-3 bg-blue-500/10 rounded hover:bg-blue-500/20 transition-colors cursor-pointer">
              <span className="text-sm font-mono">{file}</span>
              <Download size={16} />
            </li>
          ))}
        </ul>
      </div>
      <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Download className="mr-2" size={24} />
          Scripts MATLAB
        </h3>
        <ul className="space-y-3">
          {[
            'reliability_block_diagram.m',
            'fault_tree_analysis.m',
            'monte_carlo_simulation.m',
            'system_dynamics.m',
            'optimization_tools.m'
          ].map((file, idx) => (
            <li key={idx} className="flex items-center justify-between p-3 bg-purple-500/10 rounded hover:bg-purple-500/20 transition-colors cursor-pointer">
              <span className="text-sm font-mono">{file}</span>
              <Download size={16} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Database className="mr-2" size={24} />
        Jeux de Données
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { name: 'C-MAPSS Dataset', size: '250 MB', desc: 'Dégradation de moteurs turbofan' },
          { name: 'NASA PHM Dataset', size: '180 MB', desc: 'Données de roulements jusqu’à défaillance' },
          { name: 'Capteurs Industriels', size: '420 MB', desc: 'Télémétrie de ligne de production' }
        ].map((dataset, idx) => (
          <div key={idx} className="p-4 bg-green-500/10 rounded hover:bg-green-500/20 transition-colors cursor-pointer">
            <div className="font-semibold mb-1">{dataset.name}</div>
            <div className="text-xs opacity-70 mb-2">{dataset.desc}</div>
            <div className="text-xs font-mono text-green-500">{dataset.size}</div>
          </div>
        ))}
      </div>
    </div>
    <div className={`${cardClasses} border rounded-xl p-6 shadow-md`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <BookOpen className="mr-2" size={24} />
        Documentation & Références
      </h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />IEEE Standard 493-2007 : Gold Book sur la Fiabilité</li>
        <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />MIL-HDBK-217F : Prédiction de fiabilité des équipements électroniques</li>
        <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />ISO 14224 : Collecte et échange de données de fiabilité</li>
        <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />IEC 61508 : Normes de sécurité fonctionnelle</li>
        <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5" />Manuel de Fiabilité NASA</li>
      </ul>
    </div>

    <div className={`${cardClasses} border rounded-xl p-6 shadow-lg`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <FileText className="mr-2" size={24} />
        Visionneuse PDF - Documents Techniques
      </h3>
      
      <div className="flex space-x-2 mb-4">
        {[
          { id: 0, name: 'Guide de Fiabilité', desc: 'Principes fondamentaux' },
          { id: 1, name: 'Analyse AMDEC', desc: 'Méthodologie complète' },
          { id: 2, name: 'Maintenance Prédictive', desc: 'Approches ML' }
        ].map((pdf) => (
          <button
            key={pdf.id}
            onClick={() => { setSelectedPdf(pdf.id); setPageNumber(1); }}
            className={`flex-1 p-4 rounded-lg transition-all ${
              selectedPdf === pdf.id
                ? 'bg-blue-500 text-white shadow-lg'
                : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`
            }`}
          >
            <div className="font-semibold text-sm">{pdf.name}</div>
            <div className="text-xs opacity-70 mt-1">{pdf.desc}</div>
          </button>
        ))}
      </div>

      <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4`}>
        <div className="flex items-center justify-center mb-4 space-x-4">
          <button
            onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            ← Page précédente
          </button>
          <span className="text-sm">
            Page {pageNumber} {numPages ? `sur ${numPages}` : ''}
          </span>
          <button
            onClick={() => setPageNumber(prev => numPages ? Math.min(numPages, prev + 1) : prev + 1)}
            disabled={numPages !== null && pageNumber >= numPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            Page suivante →
          </button>
        </div>

        <div className="flex justify-center items-center min-h-[600px] bg-white rounded overflow-auto">
          <Document
            file={`/pdfs/document${selectedPdf + 1}.pdf`}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(error) => console.error('Erreur de chargement PDF:', error)}
            loading={
              <div className="text-center p-8">
                <FileText size={48} className="mx-auto mb-4 text-gray-400 animate-pulse" />
                <p className="text-gray-600">Chargement du PDF...</p>
              </div>
            }
            error={
              <div className="text-center p-8">
                <FileText size={48} className="mx-auto mb-4 text-red-400" />
                <p className="text-gray-600 mb-2">Erreur de chargement du PDF</p>
                <p className="text-sm text-gray-500">
                  Assurez-vous que le fichier <code className="bg-gray-200 px-2 py-1 rounded">document{selectedPdf + 1}.pdf</code> existe dans <code className="bg-gray-200 px-2 py-1 rounded">/public/pdfs/</code>
                </p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={Math.min(800, window.innerWidth - 100)}
            />
          </Document>
        </div>
      </div>
    </div>
  </div>
);

// Render current section
const renderSection = () => {
  switch(activeSection) {
    case 'home': return <HomePage />;
    case 'estimation': return <EstimationSection />;
    case 'modeling': return <ModelingSection />;
    case 'failure': return <FailureAnalysisSection />;
    case 'software': return <SoftwareReliabilitySection />;
    case 'risk': return <RiskAnalysisSection />;
    case 'predictive': return <PredictiveMaintenanceSection />;
    case 'kpi': return <KPIDashboardSection />;
    case 'decision': return <DecisionMakingSection />;
    case 'cases': return <CaseStudiesSection />;
    case 'resources': return <ResourcesSection />;
    case 'annexes': return <AnnexesSection />;
    default: return <HomePage />;
  }
};

return (
  <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
    {/* Top Bar */}
    <div className={`${cardClasses} border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-90`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold">Portfolio d'Ingénierie de la Fiabilité</h1>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} ${cardClasses} border-r transition-all duration-300 overflow-hidden`}>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out;
      }
    `}</style>
  </div>
  );
};

export default ReliabilityPortfolio;