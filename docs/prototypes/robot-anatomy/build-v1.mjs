// Six-axis arm: an exploded isometric figure built with the Anatomy kit.
// Kit files in ./kit are copied from wheresryan22/anatomy (MIT, Copyright (c) 2026 Ryan);
// see ./kit/LICENSE. This figure is an original, generic arm: no brand, no real product.
//
//   node build.mjs           writes robot-arm.html
//   node build.mjs --audit   also runs the kit's geometry audit

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";
import { tubePieces, tubeSvg, crossingsOf } from "./kit/tube.mjs";
import * as A from "./kit/audit.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEG = Math.PI / 180;
const W = 900;
const H = 600;
const AZIMUTH = 55;
const ELEVATION = 30;

// ---------------------------------------------------------------- the model
// World units, z up. The arm works in the x-z plane; J2, J3 and J5 turn about y.
const PLATE = { x: -64, y: -58, w: 128, d: 116, r: 6 };
const J2 = [0, 104];
const TILT = 12 * DEG;
const LOWER = 130;
const J3 = [J2[0] + LOWER * Math.sin(TILT), J2[1] + LOWER * Math.cos(TILT)];
const ARM_U = [Math.sin(TILT), 0, Math.cos(TILT)];
const ARM_V = [Math.cos(TILT), 0, -Math.sin(TILT)];
const FORE_X = J3[0] + 26;
const FORE_END = FORE_X + 80;
const J5X = FORE_END + 25;
const ZA = J3[1];

const PIECES = {
  base: { name: "Base plate", joint: "fixed", move: [0, 0, 0] },
  turntable: { name: "Turntable", joint: "J1", move: [0, 0, 16] },
  shoulder: { name: "Shoulder housing", joint: "J2", move: [0, 0, 32] },
  shoulderDrive: { name: "Shoulder motor and gearbox", joint: "J2", move: [0, 80, 48] },
  lower: { name: "Lower arm", joint: "J2–J3", move: [0, 34, 48] },
  elbowDrive: { name: "Elbow motor and gearbox", joint: "J3", move: [0, 106, 70] },
  elbow: { name: "Elbow housing", joint: "J3", move: [34, 0, 70] },
  upper: { name: "Upper arm", joint: "J4", move: [62, 0, 70] },
  wrist: { name: "Wrist and tool flange", joint: "J5–J6", move: [90, 0, 70] },
  gripper: { name: "Gripper", joint: "tool", move: [90, 0, 40] },
  harness: { name: "Cable harness", joint: "J2–J3", move: [-30, 0, 80] },
};
const STAGGER = ["harness", "wrist", "gripper", "upper", "elbowDrive", "elbow", "shoulderDrive", "lower", "shoulder", "turntable", "base"];
const SPRING = { stagger: 0.05, stiffness: 40, damping: 11.6, substeps: 4 };
const ORDER = ["base", "turntable", "shoulder", "shoulderDrive", "lower", "elbowDrive", "elbow", "upper", "wrist", "gripper", "harness"];

