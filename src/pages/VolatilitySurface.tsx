import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { Thermometer } from "lucide-react";

export default function VolatilitySurface() {
  return (
    <div className="space-y-8">
      <Seo
        title="Volatility Surface – Equity Derivatives Dashboard"
        description="Visualisation de la surface de volatilité implicite par strikes et maturités."
      />
      <h1 className="text-3xl font-semibold">Volatility Surface</h1>

      <div className="flex flex-wrap items-center gap-3">
        <div className="text-sm text-muted-foreground">Filtres (à venir) :</div>
        <div className="h-9 px-3 inline-flex items-center rounded-md border bg-secondary/30 text-secondary-foreground text-sm">
          Maturité
        </div>
        <div className="h-9 px-3 inline-flex items-center rounded-md border bg-secondary/30 text-secondary-foreground text-sm">
          Actif
        </div>
      </div>

      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>Surface de Volatilité Implicite</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div id="output-vol-surface" className="h-96 rounded-md border border-dashed grid place-items-center">
            <span className="text-muted-foreground text-sm" aria-live="polite">Heatmap / Surface 3D</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Surface générée à partir de la vol implicite sur différents strikes/maturités.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
