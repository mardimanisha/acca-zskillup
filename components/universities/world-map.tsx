import { cn } from "@/lib/utils";

// Decorative dotted world map for the dark "pathway" band.
// Equirectangular land mask, 5° cells: each row is [latitude, [[fromCol, toCol], ...]],
// where column c spans longitude -180 + 5c. Approximate by design: it is texture, not data.
const LAND: readonly (readonly [number, readonly (readonly [number, number])[]])[] = [
  [80, [[16, 20], [24, 31]]],
  [75, [[12, 22], [23, 32], [48, 58]]],
  [70, [[3, 8], [10, 22], [25, 31], [39, 42], [44, 71]]],
  [65, [[3, 8], [8, 23], [26, 28], [32, 33], [38, 42], [42, 71]]],
  [60, [[4, 16], [21, 23], [37, 42], [42, 69]]],
  [55, [[10, 16], [20, 24], [34, 35], [38, 68]]],
  [50, [[11, 25], [35, 35], [36, 64]]],
  [45, [[11, 23], [36, 44], [45, 64]]],
  [40, [[11, 21], [34, 36], [38, 41], [41, 60], [61, 64]]],
  [35, [[12, 20], [35, 38], [43, 60], [62, 64]]],
  [30, [[13, 20], [34, 42], [43, 60]]],
  [25, [[14, 16], [33, 43], [43, 47], [49, 54], [55, 60]]],
  [20, [[15, 18], [20, 20], [33, 43], [44, 47], [50, 53], [55, 57]]],
  [15, [[18, 19], [33, 44], [44, 45], [51, 52], [55, 57], [60, 60]]],
  [10, [[19, 20], [21, 23], [33, 46], [51, 51], [55, 56], [61, 61]]],
  [5, [[20, 25], [34, 45], [56, 56], [58, 59]]],
  [0, [[20, 26], [38, 44], [55, 59], [60, 60]]],
  [-5, [[20, 29], [38, 44], [57, 60], [62, 66]]],
  [-10, [[20, 28], [38, 44], [57, 59], [62, 64]]],
  [-15, [[21, 28], [38, 44], [45, 45], [61, 65]]],
  [-20, [[22, 28], [38, 43], [45, 45], [59, 66]]],
  [-25, [[22, 27], [39, 42], [58, 66]]],
  [-30, [[21, 26], [39, 42], [59, 66]]],
  [-35, [[21, 25], [39, 41], [59, 65], [70, 70]]],
  [-40, [[21, 23], [65, 65], [70, 70]]],
  [-45, [[21, 22], [69, 69]]],
  [-50, [[21, 22]]],
];

const STEP = 2.5; // dot spacing in degrees (two dots per 5° cell)

const dots = [
  ...new Map(
    LAND.flatMap(([lat, ranges]) =>
      [0, STEP].flatMap((dy) =>
        ranges.flatMap(([from, to]) => {
          const out: [string, { x: number; y: number }][] = [];
          for (let x = from * 5; x < (to + 1) * 5; x += STEP) {
            const y = 85 - lat + dy;
            out.push([`${x}-${y}`, { x, y }]);
          }
          return out;
        }),
      ),
    ),
  ).values(),
];

export function WorldMap({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 360 145"
      className={cn("pointer-events-none select-none", className)}
    >
      <g fill="currentColor">
        {dots.map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x + STEP / 2} cy={d.y + STEP / 2} r={0.75} />
        ))}
      </g>
    </svg>
  );
}
