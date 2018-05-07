function highlight(node)
{
	node.innerHTML = "<div style='border:1px solid black;'>" + node.innerHTML + '</div>';//"<p>surya<br>bhanu</p>";
}


document.body.style.border = "5px solid red";
var algo_results = document.getElementsByClassName('b_algo');
for(var i =0; i< algo_results.length; i++)
{
	if(algo_results[i] != null)
	{
		
		algo_results[i].innerHTML = "<div>Algo result</div><div style='border:1px solid black;'>" + algo_results[i].innerHTML + '</div>';	
		algo_results[i].addEventListener('mouseover', function(){
			;
			//highlight(algo_results[i]);
		});
	}
}

var answers = document.getElementsByClassName('b_ans');
for(var i =0; i< answers.length; i++)
{
	if(answers[i] != null)
	{
		
		answers[i].innerHTML = "<div>Answer</div><div style='border:1px solid black;'>" + answers[i].innerHTML + '</div>';	
		answers[i].addEventListener('mouseover', function(){
			;
			//highlight(answers[i]);
		});
	}
}

// var aTags = document.getElementsByTagName('a');
// for(var i =0; i< aTags.length; i++)
// {
	// if(aTags[i] != null)
	// {
		
		// aTags[i].innerHTML = "<div style='border:1px solid black;'>a<br/>" + aTags[i].innerHTML + '</div>';	
		// aTags[i].addEventListener('mouseover', function(){
			// ;
			// //highlight(aTags[i]);
		// });
	// }
// }

