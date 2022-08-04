<?php
namespace App\Traits;
trait ApiResponser
{
	protected function success( int $code = 200, string $message = null,$data)
	{
		return response()->json([
			'status' => 'Success',
			'message' => $message,
			'data' => $data
		], $code);
	}

	protected function error(int $code,string $message = null, $data = [])
	{
		return response()->json([
			'status' => 'Error',
			'message' => $message,
			'data' => $data
		], $code);
	}

}