# Estaciona UC

**Demo:** https://estaciona-uc.vercel.app/

Prototipo funcional para estudiantes que llegan en auto al campus San Joaquín de la Pontificia Universidad Católica de Chile. Permite consultar la disponibilidad de los estacionamientos, elegir dónde se tienen clases, comparar alternativas por disponibilidad y caminata estimada, y confirmar una elección.

La disponibilidad es simulada. El escenario se cambia desde el selector del encabezado o con el parámetro `?escenario=` (`poco-concurrido`, `concurrido`, `hora-punta`).

## Desarrollo

Requiere Node.js y Yarn 4.

```bash
yarn install
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/domain/`: tipos y lógica pura (disponibilidad, caminata, orden).
- `src/data/`: sectores, destinos con coordenadas aproximadas y escenarios simulados.
- `src/features/parking/`: hooks y componentes de la vista.
- `src/components/ui/`: componentes de shadcn/ui.