function build(P) {
  const V = G.viewOf(P);
  const at = (point) => k.iso(point, P);
  const S = (paths, style) => k.solidSvg(paths, style);
  const Ln = (d, style) => k.lineSvg(d, style);
  const Dots = (points, style) => k.dotsSvg(points, style);
  const facing = (axis) => G.dot3(G.unit3(axis), V);
  const R = A.recorder(P, { order: STAGGER, spring: SPRING });
  const counts = Object.fromEntries(Object.keys(PIECES).map((id) => [id, 0]));

  const centreOf = (shape) => {
    const { min, max } = A.boundsOf(shape);
    return [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
  };
  function put(piece, shape, svg, { bias = 0, count = true } = {}) {
    if (count) counts[piece] += 1;
    R.put({ piece, at: centreOf(shape), bias, svg, move: PIECES[piece].move, shapes: [R.solid(shape)], name: shape.name });
    return shape;
  }
  const named = (piece, name) => R.nameFor(`${piece === "base" ? "stand" : piece}.${name}`);
  const style = (o) => ({ tone: o.tone ?? "hi", lit: o.lit, crease: o.crease, inner: o.inner ?? "" });

  function slab(piece, name, plan, z, h, o = {}) {
    const id = named(piece, name);
    const steps = o.steps ?? 3;
    return put(piece, A.slab(plan, z, h, { name: id, owner: o.owner }, steps), S(k.slabOf(plan, z, h, P, steps, o.bevel ?? 0.5), style(o)) + (o.extra ?? ""), o);
  }
  function cyl(piece, name, cx, cy, r, z, h, o = {}) {
    const id = named(piece, name);
    return put(piece, A.cylinder(cx, cy, r, z, h, { name: id, owner: o.owner }), S(k.cylinder(cx, cy, r, z, h, P, o.steps ?? Math.max(24, Math.round(r * 4)), o.bevel ?? 0), style(o)) + (o.extra ?? ""), o);
  }
  function hex(piece, name, cx, cy, r, z, h, o = {}) {
    const id = named(piece, name);
    const ring = Array.from({ length: 6 }, (_, i) => [cx + r * Math.cos((i * 60 + 15) * DEG), cy + r * Math.sin((i * 60 + 15) * DEG)]);
    return put(piece, A.extruded(ring, z, h, { name: id, owner: o.owner }), S(k.extrude(ring, z, h, P, { bevel: 0.3 }), style(o)), o);
  }
  function prism(piece, name, F, poly, s0, s1, o = {}) {
    const id = named(piece, name);
    return put(piece, A.prism(F, poly, s0, s1, { name: id, owner: o.owner }), S(G.prismOf(F, poly, s0, s1, P), style(o)) + (o.extra ?? ""), o);
  }
  function turned(piece, name, F, profile, o = {}) {
    const id = named(piece, name);
    return put(piece, A.solid(F, profile, { name: id, owner: o.owner }), S(G.solidOf(profile, F, P, { bevel: o.bevel ?? 0 }), style(o)) + (o.extra ?? ""), o);
  }
  function disc(piece, name, F, s0, s1, r, o = {}) {
    const id = named(piece, name);
    return put(piece, A.disc(F, s0, s1, r, { name: id, owner: o.owner }), S(G.disc(s0, s1, r, F, P, { bevel: o.bevel ?? 0 }), style(o)) + (o.extra ?? ""), o);
  }
  const yFrame = (y) => G.frameOf([0, y, 0], [0, 1, 0], [1, 0, 0], [0, 0, 1]);
  const circle = (cx, cz, r, n = 40) => Array.from({ length: n }, (_, i) => [cx + r * Math.cos((i / n) * 2 * Math.PI), cz + r * Math.sin((i / n) * 2 * Math.PI)]);
  const roundRect = (x0, z0, x1, z1, r, n = 6) => {
    const out = [];
    const corners = [[x1 - r, z1 - r, 0], [x0 + r, z1 - r, 90], [x0 + r, z0 + r, 180], [x1 - r, z0 + r, 270]];
    for (const [cx, cz, a0] of corners) for (let i = 0; i <= n; i++) out.push([cx + r * Math.cos((a0 + (i / n) * 90) * DEG), cz + r * Math.sin((a0 + (i / n) * 90) * DEG)]);
    return out;
  };
  const faceDots = (F, s, r, count, o = {}) => Dots(G.dotsOf(F, s, r, count, P, { all: true, phase: o.phase ?? 0 }), { size: o.size ?? 0.42, tone: o.tone ?? "mid" });
  const ribs = (F, s0, s1, r, count) => k.fadedSvg(G.ribsOf(F, s0, s1, r, count, P, { fade: [0.1, 0.55], seams: true }), { tone: "lo" });
  // A face outline drawn in a vertical plane y = const (closed, so it has no ends).
  const yOutline = (poly, y) => k.pathOf(poly.map(([x, z]) => at([x, y, z])), true);
  // A parting line round a prism at s: only the edges whose side faces you see, so it ends on the outline.
  function prismSeam(F, poly, s) {
    let area = 0;
    poly.forEach(([x0, y0], i) => { const [x1, y1] = poly[(i + 1) % poly.length]; area += x0 * y1 - x1 * y0; });
    const ring = area < 0 ? [...poly].reverse() : poly;
    const n = ring.length;
    const pt = ([x, y]) => at(G.add3(G.add3(F.o, G.mul3(F.a, s)), G.add3(G.mul3(F.u, x), G.mul3(F.v, y))));
    const seen = ring.map(([x0, y0], i) => { const [x1, y1] = ring[(i + 1) % n]; return G.dot3(G.add3(G.mul3(F.u, y1 - y0), G.mul3(F.v, -(x1 - x0))), V) > 1e-6; });
    const start = seen.findIndex((on, i) => on && !seen[(i - 1 + n) % n]);
    if (start < 0) return "";
    const runs = [];
    let run = null;
    for (let j = 0; j < n; j++) {
      const i = (start + j) % n;
      if (seen[i]) { if (!run) run = [ring[i]]; run.push(ring[(i + 1) % n]); }
      else if (run) { runs.push(run); run = null; }
    }
    if (run) runs.push(run);
    return runs.map((r) => k.pathOf(r.map(pt))).join("");
  }

  // A servo motor on any axis: ribbed body, rear cap, encoder cover, two connector bosses.
  function motor(piece, label, origin, axis, { r = 12, body = 26, up = [0, 0, 1] } = {}) {
    const F = G.frameAlong(origin, axis);
    const c0 = body;
    const c1 = c0 + 3.5;
    const e1 = c1 + 5;
    turned(piece, `${label}-body`, F, [[0, r], [body, r]], { tone: "hi", inner: ribs(F, 1.5, body - 1.5, r, 28) });
    turned(piece, `${label}-cap`, F, [[c0, r - 1.5], [c1, r - 1.5]], { tone: "mid", extra: facing(axis) > 0.15 ? Ln(G.circleOf(F, c1, r - 4, P), { tone: "faint" }) : "" });
    turned(piece, `${label}-encoder`, F, [[c1, r - 4], [e1 - 1.2, r - 4], [e1, r - 5.4]], { tone: "mid" });
    // Connector bosses stand on the body's upper generator, along `up`.
    const n = G.unit3(up);
    [0.32, 0.62].forEach((t, index) => {
      const foot = G.add3(G.add3(origin, G.mul3(F.a, body * t)), G.mul3(n, r - 0.25));
      const BF = G.frameAlong(foot, n);
      const rb = index ? 2.2 : 3;
      disc(piece, `${label}-plug${index}`, BF, 0, index ? 3 : 4, rb, { tone: "mid", owner: `${piece}.${label}`, extra: facing(n) > 0.15 ? Ln(G.circleOf(BF, index ? 3 : 4, rb * 0.5, P, 16), { tone: "faint" }) : "" });
    });
    return F;
  }

  // ------------------------------------------------------------ base plate
  const out = [];
  const halo = `<path class="iso-halo" d="${k.haloOf(PLATE, -18, 18, P)}"/>`;
  for (const [x, y] of k.corners(PLATE, 14)) {
    cyl("base", "foot-pad", x, y, 8, -18, 1.6, { tone: "lo" });
    cyl("base", "foot", x, y, 5.6, -16.4, 4.4, { tone: "mid" });
  }
  const plateGroove = Ln(k.planOutline(k.insetPlan(PLATE, 4), 0, P), { tone: "lo" });
  slab("base", "plate", PLATE, -12, 12, { steps: 8, bevel: 1.4, tone: "mid", extra: plateGroove });
  for (const [x, y] of k.corners(PLATE, 7.5)) {
    cyl("base", "anchor-washer", x, y, 4.4, 0, 0.8, { tone: "mid" });
    hex("base", "anchor-bolt", x, y, 3, 0.8, 2.6, { tone: "mid" });
  }
  const label = { x: 16, y: 38, w: 30, d: 12, r: 1 };
  const rules = [0, 1, 2].map((row) => k.onTop([[label.x + 4, label.y + 3.4 + row * 2.6], [label.x + (row === 1 ? 18 : row ? 22 : 26), label.y + 3.4 + row * 2.6]], 0.8, P)).join("");
  slab("base", "label", label, 0, 0.8, { tone: "mid", bevel: 0, extra: Ln(k.planOutline(k.insetPlan(label, 1.4), 0.8, P, 3), { tone: "faint" }) + Ln(rules, { tone: "lo", free: true }) + Dots([at([label.x + 2.2, label.y + 6, 0.8]), at([label.x + label.w - 2.2, label.y + 6, 0.8])], { size: 0.42 }) });
  const DECK = G.frameOf([0, 0, 0], [0, 0, 1], [1, 0, 0], [0, 1, 0]);
  cyl("base", "pedestal-flange", 0, 0, 40, 0, 6, { tone: "mid", bevel: 0.8, steps: 96, extra: faceDots(DECK, 6, 37, 16, { phase: 0.2 }) });
  cyl("base", "pedestal", 0, 0, 34, 6, 28, { tone: "mid", steps: 96, inner: Ln(k.sideArc(0, 0, 34, 20, P, 48), { tone: "faint" }) });
  const inlet = { x: -60, y: -36, w: 16, d: 24, r: 2 };
  slab("base", "inlet-box", inlet, 0, 15, { tone: "mid", bevel: 0.6, extra: Dots([at([inlet.x + 2.5, inlet.y + 2.5, 15]), at([inlet.x + inlet.w - 2.5, inlet.y + inlet.d - 2.5, 15])], { size: 0.42 }) });
  for (const x of [-55, -48]) {
    const F = G.frameAlong([x, inlet.y + inlet.d, 7.5], [0, 1, 0]);
    disc("base", "inlet-socket", F, 0, 3.4, 2.8, { tone: "mid", extra: Ln(G.circleOf(F, 3.4, 1.4, P, 16), { tone: "faint" }) });
  }
  const lug = { x: 26, y: -54, w: 10, d: 7, r: 1 };
  slab("base", "ground-lug", lug, 0, 2, { tone: "mid", bevel: 0.3 });
  hex("base", "ground-bolt", lug.x + 5, lug.y + 3.5, 2, 2, 1.6, { tone: "mid" });
  // Cast gussets between the pedestal and its flange.
  for (let i = 0; i < 8; i++) {
    const a = (i * 45 + 22.5) * DEG;
    const GF = G.frameOf([0, 0, 0], [-Math.sin(a), Math.cos(a), 0], [Math.cos(a), Math.sin(a), 0], [0, 0, 1]);
    prism("base", "gusset", GF, [[34, 6], [39.2, 6], [34, 19]], -1.5, 1.5, { tone: "mid" });
  }
  // Jacking screws at the middle of each plate edge, and two dowel pins by the flange.
  for (const [x, y] of [[0, PLATE.y + 6], [0, PLATE.y + PLATE.d - 6], [PLATE.x + 6, 0], [PLATE.x + PLATE.w - 6, 0]]) hex("base", "jack-screw", x, y, 2.4, 0, 2.2, { tone: "mid" });
  for (const [x, y] of [[30, 30], [-30, 30]]) cyl("base", "dowel", x, y, 1.6, 0, 2.4, { tone: "mid", bevel: 0.3 });

  // ------------------------------------------------------------- turntable · J1
  cyl("turntable", "slewing-ring", 0, 0, 36, 34, 6, { tone: "mid", steps: 96, extra: faceDots(DECK, 40, 34.6, 18) });
  cyl("turntable", "body", 0, 0, 33, 40, 18, { tone: "hi", bevel: 0.8, steps: 96, inner: Ln(k.sideArc(0, 0, 33, 49, P, 48), { tone: "faint" }) });
  const gear1 = { x: -57, y: -12, w: 24, d: 24, r: 2 };
  slab("turntable", "j1-gearbox", gear1, 42, 12, { tone: "mid", bevel: 0.6, inner: Ln(k.sideSeam(gear1, 48, P, 3), { tone: "faint" }), extra: Dots([at([gear1.x + 3, gear1.y + gear1.d - 3, 54]), at([gear1.x + 3, gear1.y + 3, 54])], { size: 0.42 }) });
  motor("turntable", "j1-motor", [-45, 0, 54], [0, 0, 1], { r: 9, body: 22, up: [0, 1, 0] });

  // ---------------------------------------------------------- shoulder · J2
  const COLUMN = [[-24, 58], [24, 58], ...circle(J2[0], J2[1], 24, 48).filter(([, z]) => z >= J2[1] - 1e-9)];
  const hubDots = Array.from({ length: 16 }, (_, i) => at([J2[0] + 22.4 * Math.cos((i / 16) * 2 * Math.PI), 22, J2[1] + 22.4 * Math.sin((i / 16) * 2 * Math.PI)]));
  prism("shoulder", "column", yFrame(-22), COLUMN, 0, 44, { tone: "hi", inner: Ln(prismSeam(yFrame(-22), COLUMN, 22), { tone: "faint" }), extra: Dots(hubDots, { size: 0.4 }) });
  const cover = roundRect(-4, 62, 18, 80, 2.5);
  prism("shoulder", "cover", yFrame(22), cover, 0, 1.2, { tone: "mid", extra: Dots([[-1, 65], [15, 65], [-1, 77], [15, 77]].map(([x, z]) => at([x, 23.2, z])), { size: 0.42 }) });
  const C1BOX = { x: -24, y: 22, w: 10, d: 12, r: 1.2 };
  slab("shoulder", "harness-block", C1BOX, 58, 9, { tone: "mid", bevel: 0.4, extra: Dots([at([C1BOX.x + 2, C1BOX.y + C1BOX.d - 2, 67]), at([C1BOX.x + C1BOX.w - 2, C1BOX.y + C1BOX.d - 2, 67])], { size: 0.4 }) });
  const C1 = [-19, 30, 67];
  const C1F = G.frameAlong(C1, [0, 0, 1]);
  disc("shoulder", "harness-socket", C1F, 0, 3, 3.6, { tone: "mid" });

  // ------------------------------------------------------------- lower arm
  const FL = G.frameOf([J2[0], 22, J2[1]], [0, 1, 0], ARM_U, ARM_V);
  const LOWER_POLY = G.stadium(21, 17, LOWER, 40).map(([s, t]) => [s, t]);
  const bores = [[0, 18, 12], [LOWER, 15, 10]].map(([s, r, n]) => {
    const c = [J2[0] + ARM_U[0] * s, J2[1] + ARM_U[2] * s];
    return Ln(yOutline(circle(c[0], c[1], r, 48), 38), { tone: "faint" }) + Dots(Array.from({ length: n }, (_, i) => at([c[0] + (r - 2.4) * Math.cos((i / n) * 2 * Math.PI), 38, c[1] + (r - 2.4) * Math.sin((i / n) * 2 * Math.PI)])), { size: 0.4, tone: "lo" });
  }).join("");
  prism("lower", "link", FL, LOWER_POLY, 0, 16, { tone: "hi", extra: bores });
  const ribPoly = G.stadium(7, 7, 64, 24).map(([s, t]) => [s + 33, t]);
  const ribAt = (s, t) => G.add3(G.add3(FL.o, G.mul3(FL.u, s)), G.add3(G.mul3(FL.v, t), [0, 17.2, 0]));
  prism("lower", "cover", FL, ribPoly, 16, 17.2, { tone: "mid", extra: Dots([ribAt(30, 0), ribAt(100, 0)].map(at), { size: 0.42 }) });

  // Harness standoffs on the rear (−v) face of the link.
  const rearOffset = (s) => -(21 - (4 * s) / LOWER);
  const REAR_N = G.unit3([-(ARM_V[0] + (4 / LOWER) * ARM_U[0]), 0, -(ARM_V[2] + (4 / LOWER) * ARM_U[2])]);
  const HARNESS_Y = 30;
  const CABLE_R = 1.5;
  const CLAMP_R = 3.4;
  const CABLE_OFF = 12;
  const linkPoint = (s, t) => [J2[0] + ARM_U[0] * s + ARM_V[0] * t, HARNESS_Y, J2[1] + ARM_U[2] * s + ARM_V[2] * t];
  const cableAt = (s) => linkPoint(s, rearOffset(s) - CABLE_OFF);
  const CLAMPS = [44, 88].map((s) => {
    const root = linkPoint(s, rearOffset(s));
    const SF = G.frameAlong(root, REAR_N);
    disc("lower", "standoff", SF, 0, CABLE_OFF - CLAMP_R, 1.6, { tone: "mid" });
    return { s, centre: cableAt(s) };
  });

  // ------------------------------------------------------ drives on the link
  const F2 = G.frameAlong([J2[0], 38, J2[1]], [0, 1, 0]);
  disc("shoulderDrive", "reducer", F2, 0, 9, 18, { tone: "mid", extra: faceDots(F2, 9, 15.6, 12) });
  disc("shoulderDrive", "output-ring", F2, 9, 11, 14.5, { tone: "mid" });
  disc("shoulderDrive", "adapter", F2, 11, 14, 12.5, { tone: "mid" });
  motor("shoulderDrive", "j2-motor", [J2[0], 52, J2[1]], [0, 1, 0], { r: 12, body: 26 });

  const F3 = G.frameAlong([J3[0], 38, J3[1]], [0, 1, 0]);
  disc("elbowDrive", "reducer", F3, 0, 8, 15, { tone: "mid", extra: faceDots(F3, 8, 12.8, 10) });
  disc("elbowDrive", "output-ring", F3, 8, 10, 12, { tone: "mid" });
  disc("elbowDrive", "adapter", F3, 10, 12.5, 10.5, { tone: "mid" });
  motor("elbowDrive", "j3-motor", [J3[0], 50.5, J3[1]], [0, 1, 0], { r: 10.5, body: 22 });

  // ------------------------------------------------------------ elbow · J3
  const HOUSING = G.hullOf([...circle(0, 0, 22, 48), [26, 18], [26, -18], [-46, 13], [-46, -13]]).map(([x, z]) => [x + J3[0], z + J3[1]]);
  const j3Dots = Array.from({ length: 14 }, (_, i) => at([J3[0] + 19.6 * Math.cos((i / 14) * 2 * Math.PI), 22, J3[1] + 19.6 * Math.sin((i / 14) * 2 * Math.PI)]));
  prism("elbow", "housing", yFrame(-20), HOUSING, 0, 42, { tone: "hi", inner: Ln(prismSeam(yFrame(-20), HOUSING, 20), { tone: "faint" }), extra: Dots(j3Dots, { size: 0.4 }) });
  const ecover = roundRect(J3[0] - 44, J3[1] - 10, J3[0] - 24, J3[1] + 8, 2.5);
  prism("elbow", "cover", yFrame(22), ecover, 0, 1.2, { tone: "mid", extra: Dots([[-41.5, -7.5], [-26.5, -7.5], [-41.5, 5.5], [-26.5, 5.5]].map(([x, z]) => at([J3[0] + x, 23.2, J3[1] + z])), { size: 0.4 }) });
  const C2 = [J3[0] - 34, 23.2, J3[1] - 1];
  const C2F = G.frameAlong(C2, [0, 1, 0]);
  disc("elbow", "harness-socket", C2F, 0, 3, 3.6, { tone: "mid" });
  // Top cover on the rear slope of the housing (a flat face from the rear corner to its tangent on the hub).
  {
    const q = [-46, 13];
    const d = Math.hypot(q[0], q[1]);
    const ang = Math.atan2(q[1], q[0]) - Math.acos(22 / d);
    const t = [22 * Math.cos(ang), 22 * Math.sin(ang)];
    const len = Math.hypot(t[0] - q[0], t[1] - q[1]);
    const dir = [(t[0] - q[0]) / len, (t[1] - q[1]) / len];
    const n = [-dir[1], dir[0]];
    const along = (f) => [q[0] + (t[0] - q[0]) * f, q[1] + (t[1] - q[1]) * f];
    const a0 = along(0.18);
    const a1 = along(0.82);
    const poly = [a0, a1, [a1[0] + n[0] * 1.2, a1[1] + n[1] * 1.2], [a0[0] + n[0] * 1.2, a0[1] + n[1] * 1.2]].map(([x, z]) => [x + J3[0], z + J3[1]]);
    const screws = [0.24, 0.76].flatMap((f) => [-11, 11].map((y) => { const p = along(f); return at([p[0] + n[0] * 1.2 + J3[0], y, p[1] + n[1] * 1.2 + J3[1]]); }));
    prism("elbow", "top-cover", yFrame(-14), poly, 0, 28, { tone: "mid", extra: Dots(screws, { size: 0.4 }) });
  }
  motor("elbow", "j4-motor", [J3[0] - 46, 0, J3[1]], [-1, 0, 0], { r: 11, body: 24, up: [0, 0, 1] });

  // ----------------------------------------------------------- upper arm · J4
  const FF = G.frameAlong([FORE_X, 0, ZA], [1, 0, 0]);
  disc("upper", "bearing-collar", FF, 0, 5, 14, { tone: "mid", extra: faceDots(FF, 5, 12.6, 10, { tone: "lo" }) });
  turned("upper", "tube", FF, [[5, 11], [44, 11]], { tone: "hi", inner: Ln(G.arcOf(FF, 24, 11, P), { tone: "faint" }) });
  disc("upper", "roll-ring", FF, 44, 48, 12.5, { tone: "mid" });
  turned("upper", "roll-tube", FF, [[48, 10], [76, 10]], { tone: "hi" });
  disc("upper", "end-flange", FF, 76, 80, 12.5, { tone: "mid" });

  // ------------------------------------------------------- wrist · J5–J6
  const FW = G.frameAlong([FORE_END, 0, ZA], [1, 0, 0]);
  disc("wrist", "base-flange", FW, 0, 5, 12.5, { tone: "mid" });
  slab("wrist", "bridge", { x: FORE_END + 5, y: -13, w: 4, d: 26, r: 0.8 }, ZA - 11, 22, { tone: "hi", bevel: 0.4 });
  const CHEEK = G.hullOf([[FORE_END + 9, ZA - 11], [FORE_END + 9, ZA + 11], ...circle(J5X, ZA, 11, 40)]);
  prism("wrist", "cheek", yFrame(-13), CHEEK, 0, 5, { tone: "hi" });
  prism("wrist", "cheek", yFrame(8), CHEEK, 0, 5, { tone: "hi" });
  const FJ5 = G.frameAlong([J5X, 13, ZA], [0, 1, 0]);
  disc("wrist", "j5-cap", FJ5, 0, 2.4, 7, { tone: "mid", extra: faceDots(FJ5, 2.4, 5.6, 6) });
  const PITCH = G.hullOf([...circle(J5X, ZA, 10, 40), [J5X - 8, ZA - 16], [J5X + 8, ZA - 16]]);
  prism("wrist", "pitch-body", yFrame(-8), PITCH, 0, 16, { tone: "hi" });
  cyl("wrist", "j6-housing", J5X, 0, 8, ZA - 28, 12, { tone: "hi", inner: Ln(k.sideArc(J5X, 0, 8, ZA - 22, P, 24), { tone: "faint" }) });
  cyl("wrist", "tool-flange", J5X, 0, 10.5, ZA - 31, 3, { tone: "mid", bevel: 0.4, extra: Dots(G.dotsOf(G.frameOf([J5X, 0, 0], [0, 0, 1], [1, 0, 0], [0, 1, 0]), ZA - 28, 9.4, 8, P, { all: true, phase: 0.39 }), { size: 0.4 }) });

  // ---------------------------------------------------------------- gripper
  cyl("gripper", "adapter", J5X, 0, 10.5, ZA - 33.5, 2.5, { tone: "mid" });
  const BODY = { x: J5X - 15, y: -9, w: 30, d: 18, r: 2 };
  const slot = roundRect(J5X - 11, ZA - 41.5, J5X + 11, ZA - 38, 1.6, 4);
  slab("gripper", "body", BODY, ZA - 45.5, 12, { tone: "hi", bevel: 0.6, extra: Ln(yOutline(slot, 9), { tone: "lo" }) });
  cyl("gripper", "air-fitting", J5X + 12, 4.5, 1.8, ZA - 33.5, 3, { tone: "mid" });
  for (const side of [-1, 1]) {
    const x0 = side < 0 ? J5X - 12 : J5X + 6;
    slab("gripper", "finger", { x: x0, y: -6, w: 6, d: 12, r: 0.8 }, ZA - 67.5, 22, { tone: "hi", lit: true, bevel: 0.4 });
    const px = side < 0 ? J5X - 6 : J5X + 4.6;
    slab("gripper", "pad", { x: px, y: -4.5, w: 1.4, d: 9, r: 0.4 }, ZA - 67.5, 10, { tone: "hi", lit: true, bevel: 0 });
  }

  // ------------------------------------------------------------ cable harness
  const route = G.fillet(
    [
      C1F.o.map((v, i) => v + C1F.a[i] * 3),
      [C1[0], HARNESS_Y, C1[2] + 12],
      cableAt(14),
      cableAt(112),
      [C2[0], HARNESS_Y, C2[2]],
      C2F.o.map((v, i) => v + C2F.a[i] * 3),
    ],
    7,
    12,
    { P, tube: CABLE_R },
  );
  // A cable that ends in a connector shell at each end and is gapped under its clamps.
  function cableRun(piece, hid, route, r, clamps, clampR, free = [true, true]) {
    const total = G.pathLength(route);
    const SHELL = 2.2;
    const CLAMP_HALF = 1;
    const gaps = [[0, SHELL], [total - SHELL, total]];
    for (const clamp of clamps) for (const hit of crossingsOf(route, clamp.centre, clamp.axis, clampR)) gaps.push([hit - CLAMP_HALF - 0.05, hit + CLAMP_HALF + 0.05]);
    R.route(hid, route, r, { owner: hid, limp: true, gaps, rims: [r * 2, r * 2], free, piece, move: PIECES[piece].move, ride: piece });
    tubePieces(route, r, P, { maxLength: 14, spacing: 1, gaps }).forEach((part, index) => {
      R.put({ piece, at: part.mid, svg: tubeSvg(part, { tone: "mid" }), move: PIECES[piece].move, shapes: [A.tube(part.points, part.radii)], name: `${hid}:${index}`, route: hid, chunk: index });
    });
    counts[piece] += 1;
    [0, 1].forEach((index) => {
      const end = index ? route[route.length - 1] : route[0];
      const tangent = G.tangentAlong(route, index ? total : 0);
      const F = G.frameAlong(end, tangent);
      const [s0, s1] = index ? [-SHELL, 0] : [0, SHELL];
      put(piece, A.disc(F, s0, s1, r * 2, { name: `${hid}.shell${index}`, owner: hid }), S(G.disc(s0, s1, r * 2, F, P, { bevel: 0.25 }), { tone: "mid" }), { bias: 0.1 });
    });
    for (const clamp of clamps) {
      const F = G.frameAlong(clamp.centre, clamp.axis);
      put(piece, A.disc(F, -CLAMP_HALF, CLAMP_HALF, clampR, { name: R.nameFor(`${piece}.clamp`), anchor: false, fitting: true, touch: [hid], owner: hid }), S(G.disc(-CLAMP_HALF, CLAMP_HALF, clampR, F, P), { tone: "mid" }), { bias: 0.2 });
    }
  }
  cableRun("harness", "harness.cable", route, CABLE_R, CLAMPS.map((c) => ({ ...c, axis: ARM_U })), CLAMP_R);

  // Upper-arm dress cable: connector blocks on the bearing collar and the end flange, two clamps on standoffs.
  {
    const r = 0.9;
    const zc = ZA + 16.5;
    slab("upper", "dress-block", { x: FORE_X + 0.5, y: -2.5, w: 4, d: 5, r: 0.6 }, ZA + 14, 5, { tone: "mid", bevel: 0.3 });
    slab("upper", "dress-block", { x: FORE_X + 76.5, y: -2.5, w: 3, d: 5, r: 0.6 }, ZA + 12.5, 6.5, { tone: "mid", bevel: 0.3 });
    disc("upper", "dress-socket", G.frameAlong([FORE_X + 4.5, 0, zc], [1, 0, 0]), 0, 2, 1.8, { tone: "mid" });
    disc("upper", "dress-socket", G.frameAlong([FORE_X + 76.5, 0, zc], [-1, 0, 0]), 0, 2, 1.8, { tone: "mid" });
    const droute = [[FORE_X + 6.5, 0, zc], [FORE_X + 74.5, 0, zc]];
    const dclamps = [[30, 11], [62, 10]].map(([sx, tr]) => {
      disc("upper", "dress-standoff", G.frameAlong([FORE_X + sx, 0, ZA + tr - 0.1], [0, 0, 1]), 0, zc - 2.2 - (ZA + tr - 0.1), 1.2, { tone: "mid" });
      return { centre: [FORE_X + sx, 0, zc], axis: [1, 0, 0] };
    });
    cableRun("upper", "upper.dress-cable", droute, r, dclamps, 2.2, [false, false]);
  }

  return { R, counts, halo, out };
}

// ------------------------------------------------------------------- camera
// Fit the card to the arm both assembled and apart, so nothing leaves the card.
const probe = build({ origin: [0, 0], scale: 1, azimuth: AZIMUTH, elevation: ELEVATION });
const fitPoints = [];
for (const shape of probe.R.solids.concat(probe.R.tubes)) {
  const { min, max } = A.boundsOf(shape);
  for (const share of [0, 1]) {
    const m = (shape.move ?? [0, 0, 0]).map((v) => v * share);
    for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) fitPoints.push([x + m[0], y + m[1], z + m[2]]);
  }
}
const P = k.fitProjection(fitPoints, W, H, { pad: 12, azimuth: AZIMUTH, elevation: ELEVATION });
const { R, counts, halo } = build(P);

