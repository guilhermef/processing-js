var tests = [
  { path: "pimage-get.pde", tags: ["2D", "Color Profile"] },
  { path: "pimage-fromImageData.pde", tags: ["2D"] },
  { path: "smooth.pde", tags: ["2D"], epsilonOverride: 0.18 },
  { path: "crispy.pde", tags: ["2D", "Crisp"] },
  { path: "crisp-point.pde", tags: ["2D", "Crisp"] },
  { path: "crisp-line.pde", tags: ["2D", "Crisp"] },
  { path: "crisp-rect.pde", tags: ["2D", "Crisp"], epsilonOverride: 0.08 },
  { path: "crisp-diagonal-lines.pde", tags: ["2D", "Crisp"], epsilonOverride: 0.08 },
  { path: "crisp-horizontal-lines.pde", tags: ["2D", "Crisp"] },
  { path: "crisp-vertical-lines.pde", tags: ["2D", "Crisp"] },
  { path: "mega-rect.pde", tags: ["2D", "Crisp"] },
  { path: "rounded-rect.pde", tags: ["2D", "Crisp"] },
  { path: "blend-add.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-blend.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-burn.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-darkest.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-difference.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-dodge.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-exclusion.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-hard_light.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-lightest.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-multiply.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-overlay.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-screen.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-soft_light.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "blend-subtract.pde", tags: ["2D","BLEND", "Color Profile"] },
  { path: "additive-wave.pde", tags: ["2D", "Test Suite"] },
  { path: "array-objects.pde", tags: ["2D", "Test Suite"] },
  { path: "bezier2.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.14 },
  { path: "bounce.pde", tags: ["2D", "Test Suite"] },
  { path: "bouncy-bubbles.pde", tags: ["2D", "Test Suite"] },
  { path: "brownian.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.07 },
  { path: "circle-collision.pde", tags: ["2D", "Test Suite"] },
  { path: "color-wheel.pde", tags: ["2D", "Test Suite"] },
  { path: "composite-objects.pde", tags: ["2D", "Test Suite"] },
  { path: "conway.pde", tags: ["2D", "Test Suite"] },
  { path: "double-random.pde", tags: ["2D", "Test Suite"] },
  { path: "flocking.pde", tags: ["2D", "Test Suite"] },
  { path: "increment-or-decrement.pde", tags: ["2D", "Test Suite"] },
  { path: "integers-and-floats.pde", tags: ["2D", "Test Suite"] },
  { path: "inheritence.pde", tags: ["2D", "Test Suite"] },
  { path: "koch.pde", tags: ["2D", "Test Suite"] },
  { path: "linear.pde", tags: ["2D", "Test Suite"] },
  { path: "linear-image.pde", tags: ["2D", "Test Suite"] },
  { path: "milliseconds.pde", tags: ["2D", "Test Suite"] },
  { path: "moving-on-curves.pde", tags: ["2D", "Test Suite"] },
  { path: "noise-wave.pde", tags: ["2D", "Test Suite"] },
  { path: "noise1d.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.10 },
  { path: "noise2d.pde", tags: ["2D", "Test Suite"] },
  { path: "noise3d.pde", tags: ["2D", "Test Suite"] },
  { path: "operator-precedence.pde", tags: ["2D", "Test Suite"] },
  { path: "pointillism.pde", tags: ["2D", "Test Suite"] },
  { path: "polar-to-cartesian.pde", tags: ["2D", "Test Suite"] },
  { path: "puff.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.07 },
  { path: "random.pde", tags: ["2D", "Test Suite"] },
  { path: "reflection1.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.08 },
  { path: "reflection2.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.07 },
  { path: "rotate.pde", tags: ["2D", "Test Suite"] },
  { path: "scale.pde", tags: ["2D", "Test Suite"] },
  { path: "sequential.pde", tags: ["2D", "Test Suite"] },
  { path: "scribble-plotter.pde", tags: ["2D", "Test Suite"], epsilonOverride: 0.08 },
  { path: "simple-particle-system.pde", tags: ["2D", "Test Suite"] },
  { path: "sine-and-cosine.pde", tags: ["2D", "Test Suite"] },
  { path: "sine.pde", tags: ["2D", "Test Suite"] },
  { path: "spore1.pde", tags: ["2D", "Test Suite"] },
  { path: "translate.pde", tags: ["2D", "Test Suite"] },
  { path: "vertices.pde", tags: ["2D", "Test Suite"] },
  { path: "wolfram.pde", tags: ["2D", "Test Suite"] },
  { path: "loadShape.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape2.pde", tags: ["2D","SVG"], epsilonOverride: 0.08 },
  { path: "loadShape3.pde", tags: ["2D","SVG"], epsilonOverride: 0.07 },
  { path: "loadShape4.pde", tags: ["2D","SVG"] },
  { path: "loadShape5.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape6.pde", tags: ["2D","SVG"], knownFailureTicket: "1401" },
  { path: "loadShape7.pde", tags: ["2D","SVG", "Crisp"] },
  { path: "loadShape9.pde", tags: ["2D","SVG"], epsilonOverride: 0.21 },
  { path: "loadShape10.pde", tags: ["2D","SVG"], epsilonOverride: 0.12 },
  { path: "loadShape11.pde", tags: ["2D","SVG"], epsilonOverride: 0.14 },
  { path: "loadShape16.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape17.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape12.pde", tags: ["2D","SVG"] },
  { path: "loadShape13.pde", tags: ["2D","SVG"] },
  { path: "loadShape14.pde", tags: ["2D","SVG", "Crisp"] },
  { path: "loadShape15.pde", tags: ["2D","SVG"] },
  { path: "blur.pde", tags: ["2D","Convolution"] },
  { path: "edgedetect.pde", tags: ["2D","Convolution"], knownFailureTicket: "1399" },
  { path: "defaults-background_and_size.pde", tags: ["2D"] },
  { path: "background-gray.pde", tags: ["2D"] },
  { path: "background-gray-alpha.pde", tags: ["2D"] },
  { path: "background-3-arg.pde", tags: ["2D"] },
  { path: "background-3-arg-alpha.pde", tags: ["2D"] },
  { path: "background-color.pde", tags: ["2D"] },
  { path: "background-color-alpha.pde", tags: ["2D"] },
  { path: "background-hex.pde", tags: ["2D"] },
  { path: "background-hex2.pde", tags: ["2D"] },
  { path: "background-hex-alpha.pde", tags: ["2D"] },
  { path: "background-image.pde", tags: ["2D"] },
  { path: "background-before-size.pde", tags: ["2D"] },
  { path: "background-transparency.pde", tags: ["2D"] },
  { path: "background-color-1arg-2d.pde", tags: ["2D"] },
  { path: "background-color-1arg-alpha-2d.pde", tags: ["2D"] },
  { path: "background-hex-3RGB-alpha.pde", tags: ["2D"], knownFailureTicket: "1346" },
  { path: "background-gray-3d.pde", tags: ["3D"] },
  { path: "background-gray-alpha-3d.pde", tags: ["3D"] },
  { path: "background-3-arg-3d.pde", tags: ["3D"] },
  { path: "background-3-arg-alpha-3d.pde", tags: ["3D"] },
  { path: "background-color-3d.pde", tags: ["3D"] },
  { path: "background-color-alpha-3d.pde", tags: ["3D"] },
  { path: "background-hex-3d.pde", tags: ["3D"] },
  { path: "background-hex2-3d.pde", tags: ["3D"] },
  { path: "background-hex-alpha-3d.pde", tags: ["3D"] },
  { path: "background-color-1arg-3d.pde", tags: ["3D"] },
  { path: "background-color-1arg-alpha-3d.pde", tags: ["3D"] },
  { path: "background-hex-3RGB-alpha-3d.pde", tags: ["3D"], knownFailureTicket: "1346" },
  { path: "background-image-3d.pde", tags: ["3D"], knownFailureTicket: "1323" },
  { path: "circles.pde", tags: ["2D"] },
  { path: "circles2.pde", tags: ["2D"] },
  { path: "conditionals1.pde", tags: ["2D", "Crisp"] },
  { path: "conditionals2.pde", tags: ["2D", "Crisp"] },
  { path: "datatype-conversion.pde", tags: ["2D", "Crisp"] },
  { path: "distance-2d.pde", tags: ["2D"] },
  { path: "embedded-iteration.pde", tags: ["2D", "Crisp"] },
  { path: "iteration.pde", tags: ["2D", "Crisp"] },
  { path: "logical-operators.pde", tags: ["2D", "Crisp"] },
  { path: "point-line-rect.pde", tags: ["2D", "Crisp"] },
  { path: "sine-wave.pde", tags: ["2D"] },
  { path: "target.pde", tags: ["2D"] },
  { path: "triangle-strip.pde", tags: ["2D"], epsilonOverride: 0.08 },
  { path: "true-false.pde", tags: ["2D", "Crisp"] },
  { path: "variable-scope.pde", tags: ["2D", "Crisp"] },
  { path: "variables.pde", tags: ["2D", "Crisp"], epsilonOverride: 0.06 },
  { path: "string-codepointat.pde", tags: ["2D", "Text"], epsilonOverride: 0.20 },
  { path: "string-equalsignorecase.pde", tags: ["2D", "Text"], epsilonOverride: 0.20 },
  { path: "text-pushpopstyle.pde", tags: ["2D", "Text"], epsilonOverride: 0.35 }, /* See ticket #1172 */
  { path: "text-width.pde", tags:["2D", "Text"], epsilonOverride: 0.20, knownFailureTicket: "1604" }, /* See ticket #1172 */
  { path: "text-boxed-left-top.pde", tags:["2D", "Text"], epsilonOverride: 0.19 }, /* See ticket #1172 */
  { path: "text-boxed-left-center.pde", tags:["2D", "Text"], epsilonOverride: 0.19 }, /* See ticket #1172 */
  { path: "text-boxed-left-bottom.pde", tags:["2D", "Text"], epsilonOverride: 0.19 }, /* See ticket #1172 */
  { path: "text-boxed-center-top.pde", tags:["2D", "Text"], epsilonOverride: 0.17 }, /* See ticket #1172 */
  { path: "text-boxed-center-center.pde", tags:["2D", "Text"], epsilonOverride: 0.17 }, /* See ticket #1172 */
  { path: "text-boxed-center-bottom.pde", tags:["2D", "Text"], epsilonOverride: 0.17 }, /* See ticket #1172 */
  { path: "text-boxed-right-top.pde", tags:["2D", "Text"], epsilonOverride: 0.21 }, /* See ticket #1172 */
  { path: "text-boxed-right-center.pde", tags:["2D", "Text"], epsilonOverride: 0.21 }, /* See ticket #1172 */
  { path: "text-boxed-right-bottom.pde", tags:["2D", "Text"], epsilonOverride: 0.21 }, /* See ticket #1172 */
  { path: "text-defaults.pde", tags: ["2D", "Text"], epsilonOverride: 0.10 }, /* See ticket #1172 */
  { path: "text-ascent-descent.pde", tags: ["2D", "Text", "Crisp"], epsilonOverride: 0.09 }, /* See ticket #1172 */
  { path: "text-size-recache.pde", tags: ["2D", "Text"], epsilonOverride: 0.11 }, /* See ticket #1172 */
  { path: "text-align.pde", tags: ["2D", "Text"], epsilonOverride: 0.14 }, /* See ticket #1172 */
  { path: "text-leading.pde", tags: ["2D", "Text"], epsilonOverride: 0.22 }, /* See ticket #1172 */
  { path: "text-font-fromfile.pde", tags: ["2D", "Text"], epsilonOverride: 0.22 }, /* See ticket #1172 */
  { path: "text-font-fromfile.pde", tags: ["2D", "Text"], epsilonOverride: 0.22 }, /* repeated, to test reuse of font-face loaded fonts*/
  { path: "text-valign-BOTTOM.pde", tags: ["2D", "Text"], epsilonOverride: 0.11 }, /* See ticket #1172 */
  { path: "text-valign-BOTTOM-m.pde", tags: ["2D", "Text"], epsilonOverride: 0.13 }, /* See ticket #1172 */
  { path: "text-valign-BASELINE.pde", tags: ["2D", "Text"], epsilonOverride: 0.17 }, /* See ticket #1172 */
  { path: "text-valign-BASELINE-m.pde", tags: ["2D", "Text"], epsilonOverride: 0.17 }, /* See ticket #1172 */
  { path: "text-valign-CENTER.pde", tags: ["2D", "Text"], epsilonOverride: 0.14 }, /* See ticket #1172 */
  { path: "text-valign-CENTER-m.pde", tags: ["2D", "Text"], epsilonOverride: 0.09 }, /* See ticket #1172 */
  { path: "text-valign-TOP.pde", tags: ["2D", "Text"], epsilonOverride: 0.11 }, /* See ticket #1172 */
  { path: "text-valign-TOP-m.pde", tags: ["2D", "Text"], epsilonOverride: 0.11 }, /* See ticket #1172 */
  { path: "text-pfont.pde", tags: ["2D", "Text"], epsilonOverride: 0.30 }, /* See ticket #1172 */
  { path: "letters.pde", tags: ["2D", "Text"], epsilonOverride: 0.45 }, /* See ticket #1172 */
  { path: "words.pde", tags: ["2D", "Text"], epsilonOverride: 0.25 }, /* See ticket #1172 */
  { path: "text-pushpopstyle.pde", tags: ["2D", "Text"], epsilonOverride: 0.35 }, /* See ticket #1172 */
  { path: "svg_font_biotyp.pde", tags: ["2D", "Text"] },
  { path: "box-rotating.pde", tags: ["3D"], epsilonOverride: 0.10 },
  { path: "translate-rect.pde", tags: ["2D", "Crisp"] },
  { path: "arc-tangent.pde",  tags: ["2D"] },
  { path: "arc_ref1.pde",  tags: ["2D", "Crisp"], epsilonOverride: 0.10 },
  { path: "arc_ref2.pde",  tags: ["2D", "Crisp"], epsilonOverride: 0.13 },
  { path: "arc_ref3.pde",  tags: ["2D", "Crisp"], epsilonOverride: 0.11 },
  { path: "bezier.pde", tags: ["2D"], epsilonOverride: 0.08 },
  { path: "ellipse.pde", tags: ["2D"] },
  { path: "ellipse-mode.pde", tags: ["2D"], epsilonOverride: 0.10 },
  { path: "piechart.pde", tags: ["2D"] },
  { path: "point-stroke-array-2d.pde", tags: ["2D", "Crisp"] },
  { path: "bezier-ellipse.pde", tags: ["2D", "Crisp"], epsilonOverride: 0.06 },
  { path: "curves.pde", tags: ["2D"], epsilonOverride: 0.07 },
  { path: "curve.pde", tags: ["2D"], epsilonOverride: 0.09 },
  { path: "curveDetail.pde", tags: ["3D"], knownFailureTicket: "1416" },
  { path: "curvePoint.pde", tags: ["2D"], knownFailureTicket: "1417" },
  { path: "curveTangent.pde", tags: ["2D"], knownFailureTicket: "1417" },
  { path: "curveTightness.pde", tags: ["2D"], epsilonOverride: 0.11 },
  { path: "continuous-curve.pde", tags: ["2D"], epsilonOverride: 0.09 },
  { path: "points-lines.pde", tags: ["2D", "Crisp"] },
  { path: "rect-quad.pde", tags: ["2D"] },
  { path: "size-fill-rect.pde", tags: ["2D"] },
  { path: "triangle.pde", tags: ["2D"] },
  { path: "3d-arc-4-combo.pde", tags: ["3D"], epsilonOverride: 0.13 },
  { path: "line-3d.pde", tags: ["3D"], epsilonOverride: 0.08 },
  { path: "3D_frustum.pde", tags: ["3D"], knownFailureTicket: "1513" },
  { path: "3D_beginendcam.pde", tags: ["3D"], epsilonOverride: 0.09 },
  { path: "3D_perspective.pde", tags: ["3D"], epsilonOverride: 0.11 },
  { path: "3D_ortho.pde", tags: ["3D"], knownFailureTicket: "1200" },
  { path: "point_3D_stroke.pde", tags: ["3D"] },
  { path: "point_3D_strokeWeight.pde", tags: ["3D"], epsilonOverride: 0.22 },
  { path: "point_3D_z.pde", tags: ["3D"], epsilonOverride: 0.14 },
  { path: "point_3D_noz.pde", tags: ["3D"], epsilonOverride: 0.14 },
  { path: "box.pde", tags: ["3D"], epsilonOverride: 0.18 },
  { path: "box_scale_3D.pde", tags: ["3D"], epsilonOverride: 0.18 },
  { path: "ambientLight_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_2.pde", tags: ["3D"], epsilonOverride: 0.10 },
  { path: "ambient_p5test.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_1.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_2.pde", tags: ["3D"] },
  { path: "directionalLight_scale.pde", tags: ["3D"] },
  { path: "emissive_p5test.pde", tags: ["3D"] },
  { path: "lightSpecular_p5test.pde", tags: ["3D"], epsilonOverride: 0.07 },
  { path: "pointLight_p5test.pde", tags: ["3D"] },
  { path: "shininess_p5test.pde", tags: ["3D"] },
  { path: "specular_p5test.pde", tags: ["3D"]},
  { path: "spotLight_p5test.pde", tags: ["3D"], knownFailureTicket: "1239" }, /* See ticket #1202 */
  { path: "3d-ellipse-fill-noFill-stoke-noStroke.pde", tags: ["3D"], epsilonOverride: 0.15 },
  { path: "createGraphics.pde", tags: ["3D"], epsilonOverride: 0.07 }, /* See ticket #1075 */
  { path: "rect-directional-light.pde", tags: ["3D"] },
  { path: "createimage.pde", tags: ["2D"] },
  { path: "array.pde", tags: ["2D", "Crisp"] },
  { path: "brightness-2.pde", tags: ["2D"] },
  { path: "create-image.pde", tags: ["2D"] },
  { path: "creating.pde", tags: ["2D"] },
  { path: "displaying.pde", tags: ["2D"], epsilonOverride: 0.07 },
  { path: "graphing-2d.pde", tags: ["2D"] },
  { path: "histogram.pde", tags: ["2D", "Crisp"] },
  { path: "linear-gradient.pde", tags: ["2D"] },
  { path: "mandelbrot.pde", tags: ["2D"] },
  { path: "modulo.pde", tags: ["2D", "Crisp"] },
  { path: "multiple-constructors.pde", tags: ["2D"], epsilonOverride: 0.06 },
  { path: "neighborhood.pde", tags: ["2D", "Crisp"], epsilonOverride: 0.09 },
  { path: "no-loop.pde", tags: ["2D", "Crisp"] },
  { path: "reading.pde", tags: ["2D"] },
  { path: "relativity.pde", tags: ["2D"] },
  { path: "triangle-flower.pde", tags: ["2D"] },
  { path: "self-1-success.pde", tags: ["Calibration"] },
  { path: "self-2-fail.pde", tags: ["Calibration"] },
  { path: "self-3-fail.pde", tags: ["Calibration"] },
  { path: "self-4-fail.pde", tags: ["Calibration"] },
  { path: "self-5-success.pde", tags: ["Calibration"] },
  { path: "beginEndShape-2dlines.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloseline.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.06  },
  { path: "beginEndShape-2dnoclosetriangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloserectangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofilltriangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofillrectangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dpoints.pde", tags:["endShape2D", "2D"], knownFailureTicket: "1245" },
  { path: "beginEndShape-2dpolygon.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquads.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.10 },
  { path: "beginEndShape-2dtrianglefan1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.14 },
  { path: "beginEndShape-2dtrianglefan2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.17 },
  { path: "beginEndShape-2dtriangles1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtriangles2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtrianglestrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-2dtrianglestrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-3dlines.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dnocloseline.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dnoclosetriangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dnocloserectangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dnofilltriangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dnofillrectangle.pde", tags:["endShape3D", "3D"], knownFailureTicket: "1271" },
  { path: "beginEndShape-3dpoints.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dpolygon.pde", tags:["endShape3D", "3D"], knownFailureTicket: "1286" },
  { path: "beginEndShape-3dquads.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.12, knownFailureTicket: "1271" },
  { path: "beginEndShape-3dquadstrip1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.25 },
  { path: "beginEndShape-3dquadstrip2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtrianglefan1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.27 },
  { path: "beginEndShape-3dtrianglefan2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtriangles1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dtriangles2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dtrianglestrip1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtrianglestrip2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "image-3d.pde", tags: ["3D", "Color Profile"] },
  { path: "blendcolor-add.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-difference.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-lightest.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-soft_light.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-blend.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-dodge.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-multiply.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-subtract.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-burn.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-exclusion.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-overlay.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-darkest.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-hard_light.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "blendcolor-screen.pde", tags: ["2D", "BLEND", "Color Profile"] },
  { path: "pixels-toarray.pde", tags: ["2D"] },
  { path: "tint.pde", tags: ["2D", "Color Profile"] },
  { path: "quad_3D.pde", tags:["3D"], knownFailureTicket: "1271" },
  { path: "textured_box_3D.pde", tags:["3D", "Color Profile"], knownFailureTicket: "1271" },
  { path: "texture_noShape.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_triangles.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_norm.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_ambient.pde", tags: ["3D", "Color Profile"], knownFailureTicket: "1503" },
  { path: "texture_transparent.pde", tags: ["3D", "Color Profile"]  },
  { path: "texture_npot.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_vertex_no_z.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_tint.pde", tags: ["3D", "Color Profile"] },
  { path: "texture_tint_white.pde", tags: ["3D", "Color Profile"] },
  { path: "rotateZ.pde", tags: ["3D"], knownFailureTicket: "1271" }
];
