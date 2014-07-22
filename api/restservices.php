<?php 
/*THIS IS THE RESTSERVIES FOR THE FLipboard-game*/
	require 'vendor/autoload.php';
	$app = new Slim();
	$app->get('/players/', 'getPlayers');
	
	$app->run();
	
	function getConnection(){
		$dbhost = "127.0.0.1";
		$dbuser = "root";
		$dbpass = "sascha302";
		$dbname= "Flipboard";
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $dbh;
	}
	
	function getPlayers(){
		$sql = "select * from Players";
		try {
			$db = getConnection();
			$stmt = $db->prepare($sql);
			$stmt->exexute();
			$players = $stmt->fetchAll(PDO::FETCH_OBJ);
			echo '{"players":'.json_encode($players).'}';
		} catch(PDOException $e){
			echo '{"error":"can´t get players"}';
		}
	}
?>