var disclaimer_opened = false;
var MAX_METRICS = 10;
var MAX_DIMENSIONS = 7;
var metrics_count = 0;
var dimensions_count = 0;

$(document).ready(
    function() {
	$(".options li").draggable(
	    {
		revert: 'invalid',
		containment: $(".contained"),
		helper: 'clone',
		opacity: 0.7,
		cursor: 'move'
	    }
	);

	$(".config ul.dimensions").droppable(
	    {
		accept: ".options ul.dimensions li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    dimensions_count++;
		    addOption(ui.draggable, $(this), $('input[name="dimensions"]'));
		}
	    }
	);

	$(".options ul.dimensions").droppable(
	    {
		accept: ".config ul.dimensions li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    dimensions_count--;
		    removeOption(ui.draggable, $(this), $('input[name="dimensions"]'));
		}
	    }
	);

	$(".config ul.metrics").droppable(
	    {
		accept: ".options ul.metrics li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    metrics_count++;
		    addOption(ui.draggable, $(this), $('input[name="metrics"]'));
		}
	    }
	);

	$(".options ul.metrics").droppable(
	    {
		accept: ".config ul.metrics li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    metrics_count--;
		    removeOption(ui.draggable, $(this), $('input[name="metrics"]'));
		}
	    }
	);

	$(".accordion").accordion(
	    {
		collapsible: true,
		icons: {
    		    header: "expand",
   		    headerSelected: "collapse"
		}
	    }
	);

	$(".collection").accordion(
	    {
		collapsible: true,
		icons: {
    		    header: "expand",
   		    headerSelected: "collapse"
		}
	    }
	);

	$("#open_disclaimer").click(
	    function(e) {
		e.preventDefault();
		if (!disclaimer_opened) {
		    $('#disclaimer').dialog(
			{
			    draggable: false,
			    width: 600
			}
		    );
		    disclaimer_opened = true;
		} else {
		    $('#disclaimer').dialog('open');
		}
	    }
	);

	$('input[type="submit"]').click(
	    function(e) {
		return validate_form();
	    }
	);

	update_counts();
    }
);

function addOption($item, $where, $input) {
    var parent = $item.parent();
    $item.fadeOut(
	function() {
	    removeSingle($where);

	    $item.appendTo($where).fadeIn();
	    $item.css({position:'static'});

	    var input_val = $input.val();
	    $input.val($input.val() + ((input_val.length > 0)?',':'') + $item.text());

	    addSingle(parent);
	}
    );
    update_counts();
};

function removeOption($item, $where, $input) {
    var parent = $item.parent();
    $item.fadeOut(
	function() {
	    removeSingle($where);

	    $item.appendTo($where).fadeIn();
	    $item.css({position:'static'});
	    var re = new RegExp(','+$item.text()+'|'+$item.text());
	    var new_val = $input.val().replace(re, '');
	    if (new_val.indexOf(',') == 0) {
		new_val = new_val.replace(/,/,'');
	    }
	    $input.val(new_val);

	    addSingle(parent);
	}
    );
    update_counts();
};

function removeSingle($where) {
    $where.find('li.none').remove();
}

function addSingle(parent) {
    if (parent.children().length == 0) {
	parent.append('<li class="none">Nothing In List</li>');
    }
}

function validate_form() {
    //$('form[name="gadata"]')
    return true;
}

function update_counts() {
    $("#dimensions_count").text(dimensions_count);
    $("#metrics_count").text(metrics_count);
}