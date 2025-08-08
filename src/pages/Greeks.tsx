import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Seo from "@/components/Seo";

const greeks = [
  { key: "delta", title: "Delta", id: "greek-delta", desc: "Sensibilité du prix à une variation du sous-jacent." },
  { key: "gamma", title: "Gamma", id: "greek-gamma", desc: "Variation du Delta en fonction du sous-jacent." },
  { key: "vega", title: "Vega", id: "greek-vega", desc: "Sensibilité à la volatilité implicite." },
  { key: "theta", title: "Theta", id: "greek-theta", desc: "Sensibilité au temps (décroissance temporelle)." },
  { key: "rho", title: "Rho", id: "greek-rho", desc: "Sensibilité au taux d'intérêt." },
];

export default function Greeks() {
  return (
    <div className="space-y-8">
      <Seo
        title="Greeks – Equity Derivatives Dashboard"
        description="Analyse des sensibilités Delta, Gamma, Vega, Theta, Rho avec zones de graphiques."
      />
      <h1 className="text-3xl font-semibold text-center">Analyse des Greeks</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {greeks.map((g) => (
          <Card key={g.key} className="card-elevated">
            <CardHeader>
              <CardTitle>{g.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div id={g.id} className="h-40 rounded-md border border-dashed grid place-items-center mb-3">
                <span className="text-muted-foreground text-sm" aria-live="polite">Graphique {g.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
