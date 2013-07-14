
//{Content Name, {Promotable?, Owner, Notes}}

var content_types_db = {
'Blog Post': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 1, ''],
			['Facebook Status', 1, ''],
			['LinkedIn Group Post', 1, '']
		]
},

'Whitepaper': 
{ 
	'meta': ['Graham', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Webinar', 1, ''],
			['Infographic', 1, ''],
			['PPC Campaign', 1, ''],
			['Presentation (Video and Slides)', 1, '']
		]
},

'Webinar': 
{ 
	'meta': ['Carol', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Video', 1, ''],
			['Slides', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, '']
		]
},

'Presentation (Video and Slides)': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Presentation (Video and Slides)', 1, ''],
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
	'meta': ['Meg', ''],
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
	'meta': ['Sam Hallock', ''],
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
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, ''],
			['Front Page Banner', 1, '']
		]
},

'Company Announcement': 
{ 
	'meta': ['Sam Hallock', ''],
	'package': 
		[
			['Tweet', 3, ''],
			['Blog Post', 1, ''],
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['PPC Campaign', 1, ''],
			['Front Page Banner', 1, ''],
			['Press Release', 1, '']
		]
},

'Datasheet': 
{
	'meta': ['Graham', ''],
	'package': 
		[
			['Tweet', 1, ''],
		]
},

'Infographic': 
{ 
	'meta': ['Graham', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Facebook Status Update', 2, ''],
			['LinkedIn Group Post', 2, '']
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
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 10, ''],
			['Facebook Status', 10, ''],
			['LinkedIn Update', 10, ''],
			['LinkedIn Ad', 1, '']
		]
},

'External Event Participation': 
{ 
	'meta': ['Sam Kosko', ''],
	'package': 
		[
			['Tweet', 2, ''],
			['Blog Post', 1, ''],
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['LinkedIn Update', 3, '']
		]
},

'Sponsored Post': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['LinkedIn Group Post', 1, ''],
			['Tweet', 1]
		]
},

'User Group Meetup': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['LinkedIn Group Post', 1, ''],
			['Facebook Status Update', 1, ''],
			['Tweet', 2, '']
		]
},

'New User Group': 
{ 
	'meta': ['Francesca', ''],
	'package': 
		[
			['LinkedIn Group Post', 1, ''],
			['Facebook Status Update', 1, ''],
			['Tweet', 2, '']
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
			['Webinar', 1, 'Related to our partner\'s technology / service'],
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
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['Press Release', 1, ''],
			['Customer Rotator Entry', 1, '']
		]
},

'Customer Rotator Entry': 
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
			['Presentation (Video and Slides)', 1, ''],
			['LinkedIn Group Post', 1, ''],
			['Facebook Status', 1, ''],
			['Press Release', 1, ''],
			['Customer Rotator Entry', 1, '']
		]
}
};

$(document).ready(init);

function get_clip_text() {
			var copytext = '';
			$('#results').find('tr:visible').each(function(i,el){
				$(el).find('td').each(function(j,l){
					copytext = copytext + $(l).text() + '\t';	
				});
				copytext = copytext + '\n';
			});
			return copytext;
}

function init() {

	$('#jira-copy').bind('click',function(){
		var url = '';
		url = "https://jira.mongodb.org/secure/CreateIssueDetails!init.jspa?pid=10580&issuetype=3&priority=3&summary=";
		url = url + encodeURIComponent($('.select2-chosen').text());
		url = url + "&description=";
		url = url + encodeURIComponent(get_clip_text());
		url = url + "&reporter=";
		window.open(url);
	});

	$('#clip-copy').zclip({
		path: '/javascripts/vendor/ZeroClipboard.swf',
		copy: function() {
			var copytext = get_clip_text();
		}
	});

	$('#results-container').hide();
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
			      .append('<td>' + value.meta[0])
			      .append('<td>' + value.meta[1]);
		 $('#results').append(new_tr);
		}
	});

	//add event handler for dropdown change
	$('#types')
		.select2({placeholder: "Please Select..."})
		.on("change", function(e) { 
			show_types(e);
		});

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

function display_reset()
{

}

function show_types(e) {
	 var show_package = content_types_db[e.val].package;
	 $('#results-container').fadeOut(300,function(){

	 	 $('tr').attr('data-package',0);
		 $('tr#header').attr('data-package',1);

		 for (var i = 0; i < show_package.length; i++)
		 {
		 	$('tr[data-ct="' + show_package[i][0] + '"]').attr('data-package',1);
		 }

	 $('#display-button').attr('data-toggle','');
	 toggle_display();

	 });
}

function toggle_display() {
	$('#results-container').fadeOut(300,function(){

	if ($('#display-button').attr('data-toggle') == 'recommended')
	{
		 $('tr').show().removeClass('odd');
		 $('tr').filter(':odd').addClass('odd');
		 $('#display-button').attr('data-toggle','all').find('span').text(' See Recommended Only');
		 $('#btn-img').removeClass('icon-list-alt').addClass('icon-ok');
		 $('#results-container').fadeIn(300);
	}
	else
	{
		 $('tr').show().removeClass('odd');
	    $('tr[data-package="1"]').filter(':odd').addClass('odd');
	    $('tr[data-package="0"]').hide();
		 $('#display-button').attr('data-toggle','recommended').find('span').text(' See All');
		 $('#btn-img').removeClass('icon-ok').addClass('icon-list-alt');
		 $('#results-container').fadeIn(300);
	}
	});
}
