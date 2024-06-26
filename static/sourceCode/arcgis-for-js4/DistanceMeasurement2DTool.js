/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import { _ as e } from "../../chunks/tslib.es6.js";
import "../../geometry.js";
import t from "../../Graphic.js";
import "../../intl.js";
import "../../symbols.js";
import {
  getContrast as r,
  multiplyOpacity as s,
  BrightnessThreshold as i,
} from "../../core/colorUtils.js";
import { destroyMaybe as o } from "../../core/maybe.js";
import { watch as a, initial as n } from "../../core/reactiveUtils.js";
import {
  formatDecimal as l,
  formatImperialLength as m,
  formatMetricLength as c,
} from "../../core/unitFormatUtils.js";
import { convertUnit as h } from "../../core/unitUtils.js";
import { property as p } from "../../core/accessorSupport/decorators/property.js";
import "../../core/has.js";
import "../../core/Logger.js";
import "../../core/RandomLCG.js";
import { subclass as u } from "../../core/accessorSupport/decorators/subclass.js";
import {
  geodesicLength as d,
  geodesicDensify as y,
  planarLength as v,
} from "../../geometry/geometryEngine.js";
import { project } from "../../geometry/projection.js";
import {
  isSupported as _,
  geodesicLengths,
  geodesicDensify,
} from "../../geometry/support/geodesicUtils.js";
import b from "../../layers/GraphicsLayer.js";
import j from "../../views/draw/Draw.js";
import {
  createManipulatorDragEventPipeline as L,
  screenToMap as S,
  dragGraphic as x,
} from "../../views/interactive/dragEventPipeline.js";
import { GraphicManipulator as A } from "../../views/interactive/GraphicManipulator.js";
import { InteractiveToolBase as C } from "../../views/interactive/InteractiveToolBase.js";
import { fetchMessageBundle as M } from "../../intl/messages.js";
import { onLocaleChange as T } from "../../intl/locale.js";
import k from "../../geometry/Point.js";
import D from "../../symbols/CIMSymbol.js";
import G from "../../symbols/TextSymbol.js";
import R from "../../symbols/Font.js";
import P from "../../symbols/SimpleMarkerSymbol.js";
import E from "../../geometry/Polyline.js";
import I from "../../geometry/SpatialReference.js";
const U = 1e5;
let z = class extends C {
  constructor(e) {
    super(e),
      (this._drawActive = !1),
      (this._measurementLayer = new b({
        internal: !0,
        listMode: "hide",
        visible: !1,
      })),
      (this._manipulatorLayer = new b({
        internal: !0,
        listMode: "hide",
        visible: !1,
      })),
      (this._vertices = []),
      (this.geodesicDistanceThreshold = null),
      (this.measurement = null),
      (this.measurementLabel = null);
  }
  initialize() {
    M("esri/core/t9n/Units").then((e) => {
      this.messages = e;
    }),
      this.addHandles(
        T(async () => {
          this.messages = await M("esri/core/t9n/Units");
        })
      );
    const e = this.view;
    (this._draw = new j({ view: e })),
      e.map.addMany([this._measurementLayer, this._manipulatorLayer]),
      e.focus(),
      this.addHandles([
        a(
          () => [this.unit, this.geodesicDistanceThreshold, this.messages],
          () => {
            this._updatePolylines();
          },
          n
        ),
        a(
          () => [
            this.view.effectiveTheme.accentColor,
            this.view.effectiveTheme.textColor,
          ],
          () => {
            if (!this._vertices.length) return;
            const e = this._vertices.map(({ coord: e }) => e);
            for (const { handle: t } of this._vertices) t.remove();
            (this._vertices = []),
              this._measurementLayer.removeAll(),
              this._manipulatorLayer.removeAll(),
              this.manipulators.removeAll(),
              this._updateSketch(e);
          }
        ),
      ]);
  }
  destroy() {
    const { map: e } = this.view;
    (this._draw.view = null),
      (this._draw = o(this._draw)),
      e.removeMany([this._measurementLayer, this._manipulatorLayer]),
      this._measurementLayer.removeAll(),
      this._manipulatorLayer.removeAll(),
      this._set("measurement", null),
      this._set("measurementLabel", null),
      (this._measurementLayer = o(this._measurementLayer)),
      (this._manipulatorLayer = o(this._manipulatorLayer)),
      this._resetVertices();
  }
  get cursor() {
    return this._drawActive ? "crosshair" : null;
  }
  set editable(e) {
    this._set("editable", e), e || this._draw.reset();
  }
  onActivate() {
    this._drawActive || 0 !== this._vertices.length || this._startSketch();
  }
  onShow() {
    (this._measurementLayer.visible = !0),
      (this._manipulatorLayer.visible = !0);
  }
  onHide() {
    (this._measurementLayer.visible = !1),
      (this._manipulatorLayer.visible = !1);
  }
  _resetVertices() {
    for (const { handle: e } of this._vertices) e.remove();
    this._vertices = [];
  }
  _startSketch() {
    this._drawActive = !0;
    const e = this._draw.create("polyline", { mode: "click" });
    e.on(
      [
        "vertex-add",
        "vertex-update",
        "vertex-remove",
        "cursor-update",
        "undo",
        "redo",
      ],
      (e) => this._updateSketch(e.vertices)
    ),
      e.on("draw-complete", () => {
        this._stopSketch();
      });
  }
  _stopSketch() {
    this.manipulators.forEach(({ manipulator: e }) => {
      e.interactive = !0;
    }),
      (this._drawActive = !1),
      this.finishToolCreation();
  }
  _updateSketch(e) {
    const { spatialReference: t } = this.view;
    for (; this._vertices.length > e.length; ) {
      const { handle: e, manipulator: t } = this._vertices.pop();
      e.remove(), this.manipulators.remove(t);
    }
    for (let n = this._vertices.length; n < e.length; n++) {
      const [r, s] = e[n],
        i = W(
          new k({ x: r, y: s, spatialReference: t }),
          this.view,
          this._manipulatorLayer
        );
      this.manipulators.add(i);
      const o = L(i, (e, t) => {
        t.next(S(this.view))
          .next(x(e.graphic))
          .next(() => {
            const t = e.graphic.geometry;
            (this._vertices[n].coord = [t.x, t.y]), this._updatePolylines();
          });
      });
      this._vertices.push({ manipulator: i, coord: [r, s], handle: o });
    }
    const r = this._vertices.length - 1,
      s = this._vertices[r],
      [i, o] = e[r];
    (s.coord[0] === i && s.coord[1] === o) ||
      ((s.coord = [i, o]),
      (s.manipulator.graphic.geometry = new k({
        x: i,
        y: o,
        spatialReference: t,
      })));
    const a = this._drawActive ? this._vertices[r].manipulator : null;
    this.manipulators.forEach(({ manipulator: e }) => {
      e.interactive = null == a || e !== a;
    }),
      this._updatePolylines();
  }
  _updatePolylines() {
    if (this._vertices.length < 2)
      return void this._measurementLayer.removeAll();

    // 获取所有顶点的坐标
    const e = this._vertices.map(({ coord: e }) => e)
    // 使用 O 函数测量折线，得到测量结果、绘图几何和原始折线
    const {
        measurement: o,
        drawing: a,
        original: n,
      } = O(e, this.view.spatialReference, this.geodesicDistanceThreshold);
    this._set("measurement", o);
    const l = H(this.messages, o, this.unit);
    let m, c;
    this._set("measurementLabel", l);
    const { graphics: h } = this._measurementLayer,
      p = 2 === h.length,
      { effectiveTheme: u } = this.view;
      
    // 如果已有两个图形，分别设置 m 和 c
    // 否则，创建新的折线和标签图形
    p
      ? ((m = h.at(0)), (c = h.at(1)))
      : ((m = new t({
          symbol: new D({
            data: {
              type: "CIMSymbolReference",
              symbol: {
                type: "CIMLineSymbol",
                symbolLayers: [
                  {
                    type: "CIMSolidStroke",
                    effects: [
                      {
                        type: "CIMGeometricEffectDashes",
                        dashTemplate: [14, 12],
                        lineDashEnding: "FullGap",
                        controlPointEnding: "NoConstraint",
                      },
                    ],
                    enable: !0,
                    capStyle: "Butt",
                    joinStyle: "Round",
                    width: 3.5,
                    color: r(u.accentColor).toArray(),
                  },
                  {
                    type: "CIMSolidStroke",
                    enable: !0,
                    capStyle: "Butt",
                    joinStyle: "Round",
                    width: 5,
                    color: u.accentColor.toArray(),
                  },
                ],
              },
            },
          }),
        })),
        (c = new t({
          symbol: new G({
            color: u.textColor,
            haloColor: s(r(u.textColor, i.Low), 0.5),
            haloSize: 2,
            font: new R({ size: 14, family: "sans-serif" }),
          }),
        })),
        h.removeAll(),
        h.addMany([m, c])),
      (m.geometry = a),
      (c.geometry = n.extent?.center),
      (c.symbol.text = l);
  }
};
function W(e, r, i) {
  const o = s(r.effectiveTheme.accentColor, 0.5),
    a = { type: "simple-line", width: 0 },
    n = 8,
    l = new P({ style: "circle", color: o, size: n, outline: a }),
    m = new P({ style: "circle", color: o, size: 1.5 * n, outline: a }),
    c = new t({ geometry: e, symbol: l });
  return new A({ view: r, layer: i, graphic: c, focusedSymbol: m });
}
function O(e, t, r) {
  const s = new E({ paths: [e], spatialReference: t });
  let i, o;
  if (t.isGeographic)
    if (_(t)) (i = geodesicLengths([s], "meters")[0]), (o = geodesicDensify(s, U));
    else {
      const e = project(s, I.WGS84),
        r = geodesicDensify(e, U);
      (i = geodesicLengths([e], "meters")[0]), (o = project(r, t));
    }
  else if (t.isWebMercator) (i = d(s, "meters")), (o = y(s, U, "meters"));
  else {
    const e = v(s, "meters");
    if (null != r && e >= r) {
      const e = project(s, I.WGS84),
        r = geodesicDensify(e, U);
      (i = geodesicLengths([e], "meters")[0]), (o = project(r, t));
    } else (i = e), (o = s);
  }
  return { measurement: { geometry: o, length: i }, original: s, drawing: o };
}
function O2(vertices, spatialReference, r) {
  const line = new Polyline({ paths: [vertices], spatialReference: spatialReference });
  let length, geom;
  if (spatialReference.isGeographic) {

    if (_(spatialReference)){
      length = geodesicLengths([line], "meters")[0]
      geom = geodesicDensify(line, U)
    }
    else {
      const e = project(line, I.WGS84)
      const r = geodesicDensify(e, U);

      length = geodesicLengths([e], "meters")[0]
      geom = project(r, spatialReference)
    }
  } else if (spatialReference.isWebMercator) {
    length = d(line, "meters")
    geom = y(line, U, "meters")
  } else {
    const e = v(line, "meters");
    if (null != r && e >= r) {
      const e = project(line, I.WGS84)
      const r = geodesicDensify(e, U);

      length = geodesicLengths([e], "meters")[0]
      geom = project(r, spatialReference)
    } else {
      length = e
      geom = line
    }
  }
  return { 
    measurement: { geometry: geom, length }, 
    original: line, 
    drawing: geom 
  };
}
function B(e) {
  return null != e;
}
function F(e) {
  if (!e) return !1;
  const { isGeographic: t, isWebMercator: r, isWGS84: s } = e;
  return (t && !s && !_(e)) || (!t && !r);
}
function H(e, t, r) {
  if (!t || !e) return "";
  switch (r) {
    case "metric":
      return c(e, t.length, "meters");
    case "imperial":
      return m(e, t.length, "meters");
    default:
      return l(e, h(t.length, "meters", r), r);
  }
}
e([p()], z.prototype, "_drawActive", void 0),
  e([p({ readOnly: !0 })], z.prototype, "cursor", null),
  e([p({ value: !0 })], z.prototype, "editable", null),
  e([p({ type: Number })], z.prototype, "geodesicDistanceThreshold", void 0),
  e([p({ readOnly: !0 })], z.prototype, "measurement", void 0),
  e([p({ readOnly: !0 })], z.prototype, "measurementLabel", void 0),
  e([p()], z.prototype, "messages", void 0),
  e([p()], z.prototype, "unit", void 0),
  e([p({ constructOnly: !0 })], z.prototype, "view", void 0),
  (z = e(
    [u("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],
    z
  ));
export {
  z as DistanceMeasurement2DTool,
  O as createDistanceMeasurementInfo2D,
  H as createDistanceMeasurementLabel,
  F as isProjectionEngineRequired,
  B as isSupported,
};