A.settle(R, P);
R.items.sort((a, b) => a.key - b.key);
const V = G.viewOf(P);
const groups = R.items.map((item, index) => {
  const [mx, my, mz] = item.move;
  return `<g class="it" data-piece="${item.piece}" data-k="${item.key.toFixed(3)}" data-m="${mx.toFixed(1)},${my.toFixed(1)},${mz.toFixed(1)}" data-i="${index}">${item.svg}</g>`;
});

const PART_COUNT = Object.values(counts).reduce((a, b) => a + b, 0);
const unit = (vector) => {
  const o = k.iso([0, 0, 0], P);
  const p = k.iso(vector, P);
  return [p[0] - o[0], p[1] - o[1]];
};
const DATA = {
  V,
  EX: unit([1, 0, 0]),
  EY: unit([0, 1, 0]),
  EZ: unit([0, 0, 1]),
  pieces: Object.fromEntries(Object.entries(PIECES).map(([id, piece]) => [id, { name: piece.name, joint: piece.joint, parts: counts[id] }])),
  stagger: STAGGER,
  spring: SPRING,
  order: ORDER,
  parts: PART_COUNT,
  movable: ORDER.filter((id) => PIECES[id].move.some((v) => v !== 0)).length,
};

const LABEL_TEXT = `An original, generic six-axis industrial robot arm on a floor plate, drawn as ${PART_COUNT} solid parts: base plate with feet and anchor bolts, turntable (J1), shoulder housing with its motor and gearbox (J2), lower arm, elbow housing with its motor (J3), upper arm (J4), a wrist with pitch and tool axes (J5, J6), a tool flange, a two-finger gripper and a cable harness. It comes apart into ${ORDER.length} assemblies.`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" class="iso-svg ra-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${LABEL_TEXT}">${halo}<g class="ra-items">${groups.join("")}</g></svg>`;
const PARTS = ORDER.map((id, index) => `<button type="button" class="ra-part" data-part="${id}"><span class="ra-num">${String(index + 1).padStart(2, "0")}</span>${PIECES[id].name}<span class="ra-joint">${PIECES[id].joint}</span></button>`).join("");
const corners = `<div class="iso-plate-corners" aria-hidden="true"><span class="iso-plate-corner" data-corner="fig">Fig 1</span><span class="iso-plate-corner" data-corner="title">Six-axis arm</span><span class="iso-plate-corner" data-corner="hint" data-hint>Hover or tap to take it apart</span><span class="iso-plate-corner" data-corner="readout" data-readout>assembled · ${PART_COUNT} parts</span></div>`;
const stage = `<div class="ra-stage" tabindex="0" role="slider" aria-label="Six-axis robot arm. Hover, tap or drag to take it apart; arrow keys step through the ${ORDER.length} assemblies, Space toggles apart, Escape puts it back together." aria-valuemin="0" aria-valuemax="${ORDER.length}" aria-valuenow="0" aria-valuetext="Assembled">${svg}</div>`;
const caption = `An original, generic six-axis arm, not a model of any product. ${PART_COUNT} parts in ${ORDER.length} assemblies; each assembly moves off along its joint axis or up its chain.`;
const body = `<figure class="iso-figure ra"><div class="iso-plate">${corners}${stage}<span class="ra-live" aria-live="polite" data-live></span></div><figcaption class="iso-legend"><span class="ra-parts">${PARTS}</span><span class="iso-caption">${caption}</span></figcaption></figure>`;

