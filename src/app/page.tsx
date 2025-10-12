"use client";

import React, { useState } from "react";
import {
  Upload,
  Shield,
  Bell,
  FileText,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Search,
  Lock,
  Clock,
  LucideIcon,
} from "lucide-react";

// Types & Interfaces
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
}

interface UseCase {
  title: string;
  examples: string[];
}

interface Insight {
  text: string;
  severity: "high" | "medium" | "low";
  type: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface Competitor {
  name: string;
  price: string;
  complexity: string;
  setup: string;
  highlight?: boolean;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const features: Feature[] = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Upload de Logs Simplifié",
      description:
        "Importez vos fichiers Apache, Nginx, SSH, Firewall en un glissement. Compatible avec tous les formats standards.",
      keywords: "upload logs, analyse logs apache, logs nginx",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Analyse IA en Temps Réel",
      description:
        "Notre intelligence artificielle décrypte automatiquement vos logs et identifie les anomalies critiques instantanément.",
      keywords: "analyse logs automatique, détection anomalies",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alertes Intelligentes",
      description:
        "Recevez des notifications instantanées par email ou Slack dès qu'une menace ou erreur critique est détectée.",
      keywords: "alertes sécurité, monitoring logs",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Rapports PDF Professionnels",
      description:
        "Générez des rapports détaillés et exportables pour votre direction ou vos audits de sécurité.",
      keywords: "rapport logs, audit sécurité",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Sécurité Renforcée",
      description:
        "Détection des tentatives d'intrusion, échecs de connexion suspects et vulnérabilités potentielles.",
      keywords: "sécurité logs, détection intrusion",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Analyse Historique",
      description:
        "Consultez l'historique complet de vos logs et identifiez les tendances sur plusieurs semaines.",
      keywords: "historique logs, analyse tendances",
    },
  ];

  const useCases: UseCase[] = [
    {
      title: "Sécurité & Intrusions",
      examples: [
        "Tentatives de connexion SSH échouées",
        "Scans de ports suspects",
        "Attaques DDoS détectées",
      ],
    },
    {
      title: "Performance Applicative",
      examples: [
        "Erreurs 500 sur API checkout",
        "Temps de réponse anormaux",
        "Memory leaks identifiés",
      ],
    },
    {
      title: "Conformité & Audit",
      examples: [
        "Logs d'accès utilisateurs",
        "Modifications de configuration",
        "Rapports de conformité RGPD",
      ],
    },
  ];

  const insights: Insight[] = [
    {
      text: "20 échecs de connexion SSH depuis Russie - IP bloquée",
      severity: "high",
      type: "Sécurité",
    },
    {
      text: "Certificat SSL expire dans 7 jours - Renouvellement requis",
      severity: "medium",
      type: "Infrastructure",
    },
    {
      text: "3 erreurs 500 critiques sur /api/checkout - Impact CA",
      severity: "high",
      type: "Performance",
    },
    {
      text: "Pic de trafic +340% détecté à 14h30 - Vérifier scaling",
      severity: "low",
      type: "Monitoring",
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "49",
      description: "Idéal pour PME et startups",
      features: [
        "10 GB de logs analysés/mois",
        "Analyse IA temps réel",
        "Alertes email illimitées",
        "Rapports PDF exportables",
        "7 jours d'historique",
        "Support email sous 24h",
      ],
    },
    {
      name: "Business",
      price: "149",
      description: "Pour équipes techniques exigeantes",
      features: [
        "100 GB de logs analysés/mois",
        "Analyse IA avancée + prédictions",
        "Alertes email + Slack + webhooks",
        "Rapports personnalisés illimités",
        "90 jours d'historique",
        "API REST complète",
        "Intégrations multiples",
        "Support prioritaire sous 4h",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Solution sur mesure et déploiement privé",
      features: [
        "Logs illimités",
        "IA personnalisée pour vos besoins",
        "Alertes multi-canaux personnalisées",
        "Déploiement on-premise possible",
        "Historique illimité",
        "Intégrations sur mesure",
        "SLA 99.9% garanti",
        "Account manager dédié",
        "Formation équipe incluse",
      ],
    },
  ];

  const competitors: Competitor[] = [
    {
      name: "Splunk",
      price: "~500€/mois",
      complexity: "Très complexe",
      setup: "Plusieurs heures",
    },
    {
      name: "Elastic Stack",
      price: "~300€/mois",
      complexity: "Configuration longue",
      setup: "Plusieurs heures",
    },
    {
      name: "Datadog",
      price: "~400€/mois",
      complexity: "Courbe d'apprentissage",
      setup: "Plusieurs heures",
    },
    {
      name: "LogMind",
      price: "49€/mois",
      complexity: "Prêt en 5min",
      setup: "5 minutes",
      highlight: true,
    },
  ];

  const getSeverityClasses = (
    severity: Insight["severity"]
  ): { bg: string; border: string; badge: string } => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500",
          badge: "bg-red-500/20 text-red-300",
        };
      case "medium":
        return {
          bg: "bg-yellow-500/10",
          border: "border-yellow-500",
          badge: "bg-yellow-500/20 text-yellow-300",
        };
      case "low":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500",
          badge: "bg-blue-500/20 text-blue-300",
        };
    }
  };

  const getSeverityLabel = (severity: Insight["severity"]): string => {
    switch (severity) {
      case "high":
        return "Critique";
      case "medium":
        return "Important";
      case "low":
        return "Info";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-lg z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LogMind
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#fonctionnalites"
                className="hover:text-blue-400 transition"
              >
                Fonctionnalités
              </a>
              <a href="#cas-usage" className="hover:text-blue-400 transition">
                Cas d'usage
              </a>
              <a href="#tarifs" className="hover:text-blue-400 transition">
                Tarifs
              </a>
              <a href="#comparatif" className="hover:text-blue-400 transition">
                Comparatif
              </a>
              <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition transform shadow-lg shadow-blue-500/30">
                Essai Gratuit 14 Jours
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#fonctionnalites"
                className="block hover:text-blue-400 transition"
              >
                Fonctionnalités
              </a>
              <a
                href="#cas-usage"
                className="block hover:text-blue-400 transition"
              >
                Cas d'usage
              </a>
              <a
                href="#tarifs"
                className="block hover:text-blue-400 transition"
              >
                Tarifs
              </a>
              <a
                href="#comparatif"
                className="block hover:text-blue-400 transition"
              >
                Comparatif
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold">
                Essai Gratuit 14 Jours
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Analyse de Logs Intelligente
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  par IA
                </span>
              </h1>
              <h2 className="text-2xl text-gray-300 font-normal">
                Transformez vos logs Apache, Nginx, SSH et Firewall en insights
                actionnables. Alternative simple et abordable à Splunk, Elastic
                et Datadog.
              </h2>
              <p className="text-lg text-gray-400">
                ✓ Sans installation complexe · ✓ Résultats en 5 minutes · ✓ À
                partir de 49€/mois
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition transform flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                  Tester Gratuitement 14 Jours
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition">
                  Voir Démo Live
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sans carte bancaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Configuration en 5 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Support français</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-6 shadow-2xl shadow-blue-500/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-400 ml-2">
                    Analyse en temps réel
                  </span>
                </div>
                <div className="space-y-3">
                  {insights.map((insight, idx) => {
                    const classes = getSeverityClasses(insight.severity);
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border-l-4 ${classes.bg} ${classes.border} hover:scale-102 transition`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-cyan-300">
                            {insight.type}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${classes.badge}`}
                          >
                            {getSeverityLabel(insight.severity)}
                          </span>
                        </div>
                        <p className="text-sm">{insight.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="fonctionnalites"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Fonctionnalités Complètes d'
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Analyse de Logs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une solution SaaS tout-en-un pour monitorer, analyser et sécuriser
              vos infrastructures serveur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition transform shadow-lg shadow-blue-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-3">{feature.description}</p>
                <div className="text-xs text-cyan-300/60">
                  {feature.keywords}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="cas-usage" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Cas d'Usage{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Métier
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              LogMind s'adapte à tous vos besoins d'analyse et monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.examples.map((example, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section
        id="comparatif"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pourquoi Choisir LogMind vs{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Splunk, Elastic, Datadog
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Une alternative abordable et efficace aux solutions enterprise
              complexes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-500/30">
                  <th className="text-left py-4 px-4 font-semibold">
                    Solution
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">
                    Prix de départ
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">
                    Complexité
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">
                    Mise en place
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-blue-500/10 ${
                      comp.highlight ? "bg-blue-500/10" : ""
                    }`}
                  >
                    <td className="py-4 px-4 font-semibold">{comp.name}</td>
                    <td className="py-4 px-4">{comp.price}</td>
                    <td className="py-4 px-4">{comp.complexity}</td>
                    <td className="py-4 px-4">
                      {comp.highlight ? (
                        <span className="text-green-400 font-semibold">
                          5 minutes ✓
                        </span>
                      ) : (
                        <span className="text-gray-400">{comp.setup}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Économisez jusqu'à 85% vs Splunk
            </h3>
            <p className="text-center text-gray-300 text-lg">
              Obtenez les mêmes fonctionnalités essentielles pour une fraction
              du coût, sans sacrifice sur la qualité
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Tarifs{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Transparents
              </span>{" "}
              et Prévisibles
            </h2>
            <p className="text-xl text-gray-400">
              Aucun frais caché · Annulation à tout moment · Facturation
              mensuelle ou annuelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-blue-500 scale-105 shadow-2xl shadow-blue-500/20"
                    : "border-blue-500/20"
                } hover:border-blue-400/50 transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Sur mesure" && (
                    <span className="text-gray-400">€/mois</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:scale-105 transform shadow-lg shadow-blue-500/30"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  {plan.price === "Sur mesure"
                    ? "Contactez-nous"
                    : "Essayer 14 Jours Gratuit"}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-400 text-sm">
            <p>
              💳 Paiement sécurisé · 🔒 Données hébergées en France · 📧 Support
              en français
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg p-12 rounded-3xl border border-blue-500/30 shadow-lg shadow-blue-500/10">
            <h2 className="text-4xl font-bold mb-4">
              Commencez à Analyser vos Logs en 5 Minutes
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez plus de 500 entreprises qui optimisent leur sécurité et
              performance avec LogMind
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition transform inline-flex items-center gap-2 shadow-lg shadow-blue-500/30">
              Démarrer Gratuitement
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Sans engagement · Annulation en 1 clic · Support réactif
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">LogMind</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Solution SaaS française d'analyse intelligente de logs par IA
              </p>
              <p className="text-gray-500 text-xs">
                Alternative à Splunk, Elastic Stack, Datadog
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Produit</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#fonctionnalites"
                    className="hover:text-blue-400 transition"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#tarifs" className="hover:text-blue-400 transition">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Documentation API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Intégrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ressources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Guide analyse logs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Blog sécurité
                  </a>
                </li>
                <li>
                  <a
                    href="#comparatif"
                    className="hover:text-blue-400 transition"
                  >
                    vs Splunk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    vs Elastic
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Contact support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Statut service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    CGV & Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; 2025 LogMind SAS. Tous droits réservés. Made in France 🇫🇷
            </p>
            <p className="mt-2 md:mt-0">
              Hébergement sécurisé · RGPD compliant · ISO 27001
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
