import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Seo from "@/components/Seo";
import { LineChart } from "lucide-react";

export default function CallPut() {
  return (
    <div className="space-y-8">
      <Seo
        title="Call & Put – Equity Derivatives Dashboard"
        description="Analyses des options européennes Call et Put avec visuels dynamiques."
      />
      <h1 className="text-3xl font-semibold">Call & Put</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Call Européen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Visualisation dynamique du payoff et de la valorisation du Call.
            </p>
            <div id="output-call" className="h-64 rounded-md border border-dashed grid place-items-center">
              <span className="text-muted-foreground text-sm" aria-live="polite">Graphique Call</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Put Européen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Visualisation dynamique du payoff et de la valorisation du Put.
            </p>
            <div id="output-put" className="h-64 rounded-md border border-dashed grid place-items-center">
              <span className="text-muted-foreground text-sm" aria-live="polite">Graphique Put</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