// Dark theme mapped to the portfolio's tokens (ink, panel, line, steel, scan).
// Shades are greys interpolated between panel #101314 and line #263031.
const CSS = `
.iso{
  --anatomy-page:#050606;--anatomy-card:#101314;--anatomy-text:#9aa6a4;--anatomy-strong:#c9d5d2;--anatomy-muted:#6b7877;
  --anatomy-paper:#101314;--anatomy-face:#1e2627;--anatomy-top:#222a2b;
  --anatomy-shade-0:#111516;--anatomy-shade-1:#151a1b;--anatomy-shade-2:#192021;--anatomy-shade-3:#1e2627;
  --anatomy-lit-top:#1c2624;--anatomy-lit-shade:#171f1e;
  --anatomy-hi:#c9d5d2;--anatomy-mid:#6b7877;--anatomy-lo:#3d4849;--anatomy-faint:#263031;--anatomy-lit:#a9fbd7;
  --anatomy-halo:#050606;--anatomy-halo-opacity:.95;--anatomy-dot:#c9d5d2;
}
.ra .iso-plate{padding:52px 20px 60px;overflow:hidden;box-shadow:0 0 0 1px #263031}
.ra-stage{position:relative;touch-action:pan-y;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;outline:none}
.ra-stage:focus-visible{outline:1px solid var(--anatomy-muted);outline-offset:6px}
.ra-svg{overflow:visible}
.ra-items .it{pointer-events:visiblePainted}
.ra-stage[data-focus] .it:not([data-on]){--anatomy-hi:#6b7877;--anatomy-mid:#3d4849;--anatomy-lit:#6b7877;--anatomy-lit-top:#1e2526;--anatomy-lit-shade:#181d1e}
.ra-stage[data-focus] .it:not([data-on]) .iso-dots circle{opacity:.18}
.it[data-on]{--anatomy-hi:#a9fbd7;--anatomy-mid:#c9d5d2;--anatomy-lo:#6b7877}
.it[data-on] .iso-top,.it[data-on] .tb-shine{fill:var(--anatomy-lit-top)}
.it[data-on] .iso-shade,.it[data-on] .tb-body{fill:var(--anatomy-lit-shade)}
.ra-parts{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}
.ra-part{display:inline-flex;align-items:baseline;gap:7px;padding:5px 10px;border:0;border-radius:999px;background:transparent;color:var(--anatomy-muted);font:12.5px/1.3 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;cursor:pointer;box-shadow:inset 0 0 0 1px #263031;transition:color 160ms var(--anatomy-ease),box-shadow 160ms var(--anatomy-ease)}
.ra-part:hover,.ra-part:focus-visible,.ra-part[data-on]{color:var(--anatomy-strong);box-shadow:inset 0 0 0 1px #3d4849;outline:none}
.ra-part[data-on]{box-shadow:inset 0 0 0 1px #a9fbd7}
.ra-num,.ra-joint{font-family:var(--anatomy-mono);font-size:10px;color:var(--anatomy-muted)}
.ra-live{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (max-width:560px){.ra .iso-plate{padding:44px 6px 78px}.ra .iso-plate-corners{inset:16px 14px}.ra .iso-plate-corner[data-corner="hint"]{bottom:20px}.ra .iso-plate-corner[data-corner="readout"]{bottom:0;left:0;right:auto;max-width:100%;overflow:hidden;text-overflow:ellipsis}}
@media (prefers-reduced-motion:reduce){.ra *{transition:none!important}}
`;

