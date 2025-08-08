import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { ShieldAlert } from "lucide-react";

export default function RiskVarSvar() {
  return (
    <div className="space-y-8">
      <Seo
        title="VaR & SVAR – Equity Derivatives Dashboard"
        description="Comparaison des risques via la Value-at-Risk et le Structural VaR."
      />
      <h1 className="text-3xl font-semibold">Value-at-Risk (VaR) et Structural VaR (SVAR)</h1>

      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>Value-at-Risk (VaR)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div id="output-var" className="h-72 rounded-md border border-dashed grid place-items-center">
            <span className="text-muted-foreground text-sm" aria-live="polite">Graphique VaR</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Méthode classique basée sur les rendements historiques.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/30">
        <CardHeader>
          <CardTitle>Structural VaR (SVAR)</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="output-svar" className="h-72 rounded-md border border-dashed grid place-items-center">
            <span className="text-muted-foreground text-sm" aria-live="polite">Graphique SVAR</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Approche plus académique s'appuyant sur une structure causale des facteurs de risque et leurs interactions afin d'estimer des pertes extrêmes sous différentes hypothèses structurelles.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
