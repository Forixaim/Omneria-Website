var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) 
{
	coll[i].addEventListener("click", function() 
	{
		this.classList.toggle("active");
		var content = document.querySelector('#kek');
		if (content.style.maxHeight) 
		{
			content.style.maxHeight = null;
		} 
		else 
		{
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}