const LIVE = `
const D = ${JSON.stringify(DATA)};
const root = document.querySelector(".ra");
const stage = root.querySelector(".ra-stage");
const layer = stage.querySelector(".ra-items");
const readout = root.querySelector("[data-readout]");
const hint = root.querySelector("[data-hint]");
const live = root.querySelector("[data-live]");
const buttons = [...root.querySelectorAll(".ra-part")];
const still = matchMedia("(prefers-reduced-motion: reduce)");
const nodes = [...layer.querySelectorAll(".it")].map((el) => ({ el, piece: el.dataset.piece, key: Number(el.dataset.k), m: el.dataset.m.split(",").map(Number), shown: "" }));
for (const n of nodes) n.lift = n.m[0] * D.V[0] + n.m[1] * D.V[1] + n.m[2] * D.V[2];
let order = nodes.map((_, i) => i);
const IDS = Object.keys(D.pieces);
const piece = Object.fromEntries(IDS.map((id) => [id, { x: 0, v: 0, target: 0, pending: null }]));
const MOVING = IDS.filter((id) => nodes.some((n) => n.piece === id && (n.m[0] || n.m[1] || n.m[2])));
let clock = 0, apart = false, selected = null, inside = false, leaveTimer = 0, idleTimer = 0;
let touring = !still.matches, tourClock = 0, visible = false, frame = 0, last = 0, drag = null, scrub = null;

function say(text) { if (readout.textContent !== text) readout.textContent = text; }
function describe() {
  const text = selected ? "Selected: " + D.pieces[selected].name + ", " + D.pieces[selected].joint : apart ? "Apart, " + D.order.length + " assemblies" : "Assembled";
  if (stage.getAttribute("aria-valuetext") !== text) stage.setAttribute("aria-valuetext", text);
}
function announce(text) { if (live.textContent !== text) live.textContent = text; }

function setApart(on) {
  scrub = null;
  if (apart === on) return;
  apart = on;
  const goal = on ? 1 : 0;
  let index = 0;
  for (const id of on ? D.stagger : [...D.stagger].reverse()) {
    const p = piece[id];
    if (p.target === goal && !p.pending) continue;
    if (p.target === goal) { p.pending = null; continue; }
    p.pending = { value: goal, at: clock + (still.matches ? 0 : index++ * D.spring.stagger) };
  }
  describe();
  announce(on ? "apart" : "assembled");
  run();
}
function setShare(value) {
  scrub = Math.min(1, Math.max(0, value));
  apart = scrub > 0.5;
  for (const id of IDS) { piece[id].pending = null; piece[id].target = scrub; }
  run();
}
function select(id) {
  if (selected === id) return;
  selected = id;
  for (const n of nodes) id !== null && n.piece === id ? n.el.setAttribute("data-on", "") : n.el.removeAttribute("data-on");
  id ? stage.setAttribute("data-focus", "") : stage.removeAttribute("data-focus");
  buttons.forEach((b) => (b.dataset.part === id ? b.setAttribute("data-on", "") : b.removeAttribute("data-on")));
  stage.setAttribute("aria-valuenow", String(id ? D.order.indexOf(id) + 1 : 0));
  describe();
  if (id) announce(D.pieces[id].name + ", " + D.pieces[id].joint);
}
function step(p, dt, calm) {
  if (p.pending && clock >= p.pending.at) { p.target = p.pending.value; p.pending = null; }
  if (calm) { p.x = p.target; p.v = 0; return false; }
  const n = D.spring.substeps;
  for (let i = 0; i < n; i++) { const h = dt / n; p.v += ((p.target - p.x) * D.spring.stiffness - p.v * D.spring.damping) * h; p.x += p.v * h; }
  if (Math.abs(p.target - p.x) < 2e-4 && Math.abs(p.v) < 2e-4) { p.x = p.target; p.v = 0; return p.pending !== null; }
  return true;
}
function place() {
  for (const n of nodes) {
    const s = piece[n.piece].x;
    const tx = (D.EX[0] * n.m[0] + D.EY[0] * n.m[1] + D.EZ[0] * n.m[2]) * s;
    const ty = (D.EX[1] * n.m[0] + D.EY[1] * n.m[1] + D.EZ[1] * n.m[2]) * s;
    const text = s === 0 || (!n.m[0] && !n.m[1] && !n.m[2]) ? "" : "translate(" + tx.toFixed(2) + " " + ty.toFixed(2) + ")";
    if (text !== n.shown) { n.shown = text; text ? n.el.setAttribute("transform", text) : n.el.removeAttribute("transform"); }
  }
  const next = nodes.map((_, i) => i).sort((a, b) => nodes[a].key + nodes[a].lift * piece[nodes[a].piece].x - (nodes[b].key + nodes[b].lift * piece[nodes[b].piece].x));
  if (next.some((i, at) => i !== order[at])) {
    const fragment = document.createDocumentFragment();
    for (const i of next) fragment.appendChild(nodes[i].el);
    layer.appendChild(fragment);
    order = next;
  }
}
function share() { return MOVING.reduce((sum, id) => sum + piece[id].x, 0) / MOVING.length; }
function idleText() {
  if (selected) { const p = D.pieces[selected]; return p.name + " · " + p.joint + " · " + p.parts + " parts"; }
  const moving = IDS.some((id) => Math.abs(piece[id].x - piece[id].target) > 0.002 || piece[id].pending);
  const pct = Math.round(Math.min(1, Math.max(0, share())) * 100);
  if (moving) return (apart ? "taking apart · " : "closing up · ") + pct + "%";
  if (pct >= 100) return "apart · " + D.order.length + " assemblies · " + D.parts + " parts";
  if (pct > 0) return "apart " + pct + "% · " + D.parts + " parts";
  return "assembled · " + D.parts + " parts";
}
const TOUR_STEP = 1.1;
const TOUR_ORDER = D.order.filter((id) => id !== "base");
function tourAt(t) {
  const openAt = 1.6, listFrom = openAt + 1.6, listTo = listFrom + TOUR_ORDER.length * TOUR_STEP, closeTo = listTo + 3.2;
  const loop = t % closeTo;
  if (loop < openAt) return { apart: false, part: null };
  if (loop < listFrom) return { apart: true, part: null };
  if (loop < listTo) return { apart: true, part: TOUR_ORDER[Math.floor((loop - listFrom) / TOUR_STEP)] };
  return { apart: false, part: null };
}
function quietTour() {
  touring = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (inside || drag) return quietTour();
    touring = !still.matches;
    tourClock = 0;
    run();
  }, 3600);
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  clock += dt;
  const calm = still.matches;
  if (touring) { tourClock += dt; const s = tourAt(tourClock); setApart(s.apart); select(s.part); }
  let moving = false;
  for (const id of IDS) if (step(piece[id], dt, calm)) moving = true;
  place();
  say(idleText());
  frame = visible && (moving || touring) ? requestAnimationFrame(tick) : 0;
}
function run() { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } }
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible) run(); }, { rootMargin: "120px 0px" }).observe(stage);

function pieceAt(event) {
  const hit = document.elementFromPoint(event.clientX, event.clientY);
  const item = hit && hit.closest ? hit.closest(".it") : null;
  return item ? item.dataset.piece : null;
}
stage.addEventListener("pointermove", (event) => {
  if (drag) {
    const dx = (event.clientX - drag.x) / stage.getBoundingClientRect().width;
    if (!drag.scrubbing && Math.abs(event.clientX - drag.x) > 10 && Math.abs(event.clientX - drag.x) > Math.abs(event.clientY - drag.y)) { drag.scrubbing = true; try { stage.setPointerCapture(event.pointerId); } catch (e) {} }
    if (drag.scrubbing) { quietTour(); select(null); setShare(drag.from + dx * 1.8); }
    return;
  }
  if (event.pointerType === "touch") return;
  inside = true;
  clearTimeout(leaveTimer);
  quietTour();
  setApart(true);
  select(pieceAt(event));
  run();
});
stage.addEventListener("pointerleave", () => {
  inside = false;
  if (drag) return;
  clearTimeout(leaveTimer);
  leaveTimer = setTimeout(() => { if (!inside) { select(null); setApart(false); } }, 260);
});
stage.addEventListener("pointerdown", (event) => { drag = { x: event.clientX, y: event.clientY, from: share(), scrubbing: false, type: event.pointerType }; });
const release = (event) => {
  if (!drag) return;
  const was = drag;
  drag = null;
  quietTour();
  if (was.scrubbing) { const s = scrub ?? 0; apart = !(s > 0.5); setApart(s > 0.5); return; }
  if (was.type !== "touch") return;
  const hit = pieceAt(event);
  const id = hit === "base" ? null : hit;
  if (!apart) { setApart(true); select(id); }
  else if (id && id !== selected) select(id);
  else { select(null); setApart(false); }
  run();
};
stage.addEventListener("pointerup", release);
stage.addEventListener("pointercancel", () => { drag = null; });
buttons.forEach((button) => {
  const show = () => { quietTour(); clearTimeout(leaveTimer); setApart(true); select(button.dataset.part); run(); };
  const hide = () => { clearTimeout(leaveTimer); leaveTimer = setTimeout(() => { if (inside || buttons.some((b) => b.matches(":hover, :focus-visible"))) return; select(null); setApart(false); }, 260); };
  button.addEventListener("pointerenter", show);
  button.addEventListener("focus", show);
  button.addEventListener("pointerleave", hide);
  button.addEventListener("blur", hide);
  button.addEventListener("click", show);
});
stage.addEventListener("keydown", (event) => {
  const index = selected ? D.order.indexOf(selected) : -1;
  let next = null;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = Math.min(D.order.length - 1, index + 1);
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = Math.max(0, index - 1);
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = D.order.length - 1;
  else if (event.key === "Escape") { event.preventDefault(); quietTour(); select(null); setApart(false); return; }
  else if (event.key === " " || event.key === "Enter") { event.preventDefault(); quietTour(); setApart(!apart); if (!apart) select(null); return; }
  if (next === null) return;
  event.preventDefault();
  quietTour();
  setApart(true);
  select(D.order[next]);
  run();
});
const narrow = matchMedia("(hover: none), (max-width: 480px)");
const wording = () => { hint.textContent = narrow.matches ? "Tap to take it apart" : "Hover or tap to take it apart"; };
wording();
narrow.addEventListener("change", wording);
if (still.matches) touring = false;
still.addEventListener("change", () => { touring = !still.matches && !inside; run(); });
place();
say(idleText());
`;

const NOTICE = "<!-- Built with the Anatomy kit (github.com/wheresryan22/anatomy), MIT License, Copyright (c) 2026 Ryan. Figure: original generic six-axis arm. -->";
const page = k.pageHtml({ title: "Six-axis arm", theme: "dark", body: `${NOTICE}<style>${CSS}</style>${body}`, script: LIVE, width: 920 });
writeFileSync(join(HERE, "robot-arm-v1.html"), page);
console.log("wrote robot-arm-v1.html", `${(page.length / 1024).toFixed(0)} KB`, `${R.items.length} items`, `${PART_COUNT} parts`, JSON.stringify(counts));

A.auditOrExit(R, P, { crowd: [] });
