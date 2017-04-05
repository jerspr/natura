var obj = {
	init: function(){
		if($("#filterS").length>0){
			obj.filterSearch();
		}
        if($("#tableCN").length>0){
            obj.nTable();
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
	},
    nTable: function(){
        $('.collapse').on('show.bs.collapse', function () {
            $('.collapse.in').collapse('hide');
        });
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    },
    nDonut: function(){
        /*new Chartist.Pie('.ct-chart', {
            labels: ['Piece A', 'Piece B', 'Piece C', 'Piece D'],
            series: [75, 5, 8, 15]
        }, {
            height: '200px',
            donut: true,
            donutWidth: 30,
            startAngle: 270,
            total: 100,
            showLabel: true,
            labelInterpolationFnc: function(value) {
                return value + '%';
            },
            plugins: [
                Chartist.plugins.legend()
            ]
        });*/
        
    }
};
(function() {
  	obj.init();
})();