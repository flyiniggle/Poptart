Poptart.Account.Monitor = function(){
	var ReturnObj = {};

	ReturnObj.init = function(){
		console.log(Poptart.Account.Monitor.treegridData);
		$("#testTable").igTreeGrid({
			dataSource: Poptart.Account.Monitor.treegridData,
			primaryKey: "pk"
		});
	};

	return ReturnObj;
}();