var scheibe = require("./scheibe.js")

module.exports = {
	_id: "lp_training",
	title: "Training",
	interface: {
		name: "esa",
		band: {
			onChangePart: 5,
			onShot: 3,
		},
	},
	time: {
		enabled: false,
		duration: 0,
		instantStart: false,
	},
	scheibe: scheibe,
	parts: {
		probe: {
			title: "Probe",
			probeEcke: true,
			neueScheibe: true,
			serienLength: 10,
			anzahlShots: 0,
			showInfos: true,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 40,
			},
			exitType: "",
		},
		match: {
			title: "Match",
			probeEcke: false,
			neueScheibe: true,
			serienLength: 10,
			anzahlShots: 0,
			showInfos: true,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 40,
			},
			exitType: "",
		},
	},
}