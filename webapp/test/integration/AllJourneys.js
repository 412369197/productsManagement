jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"opensap/manageproduts/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"opensap/manageproduts/test/integration/pages/Worklist",
		"opensap/manageproduts/test/integration/pages/Object",
		"opensap/manageproduts/test/integration/pages/NotFound",
		"opensap/manageproduts/test/integration/pages/Browser",
		"opensap/manageproduts/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "opensap.manageproduts.view."
	});

	sap.ui.require([
		"opensap/manageproduts/test/integration/WorklistJourney",
		"opensap/manageproduts/test/integration/ObjectJourney",
		"opensap/manageproduts/test/integration/NavigationJourney",
		"opensap/manageproduts/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});