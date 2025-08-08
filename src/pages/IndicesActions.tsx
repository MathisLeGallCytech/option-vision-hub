import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CandlestickChart } from "lucide-react";

export default function IndicesActions() {
  return (
    <div className="space-y-8">
      <Seo
        title="Indices & Actions – Marchés"
        description="Aperçu des marchés avec indices et actions sous forme de carrés et un grand graphique interactif."
      />

      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <CandlestickChart className="h-6 w-6 text-primary" aria-hidden="true" />
          Indices & Actions
        </h1>
        <p className="text-muted-foreground">
          Visualisez rapidement les principaux indices et actions, puis explorez le graphique détaillé.
        </p>
      </header>

      <main className="space-y-8">
        {/* Carrés: Indices & Actions */}
        <section className="grid gap-6 sm:grid-cols-2">
          {/* Indices */}
          <Card>
            <CardHeader>
              <CardTitle>Indices</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={1}>
                <div
                  id="market-indices"
                  className="h-full w-full rounded-md border border-border bg-muted/10 flex items-center justify-center text-sm text-muted-foreground"
                  aria-label="Zone indices"
                >
                  Espace réservé aux indices (Flask)
                </div>
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={1}>
                <div
                  id="market-stocks"
                  className="h-full w-full rounded-md border border-border bg-muted/10 flex items-center justify-center text-sm text-muted-foreground"
                  aria-label="Zone actions"
                >
                  Espace réservé aux actions (Flask)
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </section>

        {/* Grand rectangle: Graphique */}
        <section>
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Graphique du marché</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16/9}>
                <div
                  id="output-market-chart"
                  className="h-full w-full rounded-md border border-border bg-muted/10 flex items-center justify-center text-sm text-muted-foreground"
                  aria-label="Zone graphique marché"
                >
                  Espace réservé au graphique (Flask)
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
