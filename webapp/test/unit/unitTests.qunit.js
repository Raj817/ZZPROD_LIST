/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Products/ZPROD_WORKLIST/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});