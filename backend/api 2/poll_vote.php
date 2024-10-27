<?php
$vote = $_REQUEST['vote'];

// 获取文本文件内容
$filename = "poll_result.txt";
$content = file($filename);

// 将内容放入数组中
$array = explode("||", $content[0]);
$yes = $array[0]; // 赞成票数
$no = $array[1]; // 反对票数

// 根据投票更新票数
if ($vote == 0) {
    $yes = $yes + 1;
}
if ($vote == 1) {
    $no = $no + 1;
}

// 将投票结果写入文本文件
$insertvote = $yes."||".$no;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
?>

<h2>Result:</h2>
<table>
<tr>
<td>Yes:</td>
<td>
    <img src="poll.gif" width='<?php echo(100 * round($yes / ($no + $yes), 2)); ?>' height='20'>
    <?php echo(100 * round($yes / ($no + $yes), 2)); ?>%
</td>
</tr>
<tr>
<td>No:</td>
<td>
    <img src="poll.gif" width='<?php echo(100 * round($no / ($no + $yes), 2)); ?>' height='20'>
    <?php echo(100 * round($no / ($no + $yes), 2)); ?>%
</td>
</tr>
</table>