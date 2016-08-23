$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];
	var average = 0;
	function determineAverage(scoresArray, maxScore)
	{
	    for(score in scoresArray)
	    {
	       average += ((scoresArray[score]/maxScore)*100)/10;
	    }
	    return Math.round(average); 
	}
	printToPage ("Average result is " +  determineAverage(scores, 55) + "%");
});