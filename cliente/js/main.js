var obj = {
	init: function(){
		if($("#filterS").length>0){
			console.log("dentrando");
			obj.filterSearch();
		}
	},
	filterSearch: function(){
		$('#fCodigo').multiselect({
            includeSelectAllOption: true,
            nonSelectedText: 'Código',
            buttonWidth: '108px'
        });
        $('#cCNO').multiselect({
            includeSelectAllOption: true,
            nonSelectedText: 'Código CNO',
            buttonWidth: '126px'
        });
        $('#cConsultora').multiselect({
            includeSelectAllOption: true,
            nonSelectedText: 'Código Consultora',
            buttonWidth: '178px'
        });
	}
};
(function() {
  	obj.init();
})();