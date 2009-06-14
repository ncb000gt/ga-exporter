var disclaimer_opened = false;

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
		    addOption(ui.draggable, $(this), $('input[name="dimensions"]'));
		}
	    }
	);

	$(".options ul.dimensions").droppable(
	    {
		accept: ".config ul.dimensions li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    removeOption(ui.draggable, $(this), $('input[name="dimensions"]'));
		}
	    }
	);

	$(".config ul.metrics").droppable(
	    {
		accept: ".options ul.metrics li",
		activeClass: "highlight",
		drop: function(ev, ui) {
		    addOption(ui.draggable, $(this), $('input[name="metrics"]'));
		}
	    }
	);

	$(".options ul.metrics").droppable(
	    {
		accept: ".config ul.metrics li",
		activeClass: "highlight",
		drop: function(ev, ui) {
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
};

function removeSingle($where) {
    $where.find('li.none').remove();
}

function addSingle(parent) {
    if (parent.children().length == 0) {
	parent.append('<li class="none">Nothing In List</li>');
    }
}