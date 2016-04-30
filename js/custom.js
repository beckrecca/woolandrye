window.onload = function() {
	// Toggle the wares nav menu display
	$("#wares-link").click(function () {
		$("#wares-nav").fadeToggle();
	})

	/** Below we will make sure the correct current
		menu item is highlighted pink. **/
	// Get the current body id
	var bodyId = $("body").attr("id");
	// We're gonna build the relevant link id
	var linkId;

	// If we are at the yarn or the clothing page,
	// we want to highlight the "wares" link
	if (bodyId == "yarn" || bodyId == "clothing") {
		linkId = "wares-link";
	}
	// otherwise just append "-link"
	else linkId = bodyId + "-link";
	// change the color of the highlighted link
	$("#" +linkId).css("color", "#ed0547");
}