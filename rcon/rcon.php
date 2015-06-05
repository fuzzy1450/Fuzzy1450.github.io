<?php
/* 
 * Source RCON
 * Copyright (c) 2014, Alex Duchesne <alex@alexou.net>.
 *
 * Licensed under the MIT License:
 * 	http://opensource.org/licenses/MIT
 */

class Rcon {
	
	private $socket;
	private $auth = false;
	private $RequestId = 0;
	
	const SERVERDATA_EXECCOMMAND = 2;
	const SERVERDATA_AUTH = 3;  
	const SERVERDATA_RESPONSE_VALUE = 0;  
	
	
	
	public function __construct($host, $port, $password, $timeout = 2)
	{
		$this->socket = @fsockopen($host, $port, $errno, $errstr, $timeout);
		
		if (!$this->socket) {
			throw new exception('Erreur de socket: '. $errstr);
		}
		
		$this->write(self::SERVERDATA_AUTH, $password); //Auth
		$buffer = $this->read();
			
		$request = $this->GetLong($buffer);
		$code		= $this->GetLong($buffer);
		
		if ($request == -1 || $code != 2) {
			throw new exception('RCON authorization failed.');
		}
		
		$this->auth = true;
	
		return true;
	}
	
	
	public function command($command)
	{
		if (!$this->auth || !$this->socket) {
			throw new exception('Class is not ready. Make sure you are connected and authenticated.');
		}
		
		$this->write(self::SERVERDATA_EXECCOMMAND, $command);  //Command
		$buffer = $this->read();
		
		$request = $this->GetLong($buffer);
		$code		= $this->GetLong($buffer);
		
		if ($code != self::SERVERDATA_RESPONSE_VALUE) {
			return false;
		}
		
		return $buffer;
	}
	
	
	private function write($type, $string = '')
	{
		$packet = pack('VV', ++$this->RequestId, $type) . $string . "\x00\x00\x00";
		$packet = pack('V', strlen($packet)) . $packet;
		
		return fwrite($this->socket, $packet);
	}
	
	
	private function read()
	{
		$buffer = fread($this->socket, 1500);
		
		$size = $this->GetLong($buffer);

		if (strlen($buffer) != $size) {
			throw new exception('Received incomplete packet');
		}
		
		return $buffer;
	}
	

	private function getLong(&$string)
	{
		$long = unpack('l', substr($string, 0, 4));
		$string = substr($string, 4);
		
		return $long[1];
	}
}