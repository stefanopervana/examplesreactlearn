import Link from 'next/link'

var data = [{ "When": "2 minutes ago",
			"who": "Jill Dupre",
			"description": "Created new account"
		},
		{
			"When": "1 hour ago",
			"who": "Lose White",
			"description": "Added fist chapter"
		},
		{
			"When": "2 hours ago",
			"who": "Jordan Whash",
			"description": "Created new account"
		},
		];

var rows = data.map(function(row){
	
})
var App = React.createClass({
	render: function(){
		return <div>
<h1>Recent Changes</h1>
		<table>
		<thead>
		<th>When</th>
		<th>Who</th>
		<th>Description</th>
		</thead>
		<tr>
		<td>2 minutes ago</td>
		<td>Jill Dupre</td>
		<td>Created new account</td>
		</tr>
		</table></div>
	}
});

export default () => (
  <div><App /></div>
)
