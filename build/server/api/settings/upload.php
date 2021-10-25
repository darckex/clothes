<?php
// uploaded file to server and returns an array of information
function upload_file($inputName, $cms = false, $x = [])
{
	global $upload_directory;

	if (empty($_FILES[$inputName])) return '';
	$files = $_FILES[$inputName];
	if (empty($files['name']) or empty($files['name'][0])) {
		return false;
	}

	if ($cms) {
		$upload_directory = "../$upload_directory";
	}

	$y = [
		'multiple' => false, // for multiple or single upload
		'w_list' => ['png', 'svg', 'jpg', 'jpeg'], // white list
		'b_list' => [], // black list
		'limit' => false, // size limit in KB
	];

	$y = array_replace($y, $x);

	$ret = [];
	if ($y['multiple']) {
		foreach ($files['name'] as $k => $v) {
			$info = pathinfo($v);
			$save_name = microtime(true) . '.' . $info['extension'];
			$size = round(($files["size"][$k] / 1024), 1); // size in KB

			// Black list and white list check
			if ((!empty($y['b_list']) and array_search($info['extension'], $y['b_list']) !== false) or (!empty($y['w_list']) and array_search($info['extension'], $y['w_list']) === false)) {
				$ret[$k] = false;
				continue;
			}

			if ($size > $y['limit'] and $y['limit'] !== false) {
				continue;
			}

			if (move_uploaded_file($files['tmp_name'][$k], $upload_directory . $save_name)) {
				resize_image($upload_directory . $save_name);
				$ret[$k]['save_name'] = $save_name;
				$ret[$k]['name'] = $info['filename'];
			} else {
				$ret[$k] = false;
			}
		}
	} else {
		$info = pathinfo($files['name']);
		$save_name = microtime(true) . '.' . $info['extension'];
		$size = round($files['size'] / 1024, 1); // size in KB

		// Black list and white list check
		do {
			if ((!empty($y['b_list']) and array_search($info['extension'], $y['b_list']) !== false) or (!empty($y['w_list']) and array_search($info['extension'], $y['w_list']) === false)) {
				$ret = false;
				break;
			}

			if ($size > $y['limit'] and $y['limit'] !== false) {
				$ret = false;
				break;
			}

			if (move_uploaded_file($files['tmp_name'], $upload_directory . $save_name)) {
				resize_image($upload_directory . $save_name);
				$ret['save_name'] = $save_name;
				$ret['name'] = $info['filename'];
			} else {
				$ret = false;
			}
		} while (false);
	}

	return $ret;
}

function resize_image($file_name)
{
	$maxDim = 800;
	list($width, $height, $type, $attr) = getimagesize($file_name);
	if ($width > $maxDim || $height > $maxDim) {
		$target_filename = $file_name;
		$ratio = $width / $height;

		if ($ratio > 1) {
			$new_width = $maxDim;
			$new_height = $maxDim / $ratio;
		} else {
			$new_width = $maxDim * $ratio;
			$new_height = $maxDim;
		}


		$src = imagecreatefromstring(file_get_contents($file_name));
		$dst = imagecreatetruecolor($new_width, $new_height);
		imagecopyresampled($dst, $src, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
		imagedestroy($src);
		imagepng($dst, $target_filename); // adjust format as needed
		imagedestroy($dst);
	}
}
