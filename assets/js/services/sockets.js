angular.module("dsm.services.sockets", [
	"btford.socket-io",
])



.factory('gatewaySocket', ["socketFactory", function (socketFactory) {
	var gatewaySocket = socketFactory({
		ioSocket: io.connect(dscGatewayUrl)
	});

	var auth = {key: "123"};

	gatewaySocket.api = {
		setNewTarget: function(line){
			gatewaySocket.emit("setLine", {
				method: "newTarget",
				line: line,
				data: {
					auth: auth,
				},
			});
		},
		setPart: function(line, partId){
			gatewaySocket.emit("setLine", {
				method: "setPart",
				line: line,
				data: {
					auth: auth,
					partId: partId,
				},
			});
		},
		// setSelectedSerie: function(line, index){
		// 	socket.emit("setSelectedSerie", {
		// 		auth: auth,
		// 		index: index,
		// 	})
		// },
		// setSelectedShot: function(line, index){
		// 	socket.emit("setSelectedShot", {
		// 		auth: auth,
		// 		index: index,
		// 	})
		// },
		setUser: function(line, user){
			gatewaySocket.emit("setLine", {
				method: "setUser",
				line: line,
				data: {
					auth: auth,
					user: user,
				},
			});
		},
		setDisziplin: function(line, disziplin){
			gatewaySocket.emit("setLine", {
				method: "setDisziplin",
				line: line,
				data: {
					auth: auth,
					disziplin: disziplin,
				},
			});
		},
		print: function(line){
			gatewaySocket.emit("setLine", {
				method: "print",
				line: line,
				data: {
					auth: auth,
				},
			});
		},
		getTempToken: function(line){
			gatewaySocket.emit("setLine", {
				method: "getTempToken",
				line: line,
				data: {
					auth: auth,
				},
			});
		},
		showMessage: function(line, type, title){
			gatewaySocket.emit("setLine", {
				method: "showMessage",
				line: line,
				data: {
					auth: auth,
					type: type,
					title: title,
				},
			});
		},
		hideMessage: function(line){
			gatewaySocket.emit("setLine", {
				method: "hideMessage",
				line: line,
				data: {
					auth: auth,
				},
			});
		},
		setPower: function(line, on){
			gatewaySocket.emit("setPower", {
				state: on,
				line: line,
			});
		},
		getSession: function(line){
			gatewaySocket.emit("setLine", {
				method: "getSession",
				line: line,
				data: {
					auth: auth,
				},
			});
		},
		sendSessions: function(line, sessions, group, user){
			gatewaySocket.emit("setLine", {
				method: "sendSessions",
				line: line,
				data: {
					auth: auth,
					sessions: sessions,
					group: group,
					user: user,
				},
			});
		},
	};

	return gatewaySocket;
}]);
