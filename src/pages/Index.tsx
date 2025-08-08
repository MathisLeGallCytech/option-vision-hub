import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Sigma, Thermometer, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const cards = [
  {
    title: "Call & Put",
    icon: LineChart,
    text: "Visualisation des options européennes de type Call et Put",
    to: "/call-put",
  },
  {
    title: "Greeks",
    icon: Sigma,
    text: "Analyse dynamique des sensibilités Delta, Gamma, Vega, Theta, Rho",
    to: "/greeks",
  },
  {
    title: "Volatility Surface",
    icon: Thermometer,
    text: "Visualisation de la surface de volatilité implicite",
    to: "/volatility-surface",
  },
  {
    title: "VaR & SVAR",
    icon: ShieldAlert,
    text: "Estimations du risque via VaR et Structural VaR",
    to: "/risk-var-svar",
  },
];

const Index = () => {
  return (
    <div className="space-y-10">
      <Seo
        title="Equity Derivatives Dashboard – Accueil"
        description="Analyse interactive des options vanilles : Call & Put, Greeks, Volatility Surface, VaR & SVAR."
      />
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">Equity Derivatives Dashboard</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Analyse interactive des options vanilles
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ title, icon: Icon, text, to }) => (
          <Link key={title} to={to} className="hover-scale">
            <Card className="h-full transition-colors card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Index;
