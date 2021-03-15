$( document ).ready(function() {
	var template,data;
	var max = 0;
	var total_price = 0;
	$.getJSON('data.json', function(data) {
		//let data = JSON.stringify(obj);
    for(var i =1;i<=data.length+1;i++){
	    
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
	    if(data[i-1]["price"]>max){max=data[i-1]["price"]}
	    total_price += data[i-1]["price"];
    }
		document.querySelectorAll(".max_price").html=max;
		document.querySelectorAll(".total_price").html=total_price;
		document.querySelectorAll(".total_items").html=i;
		
});


});
