$( document ).ready(function() {
	var template,data;
	$.getJSON('data.json', function(data) {
		//let data = JSON.stringify(obj);
    for(let i =1;i<=data.length+1;i++){
    	$('#tbody').append(`
    		
                <tr role="row" class="odd" data-id="${data[i-1]["id"]}">
                    <td>${i}</td>
                    <td style=" left: 58px;">
                        <div>${data[i-1]["title"]}</div>
                    </td>
                    <td>${data[i-1]["amount"]}</td>
                    <td>${data[i-1]["price"]}</td>
                </tr>

    		`);
    }
});


});
