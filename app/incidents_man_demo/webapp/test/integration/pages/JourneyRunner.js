sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nsd/incidentsmandemo/test/integration/pages/IncidentsList",
	"nsd/incidentsmandemo/test/integration/pages/IncidentsObjectPage"
], function (JourneyRunner, IncidentsList, IncidentsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nsd/incidentsmandemo') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsList: IncidentsList,
			onTheIncidentsObjectPage: IncidentsObjectPage
        },
        async: true
    });

    return runner;
});

