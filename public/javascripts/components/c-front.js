
//{Content Name, {Promotable?, Owner, Notes}}

var content_types_db = {
'Blog Post': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 1, ''],
		]
},

'Whitepaper': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Webinar', 1, ''],
			['Infographic', 1, ''],
			['PPC Campaign', 1, ''],
			['Presentation (Live)', 1, '']
		]
},

'Webinar (Video)': 
{ 
	'meta': ['Francesca', ''],
},

'Webinar (Slides)': 
{ 
	'meta': ['Francesca', ''],
},

'Webinar (Live)': 
{ 
	'meta': ['Carol', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Webinar (Video)', 1, '']
			['Webinar (Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, '']
		]
},

'Presentation (Video)': 
{ 
	'meta': ['Francesca', ''],
},

'Presentation (Slides)': 
{ 
	'meta': ['Francesca', ''],
},

'Presentation (Live)': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Video)', 1, '']
			['Presentation (Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, '']
		]
},

'PPC Campaign': 
{ 
	'meta': ['Vincent', ''],
},

'10gen.com Page': 
{ 
	'meta': ['Justin', ''],
},

'Facebook Status': 
{ 
	'meta': ['Francesca', ''],
},

'LinkedIn Profile Update': 
{ 
	'meta': ['Francesca', ''],
},

'Newsletter Item': 
{ 
	'meta': ['Francesca', ''],
},

'Email Blast': 
{ 
	'meta': ['Meg', ''],
},

'Touch Track': 
{ 
	'meta': ['Meghan', ''],
},

'Third-Party Post': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 1],
			['LinkedIn Group Update', 1]
		]
},

'Third-Party Tweet': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 1]
		]
},

'Tweet': 
{ 
	'meta': ['Francesca', ''],
},

'Customer Profile': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Live)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, '']
		]
},

'Press Release': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['LinkedIn Group Post', 2, '']
		]
},

'Datasheet': 
{
	'meta': ['Graham', ''],
	'package': 
		[
			['Tweet', 1, ''],
			['Brief Description', 1, '']
		]
},

'Infographic': 
{ 
	'meta': ['Graham', ''],
	'package': 
		[
			['Tweet', 2],
			['Facebook Status Update', 2],
			['LinkedIn Group Post', 2]
		]
},

'Video Snippet': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 1]
		]
},

'MongoDB Day': 
{ 
	'package': 
		[
			['Tweet', 10, ''],
			['Blog Post', 5, ''],
			['Presentation (Slides)', 1, ''],
			['Presentation (Video)', 1, ''],
			['LinkedIn Group Post', 10, ''],
			['Facebook Status', 10, ''],
		]
},

'Brief Description': 
{ 
	'meta': ['Author', ''],
},

'External Event Participation': 
{ 
	'meta': ['Sam Kosko', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Live)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, '']
		]
},

'Sponsored Post': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Presentation (Live)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Tweet', 1]
		]
},

'User Group Meetup': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 1]
		]
},

'Front Page Banner': 
{ 
	'meta': ['Justin', ''],
},

'Partnership Announcement': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Live)', 1, '']
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['Press Release', 1, '']
		]
},

'Customer Win': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Live)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['Press Release', 1, ''],
			['10gen.com Customer Rotator Entry', 1, '']
		]
},

'10gen.com Customer Rotator Entry': 
{ 
	'meta': ['Justin', ''],
},

'LinkedIn Group Post': 
{ 
	'meta': ['Francesca', ''],
},

'New Product / Service': 
{ 
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Brief Description', 1, ''],
			['Presentation (Live)', 1, '']
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['Press Release', 1, ''],
			['10gen.com Customer Rotator Entry', 1, '']
		]
}
};

$(document).ready(init);
function init() {
	$.each(content_types_db, function(key, value) {   				
		//generate top dropdown
		if (value.package != undefined) {
	     $('#types')
	         .append($("<option></option>")
	         .attr("value",key)
	         .text(key)); 
	     }

		//generate results table
		if (value.meta != undefined) {
		var new_tr = 
		$('<tr>').attr('data-ct',key)
		 		   .append('<td>' + key)
		 	      .append('<td class="q">' + '')
			      .append('<td>' + value.meta[0])
			      .append('<td>' + value.meta[1]);
		 $('#results').append(new_tr);
		}
	});

	//add event handler for dropdown change
	$('#types')
		.select2({})
		.on("change", function(e) { show_types(e) });

	//sort dropdown
	   $('#types').each(function() {         
	        // Sort all the options by text. I could easily sort these by val.
	        $(this).html($("option", $(this)).sort(function(a, b) {
	            return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
	        })); 
	    });

	//sort results
		var ct_trs = $('#results').find('tr[id!="header"]');
		for (var i = 0; i < ct_trs.length; i++) {
			  this_data = $(ct_trs[i]).attr('data-ct');
			  next_data = $(ct_trs[i]).next().attr('data-ct');

			  if (next_data && (this_data > next_data)) {
			  		$(ct_trs[i]).insertAfter($(ct_trs[i]).next());
			  		i = -1;
			  }
	   }
}

function show_types(e) {
	 var show_package = content_types_db[e.val].package;
	 $('.q').text('');
	 $('tr').attr('data-package',0);

	 for (var i = 0; i < show_package.length; i++)
	 {
	 	$('tr[data-ct="' + show_package[i][0] + '"]').attr('data-package',1);
	 	$('tr[data-ct="' + show_package[i][0] + '"]').show();
	 	$('tr[data-ct="' + show_package[i][0] + '"]').find('td').eq(1).text(show_package[i][1]);
	 }

	 $('tr#header').attr('data-package',1);
	 $('tr[data-package="0"]').hide();
}

function toggle_display() {
	if ($('#display_button').attr('data-toggle') == 'recommended')
	{
		 $('tr[data-package="0"]').show();
		 $('#display_button').attr('data-toggle','all').text('Showing All, Show Recommended');
	}
	else
	{
		 $('tr[data-package="0"]').hide();
		 $('#display_button').attr('data-toggle','recommended').text('Showing Recommended, Show All');
	}
}
