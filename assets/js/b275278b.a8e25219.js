"use strict";(self.webpackChunknullaha_github_io=self.webpackChunknullaha_github_io||[]).push([[5260],{9619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:1,title:"measurement widget",description:"\u6d4b\u91cf\u5de5\u5177\u76f8\u5173\u5185\u5bb9",date:"2024-5-9",tags:["arcgis for js4"]},a=void 0,l={id:"gis/measurement-widget",title:"measurement widget",description:"\u6d4b\u91cf\u5de5\u5177\u76f8\u5173\u5185\u5bb9",source:"@site/docs/gis/measurement-widget.mdx",sourceDirName:"gis",slug:"/gis/measurement-widget",permalink:"/docs/gis/measurement-widget",draft:!1,unlisted:!1,tags:[{label:"arcgis for js4",permalink:"/docs/tags/arcgis-for-js-4"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"measurement widget",description:"\u6d4b\u91cf\u5de5\u5177\u76f8\u5173\u5185\u5bb9",date:"2024-5-9",tags:["arcgis for js4"]},sidebar:"tutorialSidebar",previous:{title:"arcpy\u4e2dpython2.x\u7f16\u7801\u95ee\u9898",permalink:"/docs/gis/arcpy\u4e2dpython2.x\u7f16\u7801\u95ee\u9898"},next:{title:"popup widget",permalink:"/docs/gis/popup-widget"}},o={},c=[{value:"\u4e8b\u4ef6?",id:"\u4e8b\u4ef6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"Measurement \u4fdd\u5b58geometry?",id:"measurement-\u4fdd\u5b58geometry",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3},{value:"measurement widget show segment length",id:"measurement-widget-show-segment-length",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42-1",level:3},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:3},{value:"\u601d\u8def",id:"\u601d\u8def-1",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0-1",level:3},{value:"\u8865\u5145\u77e5\u8bc6",id:"\u8865\u5145\u77e5\u8bc6",level:3},{value:"\u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6",id:"\u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6",level:4},{value:"\u76f8\u5173\u6e90\u7801",id:"\u76f8\u5173\u6e90\u7801",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6?"}),"\n",(0,s.jsx)(n.p,{children:"The 4.x Measure widget doesn't have events."}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60f3\u76d1\u542c\u5b8c\u6210\uff0c\u5e94\u8be5\u600e\u4e48\u529e\uff1f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"\u4f7f\u7528 watch \n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"this.measure = new Measurement({\n    view: this.view,\n    container: this.container,\n    areaUnit: 'square-meters',\n    linearUnit: 'meters',\n});\n\nconst handler = this.measure.watch('viewModel.state', (newValue, oldValue, propertyName, target) => {\n    if (newValue == 'measured') {\n        const graphics = target.viewModel.activeViewModel.tool._measurementLayer.graphics;\n        this.saveGraphicToResultLayer(graphics);\n    }\n});\nthis.measure.addHandles(handler);\n\n\nsaveGraphicToResultLayer(graphics) {\n    if (this.resultLayer) {\n        this.view.map.reorder(this.resultLayer, this.view.map.allLayers.length);\n    } else {\n        this.resultLayer = new GraphicsLayer({\n            id: 'measurement-result-layer',\n        });\n        this.view?.map.add(this.resultLayer);\n    }\n    const cloneGras = graphics.map((gra) => {\n        const n = gra.clone();\n        n.visible = false;\n        return n;\n    });\n    this.resultLayer.addMany(cloneGras);\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/possible-events-for-new-measurement-widgets-4-10/m-p/278961",children:"Possible events for new Measurement widgets 4.10"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"measurement-\u4fdd\u5b58geometry",children:"Measurement \u4fdd\u5b58geometry?"}),"\n",(0,s.jsx)(n.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,s.jsxs)(n.p,{children:["api \u73b0\u5728\u753b\u4e00\u4e0b\uff0c\u4e00\u4e2a\u7ed3\u679c\uff0c\u753b\u4e00\u4e0b\u4e00\u4e2a\u7ed3\u679c\uff0c\u4e0d\u4f1a\u4fdd\u5b58\u4e0a\u4e00\u4e2a\u7ed3\u679c\u7684\u3002",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u5982\u679c\u9700\u6c42\u662f\u6d4b\u91cf\u4e00\u4e0b\uff0c\u518d\u6b21\u6d4b\u91cf\u65f6\uff0c\u4fdd\u7559\u4e0a\u4e00\u6b21\u6d4b\u91cf\u7684\u7ed3\u679c\u3002  \u9700\u8981\u81ea\u5df1\u5904\u7406\u4e00\u4e0b\u3002\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u601d\u8def",children:"\u601d\u8def"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u76d1\u542c\u6d4b\u91cf\u5b8c\u6210\u4e8b\u4ef6\uff0c\u4fdd\u5b58\u7ed3\u679c\u54af\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"this.measure = new Measurement({\n    view: this.view,\n    container: this.container,\n    areaUnit: 'square-meters',\n    linearUnit: 'meters',\n});\n\nconst handler = this.measure.watch('viewModel.state', (newValue, oldValue, propertyName, target) => {\n    if (newValue == 'measured') {\n        const graphics = target.viewModel.activeViewModel.tool._measurementLayer.graphics;\n        this.saveGraphicToResultLayer(graphics);\n    }\n});\nthis.measure.addHandles(handler);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003-1",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/how-to-get-the-geometry-of-measurement-widget-4-26/m-p/1293996",children:"How to get the geometry of measurement Widget 4.26"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"measurement-widget-show-segment-length",children:"measurement widget show segment length"}),"\n",(0,s.jsx)(n.h3,{id:"\u9700\u6c42-1",children:"\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u5e0c\u671b Measurement \u7684 distance\u53ea\u663e\u793a\u603b\u957f\u5ea6\uff0c\u5e0c\u671b\u80fd\u663e\u793a\u6bcf\u6761\u7ebf\u6bb5\u7684\u957f\u5ea6\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6e90\u7801\u5206\u6790",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece",(0,s.jsx)(n.code,{children:"DistanceMeasurement2DTool.js"}),"\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u5728\u5730\u56fe\u4e0a\u8fb9\u753b\u7ebf\u6bb5\uff0c\u8fb9\u663e\u793a\u957f\u5ea6\u662f\u5728\u8fd9\u4e2a\u6587\u4ef6\u91cc\u6267\u884c\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u5b9e\u4e3b\u8981\u5c31\u662f",(0,s.jsx)(n.code,{children:"draw"}),"\uff0c\u76d1\u542c",(0,s.jsx)(n.code,{children:"drawAction"}),"\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u66f4\u65b0",(0,s.jsx)(n.code,{children:"_updatePolylines"}),"\u54af\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'_startSketch() {\n  this._drawActive = !0;\n  const e = this._draw.create("polyline", { mode: "click" });\n  e.on(\n    [\n      "vertex-add",\n      "vertex-update",\n      "vertex-remove",\n      "cursor-update",\n      "undo",\n      "redo",\n    ],\n    (e) => this._updateSketch(e.vertices)\n  ),\n    e.on("draw-complete", () => {\n      this._stopSketch();\n    });\n}\n\n  _updatePolylines() {\n    if (this._vertices.length < 2)\n      return void this._measurementLayer.removeAll();\n\n    // \u83b7\u53d6\u6240\u6709\u9876\u70b9\u7684\u5750\u6807\n    const e = this._vertices.map(({ coord: e }) => e)\n    // \u4f7f\u7528 O \u51fd\u6570\u6d4b\u91cf\u6298\u7ebf\uff0c\u5f97\u5230\u6d4b\u91cf\u7ed3\u679c\u3001\u7ed8\u56fe\u51e0\u4f55\u548c\u539f\u59cb\u6298\u7ebf\n    const {\n        measurement: o,\n        drawing: a,\n        original: n,\n      } = O(e, this.view.spatialReference, this.geodesicDistanceThreshold);\n    this._set("measurement", o);\n    const l = H(this.messages, o, this.unit);\n    let m, c;\n    this._set("measurementLabel", l);\n    const { graphics: h } = this._measurementLayer,\n      p = 2 === h.length,\n      { effectiveTheme: u } = this.view;\n      \n    // \u5982\u679c\u5df2\u6709\u4e24\u4e2a\u56fe\u5f62\uff0c\u5206\u522b\u8bbe\u7f6e m \u548c c\n    // \u5426\u5219\uff0c\u521b\u5efa\u65b0\u7684\u6298\u7ebf\u548c\u6807\u7b7e\u56fe\u5f62\n    p\n      ? ((m = h.at(0)), (c = h.at(1)))\n      : ((m = new t({\n          symbol: new D({\n            data: {\n              type: "CIMSymbolReference",\n              symbol: {\n                type: "CIMLineSymbol",\n                symbolLayers: [\n                  {\n                    type: "CIMSolidStroke",\n                    effects: [\n                      {\n                        type: "CIMGeometricEffectDashes",\n                        dashTemplate: [14, 12],\n                        lineDashEnding: "FullGap",\n                        controlPointEnding: "NoConstraint",\n                      },\n                    ],\n                    enable: !0,\n                    capStyle: "Butt",\n                    joinStyle: "Round",\n                    width: 3.5,\n                    color: r(u.accentColor).toArray(),\n                  },\n                  {\n                    type: "CIMSolidStroke",\n                    enable: !0,\n                    capStyle: "Butt",\n                    joinStyle: "Round",\n                    width: 5,\n                    color: u.accentColor.toArray(),\n                  },\n                ],\n              },\n            },\n          }),\n        })),\n        (c = new t({\n          symbol: new G({\n            color: u.textColor,\n            haloColor: s(r(u.textColor, i.Low), 0.5),\n            haloSize: 2,\n            font: new R({ size: 14, family: "sans-serif" }),\n          }),\n        })),\n        h.removeAll(),\n        h.addMany([m, c])),\n      (m.geometry = a),\n      (c.geometry = n.extent?.center),\n      (c.symbol.text = l);\n  }\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u601d\u8def-1",children:"\u601d\u8def"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u6765\u6211\u60f3\u76d1\u542c\u4e00\u4e0b\u5b83\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a\u56fe\u5c42\u7528\u6765\u8bb0\u5f55\u5206\u6bb5\u957f\u5ea6\u503c\u3002",(0,s.jsx)(n.br,{}),"\n","\u4f46\u662f\u53d1\u73b0\u597d\u50cf\u4e0d\u53ef\u884c\u3002\n\u90a3\u5c31\u76f4\u63a5\u53bb\u4fee\u6539\u6e90\u7801\u597d\u4e86\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u73b0-1",children:"\u5b9e\u73b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u76d1\u542c",(0,s.jsx)(n.code,{children:"viewModel.activeViewModel.tool"}),"\u7684\u53d8\u5316\uff0c\u5f53\u5b83\u88ab\u521b\u5efa\u540e\uff0c\u76f4\u63a5\u66ff\u6362\u5b83\u539f\u6765\u7684",(0,s.jsx)(n.code,{children:"_updatePolylines"}),"\u65b9\u6cd5\u54af\uff0c\u52a0\u4e0a\u6211\u81ea\u5df1\u8981\u52a0\u7684\u4ee3\u7801\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"addSegmentLength"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53ea\u4fdd\u7559 ",(0,s.jsx)(n.code,{children:"_measurementLayer"}),"\u4e2d\u524d\u4e24\u4e2a",(0,s.jsx)(n.code,{children:"graphics"}),",\u5176\u5b83\u90fd\u5220\u6389\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u904d\u5386 ",(0,s.jsx)(n.code,{children:"vertices"})," ,\u4e24\u4e24\u7b97\u7ebf\u6bb5\u957f\u5ea6\uff0c\u6dfb\u52a0\u5230 ",(0,s.jsx)(n.code,{children:"_measurementLayer"}),"\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"(\u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6\u7684\u7528\u7684\u662f\u6e90\u7801\u91cc\u7684\u65b9\u6cd5\uff0c\u6211\u7ed9\u6539\u4e86\u4e00\u4e0b\u800c\u5df2\u3002)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\ninitMeasure() {\n    this.showResultLayer();\n    if (!this.measure) {\n        this.measure = new Measurement({\n            view: this.view,\n            container: this.container,\n            // areaUnit: 'square-kilometers',\n            // linearUnit: 'kilometers',\n            areaUnit: 'square-meters',\n            linearUnit: 'meters',\n        });\n\n        const handler = this.measure.watch('viewModel.state', (newValue, oldValue, propertyName, target) => {\n            if (newValue == 'measured') {\n                const graphics = target.viewModel.activeViewModel.tool._measurementLayer.graphics;\n                this.saveGraphicToResultLayer(graphics);\n            }\n        });\n        this.measure.addHandles(handler);\n\n        const _self = this;\n        const handler2 = this.measure.watch('viewModel.activeViewModel.tool', (newValue, oldValue, propertyName, target) => {\n            if (newValue) {\n                const _updatePolylines = this.measure.viewModel.activeViewModel.tool._updatePolylines;\n                this.measure.viewModel.activeViewModel.tool._updatePolylines = function () {\n                    _updatePolylines.call(this);\n                    _self.addSegmentLength.call(this);\n                };\n            }\n        });\n        this.measure.addHandles(handler2);\n        // window.ahaM = this.measure;\n    }\n}\n\n/**\n * Monkey patching\n */\nasync addSegmentLength() {\n    const {graphics : h2} = this._measurementLayer;\n    // \u5982\u679c\u56fe\u5f62\u6570\u91cf\u8d85\u8fc7 2\n    if (h2?.length > 2) {\n        const firstTwoGraphics = [];\n        firstTwoGraphics.push(h2[0].clone());\n        firstTwoGraphics.push(h2[1].clone());\n        this._measurementLayer.removeAll();\n        this._measurementLayer.addMany(firstTwoGraphics);\n    }\n\n    const _vertices = this._vertices;\n    if (!_vertices || _vertices.length < 3) {\n        return;\n    }\n    const spatialReference = this.view.spatialReference;\n    const geodesicDistanceThreshold = this.geodesicDistanceThreshold;\n    const c2 = h2.at(1);\n    const symbol = c2.symbol;\n    symbol.font.size = 10;\n    for (let i = 1; i < _vertices.length; i++) {\n        const verticesTwo = [_vertices[i - 1], _vertices[i]];\n        const tmp = verticesTwo.map(({ coord: e }) => e);\n        const {\n            measurement: o2,\n            drawing: a2,\n            original: n2,\n        } = await O2(tmp, spatialReference, geodesicDistanceThreshold);\n        \n        const l2 = o2.length.toFixed(2) + ' m';\n        const c3 = new Graphic({\n            symbol: symbol.clone(),\n        });\n\n        c3.geometry = n2.extent?.center;\n        c3.symbol.text = l2;\n        h2.add(c3);\n    }\n}\n\n// \u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6\nasync function O2(vertices, spatialReference, r) {\n    const U = 1e5;\n    const line = new Polyline({ paths: [vertices], spatialReference: spatialReference });\n    let length, geom;\n    await projection.load();\n    if (spatialReference.isGeographic) {\n        const e = projection.project(line, SpatialReference.WGS84);\n        const r = geodesicUtils.geodesicDensify(e, U);\n\n        length = geodesicUtils.geodesicLengths([e], 'meters')[0];\n        geom = projection.project(r, spatialReference);\n    } else if (spatialReference.isWebMercator) {\n        length = geometryEngine.geodesicLength(line, 'meters');\n        geom = geometryEngine.geodesicDensify(line, U, 'meters');\n    } else {\n        const e = geometryEngine.planarLength(line, 'meters');\n        if (null != r && e >= r) {\n            const e = projection.project(line, SpatialReference.WGS84);\n            const r = geodesicUtils.geodesicDensify(e, U);\n\n            length = geodesicUtils.geodesicLengths([e], 'meters')[0];\n            geom = projection.project(r, spatialReference);\n        } else {\n            length = e;\n            geom = line;\n        }\n    }\n    return {\n        measurement: { geometry: geom, length },\n        original: line,\n        drawing: geom,\n    };\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8865\u5145\u77e5\u8bc6",children:"\u8865\u5145\u77e5\u8bc6"}),"\n",(0,s.jsx)(n.h4,{id:"\u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6",children:"\u8ba1\u7b97\u7ebf\u6bb5\u957f\u5ea6"}),"\n",(0,s.jsxs)(n.p,{children:["api\u91cc\u8ba1\u7b97\u957f\u5ea6\u63d0\u4f9b\u7684\u65b9\u6cd5\uff0c\u53ea\u9002\u7528\u4e8e",(0,s.jsx)(n.strong,{children:"wgs84"}),"\u548c",(0,s.jsx)(n.strong,{children:"\u58a8\u5361\u6258\u6295\u5f71"}),"\u3002",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\uff0c\u5982\u679c\u662f\u522b\u7684\u5750\u6807\u7cfb\uff0c\u5c31\u9700\u8981\u7528\u5148\u8f6c\u5230",(0,s.jsx)(n.strong,{children:"wgs84/\u58a8\u5361\u6258"}),"\uff0c\u8ba1\u7b97\u5b8c\u957f\u5ea6\uff0c\u518d\u8f6c\u56de\u6765\u3002"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6e90\u7801",children:"\u76f8\u5173\u6e90\u7801"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3746).A+"",children:"DistanceMeasurement2DTool"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3746:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/DistanceMeasurement2DTool-fbac63d84a86506e15346fe60158ccdf.js"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);