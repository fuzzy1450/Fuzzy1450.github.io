<?php
	require 'rcon.php';
	require 'minecraft_string.php';
	
	$server = 'mc.toomanysnipers.tf';
	$port = 25575;
	$password = 'fuzzy1450';
	
	$command = isset($_GET['rcon']) && !empty($_GET['rcon']) ? $_GET['rcon'] : 'version';
	
	if ($command[0] == '/') {
		$command = substr($command, 1);
	}

	try
	{
		$rcon = new RCon($server, $port, $password);
		$return =  nl2br(minecraft_string($rcon->command($command)));
	}
	catch(Exception $e)
	{
		$return = $e->getMessage( );
	}
	if (isset($_GET['rcon'])) die($return);
?>
<!doctype html>
<html>
	<head>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="jquery.inputhistory.js"></script>
		<style>
			input { font-family: Consolas;font-size:110%; color:white;border: none;width: 100%; height: 30px; background: rgba(0,0,0,0.7); }
			body > div { background: url(http://guide2games.org/wp-content/uploads/2008/02/cs-source2.jpg); font-family: Consolas;color:white; padding: 0px; width: 800px; margin:10% auto; overflow: hidden;}
			body > div > div{ color:white;background-color:rgba(0,0,0,0.65); height: 400px; width: 100%;overflow-y: auto; }
		</style>
	</head>
		<div>
			<div id="console">
				<?php echo $return ?>
			</div>
			<input type="text"> 
		</div>
		<script>
			$('input').focus().inputHistory(function(value) {	 
				$('#console').html($('#console').html() + '<br><strong>&gt; ' + value + '</strong>');
				$.get('?rcon=' + encodeURIComponent(value), function(data){$('#console').html($('#console').html() + '<br>' + data).animate({ scrollTop: $('#console')[0].scrollHeight}, 800); });
			});
		</script>
	</body>
</html>